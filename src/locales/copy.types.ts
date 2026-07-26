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
