export type CabinAreaSlug = 'levi' | 'yllas' | 'ruka' | 'saariselka' | 'pyha-luosto' | 'rovaniemi'

export interface CabinAreaCopy {
  seo: { title: string; description: string }
  h1: string
  /** `{count}` is replaced with the number of cabins in the data file. */
  intro: string
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
  browseAll: string
  showMore: string
  dataNote: string
  otherAreasH2: string
  destinationLink: string
  breadcrumbHome: string
  breadcrumbCabins: string
}
