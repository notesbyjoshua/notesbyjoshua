// Standalone TikZ → SVG compiler, run as a CHILD PROCESS by the remark-tikz
// plugin (see src/lib/markdown/remark-tikz.mjs). It exists as its own process so
// node-tikzjax never runs inside Vite's SSR module runner during `astro build`
// (which tears down mid-build and throws "Vite module runner has been closed").
//
// Reads a full LaTeX document on stdin, writes the SVG to stdout. Non-zero exit
// with the TeX error on stderr if compilation fails.
import mod from 'node-tikzjax';

const tex2svg =
  typeof mod === 'function'
    ? mod
    : typeof mod.default === 'function'
      ? mod.default
      : typeof mod.default?.default === 'function'
        ? mod.default.default
        : mod;

let input = '';
process.stdin.setEncoding('utf8');
for await (const chunk of process.stdin) input += chunk;

try {
  const svg = await tex2svg(input, { embedFontCss: true });
  process.stdout.write(svg);
} catch (err) {
  process.stderr.write(String(err?.message || err));
  process.exit(1);
}
