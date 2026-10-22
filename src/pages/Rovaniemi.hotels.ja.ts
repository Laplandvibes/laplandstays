import type { RovaniemiHotelsCopy } from './Rovaniemi.hotels.types'

/**
 * Rovaniemi hotels by area, Japanese (22.10.2026). Translated from Rovaniemi.hotels.en.ts: no fact or
 * number beyond the English notes. Place names in this site's katakana (オウナスヴァーラ山, ケミ川, オウナス川,
 * サンタクロース村, 北極圏線, サンタパーク); street names and Oikarainen stay Latin. Notes are list rows:
 * noun endings, です・ます only where a sentence ends in a verb. Decimal point (2.2 km), units with a space
 * as in GlassIgloos.copy.ja.ts.
 */
const ja: RovaniemiHotelsCopy = {
  intro: '四つのエリアに分けて、20軒のホテルを紹介します。ホテル名を選ぶと、当サイトの予約パートナーにあるそのホテルのページが開き、ご希望の日程の料金を確認できます。',
  groups: [
    {
      title: '市中心部',
      items: [
        { key: 'arcticLight', note: '1949年に建てられたロヴァニエミの旧市庁舎が、いまは57室のブティックホテルに。一部の客室は専用サウナ付き。' },
        { key: 'scandicRovaniemiCity', note: 'Koskikatu沿い、ショッピングセンターの隣。空港バスがホテル前に停まり、Superior Saunaタイプの客室は専用サウナ付き。' },
        { key: 'scandicPohjanhovi', note: 'ケミ川のほとり。川が見える客室が多く、冬はホテルの前からスノーモービルのルートが始まります。' },
        { key: 'arcticCityHotel', note: 'Pekankatuにある90室のホテル。どの料金プランにも朝食、サウナ、駐車場、Wi-Fiが含まれ、空港バスの停留所までは300 mです。' },
        { key: 'sokosVaakuna', note: 'Koskikatuにある159室のホテル。共用サウナは毎晩利用できます。' },
        { key: 'santasHotelSantaClaus', note: '中心部のKorkalonkatu沿い、空港から約10 km。館内にサウナ施設があります。' },
        { key: 'postmasterHotel', note: '1950年代の郵便局の建物を修復した、49室のホテル。一部のスイートにはミニキッチンとサウナがあります。' },
        { key: 'hotelAakenus', note: '中心部から徒歩圏の静かな地区にある家族経営のホテル。客室45室と、キッチン付きのアパートメント20室。' },
      ],
    },
    {
      title: 'オウナスヴァーラ山',
      items: [
        { key: 'skyOunasvaara', note: 'オウナスヴァーラ山の山頂にあり、中心部から4 km、最寄りのゲレンデまで20 m。サウナ付きの客室とファミリールームがあります。' },
        { key: 'laplandHotelsOunasvaara', note: 'ケミ川とゲレンデの間に建つキャビンとホリデーアパートメント。どれも専用サウナとキッチン付きで、中心部まで3 km。' },
        { key: 'santasport', note: 'オウナスヴァーラのトレイルに隣接するオリンピック・トレーニングセンター。中心部まで2 kmで、一部の客室にはサウナとバルコニーがあります。' },
      ],
    },
    {
      title: 'サンタクロース村と北極圏線',
      items: [
        { key: 'santaClausHolidayVillage', note: 'サンタクロース村の中、北極圏線上。コテージ、スイート、グラスイグルーのコテージがあり、すべて専用サウナ付き。' },
        { key: 'santasIgloosArcticCircle', note: 'サンタクロース村にある北向きのグラスイグルー。各棟にオーロラアラームがあり、空港まで5 km。' },
        { key: 'arcticTreeHouse', note: '森の斜面に建つ、壁一面がガラスのスイート。サンタパークから100 m、サンタクロース村から2.2 km。' },
        { key: 'novaSkyland', note: 'すべての客室とキャビンに専用サウナがあります。サンタクロース村まで約300 m、空港から車で5分。' },
        { key: 'glassResort', note: 'サンタクロース村内の森に建つ、専用サウナと屋外ホットタブ付きのガラス張りアパートメント。' },
      ],
    },
    {
      title: '郊外',
      items: [
        { key: 'apukka', note: '二つの湖に挟まれた原野に建つグラスイグルー。市街から18 kmで、リゾートが運行するシャトルバスで中心部と結ばれています。' },
        { key: 'arcticSnowHotel', note: '12月15日から営業する雪と氷のホテルと、360度のガラス屋根を備えた暖房付きグラスイグルー。中心部から26 km。' },
        { key: 'invisibleForest', note: 'オウナス川沿いに建つ、専用サウナ、屋外ホットタブ、キッチン付きのミラーガラス張りのスイート。中心部から車で10分足らず。' },
        { key: 'silverBirch', note: 'Oikarainen近くの湖畔に、地上3 mの高さのガラスキャビンがわずか5棟。宿泊は連泊プランで販売されています。' },
      ],
    },
  ],
}

export default ja
