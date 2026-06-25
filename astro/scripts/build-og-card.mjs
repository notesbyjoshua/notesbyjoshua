// Generates the 1200x630 social share card committed at
// public/assets/Images/og-card.png. Run locally (needs system fonts):
//   node scripts/build-og-card.mjs
// Then commit the PNG. It's a static asset — NOT regenerated in CI.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const pub = join(here, '..', 'public', 'assets', 'Images');

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

const bg = Buffer.from(`
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b1120"/>
      <stop offset="1" stop-color="#131a2c"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#7c9cff"/>
      <stop offset="1" stop-color="#a78bfa"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <!-- accent bar down the left edge -->
  <rect x="0" y="0" width="14" height="${H}" fill="url(#accent)"/>
  <!-- subtle corner glow -->
  <circle cx="1120" cy="90" r="220" fill="#7c9cff" opacity="0.10"/>

  <g font-family="Inter, Helvetica, Arial, sans-serif">
    <text x="240" y="150" font-size="30" font-weight="600" fill="#7c9cff" letter-spacing="1">notesbyjoshua.github.io</text>
    <text x="80" y="350" font-size="92" font-weight="700" fill="#ffffff">${esc('Notes by Joshua')}</text>
    <text x="82" y="426" font-size="40" font-weight="500" fill="#9aa6bf">${esc('Math · Physics · Competition Prep')}</text>

    <!-- subject chips (no emoji: the build host has no emoji font) -->
    <g transform="translate(80,500)" font-size="30" font-weight="600">
      <rect x="0"   y="0" width="240" height="58" rx="29" fill="#1e2940"/>
      <text x="34"  y="39" fill="#dbe4ff">AP &amp; Calculus</text>
      <rect x="264" y="0" width="208" height="58" rx="29" fill="#1e2940"/>
      <text x="298" y="39" fill="#dbe4ff">AP Physics C</text>
      <rect x="496" y="0" width="284" height="58" rx="29" fill="#1e2940"/>
      <text x="530" y="39" fill="#dbe4ff">USAPhO / F=ma</text>
    </g>
  </g>
</svg>`);

await sharp(bg)
  .composite([{ input: avatar, top: 64, left: 80 }])
  .png()
  .toFile(join(pub, 'og-card.png'));

console.log('Wrote public/assets/Images/og-card.png (1200x630)');
