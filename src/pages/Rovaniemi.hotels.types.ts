import type { RovaniemiHotelKey } from '../data/rovaniemiHotels'

/**
 * Per-language text for the Rovaniemi hotel list (tehtävä D, 22.10.2026): group titles and one note per
 * hotel. Notes are facts from the hotel's own website (22.10.2026); a language may shorten a note but
 * never add a fact or a number the English one does not have (numeroportti). No prices.
 */
export interface RovaniemiHotelsCopy {
  /** Lead line above the groups. */
  intro: string
  groups: { title: string; items: { key: RovaniemiHotelKey; note: string }[] }[]
}
