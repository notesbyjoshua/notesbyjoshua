// Remark plugin for themed callout directives — the authoring blocks ported
// from gxboy12345's fork, adapted to our handwritten theme. Sits alongside
// remark-practice (problem/frq/solution) and the legacy `<div class="theorem-box">`
// boxes; it only claims the directive names listed in TYPES below.
//
// Authoring:
//
//   :::tip
//   1. Draw a diagram.
//   2. Relate the variables.
//   :::
//
//   :::example{tag="Finding rate laws"}
//   Worked example text…
//   :::
//
//   :::warning
//   Don't mix up rate-constant units across orders.
//   :::
//
// Renders to:
//   <aside class="callout callout--tip"><div class="callout__label …">…</div> …children… </aside>
//
// Types with an optional "field" show the type label + a filled chip (the
// field value); the rest show just the type label. Per project convention,
// `:::example` is tagged by its BROAD subject (e.g. "Finding rate laws"),
// not a hyper-specific title.
import { visit } from 'unist-util-visit';

// type -> { attr: optional-field attribute name, label: default type label }
const FIELDED = {
  theorem: { attr: 'name', label: 'Theorem' },
  example: { attr: 'tag', label: 'Example' },
  proof: { attr: 'of', label: 'Proof' },
  key: { attr: 'name', label: 'Key info' },
  exam: { attr: 'topic', label: 'On the exam' },
  summary: { attr: 'title', label: 'Summary' },
  tip: { attr: 'title', label: 'Tip' },
  strategy: { attr: 'title', label: 'Problem-solving strategy' },
};
// types with no optional field — label only
const PLAIN = {
  warning: 'Warning',
  mistakes: 'Common mistakes',
  checklist: 'Working checklist',
  conditions: 'Conditions',
  equations: 'Key equations',
  variables: 'Useful variables',
  note: 'Note',
};

const ALL = new Set([...Object.keys(FIELDED), ...Object.keys(PLAIN)]);

/** Build the label row as an mdast node (hName overrides turn it into divs/spans). */
function labelNode(typeLabel, fieldValue) {
  if (fieldValue) {
    return {
      type: 'paragraph',
      data: { hName: 'div', hProperties: { className: ['callout__label', 'callout__label--named'] } },
      children: [
        {
          type: 'paragraph',
          data: { hName: 'span', hProperties: { className: ['callout__type'] } },
          children: [{ type: 'text', value: typeLabel }],
        },
        {
          type: 'paragraph',
          data: { hName: 'span', hProperties: { className: ['callout__name'] } },
          children: [{ type: 'text', value: fieldValue }],
        },
      ],
    };
  }
  return {
    type: 'paragraph',
    data: { hName: 'div', hProperties: { className: ['callout__label'] } },
    children: [{ type: 'text', value: typeLabel }],
  };
}

export default function remarkCallouts() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== 'containerDirective') return;
      if (!ALL.has(node.name)) return;

      const attrs = node.attributes || {};
      const fielded = FIELDED[node.name];
      const typeLabel = fielded ? fielded.label : PLAIN[node.name];
      // `[bracket label]` syntax also supported as the field value.
      let fieldValue;
      if (fielded) {
        const bracket = node.children?.[0]?.data?.directiveLabel
          ? toText(node.children.shift())
          : undefined;
        fieldValue = (attrs[fielded.attr] || attrs.tag || attrs.title || bracket || '').trim() || undefined;
      }

      const data = node.data || (node.data = {});
      data.hName = 'aside';
      data.hProperties = { className: ['callout', `callout--${node.name}`] };
      node.children.unshift(labelNode(typeLabel, fieldValue));
    });
  };
}

function toText(node) {
  if (!node) return '';
  if (node.value) return node.value;
  return (node.children || []).map(toText).join('');
}
