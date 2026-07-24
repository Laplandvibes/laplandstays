import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Sparkles, Thermometer, Bell, Snowflake, Plane, Bus, Car as CarIcon, Train } from 'lucide-react'
import SEO from './SEO'
import Newsletter from './Newsletter'
import PageBreadcrumb from './PageBreadcrumb'
import AffiliateDisclosure from './AffiliateDisclosure'
import PartnerStayAd from './PartnerStayAd'
import { buildHotelSearch, buildAffiliateUrl } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import { useLang, useLocalePath, pick, type Lang } from '../i18n/useLang'
import { useCopy } from '../i18n/useCopy'
import enCopy from './DestinationPage.copy.en'
import type { Copy } from './DestinationPage.copy.types'

export interface DestinationAnchor {
  name: string
  href?: string
  propertyQuery?: string
  sid: string
  note?: string
}

export interface TransportRow {
  mode?: 'plane' | 'bus' | 'car' | 'train'
  label: string
  detail: string
}

/**
 * Ecosystem deep-link rendered as a "Read more" link on a highlight card.
 * Keyed by highlight index (order is identical across locales).
 * The per-locale URL prefix is injected automatically between base and path.
 */
export interface HighlightLink {
  /** Origin without trailing slash, e.g. 'https://laplandchristmas.com' */
  base: string
  /** Path after the locale prefix, e.g. '/santa-village'. Defaults to '/'. */
  path?: string
}

/** Translatable body content per language. */
export interface DestinationBody {
  /** Hero tagline, just under the H1. */
  tagline: string
  /** Overview prose (whitespace-pre-line). */
  description: string
  facts: { label: string; value: string }[]
  highlights: { title: string; body: string }[]
  /** Whitespace-pre-line. */
  whenToGo: string
  /** Whitespace-pre-line. */
  howToGet: string
  stayTypes: string[]
  anchorProperties?: DestinationAnchor[]
  transport?: TransportRow[]
  dayPlan?: { day: string; title: string; body: string }[]
  carRental?: {
    href: string
    sid: string
    airport: string
    blurb?: string
  }
  siblings: { name: string; href: string; blurb: string }[]
  seoTitle: string
  seoDescription: string
}

export interface DestinationPageProps {
  slug: string
  name: string
  heroImage: string
  ogImage?: string
  seoKeywords: string[]
  /** Per-language body content. Locales beyond en/fi fall back to en when omitted. */
  body: {
    en: DestinationBody
    fi: DestinationBody
    de?: DestinationBody
    ja?: DestinationBody
    es?: DestinationBody
    'pt-BR'?: DestinationBody
    'zh-CN'?: DestinationBody
    ko?: DestinationBody
    fr?: DestinationBody
    it?: DestinationBody
    nl?: DestinationBody
  }
  /** Optional ecosystem cross-links per highlight card, keyed by highlight index. */
  highlightLinks?: Record<number, HighlightLink>
}

/** URL prefix per locale on ecosystem sister sites (en lives at root). */
const ecoPrefix: Record<Lang, string> = {
  'en': '',
  'fi': '/fi',
  'de': '/de',
  'ja': '/ja',
  'es': '/es',
  'pt-BR': '/br',
  'zh-CN': '/cn',
  'ko': '/kr',
  'fr': '/fr',
  'it': '/it',
  'nl': '/nl',
  'sv': '/sv',
}

const transportIcon: Record<NonNullable<TransportRow['mode']>, typeof Plane> = {
  plane: Plane,
  bus: Bus,
  car: CarIcon,
  train: Train,
}

/**
 * Destination pages that exist on laplandactivities.fi (/destinations/:slug,
 * verified live). Missing slugs fall back to the front page.
 */
const activitiesDestSlug: Record<string, string> = {
  yllas: 'yllas',
  levi: 'levi',
  saariselka: 'saariselka',
  rovaniemi: 'rovaniemi',
  inari: 'inari',
}

/**
 * Matching resort page on laplandskiresorts.com (/resort/:slug, verified live).
 * Rovaniemi maps to Ounasvaara, the city's own resort. Inari has no resort,
 * so it falls back to the front page.
 */
