import { use } from 'react'
import { langFromPath, type Lang } from './useLang'

type Loaders<T> = Record<Lang, () => Promise<{ default: T }>>

const pendingByCache = new WeakMap<object, Partial<Record<Lang, Promise<unknown>>>>()

/**
 * Start (or reuse) the load of one locale's copy into `cache`. A chunk that fails
 * to load resolves to English rather than throwing: a page in the wrong language
 * is better than no page.
 */
export function loadLazyCopy<T>(lang: Lang, cache: Partial<Record<Lang, T>>, loaders: Loaders<T>): Promise<T> {
  const hit = cache[lang]
  if (hit) return Promise.resolve(hit)
  let pending = pendingByCache.get(cache)
  if (!pending) {
    pending = {}
    pendingByCache.set(cache, pending)
  }
  let p = pending[lang] as Promise<T> | undefined
  if (!p) {
    p = loaders[lang]().then(
      (mod) => (cache[lang] = mod.default),
      () => cache.en as T,
    )
    pending[lang] = p
  }
  return p
}

/**
 * The reader's copy, or suspend until it has loaded (React `use`). Never renders
 * English first and swaps afterwards: an English fallback showed a Finnish reader
 * English for as long as the chunk took to arrive on a slow connection.
 */
export function useLazyCopy<T>(lang: Lang, cache: Partial<Record<Lang, T>>, loaders: Loaders<T>): T {
  return cache[lang] ?? use(loadLazyCopy(lang, cache, loaders)) ?? (cache.en as T)
}

/**
 * Start the reader's copy for a module as soon as the module is evaluated. A page
 * chunk and the components it imports each have their own copy chunk; started
 * here they download side by side instead of one after another as each
 * component suspends in turn.
 */
export function preloadLazyCopy<T>(cache: Partial<Record<Lang, T>>, loaders: Loaders<T>): void {
  if (typeof window === 'undefined') return
  void loadLazyCopy(langFromPath(window.location.pathname), cache, loaders)
}
