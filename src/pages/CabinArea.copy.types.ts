export type CabinAreaSlug =
  | 'levi' | 'yllas' | 'ruka' | 'saariselka' | 'pyha-luosto' | 'rovaniemi'
  // Municipality pages since 17.10.2026 (Vesa: "eikö meiltä puutu kaupunkeja? inarit, utsjoki jne?").
  | 'enontekio' | 'inari' | 'utsjoki' | 'salla' | 'kemijarvi' | 'posio' | 'kittila' | 'pello' | 'sodankyla' | 'muonio'

export interface CabinAreaCopy {
  seo: { title: string; description: string }
  h1: string
  /** `{count}` is replaced with the number of cabins in the data file; for a split area also
   *  `{near}` and `{far}` (cabins in each section). */
  intro: string
  /** Headings of the two sections, for an area whose data has cabins more than 10 km from every
   *  village or resort it is measured to (Ruka: the whole of Kuusamo; Vesa 17.10.2026). Without it
   *  the page shows one list. */
  split?: CabinAreaSplitCopy
}

export interface CabinAreaSplitCopy {
  nearH2: string
  nearNote: string
  farH2: string
  farNote: string
}

export interface CabinAreaPageCopy {
  eyebrow: string
  areas: Record<CabinAreaSlug, CabinAreaCopy>
  guestsLabel: string
  bedroomsLabel: string
  sizeLabel: string
  starsLabel: string
  viewCabin: string
  /** Live weekly from-price, `{price}` placeholder; shown only for cabins the daily feed covers. */
  weekFrom: string
  priceOnPartner: string
  /** "Weekly prices as of {date}" — the day the Worker read the feed; shown under the grid. */
  pricesDated: string
  browseAll: string
  showMore: string
  dataNote: string
  /** Distance on every card: `{km}` and `{from}` (the place phrase from src/data/cabins/refs.json,
   *  e.g. "noin {km} km {from}" → "noin 3 km Rukalta"). */
  distance: string
  distanceUnder1: string
  /** How the distance was measured; shown under the grid. */
  distanceNote: string
  otherAreasH2: string
  destinationLink: string
  breadcrumbHome: string
  breadcrumbCabins: string
}
