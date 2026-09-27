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
 *   node scripts/zh-hant.mjs --audit       RAPORTTI (ei portti): fraasit, jotka muunnin ohittaa tai OpenCC muuntaa väärään
 *                                          merkitykseen. Aja kun zh-tekstiä on tullut lisää; `--strict` = exit 1 jos löytyy.
 *
 * 🔴🔴 Sokea piste (mitattu 27.9.2026, natiivikatselmus 390 esiintymää): tunnistin katsoo MERKKEJÄ, joten fraasi jonka
 *    kaikki merkit ovat kummassakin kirjoitusjärjestelmässä (伙伴, 信息, 每周) ei koskaan muunnu; OpenCC:n oma sanakirja
 *    pitää osan ennallaan (合作伙伴 → 合作伙伴); ja sen IT-sanasto valitsee väärän merkityksen (窗口 → 視窗 "tietokoneen
 *    ikkuna", 发布 → 釋出, 审核 → 稽核, 参数 → 引數, 回归 → 迴歸). Löydökset ovat TW_TERMS-taulussa (globaali rivi vain
 *    muodolle, joka ei voi osua sanarajan yli) tai korjattu lähteeseen; `--audit` näyttää uudet.
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
import { createRequire } from 'node:module';
import ts from 'typescript';
import * as OpenCC from 'opencc-js';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const CHECK = args.includes('--check');
const CHECK_DIST = args.includes('--check-dist');
const VERBOSE = args.includes('--verbose');
const AUDIT = args.includes('--audit');
const STRICT = args.includes('--strict');

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
  ['法律信息', '法律資訊'], // lakisivujen otsake (kicker): Taiwanissa 資訊; OpenCC:n fraasimuunnos ohittaa segmentin jossa ei ole yksinkertaistettua merkkiä (26.9.2026, kanonisen shared/Legalin jako)
  ['企業程式碼', '企業代碼'], // tietosuojan s1Body: yritystunnus, ei ohjelmakoodi; OpenCC s2twp muuntaa 代码 → 程式碼 (27.9.2026, lakitekstierä f14c93f)
  // Natiivikatselmus 27.9.2026 (3 lukijaa + tuomari, 390 esiintymää / 60 muotoa; mittaus `node scripts/zh-hant.mjs --audit`).
  // Globaali rivi vain muodolle, joka ei voi osua sanarajan yli: 合同 ⊂ 結合同時, 運營 ⊂ 客運營業, 域名 ⊂ 區域名稱, 引數 ⊂ 吸引數千,
  // 釋出 ⊂ 解釋出, 徒步 ⊂ 行人徒步區, 博客 ⊂ 博客來, 營銷 ⊂ 經營銷售 ⇒ niille fraasirivit (vendoroidut src/shared/*) tai korjaus lähteeseen.
  ['伙伴', '夥伴'], // Taiwanin muoto 夥伴 (合作夥伴); OpenCC:n sanakirja pitää 合作伙伴/戰略伙伴/貿易伙伴 ennallaan ja 伙 on SHARED-listalla, joten muunnin ei korjannut näitä (27.9.2026)
  ['每周', '每週'], // viikko = 週 (MOE); 周 on SHARED-listalla ⇒ muunnin ohitti (27.9.2026)
  ['搜索', '搜尋'], // verkkohaku = 搜尋; s2twp muuntaa 搜索 vain jaksossa, jossa on yksinkertaistettu merkki (27.9.2026)
  ['隱私政策', '隱私權政策'], // Taiwanin vakiomuoto (Google, Apple, gov.tw) (27.9.2026)
  ['雪地摩托車', '雪上摩托車'], // OpenSEO Taiwan 27.9.2026: 雪上摩托車 260/kk, 雪地摩托車 170, 雪地摩托 50 (27.9.2026)
  ['雪地摩托', '雪上摩托車'], // sama; pidempi muoto ensin (27.9.2026)
  ['身份', '身分'], // MOE-standardi (身分證) (27.9.2026)
  ['合法利益', '正當利益'], // GDPR 6(1)(f) legitimate interests, 國發會:n käännös (27.9.2026)
  ['通用資料保護條例', '一般資料保護規則'], // GDPR:n virallinen nimi Taiwanissa (國發會); 通用資料保護條例 on Manner-Kiinan käännös (27.9.2026)
  ['跟蹤', '追蹤'], // seuranta; 跟蹤 = ihmisen varjostaminen (跟蹤狂) (27.9.2026)
  ['彈窗', '彈出視窗'], // popup (27.9.2026)
  ['標籤頁', '分頁'], // selaimen välilehti (27.9.2026)
  ['賬', '帳'], // MOE: 帳 (帳號, 帳單, 結帳) (27.9.2026)
  ['識別符號', '識別碼'], // OpenCC: 标识符 → 識別符號 (ohjelmointi); evästeen tunniste = 識別碼 (27.9.2026)
  ['小元件', '小工具'], // OpenCC: 小组件 → 小元件; widget = 小工具 (27.9.2026)
  ['運營商', '業者'], // palvelun tuottava yritys = 業者; 運營 on Manner-Kiinan sana (27.9.2026)
  ['稽核', '審核'], // OpenCC: 审核 → 稽核 (tilintarkastus); tarkastaa ennen julkaisua = 審核 (27.9.2026)
  ['迴歸', '回歸'], // OpenCC: 回归 → 迴歸 (regressio); palata = 回歸 (27.9.2026)
  ['收貨地址', '收件地址'], // verkkokaupan toimitusosoite Taiwanissa (27.9.2026)
  ['招聘', '招募'], // rekrytointi (就業服務法: 招募); s2twp jättää 招聘 (27.9.2026)
  ['“', '「'], // Taiwanin lainausmerkit 「」 (Vesa 27.9.2026)
  ['”', '」'], // sama
  // Fraasirivit (27.9.2026): jaetuista src/shared-tiedostoista tulevat kohdat, joissa merkitys ratkaisee eikä paljas muoto
  // kelpaa riviksi. Vasen puoli on se muoto, joka on jäljellä yllä olevien rivien jälkeen (跟蹤 → 追蹤 ajetaan ensin).
  ['旅行博客', '旅行部落格'], // alatunnisteen verkostovalikko; paljas 博客 osuisi Taiwanin kirjakauppaan 博客來
  ['獨立運營', '獨立營運'], // yhtiö toimii = 營運 (paljas 運營 osuisi muotoon 客運營業)
  ['運營一個', '營運一個'],
  ['運營的一部分', '營運的一部分'],
  ['在芬蘭運營', '在芬蘭營運'],
  ['運營方：LaPeso', '營運方：LaPeso'], // ehtojen otsake; LaPeso ja Oy erottaa sitomaton väli
  ['運營。', '營運。'],
  ['運營者：LaPeso', '營運方：LaPeso'], // DSA-yhteyspiste: sama nimike kuin otsakkeessa
  ['運營的芬蘭拉普蘭', '營運的芬蘭拉普蘭'],
  ['標準合同條款', '標準契約條款'], // GDPR SCC (國發會); paljas 合同 osuisi muotoon 適合同行
  ['旅遊服務合同', '旅遊服務契約'],
  ['買賣合同', '買賣契約'],
  ['、合同', '、契約'], // työpaikkavariantin luettelot (申請、合同或…, 薪資、合同、許可)
  ['\'套餐\'', '\'套裝行程\''], // alatunnisteen pilari "Packages" (literaali on pelkkä 套餐; 套餐 = ateria Taiwanissa)
  ['解鎖套餐', '解鎖方案'],
  ['投訴權（第77條）', '申訴權（第77條）'], // GDPR 77 art.
  ['監管機構投訴', '監管機關申訴'], // valvontaviranomainen = 監管機關 (國發會)
  ['監管機構與服務使用者的聯絡點', '監管機關與服務使用者的聯絡點'], // DSA 11–12 art.
  ['直接營銷', '直接行銷'], // GDPR 21 art.; paljas 營銷 osuisi muotoon 經營銷售
  ['點選和滾動', '點選和捲動'], // vieritys = 捲動
  ['自有域名上', '自有網域上'], // paljas 域名 osuisi muotoon 區域名稱
  ['版權侵權', '著作權侵權'], // Taiwanin laki: 著作權
  ['使用者畫像', '使用者剖析'], // GDPR profiling (國發會)
  ['充分性決定', '適足性認定'], // GDPR 45 art. adequacy decision (國發會)
  ['追蹤引數', '追蹤參數'], // URL-parametri = 參數; OpenCC: 参数 → 引數 (funktion argumentti); paljas 引數 osuisi muotoon 吸引數百萬
  ['合作引數', '合作參數'],
  ['網站正常執行', '網站正常運作'], // OpenCC: 运行 → 執行 (ohjelman ajo); sivusto toimii = 運作
  ['同意 Cookie 的映象', '同意 Cookie 的副本'], // OpenCC: 镜像 → 映象
  ['高階廣告位', '高檔廣告位'], // OpenCC: 高端 → 高階 (高階 = korkea arvo-/virka-asema)
  ['高階餐飲', '高檔餐飲'],
  ['釋出檔次', '刊登方案'], // työpaikkailmoitusten maksulliset tasot (104/518-sanasto)
  ['銷售和發貨', '銷售和出貨'], // Taiwanin kauppa: 出貨; paljas 發貨 osuisi muotoon 批發貨品
  ['會話資料', '工作階段資料'], // session = 工作階段 (會話 = keskustelu)
  ['會話狀態', '工作階段狀態'],
  ['會話至30天', '工作階段至30天'], // ei 會話至: osuisi muotoon 會話至少
  ['我們釋出', '我們發布'], // julkaista = 發布; OpenCC: 发布 → 釋出 (ohjelmistojulkaisu); paljas 釋出 osuisi muotoon 解釋出現
  ['在釋出前', '在發布前'],
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

