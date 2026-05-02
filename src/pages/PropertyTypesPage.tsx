import { Link } from 'react-router-dom'
import type { ComponentType, SVGProps } from 'react'
import { ArrowRight, Sparkles, TreePine, Mountain, Gem, Check, X, MapPin } from 'lucide-react'
import PropertyTypes from '../components/PropertyTypes'
import AmenitiesShowcase from '../components/AmenitiesShowcase'
import Newsletter from '../components/Newsletter'
import SEO from '../components/SEO'
import AffiliateDisclosure from '../components/AffiliateDisclosure'
import ReviewedBy from '../components/ReviewedBy'
import { HOTEL_SEARCH, buildAffiliateUrl } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Property Types in Finnish Lapland — Aurora Villas, Log Cabins, Ski Chalets, Designer Lodges',
  description:
    'A guide to the four main accommodation categories in Finnish Lapland: which properties anchor each category, what they cost, and which one suits your trip.',
  author: {
    '@type': 'Person',
    name: 'Vesa Pesola',
    jobTitle: 'Editor / operator',
    worksFor: { '@type': 'Organization', name: 'Lapeso Oy' },
    url: 'https://laplandstays.com/editorial-policy',
  },
  publisher: { '@type': 'Organization', name: 'LaplandStays' },
  datePublished: '2026-01-10',
  dateModified: '2026-04-26',
  mainEntityOfPage: 'https://laplandstays.com/property-types',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://laplandstays.com/' },
    { '@type': 'ListItem', position: 2, name: 'Property Types', item: 'https://laplandstays.com/property-types' },
  ],
}

interface Anchor {
  name: string
  /** Hotels.com search query for the property — gets a destination-specific
   *  SID baked into the URL so CJ Reports breaks down clicks per anchor. */
  propertyQuery: string
  sid: string
}
interface Concentration { name: string; to: string }

interface CategoryProps {
  id: string
  eyebrow: string
  title: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  body: string
  priceRange: string
  priceNote: string
  bestFor: string[]
  avoidIf: string[]
  anchors: Anchor[]
  concentratedIn: Concentration[]
  ctaHref: string
  ctaSid: string
  ctaLabel: string
  image: string
  imageAlt: string
  bg: string
  imageSide: 'left' | 'right'
}

function AnchorPill({ name, propertyQuery, sid }: Anchor) {
  const href = buildAffiliateUrl({ partner: 'hotels', sid, destination: propertyQuery })
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener"
      onClick={() => trackAffiliateClick('hotelscom', sid, href)}
      className="text-[13px] px-3 py-1.5 rounded-full bg-pink/10 text-pink font-semibold hover:bg-pink hover:text-white transition-colors"
    >
      {name}
    </a>
  )
}

