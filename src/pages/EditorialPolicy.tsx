import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArrowRight, ShieldCheck, Edit3, AlertCircle, Repeat, Mail } from 'lucide-react'
import SEO from '../components/SEO'
import Newsletter from '../components/Newsletter'
import { useLang, useLocalePath, type Lang } from '../i18n/useLang'
import type { PageCopy } from './EditorialPolicy.copy.types'
import enCopy from './EditorialPolicy.copy.en'

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'LaplandStays Editorial Policy, How We Test, What We Link To',
  description:
    'How LaplandStays verifies prices, names properties, handles affiliate independence, and corrects mistakes. Editorial standards for the LaplandStays accommodation guide.',
  author: {
    '@type': 'Person',
    name: 'Vesa Pesola',
    jobTitle: 'Editor / operator',
    worksFor: { '@type': 'Organization', name: 'Lapeso Oy' },
  },
  publisher: { '@type': 'Organization', name: 'LaplandStays', url: 'https://laplandstays.com' },
  datePublished: '2026-04-26',
  dateModified: '2026-04-26',
  mainEntityOfPage: 'https://laplandstays.com/editorial-policy',

  image: "https://laplandstays.com/og/editorial-policy-1200x630.jpg",
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://laplandstays.com/' },
    { '@type': 'ListItem', position: 2, name: 'Editorial Policy', item: 'https://laplandstays.com/editorial-policy' },
  ],
}

// ---------- copy (lazy-loaded per locale) ----------

const cache: Partial<Record<Lang, PageCopy>> = { en: enCopy }
const loaders: Record<Lang, () => Promise<{ default: PageCopy }>> = {
  en: () => import('./EditorialPolicy.copy.en'),
  fi: () => import('./EditorialPolicy.copy.fi'),
  de: () => import('./EditorialPolicy.copy.de'),
  ja: () => import('./EditorialPolicy.copy.ja'),
  es: () => import('./EditorialPolicy.copy.es'),
  'pt-BR': () => import('./EditorialPolicy.copy.ptBR'),
  'zh-CN': () => import('./EditorialPolicy.copy.zhCN'),
  ko: () => import('./EditorialPolicy.copy.ko'),
  fr: () => import('./EditorialPolicy.copy.fr'),
  it: () => import('./EditorialPolicy.copy.it'),
  nl: () => import('./EditorialPolicy.copy.nl'),
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

const ICONS = [ShieldCheck, Edit3, AlertCircle, Repeat]

export default function EditorialPolicy() {
  const to = useLocalePath()
  const copy = usePageCopy()
  const { seo, ui } = copy

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath="/editorial-policy"
        ogImage="https://laplandstays.com/og-default.jpg"
        keywords={['laplandstays editorial policy', 'how laplandstays works', 'lapland accommodation guide standards', 'affiliate independence', 'correction policy']}
        jsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />

      <section className="relative overflow-hidden bg-night text-white pt-28 sm:pt-32 pb-16 px-4 sm:px-6">
        <div aria-hidden="true" className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-pink opacity-[0.10] blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-4">{ui.eyebrow}</p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-wide mb-5">
            {ui.h1}
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
            {ui.intro}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{ui.principlesEyebrow}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-10">
            {ui.principlesH2}
          </h2>

          <ol className="space-y-8">
            {ui.principles.map((p, i) => {
              const Icon = ICONS[i]
              return (
                <li key={p.title} className="flex gap-5 items-start">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-pink/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-pink" />
                    </div>
                    <p className="font-heading text-2xl text-pink/40 mt-2 text-center leading-none">{String(i + 1).padStart(2, '0')}</p>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-night tracking-wide mb-2">{p.title}</h3>
                    <p className="text-charcoal/75 leading-relaxed text-[15px]">{p.body}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-night text-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{ui.sourcesEyebrow}</p>
          <h2 className="font-heading text-4xl sm:text-5xl tracking-wide mb-6">{ui.sourcesH2}</h2>
          <p className="text-white/65 text-base leading-relaxed mb-8 max-w-2xl">
            {ui.sourcesLead}
          </p>
          <div className="stack-table overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/[0.04] text-left">
                  <th className="px-4 py-3 font-semibold text-white">{ui.sourceLabel}</th>
                  <th className="px-4 py-3 font-semibold text-white">{ui.useLabel}</th>
                </tr>
              </thead>
              <tbody>
                {ui.sources.map((s, i) => (
                  <tr key={s.label} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                    <td className="px-4 py-3 font-heading text-base text-pink whitespace-nowrap align-top">{s.label}</td>
                    <td data-label={ui.useLabel} className="px-4 py-3 text-white/75 text-[14px] leading-relaxed">{s.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{ui.reviewerEyebrow}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">{ui.reviewerH2}</h2>
          <div className="bg-white border border-pink/15 rounded-2xl p-7 sm:p-8 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-full bg-pink/10 flex items-center justify-center shrink-0">
                <span className="font-heading text-3xl text-pink">VP</span>
              </div>
              <div>
                <p className="font-heading text-2xl text-night tracking-wide">Vesa Pesola</p>
                <p className="text-pink text-sm font-semibold uppercase tracking-widest mt-0.5 mb-3">{ui.reviewerRole}</p>
                <p className="text-charcoal/75 leading-relaxed text-[15px]">
                  {ui.reviewerBody1}{' '}
                  <a href="mailto:info@laplandvibes.com" className="text-pink font-semibold hover:underline">info@laplandvibes.com</a>{' '}
, {ui.reviewerBody2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{ui.corrEyebrow}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">{ui.corrH2}</h2>
          <div className="space-y-5 text-charcoal/75 text-lg leading-relaxed">
            <p>{ui.corrP1}</p>
            <p>
              {ui.corrP2Pre}
              <a href="mailto:info@laplandvibes.com" className="text-pink font-semibold hover:underline">info@laplandvibes.com</a>
              {ui.corrP2Mid}
            </p>
            <p>{ui.corrP3}</p>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 bg-pink/5 border border-pink/15 rounded-xl px-5 py-3">
            <Mail className="w-4 h-4 text-pink shrink-0" />
            <a href="mailto:info@laplandvibes.com" className="text-pink font-semibold text-sm">info@laplandvibes.com</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-night text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl tracking-wide mb-3">{ui.readOnH2}</h2>
          <p className="text-white/65 mb-8 leading-relaxed">
            {ui.readOnLead}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to={to('/about')} className="border border-white/30 hover:border-pink/60 text-white hover:text-pink font-semibold py-3 px-6 rounded-xl transition-colors text-sm uppercase tracking-widest">{ui.aboutLink}</Link>
            <Link to={to('/terms')} className="border border-white/30 hover:border-pink/60 text-white hover:text-pink font-semibold py-3 px-6 rounded-xl transition-colors text-sm uppercase tracking-widest">{ui.termsLink}</Link>
            <Link to={to('/privacy')} className="border border-white/30 hover:border-pink/60 text-white hover:text-pink font-semibold py-3 px-6 rounded-xl transition-colors text-sm uppercase tracking-widest">{ui.privacyLink}</Link>
            <Link to={to('/property-types')} className="bg-pink hover:bg-pink/90 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-sm uppercase tracking-widest inline-flex items-center gap-2">
              {ui.propertyLink}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
