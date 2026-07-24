// Auto-generated for About page copy split.

export interface PageSeo {
  title: string
  description: string
}

export interface OpCardA {
  title: string
  body: string
}
export interface OpCardB {
  title: string
  bodyPre: string
  emailNote: string
}
export interface OpCardC {
  title: string
  bodyPre: string
  codeWord: string
  bodyMid: string
  termsLink: string
  bodyEnd: string
}
export type OpCard = OpCardA | OpCardB | OpCardC

export interface Principle {
  title: string
  body: string
}

export interface PageUi {
  eyebrow: string
  h1: string
  heroAlt: string
  intro: string
  missionEyebrow: string
  missionH2: string
  missionP1: string
  missionP2: string
  opEyebrow: string
  opH2: string
  opCards: OpCard[]
  principlesEyebrow: string
  principlesH2: string
  principles: Principle[]
  ctaH2: string
  ctaLead: string
  ctaPrimary: string
  ctaSecondary: string
}

export interface PageCopy {
  seo: PageSeo
  ui: PageUi
}
