#!/usr/bin/env node
/**
 * zh-hant.mjs — laplandstays.com:n kiinankielinen versio (/cn/) on TAIWANIN
 * PERINTEISTÄ KIINAA (zh-Hant), ei yksinkertaistettua.
 *
 * Miksi (Vesan päätös 17.9.2026, mitattu eikä arvattu):
 *   - DataForSEO: Kiina 2156 ja Singapore 2702 eivät tarjoa zh-dataa lainkaan; Taiwan 2158 + zh-TW
 *     toimii (羅瓦涅米 1 300/kk, 芬蘭 拉普蘭 170, 伊納里 110 — LAPLANDSTAYS-AUDIT-2026-09-16.md §1c).
 *   - GSC 90 pv: /cn/-sivuille tulevat haut ovat perinteisillä merkeillä (羅瓦涅米 station 附近住宿,
 *     薩利色爾卡, 伊納里, 拉普蘭租車). Googlea käyttävä kiinankielinen yleisö on Taiwanissa, Hongkongissa
 *     ja diasporassa — Manner-Kiina hakee Baidusta ja Xiaohongshusta, ei Googlesta.
 *   ⇒ Koodin avain pysyy 'zh-CN' ja URL-etuliite /cn/ (ei ohjauksia, ei 404-riskiä), mutta KAIKKI
 *     kiinankielinen teksti on perinteistä: <html lang="zh-Hant">, hreflang zh-Hant + zh,
 *     og:locale zh_TW, kielivalikossa 繁體中文.
 *
 * Käyttö:
 *   node scripts/zh-hant.mjs               muuntaa yksinkertaistetut kohdat paikallaan (OpenCC s2twp + TW_TERMS)
 *   node scripts/zh-hant.mjs --check       PORTTI, osa `npm run build`ia: exit 1 jos lähteessä on yksinkertaistettu
 *                                          merkki tai TW_TERMS-taulun kielletty muoto — joku on liittänyt
 *                                          yksinkertaistettua tekstiä. Korjaus: aja skripti ilman lippua.
 *   node scripts/zh-hant.mjs --check-dist  RIIPPUMATON tarkistus renderöidystä dist/cn/…/index.html:stä
 *                                          + lang/hreflang/og:locale-attribuutit + dist/sitemap.xml
 *   ZH_HANT_DIST=<dir> node scripts/zh-hant.mjs --check-dist   sama tarkistus toisesta puusta (livestä ladatut sivut)
 *
 * 🔴 Miksi tunnistin eikä uudelleenmuunnos: OpenCC EI ole idempotentti jo perinteiselle tekstille
 *    (mitattu 18.9.2026: 頁面 → 頁麵, 干擾 → 幹擾, 適合 → 適閤, 發送 → 傳送). Siksi muunnetaan VAIN kohdat,
 *    joissa on aidosti yksinkertaistettu merkki, ja portti etsii niitä — se ei koskaan muunna uudestaan.
 *    "Aidosti yksinkertaistettu" = merkki, jonka OpenCC:n merkkitason tw-muunnos muuttaa (极→極, 后→後) ja joka
 *    ei ole SHARED-listassa (merkit, jotka ovat molemmissa kirjoitusjärjestelmissä ja joita muunnettu korpus
 *    käyttää: 里 公里, 面 頁面, 干 干擾 …). 🔴 Ei OpenCC:n perussanakirjan avaimia: se veisi 床→牀, 峰→峯,
 *    群→羣, joita Taiwanin standardi ei käytä — mitattu 18.9.2026, 17 väärää osumaa 7 tiedostossa.
 *
 * Missä zh-teksti asuu (kolme muotoa, kaikki katettu):
 *   1. kokonaan kiinankieliset tiedostot  src/…/*zhCN*.ts             → rivi kerrallaan (myös kommentit:
 *                                          prerenderin harvest on vuotanut kommentin tekstiä runkoon)
 *   2. sekakieliset tiedostot             'zh-CN': {…} / zhCN: … / zh: {…} -lohkot, pick(lang, …)-kutsun
 *                                          8. argumentti, `lang === 'zh-CN' ? … : …`, `if (lang === 'zh-CN')`
 *                                          ja `{ code: 'zh-CN', native: … }` -oliot
 *                                          → TypeScript-AST: vain merkkijonoliteraalit, template-tekstit,
 *                                            JSX-teksti sen alipuun sisällä
 *   3. index.html:n LV-LOCALE-TITLE-kartta ("zh-cn"), scripts/prerender-meta.json ("zh-CN"),
 *      public/sitemap.xml (hreflang zh-CN → zh-Hant + zh)
 *
 * 🔴 Japani ja korea sisältävät samoja Han-merkkejä (国→國 rikkoisi japanin): siksi sekakielisissä
 *    tiedostoissa katsotaan VAIN zh-avaimen alipuu, ei koskaan koko tiedostoa.
 * 🔴 OpenCC ei tunne paikannimiä eikä kaikkea Taiwanin sanastoa: 伊纳里 → 伊納裡 on väärin (GSC-haut
 *    ja zh-tw-Wikipedia: 伊納里). TW_TERMS-jälkikorjaukset ajetaan OpenCC:n päälle ja portti hylkää
 *    taulun vasemman puolen muodot. Natiivikatselmuksen systemaattiset löydökset kirjataan samaan tauluun,
 *    yksittäiset korjataan lähteeseen.
 * 🔴 Tämä koskee VAIN laplandstaysia. Muut 27 sivustoa ovat zh-CN, kunnes sama mittaus (§25) on tehty
 *    niille — älä yleistä ilman dataa (HANDOFF-STAYS-ZH-HANT-20260917 kohta 6).
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import * as OpenCC from 'opencc-js';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const CHECK = args.includes('--check');
const CHECK_DIST = args.includes('--check-dist');
const VERBOSE = args.includes('--verbose');

const s2twp = OpenCC.Converter({ from: 'cn', to: 'twp' }); // muunnos: merkit + Taiwanin sanasto
const s2tw = OpenCC.Converter({ from: 'cn', to: 'tw' });   // tunnistin: merkkitaso Taiwanin variantteineen

/**
 * Jälkikorjaukset OpenCC:n päälle — järjestys merkitsee, pisin muoto ensin. Vasen puoli on KIELLETTY
 * muoto (portti hylkää sen), oikea puoli se mitä sivusto käyttää.
 * Lähde jokaiselle riville: GSC-haut, zh-tw-Wikipedia, Taiwanin matkailusivustot tai natiivikatselmus.
 */
