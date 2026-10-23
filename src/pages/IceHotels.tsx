import { Link } from 'react-router-dom'
import { ExternalLink, Megaphone, Thermometer, Moon, Flame, Baby } from 'lucide-react'
import SEO from '../components/SEO'
import { localizeArticle } from '../lib/jsonLd'
import AffiliateDisclosure from '../components/AffiliateDisclosure'
import Newsletter from '../components/Newsletter'
import PageBreadcrumb from '../components/PageBreadcrumb'
import PhotoMark from '../components/PhotoMark'
import { propertyLodgingLink } from '../lib/affiliate'
import { PROPERTY_BOOKING } from '../data/propertyBooking'
import { trackAffiliateClick } from '../lib/analytics'
import { useLang, useLocalePath, type Lang } from '../i18n/useLang'
import { preloadLazyCopy, useLazyCopy } from '../i18n/lazyCopy'
import type { IceHotelsCopy, IceStayCopy, Rich } from './IceHotels.copy.types'
import enCopy from './IceHotels.copy.en'

/**
 * Ice and snow hotels in Finnish Lapland, /ice-hotels in all 12 languages (tehtävä C, 22.10.2026).
 *
 * Demand: ice hotel lapland / hôtel de glace laponie / ijshotel lapland / eishotel finnland … (OpenSEO
 * 22.10.2026, LAPLANDSTAYS-AUDIT §10). Part of that demand is the ICEHOTEL in Sweden, so the page says
 * where that is instead of pretending it is here. Facts from each property's own website (22.10.2026).
 *
 * Only Arctic SnowHotel is bookable through the Worker (Sembo fi/sv/de/en, Trip.com elsewhere); its copy
 * names that partner (`arctic.ctaNote`). SnowVillage's single snow suite and Lucky Ranch's igloos are
 * sold by the properties themselves and get no link (no unpaid referrals, Vesa 11.9.2026).
 * The places are text sections, not cards: only Arctic SnowHotel has an image we may use (its own
 * media bank, the hero), and a card without an image is not publishable (Vesa 20.10.2026).
 */

const cache: Partial<Record<Lang, IceHotelsCopy>> = { en: enCopy }
const loaders: Record<Lang, () => Promise<{ default: IceHotelsCopy }>> = {
  en: () => import('./IceHotels.copy.en'),
  fi: () => import('./IceHotels.copy.fi'),
  de: () => import('./IceHotels.copy.de'),
  ja: () => import('./IceHotels.copy.ja'),
  sv: () => import('./IceHotels.copy.sv'),
  es: () => import('./IceHotels.copy.es'),
  'pt-BR': () => import('./IceHotels.copy.ptBR'),
  ko: () => import('./IceHotels.copy.ko'),
  fr: () => import('./IceHotels.copy.fr'),
  it: () => import('./IceHotels.copy.it'),
  nl: () => import('./IceHotels.copy.nl'),
  'zh-CN': () => import('./IceHotels.copy.zhCN'),
}
preloadLazyCopy(cache, loaders)

const PAGE_PATH = '/ice-hotels'
const SITE = 'https://laplandstays.com'
/** ≤ 33 chars with the booking slug (scripts/check-sids.mjs). */
const SID_PREFIX: Record<Lang, string> = {
  en: 'ice_en', fi: 'ice_fi', de: 'ice_de', ja: 'ice_ja', sv: 'ice_sv', es: 'ice_es', 'pt-BR': 'ice_pt',
  ko: 'ice_ko', fr: 'ice_fr', it: 'ice_it', nl: 'ice_nl', 'zh-CN': 'ice_zh',
}
const NBSP = String.fromCharCode(160)
/** "Check dates: <name>" for screen readers, with the reader's own colon (natiivikaannos rule 19). */
function bookAria(lang: Lang, label: string, name: string): string {
  if (lang === 'ja' || lang === 'zh-CN') return `${label}：${name}`
  if (lang === 'fr') return `${label}${NBSP}: ${name}`
  return `${label}: ${name}`
}

const linkClass = 'text-pink font-semibold hover:underline'

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

