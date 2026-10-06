/**
 * generate-prerender-meta.mjs  (laplandstays)
 *
 * Two jobs, both before the prerender runs.
 *
 * 1. WRITE scripts/prerender-meta.json for the routes whose <title> and
 *    <meta description> live in a page component or in a copy file that the
 *    prerender's own readers cannot address by path:
 *      /privacy, /terms, /cookie-policy  → `const META` record in the page component
 *      /iglumajoitus, /glass-igloos      → `const seo` in the page component
 *      /cabins/<area>                    → `areas.<area>.seo` in src/pages/CabinArea.copy.<lang>.ts
 *    The browser renders exactly these objects, so the server and the browser read
 *    one source; routes.json carries no second copy of them. scripts/_prerender_routes.mjs
 *    reads the map first (--meta), and scripts/news-prerender.mjs adds the /news
 *    routes to it afterwards.
 *
 * 2. STOP THE BUILD (exit 1) when a description the prerender will use sits outside
 *    the prerender window. scripts/_prerender_routes.mjs extends a description under
 *    70 characters / 100 width units with the page's own sentences and cuts one over
 *    160 characters / 200 width units (ensureDescriptionLength + clampDescription;
 *    a CJK character counts as 2). The browser shows the source text as it is, so a
 *    description outside the window publishes a different text than the browser
 *    shows (gate:meta-hydraatio). Checked: every route × locale in routes.json
 *    (the map above, copyFile routes, pageFile routes, routes.json fallbacks) and
 *    the news section sources. Fix the text in the source, never the prerender.
 *    A description that cannot be read also stops the build: the prerender would
 *    fall back to another text than the one the browser renders.
 *
 * Sources are parsed with the TypeScript compiler API (no evaluation, works on the
 * CI's Node 20). STRICTLY READ-ONLY over src/.
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT_FILE = resolve(__dirname, 'prerender-meta.json');
const ROUTES_FILE = resolve(__dirname, 'routes.json');

// scripts/_prerender_routes.mjs FULL_LOCALE_LIST + --addLocales=sv (package.json build).
// `ident` = the copy-file suffix and the per-locale const name (loc.ident there).
const LANGS = ['en', 'fi', 'de', 'ja', 'es', 'pt-BR', 'zh-CN', 'ko', 'fr', 'it', 'nl', 'sv'];
const IDENT = { en: 'en', fi: 'fi', de: 'de', ja: 'ja', es: 'es', 'pt-BR': 'ptBR', 'zh-CN': 'zhCN', ko: 'ko', fr: 'fr', it: 'it', nl: 'nl', sv: 'sv' };

// The news section is written into routes.json and prerender-meta.json by
// scripts/news-prerender.mjs; its descriptions are checked from the news sources.
const NEWS = '/news';

const LEGAL_PAGES = {
  '/privacy': 'src/pages/PrivacyPolicy.tsx',
  '/terms': 'src/pages/Terms.tsx',
  '/cookie-policy': 'src/pages/CookiePolicy.tsx',
};
const SINGLE_LOCALE_PAGES = {
  '/iglumajoitus': 'src/pages/Igloos.tsx',
  '/glass-igloos': 'src/pages/GlassIgloos.tsx',
};
const CABIN_COPY = 'src/pages/CabinArea.copy.{lang}.ts';

// ── TypeScript source reading ────────────────────────────────────────────────

const parsed = new Map();
function parse(rel) {
  if (parsed.has(rel)) return parsed.get(rel);
  const fp = resolve(ROOT, rel);
  const sf = existsSync(fp)
    ? ts.createSourceFile(fp, readFileSync(fp, 'utf-8'), ts.ScriptTarget.Latest, true, rel.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS)
    : null;
  parsed.set(rel, sf);
  return sf;
}

function unwrap(node) {
  let n = node;
  while (n && (ts.isParenthesizedExpression(n) || ts.isAsExpression(n) || ts.isSatisfiesExpression(n) || ts.isTypeAssertionExpression(n))) n = n.expression;
  return n;
}

function keyName(name) {
  if (name && (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNoSubstitutionTemplateLiteral(name) || ts.isNumericLiteral(name))) return name.text;
  return null;
}

/** Initializer of property `key` in an object literal, or null. */
function prop(obj, key) {
  const o = unwrap(obj);
  if (!o || !ts.isObjectLiteralExpression(o)) return null;
  for (const p of o.properties) if (ts.isPropertyAssignment(p) && keyName(p.name) === key) return unwrap(p.initializer);
  return null;
}