// ---------------------------------------------------------------- --audit (raportti, ei portti)
/**
 * Sokean pisteen raportti (27.9.2026). Muunnin tarkistaa vain yksinkertaistetut MERKIT, joten fraasi jonka kaikki merkit
 * ovat kummassakin kirjoitusjärjestelmässä (伙伴, 信息, 每周) ei koskaan muunnu, OpenCC:n oma sanakirja jättää osan ennalleen
 * (合作伙伴 → 合作伙伴) ja sen IT-sanasto valitsee väärän merkityksen (窗口 → 視窗, 发布 → 釋出, 审核 → 稽核, 参数 → 引數).
 * Mitattu 27.9.2026: 390 esiintymää / 60 muotoa, natiivikatselmus 3 lukijaa + tuomari.
 * Raportti listaa zh-tekstistä (samat alipuut kuin muunnos + src-hakemiston JSON-tiedostojen zh-tekstit, joita muunnos ei lue):
 *   A  fraasit, jotka OpenCC:n fraasisanakirja (STPhrases, TWPhrases) muuttaisi — sanajaosta riippumatta
 *   M  MANNER-listan Manner-Kiinan sanasto, jota OpenCC ei tunne
 *   I  IT_SANASTO-listan OpenCC-tuotokset, joiden merkitys pitää tarkistaa (視窗 = tietokoneen ikkuna)
 *   T  TW_TERMS-taulun kielletty muoto JSON-tiedostossa (--check ei lue JSONia; --check-dist näkee vain renderöidyn)
 *   Q  suora lainausmerkki "…" tai \"…\" kiinalaisen tekstin vieressä: Taiwanissa 「」 (Vesa 27.9.2026), myös vieraskieliselle
 *      sanalle (標為「tulisija」); “” hoitaa TW_TERMS-rivi, suoraa merkkiä ei voi korvata rivillä (koodin lainausmerkit)
 *   W  周 muussa kuin ympäri-merkityksessä (周圍, 周邊 …) — viikko on Taiwanissa 週 (復活節週, 木屋週)
 * paitsi AUDIT_OK-listan kattamat kohdat. Jokainen raportin rivi = natiivin päätös: TW_TERMS-rivi (vain jos vasen puoli ei
 * voi osua sanarajan yli), fraasirivi, korjaus lähteeseen tai AUDIT_OK. `--audit --strict` = exit 1 jos kattamattomia on.
 */
