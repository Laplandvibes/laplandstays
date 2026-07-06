// Generates OG share images for LaplandStays.
// Pipeline: hero.webp -> resize 1200x630 cover -> modulate darken ->
//           composite dark gradient SVG -> composite text SVG -> JPEG.
// No font files bundled; uses Impact + Arial which are on every Windows host
// running this build. Output matches LV brand palette (deep-night/vibe-pink/snow).

import sharp from 'sharp';
import { statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const W = 1200;
const H = 630;

const PINK = '#EC4899';
const SNOW = '#F9FAFB';
const NIGHT = '#0F172A';

const xmlEscape = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

// Gradient overlay — darker toward CENTER (where the centered, square-crop-safe
// text sits) so the wordmark stays legible even when Google crops to a centre square.
const gradientSvg = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${NIGHT}" stop-opacity="0.40"/>
      <stop offset="50%" stop-color="${NIGHT}" stop-opacity="0.42"/>
      <stop offset="100%" stop-color="${NIGHT}" stop-opacity="0.90"/>
    </linearGradient>
    <radialGradient id="r" cx="50%" cy="46%" r="72%">
      <stop offset="0%" stop-color="${NIGHT}" stop-opacity="0.62"/>
      <stop offset="100%" stop-color="${NIGHT}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect width="${W}" height="${H}" fill="url(#r)"/>
</svg>
`);

// CENTRE-COMPOSED layout: everything is horizontally centred and kept inside the
// ~630px-wide centre "square-safe" zone, so Google's centre-square thumbnail crop
// (which keeps roughly x 285–915 of the 1200-wide card) never clips the wordmark.
// The wordmark is STACKED (#LAPLAND / BRAND) and its size adapts to the longest
// line so even long brands (SAARISELKÄ) fit the safe zone.
function textSvg({ siteBrand, subtitle, price, badge }) {
  const brand = xmlEscape(siteBrand);
  const sub = xmlEscape(subtitle);
  const pr = xmlEscape(price || '');
  const bg = xmlEscape(badge);
  const cx = W / 2; // 600 — horizontal centre

  // Adaptive wordmark size: longest line is max("#LAPLAND"=8, brand length).
  // Target ≤ ~545px wide (well inside the 630px safe zone). Impact cap ≈ 0.62em.
  const longest = Math.max(8, siteBrand.length);
  const brandSize = Math.max(70, Math.min(106, Math.floor(545 / (longest * 0.62))));
  const lineGap = Math.round(brandSize * 1.0);
  const line1Y = 232;            // baseline of "#LAPLAND"
  const line2Y = line1Y + lineGap; // baseline of BRAND
  const subY = line2Y + 64;
  const prWidth = Math.max(250, (price || '').length * 13 + 56);
  const prY = subY + 34;

  return Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <filter id="pinkGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="textShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="2" result="off"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.65"/></feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Centred kicker URL + accent line, top -->
  <text x="${cx}" y="70" font-family="Arial, sans-serif"
        font-size="15" font-weight="700" fill="${SNOW}" opacity="0.82"
        text-anchor="middle" letter-spacing="4">LAPLANDSTAYS.COM</text>
  <rect x="${cx - 65}" y="84" width="130" height="4" fill="${PINK}" rx="2"/>

  <!-- Stacked, centred hashtag wordmark (square-crop safe) -->
  <text x="${cx}" y="${line1Y}" font-family="Impact, 'Arial Black', sans-serif"
        font-size="${brandSize}" letter-spacing="2" text-anchor="middle" filter="url(#textShadow)">
    <tspan fill="${PINK}" filter="url(#pinkGlow)">#</tspan><tspan fill="${SNOW}">LAPLAND</tspan>
  </text>
  <text x="${cx}" y="${line2Y}" font-family="Impact, 'Arial Black', sans-serif"
        font-size="${brandSize}" letter-spacing="2" text-anchor="middle" filter="url(#textShadow)">
    <tspan fill="${PINK}" filter="url(#pinkGlow)">${brand}</tspan>
  </text>

  <!-- Subtitle, centred -->
  <text x="${cx}" y="${subY}" font-family="Arial, sans-serif"
        font-size="26" font-weight="500" fill="${SNOW}" opacity="0.95"
        text-anchor="middle" letter-spacing="0.5">${sub}</text>

  ${price ? `
  <!-- Price chip, centred -->
  <g transform="translate(${cx - prWidth / 2}, ${prY})">
    <rect width="${prWidth}" height="54" rx="27" ry="27" fill="${PINK}"/>
    <text x="${prWidth / 2}" y="36"
          font-family="Arial Black, Arial, sans-serif" font-size="21" font-weight="900"
          fill="${SNOW}" text-anchor="middle" letter-spacing="2">${pr}</text>
  </g>` : ''}

  <!-- Network badge, centred bottom -->
  <text x="${cx}" y="592" font-family="Arial, sans-serif"
        font-size="16" font-weight="700" fill="${SNOW}" opacity="0.74"
        text-anchor="middle" letter-spacing="3">${bg}</text>
</svg>
`);
}

