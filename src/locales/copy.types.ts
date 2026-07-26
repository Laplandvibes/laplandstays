import type { FooterDict } from '../../../shared/Footer'
import type { Lang } from '../i18n/useLang'
export type { Lang }
export type { FooterDict }

export type ChromeCopy = {
  nav: {
    home: string
    propertyTypes: string
    whenToGo: string
    transport: string
    cabins: string
    about: string
    levi: string
    yllas: string
    saariselka: string
    inari: string
    rovaniemi: string
    bookNow: string
    /** Accessible name for the logo link (was hardcoded EN). */
    homeAria: string
  }
  hero: {
    eyebrow: string
    h1: string
    lead: string
    /** Summer (May–Sep) variant of `lead`, shown when the hero image swaps to
     * the midnight-sun photo. Falls back to `lead` if absent. */
    leadSummer?: string
    disclosure: string
    alt: string
  }
  /**
   * The earned editorial pick chip and the Google rating rows around it
   * (2026-07-26). NOT PURCHASABLE — the big surface at the head of each
   * named-property grid is the sellable "Esittelykumppani" slot
   * (`FeaturedPartnerSlot` / `src/data/adSlots.ts`), and this chip is
   * deliberately the part money cannot buy. Never reword these strings into
   * anything that could read as sponsored, and never add a paid tier to them.
   *
   * The pick itself is derived, not written here: `bestGoogleRated()` in
   * `src/data/properties.ts` returns the surface's highest real Google rating
   * (ties broken by review count). Every card on such a surface prints its own
   * rating and links to Google's review list, so `pickReason` is a claim the
   * reader can check against the cards next to it.
   *
   * HONESTY CONTRACT for the strings below. The rating is GOOGLE'S verdict,
   * not ours: `ratingLine` must name Google and must not be reworded into a
   * first-person recommendation ("our score", "we rate"). The data is a gitted
   * snapshot from `scripts/sync-stays.mjs`, not a live feed, so `verifiedOn`
   * must never be reworded into anything implying real time ("live", "updated
   * now", "right now").
   *
   * Ad-marking copy ("Mainos" / "Esittelykumppani") is deliberately NOT here:
   * the paid slot is `adLocaleEnabled`-gated to fi/en/sv and carries its own
   * three-language strings in `FeaturedPartnerSlot`. This chip is editorial, so
   * it must exist in all twelve locales.
   */
  editorial: {
    /** Chip label, e.g. "Toimituksen valinta". */
    pickLabel: string
    /** Why this card has the chip — the derivation stated in words. */
    pickReason: string
    /**
     * One card's Google score. `{r}` = rating, `{n}` = review count, both
     * pre-formatted for the locale by `Intl` (fi/sv "4,6" and "2 543"; en
     * "4.6", "2,543"). Must attribute the number to Google.
     */
    ratingLine: string
    /** Accessible name for the rating link (it opens Google's review list). */
    ratingAria: string
    /** Snapshot date marker. `{d}` = locale-formatted date. Never "live". */
    verifiedOn: string
  }
  reviewedBy: {
    reviewedLabel: string
    policyLabel: string
    resolvedDate: string
    /** Accessible name for the reviewer byline region (was hardcoded EN). */
    ariaLabel: string
  }
  networkHub: {
    huskySafaris: string
    skiResorts: string
  }
  mobileStickyCta: {
    fromPrice: string
    headline: string
    cta: string
  }
  newsletter: {
    eyebrow: string
    h2: string
    lead: string
    emailPlaceholder: string
    emailLabel: string
    submit: string
    submitting: string
    success: string
    error: string
    footnote: string
    privacyLink: string
    benefits: { title: string; body: string }[]
  }
  footerEditorialNote: string
  footerExtraLegal: { editorialPolicy: string; about: string }
}
