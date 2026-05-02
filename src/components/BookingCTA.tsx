import { ArrowRight, ShieldCheck, Clock, Headphones, BadgeCheck, Calendar, MapPin } from 'lucide-react'
import { HOTEL_SEARCH } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'

const trustPoints: { icon: typeof ShieldCheck; title: string; body: string }[] = [
  {
    icon: BadgeCheck,
    title: 'Verified rates',
    body: 'Prices we re-check across operator pages — no inflated "from" prices, no hidden surcharges.',
  },
  {
    icon: ShieldCheck,
    title: 'Free cancellation',
    body: 'Most cabins, most dates ship with a cancellation window. Each listing shows the cutoff.',
  },
  {
    icon: Clock,
    title: 'Instant confirmation',
    body: 'Book directly with our partner Hotels.com. Dates locked the moment payment clears.',
  },
  {
    icon: Headphones,
    title: 'Local guidance',
    body: 'Email us before you book. We answer from inside Lapland — usually same day.',
  },
]

const seasonAnchors = [
  { label: 'Glass igloos', value: 'Book 8–12 mo ahead', sub: 'Kakslauttanen / Levin Iglut' },
  { label: 'Aurora cabins', value: 'From €150/night', sub: '4 destinations' },
  { label: 'Lapland hotels', value: 'From €100/night', sub: 'Levi · Ylläs · Saariselkä' },
]

export default function BookingCTA() {
  const onPrimary = () => trackAffiliateClick('hotelscom', 'final_cta_primary', HOTEL_SEARCH.lapland)
  const onSecondary = () => trackAffiliateClick('hotelscom', 'final_cta_secondary', HOTEL_SEARCH.levi)

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/booking-cta-bg.webp"
          alt="Warm cabin interior glowing against Arctic night in Finnish Lapland"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night/94 via-night/85 to-night/94" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">Ready when you are</p>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-heading text-white tracking-wide mb-6">
            The Aurora Does Not Wait
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Glass igloos at Kakslauttanen and Levin Iglut book 8–12 months ahead.
            Aurora cabins fill four to six months before the season peaks. Start the search
            now and lock dates on a platform you already trust.
          </p>
        </div>

        {/* Concrete season anchors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10">
          {seasonAnchors.map((a) => (
            <div
              key={a.label}
              className="bg-white/[0.06] border border-white/15 rounded-xl px-5 py-4 text-center"
            >
              <p className="text-[11px] uppercase tracking-widest text-white/55 font-semibold mb-1.5">{a.label}</p>
              <p className="font-heading text-amber text-xl tracking-wide">{a.value}</p>
              <p className="text-xs text-white/55 mt-1">{a.sub}</p>
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
            See prices &amp; availability
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={HOTEL_SEARCH.levi}
            target="_blank"
            rel="sponsored nofollow noopener"
            onClick={onSecondary}
            className="w-full sm:w-auto border border-white/30 hover:border-pink/60 text-white hover:text-pink font-semibold py-4 px-10 rounded-xl transition-all duration-300 text-sm uppercase tracking-widest"
          >
            Start with Levi
          </a>
        </div>

        {/* Trust points (4-up grid replaces the previous 3) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-10 border-t border-white/10">
          {trustPoints.map((t) => {
            const Icon = t.icon
            return (
              <div key={t.title} className="flex flex-col items-center text-center gap-3">
                <Icon className="w-6 h-6 text-pink shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">{t.title}</p>
                  <p className="text-white/55 text-xs leading-relaxed mt-1">{t.body}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quick "what to do" hint row */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-white/50">
          <span className="inline-flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5" />
            Best time to book: late summer for following winter
          </span>
          <span className="hidden sm:inline text-white/25">·</span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            5 destinations · 12+ verified anchor properties
          </span>
        </div>
      </div>
    </section>
  )
}
