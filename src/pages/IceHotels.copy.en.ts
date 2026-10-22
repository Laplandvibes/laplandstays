import type { IceHotelsCopy } from './IceHotels.copy.types'

/**
 * English ice- and snow-hotel page, /ice-hotels (22.10.2026). Demand measured with OpenSEO, UK market,
 * 22.10.2026: ice hotel finland 590/month, ice hotel lapland 480, arctic snowhotel 720, snow village
 * finland 320, ice hotel rovaniemi 320 (LAPLANDSTAYS-AUDIT-2026-09-16.md §10). The SERP for "ice hotel
 * lapland" is mostly Arctic SnowHotel; "ice hotel" alone (5,400) is the ICEHOTEL in Sweden.
 *
 * Every fact was read on the property's own website on 22.10.2026 (airport times and distances too).
 * Not on the page on purpose: the SnowCastle of Kemi as a place to sleep (no snow hotel at the moment),
 * Snowman World as a hotel (no overnight stays), any "ice castle" or "ice gallery" in Levi (none exists
 * this season), prices, and the Arctic SnowHotel closing year (its site says "15.12.–31.3." without one).
 */
const en: IceHotelsCopy = {
  seo: {
    title: 'Ice Hotels in Finnish Lapland: Where to Sleep in Snow',
    description:
      'Ice and snow hotels in Finnish Lapland for winter 2026–27: Arctic SnowHotel in Rovaniemi, SnowVillage near Ylläs and snow igloos at Pyhä, plus day visits.',
  },
  breadcrumbHome: 'Home',
  breadcrumbPage: 'Ice hotels in Finnish Lapland',
  keywords: ['ice hotel finland', 'ice hotel lapland', 'arctic snowhotel', 'snow village finland', 'lapland snow village', 'ice hotel rovaniemi', 'snow hotel lapland'],
  adBadge: 'Contains affiliate links',
  h1: 'Ice and snow hotels in Finnish Lapland',
  lead:
    'In winter 2026–27 there are three places in Finnish Lapland where you can sleep in a room built of snow: Arctic SnowHotel near Rovaniemi, SnowVillage near Ylläs and the snow igloos of Lucky Ranch near Pyhä. The best-known ICEHOTEL is in Sweden. This page tells you what each night includes and where you can visit without staying.',
  heroAlt: 'A snow suite at Arctic SnowHotel near Rovaniemi: a bed with fur covers among ice sculptures and a bird with spread wings carved into the snow wall',

  staysEyebrow: 'Winter 2026–27',
  staysH2: 'Where you can sleep in snow',
  staysIntro:
    'All three are rebuilt every winter, so the rooms, themes and dates change from year to year. What follows is what each place says on its own website for the coming season.',
  arctic: {
    name: 'Arctic SnowHotel & Glass Igloos',
    place: 'Lehtoahontie 27, Rovaniemi: about 26 km (30 min) from the city centre and Santa Claus Village, 40 min from the airport',
    facts: [
      'The snow hotel opens on 15 December 2026, and the season runs to 31 March.',
      'Inside the snow and ice hotel the temperature stays between 0 and −5 °C.',
      'The night includes sleeping bags made for extreme cold, access to the warm Snowhotel Lounge, a shared Finnish sauna and a buffet breakfast.',
      'Your snow room is yours from 21:00. Dinner and transfers from Rovaniemi come in the resort’s packages, not in the room rate.',
      'An overnight stay is not recommended for children under 5.',
    ],
    glassNote: [
      'The same resort also has heated glass igloos, open from 1 September. They are compared with ten other resorts on our ',
      { to: '/glass-igloos', label: 'glass igloo page' },
      '.',
    ],
    ctaLabel: 'Check dates',
    ctaNote: 'Opens the resort’s own page at our booking partner Sembo, with prices for your dates.',
  },
  snowVillage: {
    name: 'Lapland Hotels SnowVillage',
    place: 'Lainio, Kittilä, near Ylläs',
    facts: [
      'Open from 25 December 2026 to 4 April 2027, daily 10:00–22:00.',
      'Built from scratch every year since 2001 from snow and natural ice. The theme for 2026–27 has not been announced yet.',
      'Overnight stays are limited to one luxury ice suite for two, sold as a package with a guided tour, dinner in the Ice Restaurant, a kota with a sauna and hot tub, and breakfast in a warm restaurant. It is booked from SnowVillage by email, and its page still describes winter 2025–26.',
      'A bus runs daily from Levi and Ylläs during opening hours.',
    ],
  },
  luckyRanch: {
    name: 'Lucky Ranch snow igloos',
    place: 'Pyhäjärvi village, Pelkosenniemi, about 10 km from Pyhä',
    facts: [
      'The snow igloos are rebuilt every December, and the temperature inside is always below 0 °C.',
      'You sleep in a normal bed with a warm sleeping bag and a hot water bottle, and a light breakfast is included.',
      'A warm basecamp stands next to the igloos, and the toilets and showers in the ranch saloon are open all night for igloo guests.',
      'The ranch recommends the igloos for healthy adults and children, and sells the nights on its own website.',
    ],
  },

  nightEyebrow: 'Before you book',
  nightH2: 'What a night in snow is like',
  night: [
    { title: 'It stays below zero', body: 'At Arctic SnowHotel the room is between 0 and −5 °C all night; at Lucky Ranch it is always below 0 °C. The cold is the point: a heated room is a glass igloo, not a snow hotel.' },
    { title: 'The sleeping bag does the work', body: 'Arctic SnowHotel provides sleeping bags made for extreme cold, and Lucky Ranch warm sleeping bags and hot water bottles. You do not need to bring your own.' },
    { title: 'A warm room is next door', body: 'Arctic SnowHotel has the warm Snowhotel Lounge and a sauna, Lucky Ranch a warm basecamp beside the igloos. If the night gets too cold, you have somewhere to go.' },
    { title: 'Children', body: 'Arctic SnowHotel does not recommend a night in its snow rooms for children under 5. Lucky Ranch recommends its igloos for healthy adults and children. SnowVillage does not state an age rule, so ask before you book.' },
  ],

  visitsEyebrow: 'Without staying the night',
  visitsH2: 'Snow and ice you can visit by day',
  visitsIntro:
    'You can also walk through rooms of snow and ice without sleeping there. Arctic SnowHotel and SnowVillage sell day tickets; Snowman World and the SnowCastle of Kemi are day visits only.',
  visitHeaders: { name: 'Place', place: 'Where', season: 'Season', what: 'What you see' },
  visits: [
    {
      name: 'Arctic SnowHotel',
      place: 'Rovaniemi, 26 km from the centre',
      season: '15 December – 31 March, daily 10:00–20:00',
      what: 'Day ticket to the snow and ice art, the ice chapel, the Ice Restaurant and the Ice Bar; a 45-minute guided tour is an extra.',
    },
    {
      name: 'Lapland Hotels SnowVillage',
      place: 'Lainio, Kittilä',
      season: '25 December 2026 – 4 April 2027, daily 10:00–22:00',
      what: 'Snow and ice art, the ice bar, a space for weddings, a snow suite, a cinema and an ice slide. Tickets are sold only at reception; guided tours are booked in advance.',
    },
    {
      name: 'Snowman World',
      place: 'Santa Claus Village, 8 km from Rovaniemi centre',
      season: '6 December 2026 – 17 March 2027',
      what: 'A snow and ice park with activities, food and drinks. It does not sell overnight stays.',
    },
    {
      name: 'SnowCastle of Kemi',
      place: 'Kemi, 8 km from Kemi-Tornio Airport',
      season: 'Winter park January – early April (2027 dates not yet published); SnowExperience all year',
      what: 'The snow castle itself has not been built for years and there is no snow hotel at the moment. The indoor SnowExperience is kept at −5 °C all year.',
    },
  ],

  swedenEyebrow: 'Good to know',
  swedenH2: 'The ICEHOTEL is in Sweden',
  swedenBody: [
    'When people say “ice hotel” they often mean the ICEHOTEL in Jukkasjärvi, near Kiruna in Swedish Lapland. Its winter hotel is open from December to April, and ICEHOTEL 365 has rooms of ice and snow all year.',
    'It is not in Finland, so it is not on the list above. This site covers Finnish Lapland.',
  ],

  nextEyebrow: 'Warmer options',
  nextH2: 'If one cold night is enough',
  next: [
    [
      'A glass igloo is a heated room with the sky above the bed. We compare 11 glass igloo resorts on the ',
      { to: '/glass-igloos', label: 'glass igloo page' },
      '.',
    ],
    [
      'For the rest of the week, the ',
      { to: '/cabins', label: 'cabin pages' },
      ' list rental cabins in each area of Lapland, with the distance to the nearest village.',
    ],
  ],

  checkedNote:
    'Details checked on each place’s own website on 22 October 2026. Snow hotels are rebuilt every winter, so dates and what a night includes can change: confirm on the property’s own page before you book.',
}

export default en
