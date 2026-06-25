// Supabase Edge Function: commit-note
// -----------------------------------------------------------------------------
// Backs the in-browser note editor at /admin/edit. The browser never sees the
// GitHub token — it lives here as a secret. Every call is verified to come from
// a signed-in admin or assigned writer (via the Supabase session JWT the editor
// sends), and every WRITE additionally requires the secret edit password (a
// second factor on top of the login).
//
// Two actions (POST JSON body):
//   { action: "read",  path }                  -> { content }           (admin/writer)
//   { action: "write", path, content, editPassword, message? } -> { ok, commit } (admin/writer + password)
//
// `path` is the file's path from the REPO ROOT and must live under
// astro/src/content/docs/ and end in .md — so the editor can only ever touch
// note source, never workflows, code, or secrets.
//
// Runs on Deno. Secrets (set with `supabase secrets set ...`):
//   GITHUB_TOKEN    - fine-grained PAT for this repo with Contents: Read & Write
//   EDIT_PASSWORD   - the second-factor passphrase required to save
//   GITHUB_REPO     - "owner/repo"  (default: notesbyjoshua/notesbyjoshua.github.io)
//   GITHUB_BRANCH   - branch to commit to (default: main)
// Auto-injected by Supabase (no need to set):
//   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
//
// JWT verification is disabled for this function (see config.toml) because we
// do our own auth here — we must read the user id from the token and confirm
// role/topic permissions, which the platform's generic JWT check can't do.
//
// See ../README.md for full setup steps.

const GITHUB_API = "https://api.github.com";
const REPO = Deno.env.get("GITHUB_REPO") ?? "notesbyjoshua/notesbyjoshua.github.io";
const BRANCH = Deno.env.get("GITHUB_BRANCH") ?? "main";

// Only note source under here may be edited. Anchored + ".." rejected below.
const ALLOWED_PREFIX = "astro/src/content/docs/";

const EDITABLE_TOPICS = [
  { key: "ap-biology", prefixes: ["astro/src/content/docs/notes/ap/biology.md", "astro/src/content/docs/notes/ap/biology/"] },
  { key: "ap-calculus", prefixes: ["astro/src/content/docs/notes/ap/calculus/"] },
  { key: "ap-chemistry", prefixes: ["astro/src/content/docs/notes/ap/chem/"] },
  { key: "ap-physics-c-em", prefixes: ["astro/src/content/docs/notes/ap/ap-physics-c-em/"] },
  { key: "ap-physics-c-mechanics", prefixes: ["astro/src/content/docs/notes/ap/ap-physics-c-mechanics/"] },
  { key: "ap-precalculus", prefixes: ["astro/src/content/docs/notes/ap/precalc/"] },
  { key: "ap-statistics", prefixes: ["astro/src/content/docs/notes/ap/stats/"] },
  { key: "chemistry", prefixes: ["astro/src/content/docs/notes/chemistry/"] },
  { key: "math", prefixes: ["astro/src/content/docs/notes/math/"] },
  { key: "physics", prefixes: ["astro/src/content/docs/notes/physics/"] },
];

// Origins allowed to call this function (the live site + local dev).
const ALLOWED_ORIGINS = new Set([
  "https://notesbyjoshua.github.io",
  "http://localhost:4321",
  "http://localhost:4322",
  "http://localhost:3000",
]);

function corsHeaders(origin: string | null): Record<string, string> {
  const allow = origin && ALLOWED_ORIGINS.has(origin) ? origin : "https://notesbyjoshua.github.io";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
}

function json(body: unknown, status: number, origin: string | null): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
  });
}

