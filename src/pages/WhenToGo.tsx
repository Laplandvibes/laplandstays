import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArrowRight, Sparkles, Snowflake, Sun, TreePine, Bell } from 'lucide-react'
import SEO from '../components/SEO'
import { localizeArticle } from '../lib/jsonLd'
import AffiliateDisclosure from '../components/AffiliateDisclosure'
import ReviewedBy from '../components/ReviewedBy'
import { REVIEWED_DATE } from '../lib/reviewDates'
import Newsletter from '../components/Newsletter'
import PageBreadcrumb from '../components/PageBreadcrumb'
import { HOTEL_SEARCH_FOR } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import { useLang, useLocalePath, type Lang } from '../i18n/useLang'
import type { PageCopy } from './WhenToGo.copy.types'
import enCopy from './WhenToGo.copy.en'

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'When to Visit Finnish Lapland, Month-by-Month Guide',
  description:
    'A month-by-month guide to Finnish Lapland: aurora season Sep–Apr, peak ski Jan–Mar, midnight sun Jun–Jul. When properties book out, what to expect from each month, what to budget.',
  author: {
    '@type': 'Person',
    name: 'Vesa Pesola',
    jobTitle: 'Editor / operator',
    worksFor: { '@type': 'Organization', name: 'LaPeso Oy' },
    url: 'https://laplandstays.com/editorial-policy',
  },
  publisher: { '@type': 'Organization', name: 'LaplandStays' },
  datePublished: '2026-04-26',
  dateModified: '2026-04-26',
  mainEntityOfPage: 'https://laplandstays.com/when-to-go',

  image: "https://laplandstays.com/og/when-to-go-1200x630.jpg",
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://laplandstays.com/' },
    { '@type': 'ListItem', position: 2, name: 'When to Go', item: 'https://laplandstays.com/when-to-go' },
  ],
}

// ---------- copy (lazy-loaded per locale) ----------

