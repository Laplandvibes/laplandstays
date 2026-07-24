import type { Lang } from '../i18n/useLang'

/**
 * Page-specific "last reviewed" dates for the visible ReviewedBy stamp.
 * One frozen site-wide date read as stale/false on newer pages (Vesa 2026-07-23),
 * so each guide page passes the month its content was last substantively
 * verified: the 2026-06-10 full-site content audit, or later page-level work.
 * Bump the page's entry whenever its content is re-reviewed.
 */
export const REVIEWED_DATE: Record<'june2026' | 'july2026', Record<Lang, string>> = {
  june2026: {
    en: 'June 2026',
    fi: 'kesäkuu 2026',
    sv: 'juni 2026',
    de: 'Juni 2026',
    es: 'junio de 2026',
    'pt-BR': 'junho de 2026',
    fr: 'juin 2026',
    it: 'giugno 2026',
    nl: 'juni 2026',
    ja: '2026年6月',
    ko: '2026년 6월',
    'zh-CN': '2026年6月',
  },
  july2026: {
    en: 'July 2026',
    fi: 'heinäkuu 2026',
    sv: 'juli 2026',
    de: 'Juli 2026',
    es: 'julio de 2026',
    'pt-BR': 'julho de 2026',
    fr: 'juillet 2026',
    it: 'luglio 2026',
    nl: 'juli 2026',
    ja: '2026年7月',
    ko: '2026년 7월',
    'zh-CN': '2026年7月',
  },
}
