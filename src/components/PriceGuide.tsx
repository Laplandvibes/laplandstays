import { useEffect, useState } from 'react'
import { ArrowRight, Sparkles, TreePine, Snowflake, Mountain, Building2 } from 'lucide-react'
import { HOTEL_SEARCH_FOR, buildHotelSearch } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import AffiliateDisclosure from './AffiliateDisclosure'
import { useLang, type Lang } from '../i18n/useLang'
import type { PriceGuideCopy } from './PriceGuide.copy.en'
import enCopy from './PriceGuide.copy.en'

// Non-translatable per-tier data. Order matches `tiers` in PriceGuide.copy.*.
//
// 2026-09-24 (Vesa: "luvut pois, ohjeet jäävät"): the tiers no longer carry euro
// figures. A rate typed into the page is out of date the week after, and this
// site had one in five surfaces at once. What survives is what does not go
// stale: the ORDER of the categories and how far apart they sit. Each tier is a
// band on a 0–1 price-level axis, drawn against the same track, so the section
// still answers "which of these is the expensive one" by shape. The rate itself
// is on the booking page the row links to.
// Per language, not per module load: locale decides Sembo (fi) vs Trip.com.
const tierMetaFor = (lang: Lang) => [
  { icon: Sparkles, from: 0.11, to: 1, cta: HOTEL_SEARCH_FOR(lang).auroraGlass, campaign: 'price-glass-igloo' },
  { icon: TreePine, from: 0.04, to: 0.43, cta: HOTEL_SEARCH_FOR(lang).lakesideCabin, campaign: 'price-aurora-cabin' },
  { icon: Snowflake, from: 0.04, to: 0.21, cta: buildHotelSearch('Kittilä, Finland', 'property_snow_hotel', lang), campaign: 'price-snow-hotel' },
  { icon: Mountain, from: 0.07, to: 0.36, cta: HOTEL_SEARCH_FOR(lang).designerLodge, campaign: 'price-wilderness-lodge' },
  { icon: Building2, from: 0, to: 0.18, cta: HOTEL_SEARCH_FOR(lang).hotel, campaign: 'price-hotel-chain' },
]

// Shared 0–1 level axis for every band. Gridlines at a third and two thirds keep
// the track readable; they are marks, not amounts.
const SCALE_MIN = 0
const SCALE_MAX = 1
const SCALE_TICKS = [0.33, 0.66]
const SCALE_SPAN = SCALE_MAX - SCALE_MIN

// Warm-to-hot price ramp built from this site's own tokens: gold (#D4A574) →
// amber (#F59E0B) → vibe-pink (#EC4899). Each bar shows the slice of the ramp
// its range covers, so hue encodes "how expensive" — a €100 hotel row reads
// gold, a glass igloo sweeps all the way into pink. A tier's accent (icon,
// end cap, hover) is the ramp colour at its ceiling.
// Pink lands at 75% rather than at the very end: with it at 100% the four
// cheaper tiers all resolved to near-identical amber and the palette read as
// one colour again.
const RAMP_CSS = 'linear-gradient(90deg, #D4A574 0%, #F59E0B 30%, #EC4899 75%)'
const RAMP_STOPS: { at: number; rgb: [number, number, number] }[] = [
  { at: 0, rgb: [212, 165, 116] },
  { at: 0.3, rgb: [245, 158, 11] },
  { at: 0.75, rgb: [236, 72, 153] },
]

function rampRgb(t: number): [number, number, number] {
  // Clamp to the last stop, not to 1: with pink parked at 0.75 an unclamped
  // t=1 extrapolated past it and pushed the top tier to a magenta that is not
  // in the palette.
  const last = RAMP_STOPS[RAMP_STOPS.length - 1].at
  const x = Math.min(last, Math.max(0, t))
  let lo = RAMP_STOPS[0]
  let hi = RAMP_STOPS[RAMP_STOPS.length - 1]
  for (let i = 0; i < RAMP_STOPS.length - 1; i++) {
    if (x >= RAMP_STOPS[i].at && x <= RAMP_STOPS[i + 1].at) {
      lo = RAMP_STOPS[i]
      hi = RAMP_STOPS[i + 1]
      break
    }
  }
  const k = (x - lo.at) / (hi.at - lo.at || 1)
  return [
    Math.round(lo.rgb[0] + (hi.rgb[0] - lo.rgb[0]) * k),
    Math.round(lo.rgb[1] + (hi.rgb[1] - lo.rgb[1]) * k),
    Math.round(lo.rgb[2] + (hi.rgb[2] - lo.rgb[2]) * k),
  ]
}

