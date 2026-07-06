import { useEffect, useState } from 'react'
import { useLang, type Lang } from './useLang'

/**
 * Generic lazy copy loader. Component supplies an `en` block (used immediately as fallback)
 * and a map of loader functions keyed by Lang. The non-EN locale is fetched async and swapped in.
 */
export function useCopy<T>(
  enCopy: T,
  loaders: Record<Lang, () => Promise<{ default: T }>>,
  cache: Partial<Record<Lang, T>>,
): T {
  const lang = useLang()
  if (!cache.en) cache.en = enCopy
  const [copy, setCopy] = useState<T>(() => cache[lang] ?? enCopy)
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
  return copy
}
