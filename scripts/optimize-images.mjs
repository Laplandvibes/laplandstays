// Recompress every WebP in /public/images at q=72 with max width 1920 px.
// Backs up originals to /public/images/_orig/ so the operation is reversible.
// Usage:  node scripts/optimize-images.mjs
import { promises as fs } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const IMAGES_DIR = path.resolve('public/images')
// Backup OUTSIDE public/ so Vite does not copy originals into dist/.
const BACKUP_DIR = path.resolve('image-originals')
const MAX_WIDTH = 1920
const QUALITY = 72

const skip = new Set(['downloads'])

async function ensureBackup() {
  await fs.mkdir(BACKUP_DIR, { recursive: true })
}

async function listWebps() {
  const entries = await fs.readdir(IMAGES_DIR, { withFileTypes: true })
  return entries
    .filter((e) => e.isFile() && e.name.endsWith('.webp') && !skip.has(e.name))
    .map((e) => path.join(IMAGES_DIR, e.name))
}

async function processOne(file) {
  const name = path.basename(file)
  const backup = path.join(BACKUP_DIR, name)

  // Skip if already backed up — we use the backup as source of truth so re-runs are idempotent.
  let source = file
  try {
    await fs.access(backup)
    source = backup // re-encode from the original
  } catch {
    await fs.copyFile(file, backup)
  }

  const before = (await fs.stat(file)).size
  const meta = await sharp(source).metadata()
  const targetWidth = meta.width && meta.width > MAX_WIDTH ? MAX_WIDTH : meta.width

  const buf = await sharp(source)
    .resize({ width: targetWidth, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6 })
    .toBuffer()

  await fs.writeFile(file, buf)
  const after = buf.length
  return { name, before, after, savedKb: ((before - after) / 1024).toFixed(0) }
}

async function main() {
  await ensureBackup()
  const files = await listWebps()
  console.log(`Optimizing ${files.length} WebP files (max ${MAX_WIDTH}px, q=${QUALITY})…\n`)

  let totalBefore = 0
  let totalAfter = 0
  for (const file of files) {
    try {
      const r = await processOne(file)
      totalBefore += r.before
      totalAfter += r.after
      const saved = r.savedKb >= 0 ? `−${r.savedKb} KB` : `+${Math.abs(r.savedKb)} KB`
      console.log(`  ${r.name.padEnd(45)} ${(r.before / 1024).toFixed(0).padStart(5)} KB → ${(r.after / 1024).toFixed(0).padStart(5)} KB   (${saved})`)
    } catch (err) {
      console.error(`  ✗ ${path.basename(file)}: ${err.message}`)
    }
  }

  const totalSaved = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(2)
  const pct = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)
  console.log(`\n  Total: ${(totalBefore / 1024 / 1024).toFixed(2)} MB → ${(totalAfter / 1024 / 1024).toFixed(2)} MB  (saved ${totalSaved} MB, ${pct}%)`)
  console.log(`  Originals backed up to: ${path.relative(process.cwd(), BACKUP_DIR)}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
