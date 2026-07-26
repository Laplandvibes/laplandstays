import { MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { HOTEL_SEARCH_FOR } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import { useLang, useLocalePath, type Lang } from '../i18n/useLang'
import { useCopy } from '../i18n/useCopy'
import FeaturedPartnerSlot from './FeaturedPartnerSlot'
import type { FeaturedPlacement } from '../data/adSlots'
import enCopy from './Locations.copy.en'
import type { Copy } from './Locations.copy.types'


const SLUGS = ['levi', 'yllas', 'saariselka', 'inari'] as const
const IMAGES = ['/images/levi-card.webp', '/images/yllas-card.webp', '/images/saariselka-card.webp', '/images/inari-card.webp']
// Per language, not per module load: `locale` decides Sembo (fi) vs Trip.com.
const searchUrlsFor = (lang: Lang) => {
  const h = HOTEL_SEARCH_FOR(lang)
  return [h.levi, h.yllas, h.saariselka, h.inari]
}


const loaders: Record<Lang, () => Promise<{ default: Copy }>> = {
  'en': () => import('./Locations.copy.en'),
  'fi': () => import('./Locations.copy.fi'),
  'de': () => import('./Locations.copy.de'),
  'ja': () => import('./Locations.copy.ja'),
  'es': () => import('./Locations.copy.es'),
  'pt-BR': () => import('./Locations.copy.ptBR'),
  'zh-CN': () => import('./Locations.copy.zhCN'),
  'ko': () => import('./Locations.copy.ko'),
  'fr': () => import('./Locations.copy.fr'),
  'it': () => import('./Locations.copy.it'),
  'nl': () => import('./Locations.copy.nl'),
  'sv': () => import('./Locations.copy.sv'),
}

const cache: Partial<Record<Lang, Copy>> = {}

export default function Locations({ placement }: { placement?: FeaturedPlacement } = {}) {
  const to = useLocalePath()
  const lang = useLang()
  const c = useCopy<Copy>(enCopy, loaders, cache)
  const searchUrls = searchUrlsFor(lang)
  const locations = c.locations.map((loc, i) => ({
    ...loc,
    slug: SLUGS[i],
    image: IMAGES[i],
    searchUrl: searchUrls[i],
  }))

  return (
    <section id="destinations" className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
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

        {/* Myytävä Esittelykumppani-paikka isojen kohdekorttien kärjessä
            (KKV: merkitty mainokseksi). Tyhjänä = vaalea house-ad; muilla kuin
            fi/en/sv ei renderöidy mitään eikä pintaan jää aukkoa. */}
        <FeaturedPartnerSlot placement={placement} locale={lang} surface="light" />

        <div className="space-y-6">
          {locations.map((location, index) => (
            <div
              key={location.name}
              className={`group flex flex-col ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } rounded-2xl overflow-hidden bg-gray-50 hover:bg-pink/5 transition-colors duration-500 border border-gray-100`}
            >
              <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                <img
                  src={location.image}
                  alt={`${location.name}, Finnish Lapland`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 decoding="async" width="800" height="600"/>
              </div>

              <div className="lg:w-1/2 p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-pink" />
                  <span className="text-pink text-sm uppercase tracking-widest font-semibold">{location.name}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-heading text-night tracking-wide mb-3">
                  {location.tagline}
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-6">{location.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {location.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs uppercase tracking-wider text-charcoal/70 bg-pink/10 px-3 py-1.5 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <p className="text-sm font-semibold text-night mb-6">
                  <span className="text-pink">{c.pricesLabel}</span> {location.priceFrom}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <a
                    href={location.searchUrl}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    onClick={() => trackAffiliateClick('lodging', `locations_${location.slug}`, location.searchUrl)}
                    className="inline-flex items-center justify-center gap-2 bg-pink hover:bg-pink/90 text-white px-6 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
                  >
                    {c.checkAvailability}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    to={to(`/destinations/${location.slug}`)}
                    className="inline-flex items-center gap-2 text-charcoal/70 hover:text-pink font-semibold text-sm uppercase tracking-wider transition-colors"
                  >
                    {c.guideTo(location.name)}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