const MANNER = [
  ['運營', '營運 / 經營'], ['合同', '契約 / 合約'], ['高端', '高檔'], ['質量', '品質'], ['信息', '資訊 / 訊息 / 資料'], ['視頻', '影片'],
  ['支持', '支援 (vain tekninen tuki)'], ['徒步', '健行 (kävelymatka = 步行)'], ['合作方', '合作夥伴'], ['物業', '住宿 / 房源'],
  ['套餐', '方案 / 行程 (ateria = 套餐)'], ['營銷', '行銷'], ['投訴', '申訴'], ['監管機構', '監管機關 / 主管機關'], ['滾動', '捲動'],
  ['域名', '網域'], ['版權', '著作權 (laki)'], ['畫像', '剖析 (GDPR profiling)'], ['充分性', '適足性 (GDPR)'], ['騎行', '騎乘 / 登山車'],
  ['推送', '推播'], ['掃碼', '掃描'], ['大堂', '大廳'], ['床品', '寢具'], ['反饋', '回饋'], ['社交媒體', '社群媒體'], ['渠道', '管道'],
  ['帖子', '貼文'], ['公交', '公車'], ['大巴', '巴士'], ['聯繫', '聯絡'], ['數據', '資料'], ['用戶', '使用者'], ['視窗期', '時段'],
  ['招聘', '徵才 / 招募'], ['發貨', '出貨'], ['收貨', '收件'], ['充電樁', '充電站'], ['會話', '工作階段'], ['網上', '線上'], ['在線', '線上'],
  ['短信', '簡訊'], ['默認', '預設'], ['屏幕', '螢幕'], ['打印', '列印'], ['鏈接', '連結'], ['網絡', '網路'], ['互聯網', '網際網路'],
  ['菜單', '選單 (ruokalista = 菜單)'], ['軟件', '軟體'], ['硬件', '硬體'], ['程序', '程式 (menettely = 程序)'], ['質素', '品質'],
  ['單人間', '單人房'], ['雙人間', '雙人房'], ['標間', '標準房'], ['衛生間', '浴室 / 洗手間'], ['洗漱用品', '盥洗用品'], ['空調', '冷氣'],
  ['航站樓', '航廈'], ['青旅', '青年旅館'], ['房車', '露營車'], ['寬帶', '寬頻'], ['服務區', '休息站'], ['羽絨服', '羽絨外套'],
  ['打車', '叫車'], ['的士', '計程車'], ['充值', '儲值'], ['二維碼', 'QR碼'], ['點贊', '按讚'], ['關注', '追蹤 (some)'], ['博主', '部落客'],
  ['短視頻', '短影音'], ['緩存', '快取'], ['算法', '演算法'], ['景區', '風景區'], ['水平', '程度 / 水準'],
];
const IT_SANASTO = ['視窗', '釋出', '稽核', '引數', '連線', '執行', '識別符號', '堆疊', '呼叫', '映象', '元件', '高階', '預設', '最佳化', '迴歸', '選單', '程式碼', '型別', '專案'];
/** Natiivin hyväksymät muodot ja sanarajan yli osuvat väärät hälytykset. Osuma on kunnossa, jos se on jonkin tämän merkkijonon sisällä. */
const AUDIT_OK = [
  // hyväksytyt Taiwanin muodot (27.9.2026 natiivikatselmus); OpenCC ehdottaisi niille takaisin väärää (參數 → 引數, 連接 → 連線)
  '查看', '打開', '發送', '發布', '桑拿', '檢視', '最佳化', '彈出視窗', '不可執行', '執行長', '切換選單', '合作夥伴', '企業代碼', '週次',
  '參數', '連接', '充電樁', '試味菜單', '大多數旅客預設',
  // sanarajan yli osuvat OpenCC-fraasit (本頁面+包含, 適合+家庭 …)
  '本頁面包含', '適合家庭', '信念的', '公里外', '批准的', '位於山', '用於歸', '慢遊回', '旅遊資', '還是只是',
];

