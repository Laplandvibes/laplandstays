import mapsData from "./generated/stays-from-maps.json";
import type { Lang } from "../i18n/useLang";

/**
 * Canonical named-property registry — the join table between this site's
 * editorial surfaces and the REAL Google review data pulled by
 * `node scripts/sync-stays.mjs`.
 *
 * Why this file exists (2026-07-26)
 * --------------------------------
 * This site names ~20 real, bookable properties on prominent editorial
 * surfaces (`/destinations/*` "Where to stay", `/property-types` anchor
 * pills, the home amenity cards). Those surfaces were free advertising, and
 * the editorial framing around them ("anchor properties", "where to stay")
 * was an implicit recommendation with nothing behind it. Two changes fixed
 * that, and this registry is what makes the second one possible:
 *
 *   A. The head of each of those surfaces is now a SELLABLE
 *      "Esittelykumppani" slot (`src/data/adSlots.ts`,
 *      `src/components/FeaturedPartnerSlot.tsx`).
 *   B. The editorial pick chip is DERIVED from real, public Google review
 *      data instead of editorial whim — see `bestGoogleRated` below.
 *
 * Two data layers
 * ---------------
 * EDITORIAL (this file, hand-maintained): the property's real-world name and
 * the affiliate search string this site already uses for it. Never
 * machine-written.
 *
 * GENERATED (`src/data/generated/stays-from-maps.json`, gitted): rating,
 * review count, Place ID and verification date, produced by
 * `node scripts/sync-stays.mjs` from the Places API (New). Re-running the sync
 * can never clobber editorial work, because the script writes only that one
 * JSON file. The layers are merged by registry key in `withGoogleReviews`.
 *
 * The generated layer is a SNAPSHOT, not a live feed. Every surface that
 * prints a rating therefore also prints the verification date and links to
 * Google's own review list, so a reader can check both the number and its age.
 *
 * `destination` is the JOIN KEY
 * -----------------------------
 * Surfaces do not import registry keys; they already carry the affiliate
 * search string (`propertyQuery`) next to each named property, and the lookup
 * happens on that string (`propertyForQuery`). That is deliberate: if someone
 * edits a `propertyQuery` in a page file, the rating silently DISAPPEARS
 * rather than following the old property onto a new name. Fail closed beats a
 * stale join.
 */

export type Property = {
  /**
   * The property's real-world name. This is what the sync's name gate
   * compares Google's `displayName` against, so it must be the name the
   * business actually trades under — not a card headline or a room-type
   * variant.
   */
  name: string;
  /**
   * The affiliate search string this site already passes as `?ss=`. Doubles as
   * the join key from the editorial surfaces. Must match the `propertyQuery`
   * value used in the page/component that names the property.
   */
  destination: string;
};

/**
 * Google review data attached to a property by the sync. Every field is
 * optional on purpose: `scripts/sync-stays.mjs` fails closed, so a property
 * whose Places match was not certain arrives here with nothing, and every
 * consumer must handle that by showing no rating rather than a guess.
 */
export type GoogleReview = {
  /** Google's star average, one decimal as Google publishes it. */
  rating?: number;
  /** Number of Google reviews behind that average. */
  reviewCount?: number;
  /** Places API place ID — the key to the public review list. */
  googlePlaceId?: string;
  /** YYYY-MM-DD the sync last confirmed these numbers. */
  lastVerified?: string;
};

/** Shape every rankable card meta satisfies. */
export type RankableProperty = { name: string } & GoogleReview;

type SyncedProperty = {
  /** Google's own listing name — kept so a reviewer can audit WHAT was matched. */
  matchedName: string;
  rating: number;
  reviewCount: number;
  googlePlaceId: string;
  address: string;
  location: { latitude: number; longitude: number };
  lastVerified: string;
};

const SYNCED = (mapsData as { properties: Record<string, SyncedProperty> }).properties;

/** Merge the generated Google layer onto the hand-written editorial layer. */
function withGoogleReviews<T extends Record<string, Property>>(
  base: T,
): { [K in keyof T]: T[K] & GoogleReview } {
  const out = {} as { [K in keyof T]: T[K] & GoogleReview };
  for (const key of Object.keys(base) as (keyof T & string)[]) {
    const g = SYNCED[key];
    out[key] = g
      ? {
          ...base[key],
          rating: g.rating,
          reviewCount: g.reviewCount,
          googlePlaceId: g.googlePlaceId,
          lastVerified: g.lastVerified,
        }
      : { ...base[key] };
  }
  return out;
}

