import { useLang, type Lang } from './useLang'
import { useLazyCopy } from './lazyCopy'

/**
 * Generic lazy copy loader. Component supplies an `en` block and a map of loader
 * functions keyed by Lang. Until the reader's locale has loaded the component
 * suspends (see lazyCopy.ts) instead of rendering English first.
 */
export function useCopy<T>(
  enCopy: T,
  loaders: Record<Lang, () => Promise<{ default: T }>>,
  cache: Partial<Record<Lang, T>>,
): T {
  const lang = useLang()
  if (!cache.en) cache.en = enCopy
  return useLazyCopy(lang, cache, loaders)
}
