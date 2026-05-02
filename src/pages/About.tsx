import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Mail, ShieldCheck, Edit3 } from 'lucide-react'
import SEO from '../components/SEO'
import ReviewedBy from '../components/ReviewedBy'
import Newsletter from '../components/Newsletter'

const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About LaplandStays',
  url: 'https://laplandstays.com/about',
  description:
    'LaplandStays is operated by Lapeso Oy in Finnish Lapland. Editorial accommodation guide — verified rates, named anchor properties, written by people who live in Lapland.',
  publisher: {
    '@type': 'Organization',
    name: 'Lapeso Oy',
    url: 'https://laplandstays.com',
    address: { '@type': 'PostalAddress', addressCountry: 'FI', addressRegion: 'Lapland' },
    email: 'info@laplandvibes.com',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://laplandstays.com/' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://laplandstays.com/about' },
  ],
}

export default function About() {
  return (
    <>
      <SEO
        title="About LaplandStays — Lapeso Oy, Finnish Lapland"
        description="Independently maintained accommodation guide for Finnish Lapland. Operated by Lapeso Oy. Editorial standards, affiliate transparency, contact details."
        canonicalPath="/about"
        ogImage="https://laplandstays.com/og-default.jpg"
        keywords={['about laplandstays', 'lapeso oy', 'lapland accommodation guide', 'who runs laplandstays']}
        jsonLd={[aboutPageJsonLd, breadcrumbJsonLd]}
      />

      {/* Dark intro */}
      <section className="relative overflow-hidden bg-night text-white pt-28 sm:pt-32 pb-16 px-4 sm:px-6">
        <div
          aria-hidden="true"
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-pink opacity-[0.10] blur-[120px] rounded-full pointer-events-none"
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-4">About</p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-wide mb-5">
            Real Lapland, Verified Rates
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed mb-6">
            LaplandStays is the accommodation directory we wished existed when our friends asked us
            where to stay. Operated from Finnish Lapland by Lapeso Oy.
          </p>
          <ReviewedBy variant="light" date="April 2026" />
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">Why we built this</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">
            One honest guide to where to sleep in Lapland
          </h2>
          <div className="space-y-5 text-charcoal/75 text-lg leading-relaxed">
            <p>
              Most Lapland accommodation listings online either invent prices ("from €99/night" for a property that
              hasn't opened that tier in six years), bury affiliate disclosures, or recommend the same five resorts on
              autopilot. We built LaplandStays as a corrective — a small, named-property guide that re-checks rates
              every season and tells you when something is sold out 12 months ahead instead of pretending otherwise.
            </p>
            <p>
              We are an editorial publisher, not a booking platform. When you click through to Hotels.com or one of our
              partners, the contract is between you and them — we do not handle reservations or payments. We earn an
              affiliate commission on bookings made through our links, but the commission rate is the same across our
              partner programme, so it has no influence on what we recommend.
            </p>
          </div>
        </div>
      </section>

      {/* Operator */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">Operator</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-8">Lapeso Oy</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <MapPin className="w-6 h-6 text-pink mb-3" />
              <h3 className="font-heading text-xl text-night tracking-wide mb-2">Based in Finland</h3>
              <p className="text-charcoal/70 text-[15px] leading-relaxed">
                Lapeso Oy is registered in Finland. We operate from inside Finnish Lapland — the team that writes
                LaplandStays lives, books, and saunas where our readers travel.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <Mail className="w-6 h-6 text-pink mb-3" />
              <h3 className="font-heading text-xl text-night tracking-wide mb-2">How to reach us</h3>
              <p className="text-charcoal/70 text-[15px] leading-relaxed">
                Editorial corrections, partnership questions, press: <br />
                <a href="mailto:info@laplandvibes.com" className="text-pink hover:underline font-semibold">info@laplandvibes.com</a> — usually same-day response.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-pink mb-3" />
              <h3 className="font-heading text-xl text-night tracking-wide mb-2">Editorial standards</h3>
              <p className="text-charcoal/70 text-[15px] leading-relaxed">
                Every price re-checked seasonally on operator pages. No invented stats. No "from €X" without a verified
                date. Affiliate links carry the EU-required <code className="text-pink text-sm">sponsored</code> rel attribute.
                See <Link to="/terms" className="text-pink hover:underline font-semibold">Terms</Link> §3.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <Edit3 className="w-6 h-6 text-pink mb-3" />
              <h3 className="font-heading text-xl text-night tracking-wide mb-2">What we cover</h3>
              <p className="text-charcoal/70 text-[15px] leading-relaxed">
                Glass igloos, lakeside cabins, ski-in chalets, designer lodges and Lapland Hotels in five destinations
                (Levi · Ylläs · Saariselkä · Inari · Rovaniemi). Aurora season Sep–Apr, midnight sun Jun–Jul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial principles */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">How we test</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-8">
            What you can expect from a LaplandStays review
          </h2>

          <ol className="space-y-5">
            <li className="flex gap-4 items-start">
              <span className="font-heading text-3xl text-pink shrink-0 leading-none w-12">01</span>
              <div>
                <h3 className="font-heading text-xl text-night tracking-wide mb-1">Named, verified properties</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We reference Kakslauttanen Arctic Resort, Levin Iglut, Star Arctic, Aurora Village Ivalo, Wilderness
                  Hotel Nellim and Muotka, Apukka, Arctic TreeHouse, Nova Skyland, Lapland Hotels, Harriniva — by name,
                  with deep links. No "premium 5-star property" without saying which one.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="font-heading text-3xl text-pink shrink-0 leading-none w-12">02</span>
              <div>
                <h3 className="font-heading text-xl text-night tracking-wide mb-1">Honest "from" prices</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Every "from €X/night" pulls from the operator's own booking page or Hotels.com — checked at least
                  once per season. If a property is sold out for peak weeks, we say so up front instead of routing
                  you to a 0-result search.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="font-heading text-3xl text-pink shrink-0 leading-none w-12">03</span>
              <div>
                <h3 className="font-heading text-xl text-night tracking-wide mb-1">"Best for / Avoid if" framing</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Glass igloos are not for groups. Ski chalets are not for aurora-only travellers. We tell you who a
                  category is for and who it isn't, instead of selling everything to everyone.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="font-heading text-3xl text-pink shrink-0 leading-none w-12">04</span>
              <div>
                <h3 className="font-heading text-xl text-night tracking-wide mb-1">Local detail</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Bus prices from KTT (€8), IVL (€15), RVN (€7). Which fells have ski-in / ski-out, which lakes face
                  north for aurora horizons, which months book out 12 months ahead. The kind of thing a friend in
                  Rovaniemi would tell you.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-night text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl sm:text-5xl tracking-wide mb-4">Ready when you are</h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Start with the destination that fits your trip — or browse the four property categories that cover 95% of
            premium Lapland stays.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/property-types"
              className="bg-pink hover:bg-pink/90 text-white font-semibold py-4 px-8 rounded-xl transition-colors text-sm uppercase tracking-widest inline-flex items-center justify-center gap-2"
            >
              Browse property types
              <ArrowRight className="w-4 h-4" />
            </Link>
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
