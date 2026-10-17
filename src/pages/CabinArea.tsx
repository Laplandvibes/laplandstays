import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, BedDouble, ExternalLink, MapPin, Ruler, Users } from 'lucide-react'
import SEO from '../components/SEO'
import NotFound from './NotFound'
import { useLang, useLocalePath } from '../i18n/useLang'
import { buildLomarengasCabinUrl, buildLomarengasUrl, CABINS_API, type LomarengasArea } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import type { CabinAreaPageCopy, CabinAreaSlug } from './CabinArea.copy.types'
import fiCopy from './CabinArea.copy.fi'
import enCopy from './CabinArea.copy.en'
import deCopy from './CabinArea.copy.de'
import REFS from '../data/cabins/refs.json'

/**
 * /cabins/<area> — one page per resort or municipality listing the real Lomarengas rental cabins.
 *
 * WHY (Vesa 16.9.2026: "tarvitset sitä että sisältö vastaa hakuja"). OpenSEO measured
 * levi majoitus 8 100 searches/month, ruka mökit 3 600, ylläs majoitus 3 600, saariselkä
 * majoitus 3 600, levi mökit 1 900, mökki levi 1 600, ylläs mökit 1 600 — difficulty 0–12 —
 * and this site had no page that answered any of them: its only inventory was fetched in
 * the browser, invisible to Google. These pages are built from a committed feed dump
 * (scripts/gen-cabin-areas.mjs) and the prerender prints the first 60 cabins into the
 * crawlable body via routes.json `harvestRecord`, so the answer is in the HTML.
 *
 * Only fi, en and de have copy: that is where the demand is (OpenSEO 16.9.). Other
 * locales are routed here too and redirect to their /cabins page, so the shared
 * LanguageMenu never lands on a 404.
 *
 * 🔴 No stored prices. The dump's weekly prices go stale (Vesa removed "from" prices from
 * this site 22.8.2026). The daily Worker feed (/_cabins) is overlaid at runtime for the
 * cabins it covers; every other card says "price and free weeks on Lomarengas".
 */

const AREAS: CabinAreaSlug[] = [
  'levi', 'yllas', 'ruka', 'saariselka', 'pyha-luosto', 'rovaniemi',
  'inari', 'enontekio', 'utsjoki', 'muonio', 'kittila', 'sodankyla', 'salla', 'kemijarvi', 'posio', 'pello',
]

const COPY: Partial<Record<string, CabinAreaPageCopy>> = { fi: fiCopy, en: enCopy, de: deCopy }

/** Lomarengas search for the "browse all" button: the resort search where Lomarengas has one,
 *  else the municipality search (verified by page title 17.10.2026). Pyhä-Luosto spans two resorts,
 *  so it keeps the Lapland-wide search. */
const PARTNER_AREA: Record<CabinAreaSlug, LomarengasArea> = {
  levi: 'levi', yllas: 'yllas', ruka: 'ruka', saariselka: 'saariselka', 'pyha-luosto': 'lapland', rovaniemi: 'rovaniemi',
  enontekio: 'enontekio', inari: 'inari', utsjoki: 'utsjoki', salla: 'salla', kemijarvi: 'kemijarvi', posio: 'posio',
  kittila: 'kittila', pello: 'pello', sodankyla: 'sodankyla', muonio: 'muonio',
}

/** Destination guide on this site, when one exists. */
const DESTINATION: Partial<Record<CabinAreaSlug, string>> = {
  levi: '/destinations/levi', yllas: '/destinations/yllas', saariselka: '/destinations/saariselka', rovaniemi: '/destinations/rovaniemi',
  inari: '/destinations/inari',
}

interface Cabin {
  id: string
  name: string
  slug: string
  place: string
  muni: string
  guests: number
  sqm: number
  br: number
  stars: number
  img: string
  /** Straight-line km to the nearest village or resort of the area (`ref`, a key of refs.json). */
  km?: number
  ref?: string
  /** 'near' | 'far' (JSON imports type it as string) */
  section?: string
}
interface AreaData {
  area: string; place: string; count: number; generated: string | null; cabins: Cabin[]
  split?: { near: number; far: number; nearKm: number }
}

