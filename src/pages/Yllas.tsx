import DestinationPage from '../components/DestinationPage'
import { HOTEL_SEARCH, CARS } from '../lib/affiliate'

export default function Yllas() {
  return (
    <DestinationPage
      slug="yllas"
      name="Ylläs"
      tagline="Twin fells, Finland's longest ski runs, and silent forest cabins — Lapland for those who want the wilderness loud and the village quiet."
      heroImage="/images/yllas-hero.webp"
      ogImage="https://laplandstays.com/og-yllas.jpg"
      description={`Ylläs is the biggest fell in the Finnish ski area network by vertical drop — 463 metres — and has the longest downhill slopes in the country. It sits in Kolari and Kittilä municipalities, roughly 180 km north of the Arctic Circle, inside Pallas-Yllästunturi National Park.

Two small villages — Ylläsjärvi on the south side and Äkäslompolo on the north — book-end the fell. There is no single resort core: premium cabins are spread through the forest and along the lakes, giving Ylläs its reputation as the calmer, more nature-forward alternative to Levi.`}
      facts={[
        { label: 'Log cabins from', value: '€150/night' },
        { label: 'Hotels from', value: '€100/night' },
        { label: 'Nearest airport', value: 'KTT 50 min' },
        { label: 'Vertical drop', value: '463 m' },
      ]}
      highlights={[
        {
          title: "Finland's longest downhill runs",
          body: 'The 3 km Aakenus slope drops from the treeless fell top through pine forest to the valley. Rare in Finland — most resorts run 1 km.',
        },
        {
          title: '330 km of cross-country tracks',
          body: 'Groomed classic and skating tracks thread the national park and connect Ylläsjärvi, Äkäslompolo, Sinettä and Pallas.',
        },
        {
          title: 'Pallas-Yllästunturi National Park',
          body: "Finland's third-largest protected area — old-growth forest, seven named fells, and some of Europe's cleanest measured air.",
        },
        {
          title: 'Silent forest cabins',
          body: 'Properties here are deliberately spaced apart. Your neighbour, if you have one, is a few hundred metres of pine through a clearing.',
        },
        {
          title: 'Äkäslompolo aurora shore',
          body: 'The lake at Äkäslompolo faces north — clear horizon, no village lights on the far side, strong aurora viewing from the ice.',
        },
        {
          title: 'Summer fell hiking',
          body: 'The fell-top routes between Ylläs and Pallas are boardwalked above treeline, open July to September with midnight-sun daylight.',
        },
      ]}
      whenToGo={`December – March is the deep-winter window with reliable snow and full aurora season.
Early April offers the "kevättalvi" — long daylight hours, bright snow, still full ski conditions.
September brings ruska autumn colours; July is midnight sun and hiking.`}
      howToGet={`Fly into Kittilä (KTT), 50 min transfer to Ylläs.
Rovaniemi airport (RVN) is an alternative — 2 hr drive.
Kolari train station, 40 min away, receives overnight trains from Helsinki with car-carrier service.`}
      stayTypes={[
        'Log cabins on the forest slopes of the fell — 4–8 guests, wood-burning sauna, fireplace, often with hot tub.',
        'Lakeside villas on Äkäslompolo and Kesänkijärvi — private shore, ice-swim hole in winter.',
        'Ski-in chalets at Äkäslompolo and Ylläsjärvi — direct slope access, gear storage, smaller crowds than Levi.',
        'Designer wilderness retreats inside the national park buffer — architect-built, fully off-grid feel with full comfort.',
      ]}
      siblings={[
        { name: 'Levi', href: '/destinations/levi', blurb: 'Bigger village, more restaurants, faster lifts.' },
        { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Gateway to UKK wilderness further north.' },
        { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'The regional capital and Santa Claus Village.' },
      ]}
      anchorProperties={[
        { name: 'Lapland Hotels (Ylläs)', propertyQuery: 'Lapland Hotels Ylläs', sid: 'destination_yllas_lapland_hotels', note: 'Saaga, Ylläskaltio and ski-in apartments from ~€150/night.' },
        { name: 'Harriniva (Muonio)', propertyQuery: 'Harriniva', sid: 'destination_yllas_harriniva', note: '40 min from Ylläs — husky safari packages and lakeside cabins.' },
        { name: 'All Ylläs accommodation', href: HOTEL_SEARCH.yllas, sid: 'destination_yllas_all_search', note: 'Browse every Ylläs cabin and chalet on Hotels.com.' },
      ]}
      transport={[
        { mode: 'plane', label: 'From Kittilä Airport (KTT)', detail: 'Same airport as Levi. 50 km / 50 min to Äkäslompolo (north Ylläs) or Ylläsjärvi (south Ylläs).' },
        { mode: 'bus', label: 'KTT airport bus to Ylläs', detail: '€25–30 one-way · 50 min · meets winter flights.' },
        { mode: 'train', label: 'Overnight train to Kolari', detail: 'VR sleeper from Helsinki ~€90 · 35 km / 35 min transfer to Ylläs by bus or taxi.' },
        { mode: 'car', label: 'Taxi from KTT', detail: '€100–120 to Ylläs village — usually only worth it for groups of 3+.' },
      ]}
      carRental={{
        href: CARS.fromKittila,
        sid: 'destination_yllas_cars_ktt',
        airport: 'Pickup at Kittilä Airport (KTT)',
        blurb: '50 min to Ylläs · much cheaper than €100+ taxi for groups of 3+',
      }}
      dayPlan={[
        { day: '01', title: 'Land · cabin · sauna', body: 'KTT or Kolari arrival, transfer to Äkäslompolo or Ylläsjärvi. Light dinner at the cabin, sauna, stretch from the flight. No agenda.' },
        { day: '02', title: 'Cross-country ski day', body: 'Ylläs has Finland\'s longest cross-country trail network (330 km). Ski the marked Aakenusjärvi loop or take the lift up Kellokas for downhill. Pack a thermos.' },
        { day: '03', title: 'National park hike + reindeer', body: 'Snowshoe inside Pallas-Yllästunturi park. Visit a reindeer farm — Lainio Snow Village reindeer or Aakenus farm. Aurora-hunt from the cabin\'s north shore.' },
        { day: '04', title: 'Slow morning · departure', body: 'Last sauna, breakfast, transfer back. Easter-week travellers: extend by a day to ski peak-week sun.' },
      ]}
      seoTitle="Ylläs Accommodation — Log Cabins & Chalets from €150/Night"
      seoDescription="Where to stay in Ylläs, Finnish Lapland: log cabins from €150/night, lakeside villas and ski-in chalets inside Pallas-Yllästunturi National Park. Private saunas, aurora-facing shores, direct booking."
      seoKeywords={['yllas accommodation', 'ylläs cabin', 'ylläs log cabin', 'ylläs hotel', 'äkäslompolo villa', 'pallas-yllästunturi accommodation', 'ylläs chalet', 'where to stay in ylläs']}
    />
  )
}
