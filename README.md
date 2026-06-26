# Notes by Joshua

Free study notes for AP courses and math/physics/chemistry competitions.
Live at **https://notesbyjoshua.github.io**.

## Stack

- **[Astro](https://astro.build) + [Starlight](https://starlight.astro.build)** — static site, in `astro/`
- **Math:** KaTeX (`$$…$$` inline/display)
- **Auth + data:** [Supabase](https://supabase.com) (Google sign-in, `visitor`/`admin` roles, RLS) — client-side
- **Hosting:** GitHub Pages, deployed by `.github/workflows/deploy.yml` on every push to `main`

Everything lives in `astro/`. The repo root only holds this README and CI config.

## Local development

You need [Node.js](https://nodejs.org) 20+ (install once per machine; e.g. via `nvm install --lts`).

```sh
cd astro
npm install        # first time on a machine
npm run dev        # http://localhost:4321
npm run build      # production build into astro/dist
```

You only need Node to *preview* locally. Editing a note and pushing is enough to
publish — GitHub Actions builds and deploys automatically.

## Adding or editing a note

1. Create/edit a Markdown file under `astro/src/content/docs/notes/…`. Front matter:

   ```md
   ---
   title: "Unit 3: Some Topic"
   ---

   Body in Markdown. Math with $$\int_0^1 x\,dx$$.
   ```

2. **Add it to the sidebar:** edit `astro/src/sidebar.json` (an ordered tree of
   `{ label, link }` and `{ label, items: [...] }`). The page's `link` is its
   route, e.g. `/notes/ap/chem/newunit/`. *(The sidebar is a committed file; new
   notes won't appear in the nav until they're added here.)*
3. Theorem boxes: wrap content in `<div class="theorem-box"> … </div>` (blank
   line after the opening tag so Markdown inside renders).
4. Commit and push to `main` — the site rebuilds and the notes-completion report
   regenerates automatically.

## Auth, roles, and data

- Database schema + RLS policies: `astro/supabase/schema.sql` (run in the Supabase SQL editor).
- The Supabase URL + anon key are public values committed in `astro/src/lib/supabase.ts`.
- Make yourself admin: `update public.profiles set role='admin' where email='you@example.com';`
- Pages: `/account` (profile), `/dashboard` (reading progress), `/admin`,
  `/admin/progress` (notes completion), `/admin/feedback`.

## Scripts

- `astro/scripts/notes_progress.py` — scores each note's completeness for `/admin/progress`
  (runs automatically in CI; run manually to preview locally).

## Credits

This page was made by Joshua Bie.

Major Contributors:
- Garret Morberg-Nguyen (Inspiration for the theme and many key features, including the AI grader and highlighting)
- Michael Zhao (Helped write some of the physics notes)
