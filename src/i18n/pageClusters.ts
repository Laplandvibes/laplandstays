/**
 * Pages whose language versions live at DIFFERENT paths (18.10.2026).
 *
 * Every other page on this site has the same path in every language (/de/cabins = /cabins), and
 * SEO.tsx, the prerenderer and LanguageSwitcher assume that. The glass-igloo page does not: the
 * Finnish page is /fi/iglumajoitus (Igloos.tsx, its own content and its own search term
 * "iglumajoitus"), while en, de and ja are /glass-igloos (GlassIgloos.tsx). The four are one page
 * for search engines, so each must list the others as hreflang alternates, in the static HTML
 * (scripts/routes.json `hreflangCluster` → _prerender_routes.mjs), in the hydrated head
 * (SEO.tsx `hreflangPaths`) and in public/sitemap.xml.
 *
 * `fallback` is where the language menu sends a language that has no version yet, instead of
 * a 404 (tehtävä B, HANDOFF-STAYS-KIELIKATTAVUUS-20261018: the other 8 languages come later;
 * add each one here AND to routes.json `locales` when it ships).
 *
 * 🔴 Keep in step with scripts/routes.json: every path here is a route there, and both routes
 * carry "hreflangCluster": "<key>".
 */
export interface PageCluster {
  /** Path per language, without the language prefix. */
  paths: Partial<Record<string, string>>
  /** Path (without prefix) for languages missing from `paths`. */
  fallback: string
}

export const PAGE_CLUSTERS: Record<string, PageCluster> = {
  'glass-igloos': {
    paths: { en: '/glass-igloos', fi: '/iglumajoitus', de: '/glass-igloos', ja: '/glass-igloos' },
    fallback: '/property-types',
  },
}

/** The cluster whose path for `lang` is `path`, if any. */
export function clusterOf(lang: string, path: string): PageCluster | undefined {
  return Object.values(PAGE_CLUSTERS).find((c) => c.paths[lang] === path)
}
