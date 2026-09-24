// Auto-generated for PropertyTypesPage copy split.

export interface PageSeo {
  title: string
  description: string
}

export interface PageUi {
  eyebrow: string
  h1: string
  lead: string
  statCategories: string
  statAnchors: string
  bestForLabel: string
  avoidIfLabel: string
  anchorLabel: string
  concentratedLabel: string
}

export interface PageCategory {
  eyebrow: string
  title: string
  body: string
  bestFor: string[]
  avoidIf: string[]
  ctaLabel: string
  imageAlt: string
}

export interface PageCopy {
  seo: PageSeo
  ui: PageUi
  categories: PageCategory[]
}
