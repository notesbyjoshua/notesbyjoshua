#!/usr/bin/env node
/**
 * Build the FRQ manifest the grader backend reads.
 *
 * Scans note Markdown under src/content/docs for self-contained FRQ blocks:
 *
 *   ::::frq{id=chem-acidbase-1}
 *   7. question … parts $$(A)$$ $$(B)$$ …
 *
 *   :::solution
 *   model solution …
 *   :::
 *   ::::
 *
 * and writes public/generated/frq-manifest.json (served at
 * /generated/frq-manifest.json). The Supabase `grade-frq` function fetches that
 * JSON and uses each item's question + model solution + nearby notes context as
 * the grading rubric. The student's answer is the only thing sent from the
 * browser; the question and rubric are looked up here by id, so a student can't
 * spoof them.
 *
 * Usage: npm run frq:manifest   (also runs automatically via `prebuild`)
 */
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
const DOCS = join(ROOT, 'src', 'content', 'docs');
const OUT_DIR = join(ROOT, 'public', 'generated');
const OUT_FILE = join(OUT_DIR, 'frq-manifest.json');

const FRQ_OPEN = /^(:{3,})frq\{([^}]*)\}\s*$/;
const SOLUTION_OPEN = /^(:{3,})solution\b/;
// Question "parts" are written as $$(A)$$ or a bare (A).
const PART_RE = /\$\$\(([A-Z])\)\$\$|\(([A-Z])\)/g;

/** @param {string} attrs e.g. `id=chem-acidbase-1` or `id="chem-acidbase-1"` */
function parseAttrs(attrs) {
  const out = {};
  for (const m of attrs.matchAll(/([#\w-]+)\s*=\s*([^,\s}]+)/g)) {
    out[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
  const shorthand = /(?:^|\s)#([\w-]+)/.exec(attrs);
  if (shorthand && !out.id) out.id = shorthand[1];
  return out;
}

function pathMeta(rel) {
  const parts = rel.replace(/\.mdx?$/, '').split('/');
  return {
    domain: parts.slice(0, 2).join('/') || parts[0] || '',
    courseFolder: parts.length > 2 ? parts.slice(0, -1).join('/') : undefined,
  };
}

function sitePathFromRel(rel) {
  return `/${rel.replace(/\.mdx?$/, '').toLowerCase()}/`;
}

function extractParts(text) {
  const ids = new Set();
  let m;
  PART_RE.lastIndex = 0;
  while ((m = PART_RE.exec(text)) !== null) ids.add(m[1] ?? m[2]);
  return [...ids].sort().map((id) => ({ id }));
}

function keywordsFrom(text) {
  const words = new Set();
  for (const line of text.split('\n')) {
    const hm = /^(#{1,3})\s+(.+)$/.exec(line.trim());
    if (hm) {
      for (const w of hm[2].toLowerCase().split(/[^a-z0-9]+/)) {
        if (w.length > 2) words.add(w);
      }
    }
  }
  return [...words].slice(0, 24);
}

function nearbyContext(src, charIndex) {
  const before = src.slice(0, charIndex);
  const trimmed = before.trimEnd();
  const max = 6000;
  return trimmed.length <= max ? trimmed : trimmed.slice(trimmed.length - max);
}

/**
 * Split an FRQ block body into { question, solution }. The solution is the
 * nested `:::solution … :::` directive; everything else is the question.
 * The leading "### Solution" heading inside the solution is dropped.
 */
function splitBody(bodyLines) {
  const question = [];
  let solution = null;
  let i = 0;
  while (i < bodyLines.length) {
    const open = SOLUTION_OPEN.exec(bodyLines[i].trim());
    if (open) {
      const fence = open[1];
      const closer = new RegExp(`^${fence}\\s*$`);
      i += 1;
      const sol = [];
      while (i < bodyLines.length && !closer.test(bodyLines[i].trim())) {
        sol.push(bodyLines[i]);
        i += 1;
      }
      if (i < bodyLines.length) i += 1; // skip closing fence
      solution = sol.join('\n').replace(/^\s*#{2,4}\s+Solution[^\n]*\n/i, '').trim();
      continue;
    }
    question.push(bodyLines[i]);
    i += 1;
  }
  return { question: question.join('\n').trim(), solution: solution ?? '' };
}

/** Parse `::::frq{id=…}` blocks (with nested `:::solution`). */
function parseFrqBlocks(src) {
  const lines = src.split('\n');
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const open = FRQ_OPEN.exec(lines[i].trim());
    if (!open) {
      i += 1;
      continue;
    }
    const fence = open[1];
    const closer = new RegExp(`^${fence}\\s*$`);
    const attrs = parseAttrs(open[2]);
    const charIndex = lines.slice(0, i).join('\n').length;
    i += 1;
    const body = [];
    while (i < lines.length && !closer.test(lines[i].trim())) {
      body.push(lines[i]);
      i += 1;
    }
    if (i < lines.length) i += 1; // skip closing fence
    const { question, solution } = splitBody(body);
    blocks.push({ id: attrs.id, question, solution, charIndex });
  }
  return blocks;
}

function walkMd(dir) {
  const out = [];
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, name.name);
    // Skip the auto-generated practice aggregate pages: they reuse each unit's
    // FRQ ids verbatim, so the canonical entry comes from the unit note. The
    // grader still resolves those ids on the aggregate pages by lookup.
    if (name.isDirectory()) {
      if (name.name === 'practiceproblems') continue;
      out.push(...walkMd(full));
    } else if (/\.mdx?$/.test(name.name)) out.push(full);
  }
  return out;
}

function main() {
  const items = {};
  let fileCount = 0;
  const warnings = [];

  for (const abs of walkMd(DOCS)) {
    const raw = readFileSync(abs, 'utf8');
    if (!/:{3,}frq\{/.test(raw)) continue;
    fileCount += 1;

    const rel = relative(DOCS, abs).replace(/\\/g, '/');
    const sitePath = sitePathFromRel(rel);
    const { domain, courseFolder } = pathMeta(rel);
    const tags = keywordsFrom(raw);

    for (const block of parseFrqBlocks(raw)) {
      if (!block.id) {
        warnings.push(`${rel}: frq block without an id (skipped)`);
        continue;
      }
      if (items[block.id]) warnings.push(`duplicate FRQ id "${block.id}" (in ${rel})`);
      if (!block.solution) warnings.push(`${rel}: frq "${block.id}" has no :::solution`);
      items[block.id] = {
        id: block.id,
        domain,
        courseFolder,
        sourcePath: `astro/src/content/docs/${rel}`,
        sitePath,
        questionMarkdown: block.question,
        solutionMarkdown: block.solution,
        parts: extractParts(block.question),
        nearbyContextMarkdown: nearbyContext(raw, block.charIndex),
        tags,
      };
    }
  }

  mkdirSync(OUT_DIR, { recursive: true });
  const manifest = {
    generatedAt: new Date().toISOString(),
    itemCount: Object.keys(items).length,
    items,
  };
  writeFileSync(OUT_FILE, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

  for (const w of warnings) console.warn(`  warn: ${w}`);
  console.log(
    `FRQ manifest: ${manifest.itemCount} question(s) from ${fileCount} note(s) -> ${relative(ROOT, OUT_FILE)}`,
  );
}

main();
