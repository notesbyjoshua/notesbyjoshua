# Notes by Joshua Agent Guide

This repo is a Jekyll notes website. The agent's job is to help track note progress, consistency, formatting, and missing content.

## Source of Truth

- Use `how-to-write-notes.md` as the main style guide for note structure and formatting.
- Use `README.md` for current project priorities and phase goals.
- Preserve the voice of the existing notes. These are student-facing study notes, so explanations should be clear, direct, and useful without becoming overly formal.
- Treat existing Markdown/Jekyll conventions in nearby files as stronger guidance than inventing a new pattern.

## Git Workflow

- After making requested changes, commit them and push the current branch unless the user explicitly says not to.
- Keep commits focused on the requested work. Do not include unrelated generated churn or user changes.

## Notes Style

Follow `how-to-write-notes.md` as the source of truth for note structure.

Open tip and strategy callouts with bare `:::tip` and `:::strategy` directives. Do not add `title` fields or other sub-labels to these two callout types.

Every note page should generally have:
- YAML front matter
- one H1 matching the title
- clear section headings
- theorem/example/proof boxes using the established `<div class="theorem-box" markdown="1">` format
- practice problems and solutions for completed instructional unit pages
- image placeholders only when the page intentionally needs a future diagram

Useful front matter fields for notes:

```yaml
layout: default
title: "Page Title"
parent: Parent Page
nav_order: 1
permalink: /notes/category/page/
status: draft
progress: 40
tags: [subject, topic]
```

## Progress Conventions

Use `status` and `progress` together. `progress` is a rough 0-100 score, not a grade for quality.

- `stub` / 0-15: Page exists mostly as a placeholder, link target, outline, or very short topic list.
- `outline` / 15-30: Main sections are planned, but most explanations, examples, diagrams, or practice are missing.
- `draft` / 30-60: Core explanations exist, but there are obvious gaps, placeholders, missing examples, missing diagrams, or no practice.
- `developing` / 60-80: Most instructional content exists. The page may still need polish, consistency edits, more examples, diagrams, or practice/solutions.
- `review` / 80-95: Content is mostly complete and useful. Remaining work is accuracy checking, wording, formatting consistency, diagrams, or small practice improvements.
- `complete` / 95-100: The page has strong explanations, consistent formatting, useful examples, practice problems, solutions, and no known placeholders/TODOs.

When assigning progress, consider these components:

- Structure: front matter, H1, headings, section order, permalink, and navigation.
- Coverage: whether the important ideas for the unit/topic are explained.
- Examples: whether there are enough worked examples for the level of the page.
- Practice: whether the page has practice problems when appropriate.
- Solutions: whether practice problems have matching solutions.
- Visuals: whether diagrams/images exist where they would materially help.
- Formatting: theorem boxes, MathJax, spacing, images, links, and section dividers.
- Polish: clarity, consistency, typos, and unfinished TODOs/placeholders.

Suggested scoring weights for unit-style notes:

- 20 points: required structure and metadata
- 25 points: topic coverage
- 15 points: worked examples/proofs
- 15 points: practice problems
- 15 points: solutions
- 10 points: formatting, visuals, and polish

For index pages, resource pages, or non-unit pages, do not force the practice/solutions weights. Judge them by purpose: navigation clarity, completeness, links, and usefulness.

## Progress Tracking

When auditing notes, check for:
- missing or inconsistent front matter
- missing `permalink`
- missing `parent`
- missing `nav_order`
- missing Practice section
- missing Solutions section
- image placeholders
- inconsistent theorem-box formatting
- unclear or unfinished explanations
- pages that need diagrams, examples, or practice problems

When reporting progress, use a compact table:

| Page | Status | Progress | Main Issues | Suggested Next Step |
|---|---:|---:|---|---|
| Unit title | draft | 45 | Missing practice, image placeholder | Add 5 practice problems |

Prefer actionable comments over vague quality judgments.

## Critical Commands

These are shorthand commands the user may give to the agent. Treat them as named workflows.

### `check notes`

Purpose: Verify style, formatting, structure, and progress for notes.

Default scope:
- If the user names a file, check only that file.
- If the user names a folder or subject, check that folder/subject.
- If no scope is given, ask whether to check the active/open file, a folder, or all notes.

