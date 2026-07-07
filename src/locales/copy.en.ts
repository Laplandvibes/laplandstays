import type { ChromeCopy } from './copy.types'

const copy: ChromeCopy = {
  nav: {
    home: 'Home',
    propertyTypes: 'Property Types',
    whenToGo: 'When to Go',
    transport: 'Transport',
    about: 'About',
    levi: 'Levi',
    yllas: 'Ylläs',
    saariselka: 'Saariselkä',
    inari: 'Inari',
    rovaniemi: 'Rovaniemi',
    bookNow: 'Book Now',
    langSwitch: 'Suomeksi',
  },
  hero: {
    eyebrow: 'Lapland Accommodation · Finland',
    h1: 'Where to Stay in Finnish Lapland',
    lead: 'A glass igloo where you watch the aurora from your pillow, a log cabin with your own sauna and the lake right outside, or a proper hotel in the village. We live up here and we have stayed in these places, so we tell you what they really cost (from €100 to €1,500 a night) and which ones are worth it, across Levi, Ylläs, Saariselkä and Inari.',
    leadSummer: 'A lakeside cabin under the midnight sun with your own sauna, a riverside lodge in the green fells, or a proper hotel in the village. We live up here and we have stayed in these places, so we tell you what they really cost (from €100 to €1,500 a night) and which ones are worth it, across Levi, Ylläs, Saariselkä and Inari.',
    disclosure: 'This page contains affiliate links. If you book through them, LaplandStays may earn a commission at no extra cost to you.',
    alt: 'Warm-lit luxury cabin in snowy Finnish Lapland under aurora skies',
  },
  reviewedBy: {
    reviewedLabel: 'Reviewed by',
    policyLabel: 'editorial policy',
    resolvedDate: 'April 2026',
  },
  networkHub: {
    huskySafaris: 'Husky Safaris',
    skiResorts: 'Ski Resorts',
  },
  mobileStickyCta: {
    fromPrice: 'From €100/night',
    headline: 'Verified Lapland cabins & igloos',
    cta: 'Book now',
  },
  newsletter: {
    eyebrow: 'LaplandStays Insider',
    h2: 'Plan Your Lapland Trip With Us',
    lead: 'Written from up here, and only when we actually have something to tell you. A good window of dates, an igloo that just freed up, a rate worth grabbing before it goes. You pick the days and pack the wool socks.',
    emailPlaceholder: 'your@email.com',
    emailLabel: 'Email address',
    submit: 'Get the next email',
    submitting: 'Joining…',
    success: "You're on the list. See you under the aurora.",
    footnote: 'Only when we genuinely have something to tell you. One-click unsubscribe.',
    privacyLink: 'Privacy Policy',
    benefits: [
      { title: 'Aurora alerts', body: 'We send a heads-up when a good aurora night is coming, so you’re under the glass roof on exactly the right night.' },
      { title: 'Cabin drops', body: 'First word when Kakslauttanen, Levin Iglut, Star Arctic and Aurora Village open their season. The best nights go fast.' },
      { title: 'Planning help', body: 'When to come, what to book first, what you can happily skip. Told the way we’d tell a friend, from right here in Lapland.' },
      { title: 'Insider rates', body: 'Our partners’ seasonal deals land with subscribers first, so you book before everyone else hears about them.' },
    ],
  },
  footerEditorialNote: 'Independently maintained by Lapeso Oy in Finnish Lapland · last reviewed April 2026 · we earn an affiliate commission on some bookings, but it never shapes which properties we recommend.',
  footerExtraLegal: { editorialPolicy: 'Editorial Policy', about: 'About' },
  pages: {
    home: {
      seoTitle: 'Where to Stay in Lapland 2026: Glass Igloos, Aurora Cabins, Real Rates',
      seoDescription: 'Plan your 2026 Lapland stay: glass igloos from €250/night, aurora cabins from €150, hotels from €100 across Levi, Ylläs, Saariselkä, Inari. Verified picks, no fluff.',
    },
    propertyTypes: {
      kicker: 'Property Types',
      h1: 'Glass Igloos, Cabins, Hotels & Villas',
      lead: 'From a wood-burning lakeside cabin to a triple-glazed glass igloo, here is what each one actually feels like to wake up in on an Arctic night.',
      types: [
        { title: 'Glass Igloo', body: 'Triple-glazed dome with private bed, full bathroom and panoramic aurora view from your pillow.' },
        { title: 'Aurora Cabin', body: 'Traditional Finnish cabin with sauna, fireplace and dark-sky views, often with an aurora alarm that wakes you when the lights come out.' },
        { title: 'Lapland Hotel', body: 'Full-service hotel with restaurant, lobby, sauna and ski-in access where the village location demands it.' },
        { title: 'Villa & Chalet', body: 'Larger format for families and groups, often with multiple bedrooms, private kitchen, sauna and hot tub.' },
      ],
    },
    locations: {
      kicker: 'Destinations',
      h1: 'Where Lapland Lives: Five Bases, One Aurora',
      lead: 'Pick Levi for the easy first trip, Ylläs for the quiet, Saariselkä and Inari for the darkest skies, and Rovaniemi for Santa and the Arctic Circle.',
      cards: [
        { name: 'Levi', desc: 'The biggest ski resort, easiest flights, full restaurant scene and a wall-to-wall safari menu.' },
        { name: 'Ylläs', desc: 'Two villages, seven national park trails, the most authentic and quiet Lapland stay.' },
        { name: 'Saariselkä', desc: 'Inside the auroral oval, home of Kakslauttanen and the deepest dark-sky cabin scene.' },
        { name: 'Inari', desc: 'Lake Inari, Sámi culture, the far northern end of the country, and the best aurora odds you will get.' },
        { name: 'Rovaniemi', desc: 'Santa Claus Village, the Arctic Circle and the easiest international airport in Lapland.' },
      ],
    },
    whenToGo: {
      kicker: 'Best Time to Go',
      h1: 'A Month-by-Month Lapland Calendar',
      lead: 'Polar night, ice festivals, midnight sun, the ruska autumn. Every month up here feels like a different country, so here is what each one is actually like.',
      months: [
        { month: 'November', tip: 'Polar night begins. Aurora returns. Cabins fill fast, so book early for Christmas.' },
        { month: 'December', tip: 'Santa season at full intensity. Snow is dependable. Shortest days, brightest snow.' },
        { month: 'January', tip: 'Coldest month. Quietest week of the year between New Year and the first ski camps.' },
        { month: 'February', tip: 'Long aurora nights, sun returns slowly, ideal for safaris and ice fishing.' },
        { month: 'March', tip: 'Long days, plenty of snow and the spring-skiing window opens at Levi and Ylläs.' },
      ],
    },
    transport: {
      kicker: 'Getting There',
      h1: 'How to Reach Finnish Lapland',
      lead: 'Direct winter flights land at Kittilä, Rovaniemi and Ivalo, and the overnight train runs up from Helsinki. Here is how each option actually works and which one fits your trip.',
      airports: [
        { name: 'Kittilä (KTT)', desc: 'Direct winter charters from London, Paris, Amsterdam, Zurich and beyond. The gateway to Levi and Ylläs.' },
        { name: 'Rovaniemi (RVN)', desc: 'Year-round Finnair connections via Helsinki. Walking distance to Santa Claus Village transfers.' },
        { name: 'Ivalo (IVL)', desc: 'The northernmost airport in the EU, gateway to Saariselkä, Inari and the aurora belt.' },
      ],
    },
    about: {
      kicker: 'About LaplandStays',
      h1: 'Independently Written from Inside Finnish Lapland',
      lead: 'We live here. We stay here. We update this guide every season, and we tell you when a property is overhyped.',
      mission: 'Our mission is simple: give every traveller the same recommendation we would give a friend. It comes from real stays, verified nightly rates, and the local insight you only get from being on the ground.',
    },
  },
}

export default copy
