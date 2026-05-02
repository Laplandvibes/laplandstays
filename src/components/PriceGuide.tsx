import { ArrowRight, Sparkles, TreePine, Snowflake, Mountain, Building2 } from 'lucide-react'
import { HOTEL_SEARCH, buildHotelSearch } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'
import AffiliateDisclosure from './AffiliateDisclosure'

const tiers = [
  {
    icon: Sparkles,
    name: 'Glass Igloos',
    keyword: 'glass igloo lapland',
    range: '€250 – €1,500',
    note: 'per night, per igloo',
    examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
    body: 'Glass-roofed rooms and igloos built specifically for aurora viewing. Priciest category — glass roofs, remote locations and limited inventory mean Kakslauttanen books 8–12 months ahead.',
    cta: HOTEL_SEARCH.auroraGlass,
    campaign: 'price-glass-igloo',
    ctaLabel: 'Find Glass Igloos',
  },
  {
    icon: TreePine,
    name: 'Aurora & Northern Lights Cabins',
    keyword: 'northern lights cabin',
    range: '€150 – €700',
    note: 'per night, per cabin',
    examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
    body: 'Classic Lapland cabin stays with aurora-facing windows, private saunas and forest surroundings. Best value-to-experience ratio for couples and small groups chasing the aurora.',
    cta: HOTEL_SEARCH.lakesideCabin,
    campaign: 'price-aurora-cabin',
    ctaLabel: 'Find Aurora Cabins',
  },
  {
    icon: Snowflake,
    name: 'Snow & Ice Hotels',
    keyword: 'snow hotel lapland',
    range: '€150 – €400',
    note: 'per night, seasonal only',
    examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
    body: 'One-night-only territory — carved from ice each December, melted each April. Warm changing rooms, thermal sleeping bags, and a story you will tell forever.',
    cta: buildHotelSearch('Kittilä, Finland', 'property_snow_hotel'),
    campaign: 'price-snow-hotel',
    ctaLabel: 'Find Snow Hotels',
  },
  {
    icon: Mountain,
    name: 'Wilderness Lodges',
    keyword: 'luxury lapland accommodation',
    range: '€200 – €600',
    note: 'per night, all-suite',
    examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
    body: 'Purpose-built for aurora hunters who want service. Small, remote, guided. Think all-inclusive wilderness — chef kitchens, husky access and a full safari menu from the lobby.',
    cta: HOTEL_SEARCH.designerLodge,
    campaign: 'price-wilderness-lodge',
    ctaLabel: 'Find Wilderness Lodges',
  },
  {
    icon: Building2,
    name: 'Lapland Hotels & Cabin Chains',
    keyword: 'lapland hotel',
    range: '€100 – €350',
    note: 'per night, per room',
    examples: ['Lapland Hotels (multiple resorts)', 'Harriniva (Muonio)'],
    body: 'The most reliable entry point — branded Lapland hotels and cabin chains across Levi, Ylläs, Saariselkä, Rovaniemi and Muonio. Walkable to restaurants, safaris leave from the door.',
    cta: HOTEL_SEARCH.hotel,
    campaign: 'price-hotel-chain',
    ctaLabel: 'Find Hotels & Cabins',
  },
]

export default function PriceGuide() {
  const onClick = (campaign: string, href: string) => () => {
    trackAffiliateClick('hotelscom', campaign, href)
  }

  return (
    <section id="price-guide" className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-pink/5 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            Lapland accommodation prices
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-night tracking-wide">
            What a Night in Lapland Actually Costs
          </h2>
          <p className="mt-5 text-charcoal/70 text-lg leading-relaxed">
            Verified nightly rates across 18 properties in Finnish Lapland — from budget Lapland
            hotels at €100 a night to aurora glass igloos that can reach €1,500. No averages, no
            invented numbers: these are the actual price windows we see on operator booking pages.
          </p>
          <AffiliateDisclosure variant="compact" lang="en" className="mt-6" />
        </div>

        <div className="grid grid-cols-1 gap-5">
          {tiers.map((tier) => {
            const Icon = tier.icon
            return (
              <div
                key={tier.name}
                className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-pink/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
                  {/* Icon + name */}
                  <div className="flex items-center gap-4 lg:w-80 shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-pink/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-pink" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl text-night tracking-wide">{tier.name}</h3>
                      <p className="text-xs text-charcoal/50 uppercase tracking-widest mt-0.5">
                        {tier.keyword}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="lg:w-60 shrink-0">
                    <p className="font-heading text-3xl sm:text-4xl text-amber tracking-wide whitespace-nowrap">
                      {tier.range}
                    </p>
                    <p className="text-xs text-charcoal/50 uppercase tracking-wider">{tier.note}</p>
                  </div>

                  {/* Body + examples + CTA */}
                  <div className="flex-1 min-w-0">
                    <p className="text-charcoal/75 leading-relaxed mb-3">{tier.body}</p>
                    <p className="text-sm text-charcoal/60 mb-4">
                      <span className="font-semibold text-night">Properties:</span>{' '}
                      {tier.examples.join(' · ')}
                    </p>
                    <a
                      href={tier.cta}
                      target="_blank"
                      rel="sponsored nofollow noopener"
                      onClick={onClick(tier.campaign, tier.cta)}
                      className="inline-flex items-center gap-2 text-pink hover:text-pink/80 font-semibold text-sm uppercase tracking-wider transition-colors"
                    >
                      {tier.ctaLabel}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Booking note */}
        <div className="mt-10 bg-night rounded-2xl p-6 sm:p-8 text-center">
          <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            <span className="font-heading text-amber tracking-wide text-xl">Booking tip.</span>{' '}
            Glass igloos at Kakslauttanen and Levin Iglut book out <strong>8–12 months ahead</strong> for peak
            aurora season (November – March). If one of these is your anchor, reserve it first and
            plan the rest of the trip around that date.
          </p>
        </div>
      </div>
    </section>
  )
}
