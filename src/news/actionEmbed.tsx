/**
 * Toimintanappi uutisjutun rungossa.
 *
 * Vesa 25.11.2026, hubin HiihtoHelvetti-uutisesta, joka nimesi lipunmyyjän eikä linkannut sinne:
 * "jokaisessa artikkelissa jos suinkin vaan mahdollista tulisi olla jokin nappi joka loogisesti
 * ohjaa". Hubin malli on `InlineCTA` (laplandvibes/src/blog/BlogProse.tsx); tämä on sama kortti
 * uutisosion lohkomallissa. Sama tiedosto kaikilla uutisosion sivustoilla (laplandstays ensin
 * 26.11.2026); portti scripts/check-news-action.mjs. Muistin sääntö:
 * _claude/feedback_artikkelissa_toimintanappi.md.
 *
 * Kielitiedostossa (kaikilla 12 kielellä sama id ja sama määrä items-rivejä):
 *   { "t": "embed", "id": "action-stay", "title": "…", "text": "…", "items": ["Napin teksti", "Toisen linkin teksti"] }
 * meta.jsonissa (kieliriippumaton):
 *   "embeds": { "action-stay": { "type": "action", "kind": "stay",
 *     "href": "https://go.laplandvibes.com/go/hotels?sid=news_<juttu>_stay&ss=Ruka",
 *     "secondaryHref": "…" } }
 *
 * - `kind` valitsee pienen yläotsikon (Majoitus, Liput, Retket, Lennot, Vuokra-auto, Avoimet työpaikat).
 * - Workerin linkki saa sivun kielen itse: hotels ⇒ `locale`, cars ⇒ `lang`, activities ⇒ `language`
 *   (sama taulu kuin hubin blogissa). Kumppanin nimi ei kuulu napin tekstiin: majoituksen kumppani
 *   vaihtuu kielen mukaan (Sembo fi/sv/de/en, muut Trip.com).
 * - GetYourGuidessa vain sijainti- ja kategoriapolut (`-l…`, `-tc…`): tuotepolku (`-t…`) tarvitsisi
 *   oman kieliprefiksin (CLAUDE.md, gygProductPath).
 * - Sisäinen linkki (`/…`) saa sivun kieliprefiksin eikä sponsored-merkintää.
 * - Ei Umami-tapahtumaa: kumppaniklikit kirjaa Worker (D1), tupla kirjaus paisuttaisi luvut.
 * - Tumma esine vaalealla arkilla: värit kiinteinä news.css:n lohkossa "TOIMINTANAPPI", jotta sivun
 *   arkin musteet eivät tummenna tekstiä tummalle. Pinkki vain napin täytössä (rauhallinen värilinja).
 */
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useLang, useLocalePath, type Lang } from '../i18n/useLang';
import type { NewsBlock, NewsMeta } from './types';

export type ActionKind = 'stay' | 'tickets' | 'activity' | 'flights' | 'cars' | 'jobs';

export interface ActionConfig {
  type: 'action';
  kind: ActionKind;
  /** Workerin linkki (https://go.laplandvibes.com/go/…?sid=…) tai sivuston oma polku ilman kieliprefiksiä. */
  href: string;
  /** Toinen, hiljaisempi toiminto samaan korttiin (tapahtuman liput + majoitus). Teksti items[1]:ssä. */
  secondaryHref?: string;
}

const GO = 'https://go.laplandvibes.com/go/';

const EYEBROW: Record<ActionKind, Record<Lang, string>> = {
  stay: {
    en: 'Places to stay', fi: 'Majoitus', de: 'Unterkünfte', ja: '宿泊', es: 'Alojamiento', 'pt-BR': 'Hospedagem',
    'zh-CN': '住宿', ko: '숙소', fr: 'Hébergement', it: 'Alloggi', nl: 'Overnachten', sv: 'Boende',
  },
  tickets: {
    en: 'Tickets', fi: 'Liput', de: 'Tickets', ja: 'チケット', es: 'Entradas', 'pt-BR': 'Ingressos',
    'zh-CN': '門票', ko: '티켓', fr: 'Billets', it: 'Biglietti', nl: 'Tickets', sv: 'Biljetter',
  },
  activity: {
    en: 'Guided trips', fi: 'Retket', de: 'Touren', ja: 'ツアー', es: 'Excursiones', 'pt-BR': 'Passeios',
    'zh-CN': '當地活動', ko: '투어', fr: 'Excursions', it: 'Escursioni', nl: 'Excursies', sv: 'Utflykter',
  },
  flights: {
    en: 'Flights', fi: 'Lennot', de: 'Flüge', ja: '航空券', es: 'Vuelos', 'pt-BR': 'Voos',
    'zh-CN': '機票', ko: '항공권', fr: 'Vols', it: 'Voli', nl: 'Vluchten', sv: 'Flyg',
  },
  cars: {
    en: 'Car rental', fi: 'Vuokra-auto', de: 'Mietwagen', ja: 'レンタカー', es: 'Alquiler de coches', 'pt-BR': 'Aluguel de carro',
    'zh-CN': '租車', ko: '렌터카', fr: 'Location de voiture', it: 'Noleggio auto', nl: 'Autohuur', sv: 'Hyrbil',
  },
  jobs: {
    en: 'Open jobs', fi: 'Avoimet työpaikat', de: 'Offene Stellen', ja: '求人', es: 'Ofertas de empleo', 'pt-BR': 'Vagas abertas',
    'zh-CN': '招募職位', ko: '채용 공고', fr: "Offres d'emploi", it: 'Offerte di lavoro', nl: 'Vacatures', sv: 'Lediga jobb',
  },
};

