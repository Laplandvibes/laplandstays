// Auto-generated copy types for PropertyTypes.
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
    eyebrow: 'The collection',
    h2: 'Four Types of Lapland Accommodation',
    lead: 'Glass igloos, northern lights cabins, ski-in chalets or designer wilderness lodges — pick the kind of night you came for. Verified nightly rates, direct booking, and availability for the dates you need.',
    checkAvailability: 'Check availability',
    types: [
      {
        title: 'Glass Igloos & Aurora Cabins',
        short: 'Fall asleep beneath the Northern Lights.',
        body: 'Glass igloo Lapland at its purest — glass-roofed rooms at Kakslauttanen, Levin Iglut, Star Arctic and Aurora Village, built for travellers chasing the aurora forecast.',
        priceFrom: 'from €250/night',
      },
      {
        title: 'Lakeside Northern Lights Cabins',
        short: 'Sauna, frozen lake, silence.',
        body: 'Classic Lapland cabin stays — waterfront log cottages with private saunas, pine forest doorsteps and unobstructed aurora horizons over still Arctic water.',
        priceFrom: 'from €150/night',
      },
      {
        title: 'Ski-in Chalets & Lapland Hotels',
        short: 'Wake up on the slope.',
        body: 'Ski-in chalets and Lapland Hotels apartments on Levi, Ylläs and Pyhä — step out of the door, click in, go. Walkable restaurants, full safari pickups.',
        priceFrom: 'from €100/night',
      },
      {
        title: 'Arctic Treehouses & Designer Lodges',
        short: 'Quiet luxury in the wilderness.',
        body: 'Luxury Lapland accommodation with architectural conviction — Arctic TreeHouse Hotel, Muotka Wilderness Lodge and Nellim. Clean lines, warm wood, panoramic fell views.',
        priceFrom: 'from €200/night',
      },
    ],
  }

export type Copy = Widen<typeof en>
