/**
 * Copy for the glass-igloo comparison page (/glass-igloos on en, /de/glass-igloos, /ja/glass-igloos).
 * Finnish has its own page at /fi/iglumajoitus (Igloos.tsx); the four form one hreflang group,
 * see src/i18n/pageClusters.ts.
 *
 * 🔴 Numbers are facts read from the property's own website (date in `checkedNote`). A language
 * may leave a fact out but never add one the English source does not have (numeroportti).
 * 🔴 No stored nightly prices in new languages: the site's line since 18.9.2026 is a dated live
 * price or none. The Japanese page keeps its August 2026 dated prices (`price` / `priceHeader`),
 * an open question for Vesa (per-site memory 18.10.2026).
 */

/** A paragraph with inline links: plain text runs and links, rendered in order. */
export type RichPart = string | { to: string; label: string } | { href: string; label: string }
export type Rich = RichPart[]

/** Rows of the property table, in display order (GlassIgloos.tsx ROWS). */
export type IglooRowKey =
  | 'kakslauttanen' | 'starArctic' | 'muotka' | 'auroraVillage' | 'nellim' | 'wildernessInari'
  | 'arcticSnowHotel' | 'apukka' | 'novaSkyland' | 'santasIgloosArcticCircle' | 'levinIglut' | 'northernLightsRanch'

export interface IglooRowCopy {
  name: string
  area: string
  airport: string
  feature: string
  /** Japanese only (dated August 2026 figures). */
  price?: string
}

export interface IglooAreaCopy {
  eyebrow: string
  title: string
  intro: string
  properties: { name: string; body: string }[]
  outro?: string
  ctaLabel: string
  guideLinks: { to: string; label: string }[]
}

export interface PointCopy { title: string; body: string }

export interface GlassIgloosCopy {
  /** Also the Article JSON-LD headline and description (lib/jsonLd localizeArticle). */
  seo: { title: string; description: string }
  breadcrumbHome: string
  breadcrumbPage: string
  keywords: string[]
  adBadge: string
  h1: string
  lead: string
  heroAlt: string

  typesEyebrow: string
  typesH2: string
  typesIntro: string
  typeCards: { title: string; tagline: string; body: string; forWho: string }[]
  typesNote: Rich
  kidsNote: string

  seasonEyebrow: string
  seasonH2: string
  seasonBody: string[]

  tableH2: string
  tableIntro: string
  tableHeaders: { name: string; area: string; airport: string; feature: string; book: string }
  /** Japanese only: the dated price column. */
  priceHeader?: string
  bookLabel: string
  rows: Partial<Record<IglooRowKey, IglooRowCopy>>
  tableNote: string

  areas: { rovaniemi: IglooAreaCopy; north: IglooAreaCopy; levi: IglooAreaCopy }

  questionsEyebrow: string
  questionsH2: string
  questionsIntro: string
  questions: PointCopy[]

  /** Igloo night + cabin week (en/de: links to this site's cabin pages). */
  cabinCombo?: { eyebrow: string; h2: string; body: string; linkLabel: string }

  accessEyebrow: string
  accessH2: string
  access: Rich[]

  itinerariesEyebrow: string
  itinerariesH2: string
  itinerariesIntro: string
  itineraries: PointCopy[]

  inclusionsEyebrow: string
  inclusionsH2: string
  inclusionsBody: string[]
  inclusions: PointCopy[]
  inclusionsNote: string

  bookingEyebrow: string
  bookingH2: string
  bookingIntro: string
  bookingRows: { period: string; body: string }[]
  bookingOutro: Rich

  cloudyEyebrow: string
  cloudyH2: string
  cloudyIntro: string
  cloudy: PointCopy[]
  cloudyOutro: Rich

  ctaH2: string
  ctaBody: string
  ctaPrimary: string
  ctaSecondary: string
  checkedNote: string
}