const TW_TERMS = [
  // Paikannimet — translitteroinnin 里 pysyy 里 (伊納里, 科拉里), OpenCC arvaa 裡
  ['伊納裡', '伊納里'], // Inari — GSC-haku 伊納里 110/kk (Taiwan 2158), zh-tw-Wikipedia 伊納里
  ['於拉斯圖裡國', '於拉斯通圖里國'], // Pallas-Yllästunturi: lähteestä puuttui 通 (natiivikatselmus A 18.9.)
  ['通圖裡', '通圖里'], // Yllästunturi = 於拉斯通圖里
  ['國立公園', '國家公園'], // Taiwanin virallinen termi (國家公園法); 國立公園 on japania
  // Sanasto — OpenCC:n s2twp jätti Manner-Kiinan sanan tai valitsi IT-termin (natiivikatselmus A 18.9.)
  ['酒店', '飯店'], // hotelli: Taiwanissa 飯店; 酒店 tarkoittaa arkikielessä viihderavintolaa
  ['型別', '類型'], // OpenCC: 类型 → 型別 (ohjelmoinnin tietotyyppi); matkailussa 類型
  ['專案', '項目'], // OpenCC: 项目 → 專案 (projekti); tarjonta/ohjelma = 項目
  ['價效比', 'CP值'], // OpenCC: 性价比 → 價效比 (insinööritermi); Taiwanin kuluttajakieli CP值
  ['電子簡報', '電子報'], // uutiskirje; 電子簡報 = diaesitys Taiwanissa
  ['新聞通訊', '電子報'],
  ['填寫的郵箱', '填寫的電子郵件地址'],
  ['電子郵箱', '電子郵件'], // ennen yleistä 郵箱-sääntöä, muuten 電子電子郵件 (mitattu 18.9.: 2 kohtaa)
  ['郵箱', '電子郵件'], // 郵箱 on Manner-Kiinan sana; Taiwan 電子郵件 / 電子信箱
  ['數字服務', '數位服務'], // digitaalinen = 數位 Taiwanissa (數位服務法 = EU:n DSA; STLI, NCCU); 數字 = luku
  // Tuotetermi — mitattu OpenSEO:lla 18.9.2026 (Taiwan 2158, zh-TW): 芬蘭玻璃屋 480/kk, 極光玻璃屋 210,
  // 芬蘭極光玻璃屋 170, 羅瓦涅米玻璃屋 50; 玻璃冰屋-muodolla 0. Taiwan sanoo lasi-iglua 玻璃屋.
  ['玻璃冰屋', '玻璃屋'],
  ['玻璃穹頂屋', '玻璃屋'],
];

