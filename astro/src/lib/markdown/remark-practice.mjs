// Remark plugin for self-contained practice boxes. Authoring stays plain
// Markdown; only wrappers are added so the client script can attach the
// "Show solution" toggle (and, for FRQs, the AI grader).
//
//   ::::problem
//   1. What is the pH of a 1.0e-3 M HCl solution?
//      (A) 3  (B) 11  (C) 7  (D) 1
//
//   :::solution
//   ### Solution
//   (B) … worked explanation …
//   :::
//   ::::
//
//   ::::frq{id=chem-acidbase-1}
//   7. A 0.100 M acetic acid solution …
//      $$(A)$$ Write the ionization equation.
//
//   :::solution
//   $$(A)$$ … model solution …
//   :::
//   ::::
//
// Note the colon counts: the OUTER box uses 4 colons, the INNER solution uses 3
// (remark-directive nests by colon depth). Renders to:
//   <div class="problem-box" data-problem> … <div class="problem-solution" data-solution hidden> … </div></div>
//   <div class="problem-box frq-block" data-frq data-frq-id="…"> … </div>
// The grader/reveal wiring lives in src/lib/frq-grader.ts.
import { visit } from 'unist-util-visit';

export default function remarkPractice() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== 'containerDirective') return;
      const data = node.data || (node.data = {});

      if (node.name === 'problem') {
        data.hName = 'div';
        data.hProperties = { className: ['problem-box'], 'data-problem': '' };
        return;
      }

      if (node.name === 'frq') {
        const id = (node.attributes && (node.attributes.id || node.attributes['#'])) || '';
        data.hName = 'div';
        data.hProperties = {
          className: ['problem-box', 'frq-block'],
          'data-frq': '',
          ...(id ? { 'data-frq-id': id } : {}),
        };
        return;
      }

      if (node.name === 'solution') {
        data.hName = 'div';
        data.hProperties = {
          className: ['problem-solution'],
          'data-solution': '',
          hidden: true,
        };
      }
    });
  };
}
