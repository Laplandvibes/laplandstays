import { Quote } from 'lucide-react'

const vignettes = [
  {
    tag: 'The quiet',
    headline: 'No hum. No traffic. No neighbour.',
    body: 'Thirty kilometres from the nearest street light, a cabin in Lapland is properly silent — the kind of silence most travellers have never actually heard.',
  },
  {
    tag: 'The warmth',
    headline: 'A sauna, every single night.',
    body: 'Private saunas are the default here, not a luxury upsell. Wood smoke on the terrace, snow at the door, the rhythm you settle into after two evenings.',
  },
  {
    tag: 'The sky',
    headline: 'Aurora alarms and glass ceilings.',
    body: 'From September to April the Arctic sky is on the programme. The right room puts you under it without getting out of bed.',
  },
]

export default function Reviews() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">What you come for</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-night tracking-wide">
            The Three Things Travellers Remember
          </h2>
          <p className="mt-5 text-charcoal/70 text-lg leading-relaxed">
            Whatever else you plan — huskies, skiing, reindeer, fine dining — these are the
            things guests write home about first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vignettes.map((v) => (
            <div
              key={v.tag}
              className="relative bg-gradient-to-b from-pink/5 to-white rounded-2xl p-8 border border-pink/10"
            >
              <Quote className="w-8 h-8 text-pink/30 mb-4" />
              <p className="text-xs uppercase tracking-[0.25em] text-pink font-semibold mb-2">{v.tag}</p>
              <h3 className="text-2xl font-heading text-night tracking-wide mb-3">{v.headline}</h3>
              <p className="text-charcoal/70 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
