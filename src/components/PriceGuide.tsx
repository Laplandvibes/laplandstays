import { useEffect, useState } from 'react'
import { ArrowRight, Sparkles, TreePine, Snowflake, Mountain, Building2 } from 'lucide-react'
import { HOTEL_SEARCH, buildHotelSearch } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import AffiliateDisclosure from './AffiliateDisclosure'
import { useLang, type Lang } from '../i18n/useLang'
import type { PriceGuideCopy } from './PriceGuide.copy.en'
import enCopy from './PriceGuide.copy.en'

// Non-translatable per-tier data. Order matches `tiers` in PriceGuide.copy.*.
const TIER_META = [
  { icon: Sparkles, cta: HOTEL_SEARCH.auroraGlass, campaign: 'price-glass-igloo' },
  { icon: TreePine, cta: HOTEL_SEARCH.lakesideCabin, campaign: 'price-aurora-cabin' },
  { icon: Snowflake, cta: buildHotelSearch('Kittilä, Finland', 'property_snow_hotel'), campaign: 'price-snow-hotel' },
  { icon: Mountain, cta: HOTEL_SEARCH.designerLodge, campaign: 'price-wilderness-lodge' },
  { icon: Building2, cta: HOTEL_SEARCH.hotel, campaign: 'price-hotel-chain' },
]

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

export default function PriceGuide() {
  const copy = usePriceGuideCopy()
  const onClick = (campaign: string, href: string) => () => {
    trackAffiliateClick('hotelscom', campaign, href)
  }

  // One dark "rate card" panel instead of five white towers: every tier is a
  // single tappable row where category + price range read instantly. On mobile
  // a row is two short lines, so the whole index fits one screen — the section
  // delivers the lead's "at a glance" promise without scroll (Vesa 2026-07-07).
  return (
    <section id="price-guide" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-pink/5 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold mb-3">
            {copy.eyebrow}
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-night tracking-wide">
            {copy.heading}
          </h2>
          <p className="mt-4 text-charcoal/70 text-base sm:text-lg leading-relaxed hidden sm:block">
            {copy.lead}
          </p>
        </div>

        {/* Light editorial rate card — stays on the page's cream/Playfair idiom
            (the dark navy panel clashed with the light site; prices in the body
            sans read as data, not decoration — Vesa 2026-07-07). */}
        <div className="bg-white rounded-3xl overflow-hidden ring-1 ring-night/[0.08] shadow-xl shadow-night/[0.07]">
          {copy.tiers.map((tier, i) => {
            const meta = TIER_META[i]
            const Icon = meta.icon
            return (
              <a
                key={tier.name}
                href={meta.cta}
                target="_blank"
                rel="sponsored nofollow noopener"
                onClick={onClick(meta.campaign, meta.cta)}
                aria-label={`${tier.name} — ${tier.ctaLabel}`}
                className="group flex items-center gap-3 sm:gap-6 px-4 sm:px-8 py-4 sm:py-5 border-b border-night/[0.06] last:border-b-0 hover:bg-pink/[0.03] transition-colors"
              >
                <div className="hidden sm:flex w-11 h-11 rounded-xl bg-pink/10 items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-pink" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-xl sm:text-2xl text-night tracking-wide leading-tight">
                    {tier.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-charcoal/50 uppercase tracking-[0.18em] mt-0.5 truncate">
                    {tier.keyword}
                  </p>
                  <p className="hidden md:block text-charcoal/60 text-sm leading-snug mt-1.5 truncate">
                    <span className="text-charcoal/45">{copy.propertiesLabel}</span>{' '}
                    {tier.examples.join(' · ')}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <p className="font-body font-extrabold text-lg sm:text-2xl text-night tracking-tight tabular-nums whitespace-nowrap">
                    {tier.range}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-charcoal/50 uppercase tracking-[0.18em]">
                    {tier.note}
                  </p>
                </div>

                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal/30 group-hover:text-pink group-hover:translate-x-0.5 transition-all shrink-0" />
              </a>
            )
          })}

          {/* Booking note as the panel footer */}
          <div className="bg-pink/[0.04] border-t border-night/[0.06] px-4 sm:px-8 py-4 sm:py-5 text-center">
            <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              <span className="font-heading text-pink tracking-wide text-lg sm:text-xl">{copy.tip.label}</span>{' '}
              {copy.tip.pre}
              <strong className="text-night">{copy.tip.strong}</strong>
              {copy.tip.post}
            </p>
          </div>
        </div>

        <AffiliateDisclosure variant="compact" className="mt-6 sm:mt-8 text-center" />
      </div>
    </section>
  )
}
