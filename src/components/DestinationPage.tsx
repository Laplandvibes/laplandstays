import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Sparkles, Thermometer, Bell, Snowflake, Plane, Bus, Car as CarIcon, Train } from 'lucide-react'
import SEO from './SEO'
import Newsletter from './Newsletter'
import AffiliateDisclosure from './AffiliateDisclosure'
import { buildHotelSearch, buildAffiliateUrl } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'

export interface DestinationAnchor {
  name: string
  /** Either pass a pre-built `href` OR a Hotels.com `propertyQuery` and the
   *  component will build a destination-specific affiliate URL with the given
   *  `sid`. Using `propertyQuery` is preferred — it puts the destination-
   *  specific SID into the URL so CJ Reports can break down clicks per anchor. */
  href?: string
  propertyQuery?: string
  sid: string
  /** One-line note shown under the property name. Optional. */
  note?: string
}

export interface TransportRow {
  /** Icon kind. Default `bus`. */
  mode?: 'plane' | 'bus' | 'car' | 'train'
  /** Short label, e.g. "From KTT airport". */
  label: string
  /** Concrete detail with price/duration. e.g. "Bus €8 · 25 min · 7 daily". */
  detail: string
}

export interface DestinationPageProps {
  slug: string
  name: string
  tagline: string
  description: string
  heroImage: string
  ogImage?: string
  accentColor?: string
  facts: { label: string; value: string }[]
  highlights: { title: string; body: string }[]
  whenToGo: string
  howToGet: string
  stayTypes: string[]
  /** Named anchor properties to deep-link via Hotels.com `?ss=PROPERTY`. */
  anchorProperties?: DestinationAnchor[]
  /** Transport rows shown in the "Getting there" panel. Real prices/durations. */
  transport?: TransportRow[]
  /** Optional 4–5-day sample itinerary. Renders as numbered cards. */
  dayPlan?: { day: string; title: string; body: string }[]
  /** Optional EconomyBookings car-rental CTA card shown after the transport panel. */
  carRental?: {
    href: string
    sid: string
    /** Airport label e.g. "Kittilä Airport (KTT)". */
    airport: string
    /** Headline rate or note, e.g. "From €35/day" or "Same-day pickup". */
    blurb?: string
  }
  siblings: { name: string; href: string; blurb: string }[]
  seoTitle: string
  seoDescription: string
  seoKeywords: string[]
}

const transportIcon: Record<NonNullable<TransportRow['mode']>, typeof Plane> = {
  plane: Plane,
  bus: Bus,
  car: CarIcon,
  train: Train,
}

