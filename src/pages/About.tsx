import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArrowRight, MapPin, Mail, ShieldCheck, Edit3 } from 'lucide-react'
import SEO from '../components/SEO'
import ReviewedBy from '../components/ReviewedBy'
import { REVIEWED_DATE } from '../lib/reviewDates'
import Newsletter from '../components/Newsletter'
import PageBreadcrumb from '../components/PageBreadcrumb'
import { useLang, useLocalePath, type Lang } from '../i18n/useLang'
import type { PageCopy } from './About.copy.types'
import enCopy from './About.copy.en'

const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About LaplandStays',
  url: 'https://laplandstays.com/about',
  description:
    'LaplandStays is operated by Lapeso Oy in Finnish Lapland. Editorial accommodation guide, verified rates, named anchor properties, sources cited.',
  publisher: {
    '@type': 'Organization',
    name: 'Lapeso Oy',
    url: 'https://laplandstays.com',
    address: { '@type': 'PostalAddress', addressCountry: 'FI', addressRegion: 'Lapland' },
    email: 'info@laplandvibes.com',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://laplandstays.com/' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://laplandstays.com/about' },
  ],
}

// ---------- copy (lazy-loaded per locale) ----------

const cache: Partial<Record<Lang, PageCopy>> = { en: enCopy }
const loaders: Record<Lang, () => Promise<{ default: PageCopy }>> = {
  en: () => import('./About.copy.en'),
  fi: () => import('./About.copy.fi'),
  de: () => import('./About.copy.de'),
  ja: () => import('./About.copy.ja'),
  es: () => import('./About.copy.es'),
  'pt-BR': () => import('./About.copy.ptBR'),
  'zh-CN': () => import('./About.copy.zhCN'),
  ko: () => import('./About.copy.ko'),
  fr: () => import('./About.copy.fr'),
  it: () => import('./About.copy.it'),
  nl: () => import('./About.copy.nl'),
  sv: () => import('./About.copy.sv'),
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

const CARD_ICONS = [MapPin, Mail, ShieldCheck, Edit3]

export default function About() {
  const to = useLocalePath()
  const lang = useLang()
  const copy = usePageCopy()
  const { seo, ui } = copy

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath="/about"
        ogImage="https://laplandstays.com/og-default.jpg"
        keywords={['about laplandstays', 'lapeso oy', 'lapland accommodation guide', 'who runs laplandstays']}
        jsonLd={[aboutPageJsonLd, breadcrumbJsonLd]}
      />

      <section className="relative overflow-hidden bg-night text-white">
        <div className="relative min-h-[64svh] flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-14 sm:pb-16">
          <picture>
            <source type="image/avif" srcSet="/images/hero-about-800.avif 800w, /images/hero-about-1200.avif 1200w" sizes="100vw" />
            <source type="image/webp" srcSet="/images/hero-about-800.webp 800w, /images/hero-about-1200.webp 1200w, /images/hero-about-1920.webp 1920w" sizes="100vw" />
            <img
              src="/images/hero-about-1920.webp"
              alt={ui.heroAlt}
              className="absolute inset-0 w-full h-full object-cover object-[center_55%]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="2752"
              height="1536"
            />
          </picture>
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/40 to-night" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-pink uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold mb-4 [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">{ui.eyebrow}</p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-wide mb-5 [text-shadow:0_2px_18px_rgba(0,0,0,0.75)]">
              {ui.h1}
            </h1>
            <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6 [text-shadow:0_1px_10px_rgba(0,0,0,0.8)]">
              {ui.intro}
            </p>
            <ReviewedBy variant="light" date={REVIEWED_DATE.june2026[lang]} />
          </div>
        </div>
      </section>

      {/* Ecosystem breadcrumb (network trail), below the hero */}
      <PageBreadcrumb />

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{ui.missionEyebrow}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">
            {ui.missionH2}
          </h2>
          <div className="space-y-5 text-charcoal/75 text-lg leading-relaxed">
            <p>{ui.missionP1}</p>
            <p>{ui.missionP2}</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{ui.opEyebrow}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-8">{ui.opH2}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ui.opCards.map((card, i) => {
              const Icon = CARD_ICONS[i]
              return (
                <div key={card.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <Icon className="w-6 h-6 text-pink mb-3" />
                  <h3 className="font-heading text-xl text-night tracking-wide mb-2">{card.title}</h3>
                  <p className="text-charcoal/70 text-[15px] leading-relaxed">
                    {'body' in card ? (
                      card.body
                    ) : 'emailNote' in card ? (
                      <>
                        {card.bodyPre} <br />
                        <a href="mailto:info@laplandvibes.com" className="text-pink hover:underline font-semibold">info@laplandvibes.com</a>, {card.emailNote}
                      </>
                    ) : (
                      <>
                        {card.bodyPre}<code className="text-pink text-sm">{card.codeWord}</code>{card.bodyMid}
                        <Link to={to('/terms')} className="text-pink hover:underline font-semibold">{card.termsLink}</Link>
                        {card.bodyEnd}
                      </>
                    )}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{ui.principlesEyebrow}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-8">
            {ui.principlesH2}
          </h2>

          <ol className="space-y-5">
            {ui.principles.map((p, i) => (
              <li key={p.title} className="flex gap-4 items-start">
                <span className="font-heading text-3xl text-pink shrink-0 leading-none w-12">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-heading text-xl text-night tracking-wide mb-1">{p.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-night text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl sm:text-5xl tracking-wide mb-4">{ui.ctaH2}</h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            {ui.ctaLead}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={to('/property-types')}
              className="bg-pink hover:bg-pink/90 text-white font-semibold py-4 px-8 rounded-xl transition-colors text-sm uppercase tracking-widest inline-flex items-center justify-center gap-2"
            >
              {ui.ctaPrimary}
              <ArrowRight className="w-4 h-4" />
            </Link>
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
