#!/usr/bin/env node
/**
 * One-off migration: turn the split "## Practice" / "## Solutions" layout into
 * co-located practice boxes.
 *
 *   ## Practice
 *   ### MCQ
 *   1. question …            ## Solutions          ::::problem
 *      (A) … (B) …    +      ### MCQ          ->    1. question …
 *   ### FRQ                  <div theorem-box>         (A) … (B) …
 *   7. question …              ### Solution 1
 *      $$(A)$$ …             …                       :::solution
 *                                                    … solution …
 *                                                    :::
 *                                                    ::::
 *
 * MCQ questions become `::::problem` boxes; FRQ questions become
 * `::::frq{id=<dir>-<stem>-<n>}` boxes. Each box's `:::solution` is the matching
 * theorem-box solution (paired by order within its ### subsection). The old
 * "## Solutions" section is removed. Content is copied verbatim — no math is
 * rewritten.
 *
 * Usage:
 *   node scripts/convert-practice.mjs <file.md>           # dry run (summary)
 *   node scripts/convert-practice.mjs <file.md> --write   # apply
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { basename, dirname } from 'node:path';

const file = process.argv[2];
const write = process.argv.includes('--write');
if (!file) {
  console.error('usage: node scripts/convert-practice.mjs <file.md> [--write]');
  process.exit(1);
}

const raw = readFileSync(file, 'utf8');
const lines = raw.split('\n');

// id prefix, e.g. chem-acidbase for notes/ap/chem/acidbase.md
const stem = basename(file).replace(/\.mdx?$/, '');
const parentDir = basename(dirname(file));
const idPrefix = `${parentDir}-${stem}`;

const findLine = (re, from = 0) => {
  for (let i = from; i < lines.length; i++) if (re.test(lines[i])) return i;
  return -1;
};

const practiceStart = findLine(/^##\s+Practice\s*$/);
const solutionsStart = findLine(/^##\s+Solutions\s*$/, practiceStart + 1);
if (practiceStart < 0 || solutionsStart < 0) {
  console.error(`SKIP ${file}: missing ## Practice or ## Solutions`);
  process.exit(2);
}
// End of the Solutions section = next H2 or EOF.
let solutionsEnd = findLine(/^##\s+(?!Solutions)/, solutionsStart + 1);
if (solutionsEnd < 0) solutionsEnd = lines.length;

const before = lines.slice(0, practiceStart);
const after = lines.slice(solutionsEnd);
const practiceLines = lines.slice(practiceStart, solutionsStart);
const solutionLines = lines.slice(solutionsStart, solutionsEnd);

// --- Parse questions in a Practice subsection (### MCQ / ### FRQ). -----------
// Returns { mcq: [str], frq: [str] } of full question item texts.
function parseQuestions(secLines) {
  const groups = { mcq: [], frq: [] };
  let current = null;
  let buf = [];
  const flush = () => {
    if (current && buf.length) {
      const text = buf.join('\n').replace(/\n*(?:---\s*)?$/, '').replace(/\s+$/, '');
      if (text.trim()) groups[current].push(text.trimEnd());
    }
    buf = [];
  };
  for (const line of secLines) {
    const h = /^###\s+(MCQ|FRQ)\b/i.exec(line.trim());
    if (h) {
      flush();
      current = h[1].toLowerCase();
      continue;
    }
    if (!current) continue;
    if (/^\d+\.\s/.test(line)) {
      flush();
      buf.push(line);
    } else if (buf.length) {
      buf.push(line);
    }
  }
  flush();
  return groups;
}

// --- Parse theorem-box solutions in a Solutions subsection. ------------------
// Returns { mcq: [str], frq: [str] } of inner solution markdown (heading stripped).
function parseSolutions(secLines) {
  const src = secLines.join('\n');
  const groups = { mcq: [], frq: [] };
  let current = null;
  const headRe = /^###\s+(MCQ|FRQ)\b/gim;
  // Walk the source, tracking which subsection we're in and grabbing each
  // theorem-box's inner content (depth-aware on <div>).
  const tokenRe = /^###\s+(MCQ|FRQ)\b.*$|<div class="theorem-box"[^>]*>/gim;
  let m;
  while ((m = tokenRe.exec(src)) !== null) {
    if (m[1]) {
      current = m[1].toLowerCase();
      continue;
    }
    if (!current) continue;
    // m is a theorem-box opener; capture until matching </div>.
    let idx = tokenRe.lastIndex;
    let depth = 1;
    const divRe = /<\/?div\b[^>]*>/g;
    divRe.lastIndex = idx;
    let d;
    let end = src.length;
    while ((d = divRe.exec(src)) !== null) {
      depth += d[0].startsWith('</') ? -1 : 1;
      if (depth === 0) {
        end = d.index;
        break;
      }
    }
    const inner = src
      .slice(idx, end)
      .replace(/^\s*#{2,4}\s+Solution[^\n]*\n/i, '')
      .trim();
    groups[current].push(inner);
    tokenRe.lastIndex = end; // resume after this box
  }
  return groups;
}

const questions = parseQuestions(practiceLines);
const solutions = parseSolutions(solutionLines);

function box(kind, question, solution, frqId) {
  const opener = kind === 'frq' ? `::::frq{id=${frqId}}` : '::::problem';
  const sol = solution && solution.trim() ? solution : '_Solution coming soon._';
  return `${opener}\n${question}\n\n:::solution\n${sol}\n:::\n::::`;
}

const out = [];
out.push('## Practice', '');

if (questions.mcq.length) {
  out.push('### MCQ', '');
  questions.mcq.forEach((q, i) => {
    out.push(box('problem', q, solutions.mcq[i] ?? ''), '');
  });
}
if (questions.frq.length) {
  out.push('### FRQ', '');
  questions.frq.forEach((q, i) => {
    out.push(box('frq', q, solutions.frq[i] ?? '', `${idPrefix}-${i + 1}`), '');
  });
}

const newBlock = out.join('\n').replace(/\n+$/, '\n');
const rebuilt = [...before, ...newBlock.split('\n'), ...after].join('\n');

console.log(`${file}`);
console.log(
  `  MCQ: ${questions.mcq.length} q / ${solutions.mcq.length} sol   FRQ: ${questions.frq.length} q / ${solutions.frq.length} sol`,
);
if (questions.mcq.length !== solutions.mcq.length)
  console.warn(`  WARN: MCQ question/solution count mismatch`);
if (questions.frq.length !== solutions.frq.length)
  console.warn(`  WARN: FRQ question/solution count mismatch`);
console.log(`  FRQ ids: ${questions.frq.map((_, i) => `${idPrefix}-${i + 1}`).join(', ')}`);

if (write) {
  writeFileSync(file, rebuilt, 'utf8');
  console.log(`  WROTE ${file}`);
} else {
  console.log(`  (dry run — pass --write to apply)`);
}
