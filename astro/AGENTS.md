## Version control

Commit changes automatically once a task is complete, unless the user says
otherwise, but keep existing note-content edits uncommitted unless the user
explicitly asks you to commit them.

- Use a clear, descriptive commit message summarizing the change.
- Push backend/frontend changes and newly created notes to the current branch
  (typically `main`) after committing, unless the user explicitly says not to.
- When editing existing note content, leave the changes uncommitted so the user
  can write their own commit message.
- Keep commits focused on the requested work. Do not include unrelated generated
  churn or user changes.
- Skip the automatic commit/push when the work is clearly incomplete or left in
  a broken state.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