const pct = (v: number) => ((v - SCALE_MIN) / SCALE_SPAN) * 100

// ---------- copy (lazy-loaded per locale, same pattern as Transport.tsx) ----------

const cache: Partial<Record<Lang, PriceGuideCopy>> = { en: enCopy }
const loaders: Record<Lang, () => Promise<{ default: PriceGuideCopy }>> = {
  en: () => import('./PriceGuide.copy.en'),
  fi: () => import('./PriceGuide.copy.fi'),
  de: () => import('./PriceGuide.copy.de'),
  ja: () => import('./PriceGuide.copy.ja'),
  es: () => import('./PriceGuide.copy.es'),
  'pt-BR': () => import('./PriceGuide.copy.ptBR'),
  'zh-CN': () => import('./PriceGuide.copy.zhCN'),
  ko: () => import('./PriceGuide.copy.ko'),
  fr: () => import('./PriceGuide.copy.fr'),
  it: () => import('./PriceGuide.copy.it'),
  nl: () => import('./PriceGuide.copy.nl'),
  sv: () => import('./PriceGuide.copy.sv'),
}

function usePriceGuideCopy(): PriceGuideCopy {
  const lang = useLang()
  const [copy, setCopy] = useState<PriceGuideCopy>(() => cache[lang] ?? cache.en!)
  useEffect(() => {
    const cached = cache[lang]
    if (cached) {
      setCopy(cached)
      return
    }
    let cancelled = false
    loaders[lang]().then((mod) => {
      cache[lang] = mod.default
      if (!cancelled) setCopy(mod.default)
    })
    return () => {
      cancelled = true
    }
  }, [lang])
  return copy
}

// Identity | band | arrow. The band track is a FIXED width: each row is its own
// grid container, so an `auto` column sized itself per row and the bands ended
// up at a different x in every row, which defeats the whole point of a shared
// axis. Below md the band drops to its own full-width line.
const GRID =
  'grid grid-cols-[minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_clamp(140px,26vw,300px)_1rem] gap-x-4 md:gap-x-6'

function RangeBar({ from, to, accent }: { from: number; to: number; accent: string }) {
  const left = pct(from)
  const width = Math.max(pct(to) - left, 2)
  // Paint the ramp across the whole track, then show only this range's slice.
  const bgSize = (100 / width) * 100
  const bgPos = width < 100 ? (left / (100 - width)) * 100 : 0
  return (
    <div className="relative h-1.5 w-full rounded-full bg-night/[0.06]" aria-hidden="true">
      {SCALE_TICKS.map((t) => (
        <span
          key={t}
          className="absolute top-0 h-full w-px bg-night/[0.09]"
          style={{ left: `${pct(t)}%` }}
        />
      ))}
      <span
        className="absolute top-0 h-full rounded-full"
        style={{
          left: `${left}%`,
          width: `${width}%`,
          backgroundImage: RAMP_CSS,
          backgroundSize: `${bgSize}% 100%`,
          backgroundPosition: `${bgPos}% 0`,
        }}
      />
      {/* Ceiling marker: where this category tops out on the shared scale. */}
      <span
        className="absolute h-2.5 w-2.5 rounded-full ring-2 ring-white transition-transform duration-300 group-hover:scale-125"
        style={{ left: `${left + width}%`, top: '50%', transform: 'translate(-50%, -50%)', background: accent }}
      />
    </div>
  )
}

