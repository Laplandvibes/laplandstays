/**
 * Uutisosion SIVUSTOSOVITIN — laplandstays.com.
 *
 * Osio on kopioitu laplandnature.comista (25.9.2026), joka kopioi sen laplandflights.fi:stä.
 * Kaikki muu src/news/:ssä on tavu tavulta sama: tietomalli, rekisteri, kortit, runko, portti.
 * Vain tämä tiedosto + news.css + embeds.tsx tuntevat sivuston.
 *
 * Erot naturen versioon, kaikki sivuston omasta rakenteesta:
 *  1. Navi ja alatunniste tulevat App.tsx:stä ⇒ NewsChrome kääriytyy vain omaan juureensa,
 *     ja osion yläpalkkiin jätetään tilaa kiinteälle navigaatiolle (padding-top news.css:ssä).
 *  2. Otsikot ja metat menevät sivuston omalla <SEO>-komponentilla, joka on komponentti eikä
 *     hookki ⇒ useNewsHead palauttaa ReactNoden, ei objektilistaa.
 *  3. Murupolun JSON-LD:tä EI latota tässä: esirenderöijä kirjoittaa BreadcrumbListin jokaiselle
 *     reitille kanonisesta polusta (scripts/_prerender_routes.mjs), joten oma lohko tuottaisi
 *     sivulle kaksi BreadcrumbListiä (sama mittaus kuin laplandnaturella 24.9.2026).
 *  4. Jutun alle ei tule mainosruudukkoa.
 */
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { useLocalePath } from '../i18n/useLang'
import { useCopy } from '../locales/copy'
import type { NewsBlock, NewsMeta } from './types'
import './news.css'

export const SITE = {
  name: 'LaplandStays',
  origin: 'https://laplandstays.com',
  /** Osion polku ilman kieliprefiksiä. Sama arvo scripts/news-prerender.mjs:ssä. */
  path: '/news',
} as const

/** Sivuston omat aihesivut jutun perään — sama linkkijoukko kuin alatunnisteen pilareissa. */
function MorePages({ current }: { current: string }) {
  const to = useLocalePath()
  const c = useCopy()
  const items = [
    { href: '/property-types', label: c.nav.propertyTypes },
    { href: '/when-to-go', label: c.nav.whenToGo },
    { href: '/cabins', label: c.nav.cabins },
    { href: '/transport', label: c.nav.transport },
    { href: '/destinations/levi', label: c.nav.levi },
    { href: '/destinations/inari', label: c.nav.inari },
    { href: '/destinations/rovaniemi', label: c.nav.rovaniemi },
  ].filter((i) => !current.startsWith(i.href))
  return (
    <nav className="nw-morepages" aria-label={SITE.name}>
      <div className="nw-wrap">
        <ul>
          {items.map((i) => (
            <li key={i.href}><Link to={to(i.href)}>{i.label}</Link></li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export function NewsChrome({ current, children }: { current: string; children: ReactNode }) {
  return (
    <div className="nw">
      {children}
      <MorePages current={current} />
    </div>
  )
}

/**
 * Sivun otsikko, metat, kanoninen, hreflang ja JSON-LD. Palauttaa elementin, jonka sivu
 * renderöi: sivuston <SEO> hoitaa headin efektissä ja latoo JSON-LD:n <script>-elementteinä,
 * jotka React 19 nostaa headiin myös esirenderöinnissä.
 *
 * `breadcrumbs` otetaan vastaan mutta EI latota JSON-LD:ksi (ks. tiedoston alun kohta 3).
 * Näkyvä murupolku sivun ylälaidassa on eri asia ja tulee komponenttien omasta markupista.
 */
export function useNewsHead(m: {
  title: string
  description: string
  path: string
  image?: string
  breadcrumbs: { name: string; path: string }[]
  jsonLd?: unknown[]
}): ReactNode {
  return (
    <SEO
      title={m.title}
      description={m.description}
      canonicalPath={m.path}
      ogImage={m.image}
      jsonLd={(m.jsonLd ?? []) as object[]}
    />
  )
}

/** Tällä sivustolla ei ole vielä jutun omia upotuksia. */
export function renderEmbed(_block: Extract<NewsBlock, { t: 'embed' }>, _meta: NewsMeta): ReactNode {
  return null
}

/** Tällä sivustolla ei ole jutun alle tulevaa mainosruudukkoa. */
export function NewsAds(_: { meta: NewsMeta }) {
  return null
}

export function NotFoundPage() {
  return (
    <div className="nw">
      <header className="nw-head">
        <div className="wrap">
          <h1 className="nw-h1">404</h1>
        </div>
      </header>
    </div>
  )
}
