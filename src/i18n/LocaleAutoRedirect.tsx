import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const STORAGE_KEY = 'lv_locale_choice';

type StoredLocale = 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl';

const URL_PREFIX: Record<StoredLocale, string> = {
  en: '',
  fi: '/fi',
  de: '/de',
  ja: '/ja',
  es: '/es',
  'pt-BR': '/br',
  'zh-CN': '/cn',
  ko: '/kr',
  fr: '/fr',
  it: '/it',
  nl: '/nl',
};

export default function LocaleAutoRedirect() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname !== '/') return;

    // Reading localStorage can throw (Safari private mode, blocked storage).
    // Never let that crash the redirect — fall back to geo-detection instead.
    let stored: string | null = null;
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        stored = window.localStorage.getItem(STORAGE_KEY);
      }
    } catch {
      stored = null;
    }

    let target: StoredLocale = 'en';
    const validValues: StoredLocale[] = ['en', 'fi', 'de', 'ja', 'es', 'pt-BR', 'zh-CN', 'ko', 'fr', 'it', 'nl'];

    // An explicit, valid stored choice always wins — that is the user's intent.
    // (Empty strings and stale/unknown values fall through to geo-detection so a
    //  bad stored value can never trap the visitor on the wrong locale.)
    if (stored && (validValues as string[]).includes(stored)) {
      target = stored as StoredLocale;
    } else if (typeof navigator !== 'undefined') {
      // Inspect the full ordered list of browser languages, not just the first,
      // so a primary language we don't support still resolves to a good match.
      const candidates = (
        navigator.languages && navigator.languages.length
          ? navigator.languages
          : [navigator.language || 'en']
      ).map((l) => l.toLowerCase());

      const detect = (lang: string): StoredLocale | null => {
        if (lang.startsWith('fi')) return 'fi';
        if (lang.startsWith('de')) return 'de';
        if (lang.startsWith('ja')) return 'ja';
        if (lang.startsWith('pt')) return 'pt-BR';
        if (lang.startsWith('zh')) return 'zh-CN';
        if (lang.startsWith('es')) return 'es';
        if (lang.startsWith('ko')) return 'ko';
        if (lang.startsWith('fr')) return 'fr';
        if (lang.startsWith('it')) return 'it';
        if (lang.startsWith('nl')) return 'nl';
        if (lang.startsWith('en')) return 'en';
        return null;
      };

      for (const lang of candidates) {
        const match = detect(lang);
        if (match) {
          target = match;
          break;
        }
      }
    }

    const prefix = URL_PREFIX[target];
    if (prefix) navigate(prefix, { replace: true });
  }, [pathname, navigate]);

  return null;
}
