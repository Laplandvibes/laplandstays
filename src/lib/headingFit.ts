import { CJK, fraasit } from './cjk/fraasit'

/**
 * Heading width estimates for fitting a display heading to its column (Vesa 3.10.2026: "tehdään turhaan
 * kolmirivisiä"). Same idea as the hub hero (laplandvibes/src/components/Hero.tsx), with the glyph widths
 * measured from Bebas Neue in Chrome on 3.10.2026 (canvas, 100 px):
 *   most capitals and digits 0.34–0.43 em (estimate 0.4), M 0.54 and W 0.56 (0.56), I/J and . , : ; ' ’ ! 0.19–0.27
 *   (0.2), hyphen 0.27 (0.3), space 0.16 (0.2), ß 0.74. A CJK glyph comes from the fallback face: 1.05 em (1.0 left
 *   ja/zh lines 1–8 px wider than the column on the hub, and they broke).
 * `tracking` is the heading's letter-spacing in em (tracking-wide = 0.025), added once per glyph.
 */
const CJK_GLYPH = /[　-ヿ㐀-鿿가-힯＀-￯]/
const WIDE = /[mwMW]/
const NARROW = /[ijIJíìîïÍÌÎÏ.,:;!'’‘]/

export const emWidth = (s: string, tracking = 0): number =>
  [...s].reduce(
    (w, ch) =>
      w +
      tracking +
      (CJK_GLYPH.test(ch)
        ? 1.05
        : ch === ' '
          ? 0.2
          : ch === 'ß'
            ? 0.74
            : ch === '-'
              ? 0.3
              : WIDE.test(ch)
                ? 0.56
                : NARROW.test(ch)
                  ? 0.2
                  : 0.4),
    0,
  )

/**
 * Width in em of the longer line when the heading is split into two lines at the best point.
 * Break points: spaces, after a hyphen ("FINNISCH- / LAPPLAND"), and for Chinese/Japanese the phrase
 * boundaries the heading's <wbr>s use (src/lib/cjk/fraasit.ts), so the estimate matches where the line can
 * actually break. A size of 100cqi / this value lets the heading run to two lines in its column; the global
 * `text-wrap: balance` then picks the even split.
 */
export function twoLineEm(text: string, tracking = 0): number {
  let parts: string[]
  if (CJK.test(text)) {
    parts = fraasit(text)
  } else {
    parts = []
    for (const word of text.split(' ')) {
      const bits = word.split(/(?<=-)/)
      bits.forEach((b, i) => parts.push(i === 0 && parts.length ? ` ${b}` : b))
    }
  }
  if (parts.length < 2) return emWidth(text, tracking)
  let best = Infinity
  for (let k = 1; k < parts.length; k++) {
    const a = parts.slice(0, k).join('').trim()
    const b = parts.slice(k).join('').trim()
    best = Math.min(best, Math.max(emWidth(a, tracking), emWidth(b, tracking)))
  }
  return best
}
