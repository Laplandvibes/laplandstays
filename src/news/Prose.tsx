import { Fragment, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useLocalePath } from '../i18n/useLang';
import type { NewsBlock, NewsMeta } from './types';
import { renderEmbed } from './site';

/**
 * Jutun runko lohkoista. Ei HTML:ää eikä markdownia tekstin sisällä: teksti renderöidään
 * sellaisenaan, joten kielitiedosto ei voi rikkoa sivua eikä tuoda skriptiä.
 * Väliotsikot Bebas Neuella (≥ 28 px), pienet otsikot DM Sansilla (CLAUDE.md, flights).
 */
export default function Prose({ blocks, meta, afterIntro }: { blocks: NewsBlock[]; meta: NewsMeta; afterIntro?: ReactNode }) {
  const to = useLocalePath();
  // afterIntro (20.10.2026: appin revontuliyksikkö) ennen ensimmäistä väliotsikkoa, tai loppuun jos niitä ei ole.
  // Suora lapsi-div: .nw-prose > p / > h2 -säännöt eivät koske sen sisältöä.
  const firstH2 = blocks.findIndex((b) => b.t === 'h2');
  const slot = afterIntro ? <div key="after-intro">{afterIntro}</div> : null;
  return (
    <div className="nw-prose">
      {blocks.map((b, i) => {
        switch (b.t) {
          case 'p':
            return <p key={i}>{b.text}</p>;
          case 'h2':
            return <Fragment key={i}>{i === firstH2 && slot}<h2 className="serif">{b.text}</h2></Fragment>;
          case 'ul':
            return <ul key={i}>{b.items.map((it, j) => <li key={j}>{it}</li>)}</ul>;
          case 'note':
            return <p key={i} className="nw-note">{b.text}</p>;
          case 'link':
            return (
              <p key={i} className="nw-linkp">
                {b.text}{' '}
                <Link to={to(b.href)} className="nw-inlink">{b.label} →</Link>
              </p>
            );
          case 'embed':
            return <Fragment key={i}>{renderEmbed(b, meta)}</Fragment>;
          default:
            return null;
        }
      })}
      {firstH2 < 0 && slot}
    </div>
  );
}
