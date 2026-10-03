import { MapPin } from 'lucide-react'
import TravelSearchWidget from './TravelSearchWidget'
import { useCopy } from '../locales/copy'
import { isSummerSeason } from '../lib/seasonal'
import { twoLineEm } from '../lib/headingFit'

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
  // IMAGE: summer (May–Aug) = midnight-sun copy, winter (Sep–Apr) = aurora/igloo copy.
  const lead = isSummerSeason() ? c.leadSummer ?? c.lead : c.lead
  /* ── Two lines on a computer in every language (Vesa 3.10.2026: "tehdään turhaan kolmirivisiä") ──────────
   * Measured live 3.10.: at 1280–1920 px the heading ran to three lines in de/es/pt/fr/it/ja ("DÓNDE ALOJARSE /
   * EN LA LAPONIA / FINLANDESA", ja four at 1920): the size grew with the screen (96–106 px) but the column
   * stayed at 720 px (max-w-3xl), with free photograph on both sides. From xl the copy column widens to
   * 976 px, and from lg the heading takes the smaller of its designed size and the size at which its best
   * two-line split fits the column (100cqi / em, twoLineEm). The lead keeps its old measure.
   * Not widened at lg: at 1024 px a one-line en heading moved the eyebrow onto brighter snow (heroteksti-portti
   * 4.39:1, 6 % of pixels under 4.5:1); in the 720 px column the lg layout stays as it was. */
  const h1Em = twoLineEm(c.h1, 0.025)
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
            alt={isSummerSeason() ? c.altSummer ?? c.alt : c.alt}
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
        {/* w-full: as a container this flex item may not size itself from its content (it would collapse to 0
            and 100cqi with it); w-full + max-w gives the same width the text used to stretch it to. */}
        <div className="@container w-full relative z-10 text-center px-5 sm:px-6 max-w-3xl xl:max-w-5xl mx-auto pt-28 pb-32 sm:pb-40">
          {/* 🔴 Muste #F9A8D4, ei #EC4899 (heroteksti-portti 20.9.2026). Pinkki
              muste 11 px:n tekstissa valokuvan paalla mitattiin mediaanilla
              3,89:1 kun alle 18 px:n tekstin raja on 4,5:1 — 84 % taustapikse-
              leista alle rajan kolmella leveydella. Sama vaaleampi pinkki kuin
              hubin sanamerkissa: samaa taustaa vasten 7,57:1. Varjo jaa. */}
          <p className="text-[#F9A8D4] uppercase tracking-[0.3em] text-[11px] sm:text-xs font-semibold mb-5 inline-flex items-center justify-center gap-2 [text-shadow:0_2px_12px_rgba(0,0,0,0.9),0_0_24px_rgba(0,0,0,0.6)]">
            <MapPin className="w-3.5 h-3.5" />
            {c.eyebrow}
          </p>
          {/* --h1-max = the designed size (lg 72 px, xl the clamp); the size is never larger than before. */}
          <h1
            className="font-heading text-snow leading-[1.05] tracking-wide text-[42px] sm:text-6xl lg:[--h1-max:4.5rem] xl:[--h1-max:clamp(96px,1.5vw_+_76.8px,115.2px)] lg:[font-size:min(var(--h1-max),calc(100cqi/var(--h1-em)))] mb-6"
            style={{ ['--h1-em' as string]: h1Em.toFixed(2) }}
          >
            {c.h1}
          </h1>
          {/* xl:max-w-[45rem] = the 720 px the lead had inside the old max-w-3xl column. */}
          <p className="text-snow/85 font-body text-base sm:text-lg lg:text-xl max-w-2xl xl:max-w-[45rem] mx-auto leading-relaxed xl:text-2xl">
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
