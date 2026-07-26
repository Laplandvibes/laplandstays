/**
 * Article JSON-LD localization.
 *
 * The five editorial pages (when-to-go, transport, property-types, cabins,
 * editorial-policy) each declare a module-level `articleJsonLd` const holding
 * the invariant fields (author, publisher, dates, image, mainEntityOfPage).
 * `headline` and `description` used to be hardcoded English there, so every
 * non-EN locale shipped an English Article headline while the visible <title>
 * and <meta description> were translated. Those two fields are the same strings
 * the page already translates in its own `seo` copy block, so we take them from
 * there instead of duplicating a second set of translations.
 *
 * The brand suffix ("| LaplandStays") belongs in a <title> but not in a
 * schema.org `headline`, so it is trimmed.
 */
const BRAND_SUFFIX = /\s*[|·]\s*LaplandStays\s*$/

export function localizeArticle<T extends object>(
  article: T,
  seo: { title: string; description: string },
): T & { headline: string; description: string } {
  return {
    ...article,
    headline: seo.title.replace(BRAND_SUFFIX, ''),
    description: seo.description,
  }
}
