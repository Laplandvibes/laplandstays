import type { RovaniemiHotelsCopy } from './Rovaniemi.hotels.types'

/**
 * Rovaniemi hotels by area, English (22.10.2026). Every note is from the hotel's own website, read
 * 22.10.2026; where the site does not state a number (rooms, airport distance) the note has none.
 */
const en: RovaniemiHotelsCopy = {
  intro: '20 hotels in four areas. Each name takes you to the hotel’s own page at our booking partner, with prices for your dates.',
  groups: [
    {
      title: 'City centre',
      items: [
        { key: 'arcticLight', note: 'Rovaniemi’s former city hall, built in 1949, now a boutique hotel with 57 rooms; some have their own sauna.' },
        { key: 'scandicRovaniemiCity', note: 'On Koskikatu next to the shopping centres; the airport bus stops at the door, and Superior Sauna rooms have a private sauna.' },
        { key: 'scandicPohjanhovi', note: 'On the Kemijoki riverbank; many rooms look over the river, and in winter snowmobile routes start outside the hotel.' },
        { key: 'arcticCityHotel', note: '90 rooms on Pekankatu. Breakfast, sauna, parking and Wi-Fi are included in every rate, and the airport bus stops 300 m away.' },
        { key: 'sokosVaakuna', note: '159 rooms on Koskikatu, with shared saunas open every evening.' },
        { key: 'santasHotelSantaClaus', note: 'In the centre on Korkalonkatu, about 10 km from the airport, with its own sauna facilities.' },
        { key: 'postmasterHotel', note: 'A restored 1950s post office building with 49 rooms; some suites have a kitchenette and a sauna.' },
        { key: 'hotelAakenus', note: 'Family-run, in a quiet area a short walk from the centre: 45 rooms and 20 apartments with kitchens.' },
      ],
    },
    {
      title: 'Ounasvaara hill',
      items: [
        { key: 'skyOunasvaara', note: 'On top of Ounasvaara, 4 km from the centre and 20 m from the nearest slope, with sauna rooms and family rooms.' },
        { key: 'laplandHotelsOunasvaara', note: 'Cabins and holiday apartments between the Kemijoki River and the ski slopes, each with a private sauna and kitchen; 3 km from the centre.' },
        { key: 'santasport', note: 'An Olympic training centre beside the Ounasvaara trails, 2 km from the centre; some rooms have a sauna and a balcony.' },
      ],
    },
    {
      title: 'Santa Claus Village and the Arctic Circle',
      items: [
        { key: 'santaClausHolidayVillage', note: 'On the Arctic Circle in Santa Claus Village: cottages, suites and glass igloo cottages, all with a private sauna.' },
        { key: 'santasIgloosArcticCircle', note: 'North-facing glass igloos in Santa Claus Village, each with a northern lights alarm; 5 km from the airport.' },
        { key: 'arcticTreeHouse', note: 'Suites with a full glass wall on a forest slope, 100 m from SantaPark and 2.2 km from Santa Claus Village.' },
        { key: 'novaSkyland', note: 'Every room and cabin has a private sauna; about 300 m from Santa Claus Village and 5 minutes by car from the airport.' },
        { key: 'glassResort', note: 'Glass apartments with a private sauna and an outdoor hot tub, in a forest within Santa Claus Village.' },
      ],
    },
    {
      title: 'Outside the city',
      items: [
        { key: 'apukka', note: 'Glass igloos between two wilderness lakes, 18 km from the city, with the resort’s own shuttle bus to the centre.' },
        { key: 'arcticSnowHotel', note: 'A snow and ice hotel open from 15 December, plus heated glass igloos with a 360° glass roof, 26 km from the centre.' },
        { key: 'invisibleForest', note: 'Mirrored glass suites with a private sauna, outdoor hot tub and kitchen, by the Ounasjoki River, less than 10 minutes’ drive from the centre.' },
        { key: 'silverBirch', note: 'Only five glass cabins, raised three metres off the ground on a lakeshore near Oikarainen, sold for stays of several nights.' },
      ],
    },
  ],
}

export default en
