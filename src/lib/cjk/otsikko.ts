/**
 * Otsikon CJK-tekstiin <wbr>-katkokohdat fraasirajoille (fraasit.ts). Käyttäjät:
 * - cjkJsxRuntime.ts / cjkJsxDevRuntime.ts: jokaisen h1–h6:n suorat merkkijonolapset automaattisesti;
 * - fraasiLapset() suoraan, kun otsikon teksti on toisen komponentin sisällä (<h2><Link>{otsikko}</Link></h2>),
 *   koska välikappale näkee vain otsikkoelementin omat lapset.
 * Katkokohdat vaikuttavat vain index.css:n CJK-otsikkosäännön kautta (keep-all elementille, jolla on <wbr>-lapsia).
 */
import type { ReactNode } from 'react';
import { Fragment, jsx as reactJsx, jsxs as reactJsxs } from 'react/jsx-runtime';
import { CJK, katkokohdat } from './fraasit';

const OTSIKKO = /^h[1-6]$/;
const valimuisti = new Map<string, string[] | null>();

function palat(teksti: string): string[] | null {
  let p = valimuisti.get(teksti);
  if (p !== undefined) return p;
  const k = katkokohdat(teksti);
  if (k.length) {
    const cps = [...teksti];
    p = [];
    let prev = 0;
    for (const i of k) { p.push(cps.slice(prev, i).join('')); prev = i; }
    p.push(cps.slice(prev).join(''));
  } else p = null;
  if (valimuisti.size > 1000) valimuisti.clear();
  valimuisti.set(teksti, p);
  return p;
}

/** Teksti, jonka fraasirajoilla on <wbr>. Ei-CJK tai ilman katkokohtia = sama merkkijono. */
export function fraasiLapset(teksti: string, key?: string): ReactNode {
  if (!CJK.test(teksti)) return teksti;
  const p = palat(teksti);
  if (!p) return teksti;
  const lapset: ReactNode[] = [];
  p.forEach((osa, n) => {
    if (n > 0) lapset.push(reactJsx('wbr', {}, `w${n}`));
    lapset.push(osa);
  });
  return reactJsxs(Fragment, { children: lapset }, key);
}

/** h1–h6:n propsit, joissa CJK-merkkijonolapsiin on lisätty katkokohdat. Muut tyypit sellaisenaan. */
export function otsikonPropsit<P>(type: unknown, props: P): P {
  if (typeof type !== 'string' || !OTSIKKO.test(type) || props == null || typeof props !== 'object') return props;
  const c = (props as { children?: unknown }).children;
  if (typeof c === 'string') {
    const uusi = fraasiLapset(c);
    return uusi === c ? props : { ...props, children: uusi };
  }
  if (Array.isArray(c) && c.some((x) => typeof x === 'string' && CJK.test(x))) {
    return { ...props, children: c.map((x, i) => (typeof x === 'string' ? fraasiLapset(x, `cjk${i}`) : x)) };
  }
  return props;
}
