import DestinationPage from '../components/DestinationPage'
import { HOTEL_SEARCH, CARS } from '../lib/affiliate'

export default function Saariselka() {
  return (
    <DestinationPage
      slug="saariselka"
      name="Saariselkä"
      tagline="The gateway to Urho Kekkonen National Park — premium cabins at the edge of Europe's last real wilderness."
      heroImage="/images/saariselka-hero.webp"
      ogImage="https://laplandstays.com/og-saariselka.jpg"
      description={`Saariselkä sits in Inari municipality, 250 km north of the Arctic Circle, at the treeline. To the east stretches Urho Kekkonen National Park — 2,550 square kilometres of near-untouched fell, river and old-growth forest, one of the largest wilderness areas in the EU.

The village is small and walkable, grouped around a few hotels, restaurants and ski slopes. Premium cabins sit along the road to Ivalo and on the edge of the national park. The position matters: you can step from your door into an afternoon of husky sledding, then return for a private sauna under aurora on the same evening.`}
      facts={[
        { label: 'Glass igloos from', value: '€400/night' },
        { label: 'Wilderness lodges from', value: '€200/night' },
        { label: 'Aurora nights', value: '~200/yr' },
        { label: 'Nearest airport', value: 'IVL 25 min' },
      ]}
      highlights={[
        {
          title: 'UKK National Park on your doorstep',
          body: "Finland's second-largest protected area. Marked ski and hiking routes start from Saariselkä and run 60 km east into the wilderness.",
        },
        {
          title: 'Kaunispää fell viewpoint',
          body: 'The fell above the village has a road and lift to the top. Clear-horizon aurora viewing and summer midnight-sun panoramas.',
        },
        {
          title: 'Husky and reindeer kennels',
          body: 'Several working kennels within 20 minutes of the village run half-day and multi-day sled trips into the national park.',
        },
        {
          title: 'Aurora density',
          body: 'At this latitude the aurora oval passes overhead more often than at more southern destinations — you see lights on a wider range of Kp nights.',
        },
        {
          title: 'Tankavaara gold village',
          body: 'A 30-minute drive south: the actual gold-prospecting heritage of Lapland, with panning courses and the Gold Museum.',
        },
        {
          title: 'Quiet winter trails',
          body: 'Ski networks are substantial but usage is thin — kilometres of groomed track with almost no other skiers on a weekday morning.',
        },
      ]}
      whenToGo={`Late August – April is aurora season. October and February are the most settled, clear-sky windows.
December – March gives full snow cover and short, blue-lit days.
July – August is subarctic summer: midnight sun, hiking, river canoeing, no mosquitoes by September.`}
      howToGet={`Fly into Ivalo (IVL), 25 min transfer. Daily flights from Helsinki, seasonal direct routes from UK and Central Europe.
From Helsinki by overnight train to Rovaniemi + 3 hr drive, or direct charter flights in winter.
Car rental recommended — the best dark-sky cabin roads are a short drive from the village core.`}
      stayTypes={[
        'Aurora glass cabins at the edge of UKK park — small, 2-person, glass ceilings, no ambient light.',
        'Log villas on the Kakslauttanen side — 6–10 guests, private sauna, wood-burning fireplace, full wilderness silence.',
        'Ski-in apartments in the village — walkable to restaurants and the Kaunispää lift, good for families.',
        'Premium designer chalets toward Ivalo — larger plots, private lakes, the quietest listings in Lapland.',
      ]}
      siblings={[
        { name: 'Inari', href: '/destinations/inari', blurb: 'Further north on the great lake, Sami heartland.' },
        { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: "Lapland's capital, Santa Claus Village, more amenities." },
        { name: 'Levi', href: '/destinations/levi', blurb: 'The biggest village and easiest arrival in Lapland.' },
      ]}
      anchorProperties={[
        { name: 'Kakslauttanen Arctic Resort', propertyQuery: 'Kakslauttanen Arctic Resort', sid: 'destination_saariselka_kakslauttanen', note: 'The original glass igloos. Books 8–12 mo ahead for peak aurora.' },
        { name: 'Star Arctic Hotel', propertyQuery: 'Star Arctic Hotel', sid: 'destination_saariselka_star_arctic', note: 'On Kaunispää fell — glass-roofed rooms with the best Saariselkä village skyline.' },
        { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_saariselka_muotka', note: 'All-suite designer lodge with full safari programme.' },
        { name: 'All Saariselkä accommodation', href: HOTEL_SEARCH.saariselka, sid: 'destination_saariselka_all_search', note: 'Browse every Saariselkä property on Hotels.com.' },
      ]}
      transport={[
        { mode: 'plane', label: 'From Ivalo Airport (IVL)', detail: 'Direct winter flights from HEL · LHR · CDG. 30 km / 30 min south to Saariselkä village.' },
        { mode: 'bus', label: 'IVL airport bus', detail: '€15–20 one-way · 30 min · meets every flight.' },
        { mode: 'car', label: 'Taxi or pre-booked transfer', detail: '€40–60 to Saariselkä. Kakslauttanen and Muotka include private transfer at premium tier.' },
        { mode: 'train', label: 'Helsinki–Rovaniemi sleeper', detail: 'VR overnight train to Rovaniemi (~€90), then 4-hour bus or rental car. Slow alternative to flying IVL.' },
      ]}
      carRental={{
        href: CARS.fromIvalo,
        sid: 'destination_saariselka_cars_ivl',
        airport: 'Pickup at Ivalo Airport (IVL)',
        blurb: '30 min to Saariselkä · useful for the Inari/Lake Inari side-trip',
      }}
      dayPlan={[
        { day: '01', title: 'Arrive · glass igloo', body: 'IVL afternoon, transfer 30 min south, check into Kakslauttanen / Star Arctic / Muotka. Sauna, dinner, aurora-alarm armed.' },
        { day: '02', title: 'UKK national park snowshoe', body: 'Half-day guided snowshoe into Urho Kekkonen — gold-panning rivers, dwarf birch ridges. Lunch back at the property, second half free.' },
        { day: '03', title: 'Husky + reindeer day', body: 'Morning husky safari from Saariselkä village. Afternoon reindeer ride at a nearby Sami farm. Evening: ice-fishing or sauna lake plunge depending on Kp forecast.' },
        { day: '04', title: 'Slow morning · drive to Inari', body: 'Last igloo morning, drive 40 min north to Lake Inari for a Sami-culture day at Siida museum. Catch evening flight from IVL or extend by adding an Inari night.' },
      ]}
      seoTitle="Saariselkä Glass Igloos & Accommodation — from €200/Night"
      seoDescription="Where to stay in Saariselkä, Finnish Lapland: Kakslauttanen glass igloos from €400/night, wilderness lodges (Muotka, Star Arctic) from €200. On the edge of Urho Kekkonen National Park. Private saunas, dark skies, direct booking."
      seoKeywords={['saariselka accommodation', 'saariselkä glass igloo', 'kakslauttanen', 'star arctic hotel', 'muotka wilderness lodge', 'where to stay in saariselkä', 'ukk park accommodation', 'ivalo cabin']}
    />
  )
}
