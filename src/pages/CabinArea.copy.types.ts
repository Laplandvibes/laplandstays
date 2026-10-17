export type CabinAreaSlug = 'levi' | 'yllas' | 'ruka' | 'saariselka' | 'pyha-luosto' | 'rovaniemi'

export interface CabinAreaCopy {
  seo: { title: string; description: string }
  h1: string
  /** `{count}` is replaced with the number of cabins in the data file; for a split area also
   *  `{near}` and `{far}` (cabins in each section). */
  intro: string
  /** Area whose listing reaches far from the resort (Ruka: the whole of Kuusamo), shown in two
   *  sections with the distance to the resort on every card (Vesa 17.10.2026). */
  split?: CabinAreaSplitCopy
}

export interface CabinAreaSplitCopy {
  nearH2: string
  nearNote: string
  farH2: string
  farNote: string
  /** `{km}` placeholder, e.g. "noin {km} km Rukalta". */
  distance: string
  distanceUnder1: string
  /** How the distance was measured; shown under the grid. */
  distanceNote: string
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
  otherAreasH2: string
  destinationLink: string
  breadcrumbHome: string
  breadcrumbCabins: string
}
