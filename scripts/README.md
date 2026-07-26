# scripts/

## `sync-stays.mjs` — real Google review data for the named properties

Pulls rating + review count + Place ID for every entry in the canonical
registry `src/data/properties.ts` and writes exactly one file,
`src/data/generated/stays-from-maps.json` (gitted).

```bash
cd laplandstays-new
node scripts/sync-stays.mjs
```

Needs `GOOGLE_MAPS_API_KEY=...` in `.env.local` (gitignored). The script never
prints the key, never writes it to any output, and never touches
`src/data/properties.ts` — that file is the hand-maintained editorial layer and
the two are merged at module load, so a re-sync can't clobber editorial work.

### Cost

Places API (New) Text Search, **Pro** SKU (`rating` and `userRatingCount` are
Pro fields): **$0.032 per request**, one request per registry entry.
19 entries ≈ **$0.61 per full run**, against Google's $200/month Maps credit.

Do not add `reviews`, `regularOpeningHours`, `websiteUri`, `photos` or
`priceLevel` to `FIELD_MASK`. Each of those is an **Enterprise**-tier field
class and would multiply the bill for data this site never renders.

### Fail closed

A score attached to the wrong property is worse than no score: it is a
fabricated recommendation that looks exactly like a correct one. A candidate is
accepted only if the **name**, the **locality** in Google's `formattedAddress`,
and the **Finnish Lapland bounding box** all agree. Anything else is listed as
UNMATCHED and simply renders no rating on the site.

Two of those gates exist because this site's first run produced real wrong
matches — read `nameGate` / `chainSiblingGate` / `boundaryContains` before
touching them:

- **Chain-sibling guard.** Five named properties belong to one chain, so Dice
  similarity between two *different* chain hotels is structurally high.
  `Lapland Hotels Ylläs` scored 0.79 against **Lapland Hotels Äkäshotelli** and
  was accepted. On the fuzzy path a candidate may no longer introduce a
  non-generic word of 5+ characters that our name lacks.
- **Whole-word containment.** With that guard in place the same query then
  matched **Lapland Hotels Ylläskaltio**, because `Lapland Hotels Ylläs` is a
  literal prefix of it once spaces are stripped. Containment now has to land on
  a token boundary.

Never loosen a gate to force a match.

### Run of 2026-07-26

**19 / 19 matched, 0 wrong, 0 unmatched.** ≈ $0.61 (plus two earlier
diagnostic runs of 22 entries while the gates were being hardened; ≈ $2.01
total for the day).

Distribution, which is what the thresholds in `src/data/properties.ts` are
derived from — re-derive them after any sync that materially changes this
field, and do not copy the numbers from a sibling site:

| | min | Q1 | median | max |
|---|---|---|---|---|
| rating | 3.9 | **4.3** | 4.4 | 4.8 |
| reviews | 173 | — | 706 | 2 543 |

Ratings sorted: 3.9, 4.1, 4.2, 4.2, 4.3, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.5,
4.5, 4.5, 4.6, 4.6, 4.6, 4.7, 4.8

- `PICK_MIN_RATING = 4.3` is the field's first quartile. It disqualifies 4 of
  19, most notably Kakslauttanen Arctic Resort (4.1 from 1 415 reviews) — the
  site's most heavily promoted property — from winning the Saariselkä chip on
  review volume alone.
- `PICK_MIN_REVIEWS = 100` currently excludes **nothing** (min n = 173). It is
  an honest forward guard, not a filter on today's data: at n = 100 the
  standard error of the mean is ≈ 0.1 star, i.e. Google's own display
  granularity, so a future boutique entry with 8 reviews and a 5.0 cannot walk
  past a 4.6 from 2 543.

Three names printed on the site are **deliberately not in the registry** — see
the exclusion block in `src/data/properties.ts` for the full reasoning. Short
version: `Lapland Hotels Ylläs` and `Inari Lake Cottages` do not identify a
single business, and no property trades as `Lapland Hotels Levi`.