/** Initializer of the first `const <name> = …` in the file, or null. */
function constInit(sf, name) {
  let out = null;
  const walk = (node) => {
    if (out) return;
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.name.text === name && node.initializer) { out = unwrap(node.initializer); return; }
    ts.forEachChild(node, walk);
  };
  if (sf) walk(sf);
  return out;
}

/** First property `key` (source order, any depth) whose value is an object literal: the prerender's `seo` block. */
function firstObjectProp(sf, key) {
  let out = null;
  const walk = (node) => {
    if (out) return;
    if (ts.isPropertyAssignment(node) && keyName(node.name) === key) {
      const v = unwrap(node.initializer);
      if (v && ts.isObjectLiteralExpression(v)) { out = v; return; }
    }
    ts.forEachChild(node, walk);
  };
  if (sf) walk(sf);
  return out;
}

/** Text of a string literal (or a + concatenation of them); null for anything computed. */
function text(node) {
  const n = unwrap(node);
  if (!n) return null;
  if (ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n)) return n.text;
  if (ts.isBinaryExpression(n) && n.operatorToken.kind === ts.SyntaxKind.PlusToken) {
    const a = text(n.left);
    const b = text(n.right);
    return a != null && b != null ? a + b : null;
  }
  return null;
}

const clean = (s) => (typeof s === 'string' ? s.replace(/\s+/g, ' ').trim() : null);
const titleDesc = (obj, where) => ({ title: clean(text(prop(obj, 'title'))), description: clean(text(prop(obj, 'description'))), where });

// ── routes ───────────────────────────────────────────────────────────────────

const routes = JSON.parse(readFileSync(ROUTES_FILE, 'utf-8'));
const localesOf = (route) => (Array.isArray(route.locales) ? LANGS.filter((l) => route.locales.includes(l)) : LANGS);
const isNews = (p) => p === NEWS || p.startsWith(`${NEWS}/`);

const problems = [];

/** { title, description, where } this site keeps for (route, lang) outside the prerender's readers, or undefined. */
function ownedMeta(route, lang) {
  const p = route.path;
  if (LEGAL_PAGES[p]) {
    return titleDesc(prop(constInit(parse(LEGAL_PAGES[p]), 'META'), lang), `${LEGAL_PAGES[p]} META['${lang}']`);
  }
  if (SINGLE_LOCALE_PAGES[p]) {
    return titleDesc(constInit(parse(SINGLE_LOCALE_PAGES[p]), 'seo'), `${SINGLE_LOCALE_PAGES[p]} const seo`);
  }
  const cabin = p.match(/^\/cabins\/([^/]+)$/);
  if (cabin) {
    const rel = CABIN_COPY.replace('{lang}', IDENT[lang]);
    return titleDesc(prop(prop(firstObjectProp(parse(rel), 'areas'), cabin[1]), 'seo'), `${rel} areas['${cabin[1]}'].seo`);
  }
  return undefined;
}

// 1. The map.
const meta = {};
const owned = new Map(); // `${path} ${lang}` → where the text lives, for the messages below
for (const route of routes) {
  if (isNews(route.path)) continue;
  for (const lang of localesOf(route)) {
    const m = ownedMeta(route, lang);
    if (m === undefined) break;
    owned.set(`${route.path} ${lang}`, m.where);
    if (!m.title || !m.description) {
      problems.push(`  ${lang.padEnd(5)} ${route.path}: otsikkoa tai kuvausta ei voitu lukea (${m.where})`);
      continue;
    }
    (meta[route.path] ??= {})[lang] = { title: m.title, description: m.description };
  }
}
const sorted = Object.fromEntries(Object.keys(meta).sort().map((k) => [k, meta[k]]));
writeFileSync(OUT_FILE, JSON.stringify(sorted, null, 2) + '\n', 'utf-8');
const entries = Object.values(sorted).reduce((n, byLang) => n + Object.keys(byLang).length, 0);
console.log(`[meta] wrote scripts/prerender-meta.json: ${Object.keys(sorted).length} routes, ${entries} lang entries`);

