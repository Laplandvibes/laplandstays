// Auto-generated for EditorialPolicy copy split.

export interface PageSeo {
  title: string
  description: string
}

export interface Principle {
  title: string
  body: string
}

export interface Source {
  label: string
  use: string
}

export interface PageUi {
  eyebrow: string
  h1: string
  intro: string
  principlesEyebrow: string
  principlesH2: string
  principles: Principle[]
  sourcesEyebrow: string
  sourcesH2: string
  sourcesLead: string
  sources: Source[]
  sourceLabel: string
  useLabel: string
  reviewerEyebrow: string
  reviewerH2: string
  reviewerRole: string
  reviewerBody1: string
  reviewerBody2: string
  corrEyebrow: string
  corrH2: string
  corrP1: string
  corrP2Pre: string
  corrP2Mid: string
  corrP3: string
  readOnH2: string
  readOnLead: string
  aboutLink: string
  termsLink: string
  privacyLink: string
  propertyLink: string
}

export interface PageCopy {
  seo: PageSeo
  ui: PageUi
}