What to do:
- Read `how-to-write-notes.md`.
- Read the target note files.
- Check front matter, H1/title match, headings, theorem boxes, image tags/placeholders, MathJax conventions, practice, and solutions.
- Assign a `status` and `progress` estimate.
- Report issues in priority order.
- Do not edit files unless the user asks for fixes.

Output:
- A compact progress table.
- A short list of the highest-impact fixes.
- Any formatting problems that could break Jekyll or MathJax.

### `fix notes`

Purpose: Apply safe formatting and consistency fixes to notes.

Default scope:
- Use the file/folder named by the user.
- If no scope is given, ask for the target before editing.

What to do:
- Fix clear style-guide violations.
- Standardize theorem/example/proof boxes.
- Fix obvious spacing around headings, dividers, theorem boxes, images, and equations.
- Fix obvious front matter formatting issues.
- Replace `|...|` absolute value notation with `\lvert...\rvert` when it is clearly mathematical absolute value.
- Preserve content, meaning, and writing style.

What not to do:
- Do not rewrite large explanations unless asked.
- Do not change permalinks or navigation order unless the user explicitly requests it.
- Do not mark pages complete just because formatting was fixed.

### `write notes`

Purpose: Write or expand a notes page with good content and proper formatting.

Default scope:
- Use the file/folder named by the user.
- If no scope is given, ask for the target before editing.

What to do:
- Read the target page first.
- Read `how-to-write-notes.md`.
- Read at least one filled-out notes page in the same folder when available.
- If the folder has no filled-out notes page, use the closest similar pages as style models:
  - AP science pages can model each other.
  - Physics and chemistry competition pages can model each other when the structure is similar.
  - AP math pages can model other AP math pages.
  - Index pages should model other index pages, not unit notes.
- If the target page already has content, expand it instead of replacing it.
- Preserve existing front matter, permalink, title, navigation order, and any useful existing explanations.
- Add missing sections in the natural order for that topic.
- Use theorem boxes for examples, proofs, derivations, and worked problem explanations.
- Add diagrams as image placeholders only when a visual would materially help.
- Add practice and solutions only if the user asks for a full page or asks for practice.
- Keep the tone clear, student-facing, and close to nearby notes.
- After writing, briefly report what was added and what still needs review.

What not to do:
- Do not overwrite existing content wholesale unless the user explicitly asks for a rewrite.
- Do not invent external facts, data, curriculum requirements, or contest rules if unsure.
- Do not add fake citations or fake image paths.
- Do not change permalinks or navigation order unless asked.
- Do not mark the page `complete` just because content was added.

### `write section`

Purpose: Write or expand one specific section of a notes page.

Default scope:
- Use the file and section named by the user.
- If the file is clear but the section is missing, create that section in the most natural location.
- If either the file or section is unclear, ask for the missing target before editing.

What to do:
- Read the target page first.
- Read nearby sections so the new section transitions naturally.
- Read filled-out notes in the same folder or similar pages if needed for style.
- Preserve the existing heading level unless a different level is clearly required.
- Expand the section with explanations, equations, examples, proofs, and diagrams only as appropriate.
- Use the local theorem-box conventions for examples/proofs.
- Keep the section scoped; do not rewrite unrelated sections.
- If the new section creates a need for practice or solutions, mention that after editing rather than silently adding a large practice set.

Output:
- State which section was written or expanded.
- Mention any follow-up work, such as practice problems, diagrams, or accuracy review.

### `progress report`

Purpose: Summarize progress across notes.

Default scope:
- If the user names a folder or subject, report on that scope.
- If no scope is given, scan `Notes/`.

What to do:
- Classify pages as unit notes, index pages, resources, or other.
- Estimate `status` and `progress`.
- Flag missing practice, missing solutions, placeholders, TODOs, weak examples, and formatting issues.
- Group results by subject or course when useful.

Output:
- A Markdown table with page, status, progress, main issues, and suggested next step.
- A short summary of the biggest bottlenecks.

### `update progress`

Purpose: Add or update progress metadata in front matter.

Default scope:
- Use the file/folder named by the user.
- If no scope is given, ask for the target before editing.

What to do:
- Audit each target page first.
- Add or update `status`, `progress`, and optionally `tags`.
- Use the progress conventions in this file.
- Keep scores conservative when practice, solutions, diagrams, or major explanations are missing.

