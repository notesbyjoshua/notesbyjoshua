import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { canTopicEditPath } from './editorTopics';

// These are PUBLIC values (safe to ship to the browser): the anon key only
// grants access allowed by Row-Level Security policies, and it already appears
// in the client bundle on every page load. Env vars override the committed
// defaults, so any host works without extra configuration.
// `||` (not `??`) so an empty-string env var also falls back to the default.
const url = import.meta.env.PUBLIC_SUPABASE_URL || 'https://geqwjrxdbalaviusteeo.supabase.co';
const anonKey =
	import.meta.env.PUBLIC_SUPABASE_ANON_KEY ||
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlcXdqcnhkYmFsYXZpdXN0ZWVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyMzY5MzYsImV4cCI6MjA5NzgxMjkzNn0.YGgu5YWMWFweq92xPpiA1hwe4dcaeh0JdVl4fgDOWO4';

// Public defaults, exported for code that calls Edge Functions with a raw fetch
// (e.g. the FRQ grader): the `/functions/v1/` gateway wants the anon key as an
// `apikey` header even when the function itself sets verify_jwt = false.
export const SUPABASE_ANON_KEY = anonKey;

/** Returns the browser Supabase client, or null if env vars aren't configured.
 *
 * Cached on globalThis so every component script (header, account, dashboard,
 * admin…) shares ONE client instance — otherwise each gets its own auth state
 * and the header can miss the session ("stuck on Sign in"). */
export function getSupabase(): SupabaseClient | null {
	if (!url || !anonKey) {
		console.warn('Supabase env vars missing; auth features disabled.');
		return null;
	}
	const g = globalThis as unknown as { __notesSupabase?: SupabaseClient };
	if (!g.__notesSupabase) {
		g.__notesSupabase = createClient(url, anonKey, {
			auth: { persistSession: true, autoRefreshToken: true, storageKey: 'notes-auth' },
		});
	}
	return g.__notesSupabase;
}

/** A minimal user shape — pass `session.user` from an onAuthStateChange callback
 * so we don't call an auth method (which can deadlock) inside that callback. */
export type SessionUser = { id: string; email?: string | null };

/** Resolve the signed-in user from the restored session, reliably and once.
 *
 * Safe to call at page startup (it is NOT inside an onAuthStateChange callback,
 * so the auth-lock deadlock doesn't apply). getSession() reads/refreshes the
 * persisted token directly, so gates don't depend on an INITIAL_SESSION event
 * arriving in time — that timing race was making real admins fall through to a
 * blanket "denied". Returns null only when genuinely signed out. */
export async function getCurrentUser(): Promise<SessionUser | null> {
	const sb = getSupabase();
	if (!sb) return null;
	try {
		const { data } = await sb.auth.getSession();
		if (data.session?.user) return data.session.user;
	} catch {
		/* fall through to getUser */
	}
	try {
		const { data } = await sb.auth.getUser();
		return data.user ?? null;
	} catch {
		return null;
	}
}

export type UserRole = 'visitor' | 'writer' | 'admin';

/** The current user's role ('visitor' | 'writer' | 'admin'), or null if signed out. */
export async function getRole(user?: SessionUser): Promise<UserRole | null> {
	const profile = await getProfile(user);
	return profile ? profile.role : null;
}

export interface Profile {
	role: UserRole;
	display_name: string | null;
	email: string | null;
	created_at: string | null;
	avatar_url: string | null;
}

/** The current user's profile row.
 *
 * Pass `session.user` (from an onAuthStateChange callback) to avoid calling
 * `auth.getUser()` inside that callback — doing so can deadlock on Supabase's
 * auth lock (hangs the page). Without an argument it resolves the user itself.
 *
 * Returns `null` only when genuinely signed out. THROWS on a transient read
 * failure (network blip, or RLS briefly seeing no row during a token refresh)
 * so callers keep the last-known state instead of mistaking it for a visitor. */
export async function getProfile(user?: SessionUser): Promise<Profile | null> {
	const sb = getSupabase();
	if (!sb) return null;
	if (!user) {
		const { data } = await sb.auth.getUser();
		user = data.user ?? undefined;
	}
	if (!user) return null;
	// Core columns only — these always exist, so role/auth reads never break.
	const { data, error } = await sb
		.from('profiles')
		.select('role, display_name, email, created_at')
		.eq('id', user.id)
		.maybeSingle();
	if (error) throw error;
	// A signed-in user always has a profile row (created by a trigger). No row
	// here means a transient/permissions hiccup — treat it as such, not visitor.
	if (!data) throw new Error('profile row not readable (transient)');
	// avatar_url is best-effort: the column may not exist until schema.sql is
	// re-run, and a missing column must not break the profile (and role) read.
	let avatar_url: string | null = null;
	const { data: avatarRow, error: avatarErr } = await sb
		.from('profiles')
		.select('avatar_url')
		.eq('id', user.id)
		.maybeSingle();
	if (!avatarErr) avatar_url = (avatarRow as any)?.avatar_url ?? null;
	return {
		role: (data.role as UserRole) ?? 'visitor',
		display_name: data.display_name ?? null,
		email: data.email ?? user.email ?? null,
		created_at: data.created_at ?? null,
		avatar_url,
	};
}

export async function getWriterTopicKeys(user?: SessionUser): Promise<string[]> {
	const sb = getSupabase();
	if (!sb) return [];
	if (!user) {
		const { data } = await sb.auth.getUser();
		user = data.user ?? undefined;
	}
	if (!user) return [];
	const { data, error } = await sb
		.from('writer_topic_permissions')
		.select('topic_key')
		.eq('user_id', user.id);
	if (error) throw error;
	return (data ?? []).map((row: any) => String(row.topic_key));
}

export async function canEditNotePath(path: string, user?: SessionUser): Promise<boolean> {
	const role = await getRole(user);
	if (role === 'admin') return true;
	if (role !== 'writer') return false;
	const topicKeys = await getWriterTopicKeys(user);
	return canTopicEditPath(topicKeys, path);
}
