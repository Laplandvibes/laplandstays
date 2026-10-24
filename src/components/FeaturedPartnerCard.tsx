import { ArrowRight } from 'lucide-react'
import type { Partner } from '../shared/PartnerSlot'
import { normalizeAdLocale } from '../shared/adSlotsCopy'

/**
 * Sold Esittelykumppani slot as a photo-led card (Visit Inari on /destinations/inari, 24.10.2026).
 *
 * Vesa 24.10.2026 on the shared wide card: "miksi siinä on ensin mainos ja alapuolella kumppani?? … eikö se voisi
 * olla oikea laita … ja muutenkin tekstien tausta valkea kun sivuston tausta on jo valkea?" The shared card printed
 * the KKV marking twice (a "MAINOS · ESITTELYKUMPPANI" line above, a "KUMPPANI" pill on the photo) and set the
 * approved text in a white box on a white page. Here:
 *   - the partner's approved photo fills the whole card and stays bright on the right, where the cabins are;
 *   - the text sits on the left over a gradient that darkens only the text column (feedback_image_overlay_only_under_text);
 *   - ONE marking, "Mainos · Esittelykumppani", small in the bottom-right corner (KKV: the ad is labelled as an ad).
 * Text, photo, logo and links are the partner-approved fields of `Partner`, resolved per language exactly as
 * `shared/PartnerSlot` does (i18n map first, then the fi/en/sv fields), so nothing the partner signed off changes.
 */
const pickLocalized = (locale: string, base?: string, en?: string, sv?: string) => {
  const l = locale.slice(0, 2).toLowerCase()
  if (l === 'sv') return sv ?? en ?? base
  if (l === 'fi') return base ?? en
  return en ?? base
}

export default function FeaturedPartnerCard({ partner, locale, marker }: { partner: Partner; locale: string; marker: string }) {
  const t = partner.i18n?.[normalizeAdLocale(locale)]
  const href = t?.url ?? (locale.slice(0, 2).toLowerCase() === 'fi' && partner.urlFi ? partner.urlFi : partner.url)
  const tagline = t?.tagline ?? pickLocalized(locale, partner.tagline, partner.taglineEn, partner.taglineSv)
  const description = t?.description ?? pickLocalized(locale, partner.description, partner.descriptionEn, partner.descriptionSv)
  const cta = t?.cta ?? pickLocalized(locale, partner.ctaLabel, partner.ctaLabelEn, partner.ctaLabelSv)
  const articleLabel = t?.articleLabel ?? pickLocalized(locale, partner.articleLabel, partner.articleLabelEn, partner.articleLabelSv)
  const articleUrl = t?.articleUrl ?? pickLocalized(locale, partner.articleUrl, partner.articleUrlEn, partner.articleUrlSv)

  return (
    <div
      data-partner-slot="card"
      className="group relative overflow-hidden rounded-[28px] bg-night shadow-[0_28px_56px_-28px_rgba(15,23,42,0.55)] md:min-h-[27rem] lg:min-h-[29rem]"
    >
      {/* Photo: its own block on a phone; from md the right 70 % of the card, fading into the text column. Not the whole
          card: partner files can be small (Aurora Holidays 986 px from a brochure) and a full 1 152 px card upscaled it soft. */}
      <a href={href} target="_blank" rel="sponsored nofollow noopener" tabIndex={-1} aria-hidden="true" className="block md:absolute md:inset-y-0 md:right-0 md:left-[30%]">
        <div className="relative aspect-[16/10] md:aspect-auto md:h-full overflow-hidden">
          {partner.imageSrc && (
            <img
              src={partner.imageSrc}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-[50%_45%] transition-transform duration-700 group-hover:scale-[1.03]"
            />
          )}
          {/* Gradient only under the text column (md+); the cabins on the right keep their own light. */}
          {/* md–lg: the text column covers ~75 % of the card, so the dark reaches further; from lg it stops at ~60 %. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden md:block lg:hidden"
            style={{ background: 'linear-gradient(90deg, rgba(15,23,42,1) 0%, rgba(15,23,42,0.85) 40%, rgba(15,23,42,0.4) 75%, rgba(15,23,42,0.15) 100%)' }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden lg:block"
            style={{ background: 'linear-gradient(90deg, rgba(15,23,42,1) 0%, rgba(15,23,42,0.7) 20%, rgba(15,23,42,0.2) 42%, rgba(15,23,42,0) 58%)' }}
          />
        </div>
      </a>

      <div className="relative px-6 pt-6 pb-5 sm:px-8 md:max-w-[34rem] md:px-10 md:py-11 lg:px-12">
        {partner.logoSrc && (
          <span className="inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-[0_4px_14px_rgba(15,23,42,0.28)]">
            <img src={partner.logoSrc} alt={partner.logoAlt ?? `${partner.name} logo`} decoding="async" className="block h-8 w-auto max-w-[150px] object-contain" />
          </span>
        )}
        <h3 className="mt-5 font-heading text-4xl sm:text-5xl tracking-wide leading-none text-white">{partner.name}</h3>
        {tagline && <p className="mt-2 text-lg sm:text-xl leading-snug text-[#F9A8D4] text-balance">{tagline}</p>}
        {description && <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-white/85">{description}</p>}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={href}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="inline-flex items-center gap-2 rounded-full bg-[#DB2777] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#BE185D]"
          >
            {cta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          {articleUrl && articleLabel && (
            /* Editorial link to the partner article: no sponsored attributes, no Worker (Partner.articleUrl). */
            <a href={articleUrl} target="_blank" rel="noopener" className="lv-tap inline-flex items-center gap-1.5 text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
              {articleLabel}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {/* The one ad marking: bottom-right corner of the photo from md, under the links on a phone. */}
      <p className="relative flex justify-end px-6 pb-5 sm:px-8 md:absolute md:bottom-4 md:right-4 md:p-0">
        <span className="rounded bg-black/60 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">{marker}</span>
      </p>
    </div>
  )
}