What not to do:
- Do not bulk-add metadata across the whole repo unless the user explicitly asks.
- Do not alter unrelated front matter.

### `find gaps`

Purpose: Find missing or unfinished note work.

Default scope:
- If no scope is given, scan `Notes/`.

What to check:
- TODOs
- image placeholders
- missing `## Practice`
- missing `## Solutions`
- practice without solutions
- very short pages
- empty or outline-like sections
- missing examples in long conceptual pages

Output:
- Group gaps by type.
- Recommend the top 5-10 next tasks.

### `check front matter`

Purpose: Verify Jekyll metadata consistency.

What to check:
- `layout`
- `title`
- `parent`
- `nav_order`
- `permalink`
- duplicate permalinks
- title/H1 mismatch
- missing quotes around titles only when needed

Output:
- List files with front matter issues.
- Suggest exact metadata edits, but do not apply them unless asked.

### `check theorem boxes`

Purpose: Verify proof/example/solution box formatting.

What to check:
- The opening tag is `<div class="theorem-box">`.
- Every theorem box has a matching `</div>`.
- Proofs use `**Proof (...).**`.
- Examples use `**Example.**`.
- Definitions use `**Definition.**`
- Theorems use `**Theorem.**`
- Practice solutions use `### Solution number` inside the theorem box.
- Boxes have blank lines around important Markdown content so Jekyll renders correctly.

Output:
- List the file and section where each issue occurs.
- Suggest the smallest safe fix.

### `check practice`

Purpose: Review practice problems and solutions.

What to check:
- Whether a completed unit-style note has practice problems.
- Whether every practice problem has a matching solution.
- Whether solutions use the required theorem-box format.
- Whether practice covers the main skills in the note.
- Whether problems increase in difficulty when appropriate.

Output:
- Count practice problems and solutions.
- Identify missing or weak coverage.
- Suggest new problems if requested.

### `suggest practice`

Purpose: Create practice problem ideas for a note.

What to do:
- Read the target note first.
- Suggest problems aligned to the actual sections.
- Include direct, conceptual, and mixed/application questions.
- If asked to write solutions, use the solution format from `how-to-write-notes.md`.

### `check images`

Purpose: Find missing, weak, or inconsistent visuals.

What to check:
- image placeholders
- broken-looking asset paths
- missing alt text
- images that do not use the standard note image tag
- sections where a diagram would materially improve understanding

Output:
- List each placeholder or image issue.
- Suggest what the image should show.
- Do not generate or add images unless asked.

### `ready for review`

Purpose: Decide whether a note is close to complete.

What to do:
- Run the checks from `check notes`.
- Be stricter than normal.
- Verify practice and solutions exist for completed unit-style notes.
- Verify there are no placeholders, TODOs, or major consistency issues.

Output:
- Either say the page is review-ready or list blockers.
- Give a final `status` and `progress` recommendation.

### `regenerate progress`

Purpose: Update the generated notes progress dashboard.

What to do:
- Run `python3 scripts/update_progress_report.py`.
- Inspect `Notes/progress.md` if the generated output looks suspicious.
- Do not hand-edit `Notes/progress.md`; update note front matter or the generator script instead.

Output:
- Report that the dashboard was regenerated.
- Mention any obvious script errors or suspicious results.

## Editing Rules

Do not rewrite large sections unless asked. Prefer reporting issues first.

When making edits:
- preserve my writing style
- keep Markdown/Jekyll formatting valid
- use `$$...$$` for display math
- use `\lvert` and `\rvert` instead of vertical bars for absolute value
- keep spacing around section dividers, theorem boxes, and images

## Core Agent Functions

### 1. Audit One Note

Use this when asked to check a single page.

Steps:
- Read the note and `how-to-write-notes.md`.
- Check front matter, title/H1 consistency, headings, theorem boxes, images, links, practice, and solutions.
- Assign `status` and `progress` using the conventions above.
- Return the most important issues first.
- Suggest a short next-step checklist.
- Do not rewrite the note unless asked.

### 2. Audit a Folder or Subject

Use this when asked to check a course, subject, or folder.

Steps:
- List all Markdown files in the requested folder.
- Classify each file as a unit note, index page, resource page, or other.
- Score each page using the progress conventions.
- Identify repeated consistency problems across the folder.
- Recommend the highest-impact next work, usually missing practice, solutions, diagrams, or unfinished draft pages.

