import type { GlassIgloosCopy } from './GlassIgloos.copy.types'

/**
 * English glass-igloo page, /glass-igloos (18.10.2026). Demand measured with OpenSEO, UK market,
 * 16.–17.9.2026: glass igloos finland 1,000/month, glass igloo finland 1,000 (KD 9), glass igloo
 * lapland 390 (_liiketoiminta/02-LaplandVibes/SEO/LAPLANDSTAYS-AUDIT-2026-09-16.md §1b).
 *
 * Every resort fact was read on the resort's own website on 18.10.2026 (report in the shared
 * session notes, iglu-faktat-20261018.md); airport distances are Finavia's. Facts the resort's
 * site does not state are left out, even where older copy on this site had them (Star Arctic
 * cabin count, Muotka "all-suite"). Nova Skyland is not listed: its own site shows no glass roof,
 * only a skylight in one suite. Booking lead times, the aurora season and the night train come
 * from this site's own When to go and Transport guides. Native review 18.10.2026 (25 findings,
 * all majors applied): no price claims, no "most flights" (Transport lists more winter routes
 * for Kittilä), Levin Iglut "340 m above sea level", not "up the fell".
 */
const en: GlassIgloosCopy = {
  seo: {
    title: 'Glass Igloos in Finland: 11 Lapland Resorts Compared',
    description:
      'Glass igloos in Finnish Lapland compared: 11 resorts in Rovaniemi, Saariselkä, Inari and Levi, with the nearest airport, room type and when to book.',
  },
  breadcrumbHome: 'Home',
  breadcrumbPage: 'Glass igloos in Finland',
  keywords: ['glass igloos finland', 'glass igloo finland', 'glass igloo lapland', 'glass igloo rovaniemi', 'glass igloo saariselka', 'glass igloo levi', 'kakslauttanen', 'aurora cabin'],
  adBadge: 'Contains affiliate links',
  h1: 'Glass igloos in Finland',
  lead:
    'A glass igloo in Finnish Lapland can be a small unit for two or three guests or a log chalet joined to a glass igloo. The name is the same, but the building, the size of the sky above the bed and what the rate includes are not. This page lists 11 resorts by area, nearest airport and room type, and helps you choose an area to suit your trip.',
  heroAlt: 'Glass igloos in snow-covered forest at Kakslauttanen Arctic Resort, Saariselkä, with two people walking on the path',

  typesEyebrow: 'Know the types first',
  typesH2: 'What counts as a glass igloo',
  typesIntro:
    'Three different things are sold as an “igloo” in Lapland. Most of the difference in comfort comes from the type and the size of the unit: a small igloo for two or three guests, or a family cabin.',
  typeCards: [
    {
      title: 'Free-standing glass igloo',
      tagline: 'A small dome or cabin, roof all glass',
      body: 'A heated unit standing on its own in the snow, with glass over the bed and often down the walls. Kakslauttanen Arctic Resort in Saariselkä and Golden Crown Levin Iglut near Levi are this type. You see the sky without getting up.',
      forWho: 'Best for: couples on an aurora trip and anyone who wants photos from bed.',
    },
    {
      title: 'Glass-roof cabin or room',
      tagline: 'A cabin or hotel room with a glass roof',
      body: 'A standard cabin or hotel room with part of the roof made of glass. Wilderness Hotels call theirs Aurora Cabins and give them a heated glass roof, and Star Arctic Hotel on Kaunispää fell has a three-panel glass roof above the bed. Usually less of the room is glass, which can make warmth, darkness and privacy easier to manage.',
      forWho: 'Best for: travellers who put comfort first, and longer stays.',
    },
    {
      title: 'Snow igloo (snow hotel)',
      tagline: 'A similar name, a different product',
      body: 'A room built of snow and ice, rebuilt every winter, where the temperature stays between 0 and −5 °C. The snow hotel at Arctic SnowHotel & Glass Igloos near Rovaniemi opens on 15 December each year, provides sleeping bags made for extreme cold, and does not recommend an overnight stay for children under 5. A glass igloo is a warm room with a view of the sky; here the cold night is the experience.',
      forWho: 'Best for: one night of adventure. For most people, one night is enough.',
    },
  ],
  typesNote: [
    'Arctic SnowHotel has glass igloos and the snow hotel at the same resort, so you can try both. For all accommodation types in Lapland, see the ',
    { to: '/property-types', label: 'guide to accommodation types' },
    ' on this site and the LaplandVibes ',
    { href: 'https://laplandvibes.com/blog/lapland-glass-cabin-categories/', label: 'article on glass cabin categories' },
    '.',
  ],
  kidsNote:
    'With children, the snow hotel is the one to check: Arctic SnowHotel does not recommend a night in its snow rooms for children under 5. Glass igloos are heated rooms, but age rules and whether a child can share a bed differ by resort, so ask when you book.',

  seasonEyebrow: 'Season',
  seasonH2: 'Glass igloo season starts with darkness, not snow',
  seasonBody: [
    'The glass igloo season follows dark nights, not snow. In this site’s month-by-month guide, the aurora season runs from September to April, and some resorts open to match: Levin Iglut and Arctic SnowHotel’s glass igloos both open on 1 September. Only the snow hotel waits for 15 December.',
    'You do not have to wait for snow. In September and October, autumn colours and the first aurora nights come together, and there is still availability. From June to mid-July the sun does not set and the aurora cannot be seen at all. Under a summer glass roof you watch the midnight sun instead, which is an experience of its own, but probably not the one you came for.',
  ],

  tableH2: 'The resorts: area, airport and room type',
  tableIntro:
    'The table covers the 11 resorts this site links to through its booking partner, grouped by area in the sections below.',
  tableHeaders: { name: 'Resort', area: 'Area', airport: 'Nearest airport', feature: 'Rooms', book: 'Book' },
  bookLabel: 'Check dates',
  rows: {
    kakslauttanen: {
      name: 'Kakslauttanen Arctic Resort',
      area: 'Saariselkä, 10 km south of the village',
      airport: 'Ivalo (IVL), 35 km, about 30 min',
      feature: 'Glass igloos for up to 3 or 5 guests, and kelo-glass igloos: a log chalet joined to a glass igloo',
    },
    starArctic: {
      name: 'Star Arctic Hotel',
      area: 'Saariselkä, on top of Kaunispää fell',
      airport: 'Ivalo (IVL)',
      feature: 'Aurora Glass Cabins of 20 m² with a three-panel glass roof above the bed',
    },
    muotka: {
      name: 'Wilderness Hotel Muotka',
      area: 'Near Saariselkä',
      airport: 'Ivalo (IVL), about 45 min',
      feature: 'Aurora Cabins of 30 m² for up to 4, with a heated glass roof',
    },
    auroraVillage: {
      name: 'Aurora Village Ivalo',
      area: 'Ivalo',
      airport: 'Ivalo (IVL), 15 min',
      feature: 'Glass-roofed Aurora Cabins of 28 m², aurora alerts through an app',
    },
    nellim: {
      name: 'Wilderness Hotel Nellim',
      area: 'Nellim, on the shore of Lake Inari',
      airport: 'Ivalo (IVL), about 45 min',
      feature: 'Aurora Cabins with a heated glass roof, and lakeside villas',
    },
    wildernessInari: {
      name: 'Wilderness Hotel Inari',
      area: 'Lake Inari, 5 min from Inari village',
      airport: 'Ivalo (IVL), about 45 min',
      feature: 'Aurora Cabins of 29 m² for up to 4, with a heated glass roof',
    },
    arcticSnowHotel: {
      name: 'Arctic SnowHotel & Glass Igloos',
      area: 'Lehtojärvi, 30 min from Rovaniemi centre',
      airport: 'Rovaniemi (RVN), 40 min',
      feature: 'Heated glass igloos from 1 September, and a snow hotel rebuilt every winter (from 15 December, 0 to −5 °C)',
    },
    apukka: {
      name: 'Apukka Resort',
      area: 'Rovaniemi, 18 km (15 min) from the centre',
      airport: 'Rovaniemi (RVN), 10 km',
      feature: 'Aurora Cabins with a heated panoramic glass roof, and glass igloo suites with a 360° view',
    },
    santasIgloosArcticCircle: {
      name: 'Santa’s Igloos Arctic Circle',
      area: 'Santa Claus Village, Rovaniemi',
      airport: 'Rovaniemi (RVN), 5 km',
      feature: '71 glass igloos with a heated glass ceiling',
    },
    levinIglut: {
      name: 'Golden Crown Levin Iglut',
      area: 'Levi, 10 km from the village, 340 m above sea level',
      airport: 'Kittilä (KTT), 15 min',
      feature: 'Superior, Prime Superior and Suite igloos',
    },
    northernLightsRanch: {
      name: 'Northern Lights Ranch',
      area: 'Köngäs, 15 km from Levi',
      airport: 'Kittilä (KTT), 30 km',
      feature: 'Sky View Cabins: igloo-style cabins with a heated glass roof, in six styles',
    },
  },
  tableNote:
    'Each row opens that resort’s own page at our booking partner Sembo, with prices and availability for your dates. Igloo prices change a lot from one week to the next, so we do not print them here. Resort distances, times and room details are from each resort’s own website, and airport distances are from Finavia, checked 18 October 2026.',

  areas: {
    rovaniemi: {
      eyebrow: 'For a short trip',
      title: 'Around Rovaniemi: close to the airport',
      intro:
        'Rovaniemi airport (RVN) is 10 km from the city centre. An igloo around Rovaniemi is the sensible choice if your trip is short, if you also want to see Santa Claus Village, or if you want as little transfer time as possible.',
      properties: [
        {
          name: 'Arctic SnowHotel & Glass Igloos (Lehtojärvi)',
          body: 'Glass igloos from 1 September and a snow hotel from 15 December, 30 minutes from the city centre and 40 from the airport. The resort lists an aurora alarm among the amenities of its glass igloos.',
        },
        {
          name: 'Apukka Resort',
          body: 'The resort is 18 km (15 minutes) from the centre and 10 km from the airport. The Aurora Cabins have a heated panoramic glass roof; the Kammi and Komsio glass igloo suites have a 360° view.',
        },
        {
          name: 'Santa’s Igloos Arctic Circle',
          body: 'In Santa Claus Village, 5 km from the airport: 71 glass igloos with a heated glass ceiling.',
        },
      ],
      outro:
        'The one thing to weigh is light pollution from the city. The resorts around Rovaniemi sit away from the centre, but if you want a darker sky, go further north.',
      ctaLabel: 'Search stays in Rovaniemi',
      guideLinks: [{ to: '/destinations/rovaniemi', label: 'Rovaniemi guide' }],
    },
    north: {
      eyebrow: 'If dark skies come first',
      title: 'Saariselkä, Ivalo and Inari: go north',
      intro:
        'Ivalo airport (IVL) is 25 km from Saariselkä and 11 km from Ivalo centre. Inari is further north: Wilderness Hotels quote about 45 minutes from the airport to their Inari and Nellim hotels. This site’s month-by-month daylight figures are for Rovaniemi (66.5° N), and winter in Saariselkä and Inari is darker still. If the aurora is the main reason for the trip, that is the reason to go north.',
      properties: [
        {
          name: 'Kakslauttanen Arctic Resort',
          body: 'The resort is 10 km south of Saariselkä village and 35 km (about 30 minutes) from Ivalo airport. Glass igloos for up to 3 or 5 guests, and kelo-glass igloos where a log chalet is joined to a glass igloo. One of its winter rates includes breakfast and dinner.',
        },
        {
          name: 'Star Arctic Hotel',
          body: 'On top of Kaunispää fell in Saariselkä. The Aurora Glass Cabin is 20 m², sleeps two adults and a child aged 11 or under, and has a three-panel glass roof directly above the bed.',
        },
        {
          name: 'Wilderness Hotel Muotka',
          body: 'Near Saariselkä, about 45 minutes from Ivalo airport. Its Aurora Cabins are 30 m², sleep up to four and have a heated glass roof.',
        },
        {
          name: 'Aurora Village Ivalo',
          body: 'In Ivalo, 15 minutes from the airport. Glass-roofed Aurora Cabins of 28 m², and aurora alerts through an app.',
        },
        {
          name: 'Wilderness Hotel Nellim and Wilderness Hotel Inari',
          body: 'Both on the shore of Lake Inari, about 45 minutes from Ivalo airport. Wilderness Hotel Inari is five minutes from Inari village; Nellim is a village of its own. Both have Aurora Cabins with a heated glass roof.',
        },
      ],
      ctaLabel: 'Search stays in Saariselkä',
      guideLinks: [
        { to: '/destinations/saariselka', label: 'Saariselkä guide' },
        { to: '/destinations/inari', label: 'Inari guide' },
      ],
    },
    levi: {
      eyebrow: 'If you also want to ski',
      title: 'Levi: slopes by day, glass roof at night',
      intro:
        'Kittilä airport (KTT) is 15 km from Levi. Choose Levi when skiing is the main plan and the igloo is the treat at the end.',
      properties: [
        {
          name: 'Golden Crown Levin Iglut',
          body: 'Glass igloos 10 km from Levi village, 340 m above sea level, 15 minutes from Kittilä airport. Three room classes: Superior, Prime Superior and Suite. The 2026–27 igloo season runs from 1 September to 13 April; in September and October the resort is open Tuesday to Saturday only.',
        },
        {
          name: 'Northern Lights Ranch',
          body: 'In Köngäs, 15 km from Levi and 30 km from Kittilä airport. Its Sky View Cabins are igloo-style cabins with a heated glass roof, in six styles.',
        },
      ],
      outro:
        'An igloo night is a treat more than a base for the week, so it rarely makes sense to spend every night in one. Stay in the village or in a chalet near the slopes, and add one or two igloo nights at the end: skiing by day, the last night under glass.',
      ctaLabel: 'Search stays in Levi',
      guideLinks: [{ to: '/destinations/levi', label: 'Levi guide' }],
    },
  },

  questionsEyebrow: 'How to choose',
  questionsH2: 'Which area: three questions',
  questionsIntro: 'With the three areas in front of you, the choice comes down to three questions.',
  questions: [
    {
      title: 'How many nights do you have?',
      body: 'With three nights or fewer, start with Rovaniemi: the transfers are the shortest, so less of the trip is spent travelling. With four nights or more, flying to Ivalo and going north to Saariselkä or Inari becomes realistic.',
    },
    {
      title: 'Is the trip about the aurora or about skiing?',
      body: 'If the aurora comes first, go north: winter in Saariselkä and Inari is darker than in Rovaniemi. If skiing comes first, choose Levi. If you want both, combine a ski week in Levi with a night or two at Golden Crown Levin Iglut, or go north in March when the days are longer.',
    },
    {
      title: 'Where should the budget go?',
      body: 'The same money buys a different trip depending on how you spend it: every night in a cheaper igloo, or ordinary rooms plus one night in a better one. Compare the total including meals and transfers, not the nightly rate. Kakslauttanen, for example, sells a winter rate with breakfast and dinner included, so check what each rate covers.',
    },
  ],

  cabinCombo: {
    eyebrow: 'A simple plan',
    h2: 'One or two igloo nights, and a cabin for the rest of the week',
    body: 'An igloo night works better as a treat than as a base for a whole week. One way to plan Lapland is one or two nights in an igloo and the rest of the week in a rental cabin in the same area: the whole group fits, and you can have your own sauna and kitchen for the week. This site lists the cabins for each area with the distance to the nearest village.',
    linkLabel: 'Lapland cabins by area',
  },

  accessEyebrow: 'Getting there',
  accessH2: 'Getting there: flights, the night train and transfers',
  access: [
    [
      'The igloo resorts on this page are served by three airports: Rovaniemi (RVN), Kittilä (KTT) for Levi and Ivalo (IVL) for Saariselkä and Inari. Rovaniemi has flights from Helsinki all year. In winter all three airports also get direct flights from several European cities, and the routes change from year to year, so check your own departure airport.',
    ],
    [
      'Transfer times to each resort are in the area sections above. For reference, RVN is 10 km from Rovaniemi centre, KTT 15 km from Levi and IVL 25 km from Saariselkä.',
    ],
    [
      'Without flying, VR’s night train runs from Helsinki to Rovaniemi and can carry your car. Saariselkä is another four hours or so from Rovaniemi by bus, so for the northern resorts a flight to Ivalo is quicker. Some resorts sell airport transfers, either in a package or as an extra; the other options are in the ',
      { to: '/transport', label: 'transport guide' },
      '.',
    ],
  ],

  itinerariesEyebrow: 'Planning',
  itinerariesH2: 'Sample trips: where to put the igloo nights',
  itinerariesIntro:
    'Put the igloo nights in the second half of the trip, for two reasons: on the first evening you are tired from travelling and less likely to stay up for the aurora, and later nights are a back-up if the first ones are cloudy.',
  itineraries: [
    {
      title: '3 nights in Rovaniemi',
      body: 'Night one in the city or near Santa Claus Village, with the Arktikum museum and a safari. Nights two and three in a glass igloo outside the city, with the last evening kept for the aurora.',
    },
    {
      title: '4 nights in Saariselkä',
      body: 'Nights one and two in a village hotel, with snowshoeing in Urho Kekkonen National Park and a husky safari, both from the village. Nights three and four in an igloo.',
    },
    {
      title: '5 nights in Levi',
      body: 'Three ski days from a village hotel or a chalet near the slopes, then the last one or two nights at Golden Crown Levin Iglut. The move is 10 km, so a taxi is enough and you do not need a rental car.',
    },
  ],

  inclusionsEyebrow: 'Same night, different rate',
  inclusionsH2: 'What the rate includes: dinner, transfers, sauna',
  inclusionsBody: [
    'Examples we could confirm on the resorts’ own websites: Kakslauttanen sells a winter rate with breakfast and dinner included. At Kakslauttanen, private airport transfers are included only in the Luxury Kelo-Glass Igloo price, and Wilderness Hotel Muotka’s three-night Aurora Adventure Break includes transfers from Ivalo airport. In Arctic SnowHotel’s snow rooms, sleeping bags made for extreme cold come with the room.',
    'What a rate includes depends on the rate plan, not only on the resort. Three things are worth checking before you book:',
  ],
  inclusions: [
    {
      title: 'Dinner',
      body: 'Can you walk to restaurants in a village, or is the resort’s own restaurant the only option? If it is the only option, a rate with dinner included matters more.',
    },
    {
      title: 'Airport transfer',
      body: 'Included, a paid extra, or up to you? Public transport is thin at Ivalo and Kittilä, so this changes the total.',
    },
    {
      title: 'Sauna',
      body: 'A shared sauna, or a private one in your room or cabin? Saunas are common in Finnish accommodation, but a private one changes the stay.',
    },
  ],
  inclusionsNote:
    'We do not put these three in a fixed table on purpose: they change with each rate plan, and a fixed table would go out of date before the resorts’ own pages do. Always confirm on the resort’s booking page.',

  bookingEyebrow: 'Timing',
  bookingH2: 'When to book: 8–12 months ahead for peak weeks',
  bookingIntro:
    'For peak weeks, Kakslauttanen and Levin Iglut book 8–12 months ahead. By November, igloos for the following winter’s peak weeks have started to fill, so the choice narrows long before the year turns. Based on this site’s month-by-month guide:',
  bookingRows: [
    { period: 'Christmas week', body: 'About 12 months ahead.' },
    { period: 'New Year', body: 'About 10 months ahead.' },
    { period: 'Mid-February', body: 'European school holidays. About 6–8 months ahead.' },
    { period: 'March', body: '4–6 months ahead. A favourite month of returning visitors: dark nights and longer days at the same time.' },
    { period: 'September–October', body: 'Rooms are still available, and it is the best balance of aurora and price of the season.' },
  ],
  bookingOutro: [
    'The full picture of daylight, aurora, snow and booking by month is in the ',
    { to: '/when-to-go', label: 'when to go guide' },
    '. If you start looking for a December glass igloo two or three months before you travel, there will be very little left. Moving the trip to March usually helps more than settling for a different resort.',
  ],

  cloudyEyebrow: 'Honestly',
  cloudyH2: 'What if it is cloudy?',
  cloudyIntro:
    'You only see the aurora on a clear night, and a glass igloo cannot sell you the weather. No resort includes the aurora in its price. There are three practical things you can do.',
  cloudy: [
    {
      title: 'Book more than one night',
      body: 'One night is a gamble; two or three improve your odds. Put the igloo nights late in the trip and they give you another chance if the earlier nights were cloudy.',
    },
    {
      title: 'Use an aurora alert',
      body: 'Some resorts send an alert when the aurora appears: Aurora Village Ivalo through an app, and Arctic SnowHotel lists an aurora alarm in its glass igloos. Check before you book whether your resort has one. If your dates are flexible, the aurora tends to be more active around the equinoxes, so March is a good month.',
    },
    {
      title: 'Plan the cloudy evening in advance',
      body: 'A sauna, dinner at the resort, a walk outside: one plan that works under cloud keeps the night from feeling wasted.',
    },
  ],
  cloudyOutro: [
    'Even on a cloudy night you still have a warm bed under glass and, in winter, snow-lit trees around you. How that feels depends on what you expected. For when the aurora is most likely, and the odds, see the LaplandVibes ',
    { href: 'https://laplandvibes.com/northern-lights/', label: 'northern lights guide' },
    '.',
  ],

  ctaH2: 'Choose the area, then the month',
  ctaBody:
    'Once you know the type and the area, the month is the only choice left. Check daylight, aurora and booking by month, then put your dates into the resort’s booking calendar.',
  ctaPrimary: 'When to go',
  ctaSecondary: 'Accommodation types',
  checkedNote:
    'Resort details checked on each resort’s own website on 18 October 2026. Seasons, rooms and what a rate includes change: confirm on the resort’s website and booking page.',
}

export default en
