import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArrowRight, Flame, Users, UtensilsCrossed, MoonStar, ExternalLink, Megaphone } from 'lucide-react'
import SEO from '../components/SEO'
import { localizeArticle } from '../lib/jsonLd'
import Newsletter from '../components/Newsletter'
import PageBreadcrumb from '../components/PageBreadcrumb'
import CabinShowcase from '../components/CabinShowcase'
import { buildLomarengasUrl, type LomarengasArea } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import { useLang, type Lang } from '../i18n/useLang'
import { useLocalePath } from '../i18n/useLang'
import type { PageCopy } from './Cabins.copy.types'
import enCopy from './Cabins.copy.en'

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Lapland Cabin Holiday: Levi, Ylläs, Ruka and Saariselkä',
  description:
    'How a Finnish cabin holiday works: what a mökki includes, how Levi, Ylläs, Ruka and Saariselkä differ, and how to browse cabins through Lomarengas.',
  author: {
    '@type': 'Person',
    name: 'Vesa Pesola',
    jobTitle: 'Editor / operator',
    worksFor: { '@type': 'Organization', name: 'Lapeso Oy' },
    url: 'https://laplandstays.com/editorial-policy',
  },
  publisher: { '@type': 'Organization', name: 'LaplandStays' },
  datePublished: '2026-07-23',
  dateModified: '2026-07-23',
  mainEntityOfPage: 'https://laplandstays.com/cabins',
  image: 'https://laplandstays.com/og-default.jpg',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://laplandstays.com/' },
    { '@type': 'ListItem', position: 2, name: 'Cabin Holidays', item: 'https://laplandstays.com/cabins' },
  ],
}

// ---------- copy (lazy-loaded per locale) ----------

