/**
 * CJK-otsikoiden fraasirajat: mihin kohtiin kiinan/japanin otsikko saa katketa riviltä toiselle.
 *
 * Miksi: kiinan ja japanin rivitys saa katketa minkä tahansa kahden merkin välistä, ja otsikoiden
 * `text-wrap: balance` jakaa rivit tasan pituuden mukaan. Tulos oli 375 px:llä mm. "真實的拉普 / 蘭"
 * ja "プライバシ / ーポリシー". Pelkkä CSS ei korjaa tätä (mitattu Chromium + WebKit): `keep-all`
 * tekee välimerkittömästä kiinasta yhden katkeamattoman sanan, joka ylivuotaa ja katkeaa mihin sattuu,
 * ja `word-break: auto-phrase` toimii vain Chromiumissa ja vain japanille.
 *
 * Siksi otsikon tekstiin lisätään <wbr>-katkokohdat (cjkJsxRuntime.ts) ja CSS (index.css) sallii katkon
 * vain niissä. Teksti ei muutu: <wbr> on elementti, ei merkki (textContent, haku ja kopiointi ennallaan).
 *
 * Jako = selaimen oma Intl.Segmenter (ICU) + säännöt. ICU pirstoo translitteroidut paikannimet
 * (拉|普|蘭, 羅|瓦|涅|米) ja taivutukset (待|って|く|れ|ない), joten paikannimet suojataan listalla ja
 * kieliopilliset palat liitetään naapuriinsa. Selain ilman Intl.Segmenteria = ei katkokohtia = vanha käytös.
 */

// Paikannimet, joiden sisällä ei koskaan katkea. Vain perinteinen kiina (sivuston /cn/ on zh-Hant, ja
// scripts/zh-hant.mjs --check valvoo sitä) ja japani.
const PAIKAT = [
  '拉普蘭', '芬蘭', '於拉斯', '伊納里', '羅瓦涅米', '薩利色爾卡', '赫爾辛基', '薩米', '伊瓦洛', '基蒂萊',
  '聖誕老人村', '聖誕老人', '魯卡', '庫薩莫', '皮哈', '凱米', '盧奧斯托', '列維', '萊維', '托爾尼奧',
  'ラップランド', 'フィンランド', 'ロヴァニエミ', 'レヴィ', 'ユッラス', 'サーリセルカ', 'ヘルシンキ', 'イナリ',
  'トルニオ', 'サーミ', 'キッティラ', 'イヴァロ', 'クーサモ', 'サンタクロース村', 'サンタクロース', 'オウル',
  'ルオスト', 'ピュハ', 'ソダンキュラ', 'キルピスヤルヴィ', 'ムオニオ', 'ケミ', 'ルカ',
];

