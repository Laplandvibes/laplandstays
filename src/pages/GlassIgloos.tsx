import { Link, Navigate } from 'react-router-dom'
import { ArrowRight, ExternalLink, Snowflake, Sparkles, Building2, Megaphone } from 'lucide-react'
import SEO from '../components/SEO'
import { localizeArticle } from '../lib/jsonLd'
import AffiliateDisclosure from '../components/AffiliateDisclosure'
import Newsletter from '../components/Newsletter'
import PageBreadcrumb from '../components/PageBreadcrumb'
import PhotoMark from '../components/PhotoMark'
import { buildAffiliateUrl, propertyLodgingLink } from '../lib/affiliate'
import { PROPERTY_BOOKING } from '../data/propertyBooking'
import { trackAffiliateClick } from '../lib/analytics'
import { useLang, useLocalePath, type Lang } from '../i18n/useLang'
import { preloadLazyCopy, useLazyCopy } from '../i18n/lazyCopy'
import { PAGE_CLUSTERS } from '../i18n/pageClusters'
import type { GlassIgloosCopy, IglooRowKey, Rich } from './GlassIgloos.copy.types'
import enCopy from './GlassIgloos.copy.en'

/**
 * Glass-igloo comparison: /glass-igloos in en and ten more languages (/de, /ja since 18.10.2026,
 * /sv /es /br /kr /fr /it /nl /cn since 22.10.2026).
 *
 * Until 18.10.2026 a Japanese-only page with its copy inline. Now one component, copy per
 * language in GlassIgloos.copy.<lang>.ts, loaded per language like the cabin pages. Finnish has
 * its own page at /fi/iglumajoitus (Igloos.tsx); together they are one hreflang group
 * (src/i18n/pageClusters.ts, routes.json "hreflangCluster", public/sitemap.xml). A Finnish reader
 * reaching this route is sent to the Finnish page, never shown English on a localized URL.
 *
 * Rows, booking ids and sub-ids are data and live here; text lives in the copy files. Every
 * row opens the property's own page at the booking partner through the Worker
 * (propertyLodgingLink): en/de/sv → Sembo, the other languages → Trip.com (CLAUDE.md,
 * Affiliate Links); each copy file's tableNote names that partner.
 * 🔴 SID: <prefix>_<booking slug>, ≤ 33 chars (scripts/check-sids.mjs). The ja prefix
 * `stays_ja_igloos` predates this file; keep it so the click history stays one series.
 * Per-row CTA on purpose: one shared "search" button would drop the reader on the partner's
 * front page (mainos-CTA-auditti 9.8.2026).
 */

const cache: Partial<Record<Lang, GlassIgloosCopy>> = { en: enCopy }
const loaders: Record<Lang, () => Promise<{ default: GlassIgloosCopy }>> = {
  en: () => import('./GlassIgloos.copy.en'),
  // Finnish never renders this page (redirected to /fi/iglumajoitus below); the loader only
  // keeps the map complete.
  fi: () => import('./GlassIgloos.copy.en'),
  de: () => import('./GlassIgloos.copy.de'),
  ja: () => import('./GlassIgloos.copy.ja'),
  sv: () => import('./GlassIgloos.copy.sv'),
  es: () => import('./GlassIgloos.copy.es'),
  'pt-BR': () => import('./GlassIgloos.copy.ptBR'),
  ko: () => import('./GlassIgloos.copy.ko'),
  fr: () => import('./GlassIgloos.copy.fr'),
  it: () => import('./GlassIgloos.copy.it'),
  nl: () => import('./GlassIgloos.copy.nl'),
  'zh-CN': () => import('./GlassIgloos.copy.zhCN'),
}
preloadLazyCopy(cache, loaders)

