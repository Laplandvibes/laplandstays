import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Snowflake, Sun, TreePine, Bell } from 'lucide-react'
import SEO from '../components/SEO'
import AffiliateDisclosure from '../components/AffiliateDisclosure'
import ReviewedBy from '../components/ReviewedBy'
import Newsletter from '../components/Newsletter'
import { HOTEL_SEARCH } from '../lib/affiliate'
import { trackAffiliateClick } from '../lib/analytics'

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'When to Visit Finnish Lapland — Month-by-Month Guide',
  description:
    'A month-by-month guide to Finnish Lapland: aurora season Sep–Apr, peak ski Jan–Mar, midnight sun Jun–Jul. When properties book out, what to expect from each month, what to budget.',
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
  mainEntityOfPage: 'https://laplandstays.com/when-to-go',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://laplandstays.com/' },
    { '@type': 'ListItem', position: 2, name: 'When to Go', item: 'https://laplandstays.com/when-to-go' },
  ],
}

interface MonthRow {
  m: string
  daylight: string
  aurora: string
  snow: string
  vibe: string
  bookingNote: string
  fromPrice: string
}

const months: MonthRow[] = [
  { m: 'September', daylight: '13 → 11 h', aurora: 'First windows · 30–40 % nights', snow: 'Ruska autumn colour, no snow yet', vibe: 'Quietest aurora-season month — beat the rush', bookingNote: 'Open inventory across all properties', fromPrice: '€100' },
  { m: 'October', daylight: '11 → 8 h', aurora: '40–50 % nights', snow: 'First snow late month', vibe: 'Late-ruska, early aurora', bookingNote: 'Best value-to-aurora ratio of the season', fromPrice: '€100' },
  { m: 'November', daylight: '7 → 3 h', aurora: '50–60 % nights · darkest skies', snow: 'Permanent snow cover from mid-month', vibe: 'Polar night begins, FIS Levi opens the World Cup', bookingNote: 'Glass igloos start filling for next-year peak', fromPrice: '€150' },
  { m: 'December', daylight: '2–4 h, "kaamos" polar night', aurora: '50–60 % nights', snow: 'Christmas-card snow', vibe: 'Christmas season — Santa, family travellers', bookingNote: 'Christmas week books 12 mo ahead', fromPrice: '€250' },
  { m: 'January', daylight: '4 → 7 h', aurora: '50–60 % · coldest, clearest', snow: 'Deepest snow', vibe: 'Genuine arctic — lows of −30 °C inland', bookingNote: 'New Year week books 10 mo ahead', fromPrice: '€200' },
  { m: 'February', daylight: '7 → 11 h', aurora: '50–60 % nights', snow: 'Peak depth', vibe: 'School holidays — busiest month with families', bookingNote: 'Mid-Feb half-term sells out 6–8 mo ahead', fromPrice: '€200' },
  { m: 'March', daylight: '11 → 13 h', aurora: '40–50 % · long evenings of darkness', snow: 'Still deep, sunny days', vibe: 'The secret month — light, snow, aurora, fewer crowds', bookingNote: 'Best-kept secret. Books 4–6 mo ahead', fromPrice: '€150' },
  { m: 'April', daylight: '13 → 17 h', aurora: '20–30 % · nights too bright by month-end', snow: 'Thawing in Rovaniemi, holding north', vibe: 'Easter ski + aurora, then meltdown', bookingNote: 'Easter week books out — rest of month soft', fromPrice: '€120' },
  { m: 'May', daylight: '17 → 21 h', aurora: 'Effectively none', snow: 'Mostly gone except northern fells', vibe: 'Shoulder month — no snow, no midnight sun yet', bookingNote: 'Cheapest month to visit', fromPrice: '€80' },
  { m: 'June', daylight: '24 h midnight sun', aurora: 'Impossible (sun never sets)', snow: 'None south of fells', vibe: 'Midnight sun, hiking, fishing, no insects yet', bookingNote: 'Open availability until midsummer week', fromPrice: '€100' },
  { m: 'July', daylight: '24 h then 22 h', aurora: 'Impossible', snow: 'None', vibe: 'Peak summer — mosquitoes inland, beach lakes', bookingNote: 'Domestic Finnish travellers fill cabins', fromPrice: '€100' },
  { m: 'August', daylight: '22 → 16 h', aurora: 'Last week — first windows return', snow: 'None', vibe: 'Late summer, ruska starting late month', bookingNote: 'Open inventory, last calm before aurora season', fromPrice: '€100' },
]

