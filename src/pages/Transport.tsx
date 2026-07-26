import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArrowRight, Plane, Bus, Car as CarIcon, Train } from 'lucide-react'
import SEO from '../components/SEO'
import { localizeArticle } from '../lib/jsonLd'
import AffiliateDisclosure from '../components/AffiliateDisclosure'
import ReviewedBy from '../components/ReviewedBy'
import { REVIEWED_DATE } from '../lib/reviewDates'
import Newsletter from '../components/Newsletter'
import PageBreadcrumb from '../components/PageBreadcrumb'
import TripCTA from '../components/TripCTA'
import { CARS_FOR, HOTEL_SEARCH_FOR, buildAffiliateUrl } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import AdUnit from '../../../shared/ads/AdUnit'
import semboAd from '../../../shared/ads/advertisers/sembo'
import { useLang, useLocalePath, type Lang } from '../i18n/useLang'
import type { PageCopy } from './Transport.copy.types'
import enCopy from './Transport.copy.en'

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get to Finnish Lapland, Flights, Trains, Buses, Car Rental',
  description:
    'Compare Finnish Lapland transport options: which airport for which destination, real bus and taxi prices from KTT/RVN/IVL/ENF, the Helsinki overnight train, and when renting a car is worth it.',
  author: {
    '@type': 'Person',
    name: 'Vesa Pesola',
    jobTitle: 'Editor / operator',
    worksFor: { '@type': 'Organization', name: 'Lapeso Oy' },
    url: 'https://laplandstays.com/editorial-policy',
  },
  publisher: { '@type': 'Organization', name: 'LaplandStays' },
  datePublished: '2026-04-26',
  dateModified: '2026-04-26',
  mainEntityOfPage: 'https://laplandstays.com/transport',

  image: "https://laplandstays.com/og/transport-1200x630.jpg",
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://laplandstays.com/' },
    { '@type': 'ListItem', position: 2, name: 'Transport', item: 'https://laplandstays.com/transport' },
  ],
}

// ---------- copy (lazy-loaded per locale) ----------

const cache: Partial<Record<Lang, PageCopy>> = { en: enCopy }
const loaders: Record<Lang, () => Promise<{ default: PageCopy }>> = {
  en: () => import('./Transport.copy.en'),
  fi: () => import('./Transport.copy.fi'),
  de: () => import('./Transport.copy.de'),
  ja: () => import('./Transport.copy.ja'),
  es: () => import('./Transport.copy.es'),
  'pt-BR': () => import('./Transport.copy.ptBR'),
  'zh-CN': () => import('./Transport.copy.zhCN'),
  ko: () => import('./Transport.copy.ko'),
  fr: () => import('./Transport.copy.fr'),
  it: () => import('./Transport.copy.it'),
  nl: () => import('./Transport.copy.nl'),
  sv: () => import('./Transport.copy.sv'),
}