const SID_PREFIX: Partial<Record<Lang, string>> = {
  en: 'igloos_en', de: 'igloos_de', ja: 'stays_ja_igloos', sv: 'igloos_sv', es: 'igloos_es',
  'pt-BR': 'igloos_pt', ko: 'igloos_ko', fr: 'igloos_fr', it: 'igloos_it', nl: 'igloos_nl', 'zh-CN': 'igloos_zh',
}
const CLUSTER = PAGE_CLUSTERS['glass-igloos']
const PAGE_PATH = '/glass-igloos'
const SITE = 'https://laplandstays.com'

/** Table order. A language lists the rows it has copy for. */
const ROWS: IglooRowKey[] = [
  'kakslauttanen', 'starArctic', 'muotka', 'auroraVillage', 'nellim', 'wildernessInari',
  'arcticSnowHotel', 'apukka', 'santasIgloosArcticCircle', 'levinIglut', 'northernLightsRanch',
]

const AREA_SEARCH = {
  rovaniemi: { slug: 'rovaniemi', destination: 'Rovaniemi, Finland' },
  north: { slug: 'saariselka', destination: 'Saariselkä, Finland' },
  levi: { slug: 'levi', destination: 'Levi, Finland' },
} as const

const TYPE_ICONS = [Sparkles, Building2, Snowflake]

const linkClass = 'text-pink font-semibold hover:underline'

/** Link from the snow-hotel type card to /ice-hotels (all 12 languages since 22.10.2026, tehtävä C). */
const ICE_LINK: Partial<Record<Lang, { lead: string; label: string }>> = {
  en: { lead: 'Where to sleep in the snow this winter: ', label: 'ice and snow hotels in Finnish Lapland' },
  de: { lead: 'Wo Sie diesen Winter im Schnee schlafen können: ', label: 'Eis- und Schneehotels in Finnisch-Lappland' },
  ja: { lead: 'この冬、雪の中で眠れる場所：', label: 'フィンランド・ラップランドのアイスホテルと雪のホテル' },
  sv: { lead: 'Här kan du sova i snö i vinter: ', label: 'is- och snöhotell i finska Lappland' },
  es: { lead: 'Dónde se puede dormir en la nieve este invierno: ', label: 'hoteles de hielo y nieve en la Laponia finlandesa' },
  'pt-BR': { lead: 'Onde dá para dormir na neve neste inverno: ', label: 'hotéis de gelo e neve na Lapônia finlandesa' },
  ko: { lead: '이번 겨울 눈 속에서 잘 수 있는 곳: ', label: '핀란드 라플란드의 아이스 호텔과 스노호텔' },
  fr: { lead: 'Où dormir dans la neige cet hiver : ', label: 'hôtels de glace et de neige en Laponie finlandaise' },
  it: { lead: 'Dove si può dormire nella neve quest\'inverno: ', label: 'hotel di ghiaccio e di neve nella Lapponia finlandese' },
  nl: { lead: 'Waar u deze winter in de sneeuw kunt slapen: ', label: 'ijs- en sneeuwhotels in Fins Lapland' },
  'zh-CN': { lead: '今年冬天哪裡能在雪屋過夜：', label: '芬蘭拉普蘭的冰雪飯店' },
}

/** "Check dates: <resort>" for screen readers, with the reader's own colon: full-width in ja/zh,
 *  a non-breaking space before it in French (natiivikaannos rule 19: punctuation comes from the
 *  reader's language, not from the code). */
const NBSP = String.fromCharCode(160)
function bookAria(lang: Lang, label: string, name: string): string {
  if (lang === 'ja' || lang === 'zh-CN') return `${label}：${name}`
  if (lang === 'fr') return `${label}${NBSP}: ${name}`
  return `${label}: ${name}`
}

function RichText({ parts, to }: { parts: Rich; to: (p: string) => string }) {
  return (
    <>
      {parts.map((p, i) => {
        if (typeof p === 'string') return <span key={i}>{p}</span>
        if ('to' in p) return <Link key={i} to={to(p.to)} className={linkClass}>{p.label}</Link>
        return <a key={i} href={p.href} className={linkClass}>{p.label}</a>
      })}
    </>
  )
}

