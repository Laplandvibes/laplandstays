import CabinShowcase from './CabinShowcase'
import type { PageCopy } from '../pages/Cabins.copy.types'
import enCopy from '../pages/Cabins.copy.en'
import { useLang, useLocalePath, type Lang } from '../i18n/useLang'
import { preloadLazyCopy, useLazyCopy } from '../i18n/lazyCopy'
import { useCopy as useSiteCopy } from '../locales/copy'

/**
 * The real-cabin band on the home page (Vesa 2026-07-26: the actual, bookable
 * cabins with real photos belong on the front page too, not only on /cabins,
 * because that is what earns trust before anyone clicks a booking link).
 *
 * Copy is pulled from the Cabins page modules rather than duplicated into
 * Home.copy.*: the showcase strings already exist there in all 12 locales and
 * must not drift between the two placements. Only the loader map is repeated;
 * the dynamic import itself is deduplicated by the bundler.
 */

const cache: Partial<Record<Lang, PageCopy>> = { en: enCopy }
const loaders: Record<Lang, () => Promise<{ default: PageCopy }>> = {
  en: () => import('../pages/Cabins.copy.en'),
  fi: () => import('../pages/Cabins.copy.fi'),
  de: () => import('../pages/Cabins.copy.de'),
  ja: () => import('../pages/Cabins.copy.ja'),
  es: () => import('../pages/Cabins.copy.es'),
  'pt-BR': () => import('../pages/Cabins.copy.ptBR'),
  'zh-CN': () => import('../pages/Cabins.copy.zhCN'),
  ko: () => import('../pages/Cabins.copy.ko'),
  fr: () => import('../pages/Cabins.copy.fr'),
  it: () => import('../pages/Cabins.copy.it'),
  nl: () => import('../pages/Cabins.copy.nl'),
  sv: () => import('../pages/Cabins.copy.sv'),
}
preloadLazyCopy(cache, loaders)

const AREA_LINK_LABEL: Partial<Record<string, string>> = {
  fi: 'Kaikki alueen mökit',
  en: 'All cabins in the area',
  de: 'Alle Hütten der Region',
  ja: 'このエリアのコテージをすべて見る',
  es: 'Todas las cabañas de la zona',
  'pt-BR': 'Todas as cabanas da região',
  'zh-CN': '該地區全部木屋',
  ko: '지역 코티지 전체 목록',
  fr: 'Tous les chalets de la région',
  it: 'Tutti gli chalet della zona',
  nl: 'Alle huisjes in het gebied',
  sv: 'Alla stugor i området',
}

/* Front-page wording once the band also shows Pyhä–Luosto, Rovaniemi and Inari (24.10.2026). Those three come from
 * the site's dated cabin list, not the daily feed, so the lead no longer promises a daily refresh and the eyebrow no
 * longer says "ski resorts" (Rovaniemi and Inari are not). The /cabins page keeps its own wording: it shows the four
 * resorts only. */
