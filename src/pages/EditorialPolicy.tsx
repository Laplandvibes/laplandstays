import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Edit3, AlertCircle, Repeat, Mail } from 'lucide-react'
import SEO from '../components/SEO'
import Newsletter from '../components/Newsletter'

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'LaplandStays Editorial Policy — How We Test, What We Link To',
  description:
    'How LaplandStays verifies prices, names properties, handles affiliate independence, and corrects mistakes. Editorial standards for the LaplandStays accommodation guide.',
  author: {
    '@type': 'Person',
    name: 'Vesa Pesola',
    jobTitle: 'Editor / operator',
    worksFor: { '@type': 'Organization', name: 'Lapeso Oy' },
  },
  publisher: { '@type': 'Organization', name: 'LaplandStays', url: 'https://laplandstays.com' },
  datePublished: '2026-04-26',
  dateModified: '2026-04-26',
  mainEntityOfPage: 'https://laplandstays.com/editorial-policy',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://laplandstays.com/' },
    { '@type': 'ListItem', position: 2, name: 'Editorial Policy', item: 'https://laplandstays.com/editorial-policy' },
  ],
}

const principles = [
  {
    icon: ShieldCheck,
    title: 'Verified rates, every season',
    body: 'Every "from €X/night" claim is pulled from the operator\'s own booking page or Hotels.com. Prices are re-checked at least once per quarter and explicitly at the start of aurora season (September). Where a property is sold out for peak weeks we say so up front instead of routing readers to a 0-result search.',
  },
  {
    icon: Edit3,
    title: 'Named properties, not "premium 5-stars"',
    body: 'We reference Kakslauttanen Arctic Resort, Levin Iglut, Star Arctic, Aurora Village Ivalo, Wilderness Hotel Nellim and Muotka, Apukka Resort, Arctic TreeHouse Hotel, Nova Skyland, Lapland Hotels (Levi/Ylläs), Harriniva, Northern Lights Ranch, Octola — by name, with deep links. No anonymous "luxury cabin" without saying which.',
  },
  {
    icon: AlertCircle,
    title: 'Affiliate independence',
    body: 'LaplandStays earns an affiliate commission on bookings made through partner links (Hotels.com via CJ, EconomyBookings, GetYourGuide). The commission rate is similar across the partner programme, so it has no influence on which properties we recommend. We will recommend a non-affiliate operator (e.g. VR for trains) when it is the right answer — see the /transport page for an example.',
  },
  {
    icon: Repeat,
    title: 'Corrections, not silent edits',
    body: 'When we get something wrong, we fix it and log the change in the per-site command-center status page. Material changes (price corrections, property closures, schema updates) carry a date stamp on the relevant section. If you spot an error, email us at info@laplandvibes.com — usually same-day response from inside Lapland.',
  },
]

const sources = [
  { label: 'Hotels.com (CJ partner)', use: 'Real-time availability and seasonal "from" prices for the 12 anchor properties + city/region searches.' },
  { label: 'Operator booking pages', use: 'Direct rate verification when Hotels.com inventory is incomplete (e.g. Kakslauttanen own booking, Levin Iglut, Aurora Village).' },
  { label: 'EconomyBookings (CJ)', use: 'Car rental rates from KTT / RVN / IVL airports and Helsinki one-way pickups.' },
  { label: 'GetYourGuide partner programme', use: 'Activity inventory in Rovaniemi, Saariselkä, Levi, Ylläs, Inari (when an "Activities" surface is added).' },
  { label: 'VR (Finnish Railways)', use: 'Helsinki–Rovaniemi sleeper schedules and pricing. Editorial reference only — no affiliate.' },
  { label: 'Finnish Meteorological Institute & SpaceWeatherLive', use: 'Aurora frequency and Kp-index claims on /when-to-go and aurora-related copy.' },
  { label: 'Visit Finland & Lapland regional tourism', use: 'Sanity check on direct flight routes and seasonal opening dates.' },
]