const LOADERS: Record<CabinAreaSlug, () => Promise<{ default: AreaData }>> = {
  levi: () => import('../data/cabins/levi.json'),
  yllas: () => import('../data/cabins/yllas.json'),
  ruka: () => import('../data/cabins/ruka.json'),
  saariselka: () => import('../data/cabins/saariselka.json'),
  'pyha-luosto': () => import('../data/cabins/pyha-luosto.json'),
  rovaniemi: () => import('../data/cabins/rovaniemi.json'),
  enontekio: () => import('../data/cabins/enontekio.json'),
  inari: () => import('../data/cabins/inari.json'),
  utsjoki: () => import('../data/cabins/utsjoki.json'),
  salla: () => import('../data/cabins/salla.json'),
  kemijarvi: () => import('../data/cabins/kemijarvi.json'),
  posio: () => import('../data/cabins/posio.json'),
  kittila: () => import('../data/cabins/kittila.json'),
  pello: () => import('../data/cabins/pello.json'),
  sodankyla: () => import('../data/cabins/sodankyla.json'),
  muonio: () => import('../data/cabins/muonio.json'),
}

type RefPhrase = { fi: string; en: string; de: string }
const refPhrase = (ref: string | undefined, lang: string): string | null => {
  const r = ref ? (REFS as unknown as Record<string, RefPhrase>)[ref] : undefined
  if (!r) return null
  return lang === 'fi' ? r.fi : lang === 'de' ? r.de : r.en
}

const PAGE = 24

// Daily "week from" price for EVERY cabin (Worker /_cabins?prices=1, 2026-09-17), not only
// the 12/group of the showcase feed. The dated note under the grid says when the prices were
// read, so a reader never mistakes a Tuesday price for a promise. Falls back to the showcase
// feed if the price endpoint is unavailable.
type LiveFeed = { groups: Record<string, { id: string; weeklyFrom: number | null }[]> }
type PriceFeed = { updatedAt: string | null; prices: Record<string, number> }
let liveCache: Map<string, number> | null = null
let liveUpdatedAt: string | null = null
let livePromise: Promise<Map<string, number>> | null = null
function loadLivePrices(): Promise<Map<string, number>> {
  if (liveCache) return Promise.resolve(liveCache)
  if (!livePromise) {
    livePromise = fetch(CABINS_API + '?prices=1')
      .then((r) => (r.ok ? (r.json() as Promise<PriceFeed>) : null))
      .then(async (p) => {
        const m = new Map<string, number>()
        if (p && p.prices && Object.keys(p.prices).length > 0) {
          for (const [id, price] of Object.entries(p.prices)) if (price >= 100 && price <= 20000) m.set(String(id), price)
          liveUpdatedAt = p.updatedAt
        } else {
          const d = await fetch(CABINS_API).then((r) => (r.ok ? (r.json() as Promise<LiveFeed>) : null)).catch(() => null)
          if (d && d.groups) for (const arr of Object.values(d.groups)) for (const c of arr) if (c.weeklyFrom) m.set(String(c.id), c.weeklyFrom)
        }
        liveCache = m
        return m
      })
      .catch(() => new Map<string, number>())
  }
  return livePromise
}

// Today's photo for each card from the Worker's daily feed index (/_cabins?ids=, at most 24 ids
// a call, cached 30 min). The committed data file carries a photo URL too, but Channable
// re-issues every templated image: measured 17.10.2026, all 1 259 stored photos answered 404
// and every card showed the empty gradient. id → today's URL; null = the Worker does not list
// the cabin (Kuusamo outside Ruka village), so the stored URL is the only one there is.
const freshImg = new Map<string, string | null>()
let freshFailed = false
const freshInFlight = new Set<string>()
async function loadFreshImages(ids: string[]): Promise<void> {
  const want = ids.filter((id) => !freshImg.has(id) && !freshInFlight.has(id))
  if (!want.length || freshFailed) return
  want.forEach((id) => freshInFlight.add(id))
  const batches: string[][] = []
  for (let i = 0; i < want.length; i += 24) batches.push(want.slice(i, i + 24))
  await Promise.all(batches.map(async (batch) => {
    try {
      const r = await fetch(`${CABINS_API}?ids=${batch.join(',')}`)
      if (!r.ok) throw new Error(String(r.status))
      const d = (await r.json()) as { cabins?: { id: string; img?: string }[] }
      const got = new Map((d.cabins || []).map((c) => [String(c.id), c.img || null]))
      for (const id of batch) freshImg.set(id, got.get(id) ?? null)
    } catch {
      freshFailed = true
    } finally {
      batch.forEach((id) => freshInFlight.delete(id))
    }
  }))
}

