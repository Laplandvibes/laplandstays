import DestinationPage from '../components/DestinationPage'
import { HOTEL_SEARCH, CARS } from '../lib/affiliate'

export default function Inari() {
  return (
    <DestinationPage
      slug="inari"
      name="Inari"
      tagline="Sami capital, Europe's third-largest lake, and the most remote cabins in Finnish Lapland."
      heroImage="/images/inari-hero.webp"
      ogImage="https://laplandstays.com/og-inari.jpg"
      description={`Inari is the capital of Finnish Sami culture and the largest municipality in Finland by area. Lake Inari — Inarijärvi — is 1,040 km² dotted with 3,000 islands, the third-largest lake in the country and one of the clearest bodies of water in Europe.

This is the deep north. Cabins here are genuinely remote: a ten-minute drive from the village can put you on a shore with no other lights visible for 180° of horizon. The SIIDA museum in Inari village anchors Sami heritage, and the surrounding wilderness reaches into the tundra plateaus of the Utsjoki border.`}
      facts={[
        { label: 'Lakeside cabins from', value: '€200/night' },
        { label: 'Aurora Village from', value: '€300/night' },
        { label: 'Lake size', value: '1,040 km²' },
        { label: 'Nearest airport', value: 'IVL 40 min' },
      ]}
      highlights={[
        {
          title: 'Lake Inari exclusivity',
          body: 'Properties on the lake shore are far apart by design. Private docks, ice-fishing holes in winter, boat access to Ukonkivi sacred island in summer.',
        },
        {
          title: 'SIIDA Sami museum and nature centre',
          body: 'The best introduction to Sami culture in the Nordic countries — indigenous history, language and the ecology of Sápmi, all in one building.',
        },
        {
          title: 'Aurora over open water',
          body: 'The lake shore gives a rare 180° unobstructed sky. In winter, aurora reflections on the frozen surface make viewing unusually dramatic.',
        },
        {
          title: 'Sami food traditions',
          body: 'Local kitchens serve poronkäristys (sauteed reindeer), cold-smoked Arctic char, cloudberry desserts — ingredients from the land around you.',
        },
        {
          title: 'Tundra fjeld hiking',
          body: 'North of Inari the treeline thins into open Lapland fjeld. Summer hiking across Kevo and Utsjoki is as remote as Europe gets.',
        },
        {
          title: 'Winter husky and snowmobile access',
          body: 'Kennels around Inari run lake-ice sled routes on frozen Inarijärvi — wide open, no trees, unusually fast and silent.',
        },
      ]}
      whenToGo={`Late September – early April is aurora season; at this latitude the aurora oval regularly sits directly overhead.
Mid-June – late July is midnight sun: the sun never sets for roughly six weeks.
Mid-August brings the short, intense ruska (autumn colour) — reds and oranges across the fjeld.`}
      howToGet={`Fly into Ivalo (IVL), 40 min transfer. Direct Helsinki – Ivalo daily, seasonal charter routes from UK and Central Europe.
Rent a car — the best cabins are on lake-shore side-roads and require private transport.
For extended wilderness trips, the road continues to Utsjoki and the Norwegian border.`}
      stayTypes={[
        'Lakeside log cabins on Inarijärvi — 4–6 guests, private shore, wood-fired sauna, ice-fishing gear.',
        'Remote wilderness villas — off-grid-feel with full comfort, hours of untouched forest in every direction.',
        'Sami-family-run cabins — small, personal, often with reindeer-herding heritage and on-site storytelling.',
        'Aurora glass retreats north of Inari village — designed specifically for sky viewing at high latitude.',
      ]}
      siblings={[
        { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Gateway to UKK wilderness, 40 min south.' },
        { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: "Lapland's capital and main arrival point." },
        { name: 'Levi', href: '/destinations/levi', blurb: 'The big ski village with a walkable centre.' },
      ]}
      anchorProperties={[
        { name: 'Wilderness Hotel Nellim', propertyQuery: 'Wilderness Hotel Nellim', sid: 'destination_inari_nellim', note: 'On the eastern shore of Lake Inari, near the Russian border. Sami-fish-and-sauna culture.' },
        { name: 'Aurora Village Ivalo', propertyQuery: 'Aurora Village Ivalo', sid: 'destination_inari_aurora_village', note: '20 min from Ivalo airport — glass-roofed cabins, aurora wake-up service.' },
        { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_inari_muotka', note: 'Architect-designed all-suite lodge between Inari and Saariselkä.' },
        { name: 'All Inari accommodation', href: HOTEL_SEARCH.inari, sid: 'destination_inari_all_search', note: 'Browse every Inari property on Hotels.com.' },
      ]}
      transport={[
        { mode: 'plane', label: 'From Ivalo Airport (IVL)', detail: 'Direct winter flights from HEL · LHR · CDG · AMS. 40 km / 40 min north to Inari village.' },
        { mode: 'bus', label: 'IVL airport bus to Inari', detail: '€15 one-way · 40 min · meets winter flights.' },
        { mode: 'car', label: 'Taxi or pre-booked transfer', detail: '€60–80 from IVL to Inari village. Most premium properties offer private transfer.' },
        { mode: 'car', label: 'Drive from Saariselkä', detail: '40 min along E75. Easy day-trip if your base is Saariselkä — many travellers split nights.' },
      ]}
      carRental={{
        href: CARS.fromIvalo,
        sid: 'destination_inari_cars_ivl',
        airport: 'Pickup at Ivalo Airport (IVL)',
        blurb: '40 min to Inari village · essential for Nellim and Lake Inari shore cabins',
      }}
      dayPlan={[
        { day: '01', title: 'Land · lakeside cabin', body: 'IVL midday flight, drive north to Inari village or further to Nellim. Settle, sauna, lake-edge walk. The Inari quiet sets in by hour two.' },
        { day: '02', title: 'Sami culture · Siida museum', body: 'Morning at Siida (the indigenous Sami museum, a quiet world-class collection). Lunch in Inari village. Afternoon ice-fishing or a guided forest walk.' },
        { day: '03', title: 'Lake Inari snowshoe', body: 'Cross to Ukko island by snowmobile or skidoo with a guide. Dark by 14:30 in winter — back at the cabin for the long aurora window.' },
        { day: '04', title: 'Slow departure', body: 'Reindeer farm visit, last sauna, drive back to IVL. Extend by 2 days if you can — Inari rewards slow.' },
      ]}
      seoTitle="Inari Accommodation: Lakeside Cabins & Aurora Villas"
      seoDescription="Where to stay in Inari, Finnish Lapland: lakeside log cabins from €200/night, Aurora Village and Nellim Wilderness Hotel from €300. Private shores on Lake Inari, Sami heritage, dark skies, direct booking."
      seoKeywords={['inari accommodation', 'inari cabin', 'lake inari villa', 'aurora village ivalo', 'nellim wilderness hotel', 'where to stay in inari', 'sami cabin lapland', 'inarijärvi accommodation']}
    />
  )
}
