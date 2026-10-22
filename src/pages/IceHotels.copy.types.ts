/**
 * Copy for the ice- and snow-hotel page (/ice-hotels, all 12 languages, 22.10.2026).
 *
 * 🔴 Every fact is from the property's own website, read 22.10.2026 (report in the shared session notes,
 * jaahotellit-faktat-20261022.md). A language may leave a fact out but never add one the English source
 * does not have (numeroportti). No prices. The famous ICEHOTEL is in Sweden: the page says so plainly.
 * Only Arctic SnowHotel is bookable through the site's partner; SnowVillage and Lucky Ranch sell their
 * snow nights themselves, so they are named without a link.
 */
import type { Rich } from './GlassIgloos.copy.types'

export type { Rich }

export interface IceStayCopy {
  name: string
  /** Where it is, one line. */
  place: string
  facts: string[]
}

export interface IceVisitCopy {
  name: string
  place: string
  season: string
  what: string
}

export interface PointCopy { title: string; body: string }

export interface IceHotelsCopy {
  seo: { title: string; description: string }
  breadcrumbHome: string
  breadcrumbPage: string
  keywords: string[]
  adBadge: string
  h1: string
  lead: string
  heroAlt: string

  staysEyebrow: string
  staysH2: string
  staysIntro: string
  arctic: IceStayCopy & {
    /** Link to the glass-igloo page (same resort has glass igloos). */
    glassNote: Rich
    ctaLabel: string
    /** Names the partner the button reaches (Sembo for en/fi/de/sv, Trip.com for the rest). */
    ctaNote: string
  }
  snowVillage: IceStayCopy
  luckyRanch: IceStayCopy

  nightEyebrow: string
  nightH2: string
  night: PointCopy[]

  visitsEyebrow: string
  visitsH2: string
  visitsIntro: string
  visitHeaders: { name: string; place: string; season: string; what: string }
  visits: IceVisitCopy[]

  swedenEyebrow: string
  swedenH2: string
  swedenBody: string[]

  nextEyebrow: string
  nextH2: string
  next: Rich[]

  checkedNote: string
}
