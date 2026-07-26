/**
 * GoogleRatingRow — the review score of one named property, presented as
 * GOOGLE'S verdict and linked to the source (2026-07-26).
 *
 * Three rules this component exists to enforce:
 *
 * 1. ATTRIBUTION. The number is labelled "Google" in the visible text. It is
 *    not this site's verdict and must never be worded as one.
 * 2. CHECKABILITY. The whole row is a link to Google's public review list for
 *    that exact Place ID, so a reader can verify the claim in one click. This
 *    is what makes the editorial pick chip an auditable claim rather than an
 *    assertion: the chip says "highest rated on this page", and the reader can
 *    only test that if every other card prints its number too. Render this on
 *    EVERY card of a surface, not only on the winner.
 * 3. NO FAKE LIVENESS. The data is a gitted snapshot from
 *    `scripts/sync-stays.mjs`, so the verification date travels with it (in the
 *    tooltip and the accessible name here; printed visibly next to the pick
 *    chip on every surface that has one).
 *
 * Renders NOTHING when the sync did not produce certain data for the property
 * — that is the fail-closed path, and it must stay that way. Cards for city
 * searches ("All Levi accommodation") and for names that do not identify a
 * single business therefore simply have no row.
 *
 * Not an affiliate link: `rel="nofollow noopener"`, no `sponsored`. The card's
 * own booking CTA keeps its affiliate attributes; this one is a citation.
 */
import { Star } from 'lucide-react'
import {
  googleReviewsUrl,
  formatRating,
  formatReviewCount,
  formatVerifiedDate,
  type RankableProperty,
} from '../data/properties'
import { useCopy } from '../locales/copy'
import { useLang } from '../i18n/useLang'

export default function GoogleRatingRow({
  property,
  tone = 'dark',
  className,
}: {
  property: RankableProperty | null | undefined
  /** `dark` = on the night-blue anchor cards, `light` = on the cream page. */
  tone?: 'dark' | 'light'
  className?: string
}) {
  const copy = useCopy()
  const lang = useLang()

  if (!property) return null
  const { rating, reviewCount, googlePlaceId, lastVerified } = property
  if (typeof rating !== 'number' || typeof reviewCount !== 'number' || !googlePlaceId) {
    return null
  }

  const e = copy.editorial
  const ratingText = formatRating(rating, lang)
  const countText = formatReviewCount(reviewCount, lang)
  const line = e.ratingLine.replace('{r}', ratingText).replace('{n}', countText)
  const verified = lastVerified
    ? e.verifiedOn.replace('{d}', formatVerifiedDate(lastVerified, lang))
    : null

  const skin =
    tone === 'light'
      ? 'border-night/12 bg-night/[0.04] text-charcoal/85 hover:text-charcoal hover:border-night/25'
      : 'border-white/15 bg-white/[0.06] text-white/85 hover:text-white hover:border-amber/50'

  return (
    <a
      href={googleReviewsUrl(googlePlaceId)}
      target="_blank"
      rel="nofollow noopener"
      title={verified ? `${line} · ${verified}` : line}
      data-google-rating={ratingText}
      className={[
        // `relative` anchors the sr-only absolute to this pill instead of a
        // higher positioned ancestor (Lomarengas lesson, 2026-07-25).
        'relative inline-flex items-center gap-1.5 self-start rounded-full no-underline',
        'border px-2.5 py-1 text-[11px] transition-colors',
        skin,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Star className="w-3 h-3 text-amber shrink-0" aria-hidden="true" />
      <span className="font-semibold">{line}</span>
      <span className="sr-only">{` (${e.ratingAria}${verified ? `, ${verified}` : ''})`}</span>
    </a>
  )
}