/**
 * Merkit, jotka OpenCC:n merkkitasolla "muuntuvat" mutta ovat oikeaa perinteistä kiinaa siinä käytössä,
 * jossa muunnettu korpus niitä käyttää (里 公里/伊納里, 面 頁面, 干 干擾, 只 只有, 系 系統, 出 出發 …).
 * Johdettu 18.9.2026: OpenCC STCharacters.txt:n "lähde on omien kohteidensa joukossa" -merkit (203 kpl)
 * leikattuna tämän sivuston muunnettuun korpukseen (53 kpl). Jos portti hylkää oikean perinteisen sanan,
 * lisää sen merkki tähän — älä poista porttia.
 */
const SHARED = '里合出家私面拿同冬向核回周伙了果抵佣只暗搜它克秋托修表具板松升游象苔制系念才吃舍干坐玩焰扣千彩背注泛谷准布';

const HAN = /[㐀-䶿一-鿿豈-﫿]/;
const charCache = new Map();

/** Merkki on aidosti yksinkertaistettu, jos merkkitason tw-muunnos muuttaa sen eikä se ole SHARED-listalla. */
function isSimplifiedChar(c) {
  let v = charCache.get(c);
  if (v === undefined) {
    v = HAN.test(c) && !SHARED.includes(c) && s2tw(c) !== c;
    charCache.set(c, v);
  }
  return v;
}

/** Aidosti yksinkertaistetut merkit tekstissä (tyhjä = teksti on perinteistä tai ei kiinaa). */
export function simplifiedChars(text) {
  const out = new Set();
  if (!HAN.test(text)) return out;
  for (const c of text) if (isSimplifiedChar(c)) out.add(c);
  return out;
}
/** TW_TERMS-taulun kielletyt muodot tekstissä. */
export function bannedTerms(text) {
  return TW_TERMS.filter(([from]) => text.includes(from)).map(([from]) => from);
}

/** Yksinkertaistettu → Taiwanin perinteinen + jälkikorjaukset. Kutsu VAIN tekstille jossa on yksinkertaistettua. */
export function convert(text) {
  let out = s2twp(text);
  for (const [from, to] of TW_TERMS) out = out.split(from).join(to);
  return out;
}

/** Muunnos vain jos tarpeen; jälkikorjaus aina (kielletty muoto voi olla jo perinteisessä tekstissä). */
function fix(text) {
  let out = simplifiedChars(text).size ? convert(text) : text;
  for (const [from, to] of TW_TERMS) out = out.split(from).join(to);
  return out;
}

// ---------------------------------------------------------------- tiedostot
function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const SRC = resolve(ROOT, 'src');
const ZH_FILE = /zh-?CN/i; // copy.zhCN.ts, Home.copy.zhCN.ts …
const ZH_KEY = /^(zh|cn|zh[-_]?cn|zhcn|zh[-_]?hant|zh[-_]?tw)$/i;
const LANG_FIELD = /^(lang|code|locale|language)$/;
const LITERAL_KINDS = new Set([
  ts.SyntaxKind.StringLiteral,
  ts.SyntaxKind.NoSubstitutionTemplateLiteral,
  ts.SyntaxKind.TemplateHead,
  ts.SyntaxKind.TemplateMiddle,
  ts.SyntaxKind.TemplateTail,
  ts.SyntaxKind.JsxText,
]);

function nameText(name) {
  if (!name) return null;
  if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNoSubstitutionTemplateLiteral(name)) return name.text;
  return null;
}