const HAN = /\p{Script=Han}/u;
const HIRA = /\p{Script=Hiragana}/u;
const KATA = /[\p{Script=Katakana}ー]/u;
const KANA = /[\p{Script=Hiragana}\p{Script=Katakana}]/u;
const HANGUL = /\p{Script=Hangul}/u;
export const CJK = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u;
const KIRJAIN = /[\p{L}\p{N}]/u;
const NUMERO = /[0-9０-９]/u;
// ei rivin alkuun (kinsoku): välimerkit, sulkevat sulkeet, pienet kanat, pidennysmerkki
const EI_ALKUUN = /^[、。，．,.!！?？:：;；)）\]］}｝」』】〕〉》”’…‥・·ー–—〜~ぁぃぅぇぉっゃゅょゎァィゥェォッャュョヮヵヶ％%]/u;
// ei rivin loppuun: avaavat sulkeet ja lainausmerkit
const EI_LOPPUUN = /[(（[［{｛「『【〔〈《“‘]$/u;
// kiinan rakennepartikkelit kuuluvat edelliseen sanaan
const ZH_EDELLISEEN = /^[的地得了們著過之]$/u;
// japanin kunniaetuliite kuuluu seuraavaan sanaan
const JA_ETULIITE = /^[ごお御]$/u;
// japanin partikkeli, jonka JÄLKEEN on lauseenosaraja
const JA_PARTIKKELI = /^[のはがをにへとでもやて]$/u;
// leveysyksikköä (CJK-merkki = 1): pidempään yksikköön palautetaan pehmeät rajat
const RAJA = 6;

type Luokka = 'kova' | 'pehmea' | 'ok';

let segmentoijat: { ja: Intl.Segmenter; zh: Intl.Segmenter } | null | undefined;
function segmentoija(ja: boolean): Intl.Segmenter | null {
  if (segmentoijat === undefined) {
    segmentoijat = typeof Intl !== 'undefined' && typeof Intl.Segmenter === 'function'
      ? { ja: new Intl.Segmenter('ja', { granularity: 'word' }), zh: new Intl.Segmenter('zh', { granularity: 'word' }) }
      : null;
  }
  return segmentoijat ? (ja ? segmentoijat.ja : segmentoijat.zh) : null;
}

/** Katkokohdat koodipisteindekseinä ([...teksti]-taulukossa), nousevassa järjestyksessä. */
export function katkokohdat(teksti: string): number[] {
  if (!CJK.test(teksti) || HANGUL.test(teksti)) return [];
  const ja = KANA.test(teksti);
  const seg = segmentoija(ja);
  if (!seg) return [];
  const cps = [...teksti];
  const osat: string[][] = [];
  for (const s of seg.segment(teksti)) osat.push([...s.segment]);
  const alku: number[] = [];
  let pos = 0;
  for (const o of osat) { alku.push(pos); pos += o.length; }

  const suojattu = new Array<boolean>(cps.length + 1).fill(false);
  const nimenAlku = new Array<boolean>(cps.length + 1).fill(false);
  for (const p of PAIKAT) {
    const pc = [...p];
    for (let i = 0; i + pc.length <= cps.length; i++) {
      let osuu = true;
      for (let j = 0; j < pc.length; j++) if (cps[i + j] !== pc[j]) { osuu = false; break; }
      if (osuu) { nimenAlku[i] = true; for (let j = 1; j < pc.length; j++) suojattu[i + j] = true; }
    }
  }

  const luokka = new Map<number, Luokka>();
  for (let k = 1; k < osat.length; k++) {
    const i = alku[k];
    const ed = osat[k - 1], nyt = osat[k];
    const a = cps[i - 1], b = cps[i];
    const edTeksti = ed.join(''), nytTeksti = nyt.join('');
    const ennenEd = alku[k - 1] > 0 ? cps[alku[k - 1] - 1] : '';
    const edLauseenAlussa = !ennenEd || (!CJK.test(ennenEd) && !NUMERO.test(ennenEd)); // 4|個 ei ole lauseenalku
    let l: Luokka = 'ok';
    if (suojattu[i]) l = 'kova';
    else if (/\s/u.test(a) || /\s/u.test(b)) l = 'kova'; // välilyönti on jo katkokohta
    else if (!CJK.test(a) && !CJK.test(b)) l = 'kova'; // latinalaisen tekstin sisään ei <wbr>ää
    else if (EI_ALKUUN.test(b) || EI_LOPPUUN.test(a)) l = 'kova';
    else if (NUMERO.test(a) && CJK.test(b)) l = 'kova'; // luku ja sen yksikkö: 4つ, 6月, 4種
    else if (CJK.test(a) && NUMERO.test(b)) l = /[第約每毎共計近逾]/u.test(a) ? 'kova' : 'pehmea'; // 第6條; 6月から|7月
    else if (ja) {
      if (JA_ETULIITE.test(edTeksti)) l = 'kova'; // ご|期待
      else if (ed.length === 1 && HAN.test(a) && KATA.test(b)) l = 'kova'; // etuliite: 当|サイト
      else if (nyt.length === 1 && HAN.test(b) && KATA.test(a)) l = 'kova'; // pääte: イグルー|泊
      else if (HIRA.test(b) && KIRJAIN.test(a) && !JA_ETULIITE.test(nytTeksti)) {
        // Partikkeli ja okurigana kuuluvat edelliseen. Pehmeä (vain pitkässä yksikössä) on apuverbi tai
        // muodollinen substantiivi (いただける, こと) sekä partikkelin JÄLKEINEN raja (空が|こたえて):
        // ICU:n muut hiraganapalat ovat usein taivutuksen osia (計画|しま|しょう), joiden väliin ei katketa.
        const apuverbi = [...nytTeksti].every((c) => HIRA.test(c)) && /^(いただ|いた|いる|いく|くださ|くれ|こと)/u.test(nytTeksti);
        l = apuverbi || JA_PARTIKKELI.test(edTeksti) ? 'pehmea' : 'kova';
      } else if (HAN.test(a) && HAN.test(b)) l = ed.length >= 2 && nyt.length >= 2 ? 'pehmea' : 'kova'; // kanjiyhdyssana
      else if (KATA.test(a) && KATA.test(b) && (ed.length <= 2 || nyt.length <= 2)) l = 'kova'; // ハス|キー
    } else {
      if (ZH_EDELLISEEN.test(nytTeksti)) l = 'kova'; // 的 edelliseen
      else if (nyt.length === 1 && HAN.test(b) && HAN.test(a) && !nimenAlku[i]) l = 'kova'; // yksittäinen merkki edelliseen
      else if (ed.length === 1 && HAN.test(a) && edLauseenAlussa) l = 'kova'; // lauseenalun yksittäinen merkki seuraavaan
    }
    luokka.set(i, l);
  }

  // leveys välilyöntien välistä (välilyönti on jo katkokohta): CJK ja kokoleveä = 1, muu = 0,55
  const leveys = (x: number, y: number) => {
    let w = 0, max = 0;
    for (let j = x; j < y; j++) {
      const c = cps[j];
      if (/\s/u.test(c)) { max = Math.max(max, w); w = 0; continue; }
      w += CJK.test(c) || /[\u3000-\u303f\uff00-\uffef]/u.test(c) ? 1 : 0.55;
    }
    return Math.max(max, w);
  };
  const ensisijaiset = [...luokka].filter(([, l]) => l === 'ok').map(([i]) => i);
  const rajat = [0, ...ensisijaiset, cps.length];
  const tulos = new Set(ensisijaiset);
  for (let r = 0; r + 1 < rajat.length; r++) {
    const x = rajat[r], y = rajat[r + 1];
    if (leveys(x, y) <= RAJA) continue;
    for (const [i, l] of luokka) if (l === 'pehmea' && i > x && i < y) tulos.add(i);
  }
  return [...tulos].sort((p, q) => p - q);
}

/** Teksti fraaseiksi katkokohtien kohdalta (testeille ja mittareille). */
export function fraasit(teksti: string): string[] {
  const cps = [...teksti];
  const out: string[] = [];
  let prev = 0;
  for (const i of katkokohdat(teksti)) { out.push(cps.slice(prev, i).join('')); prev = i; }
  out.push(cps.slice(prev).join(''));
  return out;
}
