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

// Gradient overlay — darker toward bottom-left (where text sits).
const gradientSvg = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${NIGHT}" stop-opacity="0.30"/>
      <stop offset="45%" stop-color="${NIGHT}" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="${NIGHT}" stop-opacity="0.93"/>
    </linearGradient>
    <radialGradient id="r" cx="20%" cy="65%" r="70%">
      <stop offset="0%" stop-color="${NIGHT}" stop-opacity="0.78"/>
      <stop offset="100%" stop-color="${NIGHT}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect width="${W}" height="${H}" fill="url(#r)"/>
</svg>
`);

// Using tspan inside a single <text> means the layout engine spaces the pieces
// naturally regardless of siteBrand length.
function textSvg({ siteBrand, subtitle, price, badge }) {
  const brand = xmlEscape(siteBrand);
  const sub = xmlEscape(subtitle);
  const pr = xmlEscape(price || '');
  const bg = xmlEscape(badge);
  const prWidth = Math.max(260, (price || '').length * 14 + 40);

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

  <!-- Pink accent line + site URL top-right -->
  <rect x="${W - 190}" y="58" width="130" height="4" fill="${PINK}" rx="2"/>
  <text x="${W - 60}" y="72" font-family="Arial, sans-serif"
        font-size="14" font-weight="700" fill="${SNOW}" opacity="0.8"
        text-anchor="end" letter-spacing="3">LAPLANDSTAYS.COM</text>

  <!-- Hashtag logo (single text, tspans flow naturally) -->
  <text x="70" y="355" font-family="Impact, 'Arial Black', sans-serif"
        font-size="118" letter-spacing="3" filter="url(#textShadow)">
    <tspan fill="${PINK}" filter="url(#pinkGlow)">#</tspan><tspan fill="${SNOW}">LAPLAND</tspan><tspan fill="${PINK}" filter="url(#pinkGlow)">${brand}</tspan>
  </text>

  <!-- Subtitle -->
  <text x="72" y="410" font-family="Arial, sans-serif"
        font-size="28" font-weight="500" fill="${SNOW}" opacity="0.94"
        letter-spacing="0.5">${sub}</text>

  ${price ? `
  <!-- Price chip -->
  <g transform="translate(72, 452)">
    <rect width="${prWidth}" height="56" rx="28" ry="28" fill="${PINK}"/>
    <text x="${prWidth / 2}" y="37"
          font-family="Arial Black, Arial, sans-serif" font-size="22" font-weight="900"
          fill="${SNOW}" text-anchor="middle" letter-spacing="2">${pr}</text>
  </g>` : ''}

  <!-- Network badge bottom -->
  <text x="72" y="582" font-family="Arial, sans-serif"
        font-size="17" font-weight="700" fill="${SNOW}" opacity="0.72"
        letter-spacing="3">${bg}</text>
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
