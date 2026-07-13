import { ArrowRight, ShieldCheck, Clock, Headphones, BadgeCheck, Calendar, MapPin } from 'lucide-react'
import { HOTEL_SEARCH } from '../lib/affiliate'
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
  const onPrimary = () => trackAffiliateClick('hotelscom', 'final_cta_primary', HOTEL_SEARCH.lapland)
  const onSecondary = () => trackAffiliateClick('hotelscom', 'final_cta_secondary', HOTEL_SEARCH.levi)

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
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed [text-shadow:0_2px_14px_rgba(0,0,0,0.8)]">
            {c.lead}
          </p>
        </div>

        {/* Concrete season anchors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10">
          {c.seasonAnchors.map((a) => (
            <div
              key={a.label}
              className="bg-night/70 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-4 text-center"
            >
              <p className="text-[11px] uppercase tracking-widest text-white/70 font-semibold mb-1.5">{a.label}</p>
              <p className="font-heading text-amber text-xl tracking-wide">{a.value}</p>
              <p className="text-xs text-white/70 mt-1">{a.sub}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href={HOTEL_SEARCH.lapland}
            target="_blank"
            rel="sponsored nofollow noopener"
            onClick={onPrimary}
            className="w-full sm:w-auto bg-pink hover:bg-pink/90 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 text-sm uppercase tracking-widest inline-flex items-center justify-center gap-3 shadow-xl hover:shadow-pink/30 hover:-translate-y-0.5"
          >
            {c.primaryCta}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={HOTEL_SEARCH.levi}
            target="_blank"
            rel="sponsored nofollow noopener"
            onClick={onSecondary}
            className="w-full sm:w-auto border border-white/30 hover:border-pink/60 text-white hover:text-pink font-semibold py-4 px-10 rounded-xl transition-all duration-300 text-sm uppercase tracking-widest"
          >
            {c.secondaryCta}
          </a>
        </div>

        {/* Trust points + hint row, own darker band so the small text keeps ≥4.5:1
            over the lighter scrim while the photo stays visible around it */}
        <div className="rounded-2xl bg-[rgba(11,18,32,0.7)] backdrop-blur-sm border border-white/10 px-6 sm:px-10 py-8 sm:py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {c.trust.map((t, i) => {
              const Icon = TRUST_ICONS[i] ?? BadgeCheck
              return (
                <div key={t.title} className="flex flex-col items-center text-center gap-3">
                  <Icon className="w-6 h-6 text-pink shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm">{t.title}</p>
                    <p className="text-white/70 text-xs leading-relaxed mt-1">{t.body}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Quick "what to do" hint row */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-white/70">
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
