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
    about: string
    levi: string
    yllas: string
    saariselka: string
    inari: string
    rovaniemi: string
    bookNow: string
    langSwitch: string
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
    footnote: string
    privacyLink: string
    benefits: { title: string; body: string }[]
  }
  footerEditorialNote: string
  footerExtraLegal: { editorialPolicy: string; about: string }
  /** Per-page body copy that drives /ja/* and other locale routes. */
  pages: {
    home: {
      // NOTE: the home FAQ lives in src/pages/Home.copy.*.ts (FAQPage schema),
      // which drives both the JSON-LD and the visible <FAQSection> accordion.
      seoTitle: string
      seoDescription: string
    }
    propertyTypes: {
      kicker: string
      h1: string
      lead: string
      types: { title: string; body: string }[]
    }
    locations: {
      kicker: string
      h1: string
      lead: string
      cards: { name: string; desc: string }[]
    }
    whenToGo: {
      kicker: string
      h1: string
      lead: string
      months: { month: string; tip: string }[]
    }
    transport: {
      kicker: string
      h1: string
      lead: string
      airports: { name: string; desc: string }[]
    }
    about: {
      kicker: string
      h1: string
      lead: string
      mission: string
    }
  }
}
