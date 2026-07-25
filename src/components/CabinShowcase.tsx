import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, BedDouble, Ruler, Users } from 'lucide-react'
import { buildLomarengasCabinUrl, buildLomarengasUrl, CABINS_API } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import type { Lang } from '../i18n/useLang'

// Live cabin cards with REAL Lomarengas photos, served by the affiliate
// Worker's /_cabins endpoint (Adtraction product feed pfid 375, cached in KV,
// refreshed every 24h so delisted cabins drop off automatically). Photo use is
// explicitly allowed by the Lomarengas programme (unlike hotel partners); the
// Lomarengas wordmark stays visible in the band header (programme term).
// Every CTA routes through go/lomarengas so clicks land in D1 with an epi
// placement tag. If the fetch fails (adblock, offline), the band hides itself.

type GroupKey = 'levi' | 'yllas' | 'ruka' | 'saariselka'

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

const TABS: GroupKey[] = ['levi', 'yllas', 'ruka', 'saariselka']
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

export default function CabinShowcase({ copy, areaNames, lang }: { copy: ShowcaseCopy; areaNames: string[]; lang: Lang }) {
  const [data, setData] = useState<ApiData | null>(cabinsCache)
  const [failed, setFailed] = useState(false)
  const [tab, setTab] = useState<GroupKey>('levi')

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

  const cabins = data ? (data.groups[tab] ?? []).slice(0, CARDS_SHOWN) : []
  const total = data?.totals[tab] ?? 0
  const moreHref = buildLomarengasUrl(tab, `cabin_more_${tab}`, lang)

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
          {TABS.map((key, i) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={tab === key}
              onClick={() => setTab(key)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                tab === key ? 'bg-pink text-white' : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {areaNames[i] ?? key}
            </button>
          ))}
        </div>

        {/* Mobile: one-row swipe (max ~1 screen); sm+: grid */}
        <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 sm:overflow-visible sm:pb-0">
          {!data
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="snap-start shrink-0 w-[78%] sm:w-auto sm:shrink rounded-2xl bg-white/10 animate-pulse aspect-[4/5]" />
              ))
            : cabins.map((c) => {
                const sid = `cabin_card_${tab}`
                const href = buildLomarengasCabinUrl(c.slug, sid, lang)
                return (
                  <a
                    key={c.id}
                    href={href}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    onClick={() => trackAffiliateClick('lomarengas', sid, href)}
                    className="snap-start shrink-0 w-[78%] sm:w-auto sm:shrink bg-white rounded-2xl overflow-hidden group shadow-[0_6px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_10px_36px_rgba(236,72,153,0.35)] transition-shadow"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-charcoal/30">
                      <img
                        src={c.img}
                        alt={`${c.name}, ${c.place}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-baseline justify-between gap-2 mb-0.5">
                        <h3 className="font-heading text-xl text-night tracking-wide truncate min-w-0">{c.name}</h3>
                        {c.stars ? (
                          <span className="text-amber-500 text-[11px] shrink-0" aria-label={`${c.stars}/5`}>
                            {'★'.repeat(c.stars)}
                          </span>
                        ) : null}
                      </div>
                      <p className="text-charcoal/60 text-[13px] mb-3 truncate">
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

        {data && total > 0 && (
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
            <a
              href={moreHref}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={() => trackAffiliateClick('lomarengas', `cabin_more_${tab}`, moreHref)}
              className="inline-flex max-w-full items-center justify-center gap-1.5 text-sm px-5 py-2.5 rounded-full border border-white/30 text-white font-semibold hover:border-pink hover:text-pink transition-colors"
            >
              <span className="truncate">{copy.browseAll.replace('{count}', nf.format(total))}</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </a>
            <p className="text-white/50 text-[12px] leading-relaxed">{copy.dataNote}</p>
          </div>
        )}
      </div>
    </section>
  )
}
