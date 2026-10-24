import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BedDouble, Ruler, Users } from 'lucide-react'
import { buildLomarengasCabinUrl, buildLomarengasUrl, CABINS_API, type LomarengasArea } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import type { Lang } from '../i18n/useLang'

// Live cabin cards with REAL Lomarengas photos, served by the affiliate
// Worker's /_cabins endpoint (Adtraction product feed pfid 375, cached in KV,
// refreshed every 24h so delisted cabins drop off automatically). Photo use is
// explicitly allowed by the Lomarengas programme (unlike hotel partners); the
// Lomarengas wordmark stays visible in the band header (programme term).
// Every CTA routes through go/lomarengas so clicks land in D1 with an epi
// placement tag. If the fetch fails (adblock, offline), the band hides itself.

type ApiKey = 'levi' | 'yllas' | 'ruka' | 'saariselka'
/** Areas the live /_cabins feed does not group (it knows four resorts): served from the site's own
 *  per-area snapshot, the same file the /cabins/<area> page lists (Vesa 24.10.2026: "lomarenkaasta puuttuu
 *  uudet kaupungit"). No weekly price there: the snapshot is up to a week old and a stale price is worse than none. */
type StaticKey = 'pyha-luosto' | 'rovaniemi' | 'inari'
type GroupKey = ApiKey | StaticKey

type StaticFile = { count: number; generated: string; cabins: { id: string; name: string; img: string; slug: string; place: string; muni: string; guests: number; sqm: number | null; br: number | null; stars: number | null }[] }
const STATIC_LOADERS: Record<StaticKey, () => Promise<{ default: StaticFile }>> = {
  'pyha-luosto': () => import('../data/cabins/pyha-luosto.json') as Promise<{ default: StaticFile }>,
  rovaniemi: () => import('../data/cabins/rovaniemi.json') as Promise<{ default: StaticFile }>,
  inari: () => import('../data/cabins/inari.json') as Promise<{ default: StaticFile }>,
}
/** Lomarengas search behind "browse all": Pyhä–Luosto has no Lomarengas area of its own (CabinArea PARTNER_AREA). */
const MORE_AREA: Record<GroupKey, LomarengasArea> = {
  levi: 'levi', yllas: 'yllas', ruka: 'ruka', saariselka: 'saariselka', 'pyha-luosto': 'lapland', rovaniemi: 'rovaniemi', inari: 'inari',
}
const isStatic = (k: GroupKey): k is StaticKey => k in STATIC_LOADERS

type ApiCabin = {
  id: string
  name: string
  img: string
  slug: string
  place: string
  muni: string
  p: number | null
  pe: number
  sqm: number | null
  br: number | null
  stars: number | null
  weeklyFrom: number | null
}

type ApiData = {
  updatedAt: string
  totals: Record<string, number>
  groups: Record<string, ApiCabin[]>
}

export type ShowcaseCopy = {
  eyebrow: string
  h2: string
  lead: string
  weekFrom: string
  guestsLabel: string
  bedroomsLabel: string
  sizeLabel: string
  viewCabin: string
  browseAll: string
  dataNote: string
}

const TABS: ApiKey[] = ['levi', 'yllas', 'ruka', 'saariselka']
const CARDS_SHOWN = 6

let cabinsCache: ApiData | null = null
let cabinsPromise: Promise<ApiData | null> | null = null
function loadCabins(): Promise<ApiData | null> {
  if (cabinsCache) return Promise.resolve(cabinsCache)
  if (!cabinsPromise) {
    cabinsPromise = fetch(CABINS_API)
      .then((r) => (r.ok ? (r.json() as Promise<ApiData>) : null))
      .then((d) => {
        if (d && d.groups && d.totals) cabinsCache = d
        return cabinsCache
      })
      .catch(() => null)
  }
  return cabinsPromise
}

/** Template like 'week from {price} €' → text before + bolded price tail. */
function PriceLine({ tpl, price }: { tpl: string; price: string }) {
  const [before, after = ''] = tpl.split('{price}')
  return (
    <p className="text-[13px] text-charcoal/75">
      {before}
      <span className="font-semibold text-night">{price}{after}</span>
    </p>
  )
}

/** Internal /cabins/<area> pages exist in every site language (fi/en/de 16.9.2026, the other nine
 *  19.10.2026); callers pass localized hrefs + a label so the band links to the crawlable inventory page too. */
