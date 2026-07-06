import { MapPin } from 'lucide-react'
import TravelSearchWidget from './TravelSearchWidget'
import { useCopy } from '../locales/copy'

const isSummerSeason = () => {
  const m = new Date().getMonth() + 1
  return m >= 5 && m <= 9
}

// Responsive hero: mobile pulls the 800px AVIF (~33KB) instead of the full
// 1536–1920px image. The <link rel=preload imagesrcset> in index.html feeds the
// matching variant before React mounts so it is the LCP element.
const HERO = isSummerSeason()
  ? {
      base: '/images/hero-summer.webp',
      avif: '/images/hero-summer-800.avif 800w, /images/hero-summer-1200.avif 1200w',
      webp: '/images/hero-summer-800.webp 800w, /images/hero-summer-1200.webp 1200w, /images/hero-summer.webp 1536w',
    }
  : {
      base: '/images/hero.webp',
      avif: '/images/hero-800.avif 800w, /images/hero-1200.avif 1200w, /images/hero.avif 1920w',
      webp: '/images/hero-800.webp 800w, /images/hero-1200.webp 1200w, /images/hero.webp 1920w',
    }

export default function Hero() {
  const c = useCopy().hero
  // Same season check that drives HERO_IMG, so the hero TEXT matches the hero
  // IMAGE: summer (May–Sep) = midnight-sun copy, winter = aurora/igloo copy.
  const lead = isSummerSeason() ? c.leadSummer ?? c.lead : c.lead
  return (
    <section className="relative overflow-hidden bg-night">
      {/* Image */}
      <div className="relative min-h-[90svh] sm:min-h-screen flex items-center justify-center">
        {/* Responsive hero (avif → webp → original). Mobile pulls the 800px
            variant; the preload in index.html feeds the same one before mount. */}
        <picture>
          <source type="image/avif" srcSet={HERO.avif} sizes="100vw" />
          <source type="image/webp" srcSet={HERO.webp} sizes="100vw" />
          <img
            src={HERO.base}
            alt="Luxury cabin retreat in Finnish Lapland"
            className="absolute inset-0 w-full h-full object-cover object-[center_38%]"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
          />
        </picture>

        {/* Scrim for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/45 to-night" />

        {/* Hero copy */}
        <div className="relative z-10 text-center px-5 sm:px-6 max-w-3xl mx-auto pt-28 pb-32 sm:pb-40">
          <p className="text-pink uppercase tracking-[0.3em] text-[11px] sm:text-xs font-semibold mb-5 inline-flex items-center justify-center gap-2 [text-shadow:0_2px_12px_rgba(0,0,0,0.9),0_0_24px_rgba(0,0,0,0.6)]">
            <MapPin className="w-3.5 h-3.5" />
            {c.eyebrow}
          </p>
          <h1 className="font-heading text-snow leading-[1.05] tracking-wide text-[42px] sm:text-6xl lg:text-7xl mb-6">
            {c.h1}
          </h1>
          <p className="text-snow/85 font-body text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            {lead}
          </p>
        </div>
      </div>

      {/* Widget: overlaps hero on desktop, flows into section on mobile */}
      <div id="search" className="relative z-20 -mt-24 sm:-mt-32 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <TravelSearchWidget defaultTab="hotels" />
          <p className="mt-4 text-center text-xs text-snow/80">
            <span aria-hidden="true">ⓘ </span>
            {c.disclosure}
          </p>
        </div>
      </div>
    </section>
  )
}
