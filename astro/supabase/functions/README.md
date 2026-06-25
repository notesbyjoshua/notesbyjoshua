# Supabase Edge Functions

## `feedback-to-linear`

Turns site feedback into Linear tickets. A Database Webhook fires on every
`INSERT` into `public.feedback`; the function opens a Linear issue for every
category **except `praise`**, then writes the ticket URL back onto the feedback
row (shown in `/admin/feedback/`).

```
FeedbackForm → feedback table → DB Webhook → this function → Linear issue
```

---

### 1. Apply the schema change

The feedback table gained `category`, `page_url`, `page_title`, and
`linear_issue_url` columns. Re-run `supabase/schema.sql` in the Supabase
dashboard (SQL Editor → New query → paste → Run). It's idempotent.

### 2. Create the labels in Linear

In your Linear team, create these labels (Settings → Team → Labels). The
function matches them **by name** (case-insensitive), so the names must match
exactly — no IDs to copy:

| Label            | Used for                          |
| ---------------- | --------------------------------- |
| `Website feedback` | every ticket this creates (umbrella) |
| `Note to add`    | category "A note or topic to add" |
| `Correction`     | category "A correction / fix"     |
| `Bug`            | category "A bug with the site"    |
| `Question`       | category "A question"             |

A label that doesn't exist is simply skipped (the ticket is still created), so
you can start with just `Website feedback` and add the rest later. `Bug`
tickets are also created at **High** priority.

### 3. Get your Linear API key + team ID

- **API key:** Linear → Settings → Security & access → **Personal API keys** →
  *New key*. Copy it (starts with `lin_api_...`).
- **Team ID:** the function needs the team's UUID (not the short key like `ENG`).
  Run this in Linear's API explorer (https://studio.apollographql.com, endpoint
  `https://api.linear.app/graphql`, header `Authorization: <your key>`), or with curl:

  ```bash
  curl -s https://api.linear.app/graphql \
    -H "Authorization: <YOUR_LINEAR_API_KEY>" \
    -H "Content-Type: application/json" \
    -d '{"query":"{ teams { nodes { id name } } }"}'
  ```

  Use the `id` (a UUID) of the team you want tickets in.

### 4. Pick a webhook secret

Any long random string — it just has to match between the webhook and the
function. Generate one:

```bash
openssl rand -hex 24
```

### 5. Deploy the function

You don't have the Supabase CLI yet. Either:

**Option A — CLI (recommended):**

```bash
brew install supabase/tap/supabase
supabase login
supabase link --project-ref geqwjrxdbalaviusteeo     # this project
supabase secrets set \
  LINEAR_API_KEY=lin_api_xxx \
  LINEAR_TEAM_ID=<team-uuid> \
  WEBHOOK_SECRET=<your-secret>
supabase functions deploy feedback-to-linear --no-verify-jwt
```

`--no-verify-jwt` is required: the DB webhook calls the function with the shared
secret header, not a user JWT. (Authentication is still enforced — the function
rejects any request without the correct `x-webhook-secret`.)

**Option B — Dashboard:** Edge Functions → *Deploy a new function* → name it
`feedback-to-linear` → paste the contents of `feedback-to-linear/index.ts`. Then
add the three secrets under Edge Functions → *Manage secrets*. Disable "Verify
JWT" for this function.

### 6. Create the Database Webhook

Supabase dashboard → **Database → Webhooks → Create a new hook**:

- **Table:** `public.feedback`
- **Events:** `Insert`
- **Type:** Supabase Edge Functions → `feedback-to-linear`
  (or HTTP Request `POST` to `https://geqwjrxdbalaviusteeo.functions.supabase.co/feedback-to-linear`)
- **HTTP Headers:** add `x-webhook-secret` = `<your-secret>` (same as step 4)

### 7. Test

Submit feedback at `/feedback/` (try a non-praise category). Within a few
seconds a ticket should appear in Linear, and the submission in
`/admin/feedback/` should show a "View Linear ticket →" link. If nothing
happens, check **Edge Functions → Logs** for the function and the webhook's
delivery log.

