// Generates the 1200x630 social share card committed at
// public/assets/Images/og-card.png. Run locally (needs system fonts):
//   node scripts/build-og-card.mjs
// Then commit the PNG. It's a static asset — NOT regenerated in CI.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { readFileSync } from 'node:fs';

const here = dirname(fileURLToPath(import.meta.url));
const pub = join(here, '..', 'public', 'assets', 'Images');
const fonts = join(here, '..', 'public', 'fonts');

const W = 1200;
const H = 630;

// Rounded-square avatar from the favicon, composited over the card.
const AV = 132;
const avatar = await sharp(join(pub, 'favicon.jpeg'))
  .resize(AV, AV, { fit: 'cover' })
  .composite([
    {
      input: Buffer.from(
        `<svg width="${AV}" height="${AV}"><rect width="${AV}" height="${AV}" rx="30" ry="30"/></svg>`,
      ),
      blend: 'dest-in',
    },
  ])
  .png()
  .toBuffer();

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const fontData = (path) => readFileSync(path).toString('base64');
const cabinSketchBold = fontData(join(fonts, 'cabin-sketch', 'CabinSketch-Bold.ttf'));
const playpenSans = fontData(join(fonts, 'playpen-sans', 'PlaypenSans-VariableFont_wght.ttf'));
const sairaSemiBold = fontData(join(fonts, 'saira', 'Saira_SemiCondensed-SemiBold.ttf'));

const bg = Buffer.from(`
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @font-face {
        font-family: 'Cabin Sketch Card';
        src: url(data:font/truetype;charset=utf-8;base64,${cabinSketchBold}) format('truetype');
        font-weight: 700;
      }
      @font-face {
        font-family: 'Playpen Sans Card';
        src: url(data:font/truetype;charset=utf-8;base64,${playpenSans}) format('truetype');
      }
      @font-face {
        font-family: 'Saira SemiCondensed Card';
        src: url(data:font/truetype;charset=utf-8;base64,${sairaSemiBold}) format('truetype');
        font-weight: 600;
      }
      .display { font-family: 'Cabin Sketch Card', 'Comic Sans MS', cursive; }
      .prose { font-family: 'Playpen Sans Card', 'Comic Sans MS', cursive; }
      .ui { font-family: 'Saira SemiCondensed Card', system-ui, sans-serif; }
    </style>
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.25" fill="#141820" opacity="0.09"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="#f6f4ef"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <path d="M84 70 C180 50, 230 78, 318 60 S510 54, 615 73 S805 89, 929 66 S1092 58, 1130 82"
        fill="none" stroke="#b84a18" stroke-width="5" stroke-linecap="round" opacity="0.58"/>
  <path d="M70 544 C195 525, 278 558, 397 535 S625 526, 749 548 S982 566, 1134 530"
        fill="none" stroke="#b84a18" stroke-width="4" stroke-linecap="round" opacity="0.45"/>
  <rect x="48" y="44" width="1104" height="542" rx="30" fill="none" stroke="#ddd6c8" stroke-width="3"/>

  <g>
    <text class="ui" x="240" y="148" font-size="31" font-weight="600" fill="#b84a18" letter-spacing="1">notesbyjoshua.github.io</text>
    <text class="display" x="80" y="346" font-size="110" font-weight="700" fill="#141820">${esc('Notes by Joshua')}</text>
    <text class="prose" x="84" y="430" font-size="40" font-weight="500" fill="#5d564a">${esc('Free, shareable study notes')}</text>
    <text class="prose" x="84" y="486" font-size="34" font-weight="500" fill="#5d564a">${esc('AP courses · math · physics · chemistry')}</text>
  </g>
</svg>`);

await sharp(bg)
  .composite([{ input: avatar, top: 64, left: 80 }])
  .png()
  .toFile(join(pub, 'og-card.png'));

console.log('Wrote public/assets/Images/og-card.png (1200x630)');
