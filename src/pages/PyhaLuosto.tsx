import DestinationPage, { type DestinationBody } from '../components/DestinationPage'
import { HOTEL_SEARCH_FOR, CARS_FOR } from '../lib/affiliate'

/**
 * Pyhä–Luosto, tehtävä E 22.10.2026. Kysyntä mitattu (OpenSEO 22.10.): fi "pyhätunturi" 9 900/kk, "luosto" 8 100,
 * "pyhä majoitus" 1 000, "luosto majoitus" 880; en "luosto hotel" 720. Faktat: side-session-notes/…/
 * ruka-pyhaluosto-faktat-20261022.md (luontoon.fi, pyha.fi, luosto.fi, amethystmine.fi, hotellien omat sivut, luettu
 * 22.10.2026). en = lähde, fi kirjoitettu suomeksi, muut käännetty en:stä ja natiivilukijan tarkistamia.
 */
const en: DestinationBody = {
  tagline: 'Two fell villages 25 km apart in Eastern Lapland, at either end of Pyhä-Luosto National Park, each with its own ski slopes.',
  description: `Pyhä and Luosto are two small resort villages on road 962, 25 km apart: Pyhä in Pelkosenniemi and Luosto in Sodankylä. Between them runs a 35-kilometre chain of fells, the remnant of one of the world's oldest mountain ranges and Finland's southernmost area of great fells. It has been protected as Pyhä-Luosto National Park since 2005, built on Pyhätunturi National Park, founded in 1938.

Neither village is a large resort. Pyhä has 15 slopes and Luosto 10, each village has a handful of hotels, and the rest is apartments, log cabins and rooms with glass roofs. Rovaniemi is about 115 km from Luosto, and in winter buses run from the airport to both villages four times a day.`,
  facts: [
    { label: 'Between the villages', value: '25 km, road 962' },
    { label: 'Highest fell', value: 'Noitatunturi 540 m' },
    { label: 'Nearest airport', value: 'RVN, ~110 km' },
    { label: 'Slopes', value: 'Pyhä 15 · Luosto 10' },
  ],
  highlights: [
    { title: 'Isokuru gorge and its waterfall', body: 'Isokuru, the largest gorge in the park, is 220 m deep. A 17-metre waterfall drops into the clear Pyhänkasteenlampi pond, 12 m deep; swimming in the pond and approaching the falls are prohibited.' },
    { title: 'Lampivaara Amethyst Mine', body: 'One of the few gem mines in the world open to visitors, about 5 km from Luosto, and every visitor digs an amethyst of their own. Winter tours run from 1 November 2026 to 18 April 2027; from the Ukko-Luosto car park a tour costs €78 per adult, with the mine’s own transport, as private cars are not allowed.' },
    { title: 'Two ski areas on one chain of fells', body: 'Pyhä has 15 slopes, 9 lifts and a 280 m vertical drop; Luosto has 10 slopes and 4 lifts. Pyhä aims to open on 20 November 2026 and Luosto on 28 November.' },
    { title: 'Aurora alert in Luosto', body: 'Luosto has its own aurora sensor with a free real-time alert, and a camera on top of Luosto fell streams the sky around the clock.' },
    { title: 'Old forest on Ukko-Luosto', body: 'On the south-west side of Ukko-Luosto and Lampivaara the forest has never been felled, and the trees are up to 400 years old.' },
    { title: 'The highest tops', body: 'Noitatunturi rises to 540 m and Ukko-Luosto to 514 m, the highest tops of the chain.' },
  ],
  whenToGo: `Pyhä aims to open its slopes on 20 November 2026 and Luosto on 28 November; Pyhä's season runs to early May.
Statistically the northern lights are most likely from mid-August to mid-April; Luosto's aurora alert and fell-top camera tell you when to look up.
The Amethyst Mine's winter tours run from 1 November 2026 to 18 April 2027, daily from 1 December to 28 March (closed on 24 December).`,
  howToGet: `Fly to Rovaniemi (RVN). Buses run from the airport to Luosto and on to Pyhä four times a day in winter and twice a day in summer.
By train, take the night train from Helsinki to Kemijärvi; buses run from Kemijärvi station to Pyhä, about 47 km away.
By car, Rovaniemi to Luosto is about 115 km (road 4 north, then road 962 at Torvinen) and Rovaniemi to Pyhä via Kemijärvi about 130 km. A bus also runs between the two villages.`,
  stayTypes: [
    'Rooms and igloos with glass roofs in both villages, for watching the sky from bed.',
    'Fell hotels in the village centres, close to the slopes and the national park trails.',
    'Log cabins and apartments in Luosto’s log village and around the slopes of Pyhä.',
    'Lakeside resorts on Lake Pyhäjärvi, at the foot of Pyhä.',
  ],
  siblings: [
    { name: 'Ruka', href: '/destinations/ruka', blurb: 'A car-free ski village in Kuusamo, just south of Lapland.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'The airport for Pyhä and Luosto, about 115 km away.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Fell village further north, by Urho Kekkonen National Park.' },
  ],
  anchorGroups: [
    {
      title: 'Pyhä',
      items: [
        { name: 'Hotel Pyhätunturi', propertyQuery: 'Hotel Pyhätunturi', sid: 'destination_pyha_hotel', note: 'In the heart of Pyhä: 46 double rooms, five superior rooms and one panorama room; breakfast, sauna and gym are included.' },
        { name: 'Pyhä Igloos', propertyQuery: 'Pyhä Igloos', sid: 'destination_pyha_igloos', note: 'Rooms with an igloo-like glass ceiling in the centre of the ski resort, each with its own entrance from outside.' },
        { name: 'Northern Lights Village Pyhä', propertyQuery: 'Northern Lights Village Pyhä', sid: 'destination_pyha_nlv', note: 'Some cabins have a glass roof right above the bed; sauna, hot tub, and transfers from Rovaniemi airport.' },
        { name: 'Sunday Morning Resort', propertyQuery: 'Sunday Morning Resort', sid: 'destination_pyha_sunday_morning', note: 'On the shore of Lake Pyhäjärvi next to the national park; its Aamu Suites sleep one to four.' },
        { name: 'Kurula’s Resort', propertyQuery: 'Kurula’s Resort', sid: 'destination_pyha_kurulas', note: '17 suites in the main lodge beside Lake Pyhäjärvi, heated with geothermal energy from the lake.' },
        { name: 'Ski-Inn Kultakero', propertyQuery: 'Ski-Inn Kultakero', sid: 'destination_pyha_kultakero', note: 'Hotel rooms and apartments in seven sizes, near the slopes and the national park.' },
      ],
    },
    {
      title: 'Luosto',
      items: [
        { name: 'Lapland Hotels Luostotunturi', propertyQuery: 'Lapland Hotels Luostotunturi', sid: 'destination_luosto_luostotunturi', note: 'In Luosto’s log village next to the national park: hotel rooms, apartments and log cabins, and the Amethyst Spa.' },
        { name: 'Santa’s Hotel Aurora & Igloos', propertyQuery: 'Santa’s Hotel Aurora & Igloos', sid: 'destination_luosto_aurora', note: 'Every hotel room has a private sauna, and ten glass igloos joined to the hotel each have an aurora alert.' },
      ],
    },
  ],
  anchorProperties: [
    { name: 'All Pyhä accommodation', href: HOTEL_SEARCH_FOR('en').pyha, sid: 'destination_pyha_all_search', note: 'Browse hotels and apartments in Pyhä on Sembo.' },
    { name: 'All Luosto accommodation', href: HOTEL_SEARCH_FOR('en').luosto, sid: 'destination_luosto_all_search', note: 'Browse hotels and cabins in Luosto on Sembo.' },
  ],
  transport: [
    { mode: 'plane', label: 'From Rovaniemi Airport (RVN)', detail: 'Rovaniemi is about 115 km from Luosto and, via Kemijärvi, about 130 km from Pyhä.' },
    { mode: 'bus', label: 'Bus to Luosto and Pyhä', detail: 'From Rovaniemi airport, railway station and bus station: four departures a day in winter, two in summer.' },
    { mode: 'train', label: 'Night train to Kemijärvi', detail: 'From Helsinki; buses run from Kemijärvi station to Pyhä, about 47 km.' },
    { mode: 'car', label: 'Between the villages', detail: '25 km on road 962, and a bus runs between Pyhä and Luosto.' },
  ],
  carRental: {
    href: CARS_FOR('en').fromRovaniemi,
    sid: 'destination_pyha_cars_rvn',
    airport: 'Pickup at Rovaniemi Airport (RVN)',
    blurb: 'About 115 km to Luosto · 130 km to Pyhä',
  },
  seoTitle: 'Pyhä and Luosto Hotels: Where to Stay in Two Fell Villages',
  seoDescription: 'Hotels, glass igloos and log cabins in Pyhä and Luosto, two fell villages 25 km apart in Eastern Lapland, and how to get there from Rovaniemi airport.',
}

const fi: DestinationBody = {
  tagline: 'Kaksi tunturikylää 25 km:n päässä toisistaan Itä-Lapissa, Pyhä-Luoston kansallispuiston kummassakin päässä, ja kummallakin omat rinteet.',
  description: `Pyhä ja Luosto ovat kaksi pientä matkailukylää maantien 962 varrella, 25 km toisistaan: Pyhä Pelkosenniemellä ja Luosto Sodankylässä. Niiden välissä on 35 kilometrin tunturiketju, joka on jäänne yhdestä maailman vanhimmista vuorijonoista ja Suomen eteläisin suurtunturialue. Se on ollut suojeltuna Pyhä-Luoston kansallispuistona vuodesta 2005, ja puisto rakentui vuonna 1938 perustetun Pyhätunturin kansallispuiston pohjalle.

Kumpikaan kylä ei ole suuri keskus. Pyhällä on 15 rinnettä ja Luostolla 10, kummassakin kylässä on muutama hotelli, ja muu majoitus on huoneistoja, hirsimökkejä ja lasikattoisia huoneita. Rovaniemeltä on Luostolle noin 115 km, ja talvella bussit kulkevat lentoasemalta molempiin kyliin neljästi päivässä.`,
  facts: [
    { label: 'Kylien välillä', value: '25 km, tie 962' },
    { label: 'Korkein tunturi', value: 'Noitatunturi 540 m' },
    { label: 'Lähin lentoasema', value: 'RVN, n. 110 km' },
    { label: 'Rinteet', value: 'Pyhä 15 · Luosto 10' },
  ],
  highlights: [
    { title: 'Isokuru ja sen putous', body: 'Puiston suurin rotkolaakso Isokuru on 220 metriä syvä. Kirkkaaseen, 12 metriä syvään Pyhänkasteenlampeen laskee 17 metrin putous; lammessa uiminen ja putouksen lähelle meneminen on kielletty.' },
    { title: 'Lampivaaran ametistikaivos', body: 'Yksi harvoista jalokivikaivoksista maailmassa, joihin pääsee vierailemaan, noin 5 km Luostolta, ja jokainen kaivaa oman ametistinsa. Talvikierrokset ovat 1.11.2026–18.4.2027; Ukko-Luoston pysäköintialueelta kierros maksaa aikuiselta 78 €, ja kaivokselle kuljetaan sen omalla kyydillä, koska yksityisautoilu ei ole sallittua.' },
    { title: 'Kaksi hiihtokeskusta samalla tunturijonolla', body: 'Pyhällä on 15 rinnettä, 9 hissiä ja 280 metrin korkeusero; Luostolla 10 rinnettä ja 4 hissiä. Pyhän tavoite on avata 20.11.2026 ja Luoston 28.11.2026.' },
    { title: 'Revontulihälytys Luostolla', body: 'Luostolla on oma revontulisensori ja maksuton reaaliaikainen hälytys, ja Luoston tunturin laella oleva kamera lähettää taivaasta kuvaa ympäri vuorokauden.' },
    { title: 'Vanha metsä Ukko-Luostolla', body: 'Ukko-Luoston ja Lampivaaran lounaisrinteillä metsää ei ole koskaan hakattu, ja puut ovat jopa 400 vuoden ikäisiä.' },
    { title: 'Korkeimmat huiput', body: 'Noitatunturi kohoaa 540 metriin ja Ukko-Luosto 514 metriin; ne ovat tunturiketjun korkeimmat huiput.' },
  ],
  whenToGo: `Pyhä tavoittelee rinteiden avaamista 20.11.2026 ja Luosto 28.11.2026; Pyhän kausi jatkuu toukokuun alkuun.
Tilastollisesti revontulia näkee todennäköisimmin elokuun puolivälistä huhtikuun puoliväliin; Luoston revontulihälytys ja tunturikamera kertovat, milloin kannattaa katsoa ylös.
Ametistikaivoksen talvikierrokset ovat 1.11.2026–18.4.2027, päivittäin 1.12.–28.3. (suljettu 24.12.).`,
  howToGet: `Lennä Rovaniemelle (RVN). Lentoasemalta kulkee bussi Luostolle ja edelleen Pyhälle talvella neljästi ja kesällä kahdesti päivässä.
Junalla: yöjuna Helsingistä Kemijärvelle, josta bussit kulkevat Pyhälle, noin 47 km.
Autolla Rovaniemeltä Luostolle on noin 115 km (valtatie 4 pohjoiseen ja Torvisesta tie 962) ja Rovaniemeltä Kemijärven kautta Pyhälle noin 130 km. Kylien välillä kulkee myös bussi.`,
  stayTypes: [
    'Lasikattoiset huoneet ja iglut kummassakin kylässä, taivaan katseluun sängystä.',
    'Tunturihotellit kylien keskustoissa, lähellä rinteitä ja kansallispuiston polkuja.',
    'Hirsimökit ja huoneistot Luoston hirsikylässä ja Pyhän rinteiden ympärillä.',
    'Järvenrannan lomakohteet Pyhäjärven rannalla Pyhätunturin juurella.',
  ],
  siblings: [
    { name: 'Ruka', href: '/destinations/ruka', blurb: 'Autoton hiihtokylä Kuusamossa, aivan Lapin eteläpuolella.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'Pyhän ja Luoston lentoasema noin 115 km:n päässä.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Tunturikylä pohjoisempana, Urho Kekkosen kansallispuiston vieressä.' },
  ],
  anchorGroups: [
    {
      title: 'Pyhä',
      items: [
        { name: 'Hotel Pyhätunturi', propertyQuery: 'Hotel Pyhätunturi', sid: 'destination_pyha_hotel', note: 'Pyhän sydämessä: 46 kahden hengen huonetta, viisi superior-huonetta ja yksi panoraamahuone; aamiainen, sauna ja kuntosali sisältyvät.' },
        { name: 'Pyhä Igloos', propertyQuery: 'Pyhä Igloos', sid: 'destination_pyha_igloos', note: 'Iglumaisella lasikatolla varustettuja huoneita hiihtokeskuksen keskustassa, jokaisessa oma sisäänkäynti ulkoa.' },
        { name: 'Northern Lights Village Pyhä', propertyQuery: 'Northern Lights Village Pyhä', sid: 'destination_pyha_nlv', note: 'Osassa mökeistä lasikatto suoraan sängyn yllä; sauna, palju ja kuljetukset Rovaniemen lentoasemalta.' },
        { name: 'Sunday Morning Resort', propertyQuery: 'Sunday Morning Resort', sid: 'destination_pyha_sunday_morning', note: 'Pyhäjärven rannalla kansallispuiston vieressä; Aamu-sviiteissä majoittuu yhdestä neljään henkeä.' },
        { name: 'Kurula’s Resort', propertyQuery: 'Kurula’s Resort', sid: 'destination_pyha_kurulas', note: 'Päärakennuksessa 17 sviittiä Pyhäjärven rannalla, lämmitys järven maalämmöllä.' },
        { name: 'Ski-Inn Kultakero', propertyQuery: 'Ski-Inn Kultakero', sid: 'destination_pyha_kultakero', note: 'Hotellihuoneita ja huoneistoja seitsemässä koossa, lähellä rinteitä ja kansallispuistoa.' },
      ],
    },
    {
      title: 'Luosto',
      items: [
        { name: 'Lapland Hotels Luostotunturi', propertyQuery: 'Lapland Hotels Luostotunturi', sid: 'destination_luosto_luostotunturi', note: 'Luoston hirsikylässä kansallispuiston vieressä: hotellihuoneita, huoneistoja ja hirsimökkejä sekä Amethyst Spa.' },
        { name: 'Santa’s Hotel Aurora & Igloos', propertyQuery: 'Santa’s Hotel Aurora & Igloos', sid: 'destination_luosto_aurora', note: 'Jokaisessa hotellihuoneessa on oma sauna, ja hotelliin liitetyissä kymmenessä lasi-iglussa on kussakin revontulihälytin.' },
      ],
    },
  ],
  anchorProperties: [
    { name: 'Kaikki Pyhän majoitukset', href: HOTEL_SEARCH_FOR('fi').pyha, sid: 'destination_pyha_all_search', note: 'Selaa Pyhän hotelleja ja huoneistoja Sembossa.' },
    { name: 'Kaikki Luoston majoitukset', href: HOTEL_SEARCH_FOR('fi').luosto, sid: 'destination_luosto_all_search', note: 'Selaa Luoston hotelleja ja mökkejä Sembossa.' },
  ],
  transport: [
    { mode: 'plane', label: 'Rovaniemen lentoasemalta (RVN)', detail: 'Rovaniemeltä Luostolle noin 115 km ja Kemijärven kautta Pyhälle noin 130 km.' },
    { mode: 'bus', label: 'Bussi Luostolle ja Pyhälle', detail: 'Rovaniemen lentoasemalta, rautatieasemalta ja linja-autoasemalta: talvella neljä lähtöä päivässä, kesällä kaksi.' },
    { mode: 'train', label: 'Yöjuna Kemijärvelle', detail: 'Helsingistä; Kemijärven asemalta bussit Pyhälle, noin 47 km.' },
    { mode: 'car', label: 'Kylien välillä', detail: '25 km tietä 962, ja Pyhän ja Luoston välillä kulkee bussi.' },
  ],
  carRental: {
    href: CARS_FOR('fi').fromRovaniemi,
    sid: 'destination_pyha_cars_rvn',
    airport: 'Nouto Rovaniemen lentoasemalta (RVN)',
    blurb: 'Luostolle noin 115 km · Pyhälle 130 km',
  },
  seoTitle: 'Pyhän ja Luoston majoitus: hotellit, iglut ja mökit',
  seoDescription: 'Hotellit, lasi-iglut ja hirsimökit Pyhällä ja Luostolla, kahdessa tunturikylässä 25 km:n päässä toisistaan Itä-Lapissa, ja matka Rovaniemen lentoasemalta.',
}

const de: DestinationBody = {
  tagline: 'Zwei Fjälldörfer in Ostlappland, 25 km voneinander entfernt, an beiden Enden des Pyhä-Luosto-Nationalparks und jedes mit eigenen Skipisten.',
  description: `Pyhä und Luosto sind zwei kleine Ferienorte an der Straße 962, 25 km voneinander entfernt: Pyhä in Pelkosenniemi und Luosto in Sodankylä. Zwischen ihnen verläuft eine 35 Kilometer lange Fjällkette, der Überrest eines der ältesten Gebirge der Welt und das südlichste Gebiet mit großen Fjälls in Finnland. Seit 2005 ist sie als Pyhä-Luosto-Nationalpark geschützt, der auf dem 1938 gegründeten Pyhätunturi-Nationalpark aufbaut.

Keines der beiden Dörfer ist ein großes Resort. Pyhä hat 15 Pisten und Luosto 10, jedes Dorf hat eine Handvoll Hotels, und der Rest sind Apartments, Blockhütten und Zimmer mit Glasdach. Von Rovaniemi nach Luosto sind es etwa 115 km, und im Winter fahren Busse viermal täglich vom Flughafen in beide Dörfer.`,
  facts: [
    { label: 'Zwischen den Dörfern', value: '25 km, Straße 962' },
    { label: 'Höchstes Fjäll', value: 'Noitatunturi 540 m' },
    { label: 'Nächster Flughafen', value: 'RVN, ca. 110 km' },
    { label: 'Pisten', value: 'Pyhä 15 · Luosto 10' },
  ],
  highlights: [
    { title: 'Die Schlucht Isokuru und ihr Wasserfall', body: 'Isokuru, die größte Schlucht des Parks, ist 220 m tief. Ein 17 Meter hoher Wasserfall stürzt in den klaren, 12 m tiefen Teich Pyhänkasteenlampi; im Teich zu baden und sich dem Wasserfall zu nähern ist verboten.' },
    { title: 'Amethystmine Lampivaara', body: 'Eine der wenigen Edelsteinminen der Welt, die Besucher besichtigen können, etwa 5 km von Luosto, und jeder Besucher gräbt sich dort einen eigenen Amethyst aus. Wintertouren gibt es vom 1. November 2026 bis zum 18. April 2027; ab dem Parkplatz Ukko-Luosto kostet eine Tour 78 € pro Erwachsenen, mit dem eigenen Transport der Mine, denn Privatautos sind dort nicht erlaubt.' },
    { title: 'Zwei Skigebiete an einer Fjällkette', body: 'Pyhä hat 15 Pisten, 9 Lifte und 280 m Höhenunterschied; Luosto hat 10 Pisten und 4 Lifte. Pyhä will am 20. November 2026 öffnen, Luosto am 28. November.' },
    { title: 'Polarlicht-Alarm in Luosto', body: 'Luosto hat einen eigenen Polarlichtsensor mit kostenlosem Echtzeit-Alarm, und eine Kamera auf dem Gipfel des Fjälls Luosto überträgt den Himmel rund um die Uhr.' },
    { title: 'Alter Wald am Ukko-Luosto', body: 'An der Südwestseite von Ukko-Luosto und Lampivaara ist der Wald nie abgeholzt worden, und die Bäume sind bis zu 400 Jahre alt.' },
    { title: 'Die höchsten Gipfel', body: 'Noitatunturi erreicht 540 m und Ukko-Luosto 514 m, die höchsten Gipfel der Kette.' },
  ],
  whenToGo: `Pyhä will seine Pisten am 20. November 2026 öffnen, Luosto am 28. November; in Pyhä dauert die Saison bis Anfang Mai.
Statistisch sind Polarlichter von Mitte August bis Mitte April am wahrscheinlichsten; der Polarlicht-Alarm und die Gipfelkamera in Luosto zeigen Ihnen, wann Sie nach oben schauen sollten.
Die Wintertouren der Amethystmine laufen vom 1. November 2026 bis zum 18. April 2027, täglich vom 1. Dezember bis zum 28. März (am 24. Dezember geschlossen).`,
  howToGet: `Fliegen Sie nach Rovaniemi (RVN). Vom Flughafen fahren Busse nach Luosto und weiter nach Pyhä, im Winter viermal und im Sommer zweimal täglich.
Mit der Bahn nehmen Sie den Nachtzug von Helsinki nach Kemijärvi; vom Bahnhof Kemijärvi fahren Busse ins etwa 47 km entfernte Pyhä.
Mit dem Auto sind es von Rovaniemi nach Luosto etwa 115 km (Staatsstraße 4 nach Norden, bei Torvinen auf die Straße 962) und von Rovaniemi über Kemijärvi nach Pyhä etwa 130 km. Zwischen den beiden Dörfern fährt auch ein Bus.`,
  stayTypes: [
    'Zimmer und Iglus mit Glasdach in beiden Dörfern, um vom Bett aus den Himmel zu beobachten.',
    'Fjällhotels in den Dorfzentren, nah an den Pisten und den Wanderwegen des Nationalparks.',
    'Blockhütten und Apartments im Blockhausdorf von Luosto und rund um die Pisten von Pyhä.',
    'Resorts am See Pyhäjärvi, am Fuß des Fjälls Pyhä.',
  ],
  siblings: [
    { name: 'Ruka', href: '/destinations/ruka', blurb: 'Ein autofreies Skidorf in Kuusamo, knapp südlich von Lappland.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'Der Flughafen für Pyhä und Luosto, etwa 115 km entfernt.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Fjälldorf weiter im Norden, am Urho-Kekkonen-Nationalpark.' },
  ],
  anchorGroups: [
    {
      title: 'Pyhä',
      items: [
        { name: 'Hotel Pyhätunturi', propertyQuery: 'Hotel Pyhätunturi', sid: 'destination_pyha_hotel', note: 'Mitten in Pyhä: 46 Doppelzimmer, fünf Superior-Zimmer und ein Panoramazimmer; Frühstück, Sauna und Fitnessraum sind inbegriffen.' },
        { name: 'Pyhä Igloos', propertyQuery: 'Pyhä Igloos', sid: 'destination_pyha_igloos', note: 'Zimmer im Zentrum des Skigebiets mit einer Glasdecke wie in einem Iglu, jedes mit eigenem Eingang von außen.' },
        { name: 'Northern Lights Village Pyhä', propertyQuery: 'Northern Lights Village Pyhä', sid: 'destination_pyha_nlv', note: 'Einige Hütten haben ein Glasdach direkt über dem Bett; Sauna, Hot Tub und Transfers vom Flughafen Rovaniemi.' },
        { name: 'Sunday Morning Resort', propertyQuery: 'Sunday Morning Resort', sid: 'destination_pyha_sunday_morning', note: 'Am Ufer des Sees Pyhäjärvi neben dem Nationalpark; in den Aamu Suites schlafen ein bis vier Personen.' },
        { name: 'Kurula’s Resort', propertyQuery: 'Kurula’s Resort', sid: 'destination_pyha_kurulas', note: '17 Suiten im Haupthaus am See Pyhäjärvi, beheizt mit Erdwärme aus dem See.' },
        { name: 'Ski-Inn Kultakero', propertyQuery: 'Ski-Inn Kultakero', sid: 'destination_pyha_kultakero', note: 'Hotelzimmer und Apartments in sieben Größen, nahe den Pisten und dem Nationalpark.' },
      ],
    },
    {
      title: 'Luosto',
      items: [
        { name: 'Lapland Hotels Luostotunturi', propertyQuery: 'Lapland Hotels Luostotunturi', sid: 'destination_luosto_luostotunturi', note: 'Im Blockhausdorf von Luosto neben dem Nationalpark: Hotelzimmer, Apartments und Blockhütten sowie das Amethyst Spa.' },
        { name: 'Santa’s Hotel Aurora & Igloos', propertyQuery: 'Santa’s Hotel Aurora & Igloos', sid: 'destination_luosto_aurora', note: 'Jedes Hotelzimmer hat eine eigene Sauna, und die zehn mit dem Hotel verbundenen Glasiglus haben jeweils einen Polarlicht-Alarm.' },
      ],
    },
  ],
  anchorProperties: [
    { name: 'Alle Unterkünfte in Pyhä', href: HOTEL_SEARCH_FOR('de').pyha, sid: 'destination_pyha_all_search', note: 'Stöbern Sie in Hotels und Apartments in Pyhä bei Sembo.' },
    { name: 'Alle Unterkünfte in Luosto', href: HOTEL_SEARCH_FOR('de').luosto, sid: 'destination_luosto_all_search', note: 'Stöbern Sie in Hotels und Hütten in Luosto bei Sembo.' },
  ],
  transport: [
    { mode: 'plane', label: 'Ab Flughafen Rovaniemi (RVN)', detail: 'Von Rovaniemi sind es etwa 115 km nach Luosto und über Kemijärvi etwa 130 km nach Pyhä.' },
    { mode: 'bus', label: 'Bus nach Luosto und Pyhä', detail: 'Ab Flughafen, Bahnhof und Busbahnhof Rovaniemi: im Winter vier Abfahrten täglich, im Sommer zwei.' },
    { mode: 'train', label: 'Nachtzug nach Kemijärvi', detail: 'Ab Helsinki; vom Bahnhof Kemijärvi fahren Busse nach Pyhä, etwa 47 km.' },
    { mode: 'car', label: 'Zwischen den Dörfern', detail: '25 km auf der Straße 962, und zwischen Pyhä und Luosto fährt ein Bus.' },
  ],
  carRental: {
    href: CARS_FOR('de').fromRovaniemi,
    sid: 'destination_pyha_cars_rvn',
    airport: 'Abholung am Flughafen Rovaniemi (RVN)',
    blurb: 'Etwa 115 km nach Luosto · 130 km nach Pyhä',
  },
  seoTitle: 'Pyhä und Luosto, Finnland: Hotels, Glasiglus und Hütten',
  seoDescription: 'Hotels, Glasiglus und Blockhütten in Pyhä (Pyhätunturi) und Luosto, zwei Fjälldörfern in Ostlappland, 25 km auseinander, mit Anreise ab Flughafen Rovaniemi.',
}

const ja: DestinationBody = {
  tagline: '東ラップランドにある、25 km離れた二つのフェルの村。ピュハ・ルオスト国立公園の両端に位置し、それぞれにゲレンデがあります。',
  description: `ピュハとルオストは、962号線沿いに25 km離れて並ぶ二つの小さなリゾート村で、ピュハはペルコセンニエミ、ルオストはソダンキュラにあります。両村の間には35 kmにわたってフェルが連なっています。世界で最も古い山脈の一つの名残で、フィンランド最南の大型フェル地帯です。2005年からピュハ・ルオスト国立公園として保護されており、この公園は1938年に設立されたピュハトゥントゥリ国立公園をもとにしています。

どちらの村も大きなリゾートではありません。コースはピュハに15本、ルオストに10本。ホテルはそれぞれの村に数軒で、ほかの宿はアパートメント、ログキャビン、ガラス屋根の客室です。ロヴァニエミからルオストまでは約115 kmで、冬は空港から両村へ一日四便のバスが運行しています。`,
  facts: [
    { label: '村と村の間', value: '25 km・962号線' },
    { label: '最も高いフェル', value: 'Noitatunturi 540 m' },
    { label: '最寄り空港', value: 'RVN 約110 km' },
    { label: 'コース', value: 'ピュハ15本・ルオスト10本' },
  ],
  highlights: [
    { title: 'Isokuru渓谷と滝', body: '公園で最大の渓谷Isokuruは、深さ220 m。高さ17 mの滝が、深さ12 mの澄んだPyhänkasteenlampi池に落ちています。池での遊泳と滝への接近は禁止されています。' },
    { title: 'Lampivaaraアメジスト鉱山', body: '一般の人が見学できる、世界でも数少ない宝石鉱山の一つで、ルオストから約5 km。見学者は一人ひとり自分のアメジストを掘ります。冬のツアーは2026年11月1日から2027年4月18日まで。Ukko-Luostoの駐車場から出るツアーは大人78ユーロで、自家用車の乗り入れは認められていないため、鉱山の送迎で移動します。' },
    { title: '一つの山並みに二つのスキー場', body: 'ピュハはコース15本、リフト9基、標高差280 m。ルオストはコース10本、リフト4基です。ピュハは2026年11月20日、ルオストは11月28日のオープンを目指しています。' },
    { title: 'ルオストのオーロラアラート', body: 'ルオストには独自のオーロラセンサーがあり、無料のリアルタイムアラートを受け取れます。ルオストの山頂に設置されたカメラは、空の様子を昼夜を問わずライブ配信しています。' },
    { title: 'Ukko-Luostoの古い森', body: 'Ukko-LuostoとLampivaaraの南西側の森は一度も伐採されたことがなく、樹齢は最大400年に達します。' },
    { title: '最も高い頂', body: 'Noitatunturiは標高540 m、Ukko-Luostoは514 mで、この山並みで最も高い頂です。' },
  ],
  whenToGo: `ピュハは2026年11月20日、ルオストは11月28日のゲレンデオープンを目指しています。ピュハのシーズンは5月上旬まで続きます。
統計的に、オーロラが最も見えやすいのは8月中旬から4月中旬です。ルオストのオーロラアラートと山頂のカメラが、空を見上げるタイミングを教えてくれます。
アメジスト鉱山の冬のツアーは2026年11月1日から2027年4月18日まで、12月1日〜3月28日は毎日催行します（12月24日は休業）。`,
  howToGet: `飛行機でロヴァニエミ（RVN）へ。空港からルオスト経由でピュハへ向かうバスが、冬は一日四便、夏は二便運行しています。
鉄道なら、ヘルシンキからケミヤルヴィ行きの夜行列車に乗ります。ケミヤルヴィ駅からは、約47 km先のピュハへバスが出ています。
車の場合、ロヴァニエミからルオストまでは約115 km（国道4号線を北上し、Torvinenで962号線へ）、ロヴァニエミからケミヤルヴィ経由でピュハまでは約130 kmです。両村の間にもバスが運行しています。`,
  stayTypes: [
    '両方の村にある、ガラス屋根の客室とイグルー。ベッドに横になったまま空を眺められます。',
    '村の中心にあるフェルのホテル。ゲレンデにも国立公園のトレイルにも近い立地です。',
    'ルオストのログヴィレッジやピュハのゲレンデ周辺にある、ログキャビンとアパートメント。',
    'ピュハのふもと、Pyhäjärvi湖畔のリゾート。',
  ],
  siblings: [
    { name: 'Ruka', href: '/destinations/ruka', blurb: 'ラップランドのすぐ南、クーサモにある車の入らないスキー村。' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'ピュハとルオストへの空港。約115 km離れています。' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'さらに北にあるフェルの村。ウルホ・ケッコネン国立公園のそばです。' },
  ],
  anchorGroups: [
    {
      title: 'ピュハ',
      items: [
        { name: 'Hotel Pyhätunturi', propertyQuery: 'Hotel Pyhätunturi', sid: 'destination_pyha_hotel', note: 'ピュハの中心にあります。ダブルルーム46室、スーペリアルーム5室、パノラマルーム1室。朝食、サウナ、ジムが料金に含まれます。' },
        { name: 'Pyhä Igloos', propertyQuery: 'Pyhä Igloos', sid: 'destination_pyha_igloos', note: 'スキーリゾートの中心にある、イグルーのようなガラス天井の客室。各室に屋外からの専用入口があります。' },
        { name: 'Northern Lights Village Pyhä', propertyQuery: 'Northern Lights Village Pyhä', sid: 'destination_pyha_nlv', note: '一部のキャビンはベッドの真上がガラス屋根です。サウナとホットタブがあり、ロヴァニエミ空港からの送迎もあります。' },
        { name: 'Sunday Morning Resort', propertyQuery: 'Sunday Morning Resort', sid: 'destination_pyha_sunday_morning', note: '国立公園の隣、Pyhäjärvi湖のほとりにあります。Aamu Suitesには一人から四人まで泊まれます。' },
        { name: 'Kurula’s Resort', propertyQuery: 'Kurula’s Resort', sid: 'destination_pyha_kurulas', note: 'Pyhäjärvi湖のそばに建つメインロッジに17室のスイート。暖房には湖の地熱エネルギーを使っています。' },
        { name: 'Ski-Inn Kultakero', propertyQuery: 'Ski-Inn Kultakero', sid: 'destination_pyha_kultakero', note: '広さが七種類あるホテル客室とアパートメント。ゲレンデにも国立公園にも近い立地です。' },
      ],
    },
    {
      title: 'ルオスト',
      items: [
        { name: 'Lapland Hotels Luostotunturi', propertyQuery: 'Lapland Hotels Luostotunturi', sid: 'destination_luosto_luostotunturi', note: '国立公園の隣、ルオストのログヴィレッジにあります。ホテル客室、アパートメント、ログキャビンと、Amethyst Spaがあります。' },
        { name: 'Santa’s Hotel Aurora & Igloos', propertyQuery: 'Santa’s Hotel Aurora & Igloos', sid: 'destination_luosto_aurora', note: 'ホテルの全客室に専用サウナがあり、ホテルとつながった十棟のガラスイグルーには、それぞれオーロラアラートが付いています。' },
      ],
    },
  ],
  anchorProperties: [
    { name: 'ピュハのすべての宿泊施設', href: HOTEL_SEARCH_FOR('ja').pyha, sid: 'destination_pyha_all_search', note: 'Trip.comでピュハのホテルとアパートメントを閲覧できます。' },
    { name: 'ルオストのすべての宿泊施設', href: HOTEL_SEARCH_FOR('ja').luosto, sid: 'destination_luosto_all_search', note: 'Trip.comでルオストのホテルとキャビンを閲覧できます。' },
  ],
  transport: [
    { mode: 'plane', label: 'ロヴァニエミ空港（RVN）から', detail: 'ロヴァニエミからルオストまでは約115 km、ケミヤルヴィ経由でピュハまでは約130 kmです。' },
    { mode: 'bus', label: 'ルオスト・ピュハ行きのバス', detail: 'ロヴァニエミ空港、鉄道駅、バスターミナルから発車します。冬は一日四便、夏は二便です。' },
    { mode: 'train', label: 'ケミヤルヴィ行きの夜行列車', detail: 'ヘルシンキ発。ケミヤルヴィ駅から約47 km先のピュハへバスが出ています。' },
    { mode: 'car', label: '村と村の間', detail: '962号線で25 km。ピュハとルオストの間にはバスも運行しています。' },
  ],
  carRental: {
    href: CARS_FOR('ja').fromRovaniemi,
    sid: 'destination_pyha_cars_rvn',
    airport: 'ロヴァニエミ空港（RVN）で受け取り',
    blurb: 'ルオストまで約115 km・ピュハまで130 km',
  },
  seoTitle: 'ピュハとルオスト（フィンランド）の宿泊｜二つのフェルの村のホテル',
  seoDescription: 'ピュハとルオスト（フィンランド）の宿泊ガイド。東ラップランドで25 km離れた二つのフェルの村にあるホテル、ガラスイグルー、ログキャビンと、ロヴァニエミ空港からの行き方を紹介します。',
}

const sv: DestinationBody = {
  tagline: 'Två fjällbyar 25 km från varandra i östra finska Lappland, i var sin ände av Pyhä-Luosto nationalpark, och båda med egna skidbackar.',
  description: `Pyhä och Luosto är två små turistbyar längs väg 962, 25 km från varandra: Pyhä i Pelkosenniemi och Luosto i Sodankylä. Mellan dem löper en 35 kilometer lång fjällkedja, en rest av en av världens äldsta bergskedjor och Finlands sydligaste område med stora fjäll. Sedan 2005 är den skyddad som Pyhä-Luosto nationalpark, som bygger vidare på Pyhätunturi nationalpark, grundad 1938.

Ingen av byarna är någon stor skidort. Pyhä har 15 backar och Luosto 10. I varje by finns en handfull hotell, och resten är lägenheter, timmerstugor och rum med glastak. Från Rovaniemi till Luosto är det omkring 115 km, och på vintern går bussar från flygplatsen till båda byarna fyra gånger om dagen.`,
  facts: [
    { label: 'Mellan byarna', value: '25 km, väg 962' },
    { label: 'Högsta fjället', value: 'Noitatunturi 540 m' },
    { label: 'Närmaste flygplats', value: 'RVN, ca 110 km' },
    { label: 'Backar', value: 'Pyhä 15 · Luosto 10' },
  ],
  highlights: [
    { title: 'Ravinen Isokuru och dess vattenfall', body: 'Isokuru, parkens största ravin, är 220 m djup. Ett 17 meter högt vattenfall faller ner i den klara tjärnen Pyhänkasteenlampi, som är 12 m djup; det är förbjudet att bada i tjärnen och att närma sig fallet.' },
    { title: 'Ametistgruvan på Lampivaara', body: 'En av de få ädelstensgruvorna i världen som tar emot besökare, cirka 5 km från Luosto, och varje besökare gräver fram en egen ametist. Vinterturerna går från den 1 november 2026 till den 18 april 2027; från parkeringen vid Ukko-Luosto kostar en tur 78 € per vuxen, med gruvans egen transport, eftersom privatbilar inte är tillåtna.' },
    { title: 'Två skidområden på samma fjällkedja', body: 'Pyhä har 15 backar, 9 liftar och 280 m fallhöjd; Luosto har 10 backar och 4 liftar. Pyhä siktar på att öppna den 20 november 2026 och Luosto den 28 november.' },
    { title: 'Norrskenslarm i Luosto', body: 'Luosto har en egen norrskenssensor med ett gratis larm i realtid, och en kamera på toppen av fjället Luosto direktsänder bilder av himlen dygnet runt.' },
    { title: 'Gammelskog på Ukko-Luosto', body: 'På sydvästsidan av Ukko-Luosto och Lampivaara har skogen aldrig avverkats, och träden är upp till 400 år gamla.' },
    { title: 'De högsta topparna', body: 'Noitatunturi når 540 m och Ukko-Luosto 514 m, de högsta topparna i fjällkedjan.' },
  ],
  whenToGo: `Pyhä siktar på att öppna backarna den 20 november 2026 och Luosto den 28 november; Pyhäs säsong pågår till början av maj.
Statistiskt sett är chansen att se norrsken störst från mitten av augusti till mitten av april; norrskenslarmet och kameran på fjälltoppen i Luosto talar om när det är dags att titta upp.
Ametistgruvans vinterturer går från den 1 november 2026 till den 18 april 2027, varje dag från den 1 december till den 28 mars (stängt den 24 december).`,
  howToGet: `Flyg till Rovaniemi (RVN). Från flygplatsen går bussar till Luosto och vidare till Pyhä fyra gånger om dagen på vintern och två gånger om dagen på sommaren.
Med tåg tar du nattåget från Helsingfors till Kemijärvi; från stationen i Kemijärvi går bussar till Pyhä, cirka 47 km bort.
Med bil är det cirka 115 km från Rovaniemi till Luosto (riksväg 4 norrut, sedan väg 962 vid Torvinen) och cirka 130 km från Rovaniemi till Pyhä via Kemijärvi. Det går också en buss mellan de två byarna.`,
  stayTypes: [
    'Rum och igloor med glastak i båda byarna, så att du ser himlen från sängen.',
    'Fjällhotell i bykärnorna, nära backarna och nationalparkens leder.',
    'Timmerstugor och lägenheter i Luostos timmerby och runt backarna i Pyhä.',
    'Semesteranläggningar vid sjön Pyhäjärvi, vid foten av Pyhä.',
  ],
  siblings: [
    { name: 'Ruka', href: '/destinations/ruka', blurb: 'En bilfri skidby i Kuusamo, strax söder om finska Lappland.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'Flygplatsen för Pyhä och Luosto, cirka 115 km bort.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Fjällby längre norrut, vid Urho Kekkonens nationalpark.' },
  ],
  anchorGroups: [
    {
      title: 'Pyhä',
      items: [
        { name: 'Hotel Pyhätunturi', propertyQuery: 'Hotel Pyhätunturi', sid: 'destination_pyha_hotel', note: 'Mitt i Pyhä: 46 dubbelrum, fem superiorrum och ett panoramarum; frukost, bastu och gym ingår.' },
        { name: 'Pyhä Igloos', propertyQuery: 'Pyhä Igloos', sid: 'destination_pyha_igloos', note: 'Rum med igloolikt glastak mitt i skidorten, alla med egen ingång utifrån.' },
        { name: 'Northern Lights Village Pyhä', propertyQuery: 'Northern Lights Village Pyhä', sid: 'destination_pyha_nlv', note: 'En del stugor har glastak rakt ovanför sängen; bastu, badtunna och transfer från Rovaniemi flygplats.' },
        { name: 'Sunday Morning Resort', propertyQuery: 'Sunday Morning Resort', sid: 'destination_pyha_sunday_morning', note: 'Vid stranden av sjön Pyhäjärvi intill nationalparken; Aamu Suites har plats för en till fyra personer.' },
        { name: 'Kurula’s Resort', propertyQuery: 'Kurula’s Resort', sid: 'destination_pyha_kurulas', note: 'Huvudbyggnaden vid sjön Pyhäjärvi har 17 sviter och värms upp med sjövärme.' },
        { name: 'Ski-Inn Kultakero', propertyQuery: 'Ski-Inn Kultakero', sid: 'destination_pyha_kultakero', note: 'Hotellrum och lägenheter i sju storlekar, nära backarna och nationalparken.' },
      ],
    },
    {
      title: 'Luosto',
      items: [
        { name: 'Lapland Hotels Luostotunturi', propertyQuery: 'Lapland Hotels Luostotunturi', sid: 'destination_luosto_luostotunturi', note: 'I Luostos timmerby intill nationalparken: hotellrum, lägenheter och timmerstugor, samt Amethyst Spa.' },
        { name: 'Santa’s Hotel Aurora & Igloos', propertyQuery: 'Santa’s Hotel Aurora & Igloos', sid: 'destination_luosto_aurora', note: 'Varje hotellrum har egen bastu, och de tio glasigloorna som är anslutna till hotellet har var sitt norrskenslarm.' },
      ],
    },
  ],
  anchorProperties: [
    { name: 'Alla boenden i Pyhä', href: HOTEL_SEARCH_FOR('sv').pyha, sid: 'destination_pyha_all_search', note: 'Bläddra bland hotell och lägenheter i Pyhä på Sembo.' },
    { name: 'Alla boenden i Luosto', href: HOTEL_SEARCH_FOR('sv').luosto, sid: 'destination_luosto_all_search', note: 'Bläddra bland hotell och stugor i Luosto på Sembo.' },
  ],
  transport: [
    { mode: 'plane', label: 'Från Rovaniemi flygplats (RVN)', detail: 'Från Rovaniemi är det cirka 115 km till Luosto och, via Kemijärvi, cirka 130 km till Pyhä.' },
    { mode: 'bus', label: 'Buss till Luosto och Pyhä', detail: 'Från Rovaniemi flygplats, järnvägsstationen och busstationen: fyra avgångar om dagen på vintern, två på sommaren.' },
    { mode: 'train', label: 'Nattåg till Kemijärvi', detail: 'Från Helsingfors; från stationen i Kemijärvi går bussar till Pyhä, cirka 47 km.' },
    { mode: 'car', label: 'Mellan byarna', detail: '25 km längs väg 962, och det går en buss mellan Pyhä och Luosto.' },
  ],
  carRental: {
    href: CARS_FOR('sv').fromRovaniemi,
    sid: 'destination_pyha_cars_rvn',
    airport: 'Upphämtning på Rovaniemi flygplats (RVN)',
    blurb: 'Cirka 115 km till Luosto · 130 km till Pyhä',
  },
  seoTitle: 'Pyhätunturi och Luosto: hotell, glasigloor och stugor',
  seoDescription: 'Hotell, glasigloor och timmerstugor i Pyhä och Luosto, två fjällbyar 25 km från varandra i östra finska Lappland, och resan från Rovaniemi flygplats.',
}

const es: DestinationBody = {
  tagline: 'Dos pueblos de fjäll a 25 km uno del otro en el este de Laponia, en los dos extremos del Parque Nacional de Pyhä-Luosto, cada uno con sus propias pistas de esquí.',
  description: `Pyhä y Luosto son dos pequeños pueblos turísticos en la carretera 962, a 25 km uno del otro: Pyhä, en Pelkosenniemi, y Luosto, en Sodankylä. Entre ellos se extiende una cadena de fjäll de 35 kilómetros, vestigio de una de las cordilleras más antiguas del mundo y la zona de grandes fjäll más meridional de Finlandia. Está protegida desde 2005 como Parque Nacional de Pyhä-Luosto, creado a partir del Parque Nacional de Pyhätunturi, fundado en 1938.

Ninguno de los dos pueblos es una gran estación. Pyhä tiene 15 pistas y Luosto 10, cada pueblo tiene unos pocos hoteles y el resto son apartamentos, cabañas de troncos y habitaciones con techo de cristal. Rovaniemi está a unos 115 km de Luosto, y en invierno hay autobuses desde el aeropuerto a los dos pueblos cuatro veces al día.`,
  facts: [
    { label: 'Entre los pueblos', value: '25 km, carretera 962' },
    { label: 'Fjäll más alto', value: 'Noitatunturi 540 m' },
    { label: 'Aeropuerto más cercano', value: 'RVN, ~110 km' },
    { label: 'Pistas', value: 'Pyhä 15 · Luosto 10' },
  ],
  highlights: [
    { title: 'El desfiladero de Isokuru y su cascada', body: 'Isokuru, el mayor desfiladero del parque, tiene 220 m de profundidad. Una cascada de 17 metros cae en el estanque de Pyhänkasteenlampi, de aguas claras y 12 m de profundidad; está prohibido bañarse en el estanque y acercarse a la cascada.' },
    { title: 'Mina de amatistas de Lampivaara', body: 'Una de las pocas minas de gemas del mundo abiertas al público, a unos 5 km de Luosto, y cada visitante extrae su propia amatista. Las visitas de invierno van del 1 de noviembre de 2026 al 18 de abril de 2027; desde el aparcamiento de Ukko-Luosto, la visita cuesta 78 € por adulto, con el transporte de la propia mina, porque no se permiten los coches particulares.' },
    { title: 'Dos zonas de esquí en la misma cadena de fjäll', body: 'Pyhä tiene 15 pistas, 9 remontes y 280 m de desnivel; Luosto tiene 10 pistas y 4 remontes. Pyhä se propone abrir el 20 de noviembre de 2026 y Luosto, el 28 de noviembre.' },
    { title: 'Alerta de auroras en Luosto', body: 'Luosto tiene su propio sensor de auroras con una alerta gratuita en tiempo real, y una cámara en la cima del fjäll Luosto retransmite el cielo en directo día y noche.' },
    { title: 'Bosque antiguo en Ukko-Luosto', body: 'En la ladera suroeste de Ukko-Luosto y Lampivaara nunca se ha talado el bosque, y los árboles tienen hasta 400 años.' },
    { title: 'Las cimas más altas', body: 'Noitatunturi alcanza los 540 m y Ukko-Luosto los 514 m: son las cimas más altas de la cadena.' },
  ],
  whenToGo: `Pyhä se propone abrir sus pistas el 20 de noviembre de 2026 y Luosto, el 28 de noviembre; la temporada de Pyhä dura hasta principios de mayo.
Estadísticamente, la aurora boreal es más probable de mediados de agosto a mediados de abril; la alerta de auroras de Luosto y la cámara de la cima le indican cuándo mirar al cielo.
Las visitas de invierno a la mina de amatistas van del 1 de noviembre de 2026 al 18 de abril de 2027, a diario del 1 de diciembre al 28 de marzo (cerrada el 24 de diciembre).`,
  howToGet: `Vuele a Rovaniemi (RVN). Desde el aeropuerto salen autobuses a Luosto que continúan hasta Pyhä, cuatro veces al día en invierno y dos en verano.
Si viaja en tren, tome el nocturno de Helsinki a Kemijärvi; desde la estación de Kemijärvi salen autobuses a Pyhä, a unos 47 km.
En coche, de Rovaniemi a Luosto hay unos 115 km (carretera 4 hacia el norte y, en Torvinen, la carretera 962), y de Rovaniemi a Pyhä por Kemijärvi, unos 130 km. También hay autobús entre los dos pueblos.`,
  stayTypes: [
    'Habitaciones e iglús con techo de cristal en los dos pueblos, para mirar el cielo desde la cama.',
    'Hoteles de montaña en el centro de los pueblos, cerca de las pistas y de los senderos del parque nacional.',
    'Cabañas de troncos y apartamentos en el pueblo de casas de troncos de Luosto y alrededor de las pistas de Pyhä.',
    'Complejos a orillas del lago Pyhäjärvi, al pie de Pyhä.',
  ],
  siblings: [
    { name: 'Ruka', href: '/destinations/ruka', blurb: 'Pueblo de esquí sin coches en Kuusamo, justo al sur de Laponia.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'El aeropuerto de Pyhä y Luosto, a unos 115 km.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Pueblo de fjäll más al norte, junto al Parque Nacional Urho Kekkonen.' },
  ],
  anchorGroups: [
    {
      title: 'Pyhä',
      items: [
        { name: 'Hotel Pyhätunturi', propertyQuery: 'Hotel Pyhätunturi', sid: 'destination_pyha_hotel', note: 'En el corazón de Pyhä: 46 habitaciones dobles, cinco habitaciones superiores y una habitación panorámica; desayuno, sauna y gimnasio incluidos.' },
        { name: 'Pyhä Igloos', propertyQuery: 'Pyhä Igloos', sid: 'destination_pyha_igloos', note: 'Habitaciones con techo de cristal en forma de iglú en el centro de la estación de esquí, cada una con entrada propia desde el exterior.' },
        { name: 'Northern Lights Village Pyhä', propertyQuery: 'Northern Lights Village Pyhä', sid: 'destination_pyha_nlv', note: 'Algunas cabañas tienen el techo de cristal justo encima de la cama; sauna, jacuzzi y traslados desde el aeropuerto de Rovaniemi.' },
        { name: 'Sunday Morning Resort', propertyQuery: 'Sunday Morning Resort', sid: 'destination_pyha_sunday_morning', note: 'A orillas del lago Pyhäjärvi, junto al parque nacional; sus Aamu Suites alojan de una a cuatro personas.' },
        { name: 'Kurula’s Resort', propertyQuery: 'Kurula’s Resort', sid: 'destination_pyha_kurulas', note: '17 suites en el edificio principal, junto al lago Pyhäjärvi, con calefacción geotérmica que se obtiene del propio lago.' },
        { name: 'Ski-Inn Kultakero', propertyQuery: 'Ski-Inn Kultakero', sid: 'destination_pyha_kultakero', note: 'Habitaciones de hotel y apartamentos de siete tamaños, cerca de las pistas y del parque nacional.' },
      ],
    },
    {
      title: 'Luosto',
      items: [
        { name: 'Lapland Hotels Luostotunturi', propertyQuery: 'Lapland Hotels Luostotunturi', sid: 'destination_luosto_luostotunturi', note: 'En el pueblo de casas de troncos de Luosto, junto al parque nacional: habitaciones de hotel, apartamentos y cabañas de troncos, y el Amethyst Spa.' },
        { name: 'Santa’s Hotel Aurora & Igloos', propertyQuery: 'Santa’s Hotel Aurora & Igloos', sid: 'destination_luosto_aurora', note: 'Todas las habitaciones del hotel tienen sauna privada, y cada uno de los diez iglús de cristal unidos al hotel tiene alerta de auroras.' },
      ],
    },
  ],
  anchorProperties: [
    { name: 'Todos los alojamientos de Pyhä', href: HOTEL_SEARCH_FOR('es').pyha, sid: 'destination_pyha_all_search', note: 'Consulte los hoteles y apartamentos de Pyhä en Trip.com.' },
    { name: 'Todos los alojamientos de Luosto', href: HOTEL_SEARCH_FOR('es').luosto, sid: 'destination_luosto_all_search', note: 'Consulte los hoteles y cabañas de Luosto en Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Desde el aeropuerto de Rovaniemi (RVN)', detail: 'Rovaniemi está a unos 115 km de Luosto y, por Kemijärvi, a unos 130 km de Pyhä.' },
    { mode: 'bus', label: 'Autobús a Luosto y Pyhä', detail: 'Desde el aeropuerto, la estación de tren y la estación de autobuses de Rovaniemi: cuatro salidas al día en invierno y dos en verano.' },
    { mode: 'train', label: 'Tren nocturno a Kemijärvi', detail: 'Desde Helsinki; desde la estación de Kemijärvi salen autobuses a Pyhä, a unos 47 km.' },
    { mode: 'car', label: 'Entre los dos pueblos', detail: '25 km por la carretera 962, y hay autobús entre Pyhä y Luosto.' },
  ],
  carRental: {
    href: CARS_FOR('es').fromRovaniemi,
    sid: 'destination_pyha_cars_rvn',
    airport: 'Recogida en el aeropuerto de Rovaniemi (RVN)',
    blurb: 'Unos 115 km hasta Luosto · 130 km hasta Pyhä',
  },
  seoTitle: 'Luosto y Pyhätunturi: hoteles, iglús y cabañas en Laponia',
  seoDescription: 'Luosto y Pyhä: hoteles, iglús de cristal y cabañas de troncos en dos pueblos de fjäll del este de Laponia, a 25 km entre sí, y cómo llegar desde Rovaniemi.',
}

const ptBR: DestinationBody = {
  tagline: 'Dois vilarejos de fjäll a 25 km um do outro na Lapônia Oriental, cada um numa ponta do Parque Nacional Pyhä-Luosto e cada um com as suas próprias pistas de esqui.',
  description: `Pyhä e Luosto são dois pequenos vilarejos turísticos na rodovia 962, a 25 km um do outro: Pyhä fica em Pelkosenniemi e Luosto, em Sodankylä. Entre eles se estende uma cadeia de fjäll de 35 quilômetros, remanescente de uma das cordilheiras mais antigas do mundo e a área de grandes fjäll mais ao sul da Finlândia. Desde 2005 ela é protegida como Parque Nacional Pyhä-Luosto, criado a partir do Parque Nacional Pyhätunturi, fundado em 1938.

Nenhum dos dois é uma grande estação de esqui. Pyhä tem 15 pistas e Luosto, 10; cada vilarejo tem alguns poucos hotéis, e o restante são apartamentos, cabanas de troncos e quartos com teto de vidro. Rovaniemi fica a cerca de 115 km de Luosto, e no inverno há ônibus do aeroporto para os dois vilarejos quatro vezes por dia.`,
  facts: [
    { label: 'Entre os vilarejos', value: '25 km, rodovia 962' },
    { label: 'Fjäll mais alto', value: 'Noitatunturi 540 m' },
    { label: 'Aeroporto mais próximo', value: 'RVN, ~110 km' },
    { label: 'Pistas', value: 'Pyhä 15 · Luosto 10' },
  ],
  highlights: [
    { title: 'O desfiladeiro Isokuru e a sua cachoeira', body: 'O Isokuru, o maior desfiladeiro do parque, tem 220 m de profundidade. Uma cachoeira de 17 metros cai na lagoa Pyhänkasteenlampi, de água límpida e 12 m de profundidade; é proibido nadar na lagoa e se aproximar da cachoeira.' },
    { title: 'Mina de ametista de Lampivaara', body: 'Uma das poucas minas de pedras preciosas do mundo abertas a visitantes, a cerca de 5 km de Luosto, onde cada visitante garimpa a sua própria ametista. As visitas de inverno vão de 1º de novembro de 2026 a 18 de abril de 2027; saindo do estacionamento de Ukko-Luosto, a visita custa €78 por adulto, com o transporte da própria mina, porque carros particulares não são permitidos.' },
    { title: 'Duas áreas de esqui na mesma cadeia de fjäll', body: 'Pyhä tem 15 pistas, 9 teleféricos e 280 m de desnível; Luosto tem 10 pistas e 4 teleféricos. Pyhä pretende abrir em 20 de novembro de 2026 e Luosto, em 28 de novembro.' },
    { title: 'Alerta de aurora em Luosto', body: 'Luosto tem o seu próprio sensor de aurora, com um alerta gratuito em tempo real, e uma câmera no topo do fjäll Luosto transmite imagens do céu dia e noite.' },
    { title: 'Floresta antiga em Ukko-Luosto', body: 'Na face sudoeste de Ukko-Luosto e Lampivaara, a floresta nunca foi cortada, e as árvores têm até 400 anos.' },
    { title: 'Os picos mais altos', body: 'O Noitatunturi chega a 540 m e o Ukko-Luosto, a 514 m: são os picos mais altos da cadeia.' },
  ],
  whenToGo: `Pyhä pretende abrir as pistas em 20 de novembro de 2026 e Luosto, em 28 de novembro; a temporada de Pyhä vai até o início de maio.
Pelas estatísticas, a aurora boreal é mais provável de meados de agosto a meados de abril; o alerta de aurora de Luosto e a câmera no topo do fjäll avisam quando olhar para cima.
As visitas de inverno à mina de ametista vão de 1º de novembro de 2026 a 18 de abril de 2027, todos os dias de 1º de dezembro a 28 de março (fechada em 24 de dezembro).`,
  howToGet: `Voe até Rovaniemi (RVN). Do aeroporto saem ônibus para Luosto, que seguem até Pyhä, quatro vezes por dia no inverno e duas vezes por dia no verão.
De trem, pegue o trem noturno de Helsinque a Kemijärvi; da estação de Kemijärvi saem ônibus para Pyhä, a cerca de 47 km.
De carro, de Rovaniemi a Luosto são cerca de 115 km (rodovia 4 rumo ao norte e, em Torvinen, a rodovia 962) e de Rovaniemi a Pyhä, passando por Kemijärvi, cerca de 130 km. Também há ônibus entre os dois vilarejos.`,
  stayTypes: [
    'Quartos e iglus com teto de vidro nos dois vilarejos, para ver o céu da cama.',
    'Hotéis de fjäll no centro dos vilarejos, perto das pistas e das trilhas do parque nacional.',
    'Cabanas de troncos e apartamentos no vilarejo de troncos de Luosto e ao redor das pistas de Pyhä.',
    'Resorts à beira do lago Pyhäjärvi, ao pé do Pyhä.',
  ],
  siblings: [
    { name: 'Ruka', href: '/destinations/ruka', blurb: 'Um vilarejo de esqui sem carros em Kuusamo, logo ao sul da Lapônia.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'O aeroporto para Pyhä e Luosto, a cerca de 115 km.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Vilarejo de fjäll mais ao norte, junto ao Parque Nacional Urho Kekkonen.' },
  ],
  anchorGroups: [
    {
      title: 'Pyhä',
      items: [
        { name: 'Hotel Pyhätunturi', propertyQuery: 'Hotel Pyhätunturi', sid: 'destination_pyha_hotel', note: 'No coração de Pyhä: 46 quartos duplos, cinco quartos superiores e um quarto panorâmico; café da manhã, sauna e academia estão incluídos.' },
        { name: 'Pyhä Igloos', propertyQuery: 'Pyhä Igloos', sid: 'destination_pyha_igloos', note: 'Quartos com teto de vidro em forma de iglu no centro da estação de esqui, cada um com entrada própria pelo lado de fora.' },
        { name: 'Northern Lights Village Pyhä', propertyQuery: 'Northern Lights Village Pyhä', sid: 'destination_pyha_nlv', note: 'Algumas cabanas têm teto de vidro logo acima da cama; sauna, ofurô e traslados do aeroporto de Rovaniemi.' },
        { name: 'Sunday Morning Resort', propertyQuery: 'Sunday Morning Resort', sid: 'destination_pyha_sunday_morning', note: 'Às margens do lago Pyhäjärvi, ao lado do parque nacional; as suas Aamu Suites acomodam de uma a quatro pessoas.' },
        { name: 'Kurula’s Resort', propertyQuery: 'Kurula’s Resort', sid: 'destination_pyha_kurulas', note: '17 suítes no lodge principal, junto ao lago Pyhäjärvi, aquecidas com energia geotérmica do lago.' },
        { name: 'Ski-Inn Kultakero', propertyQuery: 'Ski-Inn Kultakero', sid: 'destination_pyha_kultakero', note: 'Quartos de hotel e apartamentos em sete tamanhos, perto das pistas e do parque nacional.' },
      ],
    },
    {
      title: 'Luosto',
      items: [
        { name: 'Lapland Hotels Luostotunturi', propertyQuery: 'Lapland Hotels Luostotunturi', sid: 'destination_luosto_luostotunturi', note: 'No vilarejo de troncos de Luosto, ao lado do parque nacional: quartos de hotel, apartamentos e cabanas de troncos, além do Amethyst Spa.' },
        { name: 'Santa’s Hotel Aurora & Igloos', propertyQuery: 'Santa’s Hotel Aurora & Igloos', sid: 'destination_luosto_aurora', note: 'Todos os quartos do hotel têm sauna privativa, e os dez iglus de vidro ligados ao hotel têm, cada um, alerta de aurora.' },
      ],
    },
  ],
  anchorProperties: [
    { name: 'Todas as hospedagens de Pyhä', href: HOTEL_SEARCH_FOR('pt-BR').pyha, sid: 'destination_pyha_all_search', note: 'Veja hotéis e apartamentos em Pyhä no Trip.com.' },
    { name: 'Todas as hospedagens de Luosto', href: HOTEL_SEARCH_FOR('pt-BR').luosto, sid: 'destination_luosto_all_search', note: 'Veja hotéis e cabanas em Luosto no Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Do Aeroporto de Rovaniemi (RVN)', detail: 'Rovaniemi fica a cerca de 115 km de Luosto e, passando por Kemijärvi, a cerca de 130 km de Pyhä.' },
    { mode: 'bus', label: 'Ônibus para Luosto e Pyhä', detail: 'Do aeroporto, da estação ferroviária e da rodoviária de Rovaniemi: quatro saídas por dia no inverno e duas no verão.' },
    { mode: 'train', label: 'Trem noturno para Kemijärvi', detail: 'De Helsinque; da estação de Kemijärvi saem ônibus para Pyhä, a cerca de 47 km.' },
    { mode: 'car', label: 'Entre os vilarejos', detail: '25 km pela rodovia 962, e há ônibus entre Pyhä e Luosto.' },
  ],
  carRental: {
    href: CARS_FOR('pt-BR').fromRovaniemi,
    sid: 'destination_pyha_cars_rvn',
    airport: 'Retirada no Aeroporto de Rovaniemi (RVN)',
    blurb: 'Cerca de 115 km até Luosto · 130 km até Pyhä',
  },
  seoTitle: 'Pyhä e Luosto, Lapônia: hotéis, iglus de vidro e cabanas',
  seoDescription: 'Hotéis, iglus de vidro e cabanas de troncos em Pyhä e Luosto, vilarejos a 25 km um do outro na Lapônia Oriental, e como chegar do aeroporto de Rovaniemi.',
}

const ko: DestinationBody = {
  tagline: '라플란드 동부에서 서로 25km 떨어진 펠 마을 두 곳. 퓌해-루오스토 국립공원의 양 끝에 있으며, 마을마다 스키 슬로프가 있습니다.',
  description: `퓌해와 루오스토는 962번 도로를 따라 25km 떨어져 있는 작은 리조트 마을 두 곳으로, 퓌해는 펠코센니에미에, 루오스토는 소단퀼래에 속합니다. 두 마을 사이에 이어지는 35km 길이의 펠 능선은 세계에서 가장 오래된 산맥 가운데 하나가 남긴 흔적이자, 핀란드에서 가장 남쪽에 있는 큰 펠 지대입니다. 이 능선은 2005년부터 퓌해-루오스토 국립공원으로 보호되고 있으며, 이 공원은 1938년에 지정된 퓌해툰투리 국립공원을 바탕으로 만들어졌습니다.

두 마을 모두 큰 리조트는 아닙니다. 슬로프는 퓌해에 15개, 루오스토에 10개가 있고, 호텔은 마을마다 몇 곳뿐이며, 나머지는 아파트, 통나무집, 유리 지붕 객실입니다. 로바니에미에서 루오스토까지는 약 115km이고, 겨울에는 공항에서 두 마을까지 버스가 하루 네 번 다닙니다.`,
  facts: [
    { label: '마을 간 거리', value: '25km, 962번 도로' },
    { label: '가장 높은 펠', value: 'Noitatunturi 540m' },
    { label: '가장 가까운 공항', value: 'RVN, 약 110km' },
    { label: '슬로프', value: '퓌해 15 · 루오스토 10' },
  ],
  highlights: [
    { title: 'Isokuru 협곡과 폭포', body: '공원에서 가장 큰 협곡인 Isokuru는 깊이가 220m입니다. 깊이 12m의 맑은 Pyhänkasteenlampi 연못으로 17m 높이의 폭포가 떨어지며, 연못에서 수영하는 것과 폭포에 다가가는 것은 금지되어 있습니다.' },
    { title: 'Lampivaara 자수정 광산', body: '방문객이 들어갈 수 있는 세계에서 몇 안 되는 보석 광산 가운데 하나로, 루오스토에서 약 5km 떨어져 있으며 방문객마다 자기 자수정을 직접 캡니다. 겨울 투어는 2026년 11월 1일부터 2027년 4월 18일까지 운영됩니다. Ukko-Luosto 주차장에서 출발하는 투어는 성인 요금이 78€이고, 개인 차량은 들어갈 수 없으므로 광산이 운영하는 차량으로 이동합니다.' },
    { title: '한 펠 능선 위의 두 스키 리조트', body: '퓌해에는 슬로프 15개와 리프트 9기가 있고 표고차는 280m입니다. 루오스토에는 슬로프 10개와 리프트 4기가 있습니다. 개장 목표일은 퓌해가 2026년 11월 20일, 루오스토가 11월 28일입니다.' },
    { title: '루오스토의 오로라 알림', body: '루오스토에는 자체 오로라 센서와 무료 실시간 알림이 있고, 루오스토 펠 정상의 카메라가 하늘을 밤낮없이 생중계합니다.' },
    { title: 'Ukko-Luosto의 오래된 숲', body: 'Ukko-Luosto와 Lampivaara의 남서쪽 사면은 한 번도 벌채된 적이 없는 숲으로, 나무의 수령이 최대 400년에 이릅니다.' },
    { title: '가장 높은 봉우리', body: '능선에서 가장 높은 봉우리는 해발 540m의 Noitatunturi와 514m의 Ukko-Luosto입니다.' },
  ],
  whenToGo: `퓌해는 2026년 11월 20일, 루오스토는 11월 28일에 슬로프 개장을 목표로 하고 있으며, 퓌해의 시즌은 5월 초까지 이어집니다.
통계적으로 오로라를 볼 가능성이 가장 높은 시기는 8월 중순부터 4월 중순까지입니다. 루오스토의 오로라 알림과 펠 정상 카메라가 언제 하늘을 올려다볼지 알려 줍니다.
자수정 광산의 겨울 투어는 2026년 11월 1일부터 2027년 4월 18일까지이며, 12월 1일부터 3월 28일까지는 매일 운영합니다(12월 24일 휴무).`,
  howToGet: `비행기로는 로바니에미 공항(RVN)으로 갑니다. 공항에서 루오스토를 거쳐 퓌해까지 가는 버스가 겨울에는 하루 네 번, 여름에는 하루 두 번 다닙니다.
기차로는 헬싱키에서 케미야르비까지 야간열차를 탑니다. 케미야르비역에서 약 47km 떨어진 퓌해까지 버스가 다닙니다.
자동차로는 로바니에미에서 루오스토까지 약 115km(4번 국도로 북쪽으로 가다가 토르비넨에서 962번 도로), 케미야르비를 거쳐 퓌해까지 약 130km입니다. 두 마을 사이에도 버스가 다닙니다.`,
  stayTypes: [
    '두 마을 모두에 있는 유리 지붕 객실과 이글루. 침대에 누워 하늘을 볼 수 있습니다.',
    '마을 중심의 펠 호텔. 슬로프와 국립공원 트레일이 가깝습니다.',
    '통나무집과 아파트. 루오스토의 통나무 마을과 퓌해의 슬로프 주변에 있습니다.',
    '퓌해 기슭, 퓌해야르비 호숫가의 리조트.',
  ],
  siblings: [
    { name: 'Ruka', href: '/destinations/ruka', blurb: '라플란드 바로 남쪽, 쿠사모의 차 없는 스키 마을.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: '퓌해와 루오스토로 가는 공항, 약 115km 거리.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: '더 북쪽, 우르호 케코넨 국립공원 옆의 펠 마을.' },
  ],
  anchorGroups: [
    {
      title: '퓌해',
      items: [
        { name: 'Hotel Pyhätunturi', propertyQuery: 'Hotel Pyhätunturi', sid: 'destination_pyha_hotel', note: '퓌해 한가운데에 있습니다. 더블룸 46개, 슈피리어룸 다섯 개, 파노라마룸 한 개가 있으며 조식, 사우나, 헬스장 이용이 포함됩니다.' },
        { name: 'Pyhä Igloos', propertyQuery: 'Pyhä Igloos', sid: 'destination_pyha_igloos', note: '스키 리조트 중심에 있는 이글루 모양 유리 천장 객실로, 객실마다 바깥에서 바로 들어가는 전용 출입구가 있습니다.' },
        { name: 'Northern Lights Village Pyhä', propertyQuery: 'Northern Lights Village Pyhä', sid: 'destination_pyha_nlv', note: '일부 캐빈은 침대 바로 위가 유리 지붕입니다. 사우나와 핫텁이 있고, 로바니에미 공항에서 오는 트랜스퍼도 있습니다.' },
        { name: 'Sunday Morning Resort', propertyQuery: 'Sunday Morning Resort', sid: 'destination_pyha_sunday_morning', note: '국립공원 옆 퓌해야르비 호숫가에 있으며, Aamu Suites에는 한 명부터 네 명까지 묵을 수 있습니다.' },
        { name: 'Kurula’s Resort', propertyQuery: 'Kurula’s Resort', sid: 'destination_pyha_kurulas', note: '퓌해야르비 호숫가의 본관에 스위트 17개가 있으며, 호수에서 얻는 지열로 난방합니다.' },
        { name: 'Ski-Inn Kultakero', propertyQuery: 'Ski-Inn Kultakero', sid: 'destination_pyha_kultakero', note: '일곱 가지 크기의 호텔 객실과 아파트로, 슬로프와 국립공원이 가깝습니다.' },
      ],
    },
    {
      title: '루오스토',
      items: [
        { name: 'Lapland Hotels Luostotunturi', propertyQuery: 'Lapland Hotels Luostotunturi', sid: 'destination_luosto_luostotunturi', note: '국립공원 옆 루오스토 통나무 마을에 있습니다. 호텔 객실, 아파트, 통나무집과 Amethyst Spa가 있습니다.' },
        { name: 'Santa’s Hotel Aurora & Igloos', propertyQuery: 'Santa’s Hotel Aurora & Igloos', sid: 'destination_luosto_aurora', note: '모든 호텔 객실에 전용 사우나가 있고, 호텔과 연결된 글래스 이글루 열 채에는 저마다 오로라 알림이 있습니다.' },
      ],
    },
  ],
  anchorProperties: [
    { name: '퓌해 전체 숙소', href: HOTEL_SEARCH_FOR('ko').pyha, sid: 'destination_pyha_all_search', note: 'Trip.com에서 퓌해의 호텔과 아파트를 둘러보세요.' },
    { name: '루오스토 전체 숙소', href: HOTEL_SEARCH_FOR('ko').luosto, sid: 'destination_luosto_all_search', note: 'Trip.com에서 루오스토의 호텔과 캐빈을 둘러보세요.' },
  ],
  transport: [
    { mode: 'plane', label: '로바니에미 공항(RVN)에서', detail: '로바니에미에서 루오스토까지 약 115km, 케미야르비를 거쳐 퓌해까지 약 130km.' },
    { mode: 'bus', label: '루오스토·퓌해행 버스', detail: '로바니에미 공항, 기차역, 버스 터미널에서 출발. 겨울에는 하루 네 편, 여름에는 두 편.' },
    { mode: 'train', label: '케미야르비행 야간열차', detail: '헬싱키 출발. 케미야르비역에서 퓌해까지 약 47km 거리를 버스가 다닙니다.' },
    { mode: 'car', label: '두 마을 사이', detail: '962번 도로로 25km. 퓌해와 루오스토 사이에는 버스도 다닙니다.' },
  ],
  carRental: {
    href: CARS_FOR('ko').fromRovaniemi,
    sid: 'destination_pyha_cars_rvn',
    airport: '로바니에미 공항(RVN) 픽업',
    blurb: '루오스토까지 약 115km · 퓌해까지 130km',
  },
  seoTitle: '핀란드 퓌해·루오스토 숙소: 두 펠 마을의 호텔',
  seoDescription: '핀란드 퓌해·루오스토 숙소 안내: 라플란드 동부에서 25km 떨어진 두 펠 마을의 호텔, 글래스 이글루, 통나무집과 로바니에미 공항에서 가는 방법을 소개합니다.',
}

const fr: DestinationBody = {
  tagline: 'Deux villages de fjäll à 25 km l’un de l’autre en Laponie orientale, à chaque extrémité du parc national de Pyhä-Luosto, chacun avec ses propres pistes de ski.',
  description: `Pyhä et Luosto sont deux petits villages touristiques sur la route 962, à 25 km l’un de l’autre : Pyhä dans la commune de Pelkosenniemi, Luosto dans celle de Sodankylä. Entre les deux s’étire une chaîne de fjälls de 35 km, vestige de l’un des plus anciens massifs montagneux du monde et zone de grands fjälls la plus méridionale de Finlande. Elle est protégée depuis 2005 sous le nom de parc national de Pyhä-Luosto, créé à partir du parc national de Pyhätunturi, fondé en 1938.

Aucun des deux villages n’est une grande station. Pyhä compte 15 pistes et Luosto 10, chaque village a une poignée d’hôtels, et le reste se compose d’appartements, de chalets en rondins et de chambres à toit de verre. Rovaniemi est à environ 115 km de Luosto, et en hiver, des bus relient l’aéroport aux deux villages quatre fois par jour.`,
  facts: [
    { label: 'Entre les villages', value: '25 km, route 962' },
    { label: 'Fjäll le plus haut', value: 'Noitatunturi 540 m' },
    { label: 'Aéroport le plus proche', value: 'RVN, ~110 km' },
    { label: 'Pistes', value: 'Pyhä 15 · Luosto 10' },
  ],
  highlights: [
    { title: 'La gorge d’Isokuru et sa cascade', body: 'Isokuru, la plus grande gorge du parc, est profonde de 220 m. Une cascade de 17 mètres tombe dans l’étang limpide de Pyhänkasteenlampi, profond de 12 m ; la baignade dans l’étang et l’approche de la cascade sont interdites.' },
    { title: 'La mine d’améthyste de Lampivaara', body: 'L’une des rares mines de pierres précieuses au monde ouvertes aux visiteurs, à environ 5 km de Luosto : chacun y extrait sa propre améthyste. Les visites d’hiver ont lieu du 1er novembre 2026 au 18 avril 2027 ; depuis le parking d’Ukko-Luosto, la visite coûte 78 € par adulte, avec le transport assuré par la mine, car les voitures particulières n’y sont pas autorisées.' },
    { title: 'Deux domaines skiables sur une même chaîne de fjälls', body: 'Pyhä compte 15 pistes, 9 remontées et 280 m de dénivelé ; Luosto, 10 pistes et 4 remontées. Pyhä vise une ouverture le 20 novembre 2026, Luosto le 28 novembre.' },
    { title: 'Alerte aurores à Luosto', body: 'Luosto dispose de son propre capteur d’aurores boréales, avec une alerte gratuite en temps réel, et une caméra installée au sommet du fjäll de Luosto filme le ciel en direct, jour et nuit.' },
    { title: 'Forêt ancienne sur l’Ukko-Luosto', body: 'Sur les versants sud-ouest de l’Ukko-Luosto et du Lampivaara, la forêt n’a jamais été coupée, et les arbres ont jusqu’à 400 ans.' },
    { title: 'Les plus hauts sommets', body: 'Le Noitatunturi culmine à 540 m et l’Ukko-Luosto à 514 m : ce sont les plus hauts sommets de la chaîne.' },
  ],
  whenToGo: `Pyhä vise une ouverture de ses pistes le 20 novembre 2026 et Luosto le 28 novembre ; la saison de Pyhä dure jusqu’au début du mois de mai.
Statistiquement, les aurores boréales sont les plus probables de la mi-août à la mi-avril ; l’alerte aurores de Luosto et la caméra du sommet du fjäll vous indiquent quand lever les yeux.
Les visites d’hiver de la mine d’améthyste ont lieu du 1er novembre 2026 au 18 avril 2027, tous les jours du 1er décembre au 28 mars (fermé le 24 décembre).`,
  howToGet: `En avion jusqu’à Rovaniemi (RVN). Des bus relient l’aéroport à Luosto, puis à Pyhä, quatre fois par jour en hiver et deux fois par jour en été.
En train, prenez le train de nuit d’Helsinki à Kemijärvi ; des bus relient la gare de Kemijärvi à Pyhä, à environ 47 km.
En voiture, comptez environ 115 km de Rovaniemi à Luosto (route 4 vers le nord, puis route 962 à Torvinen) et environ 130 km de Rovaniemi à Pyhä par Kemijärvi. Un bus circule aussi entre les deux villages.`,
  stayTypes: [
    'Chambres et igloos à toit de verre dans les deux villages, pour regarder le ciel depuis son lit.',
    'Hôtels de fjäll au centre des villages, près des pistes et des sentiers du parc national.',
    'Chalets en rondins et appartements dans le village de rondins de Luosto et autour des pistes de Pyhä.',
    'Resorts au bord du lac Pyhäjärvi, au pied du fjäll de Pyhä.',
  ],
  siblings: [
    { name: 'Ruka', href: '/destinations/ruka', blurb: 'Village de ski sans voitures à Kuusamo, juste au sud de la Laponie.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'L’aéroport de Pyhä et de Luosto, à environ 115 km.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Village de fjäll plus au nord, au bord du parc national Urho Kekkonen.' },
  ],
  anchorGroups: [
    {
      title: 'Pyhä',
      items: [
        { name: 'Hotel Pyhätunturi', propertyQuery: 'Hotel Pyhätunturi', sid: 'destination_pyha_hotel', note: 'Au cœur de Pyhä : 46 chambres doubles, cinq chambres supérieures et une chambre panoramique ; petit-déjeuner, sauna et salle de sport compris.' },
        { name: 'Pyhä Igloos', propertyQuery: 'Pyhä Igloos', sid: 'destination_pyha_igloos', note: 'Chambres au toit vitré en forme d’igloo au centre de la station de ski, chacune avec sa propre entrée depuis l’extérieur.' },
        { name: 'Northern Lights Village Pyhä', propertyQuery: 'Northern Lights Village Pyhä', sid: 'destination_pyha_nlv', note: 'Certains chalets ont un toit de verre juste au-dessus du lit ; sauna, bain nordique et transferts depuis l’aéroport de Rovaniemi.' },
        { name: 'Sunday Morning Resort', propertyQuery: 'Sunday Morning Resort', sid: 'destination_pyha_sunday_morning', note: 'Sur la rive du lac Pyhäjärvi, à côté du parc national ; ses Aamu Suites accueillent d’une à quatre personnes.' },
        { name: 'Kurula’s Resort', propertyQuery: 'Kurula’s Resort', sid: 'destination_pyha_kurulas', note: '17 suites dans le bâtiment principal, au bord du lac Pyhäjärvi ; le bâtiment est chauffé grâce à l’énergie géothermique du lac.' },
        { name: 'Ski-Inn Kultakero', propertyQuery: 'Ski-Inn Kultakero', sid: 'destination_pyha_kultakero', note: 'Chambres d’hôtel et appartements en sept tailles, près des pistes et du parc national.' },
      ],
    },
    {
      title: 'Luosto',
      items: [
        { name: 'Lapland Hotels Luostotunturi', propertyQuery: 'Lapland Hotels Luostotunturi', sid: 'destination_luosto_luostotunturi', note: 'Dans le village de rondins de Luosto, à côté du parc national : chambres d’hôtel, appartements et chalets en rondins, ainsi que l’Amethyst Spa.' },
        { name: 'Santa’s Hotel Aurora & Igloos', propertyQuery: 'Santa’s Hotel Aurora & Igloos', sid: 'destination_luosto_aurora', note: 'Chaque chambre d’hôtel a son sauna privatif, et dix igloos de verre reliés à l’hôtel ont chacun une alerte aurores.' },
      ],
    },
  ],
  anchorProperties: [
    { name: 'Tous les hébergements de Pyhä', href: HOTEL_SEARCH_FOR('fr').pyha, sid: 'destination_pyha_all_search', note: 'Parcourez les hôtels et appartements de Pyhä sur Trip.com.' },
    { name: 'Tous les hébergements de Luosto', href: HOTEL_SEARCH_FOR('fr').luosto, sid: 'destination_luosto_all_search', note: 'Parcourez les hôtels et chalets de Luosto sur Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Depuis l’aéroport de Rovaniemi (RVN)', detail: 'Rovaniemi est à environ 115 km de Luosto et, par Kemijärvi, à environ 130 km de Pyhä.' },
    { mode: 'bus', label: 'Bus pour Luosto et Pyhä', detail: 'Depuis l’aéroport, la gare ferroviaire et la gare routière de Rovaniemi : quatre départs par jour en hiver, deux en été.' },
    { mode: 'train', label: 'Train de nuit jusqu’à Kemijärvi', detail: 'Depuis Helsinki ; des bus relient la gare de Kemijärvi à Pyhä, à environ 47 km.' },
    { mode: 'car', label: 'Entre les villages', detail: '25 km par la route 962, et un bus circule entre Pyhä et Luosto.' },
  ],
  carRental: {
    href: CARS_FOR('fr').fromRovaniemi,
    sid: 'destination_pyha_cars_rvn',
    airport: 'Prise en charge à l’aéroport de Rovaniemi (RVN)',
    blurb: 'Environ 115 km jusqu’à Luosto · 130 km jusqu’à Pyhä',
  },
  seoTitle: 'Luosto et Pyhä, Finlande : hôtels, igloos de verre, chalets',
  seoDescription: 'Luosto et Pyhä, en Laponie orientale : hôtels, igloos de verre et chalets en rondins dans deux villages à 25 km l’un de l’autre, et l’accès depuis Rovaniemi.',
}

const it: DestinationBody = {
  tagline: 'Due villaggi di fjäll a 25 km di distanza nella Lapponia orientale, ai due estremi del parco nazionale di Pyhä-Luosto, ciascuno con le sue piste da sci.',
  description: `Pyhä e Luosto sono due piccoli villaggi turistici sulla strada 962, a 25 km l'uno dall'altro: Pyhä nel comune di Pelkosenniemi e Luosto in quello di Sodankylä. Tra i due si stende una catena di fjäll lunga 35 chilometri, ciò che resta di una delle catene montuose più antiche del mondo, nonché la zona di grandi fjäll più meridionale della Finlandia. Dal 2005 è protetta come parco nazionale di Pyhä-Luosto, nato dal parco nazionale di Pyhätunturi, fondato nel 1938.

Nessuno dei due villaggi è una grande stazione. Pyhä ha 15 piste e Luosto 10, ogni villaggio ha qualche hotel, e il resto sono appartamenti, chalet in tronchi e camere con il tetto di vetro. Rovaniemi dista circa 115 km da Luosto, e in inverno i bus partono dall'aeroporto per entrambi i villaggi quattro volte al giorno.`,
  facts: [
    { label: 'Tra i villaggi', value: '25 km, strada 962' },
    { label: 'Fjäll più alto', value: 'Noitatunturi 540 m' },
    { label: 'Aeroporto più vicino', value: 'RVN, ~110 km' },
    { label: 'Piste', value: 'Pyhä 15 · Luosto 10' },
  ],
  highlights: [
    { title: 'La gola di Isokuru e la sua cascata', body: 'Isokuru, la gola più grande del parco, è profonda 220 m. Una cascata di 17 metri si getta nel limpido laghetto Pyhänkasteenlampi, profondo 12 m; è vietato fare il bagno nel laghetto e avvicinarsi alla cascata.' },
    { title: 'Miniera di ametiste di Lampivaara', body: "Una delle poche miniere di pietre preziose al mondo aperte ai visitatori, a circa 5 km da Luosto, e ogni visitatore scava la propria ametista. Le visite invernali si svolgono dal 1° novembre 2026 al 18 aprile 2027; dal parcheggio di Ukko-Luosto una visita costa 78 € per adulto, con il trasporto della miniera, perché le auto private non sono ammesse." },
    { title: 'Due aree sciistiche sulla stessa catena di fjäll', body: 'Pyhä ha 15 piste, 9 impianti e un dislivello di 280 m; Luosto ha 10 piste e 4 impianti. Pyhä punta ad aprire il 20 novembre 2026 e Luosto il 28 novembre.' },
    { title: 'Allerta aurora a Luosto', body: "Luosto ha un proprio sensore per l'aurora con un'allerta gratuita in tempo reale, e una webcam in cima al fjäll Luosto trasmette in diretta le immagini del cielo giorno e notte." },
    { title: "Foresta antica sull'Ukko-Luosto", body: "Sul versante sud-occidentale dell'Ukko-Luosto e del Lampivaara la foresta non è mai stata tagliata, e gli alberi hanno fino a 400 anni." },
    { title: 'Le cime più alte', body: "Il Noitatunturi sale a 540 m e l'Ukko-Luosto a 514 m: sono le cime più alte della catena." },
  ],
  whenToGo: `Pyhä punta ad aprire le piste il 20 novembre 2026 e Luosto il 28 novembre; la stagione di Pyhä dura fino all'inizio di maggio.
Statisticamente l'aurora boreale è più probabile da metà agosto a metà aprile; l'allerta aurora di Luosto e la webcam in cima al fjäll Le dicono quando alzare lo sguardo.
Le visite invernali alla miniera di ametiste si svolgono dal 1° novembre 2026 al 18 aprile 2027, tutti i giorni dal 1° dicembre al 28 marzo (chiusa il 24 dicembre).`,
  howToGet: `Voli per Rovaniemi (RVN). Dall'aeroporto partono bus per Luosto che proseguono fino a Pyhä, quattro volte al giorno in inverno e due in estate.
In treno, prenda il notturno da Helsinki a Kemijärvi; dalla stazione di Kemijärvi partono bus per Pyhä, a circa 47 km.
In auto, da Rovaniemi a Luosto sono circa 115 km (strada nazionale 4 verso nord, poi la strada 962 a Torvinen) e da Rovaniemi a Pyhä passando per Kemijärvi circa 130 km. Un bus collega anche i due villaggi.`,
  stayTypes: [
    'Camere e igloo con tetto di vetro in entrambi i villaggi, per guardare il cielo dal letto.',
    'Hotel di fjäll nel centro dei villaggi, vicino alle piste e ai sentieri del parco nazionale.',
    'Chalet in tronchi e appartamenti nel villaggio di tronchi di Luosto e intorno alle piste di Pyhä.',
    'Resort in riva al lago Pyhäjärvi, ai piedi del fjäll di Pyhä.',
  ],
  siblings: [
    { name: 'Ruka', href: '/destinations/ruka', blurb: 'Un villaggio sciistico senza auto a Kuusamo, appena a sud della Lapponia.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: "L'aeroporto per Pyhä e Luosto, a circa 115 km." },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Villaggio di fjäll più a nord, accanto al parco nazionale Urho Kekkonen.' },
  ],
  anchorGroups: [
    {
      title: 'Pyhä',
      items: [
        { name: 'Hotel Pyhätunturi', propertyQuery: 'Hotel Pyhätunturi', sid: 'destination_pyha_hotel', note: 'Nel cuore di Pyhä: 46 camere doppie, cinque camere superior e una camera panoramica; colazione, sauna e palestra sono incluse.' },
        { name: 'Pyhä Igloos', propertyQuery: 'Pyhä Igloos', sid: 'destination_pyha_igloos', note: "Camere con un soffitto di vetro simile a un igloo nel centro della stazione sciistica, ognuna con un proprio ingresso dall'esterno." },
        { name: 'Northern Lights Village Pyhä', propertyQuery: 'Northern Lights Village Pyhä', sid: 'destination_pyha_nlv', note: "Alcuni chalet hanno il tetto di vetro proprio sopra il letto; sauna, vasca idromassaggio e transfer dall'aeroporto di Rovaniemi." },
        { name: 'Sunday Morning Resort', propertyQuery: 'Sunday Morning Resort', sid: 'destination_pyha_sunday_morning', note: 'Sulla riva del lago Pyhäjärvi, accanto al parco nazionale; le sue Aamu Suites ospitano da una a quattro persone.' },
        { name: 'Kurula’s Resort', propertyQuery: 'Kurula’s Resort', sid: 'destination_pyha_kurulas', note: "17 suite nell'edificio principale accanto al lago Pyhäjärvi, riscaldate con l'energia geotermica del lago." },
        { name: 'Ski-Inn Kultakero', propertyQuery: 'Ski-Inn Kultakero', sid: 'destination_pyha_kultakero', note: "Camere d'hotel e appartamenti di sette dimensioni diverse, vicino alle piste e al parco nazionale." },
      ],
    },
    {
      title: 'Luosto',
      items: [
        { name: 'Lapland Hotels Luostotunturi', propertyQuery: 'Lapland Hotels Luostotunturi', sid: 'destination_luosto_luostotunturi', note: "Nel villaggio di tronchi di Luosto, accanto al parco nazionale: camere d'hotel, appartamenti e chalet in tronchi, più l'Amethyst Spa." },
        { name: 'Santa’s Hotel Aurora & Igloos', propertyQuery: 'Santa’s Hotel Aurora & Igloos', sid: 'destination_luosto_aurora', note: "Ogni camera d'hotel ha una sauna privata, e i dieci igloo di vetro collegati all'hotel hanno ciascuno un'allerta aurora." },
      ],
    },
  ],
  anchorProperties: [
    { name: 'Tutti gli alloggi di Pyhä', href: HOTEL_SEARCH_FOR('it').pyha, sid: 'destination_pyha_all_search', note: 'Esplori hotel e appartamenti di Pyhä su Trip.com.' },
    { name: 'Tutti gli alloggi di Luosto', href: HOTEL_SEARCH_FOR('it').luosto, sid: 'destination_luosto_all_search', note: 'Esplori hotel e chalet di Luosto su Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: "Dall'aeroporto di Rovaniemi (RVN)", detail: 'Rovaniemi dista circa 115 km da Luosto e, passando per Kemijärvi, circa 130 km da Pyhä.' },
    { mode: 'bus', label: 'Bus per Luosto e Pyhä', detail: "Dall'aeroporto, dalla stazione ferroviaria e dalla stazione degli autobus di Rovaniemi: quattro partenze al giorno in inverno, due in estate." },
    { mode: 'train', label: 'Treno notturno per Kemijärvi', detail: 'Da Helsinki; dalla stazione di Kemijärvi partono bus per Pyhä, a circa 47 km.' },
    { mode: 'car', label: 'Tra i due villaggi', detail: '25 km sulla strada 962, e un bus collega Pyhä e Luosto.' },
  ],
  carRental: {
    href: CARS_FOR('it').fromRovaniemi,
    sid: 'destination_pyha_cars_rvn',
    airport: "Ritiro all'aeroporto di Rovaniemi (RVN)",
    blurb: 'Circa 115 km fino a Luosto · 130 km fino a Pyhä',
  },
  seoTitle: 'Pyhä e Luosto: hotel, igloo di vetro e chalet in Lapponia',
  seoDescription: "Pyhä e Luosto, due villaggi di fjäll a 25 km di distanza nella Lapponia orientale: hotel, igloo di vetro, chalet in tronchi e come arrivare da Rovaniemi.",
}

const nl: DestinationBody = {
  tagline: 'Twee fjälldorpen op 25 km van elkaar in Oost-Lapland, aan de twee uiteinden van het nationaal park Pyhä-Luosto, elk met eigen skipistes.',
  description: `Pyhä en Luosto zijn twee kleine vakantiedorpen aan weg 962, 25 km van elkaar: Pyhä in Pelkosenniemi en Luosto in Sodankylä. Daartussen loopt een 35 kilometer lange keten van fjälls, het overblijfsel van een van de oudste gebergten ter wereld en het zuidelijkste gebied met hoge fjälls in Finland. Sinds 2005 is het beschermd als het nationaal park Pyhä-Luosto, dat is voortgekomen uit het nationaal park Pyhätunturi, opgericht in 1938.

Geen van beide dorpen is een groot vakantieoord. Pyhä heeft 15 pistes en Luosto 10, elk dorp heeft een handvol hotels, en de rest bestaat uit appartementen, blokhutten en kamers met een glazen dak. Rovaniemi ligt ongeveer 115 km van Luosto, en in de winter rijden er vier keer per dag bussen van de luchthaven naar beide dorpen.`,
  facts: [
    { label: 'Tussen de dorpen', value: '25 km, weg 962' },
    { label: 'Hoogste fjäll', value: 'Noitatunturi 540 m' },
    { label: 'Dichtst\u00ADbij\u00ADzijnde luchthaven', value: 'RVN, ~110 km' },
    { label: 'Pistes', value: 'Pyhä 15 · Luosto 10' },
  ],
  highlights: [
    { title: 'De kloof Isokuru en de waterval', body: 'Isokuru, de grootste kloof van het park, is 220 m diep. Een waterval van 17 meter stort in het heldere meertje Pyhänkasteenlampi, dat 12 m diep is; zwemmen in het meertje en het naderen van de waterval zijn verboden.' },
    { title: 'Amethistmijn Lampivaara', body: 'Een van de weinige edelsteenmijnen ter wereld die open zijn voor bezoekers, ongeveer 5 km van Luosto, en elke bezoeker graaft er zelf een amethist op. De winterrondleidingen lopen van 1 november 2026 tot 18 april 2027; vanaf de parkeerplaats Ukko-Luosto kost een rondleiding €78 per volwassene, met het eigen vervoer van de mijn, want privéauto’s zijn er niet toegestaan.' },
    { title: 'Twee skigebieden op één fjällketen', body: 'Pyhä heeft 15 pistes, 9 liften en 280 m hoogteverschil; Luosto heeft 10 pistes en 4 liften. Pyhä mikt op een opening op 20 november 2026, Luosto op 28 november.' },
    { title: 'Noorderlichtalarm in Luosto', body: 'Luosto heeft een eigen noorderlichtsensor met een gratis realtime-alarm, en een camera boven op de fjäll Luosto zendt de hemel de klok rond live uit.' },
    { title: 'Oud bos op Ukko-Luosto', body: 'Op de zuidwestflank van Ukko-Luosto en Lampivaara is het bos nooit gekapt, en de bomen zijn tot 400 jaar oud.' },
    { title: 'De hoogste toppen', body: 'Noitatunturi reikt tot 540 m en Ukko-Luosto tot 514 m: de hoogste toppen van de keten.' },
  ],
  whenToGo: `Pyhä mikt erop zijn pistes op 20 november 2026 te openen en Luosto op 28 november; het seizoen in Pyhä loopt tot begin mei.
Statistisch is de kans op noorderlicht het grootst van half augustus tot half april; het noorderlichtalarm en de camera op de fjäll in Luosto laten weten wanneer u omhoog moet kijken.
De winterrondleidingen in de Amethistmijn lopen van 1 november 2026 tot 18 april 2027, dagelijks van 1 december tot 28 maart (gesloten op 24 december).`,
  howToGet: `Vlieg naar Rovaniemi (RVN). Vanaf de luchthaven rijden bussen naar Luosto en verder naar Pyhä, in de winter vier keer en in de zomer twee keer per dag.
Per trein neemt u de nachttrein van Helsinki naar Kemijärvi; vanaf het station van Kemijärvi rijden bussen naar Pyhä, ongeveer 47 km verderop.
Met de auto is het van Rovaniemi naar Luosto ongeveer 115 km (weg 4 naar het noorden, dan bij Torvinen weg 962) en van Rovaniemi via Kemijärvi naar Pyhä ongeveer 130 km. Tussen de twee dorpen rijdt ook een bus.`,
  stayTypes: [
    'Kamers en iglo’s met een glazen dak in beide dorpen, om vanuit bed naar de hemel te kijken.',
    'Fjällhotels in de dorpskernen, dicht bij de pistes en de paden van het nationaal park.',
    'Blokhutten en appartementen in het blokhuttendorp van Luosto en rond de pistes van Pyhä.',
    'Resorts aan het meer Pyhäjärvi, aan de voet van de fjäll Pyhä.',
  ],
  siblings: [
    { name: 'Ruka', href: '/destinations/ruka', blurb: 'Een autovrij skidorp in Kuusamo, net ten zuiden van Lapland.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'De luchthaven voor Pyhä en Luosto, op ongeveer 115 km.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Fjälldorp verder naar het noorden, bij het nationaal park Urho Kekkonen.' },
  ],
  anchorGroups: [
    {
      title: 'Pyhä',
      items: [
        { name: 'Hotel Pyhätunturi', propertyQuery: 'Hotel Pyhätunturi', sid: 'destination_pyha_hotel', note: 'In het hart van Pyhä: 46 tweepersoonskamers, vijf superiorkamers en één panoramakamer; ontbijt, sauna en fitnessruimte zijn inbegrepen.' },
        { name: 'Pyhä Igloos', propertyQuery: 'Pyhä Igloos', sid: 'destination_pyha_igloos', note: 'Kamers met een glazen plafond in iglovorm midden in het skigebied, elk met een eigen ingang van buitenaf.' },
        { name: 'Northern Lights Village Pyhä', propertyQuery: 'Northern Lights Village Pyhä', sid: 'destination_pyha_nlv', note: 'Een deel van de hutten heeft een glazen dak recht boven het bed; sauna, hottub en transfers vanaf de luchthaven van Rovaniemi.' },
        { name: 'Sunday Morning Resort', propertyQuery: 'Sunday Morning Resort', sid: 'destination_pyha_sunday_morning', note: 'Aan het meer Pyhäjärvi, naast het nationaal park; in de Aamu Suites slapen één tot vier personen.' },
        { name: 'Kurula’s Resort', propertyQuery: 'Kurula’s Resort', sid: 'destination_pyha_kurulas', note: '17 suites in het hoofdgebouw aan het meer Pyhäjärvi, verwarmd met geothermische energie uit het meer.' },
        { name: 'Ski-Inn Kultakero', propertyQuery: 'Ski-Inn Kultakero', sid: 'destination_pyha_kultakero', note: 'Hotelkamers en appartementen in zeven formaten, dicht bij de pistes en het nationaal park.' },
      ],
    },
    {
      title: 'Luosto',
      items: [
        { name: 'Lapland Hotels Luostotunturi', propertyQuery: 'Lapland Hotels Luostotunturi', sid: 'destination_luosto_luostotunturi', note: 'In het blokhuttendorp van Luosto, naast het nationaal park: hotelkamers, appartementen en blokhutten, en de Amethyst Spa.' },
        { name: 'Santa’s Hotel Aurora & Igloos', propertyQuery: 'Santa’s Hotel Aurora & Igloos', sid: 'destination_luosto_aurora', note: 'Elke hotelkamer heeft een eigen sauna, en de tien glazen iglo’s die met het hotel verbonden zijn, hebben elk een noorderlichtalarm.' },
      ],
    },
  ],
  anchorProperties: [
    { name: 'Alle accommodaties in Pyhä', href: HOTEL_SEARCH_FOR('nl').pyha, sid: 'destination_pyha_all_search', note: 'Bekijk hotels en appartementen in Pyhä op Trip.com.' },
    { name: 'Alle accommodaties in Luosto', href: HOTEL_SEARCH_FOR('nl').luosto, sid: 'destination_luosto_all_search', note: 'Bekijk hotels en huisjes in Luosto op Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Vanaf luchthaven Rovaniemi (RVN)', detail: 'Rovaniemi ligt ongeveer 115 km van Luosto en, via Kemijärvi, ongeveer 130 km van Pyhä.' },
    { mode: 'bus', label: 'Bus naar Luosto en Pyhä', detail: 'Vanaf de luchthaven, het treinstation en het busstation van Rovaniemi: in de winter vier keer per dag, in de zomer twee keer.' },
    { mode: 'train', label: 'Nachttrein naar Kemijärvi', detail: 'Vanuit Helsinki; vanaf het station van Kemijärvi rijden bussen naar Pyhä, ongeveer 47 km.' },
    { mode: 'car', label: 'Tussen de dorpen', detail: '25 km via weg 962, en tussen Pyhä en Luosto rijdt een bus.' },
  ],
  carRental: {
    href: CARS_FOR('nl').fromRovaniemi,
    sid: 'destination_pyha_cars_rvn',
    airport: 'Ophalen op luchthaven Rovaniemi (RVN)',
    blurb: 'Ongeveer 115 km naar Luosto · 130 km naar Pyhä',
  },
  seoTitle: 'Luosto en Pyhä, Finland: hotels, iglo’s en blokhutten',
  seoDescription: 'Hotels, glazen iglo’s en blokhutten in Luosto en Pyhä (Pyhätunturi), fjälldorpen op 25 km van elkaar in Oost-Lapland, en de reis vanaf luchthaven Rovaniemi.',
}

const zhCN: DestinationBody = {
  tagline: '拉普蘭東部的兩座山村，相距25公里，分別位於皮哈-盧奧斯托國家公園的兩端，各有自己的雪道。',
  description: `皮哈和盧奧斯托是962號公路沿線的兩座小型度假村，相距25公里：皮哈位於佩爾科森涅米，盧奧斯托位於索丹屈萊。兩村之間綿延著一條35公里長的山嶺，是世界上最古老的山脈之一留下的遺跡，也是芬蘭最南端的大型山嶺地帶。這片山嶺自2005年起受到保護，成為皮哈-盧奧斯托國家公園，以1938年成立的皮哈通圖里國家公園為基礎。

兩座村莊都不是大型度假區。皮哈有15條雪道，盧奧斯托有10條；每個村莊只有少數幾家飯店，其餘是公寓、原木小屋和玻璃屋頂客房。羅瓦涅米距盧奧斯托約115公里，冬季每天有四班巴士從機場開往兩座村莊。`,
  facts: [
    { label: '兩村距離', value: '25公里，962號公路' },
    { label: '最高峰', value: 'Noitatunturi，540公尺' },
    { label: '最近機場', value: 'RVN，約110公里' },
    { label: '雪道', value: '皮哈15條 · 盧奧斯托10條' },
  ],
  highlights: [
    { title: 'Isokuru峽谷與瀑布', body: '公園內最大的峽谷Isokuru深220公尺。一道17公尺高的瀑布落入清澈的Pyhänkasteenlampi池，池深12公尺；禁止在池中游泳，也禁止靠近瀑布。' },
    { title: 'Lampivaara紫水晶礦', body: '世界上少數開放參觀的寶石礦場之一，距盧奧斯托約5公里，每位遊客都能親手挖一顆屬於自己的紫水晶。冬季導覽從2026年11月1日到2027年4月18日；從Ukko-Luosto停車場出發，成人每人78歐元，搭乘礦場自己的接駁車前往，因為私人汽車不得進入。' },
    { title: '同一條山嶺上的兩座滑雪場', body: '皮哈有15條雪道、9座纜車，垂直落差280公尺；盧奧斯托有10條雪道和4座纜車。皮哈的開放目標是2026年11月20日，盧奧斯托是11月28日。' },
    { title: '盧奧斯托的極光警報', body: '盧奧斯托有自己的極光感測器，提供免費的即時警報；盧奧斯托山頂的攝影機也全天候直播天空。' },
    { title: 'Ukko-Luosto的老森林', body: 'Ukko-Luosto和Lampivaara西南坡的森林從未遭到砍伐，樹齡最高可達400年。' },
    { title: '最高的山頂', body: 'Noitatunturi海拔540公尺，Ukko-Luosto海拔514公尺，是這條山嶺上最高的兩座山頭。' },
  ],
  whenToGo: `皮哈的雪道開放目標是2026年11月20日，盧奧斯托是11月28日；皮哈的雪季持續到5月初。
從統計來看，8月中旬到4月中旬最有機會看到極光；盧奧斯托的極光警報和山頂攝影機會告訴您什麼時候該抬頭看。
紫水晶礦的冬季導覽從2026年11月1日到2027年4月18日，12月1日至3月28日每天開放（12月24日休息）。`,
  howToGet: `搭飛機到羅瓦涅米（RVN）。冬季每天有四班、夏季每天有兩班巴士從機場開往盧奧斯托，再繼續開到皮哈。
搭火車的話，從赫爾辛基搭夜車到凱米耶爾維，再從凱米耶爾維車站搭巴士到約47公里外的皮哈。
開車的話，羅瓦涅米到盧奧斯托約115公里（走4號公路往北，在Torvinen轉962號公路），羅瓦涅米經凱米耶爾維到皮哈約130公里。兩座村莊之間也有巴士往返。`,
  stayTypes: [
    '兩座村莊都有玻璃屋頂的客房和玻璃屋，躺在床上就能看天空。',
    '村中心的山區飯店，靠近雪道和國家公園的步道。',
    '盧奧斯托原木村裡及皮哈雪道周邊的原木小屋與公寓。',
    '皮哈山腳下、Pyhäjärvi湖畔的度假村。',
  ],
  siblings: [
    { name: 'Ruka', href: '/destinations/ruka', blurb: '庫薩莫的無車滑雪村，位在拉普蘭邊界以南不遠處。' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: '前往皮哈與盧奧斯托的機場，距離約115公里。' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: '更北邊的山村，緊鄰烏爾霍·凱科寧國家公園。' },
  ],
  anchorGroups: [
    {
      title: '皮哈',
      items: [
        { name: 'Hotel Pyhätunturi', propertyQuery: 'Hotel Pyhätunturi', sid: 'destination_pyha_hotel', note: '位於皮哈中心：46間雙人房、五間高級客房和一間全景客房；含早餐、桑拿與健身房。' },
        { name: 'Pyhä Igloos', propertyQuery: 'Pyhä Igloos', sid: 'destination_pyha_igloos', note: '位於滑雪場中心，客房有冰屋造型的玻璃天花板，每間都有從戶外進出的獨立入口。' },
        { name: 'Northern Lights Village Pyhä', propertyQuery: 'Northern Lights Village Pyhä', sid: 'destination_pyha_nlv', note: '部分小屋在床的正上方有玻璃屋頂；提供桑拿、熱水浴缸，以及羅瓦涅米機場接送。' },
        { name: 'Sunday Morning Resort', propertyQuery: 'Sunday Morning Resort', sid: 'destination_pyha_sunday_morning', note: '位於國家公園旁的Pyhäjärvi湖畔；Aamu Suites可住一到四人。' },
        { name: 'Kurula’s Resort', propertyQuery: 'Kurula’s Resort', sid: 'destination_pyha_kurulas', note: '主樓有17間套房，位於Pyhäjärvi湖畔，利用湖水的地熱能供暖。' },
        { name: 'Ski-Inn Kultakero', propertyQuery: 'Ski-Inn Kultakero', sid: 'destination_pyha_kultakero', note: '飯店客房與公寓共有七種大小，靠近雪道和國家公園。' },
      ],
    },
    {
      title: '盧奧斯托',
      items: [
        { name: 'Lapland Hotels Luostotunturi', propertyQuery: 'Lapland Hotels Luostotunturi', sid: 'destination_luosto_luostotunturi', note: '位於國家公園旁的盧奧斯托原木村：有飯店客房、公寓和原木小屋，以及Amethyst Spa。' },
        { name: 'Santa’s Hotel Aurora & Igloos', propertyQuery: 'Santa’s Hotel Aurora & Igloos', sid: 'destination_luosto_aurora', note: '每間飯店客房都有私人桑拿；與飯店相連的十間玻璃屋各配有極光警報。' },
      ],
    },
  ],
  anchorProperties: [
    { name: '皮哈全部住宿', href: HOTEL_SEARCH_FOR('zh-CN').pyha, sid: 'destination_pyha_all_search', note: '在Trip.com瀏覽皮哈的飯店與公寓。' },
    { name: '盧奧斯托全部住宿', href: HOTEL_SEARCH_FOR('zh-CN').luosto, sid: 'destination_luosto_all_search', note: '在Trip.com瀏覽盧奧斯托的飯店與小屋。' },
  ],
  transport: [
    { mode: 'plane', label: '從羅瓦涅米機場（RVN）出發', detail: '羅瓦涅米距盧奧斯托約115公里，經凱米耶爾維到皮哈約130公里。' },
    { mode: 'bus', label: '巴士到盧奧斯托與皮哈', detail: '從羅瓦涅米機場、火車站和巴士站發車：冬季每天四班，夏季兩班。' },
    { mode: 'train', label: '夜車到凱米耶爾維', detail: '從赫爾辛基出發；凱米耶爾維車站有巴士開往約47公里外的皮哈。' },
    { mode: 'car', label: '兩村之間', detail: '走962號公路25公里，皮哈和盧奧斯托之間也有巴士往返。' },
  ],
  carRental: {
    href: CARS_FOR('zh-CN').fromRovaniemi,
    sid: 'destination_pyha_cars_rvn',
    airport: '羅瓦涅米機場（RVN）取車',
    blurb: '到盧奧斯托約115公里 · 到皮哈130公里',
  },
  seoTitle: '皮哈與盧奧斯托住宿：芬蘭拉普蘭兩座山村的飯店與玻璃屋',
  seoDescription: '皮哈與盧奧斯托住宿指南：芬蘭拉普蘭東部兩座相距25公里的山村，介紹當地的飯店、玻璃屋與原木小屋，以及從羅瓦涅米機場前往的交通方式。',
}

export default function PyhaLuosto() {
  return (
    <DestinationPage
      slug="pyha-luosto"
      name="Pyhä–Luosto"
      searchName="Pyhätunturi"
      heroImage="/images/pyha-luosto-hero.webp"
      heroSrcSet="/images/pyha-luosto-hero-800.webp 800w, /images/pyha-luosto-hero-1200.webp 1200w, /images/pyha-luosto-hero.webp 1920w, /images/pyha-luosto-hero-2560.webp 2560w"
      heroPhotoId="pyha-luosto-hero"
      ogImage="/og/destinations-pyha-luosto.jpg"
      seoKeywords={['pyha luosto accommodation', 'luosto hotel', 'pyhätunturi majoitus', 'luosto majoitus', 'pyha ski resort', 'pyha-luosto national park', 'lapland hotels luostotunturi', 'amethyst mine luosto']}
      body={{ en, fi, de, ja, es, 'pt-BR': ptBR, 'zh-CN': zhCN, ko, fr, it, nl, sv }}
    />
  )
}