---

### Local development

```bash
supabase functions serve feedback-to-linear --no-verify-jwt --env-file ./supabase/.env.local
```

with a `supabase/.env.local` holding `LINEAR_API_KEY`, `LINEAR_TEAM_ID`,
`WEBHOOK_SECRET` (git-ignored — never commit real keys).

---

## `commit-note`

Backs the in-browser note editor at **`/admin/edit`**. An admin, or a writer
assigned to that note's subject, picks a note, edits its markdown with a live
preview, and clicks save — the function commits the file to GitHub, which
triggers the normal Pages rebuild.

```
/admin/edit → this function → GitHub commit → deploy.yml → live site (~1–2 min)
```

**Security model (two factors):**

1. The browser sends the user's Supabase session JWT (attached automatically by
   `supabase.functions.invoke`). The function verifies it and confirms either
   `profiles.role = 'admin'`, or `profiles.role = 'writer'` plus a matching row
   in `writer_topic_permissions` for that note's subject.
2. **Saving** additionally requires the secret **edit password** (`EDIT_PASSWORD`).
   This is the "password system" — a second factor on top of the login, so a
   stolen browser session still can't publish edits.

The GitHub token **never** reaches the browser; it lives only as a function
secret. The function also refuses any path outside `astro/src/content/docs/` or
not ending in `.md`, so it can only ever touch note source.

### 1. Create a GitHub token

GitHub → Settings → Developer settings → **Fine-grained personal access tokens**
→ *Generate new token*:

- **Repository access:** Only select repositories → `notesbyjoshua/notesbyjoshua.github.io`
- **Permissions:** Repository permissions → **Contents: Read and write**
- **Expiration:** your choice (max 1 year — set a calendar reminder to rotate it;
  when it expires, saving fails with a GitHub 401 and you just mint a new one).

Copy the token (starts with `github_pat_...`).

### 2. Pick an edit password

Any passphrase you'll remember — this is what you'll type to save.

### 3. Set the secrets and deploy

```bash
supabase secrets set \
  GITHUB_TOKEN=github_pat_xxx \
  EDIT_PASSWORD='your edit passphrase' \
  GITHUB_REPO=notesbyjoshua/notesbyjoshua.github.io \
  GITHUB_BRANCH=main
supabase functions deploy commit-note --no-verify-jwt
```

`--no-verify-jwt` is required because the function does its own auth (it must
read the user id from the JWT and check admin/writer permissions).
`SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are injected automatically —
don't set them.

**Dashboard alternative:** Edge Functions → *Deploy a new function* → name it
`commit-note` → paste `commit-note/index.ts` → disable "Verify JWT" → add the
four secrets under *Manage secrets*.

### 4. Use it

Sign in as an admin, open **Account menu → Admin**, set a user to `writer`, and
check the subjects they can edit. Writers can then open **Account menu → Write**
(or go to `/admin/edit`). Pick an allowed note, edit, enter the edit password,
and save. The live page updates after the GitHub Actions rebuild (~1–2 min);
watch progress under the repo's **Actions** tab.

> Edits land directly on `main`, exactly like editing the file locally — so the
> same notes linter (`scripts/check_notes.py`) runs in CI. If a save breaks the
> linter, the **build fails** and the site keeps the last good version until you
> fix it. Keep the preview in mind for math/theorem-box formatting.

### Local development

```bash
supabase functions serve commit-note --no-verify-jwt --env-file ./supabase/.env.local
```

with `GITHUB_TOKEN`, `EDIT_PASSWORD`, `GITHUB_REPO`, `GITHUB_BRANCH` in
`supabase/.env.local` (git-ignored). The dev site runs on `http://localhost:4321`,
which is already in the function's CORS allow-list.

---

## `grade-frq`

Backs the in-note **FRQ grader**. On any note page, each `:::frq` block renders a
"Grade my answer" button; clicking it sends the student's answer to this
function, which grades it with an LLM (via OpenRouter) against the question's
model solution and returns per-part feedback.

