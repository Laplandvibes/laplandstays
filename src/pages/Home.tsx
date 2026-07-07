import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import PropertyTypes from '../components/PropertyTypes'
import PriceGuide from '../components/PriceGuide'
import FeaturedProperties from '../components/FeaturedProperties'
import AmenitiesShowcase from '../components/AmenitiesShowcase'
import Locations from '../components/Locations'
import Reviews from '../components/Reviews'
import BookingCTA from '../components/BookingCTA'
import ActivitiesCrossSell from '../components/ActivitiesCrossSell'
import FAQSection, { type FAQItem } from '../components/FAQSection'
import PartnerStayAd from '../components/PartnerStayAd'
import Newsletter from '../components/Newsletter'
import SEO from '../components/SEO'
import { useLang, type Lang } from '../i18n/useLang'
import type { PageCopy } from './Home.copy.types'
import enCopy from './Home.copy.en'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LaplandStays',
  url: 'https://laplandstays.com',
  logo: 'https://laplandstays.com/favicon.svg',
  sameAs: [
    'https://youtube.com/@laplandvibes',
    'https://instagram.com/laplandvibesofficial',
    'https://tiktok.com/@laplandvibes',
    'https://facebook.com/LaplandVibes',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'LaplandStays',
  url: 'https://laplandstays.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://laplandstays.com/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

// LodgingBusiness (brand-level) schema with localized description.
const LODGING_DESC: Record<string, string> = {
  en: 'Glass igloos, aurora cabins and nature hotels in Finnish Lapland, Levi, Ylläs, Saariselkä, Inari, Rovaniemi.',
  fi: 'Lasi-iglut, revontulimökit ja luontohotellit Suomen Lapissa, Levi, Ylläs, Saariselkä, Inari, Rovaniemi.',
  de: 'Glasiglus, Polarlicht-Hütten und Naturhotels in Finnisch-Lappland, Levi, Ylläs, Saariselkä, Inari, Rovaniemi.',
  ja: 'フィンランド・ラップランドのガラスイグルー、オーロラロッジ、自然派ホテル。レヴィ、ウッラス、サーリセルカ、イナリ、ロヴァニエミ。',
  es: 'Iglús de cristal, cabañas de aurora y hoteles naturaleza en la Laponia finlandesa, Levi, Ylläs, Saariselkä, Inari, Rovaniemi.',
  'pt-BR': 'Iglus de vidro, cabanas de aurora e hotéis naturais na Lapônia finlandesa, Levi, Ylläs, Saariselkä, Inari, Rovaniemi.',
  'zh-CN': '芬兰拉普兰的玻璃穹顶屋、极光小屋与自然酒店。莱维、于拉斯、萨利色尔卡、伊纳里、罗瓦涅米。',
  ko: '핀란드 라플란드의 글래스 이글루, 오로라 캐빈, 자연 호텔. 레비, 일래스, 사리셀카, 이나리, 로바니에미.',
  fr: 'Igloos de verre, chalets aurores et hôtels nature en Laponie finlandaise, Levi, Ylläs, Saariselkä, Inari, Rovaniemi.',
  it: 'Igloo di vetro, chalet aurora e hotel natura nella Lapponia finlandese, Levi, Ylläs, Saariselkä, Inari, Rovaniemi.',
  nl: 'Glasiglo\'s, aurora-cabins en natuurhotels in Fins Lapland, Levi, Ylläs, Saariselkä, Inari, Rovaniemi.',
}

function buildLodgingSchema(lang: string) {
  const desc = LODGING_DESC[lang] ?? LODGING_DESC.en
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': 'https://laplandstays.com/#lodging',
    name: 'LaplandStays',
    url: 'https://laplandstays.com',
    description: desc,
    image: 'https://laplandstays.com/og-default.jpg',
    priceRange: '€100-€1500',
    areaServed: { '@type': 'AdministrativeArea', name: 'Lapland, Finland' },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Lapland',
      addressCountry: 'FI',
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Private sauna', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Aurora alarm', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Glass roof', value: true },
    ],
  }
}

// ---------- copy (lazy-loaded per locale) ----------

const cache: Partial<Record<Lang, PageCopy>> = { en: enCopy }
const loaders: Record<Lang, () => Promise<{ default: PageCopy }>> = {
  en: () => import('./Home.copy.en'),
  fi: () => import('./Home.copy.fi'),
  de: () => import('./Home.copy.de'),
  ja: () => import('./Home.copy.ja'),
  es: () => import('./Home.copy.es'),
  'pt-BR': () => import('./Home.copy.ptBR'),
  'zh-CN': () => import('./Home.copy.zhCN'),
  ko: () => import('./Home.copy.ko'),
  fr: () => import('./Home.copy.fr'),
  it: () => import('./Home.copy.it'),
  nl: () => import('./Home.copy.nl'),
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

export default function Home() {
  const lang = useLang()
  const copy = usePageCopy()
  const { seo, faq } = copy
  const lodgingSchema = buildLodgingSchema(lang)
  const jsonLd: Record<string, unknown>[] = [organizationJsonLd, websiteJsonLd, lodgingSchema]
  if (faq) jsonLd.push(faq)
  // Visible FAQ derives from the same localized FAQPage schema block, so the
  // on-page accordion and the JSON-LD can never drift apart.
  const faqItems: FAQItem[] = (
    ((faq?.mainEntity as { name?: string; acceptedAnswer?: { text?: string } }[] | undefined) ?? [])
  )
    .map((e) => ({ q: e.name ?? '', a: e.acceptedAnswer?.text ?? '' }))
    .filter((it) => it.q && it.a)
  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath="/"
        keywords={[
          'lapland accommodation',
          'where to stay in lapland',
          'glass igloo lapland',
          'glass igloo finland',
          'lapland hotel',
          'lapland cabin',
          'northern lights cabin',
          'kakslauttanen',
          'arctic treehouse hotel',
          'luxury lapland accommodation',
        ]}
        jsonLd={jsonLd}
      />
      <Hero />
      <PropertyTypes />
      <PriceGuide />
      <FeaturedProperties />
      {/* Lomarengas, whole-cabin angle, in the booking-intent zone after the
          property browse. Brand-skinned ad with its own disclosure + tracking. */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-5xl mx-auto">
          <PartnerStayAd partner="lomarengas" sid="home_lomarengas" />
        </div>
      </section>
      <AmenitiesShowcase />
      <Locations />
      <Reviews />
      <ActivitiesCrossSell />
      <FAQSection items={faqItems} />
      <BookingCTA />
      {/* EKTA travel-insurance ad removed 2026-07-03 (Vesa): off-topic for an
          accommodation site; the relevant Lomarengas cabin ad stays above. */}
      <Newsletter />
    </>
  )
}
