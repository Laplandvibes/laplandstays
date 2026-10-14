import { use } from 'react';
import { Link } from 'react-router-dom';
import { useLang, useLocalePath } from '../i18n/useLang';
import { ARTICLES, loadAllTexts, loadUi } from './registry';
import NewsCard from './NewsCard';
import { NewsChrome, SITE, useNewsHead } from './site';
import type { NewsMeta } from './types';

/**
 * Osion etusivu /news. Vesa 18.9.2026: *"katso että myös itse artikkelit osiosta tulee siisti"*
 * — listauksen pitää näyttää valmiilta jo kahdella jutulla. Asettelu valitaan jutun
 * määrästä, ettei ruudukkoon jää koskaan tyhjää paikkaa:
 *   1 juttu      yksi leveä kortti
 *   2 juttua     kaksi rinnakkain
 *   3+ juttua    uusin leveänä, loput kahteen tai kolmeen sarakkeeseen sen mukaan
 *                kumpi täyttää rivit (jäännös 0 kolmella ⇒ 3, muuten 2)
 */
export function layoutFor(n: number): { featured: boolean; cols: 2 | 3 } {
  // 14.10.2026: aina kaksi palstaa. Kolmen palstan 299 px:n kortissa otsikko kiersi 3–4 riville
  // (audit_otsikkorivit). Uusin leveänä vain kun loput täyttävät rivit pareittain (pariton määrä).
  if (n <= 1) return { featured: true, cols: 2 };
  return { featured: n % 2 === 1, cols: 2 };
}

export default function NewsIndex() {
  const lang = useLang();
  const to = useLocalePath();
  const ui = use(loadUi(lang));
  const texts = use(loadAllTexts(lang));
  const { featured, cols } = layoutFor(ARTICLES.length);
  const [first, ...rest] = ARTICLES;
  const listed: NewsMeta[] = featured ? rest : ARTICLES;

  const head = useNewsHead({
    title: ui.index.seoTitle,
    description: ui.index.description,
    path: SITE.path,
    breadcrumbs: [
      { name: ui.ui.home, path: to('/') },
      { name: ui.section, path: to(SITE.path) },
    ],
    jsonLd: [{
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: ui.index.h1,
      description: ui.index.description,
      url: `${SITE.origin}${to(SITE.path)}/`.replace(/\/+$/, '/'),
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: ARTICLES.map((a, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${SITE.origin}${to(`${SITE.path}/${a.slug}`)}/`,
          name: texts[a.slug]?.title,
        })),
      },
    }],
  });

  return (
    <NewsChrome current={SITE.path}>
      {head}
      {/* 14.10.2026: valokuvahero (naturen uutissivun tekstipalkki oli Vesalle 26.9. "aivan kamala"). Sama
          malli kuin jutun herossa: alle 1024 px kuva omana kaistanaan ilman tummennusta ja teksti alla,
          1024 px:stä teksti kuvan päällä alareunan liukuvärin varassa (news.css). Kuva: photoCredits.ts
          'hero-alt' (Pexels 14118545, Markku Soini; Pexels-lisenssi, ei nimeämisvelvoitetta). */}
      <header className="nw-head nw-head-photo">
        <div className="nw-head-media" data-lv-tp-tausta="hero">
          <picture>
            <source
              type="image/avif"
              sizes="100vw"
              srcSet="/images/hero-alt-800.avif 800w, /images/hero-alt-1200.avif 1200w, /images/hero-alt-2560.avif 2560w"
            />
            <source
              type="image/webp"
              sizes="100vw"
              srcSet="/images/hero-alt-800.webp 800w, /images/hero-alt-1200.webp 1200w, /images/hero-alt-2560.webp 2560w"
            />
            <img
              className="nw-head-img"
              src="/images/hero-alt-1200.webp"
              width={1200}
              height={901}
              alt={ui.index.heroAlt}
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <div className="nw-head-scrim" aria-hidden="true" />
        </div>
        <div className="wrap nw-head-body">
          <nav className="crumbs" aria-label="Breadcrumb">
            <span><Link to={to('/')}>{ui.ui.home}</Link></span>
            <span><span className="sep" aria-hidden="true">›</span><span aria-current="page">{ui.section}</span></span>
          </nav>
          <span className="eyebrow">{ui.section}</span>
          <h1 className="serif nw-h1">{ui.index.h1}</h1>
          <p className="nw-lead">{ui.index.lead}</p>
        </div>
      </header>

      <section className="nw-listing" aria-label={ui.section}>
        <div className="wrap">
          {featured && first && (
            <NewsCard meta={first} text={texts[first.slug]} ui={ui} surface="index" wide />
          )}
          {listed.length > 0 && (
            <div className={`nw-grid nw-grid-${cols}`}>
              {listed.map((a) => (
                <NewsCard key={a.slug} meta={a} text={texts[a.slug]} ui={ui} surface="index" />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="nw-about">
        <div className="wrap nw-about-in">
          <h2 className="nw-about-h">{ui.index.aboutTitle}</h2>
          <p>{ui.index.aboutText}</p>
          <Link to={to('/property-types')} className="nw-inlink">{ui.index.allRoutes} →</Link>
        </div>
      </section>
    </NewsChrome>
  );
}
