import { ArrowRight, ShieldCheck, Compass, Bed } from 'lucide-react'
import { HOTEL_SEARCH } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'

const reasons = [
  {
    icon: Compass,
    title: 'Locally curated',
    body: 'Our team lives in Finnish Lapland. We filter out the forgettable and point you to the cabins, villas and lodges worth the flight.',
  },
  {
    icon: Bed,
    title: 'The right kind of room',
    body: 'Glass cabin for the aurora, ski-in chalet for Levi, lakeside cottage for silence — matched to what the trip actually calls for.',
  },
  {
    icon: ShieldCheck,
    title: 'Booked on trusted platforms',
    body: 'Every search opens directly with a trusted booking partner. Transparent pricing, free cancellation windows, and the protections you already know.',
  },
]

export default function WhyBookWithUs() {
  const onClick = () => {
    trackAffiliateClick('hotelscom', 'why_book_cta', HOTEL_SEARCH.lapland)
  }

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">Why Lapland, why now</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-night tracking-wide">
            A Stay That Earns Its Own Memory
          </h2>
          <p className="mt-5 text-charcoal/70 text-lg leading-relaxed">
            Most travellers only get one shot at the Arctic. The right cabin turns it into
            the trip you talk about for a decade. Here is how we help you pick it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reasons.map((r) => {
            const Icon = r.icon
            return (
              <div
                key={r.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-pink/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-pink/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-pink" />
                </div>
                <h3 className="text-2xl font-heading text-night tracking-wide mb-3">{r.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{r.body}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <a
            href={HOTEL_SEARCH.lapland}
            target="_blank"
            rel="sponsored nofollow noopener"
            onClick={onClick}
            className="inline-flex items-center gap-3 bg-pink hover:bg-pink/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-sm uppercase tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            See available stays
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
