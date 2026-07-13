import { Sparkles, TreePine, Mountain, Gem, ArrowRight } from 'lucide-react'
import { HOTEL_SEARCH } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import { type Lang } from '../i18n/useLang'
import { useCopy } from '../i18n/useCopy'
import enCopy from './PropertyTypes.copy.en'
import type { Copy } from './PropertyTypes.copy.types'


const META = [
  { icon: Sparkles, image: '/images/aurora-villas.webp', href: HOTEL_SEARCH.auroraGlass, campaign: 'aurora-glass' },
  { icon: TreePine, image: '/images/lakeside-cabins.webp', href: HOTEL_SEARCH.lakesideCabin, campaign: 'lakeside-cabin' },
  { icon: Mountain, image: '/images/mountain-chalets.webp', href: HOTEL_SEARCH.mountainChalet, campaign: 'mountain-chalet' },
  { icon: Gem, image: '/images/designer-lodges.webp', href: HOTEL_SEARCH.designerLodge, campaign: 'designer-lodge' },
]


const loaders: Record<Lang, () => Promise<{ default: Copy }>> = {
  'en': () => import('./PropertyTypes.copy.en'),
  'fi': () => import('./PropertyTypes.copy.fi'),
  'de': () => import('./PropertyTypes.copy.de'),
  'ja': () => import('./PropertyTypes.copy.ja'),
  'es': () => import('./PropertyTypes.copy.es'),
  'pt-BR': () => import('./PropertyTypes.copy.ptBR'),
  'zh-CN': () => import('./PropertyTypes.copy.zhCN'),
  'ko': () => import('./PropertyTypes.copy.ko'),
  'fr': () => import('./PropertyTypes.copy.fr'),
  'it': () => import('./PropertyTypes.copy.it'),
  'nl': () => import('./PropertyTypes.copy.nl'),
  'sv': () => import('./PropertyTypes.copy.sv'),
}

const cache: Partial<Record<Lang, Copy>> = {}

export default function PropertyTypes() {
  const c = useCopy<Copy>(enCopy, loaders, cache)
  const types = c.types.map((t, i) => ({ ...t, ...META[i] }))

  const onClick = (campaign: string, href: string) => () => {
    trackAffiliateClick('hotelscom', `property_type_${campaign.replace(/-/g, '_')}`, href)
  }

  return (
    <section id="property-types" className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">{c.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-night tracking-wide">
            {c.h2}
          </h2>
          <p className="mt-5 text-charcoal/70 text-lg leading-relaxed">
            {c.lead}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((type) => {
            const Icon = type.icon
            return (
              <a
                key={type.title}
                href={type.href}
                target="_blank"
                rel="sponsored nofollow noopener"
                onClick={onClick(type.campaign, type.href)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col bg-night"
              >
                {/* Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   decoding="async" width="1920" height="1080" fetchPriority="high"/>
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-pink/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Copy band, text fully BELOW the image */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl sm:text-2xl font-heading text-white tracking-wide mb-1.5">
                    {type.title}
                  </h3>
                  <p className="text-pink/90 text-sm font-semibold mb-3">{type.short}</p>
                  <p className="text-white/70 text-sm leading-relaxed mb-4 flex-1">{type.body}</p>
                  <p className="text-amber text-xs font-bold uppercase tracking-widest mb-4">
                    {type.priceFrom}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white text-sm font-semibold uppercase tracking-wider group-hover:text-pink transition-colors">
                    {c.checkAvailability}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