// UTF-8 <-> base64 (GitHub's contents API speaks base64).
function encodeBase64(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin);
}
function decodeBase64(b64: string): string {
  const bin = atob(b64.replace(/\s/g, ""));
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

// Constant-time string compare so a wrong edit password can't be timed out.
function safeEqual(a: string, b: string): boolean {
  const ab = new TextEncoder().encode(a);
  const bb = new TextEncoder().encode(b);
  if (ab.length !== bb.length) return false;
  let diff = 0;
  for (let i = 0; i < ab.length; i++) diff |= ab[i] ^ bb[i];
  return diff === 0;
}

type Editor = { userId: string; role: "admin" | "writer" };

function canTopicEditPath(topicKeys: string[], path: string): boolean {
  const allowed = new Set(topicKeys);
  return EDITABLE_TOPICS.some(
    (topic) => allowed.has(topic.key) && topic.prefixes.some((prefix) => path.startsWith(prefix)),
  );
}

// Resolve the caller from their Supabase session JWT, then confirm editor role.
// Admins can edit any valid note path. Writers can edit only assigned topics.
async function resolveEditor(jwt: string, path: string): Promise<Editor | null> {
  const base = Deno.env.get("SUPABASE_URL");
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
  if (!base || !jwt) return null;

  // 1. Who is this token? (apikey = any valid project key; bearer identifies user)
  const userRes = await fetch(`${base}/auth/v1/user`, {
    headers: { apikey: serviceKey, Authorization: `Bearer ${jwt}` },
  });
  if (!userRes.ok) return null;
  const user = await userRes.json().catch(() => null);
  const userId: string | undefined = user?.id;
  if (!userId) return null;

  // 2. Is that user an admin or writer? (service role bypasses RLS here)
  const profRes = await fetch(
    `${base}/rest/v1/profiles?id=eq.${userId}&select=role`,
    { headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}` } },
  );
  const rows = await profRes.json().catch(() => []);
  const role = Array.isArray(rows) && rows[0] ? rows[0].role : null;
  if (role === "admin") return { userId, role };
  if (role !== "writer") return null;

  const permsRes = await fetch(
    `${base}/rest/v1/writer_topic_permissions?user_id=eq.${userId}&select=topic_key`,
    { headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}` } },
  );
  if (!permsRes.ok) return null;
  const perms = await permsRes.json().catch(() => []);
  const topicKeys = Array.isArray(perms) ? perms.map((row) => String(row.topic_key)) : [];
  return canTopicEditPath(topicKeys, path) ? { userId, role } : null;
}

function validatePath(path: unknown): string | null {
  if (typeof path !== "string") return null;
  const p = path.trim();
  if (p.includes("..") || p.startsWith("/")) return null;
  if (!p.startsWith(ALLOWED_PREFIX)) return null;
  if (!p.endsWith(".md")) return null;
  return p;
}

async function githubGet(path: string): Promise<{ content: string; sha: string } | null> {
  const token = Deno.env.get("GITHUB_TOKEN") ?? "";
  const url = `${GITHUB_API}/repos/${REPO}/contents/${encodeURIComponent(path).replace(/%2F/g, "/")}?ref=${BRANCH}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "notesbyjoshua-commit-note",
    },
  });
  if (res.status === 404) return null; // file doesn't exist yet
  if (!res.ok) throw new Error(`GitHub GET ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return { content: decodeBase64(data.content ?? ""), sha: data.sha };
}

async function githubPut(path: string, content: string, message: string, sha?: string) {
  const token = Deno.env.get("GITHUB_TOKEN") ?? "";
  const url = `${GITHUB_API}/repos/${REPO}/contents/${encodeURIComponent(path).replace(/%2F/g, "/")}`;
  const body: Record<string, unknown> = {
    message,
    content: encodeBase64(content),
    branch: BRANCH,
  };
  if (sha) body.sha = sha; // omit when creating a new file
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "notesbyjoshua-commit-note",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`GitHub PUT ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data?.commit?.html_url ?? null;
}

Deno.serve(async (req) => {
  const origin = req.headers.get("Origin");

  // CORS preflight.
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders(origin) });
  }
  if (req.method !== "POST") {
    return json({ error: "method not allowed" }, 405, origin);
  }

  // 1. Parse request.
  let payload: Record<string, any>;
  try {
    payload = await req.json();
  } catch {
    return json({ error: "bad request" }, 400, origin);
  }

  const action = payload.action;
  const path = validatePath(payload.path);
  if (!path) return json({ error: "invalid path (must be a .md file under astro/src/content/docs/)" }, 400, origin);

  // 2. Authenticate: must be a signed-in admin or a writer assigned to this path.
  const jwt = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "");
  const editor = await resolveEditor(jwt, path).catch(() => null);
  if (!editor) return json({ error: "not allowed to edit this note" }, 403, origin);

  try {
    if (action === "read") {
      const file = await githubGet(path);
      return json({ content: file?.content ?? "", exists: !!file }, 200, origin);
    }

    if (action === "write") {
      // Second factor: the edit password.
      const expected = Deno.env.get("EDIT_PASSWORD") ?? "";
      if (!expected || !safeEqual(String(payload.editPassword ?? ""), expected)) {
        return json({ error: "wrong edit password" }, 403, origin);
      }
      if (typeof payload.content !== "string") {
        return json({ error: "missing content" }, 400, origin);
      }
      // Fetch the current sha so the update isn't rejected as a conflict.
      const existing = await githubGet(path);
      const message = String(payload.message || `Edit ${path.replace(ALLOWED_PREFIX, "")} via web editor`);
      const commitUrl = await githubPut(path, payload.content, message, existing?.sha);
      return json({ ok: true, commit: commitUrl }, 200, origin);
    }

    return json({ error: "unknown action" }, 400, origin);
  } catch (err) {
    console.error("[commit-note] failed:", err);
    return json({ error: String(err) }, 500, origin);
  }
});