const cache: Partial<Record<Lang, PageCopy>> = { en: enCopy }
const loaders: Record<Lang, () => Promise<{ default: PageCopy }>> = {
  en: () => import('./WhenToGo.copy.en'),
  fi: () => import('./WhenToGo.copy.fi'),
  de: () => import('./WhenToGo.copy.de'),
  ja: () => import('./WhenToGo.copy.ja'),
  es: () => import('./WhenToGo.copy.es'),
  'pt-BR': () => import('./WhenToGo.copy.ptBR'),
  'zh-CN': () => import('./WhenToGo.copy.zhCN'),
  ko: () => import('./WhenToGo.copy.ko'),
  fr: () => import('./WhenToGo.copy.fr'),
  it: () => import('./WhenToGo.copy.it'),
  nl: () => import('./WhenToGo.copy.nl'),
  sv: () => import('./WhenToGo.copy.sv'),
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


const SEASON_ICONS = [Sparkles, Snowflake, Sun, TreePine]
const SEASON_COLORS = ['text-pink', 'text-blue-400', 'text-amber', 'text-orange-400']

export default function WhenToGo() {
  const to = useLocalePath()
  const lang = useLang()
  const copy = usePageCopy()
  const { seo, ui } = copy
  const onCta = (cta: string) => () => trackAffiliateClick('lodging', `whentogo_${cta}`, HOTEL_SEARCH_FOR(lang).lapland)

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath="/when-to-go"
        ogImage="https://laplandstays.com/og-default.jpg"
        keywords={['when to visit lapland', 'best time lapland', 'aurora season finland', 'midnight sun lapland', 'lapland weather by month', 'lapland march', 'lapland new year']}
        jsonLd={[localizeArticle(articleJsonLd, seo), breadcrumbJsonLd]}
      />

      <section className="relative overflow-hidden bg-night text-white">
        <div className="relative min-h-[70svh] flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-14 sm:pb-16">
          <picture>
            <source type="image/avif" srcSet="/images/hero-whentogo-800.avif 800w, /images/hero-whentogo-1200.avif 1200w" sizes="100vw" />
            <source type="image/webp" srcSet="/images/hero-whentogo-800.webp 800w, /images/hero-whentogo-1200.webp 1200w, /images/hero-whentogo-1920.webp 1920w" sizes="100vw" />
            <img
              src="/images/hero-whentogo-1920.webp"
              alt={ui.heroAlt}
              className="absolute inset-0 w-full h-full object-cover object-[center_45%]"
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
            <ReviewedBy variant="light" date={REVIEWED_DATE.june2026[lang]} className="mb-4" />
            <AffiliateDisclosure variant="compact" className="text-white/70 [&>svg]:text-white/70 [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]" />
          </div>
        </div>
      </section>

      {/* Ecosystem breadcrumb (network trail), below the hero */}
      <PageBreadcrumb />

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{ui.seasonsEyebrow}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-10">
            {ui.seasonsH2}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ui.seasonCards.map((s, i) => {
              const Icon = SEASON_ICONS[i]
              return (
                <div key={s.title} className="bg-gradient-to-b from-pink/5 to-white border border-pink/10 rounded-2xl p-6">
                  <Icon className={`w-7 h-7 ${SEASON_COLORS[i]} mb-4`} />
                  <h3 className="font-heading text-xl text-night tracking-wide mb-2">{s.title}</h3>
                  <p className="text-charcoal/70 text-[15px] leading-relaxed">{s.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-night text-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{ui.monthEyebrow}</p>
          <h2 className="font-heading text-4xl sm:text-5xl tracking-wide mb-4">
            {ui.monthH2}
          </h2>
          <p className="text-white/65 text-base leading-relaxed mb-8 max-w-3xl">
            {ui.monthLead}
          </p>

          <div className="stack-table overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/[0.04] text-left">
                  <th className="px-4 py-3 font-semibold text-white">{ui.th.month}</th>
                  <th className="px-4 py-3 font-semibold text-white">{ui.th.daylight}</th>
                  <th className="px-4 py-3 font-semibold text-white">{ui.th.aurora}</th>
                  <th className="px-4 py-3 font-semibold text-white">{ui.th.snow}</th>
                  <th className="px-4 py-3 font-semibold text-white">{ui.th.vibe}</th>
                  <th className="px-4 py-3 font-semibold text-white">{ui.th.booking}</th>
                </tr>
              </thead>
              <tbody>
                {ui.months.map((m, i) => (
                  <tr key={m.m} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                    <td className="px-4 py-3 font-heading text-base text-pink whitespace-nowrap">{m.m}</td>
                    <td data-label={ui.th.daylight} className="px-4 py-3 text-white/75 whitespace-nowrap text-[13px]">{m.daylight}</td>
                    <td data-label={ui.th.aurora} className="px-4 py-3 text-white/75 text-[13px]">{m.aurora}</td>
                    <td data-label={ui.th.snow} className="px-4 py-3 text-white/75 text-[13px]">{m.snow}</td>
                    <td data-label={ui.th.vibe} className="px-4 py-3 text-white/75 text-[13px]">{m.vibe}</td>
                    <td data-label={ui.th.booking} className="px-4 py-3 text-white/75 text-[13px]">{m.bookingNote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{ui.secretEyebrow}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">
            {ui.secretH2}
          </h2>
          <div className="space-y-5 text-charcoal/75 text-lg leading-relaxed">
            <p>{ui.secretIntro}</p>
            <ul className="space-y-3 pl-5">
              {ui.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Bell className="w-5 h-5 text-pink shrink-0 mt-1" />
                  <span>
                    <strong className="text-night">{ui.bulletStrong[i]}</strong>
                    {b.startsWith(ui.bulletStrong[i]) ? b.slice(ui.bulletStrong[i].length) : `, ${b}`}
                  </span>
                </li>
              ))}
            </ul>
            <p className="pt-2">{ui.catch}</p>
          </div>
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
              onClick={onCta('lapland_search')}
              className="bg-pink hover:bg-pink/90 text-white font-semibold py-4 px-8 rounded-xl transition-colors text-sm uppercase tracking-widest inline-flex items-center justify-center gap-2"
            >
              {ui.ctaPrimary}
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to={to('/property-types')}
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