/**
 * Every real property this site names on an editorial surface.
 *
 * Entries stay on ONE line each and keep the `name` / `destination` order:
 * `scripts/sync-stays.mjs` parses this block as text so the two files can
 * never drift, and it aborts rather than syncing if the parse yields nothing.
 */
export const PROPERTIES = withGoogleReviews({
  // ── Aurora / glass-roof properties ────────────────────────────────────
  kakslauttanen: { name: "Kakslauttanen Arctic Resort", destination: "Kakslauttanen Arctic Resort" },
  levinIglut: { name: "Levin Iglut", destination: "Levin Iglut" },
  starArctic: { name: "Star Arctic Hotel", destination: "Star Arctic Hotel" },
  auroraVillage: { name: "Aurora Village Ivalo", destination: "Aurora Village Ivalo" },
  novaSkyland: { name: "Nova Skyland", destination: "Nova Skyland" },
  northernLightsRanch: { name: "Northern Lights Ranch", destination: "Northern Lights Ranch Köngäs" },
  arcticSnowHotel: { name: "Arctic SnowHotel", destination: "Arctic Snow Hotel" },

  // ── Lakeside / wilderness lodges ──────────────────────────────────────
  nellim: { name: "Wilderness Hotel Nellim", destination: "Wilderness Hotel Nellim" },
  muotka: { name: "Wilderness Hotel Muotka", destination: "Wilderness Hotel Muotka" },
  wildernessInari: { name: "Wilderness Hotel Inari", destination: "Wilderness Hotel Inari" },
  apukka: { name: "Apukka Resort", destination: "Apukka Resort Rovaniemi" },
  laplandHotelsOunasvaara: { name: "Lapland Hotels Ounasvaara Chalets", destination: "Lapland Hotels Ounasvaara" },
  harriniva: { name: "Harriniva Hotels & Safaris", destination: "Harriniva" },

  // ── Fell / ski-in chalets and hotels ──────────────────────────────────
  hotelLeviPanorama: { name: "Hotel Levi Panorama", destination: "Hotel Levi Panorama" },
  leviHotelSpa: { name: "Levi Hotel Spa", destination: "Levi Hotel Spa" },
  laplandHotelsSirkantahti: { name: "Lapland Hotels Sirkantähti", destination: "Lapland Hotels Sirkantähti" },
  k5Levi: { name: "K5 Levi", destination: "K5 Levi" },
  laplandHotelsSaaga: { name: "Lapland Hotels Saaga", destination: "Lapland Hotels Saaga" },
  laplandHotelsYllaskaltio: { name: "Lapland Hotels Ylläskaltio", destination: "Lapland Hotels Ylläskaltio" },

  // ── Designer lodges ───────────────────────────────────────────────────
  arcticTreeHouse: { name: "Arctic TreeHouse Hotel", destination: "Arctic TreeHouse Hotel" },
});

/**
 * NAMES THIS SITE MUST NEVER PRINT AGAIN — do not "helpfully" reintroduce them.
 *
 * A Google rating belongs to ONE business. Until 2026-07-26 three names on this
 * site's anchor lists did not identify one, so the sync had nothing it could
 * honestly attach a rating to and each attracted a wrong match. The 2026-07-26
 * sync caught them; the fix below (same day) removed them from the published
 * copy as well, because a name that cannot be rated because it does not exist
 * is not merely unratable — it is wrong on the page.
 *
 *   "Lapland Hotels Levi" (was /destinations/levi) — NO SUCH HOTEL. Verified
 *     against the chain's own destination index
 *     (laplandhotels.com/en/hotels-and-destinations): the chain lists exactly
 *     ONE hotel at Levi, Lapland Hotels Sirkantähti. Note that the earlier
 *     revision of this comment also got it wrong in the other direction —
 *     Hotel Levi Panorama is NOT a chain property, it is an independent hotel
 *     on the fell, as is Levi Hotel Spa. The card now names Sirkantähti, and
 *     Hotel Levi Panorama was added alongside it under its own real name.
 *
 *   "Lapland Hotels (Ylläs)" (was /destinations/yllas) — a chain-plus-region
 *     label. The chain's own index lists FOUR separate hotels at Ylläs (Saaga
 *     in Ylläsjärvi, Äkäshotelli and Ylläskaltio in Äkäslompolo, and SnowVillage
 *     — which is a different thing again, at Lainio). Google resolved the label
 *     first to Äkäshotelli (Dice 0.79) and then, after the chain guard, to
 *     Ylläskaltio, because the label is a literal prefix of that name. The card
 *     was split into the two hotels its own note had been describing.
 *
 *   "Inari Lake Cottages" (was /property-types, lakeside anchors) — a lake plus
 *     a category, not a business. Google offered "Lake Inari Mobile Cabins".
 *     Replaced with Wilderness Hotel Inari, a real hotel on the Lake Inari
 *     shore run by the same family as Nellim and Muotka above.
 *
 * The rule these three encode: an anchor card names a business you could ring
 * up. A chain, a region, a chain-plus-region, or a category is not one, however
 * natural it reads as a headline.
 */

