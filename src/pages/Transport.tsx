import { Link } from 'react-router-dom'
import { ArrowRight, Plane, Bus, Car as CarIcon, Train } from 'lucide-react'
import SEO from '../components/SEO'
import AffiliateDisclosure from '../components/AffiliateDisclosure'
import ReviewedBy from '../components/ReviewedBy'
import Newsletter from '../components/Newsletter'
import TripCTA from '../components/TripCTA'
import { CARS, HOTEL_SEARCH, buildAffiliateUrl } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get to Finnish Lapland — Flights, Trains, Buses, Car Rental',
  description:
    'Compare Finnish Lapland transport options: which airport for which destination, real bus and taxi prices from KTT/RVN/IVL/ENF, the Helsinki overnight train, and when renting a car is worth it.',
  author: {
    '@type': 'Person',
    name: 'Vesa Pesola',
    jobTitle: 'Editor / operator',
    worksFor: { '@type': 'Organization', name: 'Lapeso Oy' },
    url: 'https://laplandstays.com/editorial-policy',
  },
  publisher: { '@type': 'Organization', name: 'LaplandStays' },
  datePublished: '2026-04-26',
  dateModified: '2026-04-26',
  mainEntityOfPage: 'https://laplandstays.com/transport',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://laplandstays.com/' },
    { '@type': 'ListItem', position: 2, name: 'Transport', item: 'https://laplandstays.com/transport' },
  ],
}

interface AirportRow {
  code: string
  iata: string
  name: string
  serves: string
  routes: string
  busPrice: string
  taxiPrice: string
  carsHref: string
  carsSid: string
  /** SID for the Trip.com flight CTA (HEL → this airport). */
  flightSid: string
}

const airports: AirportRow[] = [
  { code: 'RVN', iata: 'rvn', name: 'Rovaniemi', serves: 'Rovaniemi (8 km)', routes: 'Year-round HEL · winter LHR · CDG · BCN · MAD', busPrice: '€7 · 15 min', taxiPrice: '€15–25', carsHref: CARS.fromRovaniemi, carsSid: 'transport_cars_rvn', flightSid: 'transport_flight_hel_rvn' },
  { code: 'KTT', iata: 'ktt', name: 'Kittilä', serves: 'Levi (15 km) · Ylläs (50 km)', routes: 'Winter LHR · CDG · AMS · FRA · ZRH · HEL', busPrice: '€8 to Levi · €25–30 to Ylläs', taxiPrice: '€25–35 to Levi · €100–120 to Ylläs', carsHref: CARS.fromKittila, carsSid: 'transport_cars_ktt', flightSid: 'transport_flight_hel_ktt' },
  { code: 'IVL', iata: 'ivl', name: 'Ivalo', serves: 'Saariselkä (30 km) · Inari (40 km)', routes: 'Winter HEL · LHR · CDG · AMS', busPrice: '€15–20 to Saariselkä · €15 to Inari', taxiPrice: '€40–60 to Saariselkä · €60–80 to Inari', carsHref: CARS.fromIvalo, carsSid: 'transport_cars_ivl', flightSid: 'transport_flight_hel_ivl' },
  { code: 'ENF', iata: 'enf', name: 'Enontekiö', serves: 'Far north fells (Ylläs · Hetta)', routes: 'Limited winter HEL only', busPrice: 'Pre-booked transfer only', taxiPrice: '€80+', carsHref: CARS.generic, carsSid: 'transport_cars_enf', flightSid: 'transport_flight_hel_enf' },
]

