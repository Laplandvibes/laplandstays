import { useLocation } from 'react-router-dom';
import LanguageMenu, { type LanguageOption } from './LanguageMenu';
import { useLang } from './useLang';
import { LOCALE_FLAG } from './flags';

/**
 * 🔴 laplandstays: kiinan kohdalla on neutraali 中-merkki eikä kansallislippu (18.9.2026).
 *
 * Tämän sivuston kiinankielinen versio (/cn/, avain zh-CN) on Taiwanin perinteistä
 * kiinaa (scripts/zh-hant.mjs). Kiinan kansantasavallan lippu ei sovi sen lukijoille,
 * jotka tulevat Googlesta Taiwanista, Hongkongista ja ulkomailta. Taiwanin lippu taas
 * ei sovi mannerkiinalaiselle, joka tulee sivulle suosituksen kautta. 中 tarkoittaa
 * kiinaa (中文) kaikille heistä, eikä se ota kantaa kumpaankaan suuntaan.
 *
 * Korvaus on TÄSSÄ sovittimessa eikä jaetussa flags.ts:ssä, koska flags.ts ja
 * LanguageMenu.tsx ovat tavu tavulta samat 28 sivustolla (gate:kielivalitsin) ja
 * muiden sivustojen kiina on yhä yksinkertaistettua. localeFlag() lukee taulun
 * renderöinnin aikana, joten moduulin latauksessa tehty korvaus näkyy sekä napissa
 * että valikon rivillä. Värit: snow-pohja ja deep-night-merkki, jotta merkki erottuu
 * sekä vaalealla navilla että tummalla valikkopaneelilla.
 */
const NEUTRAL_ZH_FLAG =
  'data:image/svg+xml,' +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='17' viewBox='0 0 24 17'>" +
      "<rect width='24' height='17' fill='#F9FAFB'/>" +
      "<rect x='7' y='5' width='10' height='6.4' fill='none' stroke='#0F172A' stroke-width='1.6'/>" +
      "<path d='M12 1.6v13.8' stroke='#0F172A' stroke-width='1.6'/>" +
      '</svg>',
  );
LOCALE_FLAG['zh-CN'] = NEUTRAL_ZH_FLAG;

/**
 * Sivustokohtainen kytkentä kanoniseen `LanguageMenu`-komponenttiin niillä
 * sivustoilla, joiden kieli on URL-etuliitteessä (`/fi`, `/de`, `/br`, …).
 *
 * Tämä tiedosto tietää TÄMÄN sivuston reitityksen; LanguageMenu ei tiedä
 * sivustosta mitään. Ulkoasu, näppäimistö, liput ja mobiili ovat siellä, ja se
 * on tavu tavulta sama kaikilla 28 sivustolla:
 *   node scripts/rollout_language_menu.mjs --check
 *
 * Etuliitetaulukko on VERKOSTON INVARIANTTI, ei arvaus: kaikkien 18
 * etuliitepohjaisen sivuston `src/i18n/useLang.ts` käyttää tarkalleen näitä
 * yhdentoista etuliitteen joukkoa ja EN:ää juuressa (tarkistettu 10.9.2026
 * jokaisesta tiedostosta erikseen). Jos joskus lisäät kielen, se lisätään
 * tänne, `LOCALE_FLAG`-tauluun ja sivustojen omiin `useLang`-tiedostoihin.
 */

/** Kieli → URL-etuliite. Tyhjä = englanti asuu juuressa. */
const PREFIX_OF: Record<string, string> = {
  en: '', fi: 'fi', de: 'de', ja: 'ja', es: 'es', 'pt-BR': 'br',
  'zh-CN': 'cn', ko: 'kr', fr: 'fr', it: 'it', nl: 'nl', sv: 'sv',
};

/** Näyttöjärjestys ja kielten omat nimet — sama koko verkostossa. */
const LANGS: { code: string; label: string; native: string }[] = [
  { code: 'en', label: 'EN', native: 'English' },
  { code: 'fi', label: 'FI', native: 'Suomi' },
  { code: 'de', label: 'DE', native: 'Deutsch' },
  { code: 'ja', label: 'JA', native: '日本語' },
  { code: 'es', label: 'ES', native: 'Español' },
  { code: 'pt-BR', label: 'BR', native: 'Português' },
  // laplandstays: /cn/ on Taiwanin perinteistä (17.9.2026, scripts/zh-hant.mjs) — muilla sivustoilla 简体中文.
  { code: 'zh-CN', label: 'CN', native: '繁體中文' },
  { code: 'ko', label: 'KR', native: '한국어' },
  { code: 'fr', label: 'FR', native: 'Français' },
  { code: 'it', label: 'IT', native: 'Italiano' },
  { code: 'nl', label: 'NL', native: 'Nederlands' },
  { code: 'sv', label: 'SV', native: 'Svenska' },
];

/**
 * Saavutettava nimi kävijän omalla kielellä. Taulukko on tässä eikä `pick()`:in
 * takana, koska `pick` puuttuu kahdeksalta sivustolta ja tämän tiedoston pitää
 * pysyä samana kaikilla.
 */
const ARIA: Record<string, string> = {
  en: 'Change language', fi: 'Vaihda kieli', de: 'Sprache wechseln', ja: '言語を切り替える',
  es: 'Cambiar idioma', 'pt-BR': 'Mudar idioma', 'zh-CN': '切換語言', ko: '언어 변경',
  fr: 'Changer de langue', it: 'Cambia lingua', nl: 'Taal wijzigen', sv: 'Byt språk',
};

const KNOWN_PREFIXES = new Set(Object.values(PREFIX_OF).filter(Boolean));

/** Riisuu polusta kieletuliitteen. `/br/hotels` → `/hotels`, `/br` → `/`. */
function bareOf(pathname: string): string {
  const seg = pathname.split('/')[1];
  if (seg && KNOWN_PREFIXES.has(seg)) {
    const rest = pathname.slice(seg.length + 1);
    return rest || '/';
  }
  return pathname || '/';
}

interface Props {
  className?: string;
  /** 'pill' = reunustettu nappi (navi), 'inline' = paljas teksti. */
  variant?: 'pill' | 'inline';
  /** Navin pohjan sävy. Vaalealla navilla 'light'. */
  tone?: 'dark' | 'light';
  align?: 'right' | 'left';
}

export default function LanguageSwitcher({
  className = '',
  variant = 'pill',
  tone = 'dark',
  align = 'right',
}: Props) {
  const lang = useLang() as string;
  const { pathname } = useLocation();
  const bare = bareOf(pathname);

  const items: LanguageOption[] = LANGS.map((l) => {
    const prefix = PREFIX_OF[l.code];
    return {
      code: l.code,
      label: l.label,
      native: l.native,
      href: prefix ? (bare === '/' ? `/${prefix}` : `/${prefix}${bare}`) : bare,
      hrefLang: l.code === 'zh-CN' ? 'zh-Hant' : l.code,
    };
  });

  return (
    <LanguageMenu
      locale={lang}
      items={items}
      variant={variant}
      tone={tone}
      align={align}
      label={ARIA[lang] ?? ARIA.en}
      className={className}
    />
  );
}
