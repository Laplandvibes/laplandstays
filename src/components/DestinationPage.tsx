import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Sparkles, Thermometer, Bell, Snowflake, Plane, Bus, Car as CarIcon, Train } from 'lucide-react'
import SEO from './SEO'
import Newsletter from './Newsletter'
import PageBreadcrumb from './PageBreadcrumb'
import AffiliateDisclosure from './AffiliateDisclosure'
import PartnerStayAd from './PartnerStayAd'
import FeaturedPartnerSlot from './FeaturedPartnerSlot'
import EditorsPickChip from './EditorsPickChip'
import GoogleRatingRow from './GoogleRatingRow'
import { DESTINATION_PLACEMENT } from '../data/adSlots'
import { propertyForQuery, bestGoogleRated, editorialPickNote } from '../data/properties'
import { bookingForQuery } from '../data/propertyBooking'
import { useCopy as useChrome } from '../locales/copy'
import { buildHotelSearch, buildAffiliateUrl, propertyLodgingLink, type LomarengasArea } from '../lib/affiliate'
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

// Ad deep-link targets per destination — the partner ads must never land on a
// partner's generic front page (Vesa 2026-08-09). Cars: the destination's own
// airport results (RVN is the network floor default). Lomarengas: the area's
// cottage-search listing; Inari/Rovaniemi fall back to the all-Lapland search.
const CARS_PICKUP_FOR: Record<string, string> = {
  levi: 'KTT',
  yllas: 'KTT',
  saariselka: 'IVL',
  inari: 'IVL',
  rovaniemi: 'RVN',
}
const LOMARENGAS_AREA_FOR: Record<string, LomarengasArea> = {
  levi: 'levi',
  yllas: 'yllas',
  saariselka: 'saariselka',
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

/**
 * Optional long-form buying-guide block, rendered between OVERVIEW and
 * HIGHLIGHTS. Added 2026-08-15 for the ES Rovaniemi cabin expansion (brief
 * `cabañas en rovaniemi`); any locale that provides `guide` gets the section,
 * all others render exactly as before.
 */
export interface GuideSection {
  h3: string
  paras: string[]
  bullets?: string[]
  table?: { head: string[]; rows: string[][]; note?: string }
  links?: { label: string; href: string; external?: boolean }[]
  cta?: { kind: 'hotels' | 'cars'; label: string; sid: string; destination: string; note?: string }
}
export interface DestinationGuide {
  eyebrow: string
  h2: string
  intro: string
  sections: GuideSection[]
  footnote?: string
}

/** Translatable body content per language. */
export interface DestinationBody {
  /**
   * Optional per-locale hero H1 override (defaults to the destination name).
   * Rendered at a reduced size when set — used when a locale targets a longer
   * keyword phrase than the bare city name.
   */
  heroH1?: string
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
  guide?: DestinationGuide
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
    sv?: DestinationBody
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
    p.body.sv ?? p.body.en,
  )
  const searchUrl = buildHotelSearch(`${p.name}, Finland`, `destination_${p.slug}`, lang)
  const pfx = ecoPrefix[lang]
  const chrome = useChrome()

  /**
   * The earned editorial pick for this destination's "Where to stay" list.
   * EARNED, NOT FOR SALE — the sellable thing on this surface is the
   * Esittelykumppani slot at the head of the list (`FeaturedPartnerSlot`).
   *
   * Derived from real Google review data (`bestGoogleRated`), so it is `null`
   * — no chip at all — whenever the page names fewer than two properties with
   * a rating that clears both thresholds. If a destination page shows no chip,
   * that is the correct outcome and not a bug to route around: there is no
   * field to be top of. Do not paper over it with a hand-picked winner.
   *
   * Levi and Ylläs were exactly that case until 2026-07-26, for the wrong
   * reason: each named a chain or chain-plus-region label instead of a real
   * hotel, so only one anchor per page resolved to an identifiable business.
   * Fixing the copy (see the exclusion block in `src/data/properties.ts`) gave
   * both pages a real field and the chip returned on its own. The lesson is
   * that a missing chip is worth reading as a signal about the copy.
   *
   * `anchorProperties` also contains city-search rows ("All Levi
   * accommodation"); `propertyForQuery` returns null for those, and
   * `bestGoogleRated` drops them.
   */
  const editorsPick = bestGoogleRated(
    (b.anchorProperties ?? []).map((a) => propertyForQuery(a.propertyQuery ?? a.name)),
  )
  const pickNote = editorialPickNote(chrome.editorial, editorsPick, lang)

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
          <h1 className={`font-heading tracking-wide mb-4 [text-shadow:0_3px_28px_rgba(0,0,0,0.85),0_1px_4px_rgba(0,0,0,0.6)] ${b.heroH1 ? 'text-4xl sm:text-6xl md:text-7xl' : 'text-5xl sm:text-7xl md:text-8xl'}`}>{b.heroH1 ?? p.name}</h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-3xl leading-snug [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">{b.tagline}</p>
        </div>
      </section>

      {/* Ecosystem breadcrumb (network trail), below the hero. This is the ONLY
          visible breadcrumb — a second local "Home / Destinations / {name}" nav
          used to render right under it (double breadcrumb, removed 2026-07-25);
          the shared 2-level trail also matches the BreadcrumbList JSON-LD. */}
      <PageBreadcrumb />

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
              onClick={() => trackAffiliateClick('lodging', `destination_overview_${p.slug}`, searchUrl)}
              className="inline-flex items-center gap-3 bg-pink hover:bg-pink/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-sm uppercase tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {ui.seePricesIn(p.name)}
              <ArrowRight className="w-4 h-4" />
            </a>
            <AffiliateDisclosure variant="compact" className="mt-4 justify-start" />
          </div>
        </div>
      </section>

      {/* GUIDE — optional per-locale long-form buying guide (2026-08-15).
          Renders only when the active locale's body provides `guide`; other
          locales are untouched. Links resolve via to() for own-site paths and
          plain hrefs for absolute network URLs. CTAs route through the Worker
          via buildAffiliateUrl exactly like every other paid link here. */}
      {b.guide && (
        <section className="py-14 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-pink/5 to-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">{b.guide.eyebrow}</p>
            <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-5">{b.guide.h2}</h2>
            <p className="text-charcoal/75 text-lg leading-relaxed whitespace-pre-line mb-10">{b.guide.intro}</p>

            <div className="space-y-10">
              {b.guide.sections.map((s) => (
                <div key={s.h3}>
                  <h3 className="font-heading text-2xl sm:text-3xl text-night tracking-wide mb-3">{s.h3}</h3>
                  {s.paras.map((para, i) => (
                    <p key={i} className="text-charcoal/75 leading-relaxed mb-3">{para}</p>
                  ))}
                  {s.bullets && (
                    <ul className="space-y-2 mb-3">
                      {s.bullets.map((bl) => (
                        <li key={bl} className="flex items-start gap-3">
                          <Snowflake className="w-4 h-4 text-pink shrink-0 mt-1" aria-hidden="true" />
                          <span className="text-charcoal/75 leading-relaxed">{bl}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.table && (
                    <figure className="mb-3">
                      <div className="overflow-x-auto rounded-2xl border border-pink/20">
                        <table className="w-full text-left text-[14px] sm:text-[15px]">
                          <thead>
                            <tr className="bg-pink/5">
                              {s.table.head.map((h) => (
                                <th key={h} className="px-4 py-3 font-semibold text-night whitespace-nowrap">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {s.table.rows.map((r, ri) => (
                              <tr key={ri} className="border-t border-pink/10 bg-white">
                                {r.map((c, ci) => (
                                  <td key={ci} className={`px-4 py-3 leading-relaxed ${ci === 0 ? 'font-semibold text-night' : 'text-charcoal/75'}`}>{c}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {s.table.note && (
                        <figcaption className="mt-2 text-xs text-charcoal/55 leading-relaxed">{s.table.note}</figcaption>
                      )}
                    </figure>
                  )}
                  {s.links && s.links.length > 0 && (
                    <p className="text-[15px] text-charcoal/70 leading-relaxed">
                      {s.links.map((l, li) => (
                        <span key={l.href}>
                          {li > 0 && ' · '}
                          {l.external ? (
                            <a href={l.href} target="_blank" rel="noopener" className="text-[#DB2777] font-semibold underline decoration-dotted underline-offset-2 hover:no-underline">{l.label}</a>
                          ) : (
                            <Link to={to(l.href)} className="text-[#DB2777] font-semibold underline decoration-dotted underline-offset-2 hover:no-underline">{l.label}</Link>
                          )}
                        </span>
                      ))}
                    </p>
                  )}
                  {s.cta && (() => {
                    const ctaHref = buildAffiliateUrl({
                      partner: s.cta.kind === 'cars' ? 'cars' : 'hotels',
                      sid: s.cta.sid,
                      destination: s.cta.destination,
                      lang,
                    })
                    return (
                      <div className="mt-4">
                        <a
                          href={ctaHref}
                          target="_blank"
                          rel="sponsored nofollow noopener"
                          onClick={() => trackAffiliateClick(s.cta!.kind === 'cars' ? 'economybookings' : 'lodging', s.cta!.sid, ctaHref)}
                          className="inline-flex items-center gap-2 bg-pink hover:bg-pink/90 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 text-sm uppercase tracking-widest shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                          {s.cta.label}
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </a>
                        {s.cta.note && <p className="mt-2 text-xs text-charcoal/55">{s.cta.note}</p>}
                      </div>
                    )
                  })()}
                </div>
              ))}
            </div>

            {b.guide.footnote && (
              <p className="mt-10 text-xs text-charcoal/55 leading-relaxed border-t border-pink/10 pt-4">{b.guide.footnote}</p>
            )}
          </div>
        </section>
      )}

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
      {/* Contained dark panel, not a full-bleed stripe — on wide desktops the
          edge-to-edge night bands cut the cream page into slabs (Vesa
          2026-08-09: "leventää nää palkit koko sivun mittaisiksi"). */}
      <section className="py-12 sm:py-14 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto rounded-3xl bg-night text-white px-6 sm:px-10 lg:px-14 py-10 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
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
              onClick={() => trackAffiliateClick('lodging', `destination_book_${p.slug}`, searchUrl)}
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
          <PartnerStayAd partner="cars" sid={`destination_${p.slug}_cars`} carsPickup={CARS_PICKUP_FOR[p.slug] ?? 'RVN'} />
          <PartnerStayAd partner="lomarengas" sid={`destination_${p.slug}_lomarengas`} lomarengasArea={LOMARENGAS_AREA_FOR[p.slug] ?? 'lapland'} />
        </div>
      </section>

      {/* ANCHOR PROPERTIES & TRANSPORT */}
      {(b.anchorProperties || b.transport) && (
        <section className="py-12 sm:py-14 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto rounded-3xl bg-night text-white px-6 sm:px-10 lg:px-14 py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {b.anchorProperties && b.anchorProperties.length > 0 && (
              <div>
                <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">{ui.anchorEyebrow}</p>
                <h2 className="font-heading text-3xl sm:text-4xl tracking-wide mb-4">{ui.whereToStayH2(p.name)}</h2>
                <p className="text-white/70 text-base leading-relaxed mb-6">
                  {ui.anchorLead}
                </p>

                {/* Toimituksen valinta johtaa listaa (Vesa 2026-08-09: "jos
                    toimituksen valinta on tehty, miksi se ei ole ekana?") —
                    muu järjestys ja "kaikki majoitukset" -häntärivi ennallaan. */}
                <ul className="space-y-3">
                  {(() => {
                    const list = b.anchorProperties!
                    if (!editorsPick) return list
                    const i = list.findIndex((x) => propertyForQuery(x.propertyQuery ?? x.name) === editorsPick)
                    return i > 0 ? [list[i], ...list.slice(0, i), ...list.slice(i + 1)] : list
                  })().map((a) => {
                    // A named property gets its OWN booking page via the
                    // partner's property id; `?ss=` carries the TOWN. Rows with
                    // an explicit `href` are the city-search row, and a query
                    // that is not in the registry keeps the old city behaviour
                    // rather than guessing an id.
                    const booking = a.href ? null : bookingForQuery(a.propertyQuery ?? a.name)
                    const finalHref = a.href ?? (booking
                      ? propertyLodgingLink(booking, a.sid, lang)
                      : buildAffiliateUrl({
                        partner: 'hotels',
                        sid: a.sid,
                        destination: a.propertyQuery ?? a.name,
                        lang,
                      }))
                    // Registry lookup by the affiliate search string the card
                    // already carries. `null` for city-search rows ("All Levi
                    // accommodation") and for names that do not identify a
                    // single business — those simply show no rating.
                    const prop = propertyForQuery(a.propertyQuery ?? a.name)
                    const isPick = editorsPick !== null && prop === editorsPick
                    return (
                    <li
                      key={a.name}
                      className="rounded-xl bg-white/[0.05] border border-white/10 hover:border-pink/40 hover:bg-white/[0.09] focus-within:border-pink/40 transition-all"
                    >
                      {/* Rating + pick chip at the card's TOP RIGHT (Vesa
                          2026-08-09: arvion paikka on ylälaidassa valinnan
                          kanssa, ei kuvauksen alla). The strip stays OUTSIDE
                          the booking link on purpose: GoogleRatingRow is its
                          own link to Google's review list (an <a> cannot
                          nest), and it renders on EVERY rated card, not only
                          the winner — "highest rated on this page" is
                          checkable only if the reader sees the numbers it
                          beat. */}
                      {(prop || isPick) && (
                        <div className="px-5 pt-3 -mb-1 flex flex-wrap items-start justify-end gap-x-2 gap-y-1.5">
                          {isPick && (
                            <EditorsPickChip
                              label={chrome.editorial.pickLabel}
                              reason={chrome.editorial.pickReason}
                              note={pickNote}
                            />
                          )}
                          <GoogleRatingRow property={prop} tone="dark" />
                        </div>
                      )}
                      <a
                        href={finalHref}
                        target="_blank"
                        rel="sponsored nofollow noopener"
                        onClick={() => trackAffiliateClick('lodging', a.sid, finalHref)}
                        className="group flex items-center justify-between gap-4 px-5 py-4"
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

                {/* Myytävä Esittelykumppani-paikka (KKV: merkitty mainokseksi)
                    SIIRRETTY listan kärjestä sen alle — tyhjä house-ad listan
                    ensimmäisenä teki koko osiosta puuroa (Vesa 2026-08-09).
                    Tyhjänä = kanoninen vaalea house-ad; muilla kuin fi/en/sv ei
                    renderöidy mitään eikä listaan jää aukkoa. */}
                <FeaturedPartnerSlot
                  placement={DESTINATION_PLACEMENT[p.slug]}
                  locale={lang}
                  surface="dark"
                  className="mt-6"
                />
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

      {/* SIBLINGS — compact router rows, not a full band of near-empty cards
          (Vesa 2026-08-09: "miten vie näin paljon tilaa tällainen osio") */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-2 text-center">{ui.moreLapland}</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-6 text-center">
            {ui.otherDestinations}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {b.siblings.map((s) => (
              <Link
                key={s.href}
                to={to(s.href)}
                className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-pink/40 hover:shadow-lg transition-all"
              >
                <h3 className="font-heading text-xl text-night tracking-wide mb-1.5 group-hover:text-pink transition-colors">
                  {s.name}
                </h3>
                <p className="text-charcoal/60 text-sm leading-snug mb-3">{s.blurb}</p>
                <span className="inline-flex items-center gap-1 text-[#DB2777] text-sm font-semibold">
                  {ui.seeStays} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PLAN THE WHOLE TRIP, ecosystem sister sites (own network, no affiliate attrs) */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-2 text-center">{ui.planTripEyebrow}</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-6 text-center">{ui.planTripH2}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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
                className="group flex items-center justify-between gap-4 px-4 py-3.5 rounded-xl bg-pink/5 border border-pink/20 hover:border-pink/50 hover:bg-pink/10 transition-all"
              >
                <div className="min-w-0">
                  <p className="font-heading text-lg text-night tracking-wide group-hover:text-pink transition-colors">{l.label}</p>
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