const skiResortSlug: Record<string, string> = {
  yllas: 'yllas',
  levi: 'levi',
  saariselka: 'saariselka',
  rovaniemi: 'ounasvaara',
}



const loaders: Record<Lang, () => Promise<{ default: Copy }>> = {
  'en': () => import('./DestinationPage.copy.en'),
  'fi': () => import('./DestinationPage.copy.fi'),
  'de': () => import('./DestinationPage.copy.de'),
  'ja': () => import('./DestinationPage.copy.ja'),
  'es': () => import('./DestinationPage.copy.es'),
  'pt-BR': () => import('./DestinationPage.copy.ptBR'),
  'zh-CN': () => import('./DestinationPage.copy.zhCN'),
  'ko': () => import('./DestinationPage.copy.ko'),
  'fr': () => import('./DestinationPage.copy.fr'),
  'it': () => import('./DestinationPage.copy.it'),
  'nl': () => import('./DestinationPage.copy.nl'),
  'sv': () => import('./DestinationPage.copy.sv'),
}

const cache: Partial<Record<Lang, Copy>> = {}

export default function DestinationPage(p: DestinationPageProps) {
  const lang = useLang()
  const to = useLocalePath()
  const ui = useCopy<Copy>(enCopy, loaders, cache)
  const b = pick(
    lang,
    p.body.en,
    p.body.fi,
    p.body.de ?? p.body.en,
    p.body.ja ?? p.body.en,
    p.body.es ?? p.body.en,
    p.body['pt-BR'] ?? p.body.en,
    p.body['zh-CN'] ?? p.body.en,
    p.body.ko ?? p.body.en,
    p.body.fr ?? p.body.en,
    p.body.it ?? p.body.en,
    p.body.nl ?? p.body.en,
  )
  const searchUrl = buildHotelSearch(`${p.name}, Finland`, `destination_${p.slug}`)
  const pfx = ecoPrefix[lang]

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      // No destinations index page exists, so the breadcrumb is 2-level. Google
      // requires `item` on every ListItem except the last, so a middle crumb
      // without `item` is flagged as an error, we drop it instead.
      { '@type': 'ListItem', position: 1, name: ui.breadcrumbHome, item: 'https://laplandstays.com/' },
      { '@type': 'ListItem', position: 2, name: p.name, item: `https://laplandstays.com/destinations/${p.slug}` },
    ],
  }

  const touristDestinationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: `${p.name}, ${ui.finnishLapland}`,
    description: b.seoDescription,
    url: `https://laplandstays.com/destinations/${p.slug}`,
    image: p.heroImage,
    geo: { '@type': 'GeoCoordinates', addressCountry: 'FI' },
    touristType: lang === 'fi'
      ? 'Luksusmajoituksen matkailijat, revontulien metsästäjät, perheet, pariskunnat'
      : lang === 'de'
        ? 'Luxus-Unterkunftsreisende, Polarlicht-Jäger, Familien, Paare'
        : lang === 'ja'
          ? '高級宿泊施設の旅行者、オーロラハンター、家族連れ、カップル'
          : lang === 'ko'
            ? '럭셔리 숙박 여행자, 오로라 헌터, 가족 여행객, 커플'
            : lang === 'fr'
              ? "Voyageurs en hébergement de luxe, chasseurs d'aurores, familles, couples"
              : lang === 'it'
                ? 'Viaggiatori di alloggi di lusso, cacciatori di aurore, famiglie, coppie'
                : lang === 'nl'
                  ? 'Reizigers in luxe accommodaties, aurora-jagers, gezinnen, stellen'
                  : lang === 'sv'
                    ? 'Resenärer på lyxboende, norrskensjägare, familjer, par'
                    : 'Luxury accommodation travellers, aurora hunters, families, couples',
  }

  const cityJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'City',
    name: p.name,
    url: `https://laplandstays.com/destinations/${p.slug}`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FI',
      addressRegion: 'Lapland',
      addressLocality: p.name,
    },
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'Lapland, Finland',
    },
  }

  return (
    <>
      <SEO
        title={b.seoTitle}
        description={b.seoDescription}
        canonicalPath={`/destinations/${p.slug}`}
        ogImage={p.ogImage ?? p.heroImage}
        keywords={p.seoKeywords}
        jsonLd={[breadcrumbJsonLd, touristDestinationJsonLd, cityJsonLd]}
      />

      {/* HERO */}
      <section className="relative min-h-[56vh] md:min-h-[62vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={p.heroImage} alt={`${p.name}, ${ui.finnishLapland}`} className="w-full h-full object-cover object-[center_38%]" loading="eager" fetchPriority="high" decoding="async" width="1600" height="900"/>
          <div
            className="absolute inset-0"
            style={{ backgroundImage: 'linear-gradient(to top, rgba(15,23,42,0.80) 0%, rgba(15,23,42,0.42) 50%, rgba(15,23,42,0.30) 100%)' }}
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-white">
          <p className="text-pink uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold mb-4 flex items-center gap-2 [text-shadow:0_2px_12px_rgba(0,0,0,0.9),0_0_24px_rgba(0,0,0,0.6)]">
            <MapPin className="w-4 h-4" /> {ui.finnishLapland}
          </p>
          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl tracking-wide mb-4 [text-shadow:0_3px_28px_rgba(0,0,0,0.85),0_1px_4px_rgba(0,0,0,0.6)]">{p.name}</h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-3xl leading-snug [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">{b.tagline}</p>
        </div>
      </section>

      {/* Ecosystem breadcrumb (network trail), below the hero */}
      <PageBreadcrumb />

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 text-xs sm:text-sm text-charcoal/80 flex items-center gap-2">
          <Link to={to('/')} className="hover:text-pink transition-colors">{ui.breadcrumbHome}</Link>
          <span className="text-pink/70">/</span>
          {/* Non-link: no destinations index page exists, so this crumb is a plain label. */}
          <span>{ui.breadcrumbDest}</span>
          <span className="text-pink/70">/</span>
          <span className="text-charcoal font-semibold">{p.name}</span>
        </div>
      </nav>

      {/* OVERVIEW */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">{ui.overviewEyebrow}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">{ui.overviewH2(p.name)}</h2>
          <p className="text-charcoal/75 text-lg leading-relaxed whitespace-pre-line">{b.description}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {b.facts.map((f) => (
              <div key={f.label} className="bg-pink/5 border border-pink/20 rounded-2xl p-4 text-center">
                <p className="text-xs uppercase tracking-widest text-charcoal/70 mb-1">{f.label}</p>
                <p className="font-heading text-2xl text-night tracking-wide">{f.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={searchUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={() => trackAffiliateClick('hotelscom', `destination_overview_${p.slug}`, searchUrl)}
              className="inline-flex items-center gap-3 bg-pink hover:bg-pink/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-sm uppercase tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {ui.seePricesIn(p.name)}
              <ArrowRight className="w-4 h-4" />
            </a>
            <AffiliateDisclosure variant="compact" className="mt-4 justify-start" />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">{ui.highlightsEyebrow}</p>
            <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide">{ui.highlightsH2(p.name)}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {b.highlights.map((h, i) => {
              const hl = p.highlightLinks?.[i]
              return (
                <div key={h.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <Sparkles className="w-6 h-6 text-pink mb-3" />
                  <h3 className="font-heading text-2xl text-night tracking-wide mb-2">{h.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed text-[15px]">{h.body}</p>
                  {hl && (
                    <a
                      href={`${hl.base}${pfx}${hl.path ?? '/'}`}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1 text-pink text-sm font-semibold mt-3 hover:underline"
                    >
                      {ui.readMore} <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHEN / HOW */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-night text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">{ui.whenToGoEyebrow}</p>
            <h3 className="font-heading text-3xl sm:text-4xl tracking-wide mb-4 flex items-center gap-3">
              <Thermometer className="w-7 h-7 text-pink" /> {ui.seasonsH3}
            </h3>
            <p className="text-white/75 leading-relaxed whitespace-pre-line">{b.whenToGo}</p>
          </div>
          <div>
            <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">{ui.gettingThereEyebrow}</p>
            <h3 className="font-heading text-3xl sm:text-4xl tracking-wide mb-4 flex items-center gap-3">
              <Bell className="w-7 h-7 text-pink" /> {ui.travelH3}
            </h3>
            <p className="text-white/75 leading-relaxed whitespace-pre-line">{b.howToGet}</p>
          </div>
        </div>
      </section>

      {/* WHAT TO BOOK */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">{ui.staysInEyebrow(p.name)}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-8">{ui.whatToBookH2}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {b.stayTypes.map((s) => (
              <div key={s} className="flex items-start gap-3 bg-pink/5 border border-pink/20 rounded-2xl p-5">
                <Snowflake className="w-5 h-5 text-pink shrink-0 mt-0.5" />
                <p className="text-charcoal/80 leading-relaxed">{s}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-night rounded-2xl p-8 sm:p-10 text-center">
            <h3 className="font-heading text-3xl sm:text-4xl text-white tracking-wide mb-3">
              {ui.findCabinH3(p.name)}
            </h3>
            <p className="text-white/65 mb-6">{ui.findCabinLead}</p>
            <a
              href={searchUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={() => trackAffiliateClick('hotelscom', `destination_book_${p.slug}`, searchUrl)}
              className="inline-flex items-center gap-2 bg-pink hover:bg-pink/90 text-white font-semibold px-8 py-4 rounded-xl transition-colors uppercase tracking-widest text-sm"
            >
              {ui.checkAvailability} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* PARTNER ADS, brand-skinned affiliate placements, contextual to booking.
          Hotels.com (compare everything) + Lomarengas (whole-cabin angle). Each
          ad carries its own AffiliateDisclosure + sponsored attrs internally. */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-pink/5 to-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-6">
          {/* Hotels.com ad removed here: the page's own search already routes to
              Hotels.com, so this slot sells a COMPLEMENTARY product instead
              (car rental — replaced Kiwitaxi 2026-07-09, which doesn't serve
              Lapland airports; no cannibalising our own affiliate route). */}
          <PartnerStayAd partner="cars" sid={`destination_${p.slug}_cars`} />
          <PartnerStayAd partner="lomarengas" sid={`destination_${p.slug}_lomarengas`} />
        </div>
      </section>

      {/* ANCHOR PROPERTIES & TRANSPORT */}
      {(b.anchorProperties || b.transport) && (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-night text-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {b.anchorProperties && b.anchorProperties.length > 0 && (
              <div>
                <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">{ui.anchorEyebrow}</p>
                <h2 className="font-heading text-3xl sm:text-4xl tracking-wide mb-4">{ui.whereToStayH2(p.name)}</h2>
                <p className="text-white/65 text-base leading-relaxed mb-6">
                  {ui.anchorLead}
                </p>
                <ul className="space-y-3">
                  {b.anchorProperties.map((a) => {
                    const finalHref = a.href ?? buildAffiliateUrl({
                      partner: 'hotels',
                      sid: a.sid,
                      destination: a.propertyQuery ?? a.name,
                    })
                    return (
                    <li key={a.name}>
                      <a
                        href={finalHref}
                        target="_blank"
                        rel="sponsored nofollow noopener"
                        onClick={() => trackAffiliateClick('hotelscom', a.sid, finalHref)}
                        className="group flex items-center justify-between gap-4 px-5 py-4 rounded-xl bg-white/[0.05] border border-white/10 hover:border-pink/40 hover:bg-white/[0.09] transition-all"
                      >
                        <div className="min-w-0">
                          <p className="font-heading text-lg text-white tracking-wide group-hover:text-pink transition-colors">{a.name}</p>
                          {a.note && <p className="text-sm text-white/55 leading-snug mt-0.5">{a.note}</p>}
                        </div>
                        <ArrowRight className="w-4 h-4 text-pink shrink-0 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {b.transport && b.transport.length > 0 && (
              <div>
                <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">{ui.gettingThereEyebrow}</p>
                <h2 className="font-heading text-3xl sm:text-4xl tracking-wide mb-4">{ui.gettingThereH2(p.name)}</h2>
                <p className="text-white/65 text-base leading-relaxed mb-6">
                  {ui.transportLead}
                </p>
                <ul className="space-y-3">
                  {b.transport.map((t, i) => {
                    const Icon = transportIcon[t.mode ?? 'bus']
                    return (
                      <li key={i} className="flex items-start gap-4 px-5 py-4 rounded-xl bg-white/[0.05] border border-white/10">
                        <div className="w-10 h-10 rounded-lg bg-pink/15 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-pink" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] uppercase tracking-widest text-white/55 font-semibold mb-1">{t.label}</p>
                          <p className="text-white text-[15px] leading-snug">{t.detail}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>

                {b.carRental && (
                  <a
                    href={b.carRental.href}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    onClick={() => trackAffiliateClick('economybookings', b.carRental!.sid, b.carRental!.href)}
                    className="mt-6 group flex items-center justify-between gap-4 px-5 py-4 rounded-xl bg-gradient-to-r from-pink/15 to-pink/5 border border-pink/30 hover:border-pink/60 hover:from-pink/25 hover:to-pink/15 transition-all"
                  >
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-widest text-pink font-semibold mb-1">{ui.rentCarLabel}</p>
                      <p className="text-white text-[15px] leading-snug">
                        {b.carRental.airport}{b.carRental.blurb ? ` · ${b.carRental.blurb}` : ''}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-pink shrink-0 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* DAY PLAN */}
      {b.dayPlan && b.dayPlan.length > 0 && (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{ui.sampleItinerary}</p>
            <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-3">{ui.dayPlanH2(b.dayPlan.length, p.name)}</h2>
            <p className="text-charcoal/65 text-base leading-relaxed mb-10 max-w-2xl">
              {ui.dayPlanLead}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {b.dayPlan.map((d) => (
                <div key={d.day} className="flex gap-4 items-start bg-gradient-to-b from-pink/5 to-white border border-pink/10 rounded-2xl p-5">
                  <span className="font-heading text-3xl text-pink shrink-0 leading-none w-12">{d.day}</span>
                  <div>
                    <h3 className="font-heading text-xl text-night tracking-wide mb-1.5">{d.title}</h3>
                    <p className="text-charcoal/70 leading-relaxed text-[15px]">{d.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SIBLINGS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3 text-center">{ui.moreLapland}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-10 text-center">
            {ui.otherDestinations}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {b.siblings.map((s) => (
              <Link
                key={s.href}
                to={to(s.href)}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-pink/40 hover:shadow-lg transition-all"
              >
                <h3 className="font-heading text-2xl text-night tracking-wide mb-2 group-hover:text-pink transition-colors">
                  {s.name}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed mb-4">{s.blurb}</p>
                <span className="inline-flex items-center gap-1 text-pink text-sm font-semibold">
                  {ui.seeStays} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PLAN THE WHOLE TRIP, ecosystem sister sites (own network, no affiliate attrs) */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3 text-center">{ui.planTripEyebrow}</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-8 text-center">{ui.planTripH2}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: ui.planActivities,
                host: 'laplandactivities.fi',
                href: `https://laplandactivities.fi${pfx}${activitiesDestSlug[p.slug] ? `/destinations/${activitiesDestSlug[p.slug]}/` : '/'}`,
              },
              {
                label: ui.planSkiResorts,
                host: 'laplandskiresorts.com',
                href: `https://laplandskiresorts.com${pfx}${skiResortSlug[p.slug] ? `/resort/${skiResortSlug[p.slug]}/` : '/'}`,
              },
              { label: ui.planTransfers, host: 'laplandtransport.com', href: `https://laplandtransport.com${pfx}/` },
              { label: ui.planCarRental, host: 'laplandcarrental.com', href: `https://laplandcarrental.com${pfx}/` },
            ].map((l) => (
              <a
                key={l.host}
                href={l.href}
                target="_blank"
                rel="noopener"
                className="group flex items-center justify-between gap-4 px-5 py-4 rounded-xl bg-pink/5 border border-pink/20 hover:border-pink/50 hover:bg-pink/10 transition-all"
              >
                <div className="min-w-0">
                  <p className="font-heading text-xl text-night tracking-wide group-hover:text-pink transition-colors">{l.label}</p>
                  <p className="text-charcoal/55 text-xs mt-0.5">{l.host}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-pink shrink-0 group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