export default function PriceGuide() {
  const lang = useLang()
  const copy = usePriceGuideCopy()
  const onClick = (campaign: string, href: string) => () => {
    trackAffiliateClick('lodging', campaign, href)
  }

  // A price ladder rather than a list of five identical rows: every category
  // sits on one shared level axis, so the section answers "which of these is the
  // expensive one" by shape (Vesa 2026-07-24, replacing the flat rate table;
  // amounts removed 2026-09-24). The SEO keyword slug that used to sit under
  // each name is gone: the anchor properties are the line worth reading there.
  return (
    <section id="price-guide" className="lvs-warm-veil py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#FBF6F0] via-white to-white">
      <div className="relative max-w-5xl mx-auto">
        {/* Centred like every other section header on the page; the measure is
            capped at ~54ch so the lead stops wrapping into ragged full-width
            lines the way it did at max-w-3xl. */}
        <div className="mb-8 sm:mb-12 mx-auto max-w-[54ch] text-center">
          <p className="text-pink uppercase tracking-[0.28em] text-xs sm:text-sm font-semibold mb-3">
            {copy.eyebrow}
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-night tracking-wide">
            {copy.heading}
          </h2>
          <p className="mt-4 text-charcoal/70 text-base sm:text-[17px] leading-relaxed hidden sm:block">
            {copy.lead}
          </p>
        </div>

        <div className="lvs-card overflow-hidden rounded-3xl">
          {/* Scale header: labels the axis the bars below are drawn against.
              Visible on mobile too: below md the row drops its band onto its own
              line, and an unlabelled bar with no figure beside it says nothing. */}
          <div className={`${GRID} px-5 sm:px-8 pt-5 md:pt-6 pb-3 md:pb-4 items-end`}>
            <span />
            <div className="relative">
              <div className="flex justify-between text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal/40">
                <span>{copy.scale.low}</span>
                <span>{copy.scale.high}</span>
              </div>
              <div className="relative mt-1.5 h-1.5">
                {SCALE_TICKS.map((t) => (
                  <span key={t} className="absolute bottom-0 h-1.5 w-px bg-night/[0.12]" style={{ left: `${pct(t)}%` }} />
                ))}
                <span className="absolute bottom-0 left-0 right-0 h-px bg-night/[0.08]" />
              </div>
            </div>
            <span />
          </div>

          {copy.tiers.map((tier, i) => {
            const meta = tierMetaFor(lang)[i]
            const Icon = meta.icon
            const [r, g, b] = rampRgb(pct(meta.to) / 100)
            const accent = `rgb(${r} ${g} ${b})`
            return (
              <a
                key={tier.name}
                href={meta.cta}
                target="_blank"
                rel="sponsored nofollow noopener"
                onClick={onClick(meta.campaign, meta.cta)}
                aria-label={`${tier.name}: ${tier.ctaLabel}`}
                style={{ ['--tier-accent' as string]: accent }}
                className={`${GRID} group items-center px-5 sm:px-8 py-5 border-t border-night/[0.055] transition-colors duration-200 hover:bg-[#FDF9F4]`}
              >
                <div className="col-start-1 row-start-1 flex items-center gap-3.5 min-w-0">
                  <span
                    className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: `rgb(${r} ${g} ${b} / 0.12)` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: accent }} />
                  </span>
                  <div className="min-w-0">
                    {/* leading-tight, not leading-none: Bebas umlauts (ä/ö in
                        fi/sv/de) sit high and clip against a 1.0 line box. */}
                    <h3 className="font-heading text-xl sm:text-2xl text-night tracking-wide leading-tight">
                      {tier.name}
                    </h3>
                    {/* Three names, not all five: the full list overran the
                        column and the clamp cut a property name mid-word. */}
                    <p className="mt-1.5 text-[13px] leading-snug text-charcoal/55 line-clamp-1">
                      {tier.examples.slice(0, 3).join(' · ')}
                    </p>
                  </div>
                </div>

                <ArrowRight className="hidden md:block col-start-3 row-start-1 h-4 w-4 shrink-0 self-center text-charcoal/25 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--tier-accent)]" />

                <div className="col-start-1 row-start-2 mt-4 md:col-start-2 md:row-start-1 md:mt-0 md:self-center">
                  <RangeBar from={meta.from} to={meta.to} accent={accent} />
                </div>
              </a>
            )
          })}

          {/* Booking note: left-aligned at a readable measure instead of a
              centred block that wrapped into ragged lines. */}
          <div className="border-t border-night/[0.055] bg-[#FBF6F0] px-5 sm:px-8 py-5 sm:py-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-pink">
              {copy.tip.label.replace(/[.:：。]\s*$/, '')}
            </p>
            <p className="mt-2 max-w-[68ch] text-[15px] leading-relaxed text-charcoal/75">
              {copy.tip.pre}
              <strong className="font-semibold text-night">{copy.tip.strong}</strong>
              {copy.tip.post}
            </p>
          </div>
        </div>

        <AffiliateDisclosure variant="compact" className="mt-6 sm:mt-8 text-center" />
      </div>
    </section>
  )
}
