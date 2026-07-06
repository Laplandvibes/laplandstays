import { Thermometer, Bell, Flame, UtensilsCrossed, Snowflake, Mountain, ArrowRight } from 'lucide-react'
import { HOTEL_SEARCH, PROPERTY_SEARCH } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import { type Lang } from '../i18n/useLang'
import { useCopy } from '../i18n/useCopy'
import enCopy from './AmenitiesShowcase.copy.en'
import type { Copy } from './AmenitiesShowcase.copy.types'


const META = [
  { icon: Thermometer, img: '/images/amenities/amenity-sauna', hrefs: [{ href: HOTEL_SEARCH.lakesideCabin, sid: 'amenity_sauna_lakeside_cabin' }, { href: PROPERTY_SEARCH.nellim, sid: 'amenity_sauna_nellim' }] },
  { icon: Bell, img: '/images/amenities/amenity-aurora-alert', hrefs: [{ href: PROPERTY_SEARCH.kakslauttanen, sid: 'amenity_aurora_kakslauttanen' }, { href: PROPERTY_SEARCH.auroraVillage, sid: 'amenity_aurora_aurora_village' }] },
  { icon: Flame, img: '/images/amenities/amenity-fireplace', hrefs: [{ href: HOTEL_SEARCH.designerLodge, sid: 'amenity_fireplace_designer' }, { href: PROPERTY_SEARCH.muotka, sid: 'amenity_fireplace_muotka' }] },
  { icon: UtensilsCrossed, img: '/images/amenities/amenity-kitchen', hrefs: [{ href: HOTEL_SEARCH.lakesideCabin, sid: 'amenity_kitchen_lakeside' }, { href: HOTEL_SEARCH.mountainChalet, sid: 'amenity_kitchen_chalet' }] },
  { icon: Snowflake, img: '/images/amenities/amenity-hot-tub', hrefs: [{ href: HOTEL_SEARCH.levi, sid: 'amenity_hottub_levi' }, { href: PROPERTY_SEARCH.apukka, sid: 'amenity_hottub_apukka' }] },
  { icon: Mountain, img: '/images/amenities/amenity-ski-in', hrefs: [{ href: HOTEL_SEARCH.levi, sid: 'amenity_ski_levi' }, { href: HOTEL_SEARCH.yllas, sid: 'amenity_ski_yllas' }] },
] as const


const loaders: Record<Lang, () => Promise<{ default: Copy }>> = {
  'en': () => import('./AmenitiesShowcase.copy.en'),
  'fi': () => import('./AmenitiesShowcase.copy.fi'),
  'de': () => import('./AmenitiesShowcase.copy.de'),
  'ja': () => import('./AmenitiesShowcase.copy.ja'),
  'es': () => import('./AmenitiesShowcase.copy.es'),
  'pt-BR': () => import('./AmenitiesShowcase.copy.ptBR'),
  'zh-CN': () => import('./AmenitiesShowcase.copy.zhCN'),
  'ko': () => import('./AmenitiesShowcase.copy.ko'),
  'fr': () => import('./AmenitiesShowcase.copy.fr'),
  'it': () => import('./AmenitiesShowcase.copy.it'),
  'nl': () => import('./AmenitiesShowcase.copy.nl'),
}

const cache: Partial<Record<Lang, Copy>> = {}

export default function AmenitiesShowcase() {
  const c = useCopy<Copy>(enCopy, loaders, cache)
  const amenities = c.items.map((it, i) => ({
    ...it,
    icon: META[i].icon,
    img: META[i].img,
    examples: it.exampleNames.map((name, j) => ({ name, ...META[i].hrefs[j] })),
  }))

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-night text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">{c.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white tracking-wide">
            {c.h2}
          </h2>
          <p className="mt-5 text-white/80 text-lg leading-relaxed">
            {c.lead}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity) => {
            const Icon = amenity.icon
            return (
              <div
                key={amenity.title}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white/[0.04] border border-white/10 hover:border-pink/40 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <picture>
                    <source srcSet={`${amenity.img}.avif`} type="image/avif" />
                    <img
                      src={`${amenity.img}.webp`}
                      alt={amenity.title}
                      loading="lazy"
                      decoding="async"
                      width="900"
                      height="506"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-night/55 to-transparent" aria-hidden="true" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-night/70 backdrop-blur-sm border border-white/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-pink" />
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-7">
                <h3 className="text-2xl font-heading text-white tracking-wide mb-3">{amenity.title}</h3>
                <p className="text-white/80 leading-relaxed mb-4 text-[15px]">{amenity.body}</p>

                <p className="text-[11px] uppercase tracking-widest text-white/80 font-semibold mb-2">{c.lookForLabel}</p>
                <p className="text-sm text-white/70 leading-relaxed mb-4">{amenity.lookForIn}</p>

                <div className="mt-auto pt-3 border-t border-white/10 flex flex-wrap gap-2">
                  {amenity.examples.map((ex) => (
                    <a
                      key={ex.name}
                      href={ex.href}
                      target="_blank"
                      rel="sponsored nofollow noopener"
                      onClick={() => trackAffiliateClick('hotelscom', ex.sid, ex.href)}
                      className="text-[12px] px-2.5 py-1 rounded-full bg-pink/10 text-pink font-semibold hover:bg-pink hover:text-white transition-colors"
                    >
                      {ex.name}
                    </a>
                  ))}
                </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-14">
          <a
            href={HOTEL_SEARCH.lapland}
            target="_blank"
            rel="sponsored nofollow noopener"
            onClick={() => trackAffiliateClick('hotelscom', 'amenities_cta', HOTEL_SEARCH.lapland)}
            className="inline-flex items-center gap-3 bg-pink hover:bg-pink/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-sm uppercase tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            {c.cta}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
