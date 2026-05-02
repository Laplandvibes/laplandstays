import { MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { HOTEL_SEARCH } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'

const locations = [
  {
    name: 'Levi',
    slug: 'levi',
    tagline: 'The heart of Lapland luxury',
    description: 'Finland\'s biggest ski resort with a walkable village at the foot of the fell. Levi accommodation scatters outward from Lapland Hotels apartments in the centre to ski-in chalets and glass cabins at Levin Iglut — close enough for dinner in town, far enough for dark-sky aurora viewing.',
    image: '/images/levi-card.webp',
    highlights: ['Ski-in chalets', 'Restaurants & nightlife', 'Full safari menu'],
    searchUrl: HOTEL_SEARCH.levi,
    priceFrom: 'Lapland hotels from €100/night · glass igloos from €350',
  },
  {
    name: 'Ylläs',
    slug: 'yllas',
    tagline: 'Pristine Nordic wilderness',
    description: 'Two fells, the longest ski runs in Finland, and no resort overlay — Ylläs is the quieter sister. Ylläs accommodation means log cabins spaced out through Pallas-Yllästunturi National Park, ideal when silence and trail access matter more than the village buzz.',
    image: '/images/yllas-card.webp',
    highlights: ['Cross-country kingdom', 'Fell-view chalets', 'No crowds'],
    searchUrl: HOTEL_SEARCH.yllas,
    priceFrom: 'Log cabins from €150/night',
  },
  {
    name: 'Saariselkä',
    slug: 'saariselka',
    tagline: 'Gateway to the Arctic',
    description: 'Bordering Urho Kekkonen National Park, one of Europe\'s last great wildernesses. This is Saariselkä glass igloo country — Kakslauttanen, Star Arctic and Muotka — where glass-roofed rooms meet gold-panning rivers and the air gets properly cold.',
    image: '/images/saariselka-card.webp',
    highlights: ['Glass igloo country', 'National park access', 'Deep aurora zone'],
    searchUrl: HOTEL_SEARCH.saariselka,
    priceFrom: 'Kakslauttanen glass igloos from €400/night · wilderness lodges from €200',
  },
  {
    name: 'Inari',
    slug: 'inari',
    tagline: 'Sámi culture, Arctic lakes',
    description: 'Where Sámi heritage meets the vast, frozen Lake Inari. The most remote and exclusive of the four — Inari cabin stays on private lake shores, Nellim wilderness lodge, and aurora villas in Ivalo for travellers who measure a trip in stillness, not stops.',
    image: '/images/inari-card.webp',
    highlights: ['Lake Inari', 'Sámi culture', 'Far-north remoteness'],
    searchUrl: HOTEL_SEARCH.inari,
    priceFrom: 'Lakeside cabins from €200/night · Aurora Village from €300',
  },
]

export default function Locations() {
  return (
    <section id="destinations" className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">Where to stay in Lapland</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-night tracking-wide">
            Four Destinations, Four Different Trips
          </h2>
          <p className="mt-5 text-charcoal/70 text-lg leading-relaxed">
            Levi for easy access and village life. Ylläs for silence. Saariselkä for
            glass igloos under the aurora. Inari for the far-north quiet most travellers
            never reach.
          </p>
        </div>

        <div className="space-y-6">
          {locations.map((location, index) => (
            <div
              key={location.name}
              className={`group flex flex-col ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } rounded-2xl overflow-hidden bg-gray-50 hover:bg-pink/5 transition-colors duration-500 border border-gray-100`}
            >
              <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                <img
                  src={location.image}
                  alt={`${location.name}, Finnish Lapland`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="lg:w-1/2 p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-pink" />
                  <span className="text-pink text-sm uppercase tracking-widest font-semibold">{location.name}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-heading text-night tracking-wide mb-3">
                  {location.tagline}
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-6">{location.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {location.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs uppercase tracking-wider text-charcoal/70 bg-pink/10 px-3 py-1.5 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <p className="text-sm font-semibold text-night mb-6">
                  <span className="text-pink">Prices:</span> {location.priceFrom}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <a
                    href={location.searchUrl}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    onClick={() => trackAffiliateClick('hotelscom', `locations_${location.slug}`, location.searchUrl)}
                    className="inline-flex items-center justify-center gap-2 bg-pink hover:bg-pink/90 text-white px-6 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
                  >
                    Check availability
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    to={`/destinations/${location.slug}`}
                    className="inline-flex items-center gap-2 text-charcoal/70 hover:text-pink font-semibold text-sm uppercase tracking-wider transition-colors"
                  >
                    Guide to {location.name}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
