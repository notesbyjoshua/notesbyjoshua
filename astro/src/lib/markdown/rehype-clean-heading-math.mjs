// Rehype plugin: clean KaTeX out of heading TEXT (not appearance).
//
// KaTeX renders `$K_c$` as a visible HTML span PLUS a hidden MathML copy that
// also carries the raw TeX source. Starlight builds the "On this page" table of
// contents from each heading's text content, which concatenates all of that —
// so `## $K_c$` shows up in the ToC as the garbled "KcK_cKc".
//
// Inside headings only, we drop the `.katex-mathml` half (the source of the
// duplication). The visible `.katex-html` render stays, so the heading still
// looks right; the extracted ToC/anchor text becomes just the rendered glyphs.
// Body math is untouched, so it keeps full MathML for accessibility/copy-paste.
import { visit } from 'unist-util-visit';

const HEADINGS = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

function hasClass(node, name) {
  const c = node.properties?.className;
  if (!c) return false;
  return Array.isArray(c) ? c.includes(name) : c === name;
}

export default function rehypeCleanHeadingMath() {
  return (tree) => {
    visit(tree, 'element', (heading) => {
      if (!HEADINGS.has(heading.tagName)) return;
      // Remove every .katex-mathml subtree within this heading.
      visit(heading, 'element', (el, index, parent) => {
        if (parent && typeof index === 'number' && hasClass(el, 'katex-mathml')) {
          parent.children.splice(index, 1);
          return index; // re-visit at this index since we spliced
        }
      });
    });
  };
}