export default function GlassIgloos() {
  const lang = useLang()
  const to = useLocalePath()
  const c = useLazyCopy(lang, cache, loaders)
  const sidPrefix = SID_PREFIX[lang]

  // A language without its own version here (fi): its own page if it has one, else the fallback.
  if (!sidPrefix) {
    const own = CLUSTER.paths[lang]
    return <Navigate to={to(own && own !== PAGE_PATH ? own : CLUSTER.fallback)} replace />
  }

  const pageUrl = `${SITE}${to(PAGE_PATH)}/`
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    author: {
      '@type': 'Person',
      name: 'Vesa Pesola',
      jobTitle: 'Editor / operator',
      worksFor: { '@type': 'Organization', name: 'LaPeso Oy' },
      url: 'https://laplandstays.com/editorial-policy',
    },
    publisher: { '@type': 'Organization', name: 'LaplandStays' },
    datePublished: '2026-08-15',
    dateModified: '2026-10-18',
    mainEntityOfPage: pageUrl,
    image: `${SITE}/images/hero-glass-igloos-1920.webp`,
  }
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: c.breadcrumbHome, item: `${SITE}${to('/')}${lang === 'en' ? '' : '/'}` },
      { '@type': 'ListItem', position: 2, name: c.breadcrumbPage, item: pageUrl },
    ],
  }

  const rows = ROWS.filter((k) => c.rows[k] && PROPERTY_BOOKING[k])
  const hasPrice = Boolean(c.priceHeader)

  return (
    <>
      <SEO
        title={c.seo.title}
        description={c.seo.description}
        canonicalPath={PAGE_PATH}
        ogImage="https://laplandstays.com/og-default.jpg"
        keywords={c.keywords}
        jsonLd={[localizeArticle(articleJsonLd, c.seo), breadcrumbJsonLd]}
        hreflangPaths={CLUSTER.paths}
      />

      {/* Hero: the resort's own photograph from its booking-partner page (receipt in data/photoCredits.ts). */}
      <section className="relative overflow-hidden bg-night text-white">
        <div className="relative min-h-[70svh] flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-14 sm:pb-16">
          <picture>
            <source type="image/avif" srcSet="/images/hero-glass-igloos-800.avif 800w, /images/hero-glass-igloos-1200.avif 1200w, /images/hero-glass-igloos-1920.avif 1920w" sizes="100vw" />
            <source type="image/webp" srcSet="/images/hero-glass-igloos-800.webp 800w, /images/hero-glass-igloos-1200.webp 1200w, /images/hero-glass-igloos-1920.webp 1920w" sizes="100vw" />
            <img
              src="/images/hero-glass-igloos-1920.webp"
              alt={c.heroAlt}
              className="absolute inset-0 w-full h-full object-cover object-[center_60%]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="1920"
              height="1280"
            />
          </picture>
          <PhotoMark id="hero-glass-igloos" className="absolute bottom-3 right-3 z-20" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-night/55 via-night/30 to-night" />
          <div aria-hidden="true" className="absolute inset-0 [background:radial-gradient(ellipse_72%_64%_at_50%_52%,rgba(15,23,42,0.82)_0%,rgba(15,23,42,0.55)_58%,rgba(15,23,42,0.12)_100%)]" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-widest text-white/85 bg-night/45 border border-white/25 rounded-full px-3 py-1 mb-5 max-w-full">
              <Megaphone className="w-3 h-3 shrink-0" aria-hidden="true" />
              <span className="min-w-0">{c.adBadge}</span>
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-wide mb-5 [text-shadow:0_2px_18px_rgba(0,0,0,0.75)]">
              {c.h1}
            </h1>
            <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6 [text-shadow:0_1px_10px_rgba(0,0,0,0.8)]">
              {c.lead}
            </p>
            <AffiliateDisclosure variant="compact" className="text-white/75 [&>svg]:text-white/75 [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]" />
          </div>
        </div>
      </section>

      <PageBreadcrumb />

      {/* Three types */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3 max-lg:text-center">{c.typesEyebrow}</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-night tracking-wide mb-6 max-lg:text-center text-balance">{c.typesH2}</h2>
          <p className="text-charcoal/70 text-lg leading-relaxed mb-10 max-w-3xl">{c.typesIntro}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {c.typeCards.map((card, i) => {
              const Icon = TYPE_ICONS[i] ?? Sparkles
              return (
                <div key={card.title} className="flex flex-col bg-gradient-to-b from-pink/5 to-white border border-pink/10 rounded-2xl p-6">
                  <div className="w-11 h-11 rounded-xl bg-pink/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-pink" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl text-night tracking-wide mb-1">{card.title}</h3>
                  <p className="text-pink text-xs font-semibold uppercase tracking-widest mb-3">{card.tagline}</p>
                  <p className="text-charcoal/75 text-[15px] leading-relaxed mb-4">{card.body}</p>
                  <p className="text-charcoal/60 text-[13px] italic leading-relaxed mt-auto">{card.forWho}</p>
                </div>
              )
            })}
          </div>
          <p className="text-charcoal/70 text-[15px] leading-relaxed mt-8 max-w-3xl">
            <RichText parts={c.typesNote} to={to} />
          </p>
          <p className="text-charcoal/70 text-[15px] leading-relaxed mt-4 max-w-3xl">{c.kidsNote}</p>
          {ICE_LINK[lang] && (
            <p className="text-charcoal/70 text-[15px] leading-relaxed mt-4 max-w-3xl">
              {ICE_LINK[lang]!.lead}
              <Link to={to('/ice-hotels')} className={linkClass}>{ICE_LINK[lang]!.label}</Link>
            </p>
          )}
        </div>
      </section>

      {/* Season */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3 max-lg:text-center">{c.seasonEyebrow}</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-6 max-lg:text-center text-balance">{c.seasonH2}</h2>
          {c.seasonBody.map((p, i) => (
            <p key={i} className={`text-charcoal/75 text-[15px] sm:text-base leading-relaxed ${i < c.seasonBody.length - 1 ? 'mb-4' : ''}`}>{p}</p>
          ))}
        </div>
      </section>

      {/* Property table */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-4 max-lg:text-center text-balance">{c.tableH2}</h2>
          <p className="text-charcoal/70 text-[15px] leading-relaxed mb-6 max-w-3xl">{c.tableIntro}</p>
          {/* Under lg the same rows as cards. 🔴 A 760–880 px table, even inside overflow-x-auto, made
              mobile Chrome widen the layout viewport (measured 18.10.2026: 320 px phone → innerWidth 626,
              the nav and the logo cut off); this was the /ja/glass-igloos horizontal scroll known since 27.9. */}
          <ul className="lg:hidden space-y-3">
            {rows.map((key) => {
              const r = c.rows[key]!
              const b = PROPERTY_BOOKING[key]!
              const sid = `${sidPrefix}_${b.slug}`
              const href = propertyLodgingLink(b, sid, lang)
              return (
                <li key={key} className="bg-white border border-pink/10 rounded-2xl p-4">
                  <h3 className="font-heading text-xl text-night tracking-wide leading-tight mb-2" translate="no">{r.name}</h3>
                  {/* dt capped at 7.5rem: an `auto` track grows to the label's max-content, and nl "Dichtstbijzijnde
                      luchthaven" left the value column ~50 px at 320 px, so the page scrolled sideways (22.10.2026). */}
                  <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-1 text-[14px] mb-3">
                    <dt className="text-charcoal/55 max-w-[7.5rem] [overflow-wrap:anywhere]">{c.tableHeaders.area}</dt>
                    <dd className="text-charcoal/80 min-w-0 [overflow-wrap:anywhere]">{r.area}</dd>
                    <dt className="text-charcoal/55 max-w-[7.5rem] [overflow-wrap:anywhere]">{c.tableHeaders.airport}</dt>
                    <dd className="text-charcoal/80 min-w-0 [overflow-wrap:anywhere]">{r.airport}</dd>
                    <dt className="text-charcoal/55 max-w-[7.5rem] [overflow-wrap:anywhere]">{c.tableHeaders.feature}</dt>
                    <dd className="text-charcoal/80 min-w-0 [overflow-wrap:anywhere]">{r.feature}</dd>
                    {hasPrice && (
                      <>
                        <dt className="text-charcoal/55 max-w-[7.5rem] [overflow-wrap:anywhere]">{c.priceHeader}</dt>
                        <dd className="text-charcoal/80 min-w-0 [overflow-wrap:anywhere]">{r.price}</dd>
                      </>
                    )}
                  </dl>
                  <a
                    href={href}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    onClick={() => trackAffiliateClick('lodging', sid, href)}
                    aria-label={bookAria(lang, c.bookLabel, r.name)}
                    className="lv-tap inline-flex items-center gap-1 text-[13px] px-3 py-1.5 rounded-full bg-pink/10 text-pink font-semibold hover:bg-pink hover:text-white transition-colors"
                  >
                    {c.bookLabel}
                    <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="hidden lg:block overflow-x-auto rounded-2xl border border-pink/10 bg-white">
            <table className={`w-full ${hasPrice ? 'min-w-[880px]' : 'min-w-[760px]'} text-left text-[14px]`}>
              <thead>
                <tr className="border-b border-pink/10">
                  <th scope="col" className="p-4 font-heading text-base text-night tracking-wide">{c.tableHeaders.name}</th>
                  <th scope="col" className="p-4 font-heading text-base text-night tracking-wide">{c.tableHeaders.area}</th>
                  <th scope="col" className="p-4 font-heading text-base text-night tracking-wide">{c.tableHeaders.airport}</th>
                  <th scope="col" className="p-4 font-heading text-base text-night tracking-wide">{c.tableHeaders.feature}</th>
                  {hasPrice && <th scope="col" className="p-4 font-heading text-base text-night tracking-wide">{c.priceHeader}</th>}
                  <th scope="col" className="p-4"><span className="sr-only">{c.tableHeaders.book}</span></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((key) => {
                  const r = c.rows[key]!
                  const b = PROPERTY_BOOKING[key]!
                  const sid = `${sidPrefix}_${b.slug}`
                  const href = propertyLodgingLink(b, sid, lang)
                  return (
                    <tr key={key} className="border-b border-gray-100 last:border-b-0 align-top">
                      <th scope="row" className="p-4 text-night font-semibold text-[14px]" translate="no">{r.name}</th>
                      <td className="p-4 text-charcoal/80">{r.area}</td>
                      <td className="p-4 text-charcoal/80">{r.airport}</td>
                      <td className="p-4 text-charcoal/80">{r.feature}</td>
                      {hasPrice && <td className="p-4 text-charcoal/80">{r.price}</td>}
                      <td className="p-4">
                        <a
                          href={href}
                          target="_blank"
                          rel="sponsored nofollow noopener"
                          onClick={() => trackAffiliateClick('lodging', sid, href)}
                          aria-label={bookAria(lang, c.bookLabel, r.name)}
                          className="inline-flex items-center gap-1 text-[13px] whitespace-nowrap px-3 py-1.5 rounded-full bg-pink/10 text-pink font-semibold hover:bg-pink hover:text-white transition-colors"
                        >
                          {c.bookLabel}
                          <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
                        </a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p className="text-charcoal/80 text-base leading-relaxed mt-4 max-w-3xl">{c.tableNote}</p>
        </div>
      </section>

      {/* Areas */}
      {(Object.keys(AREA_SEARCH) as (keyof typeof AREA_SEARCH)[]).map((id) => {
        const area = c.areas[id]
        const ctaSid = `${sidPrefix}_${AREA_SEARCH[id].slug}`
        const ctaHref = buildAffiliateUrl({ partner: 'hotels', sid: ctaSid, destination: AREA_SEARCH[id].destination, lang })
        return (
          <section key={id} className="py-16 sm:py-20 px-4 sm:px-6 odd:bg-white even:bg-gradient-to-b even:from-white even:to-pink/5">
            <div className="max-w-4xl mx-auto">
              <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3 max-lg:text-center">{area.eyebrow}</p>
              <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-5 max-lg:text-center text-balance">{area.title}</h2>
              <p className="text-charcoal/75 text-[15px] sm:text-base leading-relaxed mb-7">{area.intro}</p>
              <div className="space-y-4 mb-7">
                {area.properties.map((p) => (
                  <div key={p.name} className="bg-white border border-pink/10 rounded-2xl p-5">
                    <h3 className="font-heading text-lg text-night tracking-wide mb-1.5">{p.name}</h3>
                    <p className="text-charcoal/75 text-[14px] leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>
              {area.outro && <p className="text-charcoal/75 text-[15px] leading-relaxed mb-7">{area.outro}</p>}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  onClick={() => trackAffiliateClick('lodging', ctaSid, ctaHref)}
                  className="inline-flex items-center gap-2 bg-[#DB2777] hover:bg-[#BE185D] text-white font-semibold py-3 px-6 rounded-xl transition-colors text-sm"
                >
                  {area.ctaLabel}
                  <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>
                {area.guideLinks.map((g) => (
                  <Link key={g.to} to={to(g.to)} className="lv-tap text-pink font-semibold text-sm hover:underline inline-flex items-center gap-1">
                    {g.label}
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Which area: three questions */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3 max-lg:text-center">{c.questionsEyebrow}</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-6 max-lg:text-center text-balance">{c.questionsH2}</h2>
          <p className="text-charcoal/75 text-[15px] sm:text-base leading-relaxed mb-7">{c.questionsIntro}</p>
          <div className="space-y-3">
            {c.questions.map((pt, i) => (
              <div key={pt.title} className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100">
                <span className="font-heading text-2xl text-pink shrink-0 w-8">{i + 1}</span>
                <div className="min-w-0">
                  <h3 className="font-heading text-lg text-night tracking-wide mb-1">{pt.title}</h3>
                  <p className="text-charcoal/75 text-[14px] leading-relaxed">{pt.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Igloo nights + a cabin week (en/de) */}
      {c.cabinCombo && (
        <section className="py-14 sm:py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-pink/15 rounded-2xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
              <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{c.cabinCombo.eyebrow}</p>
              <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-4">{c.cabinCombo.h2}</h2>
              <p className="text-charcoal/80 text-[15px] leading-relaxed mb-6">{c.cabinCombo.body}</p>
              <Link
                to={to('/cabins')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-pink/40 hover:bg-pink hover:text-white text-pink font-semibold py-3.5 px-6 rounded-xl transition-colors text-sm"
              >
                {c.cabinCombo.linkLabel}
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Getting there */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3 max-lg:text-center">{c.accessEyebrow}</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-6 max-lg:text-center text-balance">{c.accessH2}</h2>
          {c.access.map((p, i) => (
            <p key={i} className={`text-charcoal/75 text-[15px] sm:text-base leading-relaxed ${i < c.access.length - 1 ? 'mb-4' : ''}`}>
              <RichText parts={p} to={to} />
            </p>
          ))}
        </div>
      </section>

      {/* Sample trips */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3 max-lg:text-center">{c.itinerariesEyebrow}</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-6 max-lg:text-center text-balance">{c.itinerariesH2}</h2>
          <p className="text-charcoal/75 text-[15px] sm:text-base leading-relaxed mb-7">{c.itinerariesIntro}</p>
          <div className="space-y-4">
            {c.itineraries.map((m) => (
              <div key={m.title} className="bg-white border border-pink/10 rounded-2xl p-5">
                <h3 className="font-heading text-lg text-night tracking-wide mb-1.5">{m.title}</h3>
                <p className="text-charcoal/75 text-[14px] leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What the rate includes */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3 max-lg:text-center">{c.inclusionsEyebrow}</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-6 max-lg:text-center text-balance">{c.inclusionsH2}</h2>
          {c.inclusionsBody.map((p, i) => (
            <p key={i} className={`text-charcoal/75 text-[15px] sm:text-base leading-relaxed ${i < c.inclusionsBody.length - 1 ? 'mb-4' : 'mb-7'}`}>{p}</p>
          ))}
          <div className="space-y-3">
            {c.inclusions.map((pt, i) => (
              <div key={pt.title} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-heading text-2xl text-pink shrink-0 w-8">{i + 1}</span>
                <div className="min-w-0">
                  <h3 className="font-heading text-lg text-night tracking-wide mb-1">{pt.title}</h3>
                  <p className="text-charcoal/75 text-[14px] leading-relaxed">{pt.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-charcoal/80 text-base leading-relaxed mt-5">{c.inclusionsNote}</p>
        </div>
      </section>

      {/* When to book */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3 max-lg:text-center">{c.bookingEyebrow}</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-6 max-lg:text-center text-balance">{c.bookingH2}</h2>
          <p className="text-charcoal/75 text-[15px] sm:text-base leading-relaxed mb-7">{c.bookingIntro}</p>
          <div className="space-y-3 text-[15px] mb-7">
            {c.bookingRows.map((s) => (
              <div key={s.period} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 p-3 rounded-lg bg-white border border-gray-100">
                <span className="font-heading text-base text-pink shrink-0 w-40 sm:w-44">{s.period}</span>
                <span className="text-charcoal/75 text-[14px] leading-snug min-w-0 basis-full sm:basis-auto sm:flex-1">{s.body}</span>
              </div>
            ))}
          </div>
          <p className="text-charcoal/75 text-[15px] leading-relaxed">
            <RichText parts={c.bookingOutro} to={to} />
          </p>
        </div>
      </section>

      {/* Cloudy nights */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3 max-lg:text-center">{c.cloudyEyebrow}</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-6 max-lg:text-center text-balance">{c.cloudyH2}</h2>
          <p className="text-charcoal/75 text-[15px] sm:text-base leading-relaxed mb-7">{c.cloudyIntro}</p>
          <div className="space-y-3 mb-7">
            {c.cloudy.map((pt, i) => (
              <div key={pt.title} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-heading text-2xl text-pink shrink-0 w-8">{i + 1}</span>
                <div className="min-w-0">
                  <h3 className="font-heading text-lg text-night tracking-wide mb-1">{pt.title}</h3>
                  <p className="text-charcoal/75 text-[14px] leading-relaxed">{pt.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-charcoal/75 text-[15px] leading-relaxed">
            <RichText parts={c.cloudyOutro} to={to} />
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-night text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-wide mb-4">{c.ctaH2}</h2>
          <p className="text-white/70 mb-8 leading-relaxed">{c.ctaBody}</p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <Link
              to={to('/when-to-go')}
              className="bg-[#DB2777] hover:bg-[#BE185D] text-white font-semibold py-4 px-6 sm:px-8 rounded-xl transition-colors text-sm tracking-wider text-center"
            >
              {c.ctaPrimary}
            </Link>
            <Link
              to={to('/property-types')}
              className="border border-white/30 hover:border-pink/60 text-white hover:text-pink font-semibold py-4 px-6 sm:px-8 rounded-xl transition-colors text-sm tracking-wider text-center"
            >
              {c.ctaSecondary}
            </Link>
          </div>
          <p className="text-white/80 text-base leading-relaxed mt-8 max-w-xl mx-auto">{c.checkedNote}</p>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