export type PropertyKey = keyof typeof PROPERTIES;

/**
 * Extra affiliate search strings that point at a property already in the
 * registry. The site grew two spellings for the same Rovaniemi property and
 * two query forms for the same Ivalo one; rather than editorialise the page
 * copy (and risk changing a link that already converts) the aliases are
 * declared here, so both spellings resolve to ONE registry entry and cost ONE
 * Places request.
 */
const QUERY_ALIASES: Record<string, PropertyKey> = {
  "Novasky Land Rovaniemi": "novaSkyland",
  "Novasky Land": "novaSkyland",
};

const KEY_BY_QUERY: Map<string, PropertyKey> = (() => {
  const m = new Map<string, PropertyKey>();
  for (const key of Object.keys(PROPERTIES) as PropertyKey[]) {
    m.set(PROPERTIES[key].destination.toLowerCase(), key);
  }
  for (const [alias, key] of Object.entries(QUERY_ALIASES)) {
    m.set(alias.toLowerCase(), key);
  }
  return m;
})();

/**
 * Resolve the registry entry an editorial surface is talking about, from the
 * affiliate search string it already carries. Returns `null` for anything not
 * in the registry — a city search ("All Levi accommodation"), a category, or a
 * property whose query was edited — and every caller must then render no
 * rating at all.
 */
export function propertyForQuery(query: string | undefined | null): (Property & GoogleReview) | null {
  const key = keyForQuery(query);
  return key ? PROPERTIES[key] : null;
}

/**
 * Same join, but returning the registry KEY. `data/propertyBooking.ts` needs the
 * key rather than the record so the partner property ids can live in their own
 * file: the ids are verified partner data with their own provenance, and mixing
 * them into the editorial registry would put a machine-resolvable field in the
 * file whose header says it is never machine-written.
 */
export function keyForQuery(query: string | undefined | null): PropertyKey | null {
  if (!query) return null;
  return KEY_BY_QUERY.get(query.toLowerCase()) ?? null;
}

/**
 * Minimum review count for a property to be rankable.
 *
 * THIS SITE'S FIELD (sync 2026-07-26, n = 20): review counts run 173 … 2 543,
 * median 762.5. So be honest about what this constant is: **it currently
 * excludes nothing.** It is a forward guard, not a filter on today's data.
 *
 * Why 100 and not, say, 30: Google publishes its average to one decimal, so a
 * ranking is only honest when the noise in the average is smaller than what is
 * displayed. At n = 100 the standard error of a mean on Google's 1–5 scale is
 * ≈ 0.1 star, i.e. at or below Google's own display granularity; at n = 30 it
 * is ≈ 0.18, so two properties 0.1 apart would be statistically
 * indistinguishable and "highest rated" would be a coin flip dressed as a
 * fact. Every property named on this site today is an established hotel or
 * resort, but the anchor lists are edited by hand and a new boutique villa
 * with 8 reviews and a 5.0 would otherwise walk straight past a 4.6 from
 * 2 543. That is the case this floor exists for.
 */
export const PICK_MIN_REVIEWS = 100;

/**
 * Minimum rating for a property to be rankable.
 *
 * THIS SITE'S FIELD (sync 2026-07-26, n = 20), sorted:
 *   3.9, 4.1, 4.2, 4.2, 4.3, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.5, 4.5, 4.5,
 *   4.6, 4.6, 4.6, 4.7, 4.7, 4.8 (min 3.9 · Q1 4.3 · median 4.4 · max 4.8)
 *
 * 4.3 is the field's first quartile, and that is the derivation: the bottom
 * fifth of what this site names cannot be crowned. It disqualifies 4 of 20
 * (3.9, 4.1, 4.2, 4.2), so unlike the review floor above it does real work —
 * most visibly it keeps Kakslauttanen Arctic Resort (4.1 from 1 415 reviews),
 * the single most heavily promoted property on the site, from taking the
 * Saariselkä chip on review volume alone.
 *
 * A floor nothing falls below would be decoration; a floor at the median would
 * silence the chip on most surfaces (three of the five destination pages carry
 * only two or three named properties). The quartile is the point where the
 * constraint binds without starving the mechanism.
 *
 * Re-derive this after any sync that materially changes the field — do not
 * carry the number over from a sibling site, and do not lower it to make a
 * particular chip appear.
 */
