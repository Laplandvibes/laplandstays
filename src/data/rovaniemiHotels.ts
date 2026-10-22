import type { PropertyKey } from './properties'

/**
 * Rovaniemi hotels by area (tehtävä D, 22.10.2026). The destination page /destinations/rovaniemi is the
 * network's "Rovaniemi hotels" page: "rovaniemi hotels" and "rovaniemi accommodation" return the same
 * listing SERP in en/fi/de (measured 22.10.2026), so a second page would compete with this one.
 *
 * Data only (names, affiliate query, sub-id); the per-language notes live in
 * src/pages/Rovaniemi.hotels.<ident>.ts. `query` must equal the property's `destination` in
 * data/properties.ts, which is how the page finds the partner ids (data/propertyBooking.ts).
 * Facts and ids: side-session-notes/…/rovaniemi-hotellit-faktat-20261022.md.
 */
export const ROVANIEMI_HOTELS = {
  arcticLight: { name: 'Arctic Light Hotel', query: 'Arctic Light Hotel Rovaniemi', sid: 'destination_rovaniemi_arctic_light' },
  scandicRovaniemiCity: { name: 'Scandic Rovaniemi City', query: 'Scandic Rovaniemi City', sid: 'destination_rovaniemi_scandic_city' },
  scandicPohjanhovi: { name: 'Scandic Pohjanhovi', query: 'Scandic Pohjanhovi', sid: 'destination_rovaniemi_scandic_pohjanhovi' },
  arcticCityHotel: { name: 'Arctic City Hotel', query: 'Arctic City Hotel Rovaniemi', sid: 'destination_rovaniemi_arctic_city' },
  sokosVaakuna: { name: 'Original Sokos Hotel Vaakuna', query: 'Original Sokos Hotel Vaakuna Rovaniemi', sid: 'destination_rovaniemi_sokos_vaakuna' },
  santasHotelSantaClaus: { name: "Santa's Hotel Santa Claus", query: "Santa's Hotel Santa Claus", sid: 'destination_rovaniemi_hotel_santa_claus' },
  postmasterHotel: { name: 'Postmaster Hotel', query: 'Postmaster Hotel Rovaniemi', sid: 'destination_rovaniemi_postmaster' },
  hotelAakenus: { name: 'Hotel Aakenus', query: 'Hotel Aakenus', sid: 'destination_rovaniemi_aakenus' },
  skyOunasvaara: { name: 'Lapland Hotels Sky Ounasvaara', query: 'Lapland Hotels Sky Ounasvaara', sid: 'destination_rovaniemi_sky_ounasvaara' },
  laplandHotelsOunasvaara: { name: 'Lapland Hotels Ounasvaara Chalets', query: 'Lapland Hotels Ounasvaara', sid: 'destination_rovaniemi_ounasvaara_chalets' },
  santasport: { name: 'Santasport Resort', query: 'Santasport Resort Rovaniemi', sid: 'destination_rovaniemi_santasport' },
  santaClausHolidayVillage: { name: 'Santa Claus Holiday Village', query: 'Santa Claus Holiday Village', sid: 'destination_rovaniemi_holiday_village' },
  santasIgloosArcticCircle: { name: "Santa's Igloos Arctic Circle", query: "Santa's Igloos Arctic Circle", sid: 'destination_rovaniemi_santas_igloos' },
  arcticTreeHouse: { name: 'Arctic TreeHouse Hotel', query: 'Arctic TreeHouse Hotel', sid: 'destination_rovaniemi_arctic_treehouse' },
  novaSkyland: { name: 'Nova Skyland Hotel', query: 'Nova Skyland', sid: 'destination_rovaniemi_nova_skyland' },
  glassResort: { name: 'Glass Resort', query: 'Glass Resort Rovaniemi', sid: 'destination_rovaniemi_glass_resort' },
  apukka: { name: 'Apukka Resort', query: 'Apukka Resort Rovaniemi', sid: 'destination_rovaniemi_apukka' },
  arcticSnowHotel: { name: 'Arctic SnowHotel & Glass Igloos', query: 'Arctic Snow Hotel', sid: 'destination_rovaniemi_snowhotel' },
  invisibleForest: { name: 'Invisible Forest Lodge', query: 'Invisible Forest Lodge', sid: 'destination_rovaniemi_invisible_forest' },
  silverBirch: { name: 'Silver Birch Resort', query: 'Silver Birch Resort', sid: 'destination_rovaniemi_silver_birch' },
} satisfies Partial<Record<PropertyKey, { name: string; query: string; sid: string }>>

export type RovaniemiHotelKey = keyof typeof ROVANIEMI_HOTELS