function isZhCompare(expr) {
  // lang === 'zh-CN' / 'zh-CN' === lang / lang == 'zh-CN'
  if (!ts.isBinaryExpression(expr)) return null;
  const op = expr.operatorToken.kind;
  const eq = op === ts.SyntaxKind.EqualsEqualsEqualsToken || op === ts.SyntaxKind.EqualsEqualsToken;
  const ne = op === ts.SyntaxKind.ExclamationEqualsEqualsToken || op === ts.SyntaxKind.ExclamationEqualsToken;
  if (!eq && !ne) return null;
  const lit = [expr.left, expr.right].find((s) => ts.isStringLiteral(s) && /^zh(-cn)?$/i.test(s.text));
  if (!lit) return null;
  return eq ? 'eq' : 'ne';
}

/** Kerää literaalit (start,end) yhden alipuun sisältä. */
function collectLiterals(node, sf, out) {
  if (LITERAL_KINDS.has(node.kind)) {
    const start = node.kind === ts.SyntaxKind.JsxText ? node.getFullStart() : node.getStart(sf);
    out.push([start, node.getEnd()]);
  }
  ts.forEachChild(node, (c) => collectLiterals(c, sf, out));
}

/** Etsii zh-alipuut sekakielisestä tiedostosta. */
function findZhSubtrees(sf) {
  const roots = [];
  const visit = (node) => {
    // 'zh-CN': {…}   zhCN: …   zh: {…}
    if ((ts.isPropertyAssignment(node) || ts.isPropertyDeclaration(node)) && node.initializer) {
      const n = nameText(node.name);
      if (n && ZH_KEY.test(n)) { roots.push(node.initializer); return; }
    }
    // const zhCN: PageCopy = {…}
    if (ts.isVariableDeclaration(node) && node.initializer) {
      const n = nameText(node.name);
      if (n && ZH_KEY.test(n)) { roots.push(node.initializer); return; }
    }
    // pick(lang, en, fi, de, ja, es, ptBR, zhCN, ko, fr, it, nl, sv)
    if (ts.isCallExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === 'pick' && node.arguments.length >= 8) {
      roots.push(node.arguments[7]);
    }
    // lang === 'zh-CN' ? A : B
    if (ts.isConditionalExpression(node)) {
      const cmp = isZhCompare(node.condition);
      if (cmp === 'eq') roots.push(node.whenTrue);
      if (cmp === 'ne') roots.push(node.whenFalse);
    }
    // if (lang === 'zh-CN') { … }
    if (ts.isIfStatement(node)) {
      const cmp = isZhCompare(node.expression);
      if (cmp === 'eq') roots.push(node.thenStatement);
      if (cmp === 'ne' && node.elseStatement) roots.push(node.elseStatement);
    }
    // { code: 'zh-CN', label: 'CN', native: '…' }
    if (ts.isObjectLiteralExpression(node)) {
      const tagged = node.properties.some(
        (p) => ts.isPropertyAssignment(p) && LANG_FIELD.test(nameText(p.name) || '') && ts.isStringLiteral(p.initializer) && /^zh(-cn)?$/i.test(p.initializer.text),
      );
      if (tagged) { roots.push(node); return; }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
  return roots;
}

/** Tarkasteltavat tekstipätkät [start,end] tiedostosta: zh-tiedostoista rivit, muista zh-alipuiden literaalit. */
function zhSpans(file, text) {
  const spans = [];
  if (ZH_FILE.test(file.split(/[\\/]/).pop())) {
    let pos = 0;
    for (const line of text.split('\n')) {
      spans.push([pos, pos + line.length]);
      pos += line.length + 1;
    }
    return spans;
  }
  if (!HAN.test(text)) return spans;
  const kind = file.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS;
  const sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, kind);
  const raw = [];
  for (const root of findZhSubtrees(sf)) collectLiterals(root, sf, raw);
  raw.sort((a, b) => a[0] - b[0]);
  let lastEnd = -1;
  for (const [s, e] of raw) {
    if (s < lastEnd) continue; // sisäkkäinen alipuu — jo katettu
    spans.push([s, e]);
    lastEnd = e;
  }
  return spans;
}

/** Palauttaa [{start,end,before,after,chars,banned}] — vain kohdat jotka eivät ole kunnossa. */
function planFile(file, text) {
  const changes = [];
  for (const [start, end] of zhSpans(file, text)) {
    const before = text.slice(start, end);
    const chars = simplifiedChars(before);
    const banned = bannedTerms(before);
    if (!chars.size && !banned.length) continue;
    changes.push({ start, end, before, after: fix(before), chars: [...chars].join(''), banned });
  }
  return changes;
}

function apply(text, changes) {
  let out = text;
  for (const c of [...changes].sort((a, b) => b.start - a.start)) {
    out = out.slice(0, c.start) + c.after + out.slice(c.end);
  }
  return out;
}

function lineOf(text, pos) {
  return text.slice(0, pos).split('\n').length;
}

// ---------------------------------------------------------------- index.html / meta.json / sitemap
function planIndexHtml() {
  const file = resolve(ROOT, 'index.html');
  const text = readFileSync(file, 'utf8');
  const re = /("zh-cn"\s*:\s*")((?:[^"\\]|\\.)*)(")/g;
  const changes = [];
  let m;
  while ((m = re.exec(text))) {
    const start = m.index + m[1].length;
    const end = start + m[2].length;
    const chars = simplifiedChars(m[2]);
    const banned = bannedTerms(m[2]);
    if (chars.size || banned.length) changes.push({ start, end, before: m[2], after: fix(m[2]), chars: [...chars].join(''), banned });
  }
  return { file, text, changes };
}

