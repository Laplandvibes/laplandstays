// Auto-generated copy types for BookingCTA.
// EN copy is the canonical source; Copy is its widened type so other
// locales can supply different strings with the same shape.

// Recursively widen literal string/number types.
type Widen<T> = T extends string ? string
  : T extends number ? number
  : T extends boolean ? boolean
  : T extends ReadonlyArray<infer U> ? Widen<U>[]
  : T extends (...args: infer A) => infer R ? (...args: A) => R
  : T extends object ? { [K in keyof T]: Widen<T[K]> }
  : T

export const en = {
    eyebrow: 'Ready when you are',
    h2: 'The Aurora Does Not Wait',
    lead: 'Glass igloos at Kakslauttanen and Levin Iglut book 8–12 months ahead. Aurora cabins fill four to six months before the season peaks. Start the search now and lock dates on a platform you already trust.',
    primaryCta: 'See prices & availability',
    secondaryCta: 'Start with Levi',
    bestTimeLabel: 'Best time to book: late summer for following winter',
    statsLabel: '5 destinations · 12+ verified anchor properties',
    trust: [
      { title: 'Verified rates', body: 'Prices re-checked across operator pages — no inflated "from" prices, no hidden surcharges.' },
      { title: 'Free cancellation', body: 'Most cabins, most dates ship with a cancellation window. Each listing shows the cutoff.' },
      { title: 'Instant confirmation', body: 'Book directly through Hotels.com. Dates locked the moment payment clears.' },
      { title: 'Local guidance', body: 'Email before you book. Responses come from inside Lapland — usually same day.' },
    ],
    seasonAnchors: [
      { label: 'Glass igloos', value: 'Book 8–12 mo ahead', sub: 'Kakslauttanen / Levin Iglut' },
      { label: 'Aurora cabins', value: 'From €150/night', sub: '4 destinations' },
      { label: 'Lapland hotels', value: 'From €100/night', sub: 'Levi · Ylläs · Saariselkä' },
    ],
  }

export type Copy = Widen<typeof en>