export default function Transport() {
  const onClick = (sid: string, href: string) => () => trackAffiliateClick('economybookings', sid, href)
  const onHotels = (sid: string, href: string) => () => trackAffiliateClick('hotelscom', sid, href)

  // Derived helpers — Helsinki car rental for visitors who want to drive up
  const carsFromHelsinki = CARS.fromHelsinki
  // Build a Helsinki-Rovaniemi cars affiliate URL for the train+rent option
  const carsRovaniemiOneWay = buildAffiliateUrl({ partner: 'cars', sid: 'transport_cars_rvn_oneway', query: { pickup_location: 'RVN' } })

  return (
    <>
      <SEO
        title="How to Get to Lapland — Flights, Trains, Cars | LaplandStays"
        description="Compare Finnish Lapland transport: which airport for Levi / Ylläs / Saariselkä / Inari / Rovaniemi, real bus and taxi prices, the Helsinki overnight train, and when to rent a car."
        canonicalPath="/transport"
        ogImage="https://laplandstays.com/og-default.jpg"
        keywords={['how to get to lapland', 'flights to lapland', 'kittila airport', 'rovaniemi airport', 'ivalo airport', 'helsinki rovaniemi train', 'lapland car rental', 'lapland transport']}
        jsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />

      {/* Dark intro */}
      <section className="relative overflow-hidden bg-night text-white pt-28 sm:pt-32 pb-16 px-4 sm:px-6">
        <div
          aria-hidden="true"
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-pink opacity-[0.10] blur-[120px] rounded-full pointer-events-none"
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-4">Getting there</p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-wide mb-5">
            How to Get to Lapland
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Four airports, one overnight train from Helsinki, four real bus prices. Pick the airport that matches
            your destination and skip the European-style multi-stop misadventure.
          </p>
          <ReviewedBy variant="light" date="April 2026" className="mb-4" />
          <AffiliateDisclosure variant="compact" lang="en" className="text-white/55 [&>svg]:text-white/55" />
        </div>
      </section>

      {/* Airport comparison */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">By airport</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">
            Pick the airport, not the country
          </h2>
          <p className="text-charcoal/70 text-lg leading-relaxed mb-10 max-w-3xl">
            Finnish Lapland has four working airports. Most travellers default to Helsinki and add 12 hours of
            overland travel — usually unnecessary. Direct winter routes from London, Paris, Amsterdam and Frankfurt
            land you on the runway closest to your cabin.
          </p>

          <div className="space-y-5">
            {airports.map((a) => (
              <div key={a.code} className="bg-gradient-to-r from-pink/5 to-white border border-pink/10 rounded-2xl p-6 sm:p-7">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                  <div className="lg:col-span-3 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-pink/10 flex items-center justify-center">
                      <Plane className="w-6 h-6 text-pink" />
                    </div>
                    <div>
                      <p className="font-heading text-3xl text-night tracking-wide leading-none">{a.code}</p>
                      <p className="text-sm text-charcoal/55 mt-1">{a.name}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-charcoal/55 mb-1">Serves</p>
                    <p className="text-charcoal/85 text-[15px] leading-snug">{a.serves}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-charcoal/55 mb-1">Direct routes</p>
                    <p className="text-charcoal/85 text-[15px] leading-snug">{a.routes}</p>
                  </div>
                  <div className="lg:col-span-3 grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-charcoal/55 mb-1">Bus</p>
                      <p className="text-charcoal/85 text-[14px] leading-snug">{a.busPrice}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-charcoal/55 mb-1">Taxi</p>
                      <p className="text-charcoal/85 text-[14px] leading-snug">{a.taxiPrice}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-pink/10 flex flex-wrap gap-2">
                  <TripCTA
                    kind="flight"
                    from="hel"
                    to={a.iata}
                    sid={a.flightSid}
                    className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-pink text-white font-semibold hover:bg-pink/90 transition-colors"
                  >
                    Compare HEL → {a.code} flights
                    <ArrowRight className="w-3.5 h-3.5" />
                  </TripCTA>
                  <a
                    href={a.carsHref}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    onClick={onClick(a.carsSid, a.carsHref)}
                    className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-pink/10 text-pink font-semibold hover:bg-pink hover:text-white transition-colors"
                  >
                    Rent a car at {a.code}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Helsinki sleeper train */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-night text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">By rail</p>
            <h2 className="font-heading text-4xl sm:text-5xl tracking-wide mb-6">The Helsinki–Rovaniemi sleeper</h2>
            <div className="space-y-5 text-white/75 text-base leading-relaxed">
              <p>
                VR's overnight train leaves Helsinki around 19:00 and arrives in Rovaniemi at 08:00 — twelve hours
                of sleep instead of four hours of airport security plus a flight. Family-friendly, car-carriage
                option included.
              </p>
              <ul className="space-y-2.5 pl-5 text-[15px]">
                <li className="list-disc"><strong className="text-white">Couchette from ~€90</strong> per person, sleeper cabin from ~€140</li>
                <li className="list-disc"><strong className="text-white">Car carriage</strong> available — drive your own car off the train at Rovaniemi or Kolari</li>
                <li className="list-disc"><strong className="text-white">Kolari terminus</strong> is 35 km from Ylläs (better gateway than Rovaniemi for the western fells)</li>
                <li className="list-disc"><strong className="text-white">Restaurant car</strong> serves dinner; breakfast at the destination</li>
              </ul>
              <p>
                The train is the most popular family arrival route. Book direct on{' '}
                <a href="https://www.vr.fi" target="_blank" rel="noopener" className="text-pink hover:underline font-semibold">vr.fi</a>{' '}
                — usually 2–3 months ahead for peak weeks. We don't have an affiliate relationship with VR; that
                recommendation is purely editorial. If VR is sold out or you'd rather compare both rail and coach
                in one place, the global travel agents below cover both modes.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <TripCTA
                  kind="train"
                  fromCity="Helsinki"
                  toCity="Rovaniemi"
                  sid="transport_train_hel_rvn"
                  className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-white/10 text-white font-semibold hover:bg-pink hover:text-white transition-colors border border-white/20"
                >
                  <Train className="w-3.5 h-3.5" />
                  Compare HEL → RVN trains on Trip.com
                </TripCTA>
                <TripCTA
                  kind="bus"
                  fromCity="Helsinki"
                  toCity="Rovaniemi"
                  sid="transport_bus_hel_rvn"
                  className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-white/10 text-white font-semibold hover:bg-pink hover:text-white transition-colors border border-white/20"
                >
                  <Bus className="w-3.5 h-3.5" />
                  Or HEL → RVN coach
                </TripCTA>
              </div>
            </div>
          </div>
          <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 sm:p-8">
            <p className="text-[11px] uppercase tracking-widest text-pink font-semibold mb-4">Train + rental combo</p>
            <p className="text-white/85 text-base leading-relaxed mb-5">
              Many travellers take the sleeper to Rovaniemi, pick up a rental car at the station, and drive to their
              cabin. Saves a flight, gets you the romance of the train, and gives you wheels for the rest of the trip.
            </p>
            <a
              href={carsRovaniemiOneWay}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={onClick('transport_cars_rvn_oneway', carsRovaniemiOneWay)}
              className="inline-flex items-center gap-2.5 bg-pink hover:bg-pink/90 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-sm uppercase tracking-widest w-full justify-center"
            >
              <CarIcon className="w-4 h-4" />
              Rental car at Rovaniemi
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-[11px] text-white/45 mt-3 text-center">EconomyBookings · verified rates</p>
          </div>
        </div>
      </section>

      {/* When to rent a car */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">By car</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">
            When renting a car is worth it
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <CarIcon className="w-7 h-7 text-pink mb-3" />
              <h3 className="font-heading text-xl text-night tracking-wide mb-2">Yes — rent if</h3>
              <ul className="space-y-2 text-charcoal/75 text-[15px]">
                <li>• You're staying in a remote cabin (lakeside Inari, off-fell Ylläs, Muotka)</li>
                <li>• You want to drive between two destinations (Saariselkä → Inari → Rovaniemi)</li>
                <li>• You're a group of 3+ where taxi maths breaks down</li>
                <li>• You're skiing AND aurora-hunting and need flexibility for clear-sky drives</li>
              </ul>
              <a
                href={carsFromHelsinki}
                target="_blank"
                rel="sponsored nofollow noopener"
                onClick={onClick('transport_cars_helsinki', carsFromHelsinki)}
                className="mt-5 inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-pink/10 text-pink font-semibold hover:bg-pink hover:text-white transition-colors"
              >
                Compare Helsinki rates
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <Bus className="w-7 h-7 text-pink mb-3" />
              <h3 className="font-heading text-xl text-night tracking-wide mb-2">No — skip the car if</h3>
              <ul className="space-y-2 text-charcoal/75 text-[15px]">
                <li>• You're staying in Levi village (walkable, full safari pickups from your door)</li>
                <li>• You're at Kakslauttanen / Star Arctic (private transfer included on premium tier)</li>
                <li>• You're a couple at a single property — bus + taxi works out cheaper</li>
                <li>• You don't have winter-driving experience and roads might be –30 °C ice</li>
              </ul>
              <p className="mt-4 text-[13px] text-charcoal/55">
                Winter studded tyres are mandatory Dec 1 – Mar 31 and almost always already on the rental. Ask the
                operator if not specified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Within Lapland */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">Within Lapland</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">
            Distances to plan around
          </h2>
          <div className="space-y-3 text-[15px]">
            {[
              { from: 'Rovaniemi', to: 'Levi', dist: '170 km · 2 h drive · ~3 h bus' },
              { from: 'Rovaniemi', to: 'Saariselkä', dist: '270 km · 3 h drive · ~4 h bus' },
              { from: 'Levi', to: 'Ylläs', dist: '60 km · 50 min drive' },
              { from: 'Saariselkä', to: 'Inari', dist: '40 km · 35 min drive' },
              { from: 'Helsinki', to: 'Rovaniemi', dist: '830 km · 9 h drive · 12 h overnight train' },
              { from: 'Stockholm', to: 'Tromsø → Levi', dist: 'Long way round — fly direct to KTT instead' },
            ].map((row, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                <span className="font-heading text-base text-pink shrink-0 w-32">{row.from} →</span>
                <span className="font-heading text-base text-night shrink-0 w-32">{row.to}</span>
                <span className="text-charcoal/70 text-[14px]">{row.dist}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-night text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl sm:text-5xl tracking-wide mb-4">Lock dates first, transport second</h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Glass igloos book 8–12 months ahead — flights and trains can be added later. Find your cabin first,
            then optimise the route around the dates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={HOTEL_SEARCH.lapland}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={onHotels('transport_cta_lapland', HOTEL_SEARCH.lapland)}
              className="bg-pink hover:bg-pink/90 text-white font-semibold py-4 px-8 rounded-xl transition-colors text-sm uppercase tracking-widest inline-flex items-center justify-center gap-2"
            >
              See Lapland accommodation
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/when-to-go"
              className="border border-white/30 hover:border-pink/60 text-white hover:text-pink font-semibold py-4 px-8 rounded-xl transition-colors text-sm uppercase tracking-widest"
            >
              When to go
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
