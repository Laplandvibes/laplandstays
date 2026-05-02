import DestinationPage from '../components/DestinationPage'
import { HOTEL_SEARCH, CARS } from '../lib/affiliate'

export default function Levi() {
  return (
    <DestinationPage
      slug="levi"
      name="Levi"
      tagline="Finland's biggest ski resort with restaurants, safaris and aurora cabins a short drive from the lifts."
      heroImage="/images/levi-hero.webp"
      ogImage="https://laplandstays.com/og-levi.jpg"
      description={`Levi sits in Kittilä municipality, roughly 170 km north of the Arctic Circle. It grew from a single lift in the 1960s into Finland's largest ski resort, with 43 slopes and 28 lifts served by a compact, walkable village centre.

It is the easiest entry point into luxury Lapland travel: Kittilä airport is 15 minutes away, the FIS World Cup slalom opens each November on Levi Black, and premium cabins are scattered through the surrounding fell landscape — close enough to the village for dinner, far enough for silence and dark-sky aurora viewing.`}
      facts={[
        { label: 'Hotels from', value: '€100/night' },
        { label: 'Glass igloos from', value: '€350/night' },
        { label: 'Nearest airport', value: 'KTT 15 min' },
        { label: 'Slopes', value: '43' },
      ]}
      highlights={[
        {
          title: 'Ski-in cabins on Levitunturi',
          body: 'Chalets on the slopes of Levifell give direct access to the gondola and the long blue and red runs that ring the mountain.',
        },
        {
          title: 'A walkable village with serious kitchens',
          body: 'The centre has Michelin-recommended restaurants, reindeer tasting menus, and a tight cluster of cafés — rare for a fell destination.',
        },
        {
          title: 'Full safari menu',
          body: 'Huskies, snowmobiles, reindeer sleds, aurora photography tours and ice-hole swimming all depart from pickup points inside the village.',
        },
        {
          title: 'Aurora dark-sky zones',
          body: 'Drive 15 minutes out of the village and light pollution drops to near zero. Cabins on the north side of the fell have the clearest horizon.',
        },
        {
          title: 'Summer fell biking and midnight sun',
          body: 'In June and July the sun does not set. Levi reopens gondolas and trails for downhill and cross-country mountain biking.',
        },
        {
          title: 'World Cup slalom kickoff',
          body: 'Every November the FIS Alpine Ski World Cup opens on Levi Black — the earliest, most reliable snow on the tour.',
        },
      ]}
      whenToGo={`November – March is peak: reliable snow, aurora nights, and full safari season.
Late August – October brings ruska (autumn colour) and the first aurora windows with no crowds.
June – July is the midnight sun window: 24-hour daylight and a different kind of cabin holiday.`}
      howToGet={`Fly into Kittilä (KTT). Direct winter routes from London, Paris, Amsterdam, Frankfurt, Zurich and Helsinki.
Transfer to Levi village is 15 km. Most premium cabins include private transfer.
From Helsinki, overnight trains to Kolari + 1-hour transfer is a scenic alternative.`}
      stayTypes={[
        'Aurora glass villas — glass-roofed bedrooms for horizon-to-horizon sky viewing, usually 2–4 guests.',
        'Ski-in chalets on the fell — 6–10 guests, private sauna, often with outdoor hot tub and gear drying room.',
        'Lakeside log cabins on Immeljärvi — quieter, forest setting, a few minutes drive from the village.',
        'Designer apartments in the village core — walkable to restaurants, good for first-time Lapland visitors.',
      ]}
      siblings={[
        { name: 'Ylläs', href: '/destinations/yllas', blurb: 'Quieter twin fells with Finland\'s longest ski runs.' },
        { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Gateway to UKK national park wilderness.' },
        { name: 'Inari', href: '/destinations/inari', blurb: 'Remote lake, Sami heritage and deep-north skies.' },
      ]}
      anchorProperties={[
        { name: 'Levin Iglut', propertyQuery: 'Levin Iglut', sid: 'destination_levi_levin_iglut', note: 'Glass igloos on the fell — peak weeks book 10–12 mo ahead.' },
        { name: 'Lapland Hotels Levi', propertyQuery: 'Lapland Hotels Levi', sid: 'destination_levi_lapland_hotels', note: 'Walkable village apartments and rooms from €100/night.' },
        { name: 'All Levi accommodation', href: HOTEL_SEARCH.levi, sid: 'destination_levi_all_search', note: 'Compare every Levi hotel and chalet on Hotels.com.' },
      ]}
      transport={[
        { mode: 'plane', label: 'From Kittilä Airport (KTT)', detail: 'Direct winter flights LHR · CDG · AMS · FRA · ZRH · HEL. 15 km / 20 min to Levi village.' },
        { mode: 'bus', label: 'KTT airport bus', detail: '€8 one-way · 25 min · meets every flight.' },
        { mode: 'car', label: 'Taxi or pre-booked transfer', detail: '€25–35 to village. Most premium cabins include private transfer.' },
        { mode: 'train', label: 'Overnight train to Kolari', detail: 'VR sleeper from Helsinki ~€90, then 1 h transfer to Levi. Scenic alternative in winter.' },
      ]}
      carRental={{
        href: CARS.fromKittila,
        sid: 'destination_levi_cars_ktt',
        airport: 'Pickup at Kittilä Airport (KTT)',
        blurb: '15 min from Levi village · winter studded tyres standard',
      }}
      dayPlan={[
        { day: '01', title: 'Arrive · settle · short ski', body: 'Land at KTT mid-afternoon, transfer to village, pick up rentals at Zero Point. One easy run before sunset to test gear and legs.' },
        { day: '02', title: 'Full ski day · evening sauna', body: 'Lifts open at 09:30. Lunch at Tuikku top of gondola. Down by 15:00, sauna at the cabin. Aurora alarm enabled before bed.' },
        { day: '03', title: 'Husky safari + village dinner', body: 'Morning husky-farm safari (book 2 weeks ahead). Walk the village afternoon — Kammi-Bar for reindeer, Saamen Kammi for traditional. Aurora-watch from Levi summit if Kp ≥ 4.' },
        { day: '04', title: 'Aurora cabin night · gentle day', body: 'Drive 15 min north to a glass igloo for the last night. Slow morning, sauna, watch the sky. Earliest possible flight home next morning.' },
      ]}
      seoTitle="Levi Accommodation: Hotels, Cabins & Igloos | LaplandStays"
      seoDescription="Where to stay in Levi, Lapland: Lapland Hotels from €100/night, glass igloos at Levin Iglut from €350, ski-in chalets from €200. 15 min from Kittilä airport. Verified rates, direct booking."
      seoKeywords={['levi accommodation', 'levi hotel', 'levi cabin rental', 'levi glass igloo', 'levin iglut', 'levi ski chalet', 'kittilä cabin', 'luxury levi accommodation']}
    />
  )
}