// 2. The window check.
const LEVEA = /[\u1100-\u11FF\u2E80-\uA4CF\uA960-\uA97F\uAC00-\uD7FF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFF60\uFFE0-\uFFE6]/;
const leveys = (x) => [...String(x)].reduce((n, c) => n + (LEVEA.test(c) ? 2 : 1), 0);
function ikkunanUlkopuolella(d) {
  const s = String(d).replace(/\s+/g, ' ').trim();
  const merkit = [...s].length;
  if (s.length > 160 || merkit > 160 || leveys(s) > 200) return `yli 160 merkkiä / 200 leveysyksikköä (${merkit} / ${leveys(s)})`;
  if (s.length < 70 && leveys(s) < 100) return `alle 70 merkkiä / 100 leveysyksikköä (${merkit} / ${leveys(s)})`;
  return null;
}

/** Description the prerender will use for (route, lang), in its reader order, with where it came from. */
function routeDescription(route, lang) {
  const own = sorted[route.path]?.[lang];
  if (own) return { d: own.description, where: owned.get(`${route.path} ${lang}`) };
  if (route.copyFile) {
    const rel = route.copyFile.replace('{lang}', IDENT[lang]);
    const d = clean(text(prop(firstObjectProp(parse(rel), 'seo'), 'description')));
    if (d) return { d, where: `${rel} seo.description` };
  }
  if (route.pageFile) {
    const block = constInit(parse(route.pageFile), IDENT[lang]);
    const d = clean(text(prop(block, 'seoDescription')));
    if (d) return { d, where: `${route.pageFile} ${IDENT[lang]}.seoDescription` };
  }
  const fb = route.fallbackDescriptionByLang?.[lang] ?? route.fallbackDescription;
  if (fb) return { d: clean(fb), where: 'scripts/routes.json' };
  return { d: null, where: route.copyFile || route.pageFile || 'scripts/routes.json' };
}

const checks = [];
for (const route of routes) {
  if (isNews(route.path)) continue;
  for (const lang of localesOf(route)) {
    if (owned.has(`${route.path} ${lang}`) && !sorted[route.path]?.[lang]) continue; // reported as unreadable above
    checks.push({ path: route.path, lang, ...routeDescription(route, lang) });
  }
}
const readJson = (rel) => {
  const fp = resolve(ROOT, rel);
  try { return existsSync(fp) ? JSON.parse(readFileSync(fp, 'utf-8')) : null; } catch { return null; }
};
const ARTICLES = 'src/news/articles';
const articleSlugs = existsSync(resolve(ROOT, ARTICLES))
  ? readdirSync(resolve(ROOT, ARTICLES)).filter((s) => existsSync(resolve(ROOT, ARTICLES, s, 'meta.json'))).sort()
  : [];
for (const lang of LANGS) {
  const rel = `src/news/i18n/${lang}.json`;
  checks.push({ path: NEWS, lang, d: clean(readJson(rel)?.index?.description), where: `${rel} index.description` });
  for (const slug of articleSlugs) {
    const a = join(ARTICLES, slug, `${lang}.json`).replace(/\\/g, '/');
    checks.push({ path: `${NEWS}/${slug}`, lang, d: clean(readJson(a)?.description), where: `${a} description` });
  }
}

const outside = [];
for (const c of checks) {
  if (!c.d) { problems.push(`  ${c.lang.padEnd(5)} ${c.path}: kuvausta ei voitu lukea (${c.where})`); continue; }
  const why = ikkunanUlkopuolella(c.d);
  if (why) outside.push(`  ${c.lang.padEnd(5)} ${c.path}: ${why} · ${c.where}\n        ${c.d}`);
}

let ok = true;
if (checks.length === 0) {
  console.error('[meta] luettiin 0 kuvausta: tarkista scripts/routes.json ja lähdetiedostot.');
  ok = false;
}
if (problems.length) {
  console.error(`\n[meta] ${problems.length} kohtaa ilman luettavaa otsikkoa tai kuvausta: esirenderöinti käyttäisi muuta tekstiä kuin selain.`);
  console.error(problems.join('\n'));
  ok = false;
}
if (outside.length) {
  console.error(`\n[meta] ${outside.length} kuvausta esirenderöinnin ikkunan ulkopuolella: esirenderöinti jatkaisi tai leikkaisi ne, ja palvelimen HTML näyttäisi eri tekstin kuin selain.`);
  console.error(outside.join('\n'));
  console.error('[meta] Kirjoita kuvaus lähteeseen sen omalla kielellä 70–160 merkkiin (CJK-merkki = 2 leveysyksikköä, 100–200).\n');
  ok = false;
}
if (!ok) process.exit(1);
console.log(`[meta] OK: ${checks.length} kuvausta esirenderöinnin ikkunassa (70–160 merkkiä, CJK 100–200 leveysyksikköä)`);