const cache: Partial<Record<Lang, PageCopy>> = { en: enCopy }
const loaders: Record<Lang, () => Promise<{ default: PageCopy }>> = {
  en: () => import('./Cabins.copy.en'),
  fi: () => import('./Cabins.copy.fi'),
  de: () => import('./Cabins.copy.de'),
  ja: () => import('./Cabins.copy.ja'),
  es: () => import('./Cabins.copy.es'),
  'pt-BR': () => import('./Cabins.copy.ptBR'),
  'zh-CN': () => import('./Cabins.copy.zhCN'),
  ko: () => import('./Cabins.copy.ko'),
  fr: () => import('./Cabins.copy.fr'),
  it: () => import('./Cabins.copy.it'),
  nl: () => import('./Cabins.copy.nl'),
  sv: () => import('./Cabins.copy.sv'),
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

const WHY_ICONS = [Flame, Users, UtensilsCrossed, MoonStar]
const AREA_META: { area: LomarengasArea; sid: string }[] = [
  { area: 'levi', sid: 'article_cabin_levi' },
  { area: 'yllas', sid: 'article_cabin_yllas' },
  { area: 'ruka', sid: 'article_cabin_ruka' },
  { area: 'saariselka', sid: 'article_cabin_saariselka' },
]

/** Lomarengas partner attribution: real logo (472×150 with transparency) on a
 *  light surface; the dark CTA band wraps it in a white chip for contrast. */
function LomarengasLogo({ className = '' }: { className?: string }) {
  return (
    <img
      src="/images/partners/lomarengas.png"
      alt="Lomarengas"
      width={472}
      height={150}
      loading="lazy"
      decoding="async"
      className={className}
    />
  )
}

export default function Cabins() {
  const to = useLocalePath()
  const lang = useLang()
  const copy = usePageCopy()
  const { seo, ui } = copy
  const onLomarengas = (sid: string, href: string) => () => trackAffiliateClick('lomarengas', sid, href)

  const heroHref = buildLomarengasUrl('lapland', 'article_cabin_partner', lang)
  const ctaHref = buildLomarengasUrl('lapland', 'article_cabin_lapland', lang)

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath="/cabins"
        ogImage="https://laplandstays.com/og-default.jpg"
        keywords={['lapland cabin holiday', 'lapland log cabin', 'levi cabin', 'yllas cabin', 'ruka cabin', 'saariselka cabin', 'finnish mokki', 'lomarengas lapland']}
        jsonLd={[localizeArticle(articleJsonLd, seo), breadcrumbJsonLd]}
      />

      <section className="relative overflow-hidden bg-night text-white">
        <div className="relative min-h-[78svh] flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-14 sm:pb-16">
          {/* AI-generated hero (unique to this site per brand rules). Mobile pulls the 800px variant. */}
          <picture>
            <source type="image/avif" srcSet="/images/hero-cabins-800.avif 800w, /images/hero-cabins-1200.avif 1200w" sizes="100vw" />
            <source type="image/webp" srcSet="/images/hero-cabins-800.webp 800w, /images/hero-cabins-1200.webp 1200w, /images/hero-cabins-1920.webp 1920w" sizes="100vw" />
            <img
              src="/images/hero-cabins-1920.webp"
              alt={ui.heroAlt}
              className="absolute inset-0 w-full h-full object-cover object-[center_62%]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="2752"
              height="1536"
            />
          </picture>
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/35 to-night" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* KKV ad marking: visible before any commercial content (Lomarengas terms). */}
            <p className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-widest text-white/85 bg-night/45 backdrop-blur-[2px] border border-white/25 rounded-full px-3 py-1 mb-5 max-w-full">
              <Megaphone className="w-3 h-3 shrink-0" aria-hidden="true" />
              <span className="min-w-0">{ui.adNotice}</span>
            </p>
            {/* No eyebrow / no second disclosure here: the ad-marking pill above is the
                single legally required notice, and the H1 already names the topic
                (Vesa 2026-07-23: hero had "mökkiloma" three times + two link notices). */}
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-wide mb-5 [text-shadow:0_2px_18px_rgba(0,0,0,0.75)]">
              {ui.h1}
            </h1>
            <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed [text-shadow:0_1px_10px_rgba(0,0,0,0.8)]">
              {ui.lead}
            </p>
          </div>
        </div>
      </section>

      <PageBreadcrumb />

      {/* Why a cabin */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{ui.whyEyebrow}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">{ui.whyH2}</h2>
          <p className="text-charcoal/70 text-lg leading-relaxed mb-10 max-w-3xl">{ui.whyLead}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ui.whyCards.map((card, i) => {
              const Icon = WHY_ICONS[i]
              return (
                <div key={i} className="flex items-start gap-4 bg-gradient-to-r from-pink/5 to-white border border-pink/10 rounded-2xl p-5 sm:p-6">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-pink/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-pink" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-night tracking-wide mb-1.5">{card.title}</h3>
                    <p className="text-charcoal/75 text-[15px] leading-relaxed">{card.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partner block: Lomarengas name visible next to the cabin content (program terms) */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-pink/15 rounded-2xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
            <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{ui.partnerEyebrow}</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-night tracking-wide mb-4">{ui.partnerH2}</h2>
            <LomarengasLogo className="h-9 sm:h-11 w-auto mb-4" />
            <p className="text-charcoal/80 text-[15px] leading-relaxed mb-4">{ui.partnerBody}</p>
            <p className="text-charcoal/60 text-[13px] leading-relaxed mb-6">{ui.partnerNote}</p>
            <a
              href={heroHref}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={onLomarengas('article_cabin_partner', heroHref)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-pink hover:bg-pink/90 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors text-sm uppercase tracking-wider"
            >
              {ui.partnerCta}
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>
      </section>

      {/* The four regions */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{ui.areasEyebrow}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">{ui.areasH2}</h2>
          <p className="text-charcoal/70 text-lg leading-relaxed mb-10 max-w-3xl">{ui.areasLead}</p>

          <div className="space-y-5">
            {ui.areas.map((a, i) => {
              const meta = AREA_META[i]
              const href = buildLomarengasUrl(meta.area, meta.sid, lang)
              return (
                <div key={i} className="bg-gradient-to-r from-pink/5 to-white border border-pink/10 rounded-2xl p-6 sm:p-7">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                    <h3 className="font-heading text-3xl text-night tracking-wide">{a.name}</h3>
                    <p className="text-pink text-sm font-semibold uppercase tracking-widest">{a.tagline}</p>
                  </div>
                  <p className="text-charcoal/80 text-[15px] leading-relaxed mb-4 max-w-4xl">{a.body}</p>
                  <ul className="space-y-1.5 mb-4">
                    {a.bullets.map((b, j) => (
                      <li key={j} className="text-charcoal/75 text-[14px] leading-snug flex gap-2">
                        <span className="text-pink shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {a.note && (
                    <p className="text-charcoal/60 text-[13px] italic leading-relaxed mb-4 max-w-3xl">{a.note}</p>
                  )}
                  <a
                    href={href}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    onClick={onLomarengas(meta.sid, href)}
                    className="inline-flex max-w-full items-center gap-1.5 text-sm px-4 py-2 rounded-full bg-pink/10 text-pink font-semibold hover:bg-pink hover:text-white transition-colors"
                  >
                    <span className="truncate">{a.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Live cabin showcase: real Lomarengas photos from the /_cabins feed API */}
      <CabinShowcase copy={ui.showcase} areaNames={ui.areas.map((a) => a.name)} lang={lang} />

      {/* Practical: how to read a listing */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{ui.practicalEyebrow}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">{ui.practicalH2}</h2>
          <p className="text-charcoal/70 text-lg leading-relaxed mb-10 max-w-3xl">{ui.practicalLead}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-heading text-xl text-night tracking-wide mb-3">{ui.checkTitle}</h3>
              <ul className="space-y-2 text-charcoal/75 text-[15px]">
                {ui.checkList.map((l, i) => <li key={i}>• {l}</li>)}
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-heading text-xl text-night tracking-wide mb-3">{ui.knowTitle}</h3>
              <ul className="space-y-2 text-charcoal/75 text-[15px]">
                {ui.knowList.map((l, i) => <li key={i}>• {l}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seasons */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{ui.seasonEyebrow}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">{ui.seasonH2}</h2>
          <p className="text-charcoal/70 text-lg leading-relaxed mb-8">{ui.seasonLead}</p>
          <div className="space-y-3 text-[15px]">
            {ui.seasons.map((s, i) => (
              <div key={i} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 p-3 rounded-lg bg-gray-50 border border-gray-100">
                <span className="font-heading text-base text-pink shrink-0 w-40 sm:w-44">{s.period}</span>
                <span className="text-charcoal/75 text-[14px] leading-snug min-w-0 basis-full sm:basis-auto sm:flex-1">{s.body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-night text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl sm:text-5xl tracking-wide mb-4">{ui.ctaH2}</h2>
          <p className="text-white/70 mb-8 leading-relaxed">{ui.ctaLead}</p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href={ctaHref}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={onLomarengas('article_cabin_lapland', ctaHref)}
              className="bg-pink hover:bg-pink/90 text-white font-semibold py-4 px-6 sm:px-8 rounded-xl transition-colors text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2"
            >
              {ui.ctaPrimary}
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
            <Link
              to={to('/when-to-go')}
              className="border border-white/30 hover:border-pink/60 text-white hover:text-pink font-semibold py-4 px-6 sm:px-8 rounded-xl transition-colors text-sm uppercase tracking-wider text-center"
            >
              {ui.ctaSecondary}
            </Link>
          </div>
          <p className="mt-6">
            <span className="inline-flex items-center bg-white rounded-lg px-3.5 py-2">
              <LomarengasLogo className="h-6 w-auto" />
            </span>
          </p>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