function fixDeep(v) {
  if (typeof v === 'string') return fix(v);
  if (Array.isArray(v)) return v.map(fixDeep);
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, fixDeep(x)]));
  return v;
}

function planMetaJson() {
  const file = resolve(ROOT, 'scripts', 'prerender-meta.json');
  if (!existsSync(file)) return null;
  const text = readFileSync(file, 'utf8');
  const data = JSON.parse(text);
  let changed = 0;
  for (const route of Object.values(data)) {
    if (route && typeof route === 'object' && route['zh-CN']) {
      const after = fixDeep(route['zh-CN']);
      if (JSON.stringify(after) !== JSON.stringify(route['zh-CN'])) { route['zh-CN'] = after; changed++; }
    }
  }
  const indent = /^\{\r?\n {4}"/.test(text) ? 4 : 2;
  const out = JSON.stringify(data, null, indent) + (text.endsWith('\n') ? '\n' : '');
  return { file, text, out, changed };
}

function planSitemap() {
  const file = resolve(ROOT, 'public', 'sitemap.xml');
  const text = readFileSync(file, 'utf8');
  const re = /^([ \t]*)<xhtml:link rel="alternate" hreflang="zh-CN" href="([^"]+)" \/>[ \t]*(\r?\n)/gm;
  const out = text.replace(re, (_, ind, href, nl) =>
    `${ind}<xhtml:link rel="alternate" hreflang="zh-Hant" href="${href}" />${nl}${ind}<xhtml:link rel="alternate" hreflang="zh" href="${href}" />${nl}`,
  );
  const remaining = (out.match(/hreflang="zh-CN"/g) || []).length;
  return { file, text, out, changed: out !== text, remaining };
}

