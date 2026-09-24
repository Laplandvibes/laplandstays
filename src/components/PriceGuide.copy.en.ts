// Copy for the PriceGuide home-page section (lang: en).
// One file per locale, same pattern as src/pages/Transport.copy.*.

export interface PriceGuideTier {
  name: string
  /** Property names stay untranslated; only parenthetical glosses (e.g. "multiple resorts") are localized. */
  examples: string[]
  ctaLabel: string
}

// No euro figures anywhere in this section since 2026-09-24 (Vesa: "luvut pois,
// ohjeet jäävät"). The bands in PriceGuide.tsx carry the price LEVEL and the
// order; the rate for the reader's dates is on the booking page the row opens.

export interface PriceGuideCopy {
  eyebrow: string
  heading: string
  lead: string
  /** Ends of the level axis, e.g. "Cheaper" … "Pricier". */
  scale: { low: string; high: string }
  /** Fixed order: glass igloos, aurora cabins, snow hotels, wilderness lodges, hotel chains (matches TIER_META in PriceGuide.tsx). */
  tiers: PriceGuideTier[]
  tip: {
    label: string
    pre: string
    strong: string
    post: string
  }
}

const copy: PriceGuideCopy = {
  eyebrow: 'Price level',
  heading: 'Lapland Stays, Priciest to Cheapest',
  lead: 'Auroras drifting past your glass ceiling, a sauna already warm, a snow-silent forest outside the window at breakfast. Five kinds of Lapland night, ordered from the once-in-a-lifetime down to the everyday, with the properties behind each one. What a night costs swings with the season and the week, so the rate comes from the booking page, for your own dates.',
  scale: { low: 'Cheaper', high: 'Pricier' },
  tiers: [
    {
      name: 'Glass Igloos',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: 'Find Glass Igloos',
    },
    {
      name: 'Aurora & Northern Lights Cabins',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: 'Find Aurora Cabins',
    },
    {
      name: 'Snow & Ice Hotels',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: 'Find Snow Hotels',
    },
    {
      name: 'Wilderness Lodges',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: 'Find Wilderness Lodges',
    },
    {
      name: 'Lapland Hotels & Cabin Chains',
      examples: ['Lapland Hotels (multiple resorts)', 'Harriniva (Muonio)'],
      ctaLabel: 'Find Hotels & Cabins',
    },
  ],
  tip: {
    label: 'Booking tip.',
    pre: 'Glass igloos at Kakslauttanen and Levin Iglut book out ',
    strong: '8–12 months ahead',
    post: ' for peak aurora season (November – March). If one of these is your anchor, reserve it first and plan the rest of the trip around that date.',
  },
}

export default copy
