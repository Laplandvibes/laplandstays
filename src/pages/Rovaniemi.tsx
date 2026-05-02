import DestinationPage from '../components/DestinationPage'
import { HOTEL_SEARCH, CARS } from '../lib/affiliate'

export default function Rovaniemi() {
  return (
    <DestinationPage
      slug="rovaniemi"
      name="Rovaniemi"
      tagline="The capital of Finnish Lapland — Santa Claus Village, two rivers, and direct aurora access from a full-service city."
      heroImage="/images/extra-2.webp"
      ogImage="https://laplandstays.com/og-rovaniemi.jpg"
      description={`Rovaniemi is the administrative capital of Finnish Lapland and the main international gateway. The city sits on the Arctic Circle, at the confluence of the Kemijoki and Ounasjoki rivers, with a population of about 65,000 — small by European standards, but by far the largest settlement in the region.

The mix is unusual: a working northern city with restaurants, the Arktikum science museum, and Aalto-designed civic architecture, alongside the original Santa Claus Village on the Arctic Circle line and a network of cabin areas within a short drive. For travellers who want aurora and wilderness but also want to fly home via a major airport, Rovaniemi is the natural base.`}
      facts={[
        { label: 'Nearest airport', value: 'RVN 10 min' },
        { label: 'Population', value: '~65,000' },
        { label: 'Arctic Circle', value: 'Runs through city' },
        { label: 'Santa Village', value: 'Open year-round' },
      ]}
      highlights={[
        {
          title: 'Santa Claus Village on the Arctic Circle',
          body: 'The original — a white line marks the Arctic Circle across the square, and Santa keeps office hours every day of the year.',
        },
        {
          title: 'Arktikum museum',
          body: 'Finland\'s finest museum of Arctic science, Sami culture and Lapland history — a 70-metre glass tube pointing north over the Ounasjoki.',
        },
        {
          title: 'Ranua Wildlife Park',
          body: 'A 75 km drive south: the world\'s northernmost zoo, with 50 Arctic and boreal species including polar bears, wolverines and lynx.',
        },
        {
          title: 'Ounasvaara fell inside the city',
          body: 'A ski hill, downhill bike park and aurora viewpoint — 10 minutes from the centre by car, no national-park drive required.',
        },
        {
          title: 'Flight connectivity',
          body: 'Rovaniemi airport has the widest winter route network in Lapland: direct to London, Paris, Frankfurt, Vienna, and dozens of charter routes.',
        },
        {
          title: 'River-side cabin belts',
          body: 'Properties along the Kemijoki and on Ounasvaara give aurora-ready dark skies within 15 minutes of restaurants and shopping.',
        },
      ]}
      whenToGo={`Mid-September – late March is aurora season; November – February is deepest winter.
"Kaamos" — the polar night — runs a few weeks either side of December 21. Blue twilight all day, no full sun.
June – July gives midnight sun and whitewater rapids at Oikaraisenkoski.`}
      howToGet={`Fly into Rovaniemi (RVN) — the best-connected airport in Lapland.
Finnish Railways runs overnight trains from Helsinki with car-carrier service direct to Rovaniemi station.
Onward car hire is easy; the city is the logistical base for inland Lapland road trips.`}
      stayTypes={[
        'River-side log cabins on the Kemijoki and Ounasjoki — 6–10 guests, sauna, fireplace, open river views.',
        'Glass aurora villas around Santa Claus Village — purpose-built for Arctic Circle experience with sky-view bedrooms.',
        'Designer apartments in the city centre — walkable to restaurants, a base for day-trip safari schedules.',
        'Ounasvaara fell-side chalets — ski-in in winter, bike trails in summer, aurora-ready horizon five minutes from downtown.',
      ]}
      siblings={[
        { name: 'Levi', href: '/destinations/levi', blurb: 'The biggest ski village in Finland, 2 hr north.' },
        { name: 'Ylläs', href: '/destinations/yllas', blurb: 'Quieter fell destination, 2 hr northwest.' },
        { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Wilderness gateway, 3 hr further north.' },
      ]}
      anchorProperties={[
        { name: 'Arctic TreeHouse Hotel', propertyQuery: 'Arctic TreeHouse Hotel', sid: 'destination_rovaniemi_arctic_treehouse', note: 'Architect-designed glass-front nest suites at Santa Claus Village.' },
        { name: 'Apukka Resort', propertyQuery: 'Apukka Resort Rovaniemi', sid: 'destination_rovaniemi_apukka', note: 'Lakeside aurora cabins 15 min from the city — full safari menu on site.' },
        { name: 'Nova Skyland', propertyQuery: 'Novasky Land', sid: 'destination_rovaniemi_nova_skyland', note: 'Newer glass-roofed apartments with skyline views from Ounasvaara fell.' },
        { name: 'All Rovaniemi accommodation', href: HOTEL_SEARCH.rovaniemi, sid: 'destination_rovaniemi_all_search', note: 'Browse every Rovaniemi hotel and cabin on Hotels.com.' },
      ]}
      transport={[
        { mode: 'plane', label: 'From Rovaniemi Airport (RVN)', detail: 'Year-round flights from HEL plus winter routes from LHR · CDG · BCN · MAD. 8 km / 15 min to city centre.' },
        { mode: 'bus', label: 'RVN airport bus', detail: '€7 one-way · 15 min to centre · meets every flight.' },
        { mode: 'car', label: 'Taxi to centre', detail: '€15–25. Most central hotels include shuttle in winter packages.' },
        { mode: 'train', label: 'Helsinki–Rovaniemi sleeper', detail: 'VR overnight train with car-carriage option, ~€90 in a couchette. The most popular family arrival route.' },
      ]}
      carRental={{
        href: CARS.fromRovaniemi,
        sid: 'destination_rovaniemi_cars_rvn',
        airport: 'Pickup at Rovaniemi Airport (RVN)',
        blurb: '8 km to city · the easiest pickup in Lapland · year-round availability',
      }}
      dayPlan={[
        { day: '01', title: 'Arrive · Santa Claus Village', body: 'RVN 8 km from city. Drop bags, head straight to Santa Claus Village (open year-round). Cross the Arctic Circle line, post a card. Dinner in town at Nili.' },
        { day: '02', title: 'Husky + ice-floating', body: 'Apukka or a nearby farm for a husky safari (book ahead). Afternoon dry-suit ice-floating on Ounasjoki — surprisingly warm, completely silent. Aurora window from Ounasvaara fell.' },
        { day: '03', title: 'Arktikum + city culture', body: 'Half-day at Arktikum (Sami + Lapland history museum, beautiful glass corridor). Lunch in city. Afternoon free — Lainio Snow Village day-trip if seasonal.' },
        { day: '04', title: 'Slow morning · onward', body: 'Last sauna, breakfast in town. Either fly home from RVN or rent a car and drive 2 h north to Levi for a second leg.' },
      ]}
      seoTitle="Rovaniemi Cabins & Aurora Villas — The Arctic Circle Capital"
      seoDescription="River-side log cabins, glass aurora villas and Santa Claus Village stays in Rovaniemi, Finnish Lapland. Arctic Circle access, major airport, direct booking."
      seoKeywords={['Rovaniemi cabin', 'Santa Claus Village accommodation', 'Rovaniemi aurora villa', 'Arctic Circle cabin', 'Ounasvaara chalet', 'Rovaniemi holiday']}
    />
  )
}