### 3. Create a Progress Report

Use this when asked to summarize overall project progress.

Steps:
- Scan Markdown files under `Notes/`.
- Produce a table with page, subject, status, progress, and main issue.
- Group by course or subject when helpful.
- Highlight pages with placeholders, TODOs, missing practice, or missing solutions.
- Keep the report short enough to act on.

### 4. Standardize Front Matter

Use this when asked to clean metadata.

Steps:
- Check for `layout`, `title`, `parent`, `nav_order`, and `permalink`.
- Add `status`, `progress`, and `tags` only when requested or when working on a clearly scoped set of notes.
- Preserve existing permalinks unless there is an obvious typo and the user approves changing it.
- Do not change navigation order casually.

### 5. Check Note Consistency

Use this when asked whether notes follow the guide.

Steps:
- Compare the page against `how-to-write-notes.md`.
- Check theorem-box opening/closing tags.
- Check that proofs use `**Proof (...).**`.
- Check that examples use `**Example.**`.
- Check that practice solutions use solution headings inside theorem boxes.
- Flag display issues likely to affect Jekyll or MathJax.

### 6. Suggest Missing Practice

Use this when asked to add or plan practice.

Steps:
- Read the instructional content first.
- Suggest problems that match the page's scope and difficulty.
- Include a range from direct skill checks to mixed/application problems.
- If writing solutions, use the solution-box format from `how-to-write-notes.md`.

### 7. Replace Image Placeholders

Use this when asked to improve visuals.

Steps:
- Identify placeholder descriptions.
- Suggest what each diagram should show.
- Prefer repo-hosted images under `assets/`.
- Use the existing image tag format:

```markdown
<img class="note-img note-img--w480" src="{{ '/assets/path/image.png' | relative_url }}" alt="Description" loading="lazy" decoding="async" />
```

### 8. Update Progress Metadata

Use this when asked to track progress inside note files.

Steps:
- Audit the page first.
- Pick a `status` and `progress` score based on the conventions above.
- Add or update only the progress-related front matter fields requested.
- Do not pretend a page is complete because it is long; missing practice, solutions, diagrams, or placeholders should lower the score.

### 9. Write or Expand Notes

Use this when asked to write notes, fill out a draft, expand an existing page, or write a specific section.

Style model priority:
- First, use filled-out notes from the same folder as the target page.
- Second, use filled-out notes from the same course or parent page.
- Third, use similar subject pages:
  - physics can model chemistry and chemistry can model physics for science-note structure,
  - AP science pages can model other AP science pages,
  - AP math pages can model other AP math pages,
  - competition-prep pages can model other competition-prep pages.
- Last, use `how-to-write-notes.md` alone if no good model exists.

Steps:
- Read the target file and identify whether it is empty, outlined, partially written, or already substantial.
- Read `how-to-write-notes.md`.
- Read one to three style-model pages based on the priority list above.
- Preserve existing useful content and expand around it.
- Keep headings, formulas, examples, and prose consistent with the target page's subject level.
- Use `---` section dividers consistently with nearby notes.
- Use theorem boxes for examples, proofs, derivations, and worked explanations.
- Use image placeholders only when the section really needs a future diagram.
- If writing a full page, include practice and solutions only when requested or when the page is meant to be completed in one pass.
- If writing a section, keep edits limited to that section and its immediate transitions.
- After editing, run a quick consistency pass against `how-to-write-notes.md`.

Content standards:
- Explain ideas before using formulas heavily.
- Prefer worked examples over abstract rules when a student would likely need to see the method.
- Make examples end with what the reader is trying to find or derive.
- Avoid overclaiming; flag facts that need verification instead of presenting uncertain content as final.
- Keep the user's voice: direct, clear, and study-oriented.

## Preferred Commands

- Use `rg --files -g '*.md'` to list Markdown files.
- Use `rg -n "TODO|Placeholder|## Practice|## Solutions" -g '*.md'` to find common progress signals.
- Use focused file reads before editing.
- Keep generated reports in Markdown if the user asks for a saved progress report.

## Useful Tasks

The agent can be asked to:
- audit all notes
- audit one subject folder
- create a progress report
- find unfinished pages
- write or expand a notes page
- write a specific section of a notes page
- suggest missing practice problems
- standardize front matter
- check consistency against `how-to-write-notes.md`