const HOTELS_LOCALE: Record<Lang, string> = {
  en: 'en_US', fi: 'fi_FI', de: 'de_DE', ja: 'ja_JP', es: 'es_ES', 'pt-BR': 'pt_BR',
  'zh-CN': 'zh_CN', ko: 'ko_KR', fr: 'fr_FR', it: 'it_IT', nl: 'nl_NL', sv: 'sv_SE',
};
const CARS_LANG: Record<Lang, string> = {
  en: 'en', fi: 'fi', de: 'de', ja: 'ja', es: 'es', 'pt-BR': 'pt',
  'zh-CN': 'zh', ko: 'ko', fr: 'fr', it: 'it', nl: 'nl', sv: 'sv',
};
const GYG_LANG: Partial<Record<Lang, string>> = {
  fi: 'fi', de: 'de', ja: 'ja', es: 'es', 'pt-BR': 'pt-br', 'zh-CN': 'zh',
  ko: 'ko', fr: 'fr', it: 'it', nl: 'nl', sv: 'sv',
};

/** Workerin linkkiin sivun kieli kumppanin omalla parametrilla. */
export function withLang(href: string, lang: Lang): string {
  if (!href.startsWith(GO)) return href;
  const url = new URL(href);
  const route = url.pathname.split('/').filter(Boolean)[1];
  if (route === 'hotels' || route === 'hotels-seasonal' || route === 'hotels-budget') {
    url.searchParams.set('locale', HOTELS_LOCALE[lang]);
  } else if (route === 'cars') {
    url.searchParams.set('lang', CARS_LANG[lang]);
  } else if (route === 'activities') {
    const gyg = GYG_LANG[lang];
    if (gyg) url.searchParams.set('language', gyg);
    else url.searchParams.delete('language');
  }
  return url.toString();
}

/** Kaksi viimeistä sanaa sidotaan sitovalla välilyönnillä, ettei rivin loppuun jää yksinäistä sanaa
 *  (mitattu 26.11.2026: text-wrap balance jätti pitkän viimeisen sanan yksin 390 px:llä). */
function glue(s: string): string {
  return s.replace(/ (\S+)$/, '\u00A0$1');
}

function ActionLink({ href, className, children }: { href: string; className: string; children: ReactNode }) {
  const lang = useLang();
  const to = useLocalePath();
  if (href.startsWith('/')) {
    return <Link to={to(href)} className={className}>{children}</Link>;
  }
  return (
    <a href={withLang(href, lang)} className={className} target="_blank" rel="sponsored nofollow noopener">
      {children}
    </a>
  );
}

function ActionCard({ block, cfg }: { block: Extract<NewsBlock, { t: 'embed' }>; cfg: ActionConfig }) {
  const lang = useLang();
  const [label, secondaryLabel] = block.items ?? [];
  if (!label) return null;
  const eyebrow = EYEBROW[cfg.kind]?.[lang];
  return (
    <aside className="nw-act" aria-label={eyebrow ?? label}>
      {eyebrow && <p className="nw-act-eyebrow">{eyebrow}</p>}
      {block.title && <h3 className="nw-act-title">{glue(block.title)}</h3>}
      {block.text && <p className="nw-act-text">{glue(block.text)}</p>}
      <div className="nw-act-row">
        <ActionLink href={cfg.href} className="nw-act-btn">
          <span>{label}</span>
          <span aria-hidden="true">→</span>
        </ActionLink>
        {cfg.secondaryHref && secondaryLabel && (
          <ActionLink href={cfg.secondaryHref} className="nw-act-sec">
            <span>{secondaryLabel}</span>
            <span aria-hidden="true">→</span>
          </ActionLink>
        )}
      </div>
    </aside>
  );
}

/** Palauttaa kortin, kun upotuksen asetus on `type: 'action'`; muuten null (seuraava piirtäjä jatkaa). */
export function renderActionEmbed(block: Extract<NewsBlock, { t: 'embed' }>, meta: NewsMeta): ReactNode | null {
  const cfg = meta.embeds?.[block.id] as ActionConfig | undefined;
  if (!cfg || cfg.type !== 'action') return null;
  return <ActionCard block={block} cfg={cfg} />;
}