function CategorySection(p: CategoryProps) {
  const imageBlock = (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
      <img src={p.image} alt={p.imageAlt} loading="lazy" className="w-full h-full object-cover" />
      <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-pink/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
        <p.Icon className="w-6 h-6 text-white" />
      </div>
    </div>
  )

  const content = (
    <div>
      <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">{p.eyebrow}</p>
      <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-4">{p.title}</h2>
      <p className="text-charcoal/75 leading-relaxed text-lg mb-6">{p.body}</p>

      <div className="flex items-baseline gap-3 mb-7 pb-7 border-b border-night/10">
        <p className="font-heading text-3xl text-amber tracking-wide whitespace-nowrap">{p.priceRange}</p>
        <p className="text-xs text-charcoal/55 uppercase tracking-widest">{p.priceNote}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-7">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-night mb-3">Best for</p>
          <ul className="space-y-2">
            {p.bestFor.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-charcoal/80 leading-relaxed">
                <Check className="w-4 h-4 text-pink shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-night mb-3">Avoid if</p>
          <ul className="space-y-2">
            {p.avoidIf.map((a) => (
              <li key={a} className="flex items-start gap-2 text-sm text-charcoal/80 leading-relaxed">
                <X className="w-4 h-4 text-charcoal/40 shrink-0 mt-0.5" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-[11px] font-bold uppercase tracking-widest text-charcoal/55 mb-3">Anchor properties</p>
      <div className="flex flex-wrap gap-2 mb-7">
        {p.anchors.map((a) => (
          <AnchorPill key={a.name} {...a} />
        ))}
      </div>

      <div className="flex items-center gap-3 mb-7 text-sm">
        <MapPin className="w-4 h-4 text-charcoal/45 shrink-0" />
        <span className="text-charcoal/55 uppercase text-xs tracking-widest font-semibold">Concentrated in:</span>
        <div className="flex items-center gap-3">
          {p.concentratedIn.map((c, i) => (
            <span key={c.to} className="flex items-center gap-3">
              {i > 0 && <span className="text-charcoal/30">·</span>}
              <Link to={c.to} className="text-pink font-semibold hover:underline">
                {c.name}
              </Link>
            </span>
          ))}
        </div>
      </div>

      <a
        href={p.ctaHref}
        target="_blank"
        rel="sponsored nofollow noopener"
        onClick={() => trackAffiliateClick('hotelscom', p.ctaSid, p.ctaHref)}
        className="inline-flex items-center gap-2.5 bg-pink hover:bg-pink/90 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 text-sm uppercase tracking-widest shadow-md hover:shadow-lg hover:-translate-y-0.5"
      >
        {p.ctaLabel}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  )

  return (
    <section id={p.id} className={`py-20 sm:py-24 px-4 sm:px-6 ${p.bg}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {p.imageSide === 'left' ? (
          <>
            {imageBlock}
            {content}
          </>
        ) : (
          <>
            <div className="lg:order-2">{imageBlock}</div>
            <div className="lg:order-1">{content}</div>
          </>
        )}
      </div>
    </section>
  )
}

export default function PropertyTypesPage() {
  return (
    <>
      <SEO
        title="Lapland Property Types: Villas, Cabins, Chalets, Lodges"
        description="Glass aurora villas, lakeside log cabins, ski-in fell chalets and architect designer lodges. A guide to choosing the right Lapland property for your trip."
        canonicalPath="/property-types"
        ogImage="https://laplandstays.com/og-property-types.jpg"
        keywords={['Lapland aurora villa', 'Finnish log cabin', 'ski-in chalet Finland', 'designer lodge Lapland', 'glass igloo Finland']}
        jsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />

      {/* Dark intro band — gives the page presence without a heavy hero image */}
      <section className="relative overflow-hidden bg-night text-white pt-28 sm:pt-32 pb-16 px-4 sm:px-6">
        <div
          aria-hidden="true"
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-pink opacity-[0.12] blur-[120px] rounded-full pointer-events-none"
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-4">The collection</p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-wide mb-5">
            Choose Your Lapland
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Four categories cover 95% of premium Lapland stays. Pick the one that matches the
            kind of trip you want, not the other way around.
          </p>

          <div className="flex flex-wrap justify-center items-end gap-x-10 gap-y-5 mb-8 pt-6 border-t border-white/10">
            <div>
              <p className="font-heading text-3xl text-amber tracking-wide">4</p>
              <p className="text-[11px] text-white/55 uppercase tracking-widest mt-1">Categories</p>
            </div>
            <div>
              <p className="font-heading text-3xl text-amber tracking-wide">12+</p>
              <p className="text-[11px] text-white/55 uppercase tracking-widest mt-1">Anchor properties</p>
            </div>
            <div>
              <p className="font-heading text-3xl text-amber tracking-wide">€100–€1,500</p>
              <p className="text-[11px] text-white/55 uppercase tracking-widest mt-1">Per night, per category</p>
            </div>
          </div>

          <ReviewedBy variant="light" date="April 2026" className="mb-4" />
          <AffiliateDisclosure
            variant="compact"
            lang="en"
            className="text-white/60 [&>svg]:text-white/60"
          />
        </div>
      </section>

      {/* Quick-pick cards — link to Hotels.com per category */}
      <PropertyTypes />

      <CategorySection
        id="aurora-villas"
        eyebrow="Category 01 — Aurora glass villas"
        title="Glass igloos & aurora villas"
        Icon={Sparkles}
        body="Purpose-built for sky viewing — glass ceilings over the bed, usually 1–2 bedrooms, clustered in small resorts. The upside is unobstructed horizon-to-horizon aurora viewing from a warm bed. The tradeoff is privacy: you are close to neighbours, and inventory books out 8–12 months ahead for peak season."
        priceRange="€250 – €1,500"
        priceNote="per night, per igloo"
        bestFor={[
          'Couples and aurora photographers',
          'First aurora trip — short, high-impact',
          'Travellers who want zero compromise on the view',
        ]}
        avoidIf={[
          'You need deep silence and privacy',
          'Travelling with a large group',
          'On a tight budget — entry pricing is €250+',
        ]}
        anchors={[
          { name: 'Kakslauttanen Arctic Resort', propertyQuery: 'Kakslauttanen Arctic Resort', sid: 'property_aurora_kakslauttanen' },
          { name: 'Levin Iglut', propertyQuery: 'Levin Iglut', sid: 'property_aurora_levin_iglut' },
          { name: 'Star Arctic Hotel', propertyQuery: 'Star Arctic Hotel', sid: 'property_aurora_star_arctic' },
          { name: 'Aurora Village Ivalo', propertyQuery: 'Aurora Village Ivalo', sid: 'property_aurora_village' },
          { name: 'Nova Skyland', propertyQuery: 'Novasky Land Rovaniemi', sid: 'property_aurora_nova_skyland' },
          { name: 'Northern Lights Ranch', propertyQuery: 'Northern Lights Ranch Köngäs', sid: 'property_aurora_nlr' },
          { name: 'Arctic SnowHotel & Glass Igloos', propertyQuery: 'Arctic Snow Hotel', sid: 'property_aurora_arctic_snow' },
        ]}
        concentratedIn={[
          { name: 'Saariselkä', to: '/destinations/saariselka' },
          { name: 'Levi', to: '/destinations/levi' },
          { name: 'Inari', to: '/destinations/inari' },
          { name: 'Rovaniemi', to: '/destinations/rovaniemi' },
        ]}
        ctaHref={HOTEL_SEARCH.auroraGlass}
        ctaSid="property_aurora_glass_section_cta"
        ctaLabel="Check Aurora Villa availability"
        image="/images/aurora-villas.webp"
        imageAlt="Glass igloo bedroom under aurora skies in Finnish Lapland"
        bg="bg-white"
        imageSide="left"
      />

      <CategorySection
        id="lakeside-cabins"
        eyebrow="Category 02 — Lakeside log cabins"
        title="Lakeside northern lights cabins"
        Icon={TreePine}
        body="The classic Finnish sauna-and-lake format: a wood log cabin on a private shore, wood-burning sauna with direct lake access, dock with ice-hole in winter. Usually 4–8 guests. The most authentic category and the best value for longer stays — and the best aurora horizons when the lake faces north."
        priceRange="€150 – €700"
        priceNote="per night, per cabin"
        bestFor={[
          'Families and friend groups',
          'Long stays — best €/night value',
          'Travellers who want the sauna-and-lake rhythm',
        ]}
        avoidIf={[
          'You want walkable village amenities',
          'Travelling solo and dont need a full cabin',
          'You are renting for a single night',
        ]}
        anchors={[
          { name: 'Wilderness Hotel Nellim', propertyQuery: 'Wilderness Hotel Nellim', sid: 'property_lakeside_nellim' },
          { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'property_lakeside_muotka' },
          { name: 'Apukka Resort', propertyQuery: 'Apukka Resort Rovaniemi', sid: 'property_lakeside_apukka' },
          { name: 'Inari Lake Cottages', propertyQuery: 'Inari Lake', sid: 'property_lakeside_inari_lake' },
          { name: 'Lapland Hotels Ounasvaara', propertyQuery: 'Lapland Hotels Ounasvaara', sid: 'property_lakeside_ounasvaara' },
          { name: 'Harriniva (Muonio)', propertyQuery: 'Harriniva', sid: 'property_lakeside_harriniva' },
        ]}
        concentratedIn={[
          { name: 'Inari', to: '/destinations/inari' },
          { name: 'Rovaniemi', to: '/destinations/rovaniemi' },
          { name: 'Saariselkä', to: '/destinations/saariselka' },
        ]}
        ctaHref={HOTEL_SEARCH.lakesideCabin}
        ctaSid="property_lakeside_cabin_section_cta"
        ctaLabel="Check Lakeside Cabin availability"
        image="/images/lakeside-cabins.webp"
        imageAlt="Lakeside log cabin with private sauna in Finnish Lapland"
        bg="bg-gradient-to-b from-white to-pink/5"
        imageSide="right"
      />

      <CategorySection
        id="mountain-chalets"
        eyebrow="Category 03 — Ski-in mountain chalets"
        title="Ski-in chalets & Lapland Hotels"
        Icon={Mountain}
        body="Elevated properties on the slopes of Levi, Ylläs, Saariselkä and Pyhä — direct ski-in / ski-out access, gear drying rooms, often outdoor hot tubs. 6–12 guests is typical. Lapland Hotels apartments give the same locations at a lower price point. Expect peak-week premiums (New Year, mid-February, Easter)."
        priceRange="€100 – €350"
        priceNote="per night, per room or chalet"
        bestFor={[
          'Ski-led trips — slopes out the door',
          'Active groups with gear to dry',
          'First-time visitors who want walkable amenities',
        ]}
        avoidIf={[
          'You came primarily for the aurora horizon',
          'You want isolation and silence',
          'Travelling outside ski season — limited offer',
        ]}
        anchors={[
          { name: 'Hotel Levi Panorama', propertyQuery: 'Hotel Levi Panorama', sid: 'property_chalet_levi_panorama' },
          { name: 'Levi Hotel Spa', propertyQuery: 'Levi Hotel Spa', sid: 'property_chalet_levi_spa' },
          { name: 'Lapland Hotels Sirkantähti', propertyQuery: 'Lapland Hotels Sirkantähti', sid: 'property_chalet_sirkantahti' },
          { name: 'K5 Levi', propertyQuery: 'K5 Levi', sid: 'property_chalet_k5_levi' },
          { name: 'Lapland Hotels Saaga (Ylläs)', propertyQuery: 'Lapland Hotels Saaga', sid: 'property_chalet_saaga' },
          { name: 'Lapland Hotels Ylläskaltio', propertyQuery: 'Lapland Hotels Ylläskaltio', sid: 'property_chalet_yllaskaltio' },
          { name: 'Harriniva (Muonio)', propertyQuery: 'Harriniva', sid: 'property_chalet_harriniva' },
        ]}
        concentratedIn={[
          { name: 'Levi', to: '/destinations/levi' },
          { name: 'Ylläs', to: '/destinations/yllas' },
        ]}
        ctaHref={HOTEL_SEARCH.mountainChalet}
        ctaSid="property_mountain_chalet_section_cta"
        ctaLabel="Check Ski Chalet availability"
        image="/images/mountain-chalets.webp"
        imageAlt="Ski-in chalet on a Lapland fell slope"
        bg="bg-white"
        imageSide="left"
      />

      <CategorySection
        id="designer-lodges"
        eyebrow="Category 04 — Architect-designed lodges"
        title="Arctic treehouses & designer lodges"
        Icon={Gem}
        body="A small, premium category: architect-built contemporary properties with deliberate interiors, often on private plots with exceptional saunas and concierge-level service. Arctic TreeHouse Hotel set the template; Muotka and Nellim extend it into wilderness territory. Inventory is tight — book early."
        priceRange="€200 – €600"
        priceNote="per night, all-suite"
        bestFor={[
          'Honeymoons and milestone trips',
          'Design-conscious travellers',
          'Couples wanting privacy + service',
        ]}
        avoidIf={[
          'You prefer rustic over architectural',
          'Travelling with kids who want a resort',
          'You want urban amenities at the doorstep',
        ]}
        anchors={[
          { name: 'Arctic TreeHouse Hotel', propertyQuery: 'Arctic TreeHouse Hotel', sid: 'property_designer_arctic_treehouse' },
          { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'property_designer_muotka' },
          { name: 'Wilderness Hotel Nellim', propertyQuery: 'Wilderness Hotel Nellim', sid: 'property_designer_nellim' },
          { name: 'Octola Private Wilderness', propertyQuery: 'Octola Lodge', sid: 'property_designer_octola' },
          { name: 'Northern Lights Ranch', propertyQuery: 'Northern Lights Ranch Köngäs', sid: 'property_designer_nlr' },
          { name: 'Star Arctic Hotel', propertyQuery: 'Star Arctic Hotel', sid: 'property_designer_star_arctic' },
        ]}
        concentratedIn={[
          { name: 'Rovaniemi', to: '/destinations/rovaniemi' },
          { name: 'Inari', to: '/destinations/inari' },
        ]}
        ctaHref={HOTEL_SEARCH.designerLodge}
        ctaSid="property_designer_lodge_section_cta"
        ctaLabel="Check Designer Lodge availability"
        image="/images/designer-lodges.webp"
        imageAlt="Architect-designed lodge interior in Finnish Lapland"
        bg="bg-gradient-to-b from-white to-pink/5"
        imageSide="right"
      />

      <AmenitiesShowcase />
      <Newsletter />
    </>
  )
}