function StayBlock({ s, children }: { s: IceStayCopy; children?: React.ReactNode }) {
  return (
    <article className="py-8 first:pt-0 border-t first:border-t-0 border-night/10">
      <h3 className="font-heading text-2xl sm:text-3xl text-night tracking-wide mb-1" translate="no">{s.name}</h3>
      <p className="text-charcoal/75 text-base mb-4">{s.place}</p>
      <ul className="space-y-2 text-charcoal/80 text-[15px] leading-relaxed list-disc pl-5 marker:text-pink">
        {s.facts.map((f) => <li key={f}>{f}</li>)}
      </ul>
      {children}
    </article>
  )
}

const NIGHT_ICONS = [Thermometer, Moon, Flame, Baby]

export default function IceHotels() {
  const lang = useLang()
  const to = useLocalePath()
  const c = useLazyCopy(lang, cache, loaders)

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
    datePublished: '2026-10-22',
    dateModified: '2026-10-22',
    mainEntityOfPage: pageUrl,
    image: `${SITE}/images/hero-ice-hotels-1920.webp`,
  }
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: c.breadcrumbHome, item: `${SITE}${to('/')}${lang === 'en' ? '' : '/'}` },
      { '@type': 'ListItem', position: 2, name: c.breadcrumbPage, item: pageUrl },
    ],
  }

  const booking = PROPERTY_BOOKING.arcticSnowHotel!
  const sid = `${SID_PREFIX[lang]}_${booking.slug}`
  const href = propertyLodgingLink(booking, sid, lang)

  return (
    <>
      <SEO
        title={c.seo.title}
        description={c.seo.description}
        canonicalPath={PAGE_PATH}
        ogImage="https://laplandstays.com/og-default.jpg"
        keywords={c.keywords}
        jsonLd={[localizeArticle(articleJsonLd, c.seo), breadcrumbJsonLd]}
      />

      {/* Hero: Arctic SnowHotel's own photograph from its media bank (receipt in data/photoCredits.ts). */}
      <section className="relative overflow-hidden bg-night text-white">
        <div className="relative min-h-[70svh] flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-14 sm:pb-16">
          <picture>
            <source type="image/avif" srcSet="/images/hero-ice-hotels-800.avif 800w, /images/hero-ice-hotels-1200.avif 1200w, /images/hero-ice-hotels-1920.avif 1920w" sizes="100vw" />
            <source type="image/webp" srcSet="/images/hero-ice-hotels-800.webp 800w, /images/hero-ice-hotels-1200.webp 1200w, /images/hero-ice-hotels-1920.webp 1920w" sizes="100vw" />
            <img
              src="/images/hero-ice-hotels-1920.webp"
              alt={c.heroAlt}
              className="absolute inset-0 w-full h-full object-cover object-[center_55%]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="1920"
              height="1440"
            />
          </picture>
          <PhotoMark id="hero-ice-hotels" className="absolute bottom-3 right-3 z-20" />
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

      {/* Where you can sleep in snow */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3 max-lg:text-center">{c.staysEyebrow}</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-night tracking-wide mb-6 max-lg:text-center text-balance">{c.staysH2}</h2>
          <p className="text-charcoal/70 text-lg leading-relaxed mb-10">{c.staysIntro}</p>
          <StayBlock s={c.arctic}>
            <p className="text-charcoal/75 text-[15px] leading-relaxed mt-4">
              <RichText parts={c.arctic.glassNote} to={to} />
            </p>
            {/* Nappi ja selite allekkain tabletilla: vierekkäin nappi kutistui ja rivittyi kahdelle riville 768–1024 px (Vesa 23.10.2026). */}
            <div className="mt-5 flex flex-col lg:flex-row lg:items-center gap-3">
              <a
                href={href}
                target="_blank"
                rel="sponsored nofollow noopener"
                onClick={() => trackAffiliateClick('lodging', sid, href)}
                aria-label={bookAria(lang, c.arctic.ctaLabel, c.arctic.name)}
                className="lv-tap inline-flex w-fit shrink-0 whitespace-nowrap items-center gap-1.5 px-5 py-2.5 rounded-full bg-pink text-white font-semibold text-sm hover:bg-pink/90 transition-colors"
              >
                {c.arctic.ctaLabel}
                <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              </a>
              <p className="text-charcoal/75 text-[15px] leading-snug lg:max-w-md">{c.arctic.ctaNote}</p>
            </div>
          </StayBlock>
          <StayBlock s={c.snowVillage} />
          <StayBlock s={c.luckyRanch} />
        </div>
      </section>

      {/* What the night is like */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/[0.04]">
        <div className="max-w-6xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3 max-lg:text-center">{c.nightEyebrow}</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-night tracking-wide mb-10 max-lg:text-center text-balance">{c.nightH2}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {c.night.map((p, i) => {
              const Icon = NIGHT_ICONS[i] ?? Thermometer
              return (
                <li key={p.title} className="rounded-2xl bg-white border border-pink/10 p-6 border-l-4 border-l-pink">
                  <h3 className="flex items-center gap-2 font-heading text-xl text-night tracking-wide mb-2">
                    <Icon className="w-5 h-5 text-pink shrink-0" aria-hidden="true" />
                    {p.title}
                  </h3>
                  <p className="text-charcoal/75 text-[15px] leading-relaxed">{p.body}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Day visits */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3 max-lg:text-center">{c.visitsEyebrow}</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-night tracking-wide mb-6 max-lg:text-center text-balance">{c.visitsH2}</h2>
          <p className="text-charcoal/70 text-lg leading-relaxed mb-10 max-w-3xl">{c.visitsIntro}</p>
          {/* Phones and tablets: rows; desktop: table (a wide table widens the mobile layout, 18.10.2026). */}
          <ul className="lg:hidden space-y-3">
            {c.visits.map((v) => (
              <li key={v.name} className="border-b border-night/10 pb-4">
                <h3 className="font-heading text-xl text-night tracking-wide mb-1" translate="no">{v.name}</h3>
                <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-1 text-[14px]">
                  <dt className="text-charcoal/55 max-w-[7.5rem] [overflow-wrap:anywhere]">{c.visitHeaders.place}</dt>
                  <dd className="text-charcoal/80 min-w-0 [overflow-wrap:anywhere]">{v.place}</dd>
                  <dt className="text-charcoal/55 max-w-[7.5rem] [overflow-wrap:anywhere]">{c.visitHeaders.season}</dt>
                  <dd className="text-charcoal/80 min-w-0 [overflow-wrap:anywhere]">{v.season}</dd>
                  <dt className="text-charcoal/55 max-w-[7.5rem] [overflow-wrap:anywhere]">{c.visitHeaders.what}</dt>
                  <dd className="text-charcoal/80 min-w-0 [overflow-wrap:anywhere]">{v.what}</dd>
                </dl>
              </li>
            ))}
          </ul>
          <div className="hidden lg:block rounded-2xl border border-pink/10 overflow-hidden">
            <table className="w-full text-left text-[14px]">
              <thead className="bg-pink/[0.06] text-night">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">{c.visitHeaders.name}</th>
                  <th scope="col" className="px-4 py-3 font-semibold">{c.visitHeaders.place}</th>
                  <th scope="col" className="px-4 py-3 font-semibold">{c.visitHeaders.season}</th>
                  <th scope="col" className="px-4 py-3 font-semibold">{c.visitHeaders.what}</th>
                </tr>
              </thead>
              <tbody>
                {c.visits.map((v) => (
                  <tr key={v.name} className="border-t border-pink/10 align-top">
                    <th scope="row" className="px-4 py-3 font-semibold text-night" translate="no">{v.name}</th>
                    <td className="px-4 py-3 text-charcoal/80">{v.place}</td>
                    <td className="px-4 py-3 text-charcoal/80">{v.season}</td>
                    <td className="px-4 py-3 text-charcoal/80">{v.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The ICEHOTEL is in Sweden */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 bg-night text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3 max-lg:text-center">{c.swedenEyebrow}</p>
          <h2 className="font-heading text-3xl sm:text-4xl tracking-wide mb-5 max-lg:text-center text-balance">{c.swedenH2}</h2>
          {c.swedenBody.map((p) => <p key={p} className="text-white/80 text-[15px] sm:text-base leading-relaxed mb-3 last:mb-0">{p}</p>)}
        </div>
      </section>

      {/* Warmer options */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3 max-lg:text-center">{c.nextEyebrow}</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-5 max-lg:text-center text-balance">{c.nextH2}</h2>
          {c.next.map((parts, i) => (
            <p key={i} className="text-charcoal/80 text-[15px] sm:text-base leading-relaxed mb-3">
              <RichText parts={parts} to={to} />
            </p>
          ))}
          <p className="text-charcoal/80 text-base leading-relaxed mt-8">{c.checkedNote}</p>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