// ---------------------------------------------------------------- dist
function checkDist() {
  // ZH_HANT_DIST=<hakemisto> tarkistaa muun puun (esim. livestä ladatut sivut) — sama logiikka, sama portti.
  const dist = process.env.ZH_HANT_DIST ? resolve(process.env.ZH_HANT_DIST) : resolve(ROOT, 'dist');
  const cn = resolve(dist, 'cn');
  const problems = [];
  if (!existsSync(cn)) { console.error('zh-hant --check-dist: dist/cn puuttuu — aja build ensin'); return 1; }
  const pages = walk(cn).filter((f) => f.endsWith('index.html'));
  for (const f of pages) {
    const rel = relative(ROOT, f).split(sep).join('/');
    const html = readFileSync(f, 'utf8');
    if (!/<html[^>]*\slang="zh-Hant"/.test(html)) problems.push(`${rel}: <html lang> ei ole zh-Hant`);
    if (!/hreflang="zh-Hant"/.test(html)) problems.push(`${rel}: hreflang zh-Hant puuttuu`);
    if (/hreflang="zh-CN"/.test(html)) problems.push(`${rel}: hreflang zh-CN on yhä headissa`);
    if (!/property="og:locale"\s+content="zh_TW"/.test(html) && !/content="zh_TW"\s+property="og:locale"/.test(html)) problems.push(`${rel}: og:locale ei ole zh_TW`);
    // Näkyvä teksti + JSON-LD; sovellusskriptit ja tyylit pois (LV-LOCALE-TITLE-kartta sisältää kaikki kielet).
    const text = html
      .replace(/<script\b(?![^>]*application\/ld\+json)[^>]*>[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
      .replace(/<!--[\s\S]*?-->/g, ' ')
      .replace(/<[^>]+>/g, '\n');
    for (const line of text.split('\n')) {
      const t = line.trim();
      if (!t || !HAN.test(t)) continue;
      const chars = simplifiedChars(t);
      const banned = bannedTerms(t);
      if (chars.size) problems.push(`${rel}: yksinkertaistettu merkki ${[...chars].join('')}: «${t.slice(0, 60)}»`);
      if (banned.length) problems.push(`${rel}: kielletty muoto ${banned.join(' ')}: «${t.slice(0, 60)}»`);
    }
  }
  const sm = resolve(dist, 'sitemap.xml');
  if (existsSync(sm)) {
    const x = readFileSync(sm, 'utf8');
    const cnCount = (x.match(/hreflang="zh-CN"/g) || []).length;
    if (cnCount) problems.push(`dist/sitemap.xml: ${cnCount} × hreflang="zh-CN"`);
    if (!/hreflang="zh-Hant"/.test(x)) problems.push('dist/sitemap.xml: hreflang zh-Hant puuttuu');
  }
  const uniq = [...new Set(problems)];
  console.log(`zh-hant --check-dist: ${pages.length} sivua dist/cn/, ${uniq.length} löydöstä`);
  for (const p of uniq.slice(0, 80)) console.log('  ✗ ' + p);
  return uniq.length ? 1 : 0;
}

// ---------------------------------------------------------------- main
function main() {
  if (CHECK_DIST) process.exit(checkDist());

  const files = walk(SRC).filter((f) => /\.(ts|tsx)$/.test(f));
  let touched = 0;
  let mismatches = 0;
  const report = [];
  const describe = (c) => (c.chars ? `yksinkertaistettu ${c.chars}` : `kielletty ${c.banned.join(' ')}`);

  for (const file of files) {
    const text = readFileSync(file, 'utf8');
    const changes = planFile(file, text);
    if (!changes.length) continue;
    const rel = relative(ROOT, file).split(sep).join('/');
    touched++;
    if (CHECK) {
      mismatches += changes.length;
      for (const c of changes.slice(0, 3)) {
        report.push(`${rel}:${lineOf(text, c.start)}: ${describe(c)} — «${c.before.trim().slice(0, 50)}»`);
      }
      if (changes.length > 3) report.push(`${rel}: … +${changes.length - 3} kohtaa`);
    } else {
      writeFileSync(file, apply(text, changes));
      if (VERBOSE) console.log(`  ${rel}: ${changes.length} kohtaa`);
    }
  }

  const idx = planIndexHtml();
  if (idx.changes.length) {
    touched++;
    if (CHECK) { mismatches += idx.changes.length; report.push(`index.html: LV-LOCALE-TITLE "zh-cn": ${describe(idx.changes[0])}`); }
    else writeFileSync(idx.file, apply(idx.text, idx.changes));
  }

  const meta = planMetaJson();
  if (meta && meta.changed) {
    touched++;
    if (CHECK) { mismatches += meta.changed; report.push(`scripts/prerender-meta.json: ${meta.changed} zh-CN-lohkoa yksinkertaistettuna (generoituu buildissa lähteestä)`); }
    else writeFileSync(meta.file, meta.out);
  }

  const sm = planSitemap();
  if (sm.changed || sm.remaining) {
    touched++;
    if (CHECK) { mismatches += 1; report.push(`public/sitemap.xml: hreflang="zh-CN" (${sm.remaining} riviä) — pitää olla zh-Hant + zh`); }
    else writeFileSync(sm.file, sm.out);
  }

  if (CHECK) {
    if (mismatches) {
      console.error(`zh-hant --check: ${mismatches} kohtaa ${touched} tiedostossa EI ole Taiwanin perinteistä.`);
      for (const r of report) console.error('  ✗ ' + r);
      console.error('  Korjaus: node scripts/zh-hant.mjs   (tai lisää natiivin valitsema muoto TW_TERMS/SHARED-tauluun)');
      process.exit(1);
    }
    console.log('zh-hant --check: OK — kaikki zh-teksti on Taiwanin perinteistä (zh-Hant).');
    return;
  }
  console.log(touched ? `zh-hant: ${touched} tiedostoa korjattu.` : 'zh-hant: ei korjattavaa — kaikki zh-teksti on jo perinteistä.');
}

main();
