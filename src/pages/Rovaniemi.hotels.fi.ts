import type { RovaniemiHotelsCopy } from './Rovaniemi.hotels.types'

/**
 * Rovaniemen hotellit alueittain, suomi (22.10.2026). Kirjoitettu suomeksi samoista faktoista kuin
 * englanninkielinen versio; kaikki hotellien omilta sivuilta 22.10.2026.
 * Natiivilukija 23.10.2026: kieli luettu ja korjattu (loki natiivi-fi-CDE-20261023.md).
 */
const fi: RovaniemiHotelsCopy = {
  intro: 'Listalla on 20 hotellia neljällä alueella. Hotellin nimestä aukeaa sen sivu varauskumppanimme palvelussa, jossa näet hinnat valitsemillesi päiville.',
  groups: [
    {
      title: 'Keskusta',
      items: [
        { key: 'arcticLight', note: 'Rovaniemen entinen kaupungintalo vuodelta 1949, nyt 57 huoneen boutique-hotelli; osassa huoneista on oma sauna.' },
        { key: 'scandicRovaniemiCity', note: 'Koskikadulla kauppakeskusten vieressä. Lentokenttäbussi pysähtyy oven edessä, ja Superior Sauna -huoneissa on oma sauna.' },
        { key: 'scandicPohjanhovi', note: 'Kemijoen rannalla. Monesta huoneesta näkyy joelle, ja talvella moottorikelkkareitit alkavat hotellin edestä.' },
        { key: 'arcticCityHotel', note: 'Pekankadulla, 90 huonetta. Aamiainen, sauna, pysäköinti ja wifi sisältyvät aina hintaan, ja lentokenttäbussin pysäkille on 300 metriä.' },
        { key: 'sokosVaakuna', note: 'Koskikadulla, 159 huonetta; yhteiset saunat ovat auki joka ilta.' },
        { key: 'santasHotelSantaClaus', note: 'Keskustassa Korkalonkadulla, noin 10 km lentoasemalta. Hotellissa on omat saunatilat.' },
        { key: 'postmasterHotel', note: 'Kunnostettu 1950-luvun postitalo, jossa on 49 huonetta. Osassa sviiteistä on minikeittiö ja sauna.' },
        { key: 'hotelAakenus', note: 'Perheen pyörittämä hotelli rauhallisella alueella lyhyen kävelymatkan päässä keskustasta: 45 huonetta ja 20 keittiöllä varustettua huoneistoa.' },
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
        { key: 'santaClausHolidayVillage', note: 'Napapiirillä Pajakylän alueella: mökkejä, sviittejä ja lasi-iglumökkejä, joissa kaikissa on oma sauna.' },
        { key: 'santasIgloosArcticCircle', note: 'Pohjoiseen suunnatut lasi-iglut Pajakylässä, ja jokaisessa on revontulihälytin; lentoasemalle 5 km.' },
        { key: 'arcticTreeHouse', note: 'Metsärinteen sviitit, joissa koko seinä on ikkunaa; SantaParkiin 100 m ja Pajakylään 2,2 km.' },
        { key: 'novaSkyland', note: 'Jokaisessa huoneessa ja mökissä on oma sauna; Pajakylään noin 300 m ja lentoasemalle 5 minuuttia autolla.' },
        { key: 'glassResort', note: 'Lasiseinäisiä huoneistoja metsässä Pajakylän alueella; jokaisessa oma sauna ja ulkoporeallas.' },
      ],
    },
    {
      title: 'Kaupungin ulkopuolella',
      items: [
        { key: 'apukka', note: 'Lasi-igluja kahden erämaajärven välissä, 18 km kaupungista. Lomakeskuksen oma bussi kulkee keskustaan.' },
        { key: 'arcticSnowHotel', note: 'Lumi- ja jäähotelli 15.12. alkaen sekä lämmitettyjä lasi-igluja, joissa on 360° lasikatto; keskustaan 26 km.' },
        { key: 'invisibleForest', note: 'Peililasisviittejä Ounasjoen varressa alle 10 minuutin ajomatkan päässä keskustasta; jokaisessa oma sauna, ulkoporeallas ja keittiö.' },
        { key: 'silverBirch', note: 'Vain viisi lasimökkiä kolmen metrin korkeudella maasta järven rannalla Oikaraisen lähellä. Mökit myydään usean yön lomina.' },
      ],
    },
  ],
}

export default fi
