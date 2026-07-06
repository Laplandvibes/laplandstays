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

  return (
    <section id="price-guide" className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-pink/5 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            {copy.eyebrow}
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-night tracking-wide">
            {copy.heading}
          </h2>
          <p className="mt-5 text-charcoal/70 text-lg leading-relaxed">
            {copy.lead}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {copy.tiers.map((tier, i) => {
            const meta = TIER_META[i]
            const Icon = meta.icon
            return (
              <div
                key={tier.name}
                className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-pink/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
                  {/* Icon + name */}
                  <div className="flex items-center gap-4 lg:w-80 shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-pink/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-pink" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl text-night tracking-wide">{tier.name}</h3>
                      <p className="text-xs text-charcoal/70 uppercase tracking-widest mt-0.5">
                        {tier.keyword}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="lg:w-60 shrink-0">
                    <p className="font-heading text-3xl sm:text-4xl text-[#B45309] tracking-wide whitespace-nowrap">
                      {tier.range}
                    </p>
                    <p className="text-xs text-charcoal/70 uppercase tracking-wider">{tier.note}</p>
                  </div>

                  {/* Body + examples + CTA */}
                  <div className="flex-1 min-w-0">
                    <p className="text-charcoal/75 leading-relaxed mb-3">{tier.body}</p>
                    <p className="text-sm text-charcoal/60 mb-4">
                      <span className="font-semibold text-night">{copy.propertiesLabel}</span>{' '}
                      {tier.examples.join(' · ')}
                    </p>
                    <a
                      href={meta.cta}
                      target="_blank"
                      rel="sponsored nofollow noopener"
                      onClick={onClick(meta.campaign, meta.cta)}
                      className="inline-flex items-center gap-2 text-pink hover:text-pink/80 font-semibold text-sm uppercase tracking-wider transition-colors"
                    >
                      {tier.ctaLabel}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Booking note */}
        <div className="mt-10 bg-night rounded-2xl p-6 sm:p-8 text-center">
          <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            <span className="font-heading text-amber tracking-wide text-xl">{copy.tip.label}</span>{' '}
            {copy.tip.pre}
            <strong>{copy.tip.strong}</strong>
            {copy.tip.post}
          </p>
        </div>

        <AffiliateDisclosure variant="compact" className="mt-8 text-center" />
      </div>
    </section>
  )
}