function usePageCopy(): PageCopy {
  const lang = useLang()
  const [copy, setCopy] = useState<PageCopy>(() => cache[lang] ?? cache.en!)
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


// Per language, not per module load (see lib/affiliate.ts).
const airportMetaFor = (lang: Lang) => [
  { iata: 'rvn', carsHref: CARS_FOR(lang).fromRovaniemi, carsSid: 'transport_cars_rvn', flightSid: 'transport_flight_hel_rvn' },
  { iata: 'ktt', carsHref: CARS_FOR(lang).fromKittila, carsSid: 'transport_cars_ktt', flightSid: 'transport_flight_hel_ktt' },
  { iata: 'ivl', carsHref: CARS_FOR(lang).fromIvalo, carsSid: 'transport_cars_ivl', flightSid: 'transport_flight_hel_ivl' },
  { iata: 'enf', carsHref: CARS_FOR(lang).generic, carsSid: 'transport_cars_enf', flightSid: 'transport_flight_hel_enf' },
]

export default function Transport() {
  const to = useLocalePath()
  const lang = useLang()
  const copy = usePageCopy()
  const { seo, ui } = copy
  const onClick = (sid: string, href: string) => () => trackAffiliateClick('economybookings', sid, href)
  const onHotels = (sid: string, href: string) => () => trackAffiliateClick('lodging', sid, href)

  const carsFromHelsinki = CARS_FOR(lang).fromHelsinki
  const carsRovaniemiOneWay = buildAffiliateUrl({ partner: 'cars', sid: 'transport_cars_rvn_oneway', query: { pickup_location: 'RVN' }, lang })

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath="/transport"
        ogImage="https://laplandstays.com/og-default.jpg"
        keywords={['how to get to lapland', 'flights to lapland', 'kittila airport', 'rovaniemi airport', 'ivalo airport', 'helsinki rovaniemi train', 'lapland car rental', 'lapland transport']}
        jsonLd={[localizeArticle(articleJsonLd, seo), breadcrumbJsonLd]}
      />

      <section className="relative overflow-hidden bg-night text-white">
        <div className="relative min-h-[70svh] flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-14 sm:pb-16">
          <picture>
            <source type="image/avif" srcSet="/images/hero-transport-800.avif 800w, /images/hero-transport-1200.avif 1200w" sizes="100vw" />
            <source type="image/webp" srcSet="/images/hero-transport-800.webp 800w, /images/hero-transport-1200.webp 1200w, /images/hero-transport-1920.webp 1920w" sizes="100vw" />
            <img
              src="/images/hero-transport-1920.webp"
              alt={ui.heroAlt}
              className="absolute inset-0 w-full h-full object-cover object-[center_60%]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="2752"
              height="1536"
            />
          </picture>
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/35 to-night" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-pink uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold mb-4 [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">{ui.eyebrow}</p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-wide mb-5 [text-shadow:0_2px_18px_rgba(0,0,0,0.75)]">
              {ui.h1}
            </h1>
            <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 [text-shadow:0_1px_10px_rgba(0,0,0,0.8)]">
              {ui.lead}
            </p>
            <ReviewedBy variant="light" date={REVIEWED_DATE.july2026[lang]} className="mb-4" />
            <AffiliateDisclosure variant="compact" className="text-white/70 [&>svg]:text-white/70 [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]" />
          </div>
        </div>
      </section>

      {/* Ecosystem breadcrumb (network trail), below the hero */}
      <PageBreadcrumb />

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{ui.airportsEyebrow}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">
            {ui.airportsH2}
          </h2>
          <p className="text-charcoal/70 text-lg leading-relaxed mb-10 max-w-3xl">
            {ui.airportsLead}
          </p>

          <div className="space-y-5">
            {ui.airports.map((a, i) => {
              const meta = airportMetaFor(lang)[i]
              return (
                <div key={a.code} className="bg-gradient-to-r from-pink/5 to-white border border-pink/10 rounded-2xl p-6 sm:p-7">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                    <div className="lg:col-span-3 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-pink/10 flex items-center justify-center">
                        <Plane className="w-6 h-6 text-pink" />
                      </div>
                      <div>
                        <p className="font-heading text-3xl text-night tracking-wide leading-none">{a.code}</p>
                        <p className="text-sm text-charcoal/70 mt-1">{a.name}</p>
                      </div>
                    </div>
                    <div className="lg:col-span-3">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-charcoal/70 mb-1">{ui.servesLabel}</p>
                      <p className="text-charcoal/85 text-[15px] leading-snug">{a.serves}</p>
                    </div>
                    <div className="lg:col-span-3">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-charcoal/70 mb-1">{ui.routesLabel}</p>
                      <p className="text-charcoal/85 text-[15px] leading-snug">{a.routes}</p>
                    </div>
                    <div className="lg:col-span-3 grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-charcoal/70 mb-1">{ui.busLabel}</p>
                        <p className="text-charcoal/85 text-[14px] leading-snug">{a.busPrice}</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-charcoal/70 mb-1">{ui.taxiLabel}</p>
                        <p className="text-charcoal/85 text-[14px] leading-snug">{a.taxiPrice}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-pink/10 flex flex-wrap gap-2">
                    <TripCTA
                      kind="flight"
                      from="hel"
                      to={meta.iata}
                      sid={meta.flightSid}
                      className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-pink text-white font-semibold hover:bg-pink/90 transition-colors"
                    >
                      {ui.compareFlights(a.code)}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </TripCTA>
                    <a
                      href={meta.carsHref}
                      target="_blank"
                      rel="sponsored nofollow noopener"
                      onClick={onClick(meta.carsSid, meta.carsHref)}
                      className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-pink/10 text-pink font-semibold hover:bg-pink hover:text-white transition-colors"
                    >
                      {ui.rentCarAt(a.code)}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-night text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{ui.railEyebrow}</p>
            <h2 className="font-heading text-4xl sm:text-5xl tracking-wide mb-6">{ui.railH2}</h2>
            <div className="space-y-5 text-white/75 text-base leading-relaxed">
              <p>{ui.railP1}</p>
              <ul className="space-y-2.5 pl-5 text-[15px]">
                {ui.railBullets.map((b, i) => (
                  <li key={i} className="list-disc">
                    <strong className="text-white">{ui.railBulletStrong[i]}</strong>
                    {b.startsWith(ui.railBulletStrong[i]) ? b.slice(ui.railBulletStrong[i].length) : `, ${b}`}
                  </li>
                ))}
              </ul>
              <p>
                {ui.railP2Pre}
                {/* Operator's own site (no affiliate program) → UTM so the referral
                    shows up in VR's analytics as LaplandVibes, per network policy. */}
                <a href="https://www.vr.fi/?utm_source=laplandvibes&utm_medium=referral&utm_campaign=laplandstays_transport" target="_blank" rel="noopener" className="text-pink hover:underline font-semibold">vr.fi</a>
                {ui.railP2Mid}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <TripCTA
                  kind="train"
                  fromCity="Helsinki"
                  toCity="Rovaniemi"
                  sid="transport_train_hel_rvn"
                  className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-white/10 text-white font-semibold hover:bg-pink hover:text-white transition-colors border border-white/20"
                >
                  <Train className="w-3.5 h-3.5" />
                  {ui.compareTrains}
                </TripCTA>
                <TripCTA
                  kind="bus"
                  fromCity="Helsinki"
                  toCity="Rovaniemi"
                  sid="transport_bus_hel_rvn"
                  className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-white/10 text-white font-semibold hover:bg-pink hover:text-white transition-colors border border-white/20"
                >
                  <Bus className="w-3.5 h-3.5" />
                  {ui.orCoach}
                </TripCTA>
              </div>
            </div>
          </div>
          <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 sm:p-8">
            <p className="text-[11px] uppercase tracking-widest text-pink font-semibold mb-4">{ui.comboKicker}</p>
            <p className="text-white/85 text-base leading-relaxed mb-5">
              {ui.comboBody}
            </p>
            <a
              href={carsRovaniemiOneWay}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={onClick('transport_cars_rvn_oneway', carsRovaniemiOneWay)}
              className="inline-flex items-center gap-2.5 bg-pink hover:bg-pink/90 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-sm uppercase tracking-widest w-full justify-center"
            >
              <CarIcon className="w-4 h-4" />
              {ui.carAtRvn}
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-[11px] text-white/60 mt-3 text-center">{ui.verifiedRates}</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{ui.carEyebrow}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">
            {ui.carH2}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <CarIcon className="w-7 h-7 text-pink mb-3" />
              <h3 className="font-heading text-xl text-night tracking-wide mb-2">{ui.yesTitle}</h3>
              <ul className="space-y-2 text-charcoal/75 text-[15px]">
                {ui.yesList.map((l, i) => <li key={i}>• {l}</li>)}
              </ul>
              <a
                href={carsFromHelsinki}
                target="_blank"
                rel="sponsored nofollow noopener"
                onClick={onClick('transport_cars_helsinki', carsFromHelsinki)}
                className="mt-5 inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-pink/10 text-pink font-semibold hover:bg-pink hover:text-white transition-colors"
              >
                {ui.compareHelsinki}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <Bus className="w-7 h-7 text-pink mb-3" />
              <h3 className="font-heading text-xl text-night tracking-wide mb-2">{ui.noTitle}</h3>
              <ul className="space-y-2 text-charcoal/75 text-[15px]">
                {ui.noList.map((l, i) => <li key={i}>• {l}</li>)}
              </ul>
              <p className="mt-4 text-[13px] text-charcoal/70">
                {ui.studdedTip}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{ui.withinEyebrow}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">
            {ui.withinH2}
          </h2>
          <div className="space-y-3 text-[15px]">
            {ui.distances.map((row, i) => (
              <div key={i} className="flex flex-wrap items-center gap-x-3 gap-y-1 p-3 rounded-lg bg-gray-50 border border-gray-100">
                <span className="font-heading text-base text-pink shrink-0 w-24 sm:w-32">{row.from} →</span>
                <span className="font-heading text-base text-night shrink-0 w-24 sm:w-32">{row.to}</span>
                <span className="text-charcoal/70 text-[14px] min-w-0 basis-full sm:basis-auto">{row.dist}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sembo ad — FI-only spec (do.sembo.fi storefront): bundle stay + flight
          + car into one booking. Renders only on /fi; other locales skip it.
          (shared/ads, registry targetPages: stays trip-bundle pages.) */}
      <section className="py-10 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <AdUnit
            spec={semboAd}
            sid="transport_bundle_sembo"
            lang={lang}
            variant="light"
            onCtaClick={(specKey, sid, url) => trackAffiliateClick(specKey, `ad_unit:${sid}`, url)}
          />
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-night text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl sm:text-5xl tracking-wide mb-4">{ui.ctaH2}</h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            {ui.ctaLead}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={HOTEL_SEARCH_FOR(lang).lapland}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={onHotels('transport_cta_lapland', HOTEL_SEARCH_FOR(lang).lapland)}
              className="bg-pink hover:bg-pink/90 text-white font-semibold py-4 px-8 rounded-xl transition-colors text-sm uppercase tracking-widest inline-flex items-center justify-center gap-2"
            >
              {ui.ctaPrimary}
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to={to('/when-to-go')}
              className="border border-white/30 hover:border-pink/60 text-white hover:text-pink font-semibold py-4 px-8 rounded-xl transition-colors text-sm uppercase tracking-widest"
            >
              {ui.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
