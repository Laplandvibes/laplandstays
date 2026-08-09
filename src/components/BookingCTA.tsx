import { ArrowRight, ShieldCheck, Clock, Headphones, BadgeCheck, Calendar, MapPin } from 'lucide-react'
import { HOTEL_SEARCH_FOR } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import { useLang, type Lang } from '../i18n/useLang'
import { useCopy } from '../i18n/useCopy'
import enCopy from './BookingCTA.copy.en'
import type { Copy } from './BookingCTA.copy.types'


const TRUST_ICONS = [BadgeCheck, ShieldCheck, Clock, Headphones]


const loaders: Record<Lang, () => Promise<{ default: Copy }>> = {
  'en': () => import('./BookingCTA.copy.en'),
  'fi': () => import('./BookingCTA.copy.fi'),
  'de': () => import('./BookingCTA.copy.de'),
  'ja': () => import('./BookingCTA.copy.ja'),
  'es': () => import('./BookingCTA.copy.es'),
  'pt-BR': () => import('./BookingCTA.copy.ptBR'),
  'zh-CN': () => import('./BookingCTA.copy.zhCN'),
  'ko': () => import('./BookingCTA.copy.ko'),
  'fr': () => import('./BookingCTA.copy.fr'),
  'it': () => import('./BookingCTA.copy.it'),
  'nl': () => import('./BookingCTA.copy.nl'),
  'sv': () => import('./BookingCTA.copy.sv'),
}

const cache: Partial<Record<Lang, Copy>> = {}

export default function BookingCTA() {
  const lang = useLang()
  const c = useCopy<Copy>(enCopy, loaders, cache)
  const onPrimary = () => trackAffiliateClick('lodging', 'final_cta_primary', HOTEL_SEARCH_FOR(lang).lapland)
  const onSecondary = () => trackAffiliateClick('lodging', 'final_cta_secondary', HOTEL_SEARCH_FOR(lang).levi)

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <picture><source srcSet="/images/booking-cta-bg.avif" type="image/avif" /><source srcSet="/images/booking-cta-bg.webp" type="image/webp" /><img
          src="/images/booking-cta-bg.webp"
          alt={lang === 'fi' ? 'Lämmin mökki-interiööri arktista yötä vasten Suomen Lapissa' : lang === 'de' ? 'Warm beleuchteter Hütteninnenraum vor arktischer Nacht in Finnisch-Lappland' : lang === 'ja' ? 'フィンランド・ラップランドの北極の夜に灯る温かなロッジの内装' : lang === 'ko' ? '핀란드 라플란드의 북극 밤하늘 아래 따뜻하게 빛나는 캐빈 내부' : lang === 'fr' ? 'Intérieur de chalet chaleureux face à la nuit arctique en Laponie finlandaise' : lang === 'it' ? 'Interno caldo di chalet contro la notte artica nella Lapponia finlandese' : lang === 'nl' ? 'Warm cabin-interieur tegen de arctische nacht in Fins Lapland' : 'Warm cabin interior glowing against Arctic night in Finnish Lapland'}
          className="w-full h-full object-cover"  loading="lazy" decoding="async" width="800" height="600"/></picture>
        <div className="absolute inset-0 bg-gradient-to-r from-night/75 via-night/45 to-night/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3 [text-shadow:0_2px_12px_rgba(0,0,0,0.85)]">{c.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-heading text-white tracking-wide mb-6 [text-shadow:0_3px_28px_rgba(0,0,0,0.75),0_1px_4px_rgba(0,0,0,0.55)]">
            {c.h2}
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8 leading-relaxed [text-shadow:0_2px_14px_rgba(0,0,0,0.8)]">
            {c.lead}
          </p>
        </div>

        {/* ONE dominant action right after the ask — the old layout stacked five
            equal-weight groups and nothing led the eye (Vesa 2026-08-09). The
            secondary becomes a quiet text link instead of a twin button. */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 mb-10">
          <a
            href={HOTEL_SEARCH_FOR(lang).lapland}
            target="_blank"
            rel="sponsored nofollow noopener"
            onClick={onPrimary}
            className="w-full sm:w-auto bg-pink hover:bg-pink/90 text-white font-semibold py-4 px-12 rounded-xl transition-all duration-300 text-[15px] uppercase tracking-widest inline-flex items-center justify-center gap-3 shadow-xl hover:shadow-pink/30 hover:-translate-y-0.5"
          >
            {c.primaryCta}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={HOTEL_SEARCH_FOR(lang).levi}
            target="_blank"
            rel="sponsored nofollow noopener"
            onClick={onSecondary}
            className="inline-flex items-center gap-2 text-white/85 hover:text-pink font-semibold text-sm uppercase tracking-widest underline decoration-white/30 underline-offset-8 hover:decoration-pink/60 transition-colors [text-shadow:0_1px_10px_rgba(0,0,0,0.85)]"
          >
            {c.secondaryCta}
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Season anchors demoted from boxes to one quiet hairline-divided row —
            they reassure, they must not compete with the CTA. */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center sm:divide-x divide-white/15 max-w-3xl mx-auto mb-12 rounded-xl bg-night/55 backdrop-blur-sm border border-white/10">
          {c.seasonAnchors.map((a) => (
            <div key={a.label} className="flex-1 px-5 py-3.5 text-center">
              <p className="text-[10px] uppercase tracking-widest text-white/60 font-semibold mb-0.5">{a.label}</p>
              <p className="font-heading text-snow text-lg tracking-wide leading-tight">{a.value}</p>
              <p className="text-[11px] text-white/60 mt-0.5">{a.sub}</p>
            </div>
          ))}
        </div>

        {/* Trust points + hint row, compact supporting band */}
        <div className="rounded-2xl bg-[rgba(11,18,32,0.7)] backdrop-blur-sm border border-white/10 px-6 sm:px-10 py-6 sm:py-7">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {c.trust.map((t, i) => {
              const Icon = TRUST_ICONS[i] ?? BadgeCheck
              return (
                <div key={t.title} className="flex flex-col items-center text-center gap-2">
                  <Icon className="w-5 h-5 text-pink shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-[13px]">{t.title}</p>
                    <p className="text-white/70 text-[11px] leading-relaxed mt-0.5">{t.body}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Quick "what to do" hint row */}
          <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-white/70">
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              {c.bestTimeLabel}
            </span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              {c.statsLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