export default function DestinationPage(p: DestinationPageProps) {
  const searchUrl = buildHotelSearch(`${p.name}, Finland`, `destination_${p.slug}`)

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://laplandstays.com/' },
      { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://laplandstays.com/#destinations' },
      { '@type': 'ListItem', position: 3, name: p.name, item: `https://laplandstays.com/destinations/${p.slug}` },
    ],
  }

  const touristDestinationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: `${p.name}, Finnish Lapland`,
    description: p.seoDescription,
    url: `https://laplandstays.com/destinations/${p.slug}`,
    image: p.heroImage,
    geo: { '@type': 'GeoCoordinates', addressCountry: 'FI' },
    touristType: 'Luxury accommodation travellers, aurora hunters, families, couples',
  }

  const cityJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'City',
    name: p.name,
    url: `https://laplandstays.com/destinations/${p.slug}`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FI',
      addressRegion: 'Lapland',
      addressLocality: p.name,
    },
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'Lapland, Finland',
    },
  }

  return (
    <>
      <SEO
        title={p.seoTitle}
        description={p.seoDescription}
        canonicalPath={`/destinations/${p.slug}`}
        ogImage={p.ogImage ?? p.heroImage}
        keywords={p.seoKeywords}
        jsonLd={[breadcrumbJsonLd, touristDestinationJsonLd, cityJsonLd]}
      />

      {/* HERO — no breadcrumb inside the image */}
      <section className="relative min-h-[65vh] sm:min-h-[72vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={p.heroImage} alt={`${p.name}, Finnish Lapland`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-night/45 via-night/55 to-night/92" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-28 text-white">
          <p className="text-pink uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold mb-4 flex items-center gap-2 [text-shadow:0_2px_12px_rgba(0,0,0,0.9),0_0_24px_rgba(0,0,0,0.6)]">
            <MapPin className="w-4 h-4" /> Finnish Lapland
          </p>
          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl tracking-wide mb-4">{p.name}</h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/85 max-w-3xl leading-snug">{p.tagline}</p>
        </div>
      </section>

      {/* BREADCRUMB — directly below hero image, clean white band */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 text-xs sm:text-sm text-charcoal/60 flex items-center gap-2">
          <Link to="/" className="hover:text-pink transition-colors">Home</Link>
          <span className="text-charcoal/30">/</span>
          <Link to="/#destinations" className="hover:text-pink transition-colors">Destinations</Link>
          <span className="text-charcoal/30">/</span>
          <span className="text-charcoal font-semibold">{p.name}</span>
        </div>
      </nav>

      {/* OVERVIEW */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">Overview</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">Why stay in {p.name}</h2>
          <p className="text-charcoal/75 text-lg leading-relaxed whitespace-pre-line">{p.description}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {p.facts.map((f) => (
              <div key={f.label} className="bg-pink/5 border border-pink/20 rounded-2xl p-4 text-center">
                <p className="text-xs uppercase tracking-widest text-charcoal/50 mb-1">{f.label}</p>
                <p className="font-heading text-2xl text-night tracking-wide">{f.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={searchUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={() => trackAffiliateClick('hotelscom', `destination_overview_${p.slug}`, searchUrl)}
              className="inline-flex items-center gap-3 bg-pink hover:bg-pink/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-sm uppercase tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              See prices in {p.name}
              <ArrowRight className="w-4 h-4" />
            </a>
            <AffiliateDisclosure variant="compact" lang="en" className="mt-4 justify-start" />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">What makes it special</p>
            <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide">Highlights of {p.name}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.highlights.map((h) => (
              <div key={h.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <Sparkles className="w-6 h-6 text-pink mb-3" />
                <h3 className="font-heading text-2xl text-night tracking-wide mb-2">{h.title}</h3>
                <p className="text-charcoal/70 leading-relaxed text-[15px]">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHEN / HOW */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-night text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">When to go</p>
            <h3 className="font-heading text-3xl sm:text-4xl tracking-wide mb-4 flex items-center gap-3">
              <Thermometer className="w-7 h-7 text-pink" /> Seasons
            </h3>
            <p className="text-white/75 leading-relaxed whitespace-pre-line">{p.whenToGo}</p>
          </div>
          <div>
            <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">Getting there</p>
            <h3 className="font-heading text-3xl sm:text-4xl tracking-wide mb-4 flex items-center gap-3">
              <Bell className="w-7 h-7 text-pink" /> Travel
            </h3>
            <p className="text-white/75 leading-relaxed whitespace-pre-line">{p.howToGet}</p>
          </div>
        </div>
      </section>

      {/* WHAT TO BOOK */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">Stays in {p.name}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-8">What to book</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {p.stayTypes.map((s) => (
              <div key={s} className="flex items-start gap-3 bg-pink/5 border border-pink/20 rounded-2xl p-5">
                <Snowflake className="w-5 h-5 text-pink shrink-0 mt-0.5" />
                <p className="text-charcoal/80 leading-relaxed">{s}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-night rounded-2xl p-8 sm:p-10 text-center">
            <h3 className="font-heading text-3xl sm:text-4xl text-white tracking-wide mb-3">
              Find your {p.name} cabin
            </h3>
            <p className="text-white/65 mb-6">Check availability and compare rates — no middleman fees.</p>
            <a
              href={searchUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={() => trackAffiliateClick('hotelscom', `destination_book_${p.slug}`, searchUrl)}
              className="inline-flex items-center gap-2 bg-pink hover:bg-pink/90 text-white font-semibold px-8 py-4 rounded-xl transition-colors uppercase tracking-widest text-sm"
            >
              Check availability <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ANCHOR PROPERTIES & TRANSPORT */}
      {(p.anchorProperties || p.transport) && (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-night text-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {p.anchorProperties && p.anchorProperties.length > 0 && (
              <div>
                <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">Anchor properties</p>
                <h2 className="font-heading text-3xl sm:text-4xl tracking-wide mb-4">Where to stay in {p.name}</h2>
                <p className="text-white/65 text-base leading-relaxed mb-6">
                  Click through to verified Hotels.com rates. Properties book 4–8 months ahead in peak season.
                </p>
                <ul className="space-y-3">
                  {p.anchorProperties.map((a) => {
                    const finalHref = a.href ?? buildAffiliateUrl({
                      partner: 'hotels',
                      sid: a.sid,
                      destination: a.propertyQuery ?? a.name,
                    })
                    return (
                    <li key={a.name}>
                      <a
                        href={finalHref}
                        target="_blank"
                        rel="sponsored nofollow noopener"
                        onClick={() => trackAffiliateClick('hotelscom', a.sid, finalHref)}
                        className="group flex items-center justify-between gap-4 px-5 py-4 rounded-xl bg-white/[0.05] border border-white/10 hover:border-pink/40 hover:bg-white/[0.09] transition-all"
                      >
                        <div className="min-w-0">
                          <p className="font-heading text-lg text-white tracking-wide group-hover:text-pink transition-colors">{a.name}</p>
                          {a.note && <p className="text-sm text-white/55 leading-snug mt-0.5">{a.note}</p>}
                        </div>
                        <ArrowRight className="w-4 h-4 text-pink shrink-0 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {p.transport && p.transport.length > 0 && (
              <div>
                <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3">Getting there</p>
                <h2 className="font-heading text-3xl sm:text-4xl tracking-wide mb-4">Transport to {p.name}</h2>
                <p className="text-white/65 text-base leading-relaxed mb-6">
                  Real fares from operator pages — re-checked seasonally. Transfers usually pre-bookable through your property.
                </p>
                <ul className="space-y-3">
                  {p.transport.map((t, i) => {
                    const Icon = transportIcon[t.mode ?? 'bus']
                    return (
                      <li key={i} className="flex items-start gap-4 px-5 py-4 rounded-xl bg-white/[0.05] border border-white/10">
                        <div className="w-10 h-10 rounded-lg bg-pink/15 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-pink" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] uppercase tracking-widest text-white/55 font-semibold mb-1">{t.label}</p>
                          <p className="text-white text-[15px] leading-snug">{t.detail}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>

                {p.carRental && (
                  <a
                    href={p.carRental.href}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    onClick={() => trackAffiliateClick('economybookings', p.carRental!.sid, p.carRental!.href)}
                    className="mt-6 group flex items-center justify-between gap-4 px-5 py-4 rounded-xl bg-gradient-to-r from-pink/15 to-pink/5 border border-pink/30 hover:border-pink/60 hover:from-pink/25 hover:to-pink/15 transition-all"
                  >
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-widest text-pink font-semibold mb-1">Rent a car · EconomyBookings</p>
                      <p className="text-white text-[15px] leading-snug">
                        {p.carRental.airport}{p.carRental.blurb ? ` · ${p.carRental.blurb}` : ''}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-pink shrink-0 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* DAY PLAN */}
      {p.dayPlan && p.dayPlan.length > 0 && (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">Sample itinerary</p>
            <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-3">A {p.dayPlan.length}-day {p.name} plan</h2>
            <p className="text-charcoal/65 text-base leading-relaxed mb-10 max-w-2xl">
              The shape of a typical aurora-season trip. Adjust by skill level — these are starting points, not prescriptions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {p.dayPlan.map((d) => (
                <div key={d.day} className="flex gap-4 items-start bg-gradient-to-b from-pink/5 to-white border border-pink/10 rounded-2xl p-5">
                  <span className="font-heading text-3xl text-pink shrink-0 leading-none w-12">{d.day}</span>
                  <div>
                    <h3 className="font-heading text-xl text-night tracking-wide mb-1.5">{d.title}</h3>
                    <p className="text-charcoal/70 leading-relaxed text-[15px]">{d.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SIBLINGS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-3 text-center">More Lapland</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-10 text-center">
            Other destinations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {p.siblings.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-pink/40 hover:shadow-lg transition-all"
              >
                <h3 className="font-heading text-2xl text-night tracking-wide mb-2 group-hover:text-pink transition-colors">
                  {s.name}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed mb-4">{s.blurb}</p>
                <span className="inline-flex items-center gap-1 text-pink text-sm font-semibold">
                  See stays <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
