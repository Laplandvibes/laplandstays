import { useEffect, useState } from 'react'
import CabinShowcase from './CabinShowcase'
import type { PageCopy } from '../pages/Cabins.copy.types'
import enCopy from '../pages/Cabins.copy.en'
import { useLang, type Lang } from '../i18n/useLang'

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

export default function HomeCabinShowcase() {
  const lang = useLang()
  const [copy, setCopy] = useState<PageCopy>(() => cache[lang] ?? cache.en!)

  useEffect(() => {
    const cached = cache[lang]
    if (cached) {
      setCopy(cached)
      return
    }
    let cancelled = false
    loaders[lang]().then((mod) => {
      cache[lang] = mod.default
      if (!cancelled) setCopy(mod.default)
    })
    return () => {
      cancelled = true
    }
  }, [lang])

  return <CabinShowcase copy={copy.ui.showcase} areaNames={copy.ui.areas.map((a) => a.name)} lang={lang} />
}