export const PICK_MIN_RATING = 4.3;

/**
 * The editorial pick on a surface, DERIVED from real Google review data —
 * never hand-picked and NEVER FOR SALE (2026-07-26).
 *
 * The sellable thing on these surfaces is the Esittelykumppani slot at the
 * head of the grid (`FeaturedPartnerSlot`). This chip is deliberately the part
 * money cannot buy: if it could be bought, the recommendation would be worth
 * nothing and so would the slot's price.
 *
 * The pick is the highest Google rating among the properties on that surface,
 * ties broken by the larger review count (more evidence wins). Returns `null`
 * — i.e. no chip at all — when fewer than two properties on the surface clear
 * both thresholds, because then there is no field to be top of.
 *
 * Callers MUST render, on every card of the surface that has review data, the
 * rating + review count + link to Google's review list. "Highest rated on this
 * page" is a checkable claim only if the reader can see the other cards'
 * numbers too.
 */
export function bestGoogleRated<T extends RankableProperty>(
  items: readonly (T | null | undefined)[],
): T | null {
  const present = items.filter((i): i is T => Boolean(i));
  const eligible = present.filter(
    (i): i is T & { rating: number; reviewCount: number; googlePlaceId: string } =>
      typeof i.rating === "number" &&
      i.rating >= PICK_MIN_RATING &&
      typeof i.reviewCount === "number" &&
      i.reviewCount >= PICK_MIN_REVIEWS &&
      typeof i.googlePlaceId === "string",
  );
  if (eligible.length < 2) return null;
  const winner = eligible.reduce((best, i) => {
    if (i.rating > best.rating) return i;
    if (i.rating === best.rating && i.reviewCount > best.reviewCount) return i;
    return best;
  });

  // The chip PRINTS the claim "highest rating on this page". If any card on the
  // surface displays a strictly higher rating — a low-n outlier the review floor
  // correctly refused to crown, say 5.0 from 8 reviews — that claim is false on
  // its face, right next to the number that contradicts it. Rather than qualify
  // the wording in twelve locales, drop the chip: no claim beats a claim the
  // reader can see is wrong.
  const highestShown = present.reduce(
    (max, i) => (typeof i.rating === "number" && i.rating > max ? i.rating : max),
    0,
  );
  if (highestShown > winner.rating) return null;

  return winner;
}

/**
 * Google's public review list for a place. This is the attribution AND the
 * audit trail: the numbers printed on the site are Google's, and this link is
 * how a reader checks them.
 */
export function googleReviewsUrl(placeId: string): string {
  return `https://search.google.com/local/reviews?placeid=${encodeURIComponent(placeId)}`;
}

/**
 * The visible justification printed under the pick chip: the derivation in
 * words plus the snapshot date, e.g. "Sivun paras Google-arvio · Tarkistettu
 * 26.7.2026". Built here so every surface phrases it identically.
 */
export function editorialPickNote(
  e: { pickReason: string; verifiedOn: string },
  pick: RankableProperty | null,
  lang: Lang,
): string | undefined {
  if (!pick) return undefined;
  if (!pick.lastVerified) return e.pickReason;
  return `${e.pickReason} · ${e.verifiedOn.replace("{d}", formatVerifiedDate(pick.lastVerified, lang))}`;
}

/** Site locale → BCP-47 tag, for Intl number/date formatting. */
const BCP47: Record<Lang, string> = {
  en: "en-GB",
  fi: "fi-FI",
  de: "de-DE",
  ja: "ja-JP",
  es: "es-ES",
  "pt-BR": "pt-BR",
  "zh-CN": "zh-CN",
  ko: "ko-KR",
  fr: "fr-FR",
  it: "it-IT",
  nl: "nl-NL",
  sv: "sv-SE",
};

/** "4.4" in en, "4,4" in fi/sv/de — always exactly one decimal, as Google shows it. */
export function formatRating(rating: number, lang: Lang): string {
  return new Intl.NumberFormat(BCP47[lang], {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(rating);
}

/** "2,543" in en, "2 543" in fi/sv — locale thousands grouping. */
export function formatReviewCount(count: number, lang: Lang): string {
  return new Intl.NumberFormat(BCP47[lang]).format(count);
}

/**
 * Format a YYYY-MM-DD verification date for display. Parsed as a LOCAL date so
 * a reader west of UTC is not shown yesterday's date for today's snapshot.
 */
export function formatVerifiedDate(iso: string, lang: Lang): string {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return new Intl.DateTimeFormat(BCP47[lang], { dateStyle: "medium" }).format(
    new Date(y, m - 1, d),
  );
}