export default function CabinShowcase({ copy, areaNames, lang, areaHrefs, areaLinkLabel, extraTabs = [], staticNote }: { copy: ShowcaseCopy; areaNames: string[]; lang: Lang; areaHrefs?: Partial<Record<GroupKey, string>>; areaLinkLabel?: string; extraTabs?: { key: StaticKey; name: string }[]; /** Data note for snapshot tabs, `{date}` = list date. */ staticNote?: string }) {
  const [data, setData] = useState<ApiData | null>(cabinsCache)
  const [failed, setFailed] = useState(false)
  const [tab, setTab] = useState<GroupKey>('levi')
  const [staticGroups, setStaticGroups] = useState<Partial<Record<StaticKey, { total: number; generated: string; cabins: ApiCabin[] }>>>({})

  useEffect(() => {
    if (!isStatic(tab) || staticGroups[tab]) return
    let alive = true
    STATIC_LOADERS[tab]().then((m) => {
      if (!alive) return
      const cabins: ApiCabin[] = m.default.cabins.map((c) => ({
        id: c.id, name: c.name, img: c.img, slug: c.slug, place: c.place, muni: c.muni,
        p: c.guests ?? null, pe: 0, sqm: c.sqm ?? null, br: c.br ?? null, stars: c.stars ?? null, weeklyFrom: null,
      }))
      setStaticGroups((g) => ({ ...g, [tab]: { total: m.default.count, generated: m.default.generated, cabins } }))
    }).catch(() => {})
    return () => { alive = false }
  }, [tab, staticGroups])

  useEffect(() => {
    let alive = true
    loadCabins().then((d) => {
      if (!alive) return
      if (d) setData(d)
      else setFailed(true)
    })
    return () => {
      alive = false
    }
  }, [])

  const nf = useMemo(() => {
    try {
      return new Intl.NumberFormat(lang, { maximumFractionDigits: 0 })
    } catch {
      return new Intl.NumberFormat('en', { maximumFractionDigits: 0 })
    }
  }, [lang])

  if (failed) return null

  const sidTab = tab.replace(/-/g, '_')
  const group = isStatic(tab) ? staticGroups[tab] : undefined
  const cabins = isStatic(tab)
    ? (group?.cabins ?? []).slice(0, CARDS_SHOWN)
    : data ? (data.groups[tab] ?? []).slice(0, CARDS_SHOWN) : []
  const total = isStatic(tab) ? group?.total ?? 0 : data?.totals[tab] ?? 0
  const ready = isStatic(tab) ? !!group : !!data
  const moreHref = buildLomarengasUrl(MORE_AREA[tab], `cabin_more_${sidTab}`, lang)
  const tabs: { key: GroupKey; name: string }[] = [...TABS.map((key, i) => ({ key, name: areaNames[i] ?? key })), ...extraTabs]

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-night text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-5">
          <div className="min-w-0">
            <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{copy.eyebrow}</p>
            <h2 className="font-heading text-4xl sm:text-5xl tracking-wide">{copy.h2}</h2>
          </div>
          {/* Lomarengas wordmark visible at the placement (programme term) */}
          <span className="inline-flex items-center bg-white rounded-lg px-3 py-1.5 shrink-0">
            <img
              src="/images/partners/lomarengas.png"
              alt="Lomarengas"
              width={472}
              height={150}
              loading="lazy"
              decoding="async"
              className="h-5 sm:h-6 w-auto"
            />
          </span>
        </div>
        <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">{copy.lead}</p>

        <div className="flex flex-wrap gap-2 mb-7" role="tablist" aria-label={copy.h2}>
          {tabs.map(({ key, name }) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={tab === key}
              onClick={() => setTab(key)}
              className={`px-4 py-2 min-h-11 rounded-full text-sm font-semibold transition-colors ${
                tab === key ? 'bg-[#DB2777] text-white' : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Mobile: one-row swipe (max ~1 screen); sm+: grid */}
        {/* 🔴 Oikean reunan häivytys vain mobiilissa (Vesa 2026-09-06, mitattu
            scripts/mobile_wrap_audit.mjs): vieritysrivi katkesi kesken kortin
            suoraan ruudun reunaan. sm:stä ylös tämä on ruudukko joka mahtuu
            kokonaan, joten maski pois — muuten se haalistaisi oikean sarakkeen. */}
        <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory [mask-image:linear-gradient(to_right,#000_calc(100%_-_44px),transparent_100%)] sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 sm:overflow-visible sm:pb-0 sm:[mask-image:none]">
          {!ready
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="snap-start shrink-0 w-[78%] sm:w-auto sm:shrink rounded-2xl bg-white/10 animate-pulse aspect-[4/5]" />
              ))
            : cabins.map((c) => {
                const sid = `cabin_card_${sidTab}`
                const href = buildLomarengasCabinUrl(c.slug, sid, lang)
                // 'relative' is load-bearing: the sr-only spans inside are
                // position:absolute, and without a positioned ancestor they
                // anchor to the initial containing block — in a scrolled row
                // that widens the document and mobile Chrome expands the
                // layout viewport (was a real 375px horizontal-scroll bug).
                return (
                  <a
                    key={c.id}
                    href={href}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    onClick={() => trackAffiliateClick('lomarengas', sid, href)}
                    className="relative snap-start shrink-0 w-[78%] sm:w-auto sm:shrink bg-white rounded-2xl overflow-hidden group shadow-[0_6px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_10px_36px_rgba(236,72,153,0.35)] transition-shadow"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-charcoal/30">
                      <img
                        src={c.img}
                        alt={`${c.name}, ${c.place}`}
                        translate="no"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-baseline justify-between gap-2 mb-0.5">
                        <h3 translate="no" className="font-heading text-xl text-night tracking-wide min-w-0 break-words">{c.name}</h3>
                        {c.stars ? (
                          <span className="text-amber-500 text-[11px] shrink-0" aria-label={`${c.stars}/5`}>
                            {'★'.repeat(c.stars)}
                          </span>
                        ) : null}
                      </div>
                      <p className="text-charcoal/60 text-[13px] mb-3 break-words">
                        {c.place === c.muni ? c.place : `${c.place}, ${c.muni}`}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 text-[13px] text-charcoal/75 mb-3.5">
                        {c.p != null && (
                          <span className="inline-flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5 text-pink" aria-hidden="true" />
                            <span className="sr-only">{copy.guestsLabel}: </span>
                            {c.p}
                            {c.pe ? `+${c.pe}` : ''}
                          </span>
                        )}
                        {c.br != null && c.br > 0 && (
                          <span className="inline-flex items-center gap-1.5">
                            <BedDouble className="w-3.5 h-3.5 text-pink" aria-hidden="true" />
                            <span className="sr-only">{copy.bedroomsLabel}: </span>
                            {c.br}
                          </span>
                        )}
                        {c.sqm != null && (
                          <span className="inline-flex items-center gap-1.5">
                            <Ruler className="w-3.5 h-3.5 text-pink" aria-hidden="true" />
                            <span className="sr-only">{copy.sizeLabel}: </span>
                            {nf.format(Math.round(c.sqm))} m²
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 border-t border-gray-100 pt-3">
                        {c.weeklyFrom ? <PriceLine tpl={copy.weekFrom} price={nf.format(Math.round(c.weeklyFrom))} /> : <span />}
                        <span className="inline-flex items-center gap-1 text-pink text-[13px] font-semibold">
                          {copy.viewCabin}
                          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                        </span>
                      </div>
                    </div>
                  </a>
                )
              })}
        </div>

        {ready && total > 0 && (
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
            <a
              href={moreHref}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={() => trackAffiliateClick('lomarengas', `cabin_more_${sidTab}`, moreHref)}
              className="inline-flex max-w-full items-center justify-center gap-1.5 text-sm px-5 py-2.5 rounded-full border border-white/30 text-white font-semibold hover:border-pink hover:text-pink transition-colors"
            >
              <span className="min-w-0 break-words leading-snug">{copy.browseAll.replace('{count}', nf.format(total))}</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </a>
            {areaHrefs?.[tab] && areaLinkLabel && (
              <Link
                to={areaHrefs[tab]!}
                className="inline-flex max-w-full items-center justify-center gap-1.5 text-sm px-5 py-2.5 min-h-11 rounded-full bg-[#DB2777] text-white font-semibold hover:bg-[#BE185D] transition-colors"
              >
                <span className="min-w-0 break-words leading-snug">{areaLinkLabel}</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </Link>
            )}
            <p className="text-white/60 text-[12px] leading-relaxed">
              {group && staticNote
                ? staticNote.replace('{date}', new Date(group.generated + 'T12:00:00Z').toLocaleDateString(lang, { day: 'numeric', month: 'numeric', year: 'numeric' }))
                : copy.dataNote}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
