import { Thermometer, Bell, Flame, UtensilsCrossed, Snowflake, Mountain, ArrowRight } from 'lucide-react'
import { HOTEL_SEARCH, PROPERTY_SEARCH } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'

interface Amenity {
  icon: typeof Thermometer
  title: string
  body: string
  /** Where it's actually concentrated — short factual line, no fluff. */
  lookForIn: string
  /** 2–3 anchor properties / category links so the reader can act on it. */
  examples: { name: string; href: string; sid: string }[]
}

const amenities: Amenity[] = [
  {
    icon: Thermometer,
    title: 'Private sauna',
    body: 'The default in cabin and villa stays — wood-burning at premium tier, electric in apartments. Many lakeside cabins open straight onto the dock for the ice-hole plunge.',
    lookForIn: 'Standard in lakeside cabins and ski-in chalets. Rare in standard hotel rooms.',
    examples: [
      { name: 'Lakeside cabins', href: HOTEL_SEARCH.lakesideCabin, sid: 'amenity_sauna_lakeside_cabin' },
      { name: 'Wilderness Hotel Nellim', href: PROPERTY_SEARCH.nellim, sid: 'amenity_sauna_nellim' },
    ],
  },
  {
    icon: Bell,
    title: 'Aurora alarm',
    body: 'A wake-up service when conditions align — clear sky + Kp spike. Run by the property, not by an app you forget to install.',
    lookForIn: 'Kakslauttanen, Aurora Village Ivalo, Star Arctic, Levin Iglut, Apukka Resort.',
    examples: [
      { name: 'Kakslauttanen Arctic Resort', href: PROPERTY_SEARCH.kakslauttanen, sid: 'amenity_aurora_kakslauttanen' },
      { name: 'Aurora Village Ivalo', href: PROPERTY_SEARCH.auroraVillage, sid: 'amenity_aurora_aurora_village' },
    ],
  },
  {
    icon: Flame,
    title: 'Wood-burning fireplace',
    body: 'A real takka — not a gas insert. Properties stack the firewood; you light it. Smoke control vents are standard in modern cabins.',
    lookForIn: 'Designer lodges and lakeside cabins. Listed on the property page as "tulisija" or "fireplace".',
    examples: [
      { name: 'Designer lodges', href: HOTEL_SEARCH.designerLodge, sid: 'amenity_fireplace_designer' },
      { name: 'Wilderness Hotel Muotka', href: PROPERTY_SEARCH.muotka, sid: 'amenity_fireplace_muotka' },
    ],
  },
  {
    icon: UtensilsCrossed,
    title: 'Self-catering kitchen',
    body: 'Full-size oven, hob, fridge, often a dishwasher. Cabin chains stock starter coffee/salt/oil; bring the rest from the K-Market in the village.',
    lookForIn: 'Cabin and chalet rentals. Hotels and glass igloos usually skip this — book a hotel if you want restaurant breakfasts.',
    examples: [
      { name: 'Lakeside cabins', href: HOTEL_SEARCH.lakesideCabin, sid: 'amenity_kitchen_lakeside' },
      { name: 'Ski chalets', href: HOTEL_SEARCH.mountainChalet, sid: 'amenity_kitchen_chalet' },
    ],
  },
  {
    icon: Snowflake,
    title: 'Outdoor hot tub',
    body: '40 °C water, –20 °C air, aurora overhead — the trip everyone takes a photo of. Heated continuously; ready when you arrive.',
    lookForIn: 'Most ski chalets, premium lakeside cabins, and select wilderness lodges. Listed as "paljakka" on Finnish operator pages.',
    examples: [
      { name: 'Ski chalets at Levi', href: HOTEL_SEARCH.levi, sid: 'amenity_hottub_levi' },
      { name: 'Apukka Resort', href: PROPERTY_SEARCH.apukka, sid: 'amenity_hottub_apukka' },
    ],
  },
  {
    icon: Mountain,
    title: 'Ski-in / ski-out',
    body: 'Click in at the door, ride the gondola at the top of your run. Saves 20 minutes of carrying gear each morning — it adds up over a 5-day trip.',
    lookForIn: 'Levi (Levitunturi slopes), Ylläs (both fells), Pyhä. Saariselkä is mostly cross-country only.',
    examples: [
      { name: 'Levi ski chalets', href: HOTEL_SEARCH.levi, sid: 'amenity_ski_levi' },
      { name: 'Ylläs lodges', href: HOTEL_SEARCH.yllas, sid: 'amenity_ski_yllas' },
    ],
  },
]

export default function AmenitiesShowcase() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-night text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">What is in the room</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white tracking-wide">
            Six Filters That Decide the Trip
          </h2>
          <p className="mt-5 text-white/65 text-lg leading-relaxed">
            Use these as your search filters, not your wishlist. Each one points at the
            property categories where it's actually standard — and the operators we know
            list it plainly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity) => {
            const Icon = amenity.icon
            return (
              <div
                key={amenity.title}
                className="group flex flex-col p-7 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-pink/40 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-pink/15 flex items-center justify-center mb-5 group-hover:bg-pink/25 transition-colors">
                  <Icon className="w-6 h-6 text-pink" />
                </div>
                <h3 className="text-2xl font-heading text-white tracking-wide mb-3">{amenity.title}</h3>
                <p className="text-white/65 leading-relaxed mb-4 text-[15px]">{amenity.body}</p>

                <p className="text-[11px] uppercase tracking-widest text-white/45 font-semibold mb-2">Look for it in</p>
                <p className="text-sm text-white/70 leading-relaxed mb-4">{amenity.lookForIn}</p>

                <div className="mt-auto pt-3 border-t border-white/10 flex flex-wrap gap-2">
                  {amenity.examples.map((ex) => (
                    <a
                      key={ex.name}
                      href={ex.href}
                      target="_blank"
                      rel="sponsored nofollow noopener"
                      onClick={() => trackAffiliateClick('hotelscom', ex.sid, ex.href)}
                      className="text-[12px] px-2.5 py-1 rounded-full bg-pink/10 text-pink font-semibold hover:bg-pink hover:text-white transition-colors"
                    >
                      {ex.name}
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-14">
          <a
            href={HOTEL_SEARCH.lapland}
            target="_blank"
            rel="sponsored nofollow noopener"
            onClick={() => trackAffiliateClick('hotelscom', 'amenities_cta', HOTEL_SEARCH.lapland)}
            className="inline-flex items-center gap-3 bg-pink hover:bg-pink/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-sm uppercase tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Find a cabin with these
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
