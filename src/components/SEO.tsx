import { useEffect } from 'react'
import { useLang } from '../i18n/useLang'

const SITE_URL = 'https://laplandstays.com'
const DEFAULT_OG = 'https://laplandstays.com/og-default.jpg'
// Bump when the og-*.jpg cards are regenerated so social/CDN scrapers re-fetch
// instead of serving a stale cached card. 2026-06-24: OG cards re-composed
// centre-safe (no longer clipped by Google's square thumbnail crop).
const OG_VERSION = '20260624'

interface SEOProps {
  title: string
  description: string
  canonicalPath: string
  ogImage?: string
  keywords?: string[]
  jsonLd?: object | object[]
  /**
   * Restrict the emitted hreflang alternates to these langs (e.g. ['fi'] for a
   * Finnish-market-only page whose route exists ONLY under /fi). Default:
   * every supported locale. Must mirror the route's "locales" restriction in
   * scripts/routes.json, or hydration would advertise ghost locale URLs the
   * prerenderer (and the router) do not serve. Pass a MODULE-LEVEL const, not
   * an inline array literal — this is an effect dependency.
   */
  hreflangLangs?: string[]
}

function upsertMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// Clone + inject inLanguage on every typed node so each locale URL signals the
// right language.
function injectInLanguage(node: unknown, bcp47: string): unknown {
  if (Array.isArray(node)) return node.map((n) => injectInLanguage(n, bcp47))
  if (node && typeof node === 'object') {
    const o = node as Record<string, unknown>
    if (o['@type'] && o.inLanguage === undefined) o.inLanguage = bcp47
    if (Array.isArray(o['@graph'])) o['@graph'] = (o['@graph'] as unknown[]).map((n) => injectInLanguage(n, bcp47))
    return o
  }
  return node
}

export default function SEO({
  title,
  description,
  canonicalPath,
  ogImage = DEFAULT_OG,
  keywords,
  jsonLd,
  hreflangLangs,
}: SEOProps) {
  const lang = useLang()
  // URL prefix uses the path token (/kr for ko, /br for pt-BR, /cn for zh-CN); other locales = lang code.
  const PATH_PREFIX: Record<string, string> = { en: '', fi: '/fi', de: '/de', ja: '/ja', es: '/es', 'pt-BR': '/br', 'zh-CN': '/cn', ko: '/kr', fr: '/fr', it: '/it', nl: '/nl', sv: '/sv' }
  const OG_LOCALE: Record<string, string> = { en: 'en_US', fi: 'fi_FI', de: 'de_DE', ja: 'ja_JP', es: 'es_ES', 'pt-BR': 'pt_BR', 'zh-CN': 'zh_CN', ko: 'ko_KR', fr: 'fr_FR', it: 'it_IT', nl: 'nl_NL', sv: 'sv_SE' }
  const BCP47: Record<string, string> = { en: 'en-US', fi: 'fi-FI', de: 'de-DE', ja: 'ja-JP', es: 'es-ES', 'pt-BR': 'pt-BR', 'zh-CN': 'zh-CN', ko: 'ko-KR', fr: 'fr-FR', it: 'it-IT', nl: 'nl-NL', sv: 'sv-SE' }
  const localePrefix = PATH_PREFIX[lang] ?? ''
  const ogLocale = OG_LOCALE[lang] ?? 'en_US'
  const bcp47 = BCP47[lang] ?? 'en-US'

  // JSON-LD is rendered as real <script> elements below (React 19 hoists them to
  // <head>) so the schema lands in the prerendered static HTML, a useEffect
  // injection does not run during SSG/prerender.
  const jsonLdItems = jsonLd
    ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map(
        (obj) => injectInLanguage(JSON.parse(JSON.stringify(obj)), bcp47) as object,
      )
    : []

  useEffect(() => {
    document.title = title

    // Trailing-slash form matches the prerendered static HTML (Cloudflare Pages
    // serves /path/index.html at /path/ with 200; the no-slash form 308-redirects).
    const canonical = `${SITE_URL}${localePrefix}${canonicalPath}`.replace(/\/?$/, '/')

    upsertMeta('meta[name="description"]', 'name', 'description', description)
    if (keywords?.length) {
      upsertMeta('meta[name="keywords"]', 'name', 'keywords', keywords.join(', '))
    }

    upsertLink('canonical', canonical)

    // Reflect language on <html lang> for screen readers and crawlers.
    document.documentElement.lang = bcp47

    // hreflang alternates, one per supported locale + x-default.
    // Short codes (en, fi, pt-BR, …) + trailing-slash hrefs: must match the
    // prerenderer (_prerender_routes.mjs) and sitemap.xml exactly so hydration
    // doesn't disagree with the static HTML.
    const oldAlts = document.head.querySelectorAll('link[rel="alternate"][data-seo-hreflang]')
    oldAlts.forEach((el) => el.remove())
    const HREFLANGS = (hreflangLangs ?? Object.keys(PATH_PREFIX)).filter(
      (l): l is keyof typeof PATH_PREFIX => l in PATH_PREFIX,
    )
    HREFLANGS.forEach((l) => {
      const link = document.createElement('link')
      link.setAttribute('rel', 'alternate')
      link.setAttribute('hreflang', l)
      link.setAttribute('href', `${SITE_URL}${PATH_PREFIX[l]}${canonicalPath}`.replace(/\/?$/, '/'))
      link.setAttribute('data-seo-hreflang', 'true')
      document.head.appendChild(link)
    })
    // x-default mirrors the prerenderer: the EN URL when EN is among the
    // alternates, otherwise the first restricted locale's own URL.
    const xDefaultPrefix = HREFLANGS.includes('en') || HREFLANGS.length === 0 ? '' : PATH_PREFIX[HREFLANGS[0]]
    const xDefault = document.createElement('link')
    xDefault.setAttribute('rel', 'alternate')
    xDefault.setAttribute('hreflang', 'x-default')
    xDefault.setAttribute('href', `${SITE_URL}${xDefaultPrefix}${canonicalPath}`.replace(/\/?$/, '/'))
    xDefault.setAttribute('data-seo-hreflang', 'true')
    document.head.appendChild(xDefault)

    // Open Graph
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website')
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'LaplandStays')
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description)
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical)
    const ogImageV = ogImage.includes('?') ? ogImage : `${ogImage}?v=${OG_VERSION}`
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', ogImageV)
    upsertMeta('meta[property="og:image:width"]', 'property', 'og:image:width', '1200')
    upsertMeta('meta[property="og:image:height"]', 'property', 'og:image:height', '630')
    upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', ogLocale)

    // Twitter Card
    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImageV)
    upsertMeta('meta[name="twitter:site"]', 'name', 'twitter:site', '@laplandvibes')
  }, [title, description, canonicalPath, ogImage, keywords, localePrefix, ogLocale, bcp47, hreflangLangs])

  return (
    <>
      {jsonLdItems.map((item, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />
      ))}
    </>
  )
}

export { SITE_URL, DEFAULT_OG }
