import { createWriteStream } from 'node:fs'
import { mkdir, readFile, unlink, stat } from 'node:fs/promises'
import { pipeline } from 'node:stream/promises'
import path from 'node:path'
import sharp from 'sharp'

const images = [
  { id: '14SYrY6v_0-lOmx-y-w1rruEntIdedo62', out: 'hero' },
  { id: '1CfurxJA8BnrAtS0vihC_AbhIdtzMFLxi', out: 'hero-alt' },
  { id: '1t9-WvfBjTYshQDk0JeX5IptWuIbgNNOI', out: 'levi-hero' },
  { id: '1s9m-ySkOTr4nWM0ILLjuzR9tVPkaE_5M', out: 'yllas-hero' },
  { id: '1d83Kx7iNiP6xAV1_Yt9_ER7JLkvUS5dE', out: 'saariselka-hero' },
  { id: '1XWR6A94XSKW8F_imd4cXUfCJl9rVLwQR', out: 'inari-hero' },
  { id: '1cw6lW8z6pNWtDqjoaeDgoRGUL7-kjtXx', out: 'levi-card' },
  { id: '1aQB5fWTIAwVHfTXtjuwiAjoG9_mGzAN7', out: 'yllas-card' },
  { id: '1Z5b3Ire4Shzb6nRt1_Zre3Pneq7hTj14', out: 'saariselka-card' },
  { id: '1nsa5ib6_ziL98DpEiUlru1Dr5AVWVGKk', out: 'inari-card' },
  { id: '1rt6K2dOgukDRM0t1vg12DZgMHn7eI-ZT', out: 'aurora-villas' },
  { id: '1vxZOWsC1LU2UViB07efpV76yX0E-rKFz', out: 'aurora-class-villa-levi' },
  { id: '1polOR8WCUqpAjYXij9msiI1UXKcaFKon', out: 'midnight-sun-cabin-levi' },
  { id: '1dylYkCtibXl1UJSR-V-W-6_6hUdZGuP1', out: 'northern-crown-lodge-saariselka' },
  { id: '1XH5QBJ99xYQktWUuuRECIucjZCzu6EpU', out: 'arctic-lakeside-retreat-inari' },
  { id: '1syAUAJ0-ERaAXzkRaK2EEEMOeH4Abek1', out: 'fell-view-chalet-yllas' },
  { id: '1P_r4ybCw3RMsG6XP4Cv91NfLRKTqupJd', out: 'designer-lodges' },
  { id: '1hOtmRgJwqj-wptfNVIO4OaV2ScwCXjfV', out: 'mountain-chalets' },
  { id: '1UuraUruGajIyGQa59MftKy8MZKa2-GPx', out: 'lakeside-cabins' },
  { id: '1f3sVM-NBNOtN55jXwH9FW_q-_INvwk3B', out: 'polar-designer-villa-yllas' },
  { id: '1O_vlssDz1vrZPqle50zJygX2X58NRoHX', out: 'booking-cta-bg' },
  { id: '1BV_EVuS6HA0TudN3Ra8_s-xRcE3QSJWx', out: 'extra-2' },
  { id: '1pAqEQkHHjNAJ8jY1gW3mNhvHhY4QgLHs', out: 'extra-3' },
]

const DOWNLOAD_DIR = path.resolve('scripts/downloads')
const OUT_DIR = path.resolve('public/images')

await mkdir(DOWNLOAD_DIR, { recursive: true })
await mkdir(OUT_DIR, { recursive: true })

async function fetchWithRedirects(url, maxRedirects = 10) {
  let current = url
  const cookies = new Map()
  for (let i = 0; i < maxRedirects; i++) {
    const res = await fetch(current, {
      redirect: 'manual',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/121.0 Safari/537.36',
        Cookie: Array.from(cookies.entries()).map(([k, v]) => `${k}=${v}`).join('; '),
      },
    })
    // Collect cookies
    const setCookie = res.headers.getSetCookie?.() || []
    for (const c of setCookie) {
      const [pair] = c.split(';')
      const eq = pair.indexOf('=')
      if (eq > 0) cookies.set(pair.slice(0, eq).trim(), pair.slice(eq + 1).trim())
    }
    if ([301, 302, 303, 307, 308].includes(res.status)) {
      const loc = res.headers.get('location')
      if (!loc) throw new Error('redirect without location')
      current = new URL(loc, current).toString()
      continue
    }
    return res
  }
  throw new Error('too many redirects')
}

async function downloadDrive(id, outBase) {
  const urls = [
    `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t`,
    `https://drive.google.com/uc?export=download&id=${id}&confirm=t`,
  ]
  for (const url of urls) {
    try {
      const res = await fetchWithRedirects(url)
      const ct = res.headers.get('content-type') || ''
      if (!res.ok) continue
      if (ct.includes('text/html')) {
        // Try to extract confirm URL from HTML
        const html = await res.text()
        const m = html.match(/action="([^"]+)"[^>]*id="download-form"/) || html.match(/href="(\/uc\?export=download[^"]+)"/)
        if (m) {
          const nextUrl = m[1].replace(/&amp;/g, '&')
          const r2 = await fetchWithRedirects(nextUrl.startsWith('http') ? nextUrl : `https://drive.google.com${nextUrl}`)
          if (r2.ok && !(r2.headers.get('content-type') || '').includes('text/html')) {
            const tmp = path.join(DOWNLOAD_DIR, `${outBase}.bin`)
            await pipeline(r2.body, createWriteStream(tmp))
            return tmp
          }
        }
        continue
      }
      const tmp = path.join(DOWNLOAD_DIR, `${outBase}.bin`)
      await pipeline(res.body, createWriteStream(tmp))
      return tmp
    } catch (e) {
      console.error(`  attempt failed for ${url}: ${e.message}`)
    }
  }
  throw new Error(`failed to download ${id}`)
}

async function convert(tmpPath, outBase) {
  const outWebp = path.join(OUT_DIR, `${outBase}.webp`)
  await sharp(tmpPath).webp({ quality: 80 }).toFile(outWebp)
  const s = await stat(outWebp)
  return { outWebp, size: s.size }
}

async function run() {
  const concurrency = 4
  const queue = [...images]
  const results = []
  const workers = Array.from({ length: concurrency }, async () => {
    while (queue.length) {
      const item = queue.shift()
      if (!item) break
      try {
        console.log(`⬇  ${item.out} (${item.id})`)
        const tmp = await downloadDrive(item.id, item.out)
        const tmpStat = await stat(tmp)
        console.log(`   downloaded ${(tmpStat.size/1024).toFixed(0)} KB`)
        const { outWebp, size } = await convert(tmp, item.out)
        console.log(`✓  ${item.out}.webp (${(size/1024).toFixed(0)} KB)`)
        await unlink(tmp).catch(() => {})
        results.push({ ok: true, out: item.out })
      } catch (e) {
        console.error(`✗  ${item.out}: ${e.message}`)
        results.push({ ok: false, out: item.out, err: e.message })
      }
    }
  })
  await Promise.all(workers)
  const failed = results.filter(r => !r.ok)
  console.log(`\n== ${results.length - failed.length}/${results.length} succeeded ==`)
  if (failed.length) {
    console.log('Failed:', failed.map(f => `${f.out} (${f.err})`).join(', '))
    process.exit(1)
  }
}

run()
