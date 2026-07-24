// Auto-generated copy types for AmenitiesShowcase.
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
    eyebrow: 'What the stay includes',
    h2: 'Six Things That Decide the Trip',
    lead: 'Use these as search criteria, not a wishlist. For each one we tell you which property types have it as standard, and who clearly promises it.',
    lookForLabel: 'Found in',
    cta: 'Search cabins with these',
    items: [
      {
        title: 'Private sauna',
        body: 'In cabins and villas the sauna is standard: wood-fired at premium properties, an electric stove in apartments. In many lakeside cabins you step from the sauna bench straight onto the dock and into the ice hole.',
        lookForIn: 'Standard in lakeside cabins and slope-side apartments, a rarity in ordinary hotel rooms.',
        exampleNames: ['Lakeside cabins', 'Wilderness Hotel Nellim'],
      },
      {
        title: 'Aurora alarm',
        body: 'The property wakes you when the sky is clear and the northern lights come out. The service comes with the stay; there is no app you have to remember to install.',
        lookForIn: 'Kakslauttanen, Aurora Village Ivalo, Star Arctic, Levin Iglut, Apukka Resort.',
        exampleNames: ['Kakslauttanen Arctic Resort', 'Aurora Village Ivalo'],
      },
      {
        title: 'Wood-burning fireplace',
        body: 'A real fireplace, not a gas flame. The firewood waits ready stacked; you strike a match and the winter evening is set.',
        lookForIn: 'Design cabins and lakeside cabins. Listed on the property page as "tulisija" or "takka".',
        exampleNames: ['Design wilderness lodges', 'Wilderness Hotel Muotka'],
      },
      {
        title: 'Self-catering kitchen',
        body: 'Full-size oven, hob and fridge, often a dishwasher too. Cabin chains leave a starter pack: coffee, salt, oil. And the rest you pick up at the K-Market in the village.',
        lookForIn: 'Cabin and chalet rentals. Hotels and glass igloos usually have no kitchen. Book a hotel if you want a restaurant breakfast.',
        exampleNames: ['Lakeside cabins', 'Slope-side apartments'],
      },
      {
        title: 'Outdoor hot tub',
        body: '40 °C water, –20 °C air and the aurora overhead: the photo everyone takes. The tub is kept warm ahead of time, so it is waiting when you arrive.',
        lookForIn: 'Most slope-side apartments, premium lakeside cabins and selected wilderness properties. Listed as "palju" on Finnish booking sites.',
        exampleNames: ['Levi slope-side apartments', 'Apukka Resort'],
      },
      {
        title: 'Ski-in / ski-out',
        body: 'Click your skis on at your own door; the lift is at the top of the slope. You save twenty minutes of gear hauling every morning, and over a five-day trip that is a big difference.',
        lookForIn: 'Levi (Levitunturi), Ylläs (both sides) and Pyhä. Saariselkä is first and foremost a cross-country destination.',
        exampleNames: ['Levi slope-side apartments', 'Ylläs lodges'],
      },
    ],
  }

export type Copy = Widen<typeof en>
