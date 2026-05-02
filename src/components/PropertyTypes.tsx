import { Sparkles, TreePine, Mountain, Gem, ArrowRight } from 'lucide-react'
import { HOTEL_SEARCH } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'

const types = [
  {
    icon: Sparkles,
    title: 'Glass Igloos & Aurora Cabins',
    short: 'Fall asleep beneath the Northern Lights.',
    body: 'Glass igloo Lapland at its purest — glass-roofed rooms at Kakslauttanen, Levin Iglut, Star Arctic and Aurora Village, built for travellers chasing the aurora forecast.',
    image: '/images/aurora-villas.webp',
    href: HOTEL_SEARCH.auroraGlass,
    campaign: 'aurora-glass',
    priceFrom: 'from €250/night',
  },
  {
    icon: TreePine,
    title: 'Lakeside Northern Lights Cabins',
    short: 'Sauna, frozen lake, silence.',
    body: 'Classic Lapland cabin stays — waterfront log cottages with private saunas, pine forest doorsteps and unobstructed aurora horizons over still Arctic water.',
    image: '/images/lakeside-cabins.webp',
    href: HOTEL_SEARCH.lakesideCabin,
    campaign: 'lakeside-cabin',
    priceFrom: 'from €150/night',
  },
  {
    icon: Mountain,
    title: 'Ski-in Chalets & Lapland Hotels',
    short: 'Wake up on the slope.',
    body: 'Ski-in chalets and Lapland Hotels apartments on Levi, Ylläs and Pyhä — step out of the door, click in, go. Walkable restaurants, full safari pickups.',
    image: '/images/mountain-chalets.webp',
    href: HOTEL_SEARCH.mountainChalet,
    campaign: 'mountain-chalet',
    priceFrom: 'from €100/night',
  },
  {
    icon: Gem,
    title: 'Arctic Treehouses & Designer Lodges',
    short: 'Quiet luxury in the wilderness.',
    body: 'Luxury Lapland accommodation with architectural conviction — Arctic TreeHouse Hotel, Muotka Wilderness Lodge and Nellim. Clean lines, warm wood, panoramic fell views.',
    image: '/images/designer-lodges.webp',
    href: HOTEL_SEARCH.designerLodge,
    campaign: 'designer-lodge',
    priceFrom: 'from €200/night',
  },
]

export default function PropertyTypes() {
  const onClick = (campaign: string, href: string) => () => {
    trackAffiliateClick('hotelscom', `property_type_${campaign.replace(/-/g, '_')}`, href)
  }

  return (
    <section id="property-types" className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">The collection</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-night tracking-wide">
            Four Types of Lapland Accommodation
          </h2>
          <p className="mt-5 text-charcoal/70 text-lg leading-relaxed">
            Glass igloos, northern lights cabins, ski-in chalets or designer wilderness lodges —
            pick the kind of night you came for. Verified nightly rates, direct booking, and
            availability for the dates you need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((type) => {
            const Icon = type.icon
            return (
              <a
                key={type.title}
                href={type.href}
                target="_blank"
                rel="sponsored nofollow noopener"
                onClick={onClick(type.campaign, type.href)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col bg-night"
              >
                {/* Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-pink/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Copy band — text fully BELOW the image */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl sm:text-2xl font-heading text-white tracking-wide mb-1.5">
                    {type.title}
                  </h3>
                  <p className="text-pink/90 text-sm font-semibold mb-3">{type.short}</p>
                  <p className="text-white/70 text-sm leading-relaxed mb-4 flex-1">{type.body}</p>
                  <p className="text-amber text-xs font-bold uppercase tracking-widest mb-4">
                    {type.priceFrom}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white text-sm font-semibold uppercase tracking-wider group-hover:text-pink transition-colors">
                    Check availability
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
