// Auto-generated copy types for Locations.
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
    eyebrow: 'Where to stay in Lapland',
    h2: 'Four Destinations, Four Different Trips',
    lead: 'Levi for easy access and village life. Ylläs for silence. Saariselkä for glass igloos under the aurora. Inari for the far-north quiet most travellers never reach.',
    pricesLabel: 'Prices:',
    checkAvailability: 'Check availability',
    guideTo: (name: string) => `Guide to ${name}`,
    locations: [
      {
        name: 'Levi',
        tagline: 'The heart of Lapland luxury',
        description: "Finland's biggest ski resort with a walkable village at the foot of the fell. Levi accommodation scatters outward from Lapland Hotels apartments in the centre to ski-in chalets and glass cabins at Levin Iglut, close enough for dinner in town, far enough for dark-sky aurora viewing.",
        highlights: ['Ski-in chalets', 'Restaurants & nightlife', 'Full safari menu'],
        priceFrom: 'Lapland hotels from €100/night · glass igloos from €350',
      },
      {
        name: 'Ylläs',
        tagline: 'Pristine Nordic wilderness',
        description: 'Two fells, the longest ski runs in Finland, and no resort overlay: Ylläs is the quieter sister. Ylläs accommodation means log cabins spaced out through Pallas-Yllästunturi National Park, ideal when silence and trail access matter more than the village buzz.',
        highlights: ['Cross-country kingdom', 'Fell-view chalets', 'No crowds'],
        priceFrom: 'Log cabins from €150/night',
      },
      {
        name: 'Saariselkä',
        tagline: 'Gateway to the Arctic',
        description: "Bordering Urho Kekkonen National Park, one of Europe's last great wildernesses. This is Saariselkä glass igloo country, Kakslauttanen, Star Arctic and Muotka, where glass-roofed rooms meet gold-panning rivers and the air gets properly cold.",
        highlights: ['Glass igloo country', 'National park access', 'Deep aurora zone'],
        priceFrom: 'Kakslauttanen glass igloos from €400/night · wilderness lodges from €200',
      },
      {
        name: 'Inari',
        tagline: 'Sámi culture, Arctic lakes',
        description: 'Where Sámi heritage meets the vast, frozen Lake Inari. The most remote and exclusive of the four: Inari cabin stays on private lake shores, Nellim wilderness lodge, and aurora villas in Ivalo for travellers who measure a trip in stillness, not stops.',
        highlights: ['Lake Inari', 'Sámi culture', 'Far-north remoteness'],
        priceFrom: 'Lakeside cabins from €200/night · Aurora Village from €300',
      },
    ],
  }

export type Copy = Widen<typeof en>
