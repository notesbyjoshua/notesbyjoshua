-- Notes by Joshua — auth foundation schema.
-- Run this in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.
-- Safe to re-run (idempotent).

-- One profile row per auth user, holding their role.
create table if not exists public.profiles (
  id           uuid primary key references auth.users (id) on delete cascade,
  email        text,
  display_name text,
  role         text not null default 'visitor' check (role in ('visitor', 'writer', 'admin')),
  created_at   timestamptz not null default now()
);

-- If the table already existed, make sure the columns are present.
alter table public.profiles add column if not exists display_name text;
alter table public.profiles add column if not exists avatar_url text;

-- Existing projects may still have the original two-role check constraint.
alter table public.profiles drop constraint if exists profiles_role_check;
alter table public.profiles add constraint profiles_role_check
  check (role in ('visitor', 'writer', 'admin'));

alter table public.profiles enable row level security;

-- Is the current request from an admin? SECURITY DEFINER reads the table
-- without triggering RLS recursion.
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- Read: a user sees their own profile; admins see everyone's.
drop policy if exists "read own or admin" on public.profiles;
create policy "read own or admin" on public.profiles
  for select using (auth.uid() = id or public.is_admin());

-- Update: a user may edit their own profile row.
drop policy if exists "update own profile" on public.profiles;
create policy "update own profile" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

-- Admins may update other profiles, including assigning writer/admin roles.
drop policy if exists "admins update profiles" on public.profiles;
create policy "admins update profiles" on public.profiles
  for update using (public.is_admin()) with check (public.is_admin());

-- Guard: only admins may change the `role` column (blocks self-promotion).
create or replace function public.prevent_role_change()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  -- Block role changes from authenticated end-users who aren't admins.
  -- auth.uid() is null for service-role / SQL Editor calls, so the first admin
  -- can still be bootstrapped there.
  if new.role is distinct from old.role
     and auth.uid() is not null
     and not public.is_admin() then
    raise exception 'only admins can change roles';
  end if;
  return new;
end;
$$;

drop trigger if exists guard_role on public.profiles;
create trigger guard_role
  before update on public.profiles
  for each row execute function public.prevent_role_change();

-- Auto-create a profile when someone signs up.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- To make yourself admin after signing up, run (with your email):
--   update public.profiles set role = 'admin' where email = 'you@example.com';


-- ---------------------------------------------------------------------------
-- Writer note-editing permissions.
-- ---------------------------------------------------------------------------
create table if not exists public.writer_topic_permissions (
  user_id    uuid not null references auth.users (id) on delete cascade,
  topic_key  text not null,
  created_at timestamptz not null default now(),
  primary key (user_id, topic_key)
);

alter table public.writer_topic_permissions enable row level security;

-- Writers can see their own allowed topics; admins can manage everyone.
drop policy if exists "read own writer topics or admin" on public.writer_topic_permissions;
create policy "read own writer topics or admin" on public.writer_topic_permissions
  for select using (auth.uid() = user_id or public.is_admin());

drop policy if exists "admins manage writer topics" on public.writer_topic_permissions;
create policy "admins manage writer topics" on public.writer_topic_permissions
  for all using (public.is_admin()) with check (public.is_admin());


-- ---------------------------------------------------------------------------
-- Per-user reading progress: one row per note a user has marked as read.
-- ---------------------------------------------------------------------------
create table if not exists public.read_notes (
  user_id uuid not null references auth.users (id) on delete cascade,
  slug    text not null,                       -- note route, e.g. /notes/ap/stats/univardata/
  read_at timestamptz not null default now(),
  primary key (user_id, slug)
);

alter table public.read_notes enable row level security;

-- Each user can only see and modify their own reading progress.
drop policy if exists "own read_notes" on public.read_notes;
create policy "own read_notes" on public.read_notes
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);


-- ---------------------------------------------------------------------------
-- Per-user bookmarks: one row per note a user has saved to revisit.
-- ---------------------------------------------------------------------------
create table if not exists public.bookmarks (
  user_id    uuid not null references auth.users (id) on delete cascade,
  slug       text not null,                       -- note route, e.g. /notes/ap/chem/kinetics/
  title      text,                                -- page title captured when bookmarked
  created_at timestamptz not null default now(),
  primary key (user_id, slug)
);

alter table public.bookmarks enable row level security;

-- Each user can only see and modify their own bookmarks.
drop policy if exists "own bookmarks" on public.bookmarks;
create policy "own bookmarks" on public.bookmarks
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);


-- ---------------------------------------------------------------------------
-- Feedback: anyone may submit; only admins may read.
-- ---------------------------------------------------------------------------
create table if not exists public.feedback (
  id         uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  message    text not null,
  name       text,
  user_id    uuid references auth.users (id) on delete set null
);

-- New columns (added after the fact, so guarded for existing projects).
-- category: what kind of feedback this is. Drives whether a Linear ticket is
-- created (everything except 'praise') and which Linear label it gets.
alter table public.feedback add column if not exists category text;
-- page_url / page_title: which note the feedback is about, when submitted from a
-- per-note "Report an issue" link. Null for the general feedback page.
alter table public.feedback add column if not exists page_url text;
alter table public.feedback add column if not exists page_title text;
-- linear_issue_url: written back by the feedback-to-linear Edge Function once a
-- ticket is created, so the admin viewer can link straight to it.
alter table public.feedback add column if not exists linear_issue_url text;

-- Constrain category to the known set (drop first so re-runs can widen it).
alter table public.feedback drop constraint if exists feedback_category_check;
alter table public.feedback add constraint feedback_category_check
  check (category is null or category in ('note-to-add', 'correction', 'bug', 'question', 'praise'));

alter table public.feedback enable row level security;

drop policy if exists "anyone can submit feedback" on public.feedback;
create policy "anyone can submit feedback" on public.feedback
  for insert with check (true);

drop policy if exists "admins read feedback" on public.feedback;
create policy "admins read feedback" on public.feedback
  for select using (public.is_admin());


-- ---------------------------------------------------------------------------
-- Profile-picture storage lives in a SEPARATE file: supabase/storage.sql.
-- It is kept apart because creating policies on storage.objects can fail with
-- "must be owner of table objects" depending on the project, and the SQL editor
-- runs a script as ONE transaction — so a failure there would roll back this
-- whole schema. Run storage.sql on its own (or set storage up in the dashboard).
-- ---------------------------------------------------------------------------