const SITE_URL = 'https://laplandstays.com'

export default function CabinArea() {
  const { area } = useParams<{ area: string }>()
  const lang = useLang()
  const to = useLocalePath()
  const copy = COPY[lang]
  const slug = (AREAS as string[]).includes(area || '') ? (area as CabinAreaSlug) : null

  const [data, setData] = useState<AreaData | null>(null)
  const [live, setLive] = useState<Map<string, number> | null>(liveCache)
  const [shown, setShown] = useState(PAGE)
  const [shownFar, setShownFar] = useState(PAGE)
  const [, setFreshTick] = useState(0)

  // A split area (Ruka) shows two lists, each with its own "show more".
  const groups = useMemo(() => {
    if (!data) return null
    if (!data.split) return { near: data.cabins, far: [] as Cabin[] }
    return { near: data.cabins.filter((x) => x.section !== 'far'), far: data.cabins.filter((x) => x.section === 'far') }
  }, [data])

  useEffect(() => {
    if (!groups) return
    let alive = true
    const ids = [...groups.near.slice(0, shown), ...groups.far.slice(0, shownFar)].map((c) => c.id)
    loadFreshImages(ids).then(() => { if (alive) setFreshTick((t) => t + 1) })
    return () => { alive = false }
  }, [groups, shown, shownFar])

  useEffect(() => {
    if (!slug) return
    let alive = true
    setData(null)
    setShown(PAGE)
    setShownFar(PAGE)
    LOADERS[slug]().then((mod) => { if (alive) setData(mod.default) })
    loadLivePrices().then((m) => { if (alive) setLive(m) })
    return () => { alive = false }
  }, [slug])

  const nf = useMemo(() => {
    try { return new Intl.NumberFormat(lang, { maximumFractionDigits: 0 }) } catch { return new Intl.NumberFormat('en', { maximumFractionDigits: 0 }) }
  }, [lang])
  const priceDate = useMemo(() => {
    if (!live || !liveUpdatedAt) return null
    try { return new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'numeric', year: 'numeric' }).format(new Date(liveUpdatedAt)) } catch { return liveUpdatedAt.slice(0, 10) }
  }, [lang, live])

  if (!slug) return <NotFound />
  // No copy in this language ⇒ the locale has no cabin-area pages; send the visitor to
  // the localized cabins guide instead of an empty route (the LanguageMenu links here).
  if (!copy) return <Navigate to={to('/cabins')} replace />

  const c = copy.areas[slug]
  const count = data?.count ?? 0
  const intro = c.intro
    .replace('{count}', nf.format(count))
    .replace('{near}', nf.format(data?.split?.near ?? 0))
    .replace('{far}', nf.format(data?.split?.far ?? 0))
  const browseHref = buildLomarengasUrl(PARTNER_AREA[slug], `cabinpage_${slug}_all`, lang)
  const destination = DESTINATION[slug]
  const split = data?.split && c.split ? c.split : null
  const CardTitle = split ? 'h3' : 'h2'

  const card = (cabin: Cabin) => {
    const sid = `cabinpage_${slug}`
    const href = buildLomarengasCabinUrl(cabin.slug, sid, lang)
    const price = live?.get(cabin.id)
    // Until the index answers, no <img>: the stored URL is likely dead and would
    // flash the gradient on every card first.
    const img = freshImg.has(cabin.id) ? (freshImg.get(cabin.id) || cabin.img) : (freshFailed ? cabin.img : null)
    const from = refPhrase(cabin.ref, lang)
    return (
      <a
        key={cabin.id}
        href={href}
        target="_blank"
        rel="sponsored nofollow noopener"
        onClick={() => trackAffiliateClick('lomarengas', sid, href)}
        className="relative bg-white rounded-2xl overflow-hidden group shadow-[0_6px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_10px_36px_rgba(236,72,153,0.35)] transition-shadow"
      >
        <div className={`aspect-[4/3] overflow-hidden bg-charcoal/30${img ? '' : ' motion-safe:animate-pulse'}`}>
          {img && <img
            key={img}
            src={img}
            alt={`${cabin.name}, ${cabin.place}`}
            translate="no"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
            onError={(e) => { const el = e.currentTarget; el.style.display = 'none'; el.parentElement?.classList.add('bg-gradient-to-br', 'from-[#0d2818]', 'via-[#0F172A]', 'to-[#1e1b4b]') }}
          />}
        </div>
        <div className="p-4">
          <div className="flex items-baseline justify-between gap-2 mb-0.5">
            {/* translate="no": a Lomarengas cabin name is a proper noun, the same in every language. */}
            <CardTitle translate="no" className="font-heading text-xl text-night tracking-wide min-w-0 break-words">{cabin.name}</CardTitle>
            {cabin.stars > 0 && (
              <span className="text-amber-500 text-[11px] shrink-0" aria-label={`${cabin.stars}/5 ${copy.starsLabel}`}>
                {'★'.repeat(cabin.stars)}
              </span>
            )}
          </div>
          <p className={`text-charcoal/60 text-[13px] break-words ${from && cabin.km != null ? 'mb-1' : 'mb-3'}`}>
            {cabin.place === cabin.muni ? cabin.place : `${cabin.place}, ${cabin.muni}`}
          </p>
          {from && cabin.km != null && (
            <p className="inline-flex items-center gap-1.5 text-charcoal/75 text-[13px] mb-3">
              <MapPin className="w-3.5 h-3.5 text-pink shrink-0" aria-hidden="true" />
              {(cabin.km < 1 ? copy.distanceUnder1 : copy.distance.replace('{km}', nf.format(cabin.km))).replace('{from}', from)}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 text-[13px] text-charcoal/75 mb-3.5">
            <span className="inline-flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-pink" aria-hidden="true" />
              <span className="sr-only">{copy.guestsLabel}: </span>
              {cabin.guests}
            </span>
            {cabin.br > 0 && (
              <span className="inline-flex items-center gap-1.5">
                <BedDouble className="w-3.5 h-3.5 text-pink" aria-hidden="true" />
                <span className="sr-only">{copy.bedroomsLabel}: </span>
                {cabin.br}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <Ruler className="w-3.5 h-3.5 text-pink" aria-hidden="true" />
              <span className="sr-only">{copy.sizeLabel}: </span>
              {nf.format(cabin.sqm)} m²
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 border-t border-gray-100 pt-3">
            <p className="text-[13px] text-charcoal/75 min-w-0">
              {price
                ? copy.weekFrom.replace('{price}', nf.format(Math.round(price)))
                : copy.priceOnPartner}
            </p>
            <span className="inline-flex items-center gap-1 text-pink text-[13px] font-semibold shrink-0">
              {copy.viewCabin}
              <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            </span>
          </div>
        </div>
      </a>
    )
  }

  const grid = (list: Cabin[], n: number, more: () => void) => (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">{list.slice(0, n).map(card)}</div>
      {n < list.length && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={more}
            className="inline-flex items-center justify-center gap-2 text-sm px-6 py-3 min-h-11 rounded-full border border-white/30 text-white font-semibold hover:border-pink hover:text-pink transition-colors"
          >
            {copy.showMore} ({nf.format(n)}/{nf.format(list.length)})
          </button>
        </div>
      )}
    </>
  )

  const crumbs = [
    { '@type': 'ListItem', position: 1, name: copy.breadcrumbHome, item: `${SITE_URL}${to('/')}`.replace(/\/?$/, '/') },
    { '@type': 'ListItem', position: 2, name: copy.breadcrumbCabins, item: `${SITE_URL}${to('/cabins')}/` },
    { '@type': 'ListItem', position: 3, name: c.h1, item: `${SITE_URL}${to(`/cabins/${slug}`)}/` },
  ]

  return (
    <>
      <SEO
        title={c.seo.title}
        description={c.seo.description}
        canonicalPath={`/cabins/${slug}`}
        ogImage="https://laplandstays.com/og-default.jpg"
        hreflangLangs={['en', 'fi', 'de']}
        jsonLd={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs }}
      />

      <section className="bg-white pt-24 sm:pt-28 pb-10 sm:pb-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <Link to={to('/cabins')} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-charcoal/60 hover:text-pink transition-colors mb-6">
            <ArrowRight className="w-3.5 h-3.5 rotate-180" aria-hidden="true" />
            {copy.breadcrumbCabins}
          </Link>
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{copy.eyebrow}</p>
          <h1 className="font-heading text-4xl sm:text-6xl text-night tracking-wide mb-5">{c.h1}</h1>
          <p className="text-charcoal/80 text-lg leading-relaxed max-w-3xl mb-8">{intro}</p>
          {/* Button labels wrap instead of truncating: "SELAA KAIKKIA ALUEEN MÖKKEJ…" ended in an
              ellipsis on every phone (measured 17.10.2026, 320–414 px, fi/en/de). */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={browseHref}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={() => trackAffiliateClick('lomarengas', `cabinpage_${slug}_all`, browseHref)}
              className="inline-flex max-w-full items-center gap-2 bg-[#DB2777] hover:bg-[#BE185D] text-white font-semibold py-3.5 px-6 rounded-xl transition-colors text-sm uppercase tracking-wider"
            >
              <span className="min-w-0 break-words leading-snug">{copy.browseAll}</span>
              <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
            {destination && (
              <Link
                to={to(destination)}
                className="inline-flex max-w-full items-center gap-2 border border-night/20 text-night font-semibold py-3.5 px-6 rounded-xl hover:border-pink hover:text-pink transition-colors text-sm"
              >
                <span className="min-w-0 break-words leading-snug">{copy.destinationLink}</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="bg-night text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {!groups ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-2xl bg-white/10 animate-pulse aspect-[4/5]" />
              ))}
            </div>
          ) : split ? (
            <>
              <h2 className="font-heading text-3xl sm:text-4xl text-white tracking-wide mb-2">{split.nearH2}</h2>
              <p className="text-white/75 text-[15px] leading-relaxed max-w-3xl mb-6">{split.nearNote}</p>
              {grid(groups.near, shown, () => setShown((n) => n + PAGE))}
              {groups.far.length > 0 && (
                <>
                  <h2 className="font-heading text-3xl sm:text-4xl text-white tracking-wide mt-14 mb-2">{split.farH2}</h2>
                  <p className="text-white/75 text-[15px] leading-relaxed max-w-3xl mb-6">{split.farNote}</p>
                  {grid(groups.far, shownFar, () => setShownFar((n) => n + PAGE))}
                </>
              )}
            </>
          ) : (
            // One list: the area has no far cabins, or no section headings in this language.
            grid([...groups.near, ...groups.far], shown, () => setShown((n) => n + PAGE))
          )}

          <p className="mt-8 text-white/50 text-[12px] leading-relaxed max-w-3xl">
            {copy.dataNote}
            {data?.cabins.some((x) => x.km != null) ? ' ' + copy.distanceNote : ''}
            {priceDate ? ' ' + copy.pricesDated.replace('{date}', priceDate) : ''}
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-6">{copy.otherAreasH2}</h2>
          <div className="flex flex-wrap gap-3">
            {AREAS.filter((a) => a !== slug).map((a) => (
              <Link
                key={a}
                to={to(`/cabins/${a}`)}
                className="inline-flex items-center gap-1.5 text-sm px-4 py-2.5 min-h-11 rounded-full bg-pink/10 text-pink font-semibold hover:bg-pink hover:text-white transition-colors"
              >
                {copy.areas[a].h1}
                <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
