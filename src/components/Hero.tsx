import { MapPin } from 'lucide-react'
import TravelSearchWidget from './TravelSearchWidget'

const HERO_IMG = '/images/hero.webp'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-night">
      {/* Image */}
      <div className="relative min-h-[85svh] sm:min-h-[92svh] flex items-center justify-center">
        {/* Real <img> instead of background-image so the browser registers
            it as the LCP element and the <link rel="preload"> in index.html
            actually feeds it. */}
        <img
          src={HERO_IMG}
          alt="Warm-lit luxury cabin in snowy Finnish Lapland under aurora skies"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        {/* Scrim for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/45 to-night" />

        {/* Hero copy */}
        <div className="relative z-10 text-center px-5 sm:px-6 max-w-3xl mx-auto pt-28 pb-32 sm:pb-40">
          <p className="text-pink uppercase tracking-[0.3em] text-[11px] sm:text-xs font-semibold mb-5 inline-flex items-center justify-center gap-2 [text-shadow:0_2px_12px_rgba(0,0,0,0.9),0_0_24px_rgba(0,0,0,0.6)]">
            <MapPin className="w-3.5 h-3.5" />
            Lapland Accommodation · Finland
          </p>
          <h1 className="font-heading text-snow leading-[1.05] tracking-wide text-[42px] sm:text-6xl lg:text-7xl mb-6">
            Where to Stay in Finnish Lapland
          </h1>
          <p className="text-snow/85 font-body text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Glass igloos under the aurora, northern lights cabins in the pine, and Lapland hotels
            with private saunas — verified nightly rates from €100 to €1,500, handpicked across
            Levi, Ylläs, Saariselkä and Inari.
          </p>
        </div>
      </div>

      {/* Widget: overlaps hero on desktop, flows into section on mobile */}
      <div id="search" className="relative z-20 -mt-24 sm:-mt-32 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <TravelSearchWidget defaultTab="hotels" />
          <p className="mt-4 text-center text-xs text-snow/55">
            <span aria-hidden="true">ⓘ </span>
            This page contains affiliate links. If you book through them, LaplandStays may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>
    </section>
  )
}