const variants = [
  {
    name: 'og-default',
    source: 'public/images/hero.webp',
    siteBrand: 'STAYS',
    subtitle: 'Glass Igloos · Cabins · Hotels in Finnish Lapland',
    price: 'FROM €100 / NIGHT',
    badge: 'PART OF #LAPLANDVIBES NETWORK',
  },
  {
    name: 'og-levi',
    source: 'public/images/levi-hero.webp',
    siteBrand: 'LEVI',
    subtitle: 'Aurora villas & fell-view chalets in Levi',
    price: 'FROM €120 / NIGHT',
    badge: 'LAPLANDSTAYS.COM · LEVI GUIDE',
  },
  {
    name: 'og-yllas',
    source: 'public/images/yllas-hero.webp',
    siteBrand: 'YLLÄS',
    subtitle: 'Mountain chalets & designer lodges in Ylläs',
    price: 'FROM €110 / NIGHT',
    badge: 'LAPLANDSTAYS.COM · YLLÄS GUIDE',
  },
  {
    name: 'og-saariselka',
    source: 'public/images/saariselka-hero.webp',
    siteBrand: 'SAARISELKÄ',
    subtitle: 'Glass igloos & wilderness cabins in Saariselkä',
    price: 'FROM €130 / NIGHT',
    badge: 'LAPLANDSTAYS.COM · SAARISELKÄ GUIDE',
  },
  {
    name: 'og-inari',
    source: 'public/images/inari-hero.webp',
    siteBrand: 'INARI',
    subtitle: 'Lakeside cabins & aurora retreats in Inari',
    price: 'FROM €100 / NIGHT',
    badge: 'LAPLANDSTAYS.COM · INARI GUIDE',
  },
  {
    name: 'og-rovaniemi',
    source: 'public/images/hero-alt.webp',
    siteBrand: 'ROVANIEMI',
    subtitle: "Santa's hometown hotels & glass cabins",
    price: 'FROM €115 / NIGHT',
    badge: 'LAPLANDSTAYS.COM · ROVANIEMI GUIDE',
  },
  {
    // Accommodation-types guide page (was the legacy synthetic, left-anchored card
    // from gen-assets.mjs which also clipped in Google's square crop). Now uses the
    // same photo + centre-safe layout as the rest.
    name: 'og-property-types',
    source: 'public/images/aurora-villas.webp',
    siteBrand: 'STAYS',
    subtitle: 'Aurora villas, glass igloos & log cabins',
    badge: 'LAPLANDSTAYS.COM · STAY-TYPE GUIDE',
  },
];

async function buildOne(v) {
  const srcPath = resolve(root, v.source);
  const outPath = resolve(root, 'public', `${v.name}.jpg`);

  const base = await sharp(srcPath)
    .resize(W, H, { fit: 'cover', position: 'attention' })
    .modulate({ brightness: 0.76, saturation: 1.14 })
    .toBuffer();

  await sharp(base)
    .composite([
      { input: gradientSvg, top: 0, left: 0 },
      { input: textSvg(v), top: 0, left: 0 },
    ])
    .jpeg({ quality: 90, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toFile(outPath);

  const meta = await sharp(outPath).metadata();
  const sz = statSync(outPath).size;
  console.log(`OK  ${v.name}.jpg  ${meta.width}x${meta.height}  ${(sz / 1024).toFixed(0)}KB`);
}

let failed = 0;
for (const v of variants) {
  try {
    await buildOne(v);
  } catch (e) {
    failed++;
    console.error(`FAIL ${v.name}: ${e.message}`);
  }
}
process.exit(failed ? 1 : 0);
