import type { RovaniemiHotelsCopy } from './Rovaniemi.hotels.types'

/**
 * Rovaniemen hotellit alueittain, suomi (22.10.2026). Kirjoitettu suomeksi samoista faktoista kuin
 * englanninkielinen versio; kaikki hotellien omilta sivuilta 22.10.2026.
 */
const fi: RovaniemiHotelsCopy = {
  intro: '20 hotellia neljällä alueella. Nimi avaa hotellin oman sivun varauskumppanimme palvelussa, hinnat valitsemillesi päiville.',
  groups: [
    {
      title: 'Keskusta',
      items: [
        { key: 'arcticLight', note: 'Rovaniemen entinen kaupungintalo vuodelta 1949, nyt 57 huoneen boutique-hotelli; osassa huoneista on oma sauna.' },
        { key: 'scandicRovaniemiCity', note: 'Koskikadulla kauppakeskusten vieressä. Lentokenttäbussi pysähtyy oven edessä, ja Superior Sauna -huoneissa on oma sauna.' },
        { key: 'scandicPohjanhovi', note: 'Kemijoen rannalla. Monesta huoneesta näkyy joelle, ja talvella moottorikelkkareitit alkavat hotellin edestä.' },
        { key: 'arcticCityHotel', note: '90 huonetta Pekankadulla. Aamiainen, sauna, pysäköinti ja wifi kuuluvat jokaiseen hintaan, ja lentokenttäbussin pysäkille on 300 m.' },
        { key: 'sokosVaakuna', note: '159 huonetta Koskikadulla, yhteiset saunat auki joka ilta.' },
        { key: 'santasHotelSantaClaus', note: 'Keskustassa Korkalonkadulla, noin 10 km lentoasemalta, omat saunatilat.' },
        { key: 'postmasterHotel', note: 'Kunnostettu 1950-luvun postitalo, 49 huonetta; osassa sviiteistä on minikeittiö ja sauna.' },
        { key: 'hotelAakenus', note: 'Perheyritys rauhallisella alueella kävelymatkan päässä keskustasta: 45 huonetta ja 20 keittiöllistä huoneistoa.' },
      ],
    },
    {
      title: 'Ounasvaara',
      items: [
        { key: 'skyOunasvaara', note: 'Ounasvaaran laella, keskustaan 4 km ja lähimpään rinteeseen 20 m; saunallisia huoneita ja perhehuoneita.' },
        { key: 'laplandHotelsOunasvaara', note: 'Mökkejä ja lomahuoneistoja Kemijoen ja laskettelurinteiden välissä, jokaisessa oma sauna ja keittiö; keskustaan 3 km.' },
        { key: 'santasport', note: 'Olympiavalmennuskeskus Ounasvaaran reittien vieressä, keskustaan 2 km; osassa huoneista on sauna ja parveke.' },
      ],
    },
    {
      title: 'Joulupukin Pajakylä ja napapiiri',
      items: [
        { key: 'santaClausHolidayVillage', note: 'Napapiirillä Pajakylän sisällä: mökkejä, sviittejä ja lasi-iglumökkejä, jokaisessa oma sauna.' },
        { key: 'santasIgloosArcticCircle', note: 'Pohjoiseen avautuvat lasi-iglut Pajakylässä, jokaisessa revontulihälytin; lentoasemalle 5 km.' },
        { key: 'arcticTreeHouse', note: 'Koko seinän ikkunalla varustettuja sviittejä metsärinteessä, SantaParkiin 100 m ja Pajakylään 2,2 km.' },
        { key: 'novaSkyland', note: 'Jokaisessa huoneessa ja mökissä on oma sauna; Pajakylään noin 300 m ja lentoasemalle 5 minuuttia autolla.' },
        { key: 'glassResort', note: 'Lasiseinäisiä huoneistoja omalla saunalla ja ulkoporealtaalla, metsässä Pajakylän sisällä.' },
      ],
    },
    {
      title: 'Kaupungin ulkopuolella',
      items: [
        { key: 'apukka', note: 'Lasi-igluja kahden erämaajärven välissä 18 km kaupungista, ja resortin oma bussi kulkee keskustaan.' },
        { key: 'arcticSnowHotel', note: 'Lumi- ja jäähotelli 15.12. alkaen ja lämmitetyt lasi-iglut 360° lasikatolla, keskustaan 26 km.' },
        { key: 'invisibleForest', note: 'Peililasisviittejä omalla saunalla, ulkoporealtaalla ja keittiöllä Ounasjoen varressa, keskustasta alle 10 minuutin ajomatkan päässä.' },
        { key: 'silverBirch', note: 'Vain viisi lasimökkiä kolmen metrin korkeudella järven rannalla Oikaraisen lähellä, myydään usean yön lomina.' },
      ],
    },
  ],
}

export default fi