function audit(strict) {
  const req = createRequire(import.meta.url);
  const dictDir = join(dirname(req.resolve('opencc-js')), '..', 'esm-lib', 'dict'); // paketin exports ei vie sanakirjoihin
  const dict = (n) => readFileSync(join(dictDir, `${n}.js`), 'utf8').match(/export default "([\s\S]*)";?\s*$/)[1].split('|').map((e) => e.split(' '));
  const tw2cn = OpenCC.Converter({ from: 'tw', to: 'cn' });
  const rel = (f) => relative(ROOT, f).split(sep).join('/');
  const segs = [];
  for (const file of walk(SRC).filter((f) => /\.(ts|tsx)$/.test(f))) {
    const text = readFileSync(file, 'utf8');
    for (const [s, e] of zhSpans(file, text)) segs.push({ where: `${rel(file)}:${lineOf(text, s)}`, text: text.slice(s, e), json: false });
  }
  const jsonZh = (v, zh, out, path) => {
    if (typeof v === 'string') { if (zh && HAN.test(v)) out.push([path, v]); return; }
    if (Array.isArray(v)) { v.forEach((x, i) => jsonZh(x, zh, out, `${path}[${i}]`)); return; }
    if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) jsonZh(x, zh || ZH_KEY.test(k) || k === 'zh-CN', out, `${path}.${k}`);
  };
  for (const file of walk(SRC).filter((f) => f.endsWith('.json'))) {
    let data; try { data = JSON.parse(readFileSync(file, 'utf8')); } catch { continue; }
    const out = []; jsonZh(data, ZH_FILE.test(file.split(/[\\/]/).pop()), out, '');
    for (const [path, text] of out) segs.push({ where: `${rel(file)}${path}`, text, json: true });
  }
  const idx = planIndexHtml();
  for (const m of idx.text.matchAll(/"zh-cn"\s*:\s*"((?:[^"\\]|\\.)*)"/g)) segs.push({ where: 'index.html', text: m[1], json: false });

  const HAN_RUN = /[㐀-䶿一-鿿豈-﫿]+/g;
  const grams = new Set();
  for (const s of segs) for (const m of s.text.matchAll(HAN_RUN)) for (let i = 0; i < m[0].length; i++) for (let n = 2; n <= 12 && i + n <= m[0].length; n++) grams.add(m[0].slice(i, i + n));
  const banned = new Set(TW_TERMS.map(([f]) => f));
  const cand = new Map(); // muoto → [ehdotus, luokka]
  const add = (m, to, kind) => { if (m.length >= 2 && m !== to && grams.has(m) && !cand.has(m) && !banned.has(m)) cand.set(m, [to, kind]); };
  for (const m of IT_SANASTO) add(m, 'tarkista merkitys (OpenCC:n IT-sanasto)', 'I');
  for (const [m, to] of MANNER) add(m, to, 'M');
  for (const name of ['STPhrases', 'STPhrases_GeneratedFromRegionalPhrases']) {
    for (const [k] of dict(name)) if (k && grams.has(k) && !simplifiedChars(k).size) add(k, convert(k), 'A');
  }
  for (const [k] of dict('TWPhrases')) if (k && grams.has(k) && !simplifiedChars(k).size) add(k, convert(tw2cn(k)), 'A');

  const within = (text, i, len) => AUDIT_OK.some((ok) => {
    for (let j = text.indexOf(ok); j >= 0; j = text.indexOf(ok, j + 1)) if (j <= i && i + len <= j + ok.length) return true;
    return false;
  });
  const hits = new Map(); // muoto → [paikat]
  for (const s of segs) {
    for (const [m, [to, kind]] of cand) {
      for (let i = s.text.indexOf(m); i >= 0; i = s.text.indexOf(m, i + 1)) {
        if (within(s.text, i, m.length)) continue;
        if (!hits.has(m)) hits.set(m, { to, kind, at: [] });
        hits.get(m).at.push(`${s.where} «${s.text.slice(Math.max(0, i - 8), i + m.length + 8).replace(/\s+/g, ' ').trim()}»`);
      }
    }
    if (s.json) for (const f of banned) if (s.text.includes(f)) {
      if (!hits.has(f)) hits.set(f, { to: TW_TERMS.find(([x]) => x === f)[1], kind: 'T', at: [] });
      hits.get(f).at.push(`${s.where} (JSON: muunnin ei lue — korjaa käsin)`);
    }
    // 周 = viikko ⇒ Taiwanissa 週 (MOE: 週末, 一週, 復活節週); 周 vain merkityksessä ympäri (周圍, 周邊, 周遭, 周到, 周全).
    // 周 on SHARED-listalla, eikä OpenCC tunne yhdyssanoja kuten 复活节周 ⇒ 17 kohtaa jäi 27.9.2026 asti.
    for (const m of s.text.matchAll(/周(?![圍邊遭到全密旋折])/g)) {
      if (within(s.text, m.index, 1)) continue;
      const key = '周 (viikko?)';
      if (!hits.has(key)) hits.set(key, { to: '週', kind: 'W', at: [] });
      hits.get(key).at.push(`${s.where} «${s.text.slice(Math.max(0, m.index - 8), m.index + 8).replace(/\s+/g, ' ').trim()}»`);
    }
    // suorat lainausmerkit kiinalaisen tekstin vieressä (sekä escapattu \" että paljas ")
    for (const m of s.text.matchAll(/(\\?")([^"\\\n]{1,60})\\?"/g)) {
      const before = s.text[m.index - 1] || '', after = s.text[m.index + m[0].length] || '';
      if (!/[㐀-鿿，。：、（）！？；「」]/.test(before + after)) continue;
      const key = '"…"';
      if (!hits.has(key)) hits.set(key, { to: '「…」', kind: 'Q', at: [] });
      hits.get(key).at.push(`${s.where} «${s.text.slice(Math.max(0, m.index - 8), m.index + m[0].length + 6).replace(/\s+/g, ' ').trim()}»`);
    }
  }
  const n = [...hits.values()].reduce((a, h) => a + h.at.length, 0);
  console.log(`zh-hant --audit: ${segs.length} zh-jaksoa, ${cand.size} ehdokasmuotoa tekstissä, ${n} kattamatonta esiintymää (${hits.size} muotoa)`);
  for (const [m, h] of [...hits].sort((a, b) => b[1].at.length - a[1].at.length)) {
    console.log(`  [${h.kind}] ${m} → ${h.to}  ×${h.at.length}`);
    for (const a of h.at.slice(0, 4)) console.log(`       ${a}`);
    if (h.at.length > 4) console.log(`       … +${h.at.length - 4}`);
  }
  if (!n) console.log('  Ei kattamattomia: jokainen ehdokas on TW_TERMS-taulussa tai AUDIT_OK-listalla.');
  return strict && n ? 1 : 0;
}

// ---------------------------------------------------------------- main
function main() {
  if (CHECK_DIST) process.exit(checkDist());
  if (AUDIT) process.exit(audit(STRICT));

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