```
:::frq block → "Grade my answer" → this function → OpenRouter → feedback
```

The browser sends **only** the student's answer + the FRQ id. The question and
model solution are looked up server-side by id in the public FRQ manifest
(`/generated/frq-manifest.json`, regenerated on every site build), so a student
can't tamper with the rubric. The OpenRouter key lives here as a secret and
never reaches the browser. The student answer is treated as untrusted text (the
grading prompt is instructed not to follow instructions inside it).

### 1. Get an OpenRouter API key

- Create a free account at [openrouter.ai](https://openrouter.ai).
- Dashboard → **Keys** → *Create API key*. Name it `notes-frq-grader`. Copy it
  (shown once).
- Free tier: ~50 grades/day. Add **$10** of credits to raise it to ~1,000/day
  (only needed once a class is actually using it).

### 2. Set the function secret

From `astro/` (the Supabase project lives here):

```bash
supabase secrets set OPENROUTER_API_KEY=<your-openrouter-key>
```

That's the only required secret. Optional overrides (all have sensible
defaults): `OPENROUTER_MODEL` (default `openrouter/free`), `OPENROUTER_SITE_URL`,
`OPENROUTER_APP_TITLE`, `FRQ_MANIFEST_URL`.

### 3. Deploy the function

```bash
supabase functions deploy grade-frq
```

`config.toml` already sets `verify_jwt = false` for it (students aren't logged
in; the function guards itself with an Origin allowlist + size/length caps).

The function URL is:

```
https://<your-project-ref>.supabase.co/functions/v1/grade-frq
```

(`<your-project-ref>` is the `project_id` in `config.toml`.)

### 4. Point the site at the function

The grader URL is injected at build time from a **GitHub Actions repo variable**
(not a secret — it's a public URL). Set it once:

- Repo → Settings → Secrets and variables → **Actions** → **Variables** →
  *New repository variable*
  - Name: `PUBLIC_FRQ_GRADER_URL`
  - Value: `https://<your-project-ref>.supabase.co/functions/v1/grade-frq`

Then re-run the **Deploy** workflow (or push any commit). Until this variable is
set, the site builds fine and FRQ questions render normally — they just won't
show a Grade button.

### 5. Verify

After the deploy finishes:

- Open a chem unit page (e.g. `/notes/ap/chem/acidbase/`), scroll to an FRQ,
  type an answer, click **Grade my answer** → feedback appears in a few seconds.
- CORS / reachability check from a terminal:

  ```bash
  curl -i -X OPTIONS "https://<your-project-ref>.supabase.co/functions/v1/grade-frq" \
    -H "Origin: https://notesbyjoshua.github.io" \
    -H "Access-Control-Request-Method: POST"
  # expect: access-control-allow-origin: https://notesbyjoshua.github.io
  ```

### Adding FRQs to a note

Wrap a question + its solution in an FRQ box (4 colons outside, 3 inside).
The `id` must be unique across the whole site:

```markdown
::::frq{id=chem-acidbase-1}
7. A 0.100 M acetic acid solution has $$K_a = 1.8\times10^{-5}$$.

   $$(A)$$ Write the ionization equation.
   $$(B)$$ Calculate the pH.

:::solution
$$(A)$$ … model solution …
:::
::::
```

Non-graded problems use `::::problem` (same shape, no `id`, no Grade button —
just a "Show solution" toggle). `npm run frq:manifest` (run automatically by
`prebuild`) picks up new FRQs and rebuilds the manifest.

### Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| No Grade button on FRQs | `PUBLIC_FRQ_GRADER_URL` not set at build time | Step 4, then re-deploy |
| "grader is not configured" | `OPENROUTER_API_KEY` secret missing | Step 2, redeploy function |
| "Daily grading limit reached" (429) | Hit OpenRouter free quota | Add $10 credits on OpenRouter |
| "question is not registered" | FRQ `id` not in the manifest | Rebuild site (manifest regenerates on build) |
| CORS error in console | Origin not in the allowlist | Add it to `ALLOWED_ORIGINS` in `grade-frq/index.ts`, redeploy |