const seasonCards = [
  {
    icon: Sparkles,
    title: 'Peak aurora — Nov to Mar',
    body: 'Darkest, coldest, most consistent. Average 50–60 % cloud-free nights. Books out 6–12 months ahead at named glass-igloo properties.',
    color: 'text-pink',
  },
  {
    icon: Snowflake,
    title: 'Ski season — Dec to Apr',
    body: 'Levi opens with the FIS Slalom in Nov. Reliable cover Dec–Mar. Easter week is the last reliable ski week — Apr is meltdown south, fells hold north.',
    color: 'text-blue-400',
  },
  {
    icon: Sun,
    title: 'Midnight sun — Jun to mid-Jul',
    body: '24-hour daylight north of the Arctic Circle. No aurora possible. Quiet inventory, lower prices, Finnish domestic travellers in cabins.',
    color: 'text-amber',
  },
  {
    icon: TreePine,
    title: 'Ruska — late Aug to early Oct',
    body: 'The autumn colour weeks. Birches and rowan in red and gold. First aurora windows return mid-September. Best value-to-experience ratio in the year.',
    color: 'text-orange-400',
  },
]

export default function WhenToGo() {
  const onCta = (cta: string) => () => trackAffiliateClick('hotelscom', `whentogo_${cta}`, HOTEL_SEARCH.lapland)

  return (
    <>
      <SEO
        title="When to Visit Lapland — Month by Month | LaplandStays"
        description="Aurora season Sep–Apr, peak ski Jan–Mar, midnight sun Jun–Jul. Month-by-month guide to Finnish Lapland — when properties book out, daylight hours, what to expect, what to budget."
        canonicalPath="/when-to-go"
        ogImage="https://laplandstays.com/og-default.jpg"
        keywords={['when to visit lapland', 'best time lapland', 'aurora season finland', 'midnight sun lapland', 'lapland weather by month', 'lapland march', 'lapland new year']}
        jsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />

      {/* Dark intro */}
      <section className="relative overflow-hidden bg-night text-white pt-28 sm:pt-32 pb-16 px-4 sm:px-6">
        <div
          aria-hidden="true"
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-pink opacity-[0.10] blur-[120px] rounded-full pointer-events-none"
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-pink uppercase tracking-[0.3em] text-sm font-semibold mb-4">Planning</p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-wide mb-5">
            When to Go
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            The real Lapland calendar — when aurora windows open, when ski runs hold snow, when properties
            book out 12 months ahead, and which month is the secret bargain most travellers miss.
          </p>
          <ReviewedBy variant="light" date="April 2026" className="mb-4" />
          <AffiliateDisclosure variant="compact" lang="en" className="text-white/55 [&>svg]:text-white/55" />
        </div>
      </section>

      {/* Season cards */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">Four overlapping seasons</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-10">
            Pick the trip you came for
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {seasonCards.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="bg-gradient-to-b from-pink/5 to-white border border-pink/10 rounded-2xl p-6">
                  <Icon className={`w-7 h-7 ${s.color} mb-4`} />
                  <h3 className="font-heading text-xl text-night tracking-wide mb-2">{s.title}</h3>
                  <p className="text-charcoal/70 text-[15px] leading-relaxed">{s.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Month-by-month table */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-night text-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">Month by month</p>
          <h2 className="font-heading text-4xl sm:text-5xl tracking-wide mb-4">
            The Lapland calendar
          </h2>
          <p className="text-white/65 text-base leading-relaxed mb-8 max-w-3xl">
            Daylight hours, aurora frequency, snow status, and the booking-window reality for each month.
            Daylight figures are for Rovaniemi (66.5° N) — Saariselkä and Inari are darker in winter and
            lighter in summer.
          </p>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/[0.04] text-left">
                  <th className="px-4 py-3 font-semibold text-white">Month</th>
                  <th className="px-4 py-3 font-semibold text-white">Daylight</th>
                  <th className="px-4 py-3 font-semibold text-white">Aurora</th>
                  <th className="px-4 py-3 font-semibold text-white">Snow</th>
                  <th className="px-4 py-3 font-semibold text-white">Vibe</th>
                  <th className="px-4 py-3 font-semibold text-white">Booking</th>
                  <th className="px-4 py-3 font-semibold text-white">From</th>
                </tr>
              </thead>
              <tbody>
                {months.map((m, i) => (
                  <tr key={m.m} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                    <td className="px-4 py-3 font-heading text-base text-pink whitespace-nowrap">{m.m}</td>
                    <td className="px-4 py-3 text-white/75 whitespace-nowrap text-[13px]">{m.daylight}</td>
                    <td className="px-4 py-3 text-white/75 text-[13px]">{m.aurora}</td>
                    <td className="px-4 py-3 text-white/75 text-[13px]">{m.snow}</td>
                    <td className="px-4 py-3 text-white/75 text-[13px]">{m.vibe}</td>
                    <td className="px-4 py-3 text-white/75 text-[13px]">{m.bookingNote}</td>
                    <td className="px-4 py-3 font-heading text-amber whitespace-nowrap">{m.fromPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The secret month */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-pink/5">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink uppercase tracking-[0.3em] text-xs font-semibold mb-3">If you can pick one month</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-night tracking-wide mb-6">
            March is the secret
          </h2>
          <div className="space-y-5 text-charcoal/75 text-lg leading-relaxed">
            <p>
              Most aurora travellers come December–January because that's when the days are darkest. But March is
              the month travellers who've been before book again. Here's the maths:
            </p>
            <ul className="space-y-3 pl-5">
              <li className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-pink shrink-0 mt-1" />
                <span><strong className="text-night">11 hours of darkness, 13 hours of daylight</strong> — long enough night for aurora windows, long enough day for ski + safari without headtorch.</span>
              </li>
              <li className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-pink shrink-0 mt-1" />
                <span><strong className="text-night">Coldest snow still on the ground</strong> — peak depth across Levi, Ylläs, Saariselkä. Sunshine warms up to −5 °C, not −30 °C.</span>
              </li>
              <li className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-pink shrink-0 mt-1" />
                <span><strong className="text-night">Aurora windows still active</strong> — the auroral oval is most active around the spring equinox. March is statistically one of the best aurora-frequency months.</span>
              </li>
              <li className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-pink shrink-0 mt-1" />
                <span><strong className="text-night">Significantly cheaper</strong> — most properties drop 20–40 % vs Christmas/New Year, with school holidays in February already past.</span>
              </li>
            </ul>
            <p className="pt-2">
              The catch: Easter week (March/April depending on year) books out — Finnish domestic travel fills cabins.
              Aim for the first three weeks of March if you can.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-night text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl sm:text-5xl tracking-wide mb-4">Pick your month, lock the dates</h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Glass igloos at Kakslauttanen and Levin Iglut book 8–12 months ahead. Easter week in Lapland Hotels
            fills 6 months ahead. The earlier you decide on the month, the wider the inventory.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={HOTEL_SEARCH.lapland}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={onCta('lapland_search')}
              className="bg-pink hover:bg-pink/90 text-white font-semibold py-4 px-8 rounded-xl transition-colors text-sm uppercase tracking-widest inline-flex items-center justify-center gap-2"
            >
              See prices in Lapland
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/property-types"
              className="border border-white/30 hover:border-pink/60 text-white hover:text-pink font-semibold py-4 px-8 rounded-xl transition-colors text-sm uppercase tracking-widest"
            >
              Browse property types
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
