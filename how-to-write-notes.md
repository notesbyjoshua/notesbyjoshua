# How to write notes

The style guide for note pages. `AGENTS.md` treats this file as the source of
truth for note structure and formatting.

Notes now live in `astro/src/content/docs/notes/**/*.md` and render with
**Astro + Starlight**, using **remark-math + rehype-katex** (KaTeX, not MathJax).
A linter — [`astro/scripts/check_notes.py`](astro/scripts/check_notes.py) — checks
the mechanical rules below and runs on every commit and push (see
[Automated checks](#automated-checks)).

> Migrated from Jekyll: there is **no** `# Page title` H1 in the body (Starlight
> uses the front-matter `title`), theorem boxes drop `markdown="1"`, images use
> plain `/assets/...` paths (no `relative_url`), and math is KaTeX.

---

## Basic format

Every notes page follows this basic format:

``` markdown
---
title: "Page title"
sidebar:
  order: 1            # position within its sidebar group (optional: label, prev, next)
---

---

## Header 1

content content content

### Sub-header 1

//image example
<img class="note-img note-img--w480" src="/assets/image/path/in/repo.png" alt="Free body diagram placeholder" loading="lazy" decoding="async" />

//link example
[link](/notes/category/page/)  //link to another page by its route

### Sub-header 2

<div class="theorem-box">

proof/example here (refer to section below for guidance)

</div>

---

## Header 2

...

---

## Practice

1. question
2. question

...

---

## Solutions

<div class="theorem-box">

### Solution 1

solution here

</div>

...

```

The page title comes from the front-matter `title` — don't add a separate `#`
heading in the body. Start sections at `##`.

---

## Math

**Always use `$$…$$`** for math — both display and inline. Never single `$…$`
(remark-math renders it, but we keep one convention; the linter treats a lone `$`
as an error).

- **Display math** — `$$ … $$` on its own lines.
- **Inline math** — `$$x$$` inside text.

Keep these balanced or the page silently breaks: `$$` delimiters, `{ }`,
`\left`/`\right`, and `\begin{env}`/`\end{env}`. Use `$$…$$`, never LaTeX's
`\( … \)` or `\[ … \]` (remark-math won't render those).

---

## Theorem boxes

The opening tag is exactly `<div class="theorem-box">` — **no** `markdown="1"`.
Always leave a blank line right after the opening tag and right before `</div>`,
and make sure every box is closed.

### Proofs

When writing proofs, always follow this format:

``` markdown
<div class="theorem-box">

**Proof (What identity/formula you are proving).** Proof statement

</div>
```

NEVER box the final identity!

### Examples

When writing examples, always follow this format:

``` markdown
<div class="theorem-box">

**Example (Broad subject).** question statement

solution here

</div>
```

When writing the question statement, always end with what you are trying to find/derive, and don't just state the needed information. For example, say *"A is the 1st letter of the alphabet and C is 2 letters after A. Find the position of letter C."* instead of *"A is the 1st letter of the alphabet and C is 2 letters after A."* and going straight to the answer.

**Tag every example with its broad subject** in parentheses on the lead-in — e.g. `**Example (Finding rate laws).**`. The site renders the parenthetical as a subject chip. Tag with the *broad topic*, not a hyper-specific title:

- ✅ `**Example (Finding rate laws).**`
- ❌ `**Example (Rate law from k).**` — too specific

(This supersedes the older rule that examples never state a theme. A plain `**Example.**` with no tag still renders — no chip — but prefer tagging.)

### Theorems

idk I might do this I might not

---

## Callouts

Beyond theorem boxes, themed **callout directives** are available for asides.
Author them as `:::type` … `:::` (a blank line inside is fine; close with `:::`).
See the live [Writing notes reference](/writing-notes/) for how each one looks.

``` markdown
:::tip{title="Strategy"}
1. Draw a diagram.
2. Relate the variables.
:::

:::warning
Don't mix up rate-constant units across reaction orders.
:::

:::exam{topic="Linearized plots"}
AP often asks you to justify order from a linearized plot.
:::
```

Types and their optional field (the field renders as a chip next to the label):

| Directive | Optional field | Use for |
| --- | --- | --- |
| `:::tip` | `title` | a short actionable tip / how-to |
| `:::note` | — | neutral aside / context |
| `:::warning` | — | cautions, common pitfalls |
| `:::exam` | `topic` | what the AP/exam tends to ask |
| `:::key` | `name` | a key fact / formula to remember |
| `:::summary` | `title` | recap of a section |
| `:::mistakes` | — | bulleted "common mistakes" list |
| `:::strategy` | `title` | the general method for a *class* of problems |
| `:::checklist` | — | a working checklist of steps to execute / verify |
| `:::conditions` | — | numbered requirements / assumptions |
| `:::equations` | — | a markdown table of key equations |
| `:::variables` | — | the variables/symbols used on the page, with units (AP-style) |

Use `:::strategy` for *how to approach* a type of problem and `:::checklist`
for the concrete steps to run through or verify. Put a page's variable glossary
(the AP "useful variables" list) in `:::variables`, near the top of the page.

Tag fields follow the same **broad-subject** rule as examples — tag with the
topic, not a hyper-specific title.

### Practice solutions

When writing solutions, always follow this format:

``` markdown
<div class="theorem-box">

### Solution number

solution here

$$
\boxed{answer(s) here}.
$$

</div>
```

---

## Formatting tips

- Always remember to add text BEFORE numbers/formulas to start off bullet points, since if you don't do that the text will automatically pop up in the middle. An example is below:

``` markdown
- $$R=8.314 \frac{J}{\circ K}$$
// WRONG!!!
- Ideal gas constant: $$R=8.314 \frac{J}{\circ K}$$
// CORRECT!
```

- Make sure to always use `\lvert` and `\rvert` instead of vertical bars when doing absolute value, because the renderer sometimes reads vertical bars as a table and messes up the formatting. (Use `\left|`/`\right|` for tall bars and `\mid` for "such that"/conditional probability.)
- Always remember to have proper spacing in between sections! Always make sure to leave a blank space above and below any separation markers, special headers, theorem boxes, and image links.
- Do NOT write an summary pargarph at the start of the notes! If you want a summary put it at the end of the notes page. You should go from title directly to the first subtitle.

---

## Automated checks

The linter enforces the mechanical rules above on the notes you touch:

``` sh
# from the repo root
python3 astro/scripts/check_notes.py                 # all notes
python3 astro/scripts/check_notes.py path/to/note.md # specific files
python3 astro/scripts/check_notes.py --strict        # warnings fail too
python3 astro/scripts/check_notes.py --quiet         # errors only

# or, from astro/
npm run check:notes
```

**Errors** — single `$` math (use `$$`), unclosed `$$`, unbalanced `{ }` /
`\left`-`\right` / `\begin`-`\end`, unbalanced `<div>`, missing front matter or
`title` — block commits and pushes.
**Warnings** — bare `|` in math, missing blank lines around boxes, `markdown="1"`
or `relative_url` leftovers — are reported but don't block (use `--strict` to fail on them).

Install the git hooks once so this runs automatically on commit and push:

``` sh
sh scripts/install-hooks.sh
```

To exempt a generated or special file, put this anywhere in it:

``` markdown
<!-- check-notes: disable -->
```
