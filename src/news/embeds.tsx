/**
 * Jutun omat upotukset: laplandstays.com (11.11.2026).
 *
 * Vesa 11.11.2026, hiihtolomajuttu puhelimella: "paljon päiviä ja numeroita, eikö tuo ole aika sekamelska",
 * "viikkojen takana voisi olla oma laatikko, visualisoitu näitä" ja "artikkelikohdassa voisi olla väriä,
 * vähän eloa". Päivämäärät ja luvut eivät kuulu leipätekstin sekaan, vaan omaan laatikkoonsa.
 *
 * Rungon `{ t: 'embed', id }` piirtää vain sen, minkä tämä tiedosto tuntee: tuntematon id tai puuttuva
 * `meta.embeds[id]` ei piirrä mitään. Kieliriippumaton data (päivät ISO-muodossa) on meta.jsonissa,
 * lukijalle näkyvä teksti kielitiedoston lohkossa (`title`, `text`, `items`), jolloin
 * scripts/news-prerender.mjs tarkistaa sen kuten muunkin rungon.
 *
 * Kaksi tyyppiä:
 *   - `weeks`  viikkokortit aikajanalla. cfg: { span: [alku, loppu], weeks: [{ school: [a, b], resort: [a, b] }] }.
 *              items neljän ryhmissä: nimi, koulun lomapäivät, kaupungit, jakso hiihtokeskuksessa.
 *   - `stats`  isot luvut tummalla paneelilla. items muodossa "luku: selite".
 */
import type { ReactNode } from 'react'
import type { NewsBlock, NewsMeta } from './types'

type EmbedBlock = Extract<NewsBlock, { t: 'embed' }>

const DAY = 86_400_000
const day = (iso: unknown) => (typeof iso === 'string' ? Date.parse(`${iso}T00:00:00Z`) : NaN)
const pair = (v: unknown): [number, number] | null => {
  if (!Array.isArray(v) || v.length !== 2) return null
  const a = day(v[0])
  const b = day(v[1])
  return Number.isFinite(a) && Number.isFinite(b) && b >= a ? [a, b] : null
}

/** "231 €: selite" → ["231 €", "selite"]. Latinalainen kaksoispiste vaatii perään välilyönnin, CJK:n ： ei. */
function splitLabel(s: string): [string, string] | null {
  const m = /^(.{1,32}?)\s*(?::\s|：)\s*(.+)$/su.exec(s)
  return m ? [m[1], m[2]] : null
}

function Weeks({ block, cfg }: { block: EmbedBlock; cfg: Record<string, unknown> }) {
  const span = pair(cfg.span)
  const weeks = Array.isArray(cfg.weeks) ? (cfg.weeks as Record<string, unknown>[]) : []
  const items = block.items ?? []
  if (!span || weeks.length === 0 || items.length !== weeks.length * 4) return null
  const total = span[1] - span[0] + DAY
  const seg = (r: [number, number]) => ({
    left: `${((r[0] - span[0]) / total) * 100}%`,
    width: `${((r[1] - r[0] + DAY) / total) * 100}%`,
  })
  return (
    <aside className="nw-weeks">
      {weeks.map((w, i) => {
        const school = pair(w.school)
        const resort = pair(w.resort)
        const [label, dates, cities, stay] = items.slice(i * 4, i * 4 + 4)
        return (
          <div key={i} className={`nw-wk nw-wk-${(i % 3) + 1}`}>
            <div className="nw-wk-head">
              <span className="nw-wk-label serif">{label}</span>
              <span className="nw-wk-dates">{dates}</span>
            </div>
            <p className="nw-wk-cities">{cities}</p>
            {school && resort && (
              <div className="nw-wk-track" aria-hidden="true">
                <i className="nw-wk-resort" style={seg(resort)} />
                <i className="nw-wk-school" style={seg(school)} />
              </div>
            )}
            <p className="nw-wk-stay">{stay}</p>
          </div>
        )
      })}
      {block.text && <p className="nw-weeks-legend">{block.text}</p>}
    </aside>
  )
}

function Stats({ block }: { block: EmbedBlock }) {
  const rows = (block.items ?? []).map(splitLabel).filter((r): r is [string, string] => r !== null)
  if (rows.length === 0) return null
  return (
    <aside className="nw-stats">
      {block.title && <p className="nw-stats-title">{block.title}</p>}
      <dl className="nw-stats-grid">
        {rows.map(([num, label], i) => (
          <div key={i} className="nw-stat">
            <dt className="serif">{num}</dt>
            <dd>{label}</dd>
          </div>
        ))}
      </dl>
      {block.text && <p className="nw-stats-src">{block.text}</p>}
    </aside>
  )
}

export function renderStaysEmbed(block: EmbedBlock, meta: NewsMeta): ReactNode {
  const cfg = meta.embeds?.[block.id]
  if (!cfg) return null
  if (cfg.kind === 'weeks') return <Weeks block={block} cfg={cfg} />
  if (cfg.kind === 'stats') return <Stats block={block} />
  return null
}
