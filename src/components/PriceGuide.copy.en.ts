// Copy for the PriceGuide home-page section (lang: en).
// One file per locale, same pattern as src/pages/Transport.copy.*.

export interface PriceGuideTier {
  name: string
  /** SEO keyword shown as the small uppercase label under the tier name. */
  keyword: string
  /** Price range, € values must stay identical across all locales. */
  range: string
  note: string
  /** Property names stay untranslated; only parenthetical glosses (e.g. "multiple resorts") are localized. */
  examples: string[]
  body: string
  ctaLabel: string
}

export interface PriceGuideCopy {
  eyebrow: string
  heading: string
  lead: string
  propertiesLabel: string
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
  propertiesLabel: 'Properties:',
  tiers: [
    {
      name: 'Glass Igloos',
      keyword: 'glass igloo lapland',
      range: '€250 – €1,500',
      note: 'per night, per igloo',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      body: 'Glass-roofed rooms and igloos built specifically for aurora viewing. Priciest category, glass roofs, remote locations and limited inventory mean Kakslauttanen books 8–12 months ahead.',
      ctaLabel: 'Find Glass Igloos',
    },
    {
      name: 'Aurora & Northern Lights Cabins',
      keyword: 'northern lights cabin',
      range: '€150 – €700',
      note: 'per night, per cabin',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      body: 'Classic Lapland cabin stays with aurora-facing windows, private saunas and forest surroundings. Best value-to-experience ratio for couples and small groups chasing the aurora.',
      ctaLabel: 'Find Aurora Cabins',
    },
    {
      name: 'Snow & Ice Hotels',
      keyword: 'snow hotel lapland',
      range: '€150 – €400',
      note: 'per night, seasonal only',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      body: 'One-night-only territory, carved from ice each December, melted each April. Warm changing rooms, thermal sleeping bags, and a story you will tell forever.',
      ctaLabel: 'Find Snow Hotels',
    },
    {
      name: 'Wilderness Lodges',
      keyword: 'luxury lapland accommodation',
      range: '€200 – €600',
      note: 'per night, all-suite',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      body: 'Purpose-built for aurora hunters who want service. Small, remote, guided. Think all-inclusive wilderness, chef kitchens, husky access and a full safari menu from the lobby.',
      ctaLabel: 'Find Wilderness Lodges',
    },
    {
      name: 'Lapland Hotels & Cabin Chains',
      keyword: 'lapland hotel',
      range: '€100 – €350',
      note: 'per night, per room',
      examples: ['Lapland Hotels (multiple resorts)', 'Harriniva (Muonio)'],
      body: 'The most reliable entry point, branded Lapland hotels and cabin chains across Levi, Ylläs, Saariselkä, Rovaniemi and Muonio. Walkable to restaurants, safaris leave from the door.',
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
