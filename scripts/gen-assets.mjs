import sharp from 'sharp'
import { writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.resolve(__dirname, '..', 'public')

await mkdir(OUT, { recursive: true })

// ── Favicon SVG (deep-night square, pink #, amber STAYS) ─────────────────────
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#0F172A"/>
  <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle"
        font-family="Playfair Display, Georgia, serif" font-weight="700" font-size="42" fill="#EC4899">#</text>
  <text x="50%" y="82%" dominant-baseline="middle" text-anchor="middle"
        font-family="Playfair Display, Georgia, serif" font-weight="700" font-size="14" fill="#F59E0B" letter-spacing="2">STAYS</text>
</svg>`

await writeFile(path.join(OUT, 'favicon.svg'), faviconSvg)

await sharp(Buffer.from(faviconSvg)).resize(32, 32).png().toFile(path.join(OUT, 'favicon-32.png'))
await sharp(Buffer.from(faviconSvg)).resize(180, 180).png().toFile(path.join(OUT, 'apple-touch-icon.png'))

console.log('✓ favicons written')

// ── OG image generator ───────────────────────────────────────────────────────
// Deep-night gradient + aurora wash + pink hashtag + site name + page title

function ogSvg({ kicker, title }) {
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0B1020"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <radialGradient id="aurora1" cx="20%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#EC4899" stop-opacity="0.45"/>
      <stop offset="70%" stop-color="#EC4899" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="aurora2" cx="85%" cy="70%" r="55%">
      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.35"/>
      <stop offset="70%" stop-color="#F59E0B" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#aurora1)"/>
  <rect width="1200" height="630" fill="url(#aurora2)"/>

  <!-- Hashtag brand block in top-left -->
  <g transform="translate(80, 80)">
    <text x="0" y="60" font-family="Playfair Display, Georgia, serif" font-weight="700"
          font-size="72" letter-spacing="4">
      <tspan fill="#EC4899">#</tspan><tspan fill="#F9FAFB">LAPLAND</tspan><tspan fill="#F59E0B">STAYS</tspan>
    </text>
  </g>

  <!-- Kicker + title in center -->
  <g transform="translate(80, 320)">
    <text font-family="Nunito, sans-serif" font-weight="600"
          font-size="24" letter-spacing="6" fill="#EC4899">${esc(kicker.toUpperCase())}</text>
    <text y="90" font-family="Playfair Display, Georgia, serif" font-weight="700"
          font-size="96" letter-spacing="2" fill="#F9FAFB">${esc(title)}</text>
  </g>

  <!-- URL pill -->
  <g transform="translate(80, 540)">
    <rect width="260" height="48" rx="24" fill="#F9FAFB" fill-opacity="0.08" stroke="#EC4899" stroke-opacity="0.4"/>
    <text x="130" y="31" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="600"
          font-size="18" fill="#F9FAFB" letter-spacing="1">laplandstays.com</text>
  </g>
</svg>`
}

const ogVariants = [
  { file: 'og-default.jpg', kicker: 'Luxury Lapland stays', title: 'Cabins, Villas, Igloos' },
  { file: 'og-levi.jpg', kicker: 'Destination · Levi', title: "Finland's ski capital" },
  { file: 'og-yllas.jpg', kicker: 'Destination · Ylläs', title: 'The quiet twin fells' },
  { file: 'og-saariselka.jpg', kicker: 'Destination · Saariselkä', title: 'Gateway to UKK wilderness' },
  { file: 'og-inari.jpg', kicker: 'Destination · Inari', title: 'Sami lake country' },
  { file: 'og-rovaniemi.jpg', kicker: 'Destination · Rovaniemi', title: 'The Arctic Circle capital' },
  { file: 'og-property-types.jpg', kicker: 'Guide', title: 'Aurora villas to log cabins' },
  { file: 'og-privacy.jpg', kicker: 'Legal', title: 'Privacy Policy' },
  { file: 'og-terms.jpg', kicker: 'Legal', title: 'Terms of Use' },
  { file: 'og-cookies.jpg', kicker: 'Legal', title: 'Cookie Policy' },
]

for (const v of ogVariants) {
  const svg = ogSvg(v)
  await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toFile(path.join(OUT, v.file))
  console.log(`✓ ${v.file}`)
}

console.log('\nAll assets regenerated.')
