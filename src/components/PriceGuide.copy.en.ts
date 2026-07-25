// Copy for the PriceGuide home-page section (lang: en).
// One file per locale, same pattern as src/pages/Transport.copy.*.

export interface PriceGuideTier {
  name: string
  /** Unit the price is quoted in, e.g. "per night / igloo". */
  note: string
  /** Property names stay untranslated; only parenthetical glosses (e.g. "multiple resorts") are localized. */
  examples: string[]
  ctaLabel: string
}

// The € figures are NOT here: they are identical in every language and only
// their formatting is locale-specific, so they live in TIER_META in
// PriceGuide.tsx and are rendered through Intl.NumberFormat.

export interface PriceGuideCopy {
  eyebrow: string
  heading: string
  lead: string
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
  eyebrow: 'Lapland accommodation prices',
  heading: 'What a Night in Lapland Actually Costs',
  lead: 'Auroras drifting past your glass ceiling, a sauna already warm, a snow-silent forest outside the window at breakfast, a night like that in Lapland can cost €100 or €1,500. We gathered the real price windows of 15 properties straight from the booking pages, so you can see at a glance which dream your budget unlocks.',
  tiers: [
    {
      name: 'Glass Igloos',
      note: 'per night, per igloo',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: 'Find Glass Igloos',
    },
    {
      name: 'Aurora & Northern Lights Cabins',
      note: 'per night, per cabin',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: 'Find Aurora Cabins',
    },
    {
      name: 'Snow & Ice Hotels',
      note: 'per night, seasonal only',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: 'Find Snow Hotels',
    },
    {
      name: 'Wilderness Lodges',
      note: 'per night, all-suite',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: 'Find Wilderness Lodges',
    },
    {
      name: 'Lapland Hotels & Cabin Chains',
      note: 'per night, per room',
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
