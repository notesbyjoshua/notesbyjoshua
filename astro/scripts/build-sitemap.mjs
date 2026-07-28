import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const SITE_URL = 'https://notesbyjoshua.github.io';
const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const docsDir = join(root, 'src', 'content', 'docs');
const publicDir = join(root, 'public');

const extraPublicRoutes = ['/feedback/'];

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function frontmatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  return match?.[1] ?? '';
}

function isIndexable(source) {
  const fm = frontmatter(source);
  return !/content:\s*['"]?noindex/i.test(fm) && !/^draft:\s*true\s*$/im.test(fm);
}

function docsRoute(file) {
  const rel = relative(docsDir, file).split(sep).join('/');
  const withoutExt = rel.replace(/\.(md|mdx)$/i, '');
  if (withoutExt === 'index') return '/';
  return `/${withoutExt.toLowerCase().replace(/\/index$/, '')}/`;
}

function xmlEscape(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const docRoutes = walk(docsDir)
  .filter((file) => /\.(md|mdx)$/i.test(file))
  .filter((file) => isIndexable(readFileSync(file, 'utf8')))
  .map(docsRoute);

const routes = [...new Set([...docRoutes, ...extraPublicRoutes])].sort((a, b) => {
  if (a === '/') return -1;
  if (b === '/') return 1;
  return a.localeCompare(b);
});

const urls = routes
  .map((route) => `  <url><loc>${xmlEscape(new URL(route, SITE_URL).href)}</loc></url>`)
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

writeFileSync(join(publicDir, 'sitemap.xml'), xml);
console.log(`Sitemap: ${routes.length} URL(s) -> public/sitemap.xml`);