const HOME_TEXT: Record<Lang, { eyebrow: string; lead: string; staticNote: string }> = {
  fi: { eyebrow: 'Vuokramökit kohteittain', lead: 'Hirsimökkejä ja rinneasuntoja koko porukalle. Avaa mökki, niin näet vapaat viikot ja oman viikkosi hinnan.', staticNote: 'Mökit ovat Lomarenkaan valikoimasta {date}. Vapaat viikot ja hinnan näet mökin sivulta.' },
  en: { eyebrow: 'Rental cabins by destination', lead: 'Log cabins and slope-side apartments with room for the whole group. Open a cabin to see its free weeks and the price for your week.', staticNote: 'Cabins from the Lomarengas listings on {date}. Open a cabin for its free weeks and price.' },
  de: { eyebrow: 'Ferienhütten nach Reiseziel', lead: 'Blockhütten und Apartments an der Piste mit Platz für die ganze Gruppe. Öffnen Sie eine Hütte, um freie Wochen und den Preis für Ihre Woche zu sehen.', staticNote: 'Hütten aus dem Lomarengas-Angebot vom {date}. Freie Wochen und Preis sehen Sie auf der Seite der Hütte.' },
  ja: { eyebrow: 'エリア別の貸コテージ', lead: 'グループ全員で泊まれるログコテージやゲレンデ近くのアパートメントをご紹介します。コテージを開くと、空いている週とご希望の週の料金を確認できます。', staticNote: '{date}時点のLomarengas掲載コテージです。空いている週と料金は各コテージのページでご確認ください。' },
  es: { eyebrow: 'Cabañas de alquiler por destino', lead: 'Cabañas de troncos y apartamentos a pie de pista con sitio para todo el grupo. Abra una cabaña para ver las semanas libres y el precio de su semana.', staticNote: 'Cabañas de la oferta de Lomarengas del {date}. Las semanas libres y el precio están en la página de cada cabaña.' },
  'pt-BR': { eyebrow: 'Cabanas para alugar por destino', lead: 'Cabanas de troncos e apartamentos ao pé das pistas com espaço para o grupo todo. Abra uma cabana para ver as semanas livres e o preço da sua semana.', staticNote: 'Cabanas da oferta da Lomarengas em {date}. As semanas livres e o preço estão na página de cada cabana.' },
  'zh-CN': { eyebrow: '依地區分類的出租木屋', lead: '可供整團同住的原木木屋與滑雪道旁公寓。點開木屋頁面，即可查看可訂週次與您所選週次的價格。', staticNote: '木屋資訊取自 Lomarengas {date} 的刊登內容。可訂週次與價格請見各木屋頁面。' },
  ko: { eyebrow: '지역별 임대 코티지', lead: '일행 모두가 함께 묵을 수 있는 통나무 코티지와 슬로프 인근 아파트먼트를 소개합니다. 코티지를 열면 예약 가능한 주와 원하는 주의 요금을 확인할 수 있습니다.', staticNote: '{date} 기준 Lomarengas 등록 코티지입니다. 예약 가능한 주와 요금은 각 코티지 페이지에서 확인하세요.' },
  fr: { eyebrow: 'Chalets à louer par destination', lead: 'Chalets en rondins et appartements au pied des pistes pour tout le groupe. Ouvrez un chalet pour voir les semaines libres et le prix de votre semaine.', staticNote: 'Chalets de l’offre Lomarengas au {date}. Semaines libres et prix sur la page de chaque chalet.' },
  it: { eyebrow: 'Baite in affitto per destinazione', lead: 'Baite in tronchi e appartamenti vicino alle piste con posto per tutto il gruppo. Apra uno chalet per vedere le settimane libere e il prezzo della Sua settimana.', staticNote: 'Baite dall’offerta Lomarengas del {date}. Settimane libere e prezzo nella pagina di ogni baita.' },
  nl: { eyebrow: 'Huurhutten per bestemming', lead: 'Blokhutten en appartementen aan de piste met ruimte voor de hele groep. Open een hut om de vrije weken en de prijs voor uw week te zien.', staticNote: 'Hutten uit het Lomarengas-aanbod van {date}. Vrije weken en prijs staan op de pagina van elke hut.' },
  sv: { eyebrow: 'Hyrstugor per resmål', lead: 'Timmerstugor och lägenheter vid backen med plats för hela sällskapet. Öppna en stuga för att se lediga veckor och priset för din vecka.', staticNote: 'Stugor ur Lomarengas utbud den {date}. Lediga veckor och pris ser du på stugans sida.' },
}

export default function HomeCabinShowcase() {
  const lang = useLang()
  const to = useLocalePath()
  const areaLinkLabel = AREA_LINK_LABEL[lang]
  const areaHrefs = areaLinkLabel
    ? {
        levi: to('/cabins/levi'), yllas: to('/cabins/yllas'), ruka: to('/cabins/ruka'), saariselka: to('/cabins/saariselka'),
        'pyha-luosto': to('/cabins/pyha-luosto'), rovaniemi: to('/cabins/rovaniemi'), inari: to('/cabins/inari'),
      }
    : undefined
  const copy: PageCopy = useLazyCopy(lang, cache, loaders)
  // The three destinations added after the band was built (Pyhä–Luosto 22.10.2026; Rovaniemi and Inari have had
  // /cabins pages since 17.10.): names from the nav copy, which carries them in all 12 languages.
  const nav = useSiteCopy().nav
  const extraTabs = [
    { key: 'pyha-luosto' as const, name: nav.pyhaLuosto },
    { key: 'rovaniemi' as const, name: nav.rovaniemi },
    { key: 'inari' as const, name: nav.inari },
  ]

  const t = HOME_TEXT[lang]
  return <CabinShowcase copy={{ ...copy.ui.showcase, eyebrow: t.eyebrow, lead: t.lead }} staticNote={t.staticNote} areaNames={copy.ui.areas.map((a) => a.name)} lang={lang} areaHrefs={areaHrefs} areaLinkLabel={areaLinkLabel} extraTabs={extraTabs} />
}
