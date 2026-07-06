// Auto-generated for Home page copy split (SEO + FAQ schema).

export interface PageSeo {
  title: string
  description: string
}

// A full schema.org FAQPage block (or undefined to fall back to EN).
export type FAQSchema = Record<string, unknown> | undefined

export interface PageCopy {
  seo: PageSeo
  faq?: FAQSchema
}
