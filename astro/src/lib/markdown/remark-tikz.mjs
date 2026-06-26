// Remark plugin: compile ```tikz fenced code blocks to inline SVG at BUILD TIME
// via node-tikzjax (a headless TikZ/LaTeX → SVG compiler). No client-side runtime
// ships to readers — the page gets plain inline SVG.
//
// Authoring (in any .md/.mdx note):
//
//   ```tikz
//   \usepackage{pgfplots}
//   \begin{tikzpicture}
//     \begin{axis}[axis lines=middle, xlabel=$x$, ylabel=$y$]
//       \addplot[blue, thick, domain=-3:3, samples=80] {x^2};
//     \end{axis}
//   \end{tikzpicture}
//   ```
//
// You write just the preamble lines (\usepackage / \usetikzlibrary / …) plus the
// picture; this plugin hoists the preamble and wraps the rest in a document for
// you. A caption can be added after the language: ```tikz Parabola y = x^2
//
// Bundled packages (node-tikzjax): tikz, pgfplots, circuitikz, chemfig, tikz-cd,
// tikz-3dplot, array, amsmath, amsfonts, amssymb. NOTE: the pgfplots
// `fillbetween` library is NOT bundled — shade areas with `\closedcycle` instead.
//
// Theming: black ink (#000 / "black") is rewritten to `currentColor` so axes,
// ticks and labels follow the site's light/dark text colour. Give plotted curves
// explicit colours (blue, red, …) so they keep their colour in both themes.
import { visit } from 'unist-util-visit';
import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// node-tikzjax is compiled in a CHILD PROCESS (scripts/tikz-compile.mjs) rather
// than imported here: markdown is processed inside Vite's SSR module runner
// during `astro build`, and running node-tikzjax through Vite fails late in the
// build with "Vite module runner has been closed". A separate process is immune.
const COMPILER = fileURLToPath(new URL('../../../scripts/tikz-compile.mjs', import.meta.url));

function renderSvg(doc) {
  // Synchronous + single-process: this also naturally serializes compiles, which
  // matters because the TikZ engine has one global memory.
  return execFileSync(process.execPath, [COMPILER], {
    input: doc,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
  });
}

// Compilation is slow (~1–2s each), so cache results on disk by content hash to
// keep dev rebuilds fast. node_modules/.cache is already gitignored.
const CACHE_DIR = path.join(process.cwd(), 'node_modules', '.cache', 'remark-tikz');
const PREAMBLE_RE =
  /^\s*\\(usepackage|usetikzlibrary|usepgfplotslibrary|pgfplotsset|tikzset|definecolor|pgfplotscreateplotcyclelist)\b/;

// Always available so labels can use \tfrac, \text, \mathbb, … without each
// block re-declaring them (duplicate \usepackage is harmless in LaTeX).
const BASE_PREAMBLE = '\\usepackage{amsmath}\n\\usepackage{amssymb}';

function buildDoc(src) {
  if (src.includes('\\begin{document}')) return src;
  const pre = [];
  const body = [];
  for (const line of src.split('\n')) (PREAMBLE_RE.test(line) ? pre : body).push(line);
  return `${BASE_PREAMBLE}\n${pre.join('\n')}\n\\begin{document}\n${body.join('\n')}\n\\end{document}\n`;
}

function themeSvg(svg) {
  return svg
    // Drop the fixed pixel width/height so CSS controls size (viewBox keeps aspect).
    .replace(/(<svg\b[^>]*?)\s+width="[^"]*"/, '$1')
    .replace(/(<svg\b[^>]*?)\s+height="[^"]*"/, '$1')
    // Black ink → theme text colour. Only the exact #000 token (not #0001ab etc.).
    .replace(/#000(?![0-9a-fA-F])/g, 'currentColor')
    .replace(/(stroke|fill)="black"/g, '$1="currentColor"');
}

function compile(src) {
  mkdirSync(CACHE_DIR, { recursive: true });
  const doc = buildDoc(src);
  const key = createHash('sha256').update(doc).digest('hex').slice(0, 32);
  const cacheFile = path.join(CACHE_DIR, `${key}.svg`);
  if (existsSync(cacheFile)) return readFileSync(cacheFile, 'utf8');
  const svg = themeSvg(renderSvg(doc));
  writeFileSync(cacheFile, svg);
  return svg;
}

export default function remarkTikz() {
  return (tree) => {
    visit(tree, 'code', (node) => {
      if ((node.lang || '').toLowerCase() !== 'tikz') return;
      const caption = (node.meta || '').trim();
      try {
        const svg = compile(node.value);
        node.type = 'html';
        node.value = `<figure class="tikz-figure">${svg}${
          caption ? `<figcaption>${caption}</figcaption>` : ''
        }</figure>`;
      } catch (err) {
        const detail = String(err?.stderr || err?.message || err).trim();
        console.error('[remark-tikz] compile failed:\n', detail);
        node.type = 'html';
        node.value = `<pre class="tikz-error">TikZ render failed: ${detail.replace(
          /</g,
          '&lt;',
        )}</pre>`;
      }
      delete node.lang;
      delete node.meta;
    });
  };
}
