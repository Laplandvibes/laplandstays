import type { HomeAdSlotsConfig } from '../shared/HomeAdSlots'
import type { Partner } from '../shared/PartnerSlot'
import { DEFAULT_PREMIUM_SPOTS } from '../shared/PremiumSpotGrid'

export const AD_SLOTS: HomeAdSlotsConfig = {
  siteSlug: 'laplandstays',
  sponsors: [null, null],
  spots: DEFAULT_PREMIUM_SPOTS,
}

/**
 * ESITTELYKUMPPANI-PAIKAT (Vesa 2026-07-26: "TOTTAKAI HALUAN" + "TEE KAIKKI")
 * ==========================================================================
 * Sivusto nosti ~19 nimettyä, oikeaa kohdetta isoilla toimituksellisilla
 * pinnoilla täysin ILMAISEKSI — "Missä yöpyä Levillä", ankkurikohteet
 * majoitustyypeittäin, mukavuuskorttien kohdepillerit, kohdekortit — samalla
 * kun molemmat myydyt mainospaikat (`sponsors`) olivat tyhjinä. Nyt jokaisen
 * sellaisen pinnan kärkeen tulee YKSI myytävä Esittelykumppani-paikka. Malli on
 * sama kuin laplanddining `/restaurants` (commit `bdf9b37`) ja
 * laplandhoteldeals (`f67c6d6`): **AdSpec + 1 datarivi** — paikka on pelkkä
 * avain tässä taulukossa, ei omaa komponenttia per pinta.
 *
 * Säännöt (älä pura näitä ilman Vesan päätöstä):
 *  - Tyhjä (null) = kanoninen VAALEA house-ad `shared/PartnerSlot`ista
 *    ("MAINOSPAIKKA VAPAANA / Varaa mainospaikka →"). EI koskaan automaattista
 *    nostoa jollekin oikealle kohteelle — ilmainen iso pinta on juuri se mikä
 *    tässä korjattiin.
 *  - Maksettu paikka on merkittävä mainokseksi (KKV) — merkintä tehdään
 *    `FeaturedPartnerSlot`issa, ei täällä.
 *  - Paikat näkyvät vain fi/en/sv (`adLocaleEnabled`). Muilla 9 kielellä paikka
 *    jää pois kokonaan eikä pintaan tule aukkoa: toimituksellinen kortisto on
 *    tästä erillään ja renderöityy kaikilla 12 kielellä ennallaan.
 *  - Kumppanin linkki EI ole affiliate-muotoinen: maksettu esittely noudattaa
 *    bear-precedenttia ("maksettu esittely, ei komissiolinkki", ks.
 *    `shared/PartnerSlot`), ja kohteiden omat varaus-CTA:t pysyvät omissa
 *    affiliate-reiteissään koskemattomina (`sponsored nofollow noopener`,
 *    ei `noreferrer` — Worker lukee Refererin).
 *  - Toimituksen valinta -chip EI ole osa tätä inventaaria eikä ole myynnissä.
 *    Se johdetaan aidosta Google-arviodatasta (`bestGoogleRated`,
 *    src/data/properties.ts). Älä lisää tänne maksullista tapaa saada se.
 *
 * Myynti: täytä alla oleva kenttä Partner-objektilla → build → deploy.
 */
export type FeaturedPlacement =
  | 'home_amenities'
  | 'home_locations'
  | 'property_types'
  | 'destination_levi'
  | 'destination_yllas'
  | 'destination_saariselka'
  | 'destination_inari'
  | 'destination_rovaniemi'

/**
 * Paikan konteksti mainosmerkinnässä ("Esittelykumppani · Missä yöpyä Levillä").
 * Vain fi/en/sv, koska paikka itse on `adLocaleEnabled`-rajattu — nämä eivät
 * kuulu 12-kielisiin copy-tiedostoihin eivätkä voi vuotaa muille kielille.
 */
export const FEATURED_CONTEXT: Record<FeaturedPlacement, { fi: string; en: string; sv: string }> = {
  home_amenities: { fi: 'Mitä majoituksesta kannattaa etsiä', en: 'What to look for in a stay', sv: 'Vad du ska leta efter i ett boende' },
  home_locations: { fi: 'Kohteet', en: 'Destinations', sv: 'Destinationer' },
  property_types: { fi: 'Majoitustyypit', en: 'Property types', sv: 'Boendetyper' },
  destination_levi: { fi: 'Missä yöpyä Levillä', en: 'Where to stay in Levi', sv: 'Var du bor i Levi' },
  destination_yllas: { fi: 'Missä yöpyä Ylläksellä', en: 'Where to stay in Ylläs', sv: 'Var du bor i Ylläs' },
  destination_saariselka: { fi: 'Missä yöpyä Saariselällä', en: 'Where to stay in Saariselkä', sv: 'Var du bor i Saariselkä' },
  destination_inari: { fi: 'Missä yöpyä Inarissa', en: 'Where to stay in Inari', sv: 'Var du bor i Inari' },
  destination_rovaniemi: { fi: 'Missä yöpyä Rovaniemellä', en: 'Where to stay in Rovaniemi', sv: 'Var du bor i Rovaniemi' },
}

/** Myydyt Esittelykumppani-paikat. null = house-ad (paikka vapaana). */
export const FEATURED_PARTNERS: Record<FeaturedPlacement, Partner | null> = {
  home_amenities: null,
  home_locations: null,
  property_types: null,
  destination_levi: null,
  destination_yllas: null,
  destination_saariselka: null,
  destination_inari: null,
  destination_rovaniemi: null,
}

/**
 * Kohdesivun slug → sen Esittelykumppani-paikka. Tuntematon slug palauttaa
 * `undefined`, jolloin `FeaturedPartnerSlot` ei renderöi mitään: uusi
 * kohdesivu ei saa vahingossa perittyä toisen kohteen myytyä paikkaa.
 */
export const DESTINATION_PLACEMENT: Record<string, FeaturedPlacement | undefined> = {
  levi: 'destination_levi',
  yllas: 'destination_yllas',
  saariselka: 'destination_saariselka',
  inari: 'destination_inari',
  rovaniemi: 'destination_rovaniemi',
}