export default function EditorialPolicy() {
  return (
    <>
      <SEO
        title="Editorial Policy — How We Test | LaplandStays"
        description="How LaplandStays verifies prices, names properties, maintains affiliate independence, and handles corrections. Editorial standards for the LaplandStays accommodation guide."
        canonicalPath="/editorial-policy"
        ogImage="https://laplandstays.com/og-default.jpg"
        keywords={['laplandstays editorial policy', 'how laplandstays works', 'lapland accommodation guide standards', 'affiliate independence', 'correction policy']}
        jsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />

      {/* Dark intro */}
      <section className="relative overflow-hidden bg-night text-white pt-28 sm:pt-32 pb-16 px-4 sm:px-6">
        <div
          aria-hidden="true"
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-pink opacity-[0.10] blur-[120px] rounded-full pointer-events-none"
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-4">Editorial</p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-wide mb-5">
            How We Test
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
            The standards LaplandStays runs on. Where the prices come from, how we handle affiliate
            relationships, what we do when we get it wrong.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">Four principles</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-10">
            What you can expect
          </h2>

          <ol className="space-y-8">
            {principles.map((p, i) => {
              const Icon = p.icon
              return (
                <li key={p.title} className="flex gap-5 items-start">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-pink/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-pink" />
                    </div>
                    <p className="font-heading text-2xl text-pink/40 mt-2 text-center leading-none">{String(i + 1).padStart(2, '0')}</p>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-night tracking-wide mb-2">{p.title}</h3>
                    <p className="text-charcoal/75 leading-relaxed text-[15px]">{p.body}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-night text-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">Where the data comes from</p>
          <h2 className="font-heading text-4xl sm:text-5xl tracking-wide mb-6">Sources we cite</h2>
          <p className="text-white/65 text-base leading-relaxed mb-8 max-w-2xl">
            Affiliate vs editorial: we earn a commission on the first four sources, none on the last three.
            That distinction never changes which source we send you to — it changes which one we say so about.
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/[0.04] text-left">
                  <th className="px-4 py-3 font-semibold text-white">Source</th>
                  <th className="px-4 py-3 font-semibold text-white">What we use it for</th>
                </tr>
              </thead>
              <tbody>
                {sources.map((s, i) => (
                  <tr key={s.label} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                    <td className="px-4 py-3 font-heading text-base text-pink whitespace-nowrap align-top">{s.label}</td>
                    <td className="px-4 py-3 text-white/75 text-[14px] leading-relaxed">{s.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reviewer */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">Who maintains this</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">The team behind LaplandStays</h2>
          <div className="bg-white border border-pink/15 rounded-2xl p-7 sm:p-8 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-full bg-pink/10 flex items-center justify-center shrink-0">
                <span className="font-heading text-3xl text-pink">VP</span>
              </div>
              <div>
                <p className="font-heading text-2xl text-night tracking-wide">Vesa Pesola</p>
                <p className="text-pink text-sm font-semibold uppercase tracking-widest mt-0.5 mb-3">Editor · Operator · Lapeso Oy</p>
                <p className="text-charcoal/75 leading-relaxed text-[15px]">
                  Vesa runs Lapeso Oy from Finnish Lapland and edits LaplandStays plus the wider #LaplandVibes ecosystem.
                  Every page on this site is reviewed by Vesa before publication and every quarter for price drift. Editorial
                  questions, partnership enquiries, corrections:{' '}
                  <a href="mailto:info@laplandvibes.com" className="text-pink font-semibold hover:underline">info@laplandvibes.com</a>{' '}
                  — usually same-day response from inside Lapland.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corrections */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">If we got it wrong</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">Correction process</h2>
          <div className="space-y-5 text-charcoal/75 text-lg leading-relaxed">
            <p>
              Travel data drifts. Prices move, properties close, flight routes get cut. When we publish something that's
              no longer accurate, we'd rather hear it from a reader than have a reader miss their dates because of it.
            </p>
            <p>
              <strong className="text-night">How to flag it:</strong> email{' '}
              <a href="mailto:info@laplandvibes.com" className="text-pink font-semibold hover:underline">info@laplandvibes.com</a>{' '}
              with the page URL and the line that's off. We log it in the per-site status page (linked below) and update
              the public-facing copy within 1–3 days for non-urgent issues, same day for price errors that could affect
              someone's booking.
            </p>
            <p>
              <strong className="text-night">What we never do:</strong> silent edits. Material corrections always get a
              changelog entry on the command-center status page, dated and described.
            </p>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 bg-pink/5 border border-pink/15 rounded-xl px-5 py-3">
            <Mail className="w-4 h-4 text-pink shrink-0" />
            <a href="mailto:info@laplandvibes.com" className="text-pink font-semibold text-sm">info@laplandvibes.com</a>
          </div>
        </div>
      </section>

      {/* Footer-style links */}
      <section className="py-16 px-4 sm:px-6 bg-night text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl tracking-wide mb-3">Read on</h2>
          <p className="text-white/65 mb-8 leading-relaxed">
            The other policy + reference pages that fill in the picture.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/about" className="border border-white/30 hover:border-pink/60 text-white hover:text-pink font-semibold py-3 px-6 rounded-xl transition-colors text-sm uppercase tracking-widest">About LaplandStays</Link>
            <Link to="/terms" className="border border-white/30 hover:border-pink/60 text-white hover:text-pink font-semibold py-3 px-6 rounded-xl transition-colors text-sm uppercase tracking-widest">Terms of Use</Link>
            <Link to="/privacy" className="border border-white/30 hover:border-pink/60 text-white hover:text-pink font-semibold py-3 px-6 rounded-xl transition-colors text-sm uppercase tracking-widest">Privacy Policy</Link>
            <Link to="/property-types" className="bg-pink hover:bg-pink/90 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-sm uppercase tracking-widest inline-flex items-center gap-2">
              Browse property types
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
