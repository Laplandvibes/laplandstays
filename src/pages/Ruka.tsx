import DestinationPage, { type DestinationBody } from '../components/DestinationPage'
import { HOTEL_SEARCH_FOR, CARS_FOR } from '../lib/affiliate'
import type { Lang } from '../i18n/useLang'

/**
 * Ruka (Kuusamo), tehtävä E 22.10.2026. Kysyntä mitattu (OpenSEO 22.10.): fi "rukan majoitus" 8 100/kk,
 * en "ruka finland" 4 400. Faktat: side-session-notes/…/ruka-pyhaluosto-faktat-20261022.md (ruka.fi, luontoon.fi,
 * Finavia, hotellien omat sivut, luettu 22.10.2026). Ruka on Kuusamossa, Pohjois-Pohjanmaalla, EI Lapissa (verkoston
 * sääntö): sivu näyttää "Kuusamo, Suomi" Suomen Lapin sijaan (region). en = lähde, fi kirjoitettu suomeksi, muut
 * käännetty en:stä ja natiivilukijan tarkistamia.
 */
const en: DestinationBody = {
  tagline: 'A car-free village at the foot of 41 slopes in Kuusamo, just south of Lapland, with Oulanka National Park 30 km away.',
  description: `Ruka is a fell and ski resort in Kuusamo, in the Koillismaa region of North Ostrobothnia. It lies just outside administrative Lapland, but the snow is the same: the ground is white for around 200 days a year, from the end of October to the middle of May.

The resort has 41 slopes and 22 lifts, and this season runs from 2 October 2026 to 2 May 2027. Ruka village sits at the foot of the slopes: a car-free centre with over 1,000 visitor beds, 15 restaurants and an underground car park. Most of the area's accommodation is holiday apartments and cottages rather than hotels: Kuusamo has about 7,500 of them.`,
  facts: [
    { label: 'Slopes and lifts', value: '41 · 22' },
    { label: 'Top of the fell', value: '492 m' },
    { label: 'Nearest airport', value: 'KAO, 30 min' },
    { label: 'Ski season 2026–27', value: '2 Oct – 2 May' },
  ],
  highlights: [
    { title: 'A car-free village by the slopes', body: 'Cars stay in an underground car park with room for 320. The SkiBus, the airport bus and the Karhunkierros trail bus stop at the turning circle on the southern edge of the village, and the Village-2-Valley gondola runs from the village to Ruka Valley.' },
    { title: 'Karhunkierros, 81 km', body: 'Finland’s most popular hiking trail starts and ends at Saarua in East Ruka, where parking is free. It runs through Oulanka National Park, and the hiking season lasts from the end of May to October; in winter the trail is not safe to use.' },
    { title: 'Oulanka National Park', body: 'Founded in 1956, the park covers 286 km² and lies 30 km from Ruka. With 187,400 visits in 2024, it is the busiest national park around Kuusamo.' },
    { title: 'Riisitunturi and crown snow', body: 'In Riisitunturi National Park, 30 km from Ruka, snow and rime start building up on the spruces in October at the latest. An open wilderness hut stands on top of the fell; there is no public transport to the park.' },
    { title: 'Where to watch the northern lights', body: 'The resort recommends Juhannuskallio, which you can reach by car, and the Valtavaara and Konttainen area. From August to November, lake and pond shores around Kuusamo can show the aurora twice: in the sky and on the water.' },
    { title: 'Summer: bike park and midnight sun', body: 'Four lifts serve Ruka Bike Park, and the area has 300 km of hiking routes and 180 km of mountain-bike routes. In Kuusamo the midnight sun lasts from mid-June to the end of the month.' },
  ],
  whenToGo: `The ski season runs from 2 October 2026 to 2 May 2027, with night skiing on Fridays from 7 to 11 pm between December and mid-April.
The northern lights need dark nights, so come between autumn and early spring; from August to November, the open water of the lakes can mirror them.
The Karhunkierros hiking season runs from the end of May to October; the busiest months are July and, with its autumn colours, September.`,
  howToGet: `Fly to Kuusamo (KAO): Finnair flies from Helsinki all year round, a flight of about an hour, and in winter 2026–27 there are 9 direct flights from 8 European cities. Ruka is a 30-minute drive from the airport.
The airport bus waits for every scheduled flight. Book a seat in advance, no later than 24 hours before; without a booking you can board only if there is space.
By train, take the night train from Helsinki to Kemijärvi and the connecting bus to Ruka. By car, it is a little over 800 km from Helsinki on road 5.`,
  stayTypes: [
    'Apartments in the car-free village, steps from the lifts; every Ski-Inn RukaVillage apartment has a sauna and a drying cabinet for ski gear.',
    'Hotels on the fell, from a ski-in, ski-out mountain hotel to rooms with a view of Juhannuskallio.',
    'Holiday cottages around the fell and by Kuusamo’s lakes.',
    'Away from the slopes: a lakeside manor, and a water-park and spa hotel near Kuusamo town, 22 km away.',
  ],
  siblings: [
    { name: 'Pyhä–Luosto', href: '/destinations/pyha-luosto', blurb: 'Two fell villages in Eastern Lapland, 25 km apart.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'Lapland’s capital and its main airport.' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'A ski village in western Lapland, near Kittilä Airport.' },
  ],
  anchorGroups: [
    {
      title: 'Ruka village and the slopes',
      items: [
        { name: 'Scandic Rukahovi', propertyQuery: 'Scandic Rukahovi', sid: 'destination_ruka_rukahovi', note: 'A mountain hotel in the village with ski-in, ski-out access and a nightclub.' },
        { name: 'Ski-Inn RukaVillage', propertyQuery: 'Ski-Inn RukaVillage', sid: 'destination_ruka_rukavillage', note: 'Apartments in the middle of the village, all with a sauna and a drying cabinet, some with a jacuzzi.' },
        { name: 'Ruka Ski Chalets', propertyQuery: 'Ruka Ski Chalets', sid: 'destination_ruka_ski_chalets', note: 'Within walking distance of the lifts; the larger units (46–81.5 m²) have a private sauna.' },
        { name: 'Hotel Royal Ruka', propertyQuery: 'Hotel Royal Ruka', sid: 'destination_ruka_royal', note: 'Some rooms look out over Juhannuskallio; the restaurant serves reindeer and fish from Lake Kitka.' },
        { name: 'Ski-Inn RukaValley', propertyQuery: 'Ski-Inn RukaValley', sid: 'destination_ruka_rukavalley', note: 'Hotel rooms and apartments in Ruka Valley, on the Saarua side of the fell.' },
      ],
    },
    {
      title: 'Around Kuusamo',
      items: [
        { name: 'House of Northern Senses', propertyQuery: 'House of Northern Senses', sid: 'destination_ruka_northern_senses', note: 'A restored lakeside manor with eight rooms and suites for up to 22 guests, a smoke sauna and a lakeside sauna.' },
        { name: 'Holiday Club Kuusamon Tropiikki', propertyQuery: 'Holiday Club Kuusamon Tropiikki', sid: 'destination_ruka_tropiikki', note: 'Near Kuusamo town, with a water park and spa, 22 km from the slopes and 6.5 km from the airport.' },
      ],
    },
  ],
  anchorProperties: [
    { name: 'All Ruka accommodation', href: HOTEL_SEARCH_FOR('en').ruka, sid: 'destination_ruka_all_search', note: 'Browse Ruka hotels and apartments on Sembo.' },
  ],
  transport: [
    { mode: 'plane', label: 'From Kuusamo Airport (KAO)', detail: 'Finnair from Helsinki all year, about 1 h; in winter 2026–27 also 9 direct flights from 8 European cities. 30 min by car to Ruka.' },
    { mode: 'bus', label: 'Airport bus to Ruka village', detail: 'Meets every scheduled flight. Book a seat in advance, no later than 24 h before.' },
    { mode: 'train', label: 'Night train to Kemijärvi', detail: 'Daily from Helsinki, with a bus connection to Ruka that waits up to 60 min for a late train.' },
    { mode: 'car', label: 'By car from Helsinki', detail: 'A little over 800 km on road 5. In the village, park in the underground car park.' },
  ],
  carRental: {
    href: CARS_FOR('en').fromKuusamo,
    sid: 'destination_ruka_cars_kao',
    airport: 'Pickup at Kuusamo Airport (KAO)',
    blurb: '30 min to Ruka · the airport for Ruka and Oulanka',
  },
  seoTitle: 'Where to Stay in Ruka, Finland: Hotels, Apartments, Cabins',
  seoDescription: 'Ruka accommodation by the slopes and around Kuusamo: apartments in the car-free village, a ski-in hotel, a lakeside manor, cottages, and how to get there.',
}

const fi: DestinationBody = {
  tagline: 'Autoton kylä 41 rinteen juurella Kuusamossa, aivan Lapin rajan eteläpuolella. Oulangan kansallispuistoon on 30 kilometriä.',
  description: `Ruka on tunturi- ja hiihtokeskus Kuusamossa, Koillismaalla Pohjois-Pohjanmaalla. Se on aivan Lapin maakunnan ulkopuolella, mutta lunta riittää yhtä lailla: maa on lumen peitossa noin 200 päivää vuodessa, lokakuun lopusta toukokuun puoliväliin.

Rinteitä on 41 ja hissejä 22, ja tämän talven kausi kestää 2.10.2026–2.5.2027. Rukan kylä on rinteiden juurella: autoton keskusta, jossa on yli 1 000 vuodepaikkaa matkailijoille, 15 ravintolaa ja maanalainen pysäköintihalli. Suurin osa alueen majoituksesta on hotellien sijaan lomahuoneistoja ja mökkejä, joita Kuusamossa on noin 7 500.`,
  facts: [
    { label: 'Rinteet ja hissit', value: '41 · 22' },
    { label: 'Tunturin laki', value: '492 m' },
    { label: 'Lähin lentoasema', value: 'KAO, 30 min' },
    { label: 'Hiihtokausi 2026–27', value: '2.10.–2.5.' },
  ],
  highlights: [
    { title: 'Autoton kylä rinteiden juurella', body: 'Autot jäävät 320 paikan maanalaiseen pysäköintihalliin. Skibussi, lentokenttäbussi ja Karhunkierroksen bussi pysähtyvät kylän eteläreunan kääntöpaikalla, ja Village-2-Valley-gondoli kulkee kylästä Ruka Valleyyn.' },
    { title: 'Karhunkierros, 81 km', body: 'Suomen suosituimman vaellusreitin lähtö- ja päätepiste on Itä-Rukan Saaruassa, jossa pysäköinti on maksutonta. Reitti kulkee Oulangan kansallispuiston läpi, ja sillä vaelletaan toukokuun lopusta lokakuuhun; talvella reitti ei ole turvallinen.' },
    { title: 'Oulangan kansallispuisto', body: 'Perustettu vuonna 1956, pinta-ala 286 km², Rukalta 30 km. Vuonna 2024 puistossa käytiin 187 400 kertaa, enemmän kuin missään muussa Kuusamon seudun kansallispuistossa.' },
    { title: 'Riisitunturi ja tykkylumi', body: 'Riisitunturin kansallispuistossa, 30 km Rukalta, kuusiin alkaa kertyä tykkylunta viimeistään lokakuussa. Tunturin laella on autiotupa; puistoon ei kulje julkista liikennettä.' },
    { title: 'Revontulten katselupaikat', body: 'Ruka suosittelee Juhannuskalliota, jonne pääsee autolla, sekä Valtavaaran ja Konttaisen aluetta. Elo–marraskuussa revontulet voi nähdä Kuusamon järvien ja lampien rannoilla kahteen kertaan: taivaalla ja vedenpinnassa.' },
    { title: 'Kesä: pyöräpuisto ja yötön yö', body: 'Ruka Bike Parkiin pääsee neljällä hissillä, ja alueella on 300 km retkeilyreittejä ja 180 km maastopyöräreittejä. Kuusamossa yötön yö kestää kesäkuun puolivälistä kuun loppuun.' },
  ],
  whenToGo: `Hiihtokausi kestää 2.10.2026–2.5.2027. Iltalaskua on perjantaisin klo 19–23 joulukuusta huhtikuun puoliväliin.
Revontulia voi nähdä, kun yöt ovat pimeitä, eli syksystä alkukevääseen; elo–marraskuussa ne voivat heijastua järvien sulasta vedestä.
Karhunkierroksella vaelletaan toukokuun lopusta lokakuuhun; vilkkainta on heinäkuussa ja ruska-aikaan syyskuussa.`,
  howToGet: `Lennä Kuusamoon (KAO): Finnair lentää Helsingistä ympäri vuoden noin tunnissa, ja talvella 2026–27 Kuusamoon on lisäksi 9 suoraa lentoa 8 Euroopan kaupungista. Lentoasemalta Rukalle on 30 minuutin ajomatka.
Lentokenttäbussi odottaa jokaista aikataulun mukaista lentoa. Varaa paikka etukäteen, viimeistään vuorokautta ennen matkaa; ilman varausta pääset kyytiin vain, jos tilaa on.
Yöjuna kulkee Helsingistä Kemijärvelle, josta on bussiyhteys Rukalle. Autolla Helsingistä on vähän yli 800 km valtatietä 5 pitkin.`,
  stayTypes: [
    'Huoneistot autottomassa kylässä hissien vieressä; jokaisessa Ski-Inn RukaVillage -huoneistossa on sauna ja kuivauskaappi.',
    'Hotellit tunturilla, esimerkiksi vuoristohotelli, josta pääsee suksilla suoraan rinteeseen, ja hotelli, jonka huoneista näkyy Juhannuskallio.',
    'Lomamökit tunturin ympärillä ja Kuusamon järvien rannoilla.',
    'Kauempana rinteistä: kartano järven rannalla sekä vesipuisto- ja kylpylähotelli Kuusamon keskustan lähellä, 22 km:n päässä.',
  ],
  siblings: [
    { name: 'Pyhä–Luosto', href: '/destinations/pyha-luosto', blurb: 'Kaksi tunturikylää Itä-Lapissa, 25 km:n päässä toisistaan.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'Lapin pääkaupunki ja maakunnan päälentoasema.' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'Hiihtokylä Länsi-Lapissa, Kittilän lentoaseman lähellä.' },
  ],
  anchorGroups: [
    {
      title: 'Rukan kylä ja rinteet',
      items: [
        { name: 'Scandic Rukahovi', propertyQuery: 'Scandic Rukahovi', sid: 'destination_ruka_rukahovi', note: 'Vuoristohotelli kylässä: ovelta pääsee suksilla suoraan rinteeseen, ja talossa on yökerho.' },
        { name: 'Ski-Inn RukaVillage', propertyQuery: 'Ski-Inn RukaVillage', sid: 'destination_ruka_rukavillage', note: 'Huoneistoja keskellä kylää, kaikissa sauna ja kuivauskaappi, osassa poreallas.' },
        { name: 'Ruka Ski Chalets', propertyQuery: 'Ruka Ski Chalets', sid: 'destination_ruka_ski_chalets', note: 'Kävelymatkan päässä hisseistä; isommissa (46–81,5 m²) on oma sauna.' },
        { name: 'Hotel Royal Ruka', propertyQuery: 'Hotel Royal Ruka', sid: 'destination_ruka_royal', note: 'Osasta huoneista näkyy Juhannuskallio; ravintolassa tarjoillaan Kitkajärven kalaa ja poroa.' },
        { name: 'Ski-Inn RukaValley', propertyQuery: 'Ski-Inn RukaValley', sid: 'destination_ruka_rukavalley', note: 'Hotellihuoneita ja huoneistoja Ruka Valleyssa, tunturin Saaruan puolella.' },
      ],
    },
    {
      title: 'Kuusamon seutu',
      items: [
        { name: 'House of Northern Senses', propertyQuery: 'House of Northern Senses', sid: 'destination_ruka_northern_senses', note: 'Kunnostettu kartano järven rannalla: kahdeksan huonetta ja sviittiä enintään 22 vieraalle, savusauna ja rantasauna.' },
        { name: 'Holiday Club Kuusamon Tropiikki', propertyQuery: 'Holiday Club Kuusamon Tropiikki', sid: 'destination_ruka_tropiikki', note: 'Kuusamon keskustan lähellä: vesipuisto ja kylpylä. Rinteille 22 km ja lentoasemalle 6,5 km.' },
      ],
    },
  ],
  anchorProperties: [
    { name: 'Kaikki Rukan majoitukset', href: HOTEL_SEARCH_FOR('fi').ruka, sid: 'destination_ruka_all_search', note: 'Selaa Rukan hotelleja ja huoneistoja Sembossa.' },
  ],
  transport: [
    { mode: 'plane', label: 'Kuusamon lentoasemalta (KAO)', detail: 'Finnair Helsingistä ympäri vuoden, noin 1 h; talvella 2026–27 lisäksi 9 suoraa lentoa 8 Euroopan kaupungista. Autolla Rukalle 30 min.' },
    { mode: 'bus', label: 'Lentokenttäbussi Rukan kylään', detail: 'Odottaa jokaista aikataulun mukaista lentoa. Varaa paikka etukäteen, viimeistään 24 h ennen.' },
    { mode: 'train', label: 'Yöjuna Kemijärvelle', detail: 'Päivittäin Helsingistä. Rukalle jatkava bussi odottaa myöhässä olevaa junaa enintään 60 min.' },
    { mode: 'car', label: 'Autolla Helsingistä', detail: 'Vähän yli 800 km valtatietä 5. Kylässä auto jää maanalaiseen pysäköintihalliin.' },
  ],
  carRental: {
    href: CARS_FOR('fi').fromKuusamo,
    sid: 'destination_ruka_cars_kao',
    airport: 'Nouto Kuusamon lentoasemalta (KAO)',
    blurb: 'Rukalle 30 min · Rukan ja Oulangan lentoasema',
  },
  seoTitle: 'Rukan majoitus: hotellit, huoneistot ja mökit',
  seoDescription: 'Rukan majoitus rinteiden vierestä ja Kuusamon seudulta: huoneistot autottomassa kylässä, rinnehotelli, järvenrantakartano ja mökit sekä kulkuyhteydet perille.',
}

const de: DestinationBody = {
  tagline: 'Ein autofreies Dorf am Fuß von 41 Pisten in Kuusamo, knapp südlich von Lappland, 30 km vom Oulanka-Nationalpark entfernt.',
  description: `Ruka ist ein Fjäll- und Skiresort in Kuusamo, in der Region Koillismaa in Nordösterbotten. Der Ort liegt knapp außerhalb des Verwaltungsgebiets Lappland, aber der Schnee ist derselbe: Rund 200 Tage im Jahr ist der Boden weiß, von Ende Oktober bis Mitte Mai.

Das Skigebiet hat 41 Pisten und 22 Lifte, und diese Saison läuft vom 2. Oktober 2026 bis zum 2. Mai 2027. Das Dorf Ruka liegt am Fuß der Pisten: ein autofreies Zentrum mit über 1.000 Gästebetten, 15 Restaurants und einer Tiefgarage. Der Großteil der Unterkünfte in der Gegend besteht aus Ferienwohnungen und Ferienhäusern, nicht aus Hotels: Kuusamo hat davon etwa 7.500.`,
  facts: [
    { label: 'Pisten und Lifte', value: '41 · 22' },
    { label: 'Gipfelhöhe', value: '492 m' },
    { label: 'Nächster Flughafen', value: 'KAO, 30 Min.' },
    { label: 'Skisaison 2026/27', value: '2. Okt. – 2. Mai' },
  ],
  highlights: [
    { title: 'Ein autofreies Dorf an den Pisten', body: 'Die Autos bleiben in der Tiefgarage mit 320 Stellplätzen. Der SkiBus, der Flughafenbus und der Wanderbus halten an der Wendeschleife am Südrand des Dorfes, und die Gondelbahn Village-2-Valley fährt vom Dorf ins Ruka Valley.' },
    { title: 'Karhunkierros, 81 km', body: 'Der beliebteste Wanderweg Finnlands beginnt und endet in Saarua in Ost-Ruka, wo Sie kostenlos parken. Er führt durch den Oulanka-Nationalpark und wird von Ende Mai bis Oktober begangen; im Winter ist der Weg nicht sicher begehbar.' },
    { title: 'Oulanka-Nationalpark', body: 'Gegründet 1956, 286 km² groß und 30 km von Ruka entfernt. Mit 187.400 Besuchen im Jahr 2024 ist er der meistbesuchte der Nationalparks rund um Kuusamo.' },
    { title: 'Riisitunturi und der Schnee in den Baumkronen', body: 'Im Riisitunturi-Nationalpark, 30 km von Ruka, sammeln sich spätestens ab Oktober Schnee und Raureif auf den Fichten. Auf dem Gipfel des Fjälls steht eine offene Wildnishütte; zum Park fahren keine öffentlichen Verkehrsmittel.' },
    { title: 'Wo Sie das Polarlicht beobachten', body: 'Ruka selbst nennt den Juhannuskallio, den Sie mit dem Auto erreichen, sowie das Gebiet um Valtavaara und Konttainen. Von August bis November kann das Polarlicht an See- und Teichufern rund um Kuusamo zweimal zu sehen sein: am Himmel und auf dem Wasser.' },
    { title: 'Sommer: Bikepark und Mitternachtssonne', body: 'Vier Lifte bedienen den Ruka Bike Park, und in der Gegend gibt es 300 km Wanderwege und 180 km Mountainbike-Strecken. In Kuusamo dauert die Mitternachtssonne von Mitte Juni bis Monatsende.' },
  ],
  whenToGo: `Die Skisaison läuft vom 2. Oktober 2026 bis zum 2. Mai 2027; von Dezember bis Mitte April gibt es freitags Nachtskifahren von 19 bis 23 Uhr.
Polarlichter brauchen dunkle Nächte, also Herbst bis Vorfrühling; von August bis November können sie sich an Seeufern im offenen Wasser spiegeln.
Auf dem Karhunkierros wird von Ende Mai bis Oktober gewandert; Juli und September (mit Herbstfärbung) sind die meistbesuchten Monate.`,
  howToGet: `Fliegen Sie nach Kuusamo (KAO): Finnair fliegt ganzjährig ab Helsinki (Flugzeit etwa eine Stunde), und im Winter 2026/27 gibt es 9 Direktflüge aus 8 europäischen Städten. Vom Flughafen nach Ruka sind es 30 Minuten mit dem Auto.
Der Flughafenbus wartet auf jeden Linienflug. Reservieren Sie einen Platz im Voraus, spätestens 24 Stunden vorher; ohne Reservierung fahren Sie nur mit, wenn Platz frei ist.
Mit der Bahn nehmen Sie den Nachtzug von Helsinki nach Kemijärvi und den Anschlussbus nach Ruka. Mit dem Auto sind es ab Helsinki etwas über 800 km auf der Staatsstraße 5.`,
  stayTypes: [
    'Apartments im autofreien Dorf, wenige Schritte von den Liften; jedes Apartment im Ski-Inn RukaVillage hat eine Sauna und einen Trockenschrank für die Skiausrüstung.',
    'Hotels am Fjäll, vom Berghotel mit Ski-in/Ski-out bis zu Zimmern mit Blick auf den Juhannuskallio.',
    'Ferienhäuser rund um das Fjäll und an den Seen von Kuusamo.',
    'Abseits der Pisten: ein Gutshaus am See sowie ein Hotel mit Wasserpark und Spa nahe der Stadt Kuusamo, 22 km entfernt.',
  ],
  siblings: [
    { name: 'Pyhä–Luosto', href: '/destinations/pyha-luosto', blurb: 'Zwei Fjälldörfer in Ostlappland, 25 km voneinander entfernt.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'Lapplands Hauptstadt und sein wichtigster Flughafen.' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'Skidorf in Westlappland, nahe dem Flughafen Kittilä.' },
  ],
  anchorGroups: [
    {
      title: 'Das Dorf Ruka und die Pisten',
      items: [
        { name: 'Scandic Rukahovi', propertyQuery: 'Scandic Rukahovi', sid: 'destination_ruka_rukahovi', note: 'Ein Berghotel im Dorf mit Ski-in/Ski-out und einem Nachtclub.' },
        { name: 'Ski-Inn RukaVillage', propertyQuery: 'Ski-Inn RukaVillage', sid: 'destination_ruka_rukavillage', note: 'Apartments mitten im Dorf, alle mit Sauna und Trockenschrank, einige mit Whirlpool.' },
        { name: 'Ruka Ski Chalets', propertyQuery: 'Ruka Ski Chalets', sid: 'destination_ruka_ski_chalets', note: 'In Gehweite der Lifte; die größeren Einheiten (46–81,5 m²) haben eine eigene Sauna.' },
        { name: 'Hotel Royal Ruka', propertyQuery: 'Hotel Royal Ruka', sid: 'destination_ruka_royal', note: 'Einige Zimmer blicken auf den Juhannuskallio; das Restaurant serviert Fisch aus dem See Kitka und Rentier.' },
        { name: 'Ski-Inn RukaValley', propertyQuery: 'Ski-Inn RukaValley', sid: 'destination_ruka_rukavalley', note: 'Hotelzimmer und Apartments im Ruka Valley, auf der Saarua-Seite des Fjälls.' },
      ],
    },
    {
      title: 'Rund um Kuusamo',
      items: [
        { name: 'House of Northern Senses', propertyQuery: 'House of Northern Senses', sid: 'destination_ruka_northern_senses', note: 'Ein restauriertes Gutshaus am See mit acht Zimmern und Suiten für bis zu 22 Gäste, mit Rauchsauna und Ufersauna.' },
        { name: 'Holiday Club Kuusamon Tropiikki', propertyQuery: 'Holiday Club Kuusamon Tropiikki', sid: 'destination_ruka_tropiikki', note: 'Nahe der Stadt Kuusamo, mit Wasserpark und Spa, 22 km von den Pisten und 6,5 km vom Flughafen.' },
      ],
    },
  ],
  anchorProperties: [
    { name: 'Alle Unterkünfte in Ruka', href: HOTEL_SEARCH_FOR('de').ruka, sid: 'destination_ruka_all_search', note: 'Stöbern Sie in Hotels und Apartments in Ruka bei Sembo.' },
  ],
  transport: [
    { mode: 'plane', label: 'Ab Flughafen Kuusamo (KAO)', detail: 'Finnair ganzjährig ab Helsinki, etwa 1 Std.; im Winter 2026/27 außerdem 9 Direktflüge aus 8 europäischen Städten. 30 Min. mit dem Auto nach Ruka.' },
    { mode: 'bus', label: 'Flughafenbus ins Dorf Ruka', detail: 'Wartet auf jeden Linienflug. Reservieren Sie einen Platz im Voraus, spätestens 24 Std. vorher.' },
    { mode: 'train', label: 'Nachtzug nach Kemijärvi', detail: 'Täglich ab Helsinki, mit Busanschluss nach Ruka, der bei Verspätung bis zu 60 Min. auf den Zug wartet.' },
    { mode: 'car', label: 'Mit dem Auto ab Helsinki', detail: 'Etwas über 800 km auf der Staatsstraße 5. Im Dorf parken Sie in der Tiefgarage.' },
  ],
  carRental: {
    href: CARS_FOR('de').fromKuusamo,
    sid: 'destination_ruka_cars_kao',
    airport: 'Abholung am Flughafen Kuusamo (KAO)',
    blurb: '30 Min. nach Ruka · der Flughafen für Ruka und Oulanka',
  },
  seoTitle: 'Ruka, Finnland: Unterkünfte im Skigebiet und rund um Kuusamo',
  seoDescription: 'Unterkunft in Ruka, Finnland, an den Pisten und rund um Kuusamo: Apartments im autofreien Dorf, Ski-in/Ski-out-Hotel, Gutshaus am See, Hütten und die Anreise.',
}

const ja: DestinationBody = {
  tagline: 'ラップランドのすぐ南、クーサモ。41本のコースのふもとに車の入らない村があり、Oulanka国立公園までは30 kmです。',
  description: `ルカは、北ポフヤンマー県コイリスマー地方のクーサモにある、フェル（山）とスキーのリゾートです。行政区分上のラップランドのすぐ外側にありますが、雪の条件は変わらず、10月下旬から5月中旬まで、年間約200日は地面が雪に覆われています。

コースは41本、リフトは22基あり、今シーズンは2026年10月2日から2027年5月2日まで営業します。ルカの村はゲレンデのふもとにあり、車の乗り入れがない中心部に、観光客向けのベッドが1,000床以上、15軒のレストラン、地下駐車場がそろっています。この地域の宿の多くはホテルではなく、ホリデーアパートメントとコテージで、クーサモには約7,500軒あります。`,
  facts: [
    { label: 'コースとリフト', value: '41本・22基' },
    { label: '山頂の標高', value: '492 m' },
    { label: '最寄り空港', value: 'KAO 30分' },
    { label: 'スキーシーズン2026〜27', value: '10月2日〜5月2日' },
  ],
  highlights: [
    { title: 'ゲレンデのふもとの、車の入らない村', body: '車は320台収容の地下駐車場に置きます。SkiBus、空港バス、トレイルバスは村の南端の転回場に停まり、Village-2-Valleyゴンドラが村からRuka Valleyまで運行しています。' },
    { title: 'Karhunkierros（81 km）', body: 'フィンランドで最も人気のあるハイキングトレイルで、東ルカのSaaruaが起点と終点です。Saaruaの駐車場は無料です。トレイルはOulanka国立公園を通り、歩けるのは5月下旬から10月まで。冬のトレイルは安全に利用できません。' },
    { title: 'Oulanka国立公園', body: '1956年に設立され、面積は286 km²、ルカから30 km。2024年の来訪数は187,400回で、クーサモ周辺の国立公園で最も多くの人が訪れています。' },
    { title: 'Riisitunturiと樹氷', body: 'ルカから30 kmのRiisitunturi国立公園では、遅くとも10月にはトウヒの木に雪と霧氷が積もり始めます。山頂には誰でも使える無人小屋があります。公園へ行く公共交通機関はありません。' },
    { title: 'オーロラを見る場所', body: 'リゾートが挙げているのは、車で行けるJuhannuskallioと、ValtavaaraとKonttainenのエリアです。8月から11月には、クーサモ周辺の湖や池のほとりで、空と水面の二か所にオーロラが現れることがあります。' },
    { title: '夏：バイクパークと白夜', body: 'Ruka Bike Parkには四基のリフトがあり、エリアには300 kmのハイキングルートと180 kmのマウンテンバイクルートがあります。クーサモの白夜は6月中旬から月末まで続きます。' },
  ],
  whenToGo: `スキーシーズンは2026年10月2日から2027年5月2日まで。12月から4月中旬までは、毎週金曜日の午後7時〜11時にナイタースキーができます。
オーロラには暗い夜が必要なので、見られるのは秋から早春です。8月〜11月は、湖岸で凍っていない水面にオーロラが映ることがあります。
Karhunkierrosを歩けるのは5月下旬から10月まで。最も混み合うのは7月と、紅葉の9月です。`,
  howToGet: `飛行機でクーサモ（KAO）へ。ヘルシンキからフィンエアーが通年運航しており所要約1時間、2026〜27年の冬はヨーロッパの8都市から9便の直行便もあります。空港からルカまでは車で30分です。
空港バスは定期便ごとに到着を待って発車します。座席は事前に、遅くとも24時間前までに予約してください。予約がない場合は、空席があるときだけ乗車できます。
鉄道なら、ヘルシンキからケミヤルヴィ行きの夜行列車に乗り、接続バスでルカへ。車ならヘルシンキから国道5号線で800 km強です。`,
  stayTypes: [
    '車の入らない村のアパートメント。リフトまですぐです。Ski-Inn RukaVillageのアパートメントには、すべてサウナとスキー用品の乾燥キャビネットがあります。',
    '山のホテル。スキーイン・スキーアウトのマウンテンホテルから、Juhannuskallioを望む客室まで。',
    '山の周りやクーサモの湖畔に建つホリデーコテージ。',
    'ゲレンデから離れた宿：湖畔のマナーハウスと、22 km離れたクーサモ市街近くのウォーターパーク・スパホテル。',
  ],
  siblings: [
    { name: 'Pyhä–Luosto', href: '/destinations/pyha-luosto', blurb: '東ラップランドにある、25 km離れた二つのフェルの村。' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'ラップランドの首府と、その主要空港。' },
    { name: 'Levi', href: '/destinations/levi', blurb: '西ラップランドのスキー村。キッティラ空港のそばにあります。' },
  ],
  anchorGroups: [
    {
      title: 'ルカの村とゲレンデ',
      items: [
        { name: 'Scandic Rukahovi', propertyQuery: 'Scandic Rukahovi', sid: 'destination_ruka_rukahovi', note: '村にあるマウンテンホテル。スキーイン・スキーアウトで、ナイトクラブもあります。' },
        { name: 'Ski-Inn RukaVillage', propertyQuery: 'Ski-Inn RukaVillage', sid: 'destination_ruka_rukavillage', note: '村の中心にあるアパートメント。全室にサウナと乾燥キャビネットがあり、一部にはジャクージも付いています。' },
        { name: 'Ruka Ski Chalets', propertyQuery: 'Ruka Ski Chalets', sid: 'destination_ruka_ski_chalets', note: 'リフトまで徒歩圏内。広めのユニット（46〜81.5 m²）には専用サウナがあります。' },
        { name: 'Hotel Royal Ruka', propertyQuery: 'Hotel Royal Ruka', sid: 'destination_ruka_royal', note: '一部の客室からJuhannuskallioが見えます。レストランではKitka湖の魚とトナカイの料理を出しています。' },
        { name: 'Ski-Inn RukaValley', propertyQuery: 'Ski-Inn RukaValley', sid: 'destination_ruka_rukavalley', note: '山のSaarua側、Ruka Valleyにあるホテル客室とアパートメント。' },
      ],
    },
    {
      title: 'クーサモ周辺',
      items: [
        { name: 'House of Northern Senses', propertyQuery: 'House of Northern Senses', sid: 'destination_ruka_northern_senses', note: '修復された湖畔のマナーハウス。客室とスイートは八室で最大22名まで泊まれ、スモークサウナと湖畔のサウナがあります。' },
        { name: 'Holiday Club Kuusamon Tropiikki', propertyQuery: 'Holiday Club Kuusamon Tropiikki', sid: 'destination_ruka_tropiikki', note: 'クーサモ市街の近くにあり、ウォーターパークとスパを併設。ゲレンデまで22 km、空港まで6.5 kmです。' },
      ],
    },
  ],
  anchorProperties: [
    { name: 'ルカのすべての宿泊施設', href: HOTEL_SEARCH_FOR('ja').ruka, sid: 'destination_ruka_all_search', note: 'Trip.comでルカのホテルとアパートメントを閲覧できます。' },
  ],
  transport: [
    { mode: 'plane', label: 'クーサモ空港（KAO）から', detail: 'ヘルシンキからフィンエアーが通年運航、約1時間。2026〜27年の冬はヨーロッパの8都市から9便の直行便もあります。ルカまで車で30分。' },
    { mode: 'bus', label: 'ルカの村への空港バス', detail: '定期便すべてに接続します。座席は事前に、遅くとも24時間前までに予約してください。' },
    { mode: 'train', label: 'ケミヤルヴィ行きの夜行列車', detail: 'ヘルシンキから毎日運行。ルカ行きの接続バスは、列車が遅れた場合に最大60分待ちます。' },
    { mode: 'car', label: 'ヘルシンキから車で', detail: '国道5号線で800 km強。村では地下駐車場に車を置きます。' },
  ],
  carRental: {
    href: CARS_FOR('ja').fromKuusamo,
    sid: 'destination_ruka_cars_kao',
    airport: 'クーサモ空港（KAO）で受け取り',
    blurb: 'ルカまで30分・ルカとOulankaへの空港',
  },
  seoTitle: 'ルカ（フィンランド）の宿泊｜ホテル・アパートメント・コテージ',
  seoDescription: 'ルカ（フィンランド）の宿泊ガイド。ゲレンデ前の車の入らない村のアパートメント、スキーインのホテル、クーサモ周辺の湖畔のマナーハウスやコテージと、現地への行き方を紹介します。',
}

const sv: DestinationBody = {
  tagline: 'En bilfri by vid foten av 41 backar i Kuusamo, strax söder om finska Lappland, med Oulanka nationalpark 30 km bort.',
  description: `Ruka är en fjäll- och skidort i Kuusamo, i regionen Koillismaa i Norra Österbotten. Orten ligger strax utanför finska Lappland i administrativ mening, men snön är densamma: marken är vit omkring 200 dagar om året, från slutet av oktober till mitten av maj.

Skidorten har 41 backar och 22 liftar, och den här säsongen pågår från den 2 oktober 2026 till den 2 maj 2027. Ruka by ligger vid foten av backarna: en bilfri bykärna med över 1 000 gästbäddar, 15 restauranger och ett underjordiskt parkeringsgarage. Det mesta av boendet i området är semesterlägenheter och stugor snarare än hotell: i Kuusamo finns det omkring 7 500 sådana.`,
  facts: [
    { label: 'Backar och liftar', value: '41 · 22' },
    { label: 'Fjälltoppen', value: '492 m' },
    { label: 'Närmaste flygplats', value: 'KAO, 30 min' },
    { label: 'Skidsäsong 2026–27', value: '2 okt. – 2 maj' },
  ],
  highlights: [
    { title: 'En bilfri by vid backarna', body: 'Bilarna står i det underjordiska parkeringsgaraget med plats för 320 bilar. SkiBus, flygbussen och bussen till vandringsleden stannar vid vändplanen i byns södra kant, och gondolen Village-2-Valley går från byn till Ruka Valley.' },
    { title: 'Karhunkierros, 81 km', body: 'Finlands populäraste vandringsled börjar och slutar i Saarua i östra Ruka, där parkeringen är gratis. Leden går genom Oulanka nationalpark och vandras från slutet av maj till oktober; på vintern är leden inte säker att använda.' },
    { title: 'Oulanka nationalpark', body: 'Grundad 1956, 286 km² och 30 km från Ruka. Med 187 400 besök 2024 är det den mest besökta nationalparken runt Kuusamo.' },
    { title: 'Riisitunturi och de snötyngda granarna', body: 'I Riisitunturi nationalpark, 30 km från Ruka, börjar snö och rimfrost byggas upp på granarna senast i oktober. På fjälltoppen står en öppen vildmarksstuga; det går ingen kollektivtrafik till parken.' },
    { title: 'Här ser du norrskenet', body: 'Skidorten tipsar själv om Juhannuskallio, dit du kan köra bil, och om området kring Valtavaara och Konttainen. Från augusti till november kan du vid sjöar och tjärnar runt Kuusamo se norrskenet två gånger: på himlen och i vattnet.' },
    { title: 'Sommar: cykelpark och midnattssol', body: 'Fyra liftar går till Ruka Bike Park, och området har 300 km vandringsleder och 180 km mountainbikeleder. I Kuusamo varar midnattssolen från mitten av juni till slutet av månaden.' },
  ],
  whenToGo: `Skidsäsongen pågår från den 2 oktober 2026 till den 2 maj 2027, med kvällsåkning på fredagar kl. 19.00–23.00 från december till mitten av april.
Norrskenet kräver mörka nätter, alltså från hösten till tidig vår; från augusti till november kan det speglas i det öppna vattnet vid sjöstränderna.
Karhunkierros vandras från slutet av maj till oktober; juli och september, med höstfärgerna, är de mest besökta månaderna.`,
  howToGet: `Flyg till Kuusamo (KAO): Finnair flyger från Helsingfors året runt på ungefär en timme, och vintern 2026–27 finns det 9 direktflyg från 8 europeiska städer. Från flygplatsen till Ruka är det 30 minuter med bil.
Flygbussen väntar in varje reguljärt flyg. Boka plats i förväg, senast 24 timmar före resan; utan bokning kommer du bara med om det finns plats.
Med tåg tar du nattåget från Helsingfors till Kemijärvi och anslutningsbussen till Ruka. Med bil är det drygt 800 km från Helsingfors längs riksväg 5.`,
  stayTypes: [
    'Lägenheter i den bilfria byn, några steg från liftarna; varje lägenhet på Ski-Inn RukaVillage har bastu och torkskåp för skidutrustningen.',
    'Hotell på fjället, från ett fjällhotell med ski in/ski out till rum med utsikt mot Juhannuskallio.',
    'Semesterstugor runt fjället och vid Kuusamos sjöar.',
    'En bit från backarna: en herrgård vid en sjö, och ett hotell med äventyrsbad och spa strax utanför Kuusamo centrum, 22 km bort.',
  ],
  siblings: [
    { name: 'Pyhä–Luosto', href: '/destinations/pyha-luosto', blurb: 'Två fjällbyar i östra finska Lappland, 25 km från varandra.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'Finska Lapplands huvudstad och regionens viktigaste flygplats.' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'Skidby i västra finska Lappland, nära Kittilä flygplats.' },
  ],
  anchorGroups: [
    {
      title: 'Ruka by och backarna',
      items: [
        { name: 'Scandic Rukahovi', propertyQuery: 'Scandic Rukahovi', sid: 'destination_ruka_rukahovi', note: 'Fjällhotell i byn med ski in/ski out och nattklubb.' },
        { name: 'Ski-Inn RukaVillage', propertyQuery: 'Ski-Inn RukaVillage', sid: 'destination_ruka_rukavillage', note: 'Lägenheter mitt i byn, alla med bastu och torkskåp, några med bubbelpool.' },
        { name: 'Ruka Ski Chalets', propertyQuery: 'Ruka Ski Chalets', sid: 'destination_ruka_ski_chalets', note: 'Gångavstånd till liftarna; de större enheterna (46–81,5 m²) har egen bastu.' },
        { name: 'Hotel Royal Ruka', propertyQuery: 'Hotel Royal Ruka', sid: 'destination_ruka_royal', note: 'En del rum har utsikt mot Juhannuskallio; restaurangen serverar fisk från sjön Kitka och renkött.' },
        { name: 'Ski-Inn RukaValley', propertyQuery: 'Ski-Inn RukaValley', sid: 'destination_ruka_rukavalley', note: 'Hotellrum och lägenheter i Ruka Valley, på fjällets Saarua-sida.' },
      ],
    },
    {
      title: 'Runt Kuusamo',
      items: [
        { name: 'House of Northern Senses', propertyQuery: 'House of Northern Senses', sid: 'destination_ruka_northern_senses', note: 'Restaurerad herrgård vid en sjö med åtta rum och sviter för upp till 22 gäster, rökbastu och strandbastu.' },
        { name: 'Holiday Club Kuusamon Tropiikki', propertyQuery: 'Holiday Club Kuusamon Tropiikki', sid: 'destination_ruka_tropiikki', note: 'Strax utanför Kuusamo centrum, med äventyrsbad och spa, 22 km från backarna och 6,5 km från flygplatsen.' },
      ],
    },
  ],
  anchorProperties: [
    { name: 'Alla boenden i Ruka', href: HOTEL_SEARCH_FOR('sv').ruka, sid: 'destination_ruka_all_search', note: 'Bläddra bland hotell och lägenheter i Ruka på Sembo.' },
  ],
  transport: [
    { mode: 'plane', label: 'Från Kuusamo flygplats (KAO)', detail: 'Finnair från Helsingfors året runt, ca 1 h; vintern 2026–27 dessutom 9 direktflyg från 8 europeiska städer. 30 min med bil till Ruka.' },
    { mode: 'bus', label: 'Flygbussen till Ruka by', detail: 'Väntar in varje reguljärt flyg. Boka plats i förväg, senast 24 h före.' },
    { mode: 'train', label: 'Nattåg till Kemijärvi', detail: 'Varje dag från Helsingfors, med bussanslutning till Ruka som väntar upp till 60 min på ett försenat tåg.' },
    { mode: 'car', label: 'Med bil från Helsingfors', detail: 'Drygt 800 km längs riksväg 5. I byn parkerar du i det underjordiska garaget.' },
  ],
  carRental: {
    href: CARS_FOR('sv').fromKuusamo,
    sid: 'destination_ruka_cars_kao',
    airport: 'Upphämtning på Kuusamo flygplats (KAO)',
    blurb: '30 min till Ruka · flygplatsen för Ruka och Oulanka',
  },
  seoTitle: 'Ruka, Finland: hotell, lägenheter och stugor i skidorten',
  seoDescription: 'Boende i Ruka i Finland, vid backarna och runt Kuusamo: lägenheter i den bilfria byn, ski in-hotell, herrgård vid sjön, stugor och hur du tar dig dit.',
}

const es: DestinationBody = {
  tagline: 'Un pueblo sin coches al pie de 41 pistas en Kuusamo, justo al sur de Laponia, con el Parque Nacional de Oulanka a 30 km.',
  description: `Ruka es un fjäll y una estación de esquí en Kuusamo, en la región de Koillismaa, en Ostrobotnia del Norte. Queda justo fuera de la Laponia administrativa, pero la nieve es la misma: el suelo está blanco unos 200 días al año, de finales de octubre a mediados de mayo.

La estación tiene 41 pistas y 22 remontes, y esta temporada va del 2 de octubre de 2026 al 2 de mayo de 2027. El pueblo de Ruka está al pie de las pistas: un centro sin coches con más de 1.000 camas turísticas, 15 restaurantes y un aparcamiento subterráneo. La mayor parte del alojamiento de la zona no son hoteles, sino apartamentos y cabañas de vacaciones: en Kuusamo hay unos 7.500.`,
  facts: [
    { label: 'Pistas y remontes', value: '41 · 22' },
    { label: 'Cima del fjäll', value: '492 m' },
    { label: 'Aeropuerto más cercano', value: 'KAO, 30 min' },
    { label: 'Temporada de esquí 2026–27', value: '2 oct. – 2 may.' },
  ],
  highlights: [
    { title: 'Un pueblo sin coches junto a las pistas', body: 'Los coches se quedan en el aparcamiento subterráneo de 320 plazas. El SkiBus, el autobús del aeropuerto y el autobús de la ruta de senderismo paran en la zona de giro del extremo sur del pueblo, y la telecabina Village-2-Valley une el pueblo con Ruka Valley.' },
    { title: 'Karhunkierros, 81 km', body: 'La ruta de senderismo más popular de Finlandia empieza y termina en Saarua, en el este de Ruka, donde el aparcamiento es gratuito. Atraviesa el Parque Nacional de Oulanka y se recorre de finales de mayo a octubre; en invierno la ruta no es segura.' },
    { title: 'Parque Nacional de Oulanka', body: 'Fundado en 1956, tiene 286 km² y está a 30 km de Ruka. Con 187.400 visitas en 2024, es el parque nacional más concurrido de los alrededores de Kuusamo.' },
    { title: 'Riisitunturi y los abetos cargados de nieve', body: 'En el Parque Nacional de Riisitunturi, a 30 km de Ruka, la nieve y la escarcha empiezan a acumularse en los abetos en octubre, como muy tarde. En la cima del fjäll hay un refugio libre; al parque no llega el transporte público.' },
    { title: 'Dónde ver la aurora boreal', body: 'La estación recomienda Juhannuskallio, al que se llega en coche, y la zona de Valtavaara y Konttainen. De agosto a noviembre, en las orillas de los lagos y estanques de Kuusamo la aurora puede verse dos veces: en el cielo y en el agua.' },
    { title: 'Verano: bike park y sol de medianoche', body: 'Cuatro remontes dan servicio al Ruka Bike Park, y la zona tiene 300 km de rutas de senderismo y 180 km de rutas de bicicleta de montaña. En Kuusamo, el sol de medianoche dura de mediados de junio a finales de mes.' },
  ],
  whenToGo: `La temporada de esquí va del 2 de octubre de 2026 al 2 de mayo de 2027, con esquí nocturno los viernes de 19:00 a 23:00 entre diciembre y mediados de abril.
La aurora boreal necesita noches oscuras, así que la época va del otoño a principios de la primavera; de agosto a noviembre, en las orillas de los lagos puede reflejarse en el agua aún sin helar.
El Karhunkierros se recorre de finales de mayo a octubre; julio y septiembre, este último con los colores del otoño, son los meses con más senderistas.`,
  howToGet: `Vuele a Kuusamo (KAO): Finnair vuela desde Helsinki todo el año en aproximadamente una hora, y en el invierno 2026–27 hay 9 vuelos directos desde 8 ciudades europeas. Ruka está a 30 minutos en coche del aeropuerto.
El autobús del aeropuerto espera a todos los vuelos regulares. Reserve plaza con antelación, como muy tarde 24 horas antes; sin reserva, solo podrá subir si hay sitio.
Si viaja en tren, tome el nocturno de Helsinki a Kemijärvi y allí el autobús de conexión a Ruka. En coche son algo más de 800 km desde Helsinki por la carretera 5.`,
  stayTypes: [
    'Apartamentos en el pueblo sin coches, a unos pasos de los remontes; todos los apartamentos de Ski-Inn RukaVillage tienen sauna y armario de secado para el equipo de esquí.',
    'Hoteles en el fjäll, desde un hotel de montaña a pie de pista hasta habitaciones con vistas a Juhannuskallio.',
    'Cabañas de vacaciones alrededor del fjäll y a orillas de los lagos de Kuusamo.',
    'Lejos de las pistas: una casa señorial junto a un lago y un hotel con parque acuático y spa en la localidad de Kuusamo, a 22 km.',
  ],
  siblings: [
    { name: 'Pyhä y Luosto', href: '/destinations/pyha-luosto', blurb: 'Dos pueblos de fjäll en el este de Laponia, a 25 km uno del otro.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'La capital de Laponia y su principal aeropuerto.' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'Pueblo de esquí en el oeste de Laponia, junto al aeropuerto de Kittilä.' },
  ],
  anchorGroups: [
    {
      title: 'El pueblo de Ruka y las pistas',
      items: [
        { name: 'Scandic Rukahovi', propertyQuery: 'Scandic Rukahovi', sid: 'destination_ruka_rukahovi', note: 'Hotel de montaña en el pueblo, con acceso directo a las pistas y discoteca.' },
        { name: 'Ski-Inn RukaVillage', propertyQuery: 'Ski-Inn RukaVillage', sid: 'destination_ruka_rukavillage', note: 'Apartamentos en pleno centro del pueblo, todos con sauna y armario de secado, algunos con jacuzzi.' },
        { name: 'Ruka Ski Chalets', propertyQuery: 'Ruka Ski Chalets', sid: 'destination_ruka_ski_chalets', note: 'A poca distancia a pie de los remontes; los alojamientos más grandes (46–81,5 m²) tienen sauna privada.' },
        { name: 'Hotel Royal Ruka', propertyQuery: 'Hotel Royal Ruka', sid: 'destination_ruka_royal', note: 'Algunas habitaciones tienen vistas a Juhannuskallio; el restaurante sirve pescado del lago Kitka y carne de reno.' },
        { name: 'Ski-Inn RukaValley', propertyQuery: 'Ski-Inn RukaValley', sid: 'destination_ruka_rukavalley', note: 'Habitaciones de hotel y apartamentos en Ruka Valley, en la vertiente del fjäll que da a Saarua.' },
      ],
    },
    {
      title: 'Alrededores de Kuusamo',
      items: [
        { name: 'House of Northern Senses', propertyQuery: 'House of Northern Senses', sid: 'destination_ruka_northern_senses', note: 'Una casa señorial restaurada junto a un lago, con ocho habitaciones y suites para hasta 22 huéspedes, sauna de humo y sauna a orillas del lago.' },
        { name: 'Holiday Club Kuusamon Tropiikki', propertyQuery: 'Holiday Club Kuusamon Tropiikki', sid: 'destination_ruka_tropiikki', note: 'En la localidad de Kuusamo, con parque acuático y spa, a 22 km de las pistas y a 6,5 km del aeropuerto.' },
      ],
    },
  ],
  anchorProperties: [
    { name: 'Todos los alojamientos de Ruka', href: HOTEL_SEARCH_FOR('es').ruka, sid: 'destination_ruka_all_search', note: 'Consulte los hoteles y apartamentos de Ruka en Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Desde el aeropuerto de Kuusamo (KAO)', detail: 'Finnair desde Helsinki todo el año, aprox. 1 h; en el invierno 2026–27, también 9 vuelos directos desde 8 ciudades europeas. 30 min en coche hasta Ruka.' },
    { mode: 'bus', label: 'Autobús del aeropuerto al pueblo de Ruka', detail: 'Espera a todos los vuelos regulares. Reserve plaza con antelación, como muy tarde 24 h antes.' },
    { mode: 'train', label: 'Tren nocturno a Kemijärvi', detail: 'Diario desde Helsinki, con autobús de conexión a Ruka que espera hasta 60 min si el tren llega con retraso.' },
    { mode: 'car', label: 'En coche desde Helsinki', detail: 'Algo más de 800 km por la carretera 5. En el pueblo, deje el coche en el aparcamiento subterráneo.' },
  ],
  carRental: {
    href: CARS_FOR('es').fromKuusamo,
    sid: 'destination_ruka_cars_kao',
    airport: 'Recogida en el aeropuerto de Kuusamo (KAO)',
    blurb: '30 min hasta Ruka · el aeropuerto de Ruka y Oulanka',
  },
  seoTitle: 'Ruka, Finlandia: hoteles, apartamentos y cabañas en Kuusamo',
  seoDescription: 'Alojamiento en Ruka y Kuusamo: apartamentos en el pueblo sin coches, un hotel a pie de pista, una casa señorial junto a un lago, cabañas y cómo llegar.',
}

const ptBR: DestinationBody = {
  tagline: 'Um vilarejo sem carros ao pé de 41 pistas em Kuusamo, logo ao sul da Lapônia, com o Parque Nacional Oulanka a 30 km.',
  description: `Ruka é um fjäll com estação de esqui em Kuusamo, na região de Koillismaa, na Ostrobótnia do Norte. Fica logo fora da Lapônia administrativa, mas a neve é a mesma: o chão fica branco cerca de 200 dias por ano, do fim de outubro a meados de maio.

A estação tem 41 pistas e 22 teleféricos, e esta temporada vai de 2 de outubro de 2026 a 2 de maio de 2027. O vilarejo de Ruka fica ao pé das pistas: um centro sem carros, com mais de 1.000 leitos para visitantes, 15 restaurantes e um estacionamento subterrâneo. A maior parte da hospedagem da região é formada por apartamentos de temporada e cabanas, e não por hotéis: Kuusamo tem cerca de 7.500 deles.`,
  facts: [
    { label: 'Pistas e teleféricos', value: '41 · 22' },
    { label: 'Topo do fjäll', value: '492 m' },
    { label: 'Aeroporto mais próximo', value: 'KAO, 30 min' },
    { label: 'Temporada de esqui 2026–27', value: '2 out. – 2 mai.' },
  ],
  highlights: [
    { title: 'Um vilarejo sem carros junto às pistas', body: 'Os carros ficam no estacionamento subterrâneo, com 320 vagas. O SkiBus, o ônibus do aeroporto e o ônibus da trilha param no balão de retorno, na borda sul do vilarejo, e a gôndola Village-2-Valley liga o vilarejo a Ruka Valley.' },
    { title: 'Karhunkierros, 81 km', body: 'A trilha de caminhada mais popular da Finlândia começa e termina em Saarua, no leste de Ruka, onde o estacionamento é gratuito. Ela atravessa o Parque Nacional Oulanka e é percorrida do fim de maio a outubro; no inverno, não é seguro usar a trilha.' },
    { title: 'Parque Nacional Oulanka', body: 'Criado em 1956, tem 286 km² e fica a 30 km de Ruka. Com 187.400 visitas em 2024, é o mais visitado dos parques nacionais da região de Kuusamo.' },
    { title: 'Riisitunturi e a neve sobre os abetos', body: 'No Parque Nacional Riisitunturi, a 30 km de Ruka, a neve e a geada começam a se acumular nos abetos em outubro, no mais tardar. No topo do fjäll há um abrigo aberto para caminhantes; não há transporte público até o parque.' },
    { title: 'Onde ver a aurora boreal', body: 'A estação de esqui indica Juhannuskallio, aonde se chega de carro, e a área de Valtavaara e Konttainen. De agosto a novembro, nas margens dos lagos e lagoas de Kuusamo, a aurora pode aparecer duas vezes: no céu e na água.' },
    { title: 'Verão: bike park e sol da meia-noite', body: 'Quatro teleféricos atendem o Ruka Bike Park, e a região tem 300 km de trilhas de caminhada e 180 km de trilhas de mountain bike. Em Kuusamo, o sol da meia-noite dura de meados de junho ao fim do mês.' },
  ],
  whenToGo: `A temporada de esqui vai de 2 de outubro de 2026 a 2 de maio de 2027, com esqui noturno às sextas-feiras, das 19h às 23h, de dezembro a meados de abril.
A aurora boreal precisa de noites escuras, ou seja, do outono ao início da primavera; de agosto a novembro, ela pode se refletir na água ainda sem gelo, nas margens dos lagos.
A Karhunkierros é percorrida do fim de maio a outubro; julho e setembro, com as cores de outono, são os meses mais movimentados.`,
  howToGet: `Voe até Kuusamo (KAO): a Finnair voa de Helsinque o ano todo, em cerca de uma hora, e no inverno de 2026–27 há 9 voos diretos de 8 cidades europeias. Ruka fica a 30 minutos de carro do aeroporto.
O ônibus do aeroporto espera todos os voos regulares. Reserve o lugar com pelo menos 24 horas de antecedência; sem reserva, você só embarca se houver vaga.
De trem, pegue o trem noturno de Helsinque a Kemijärvi e o ônibus de conexão até Ruka. De carro, são pouco mais de 800 km a partir de Helsinque, pela rodovia 5.`,
  stayTypes: [
    'Apartamentos no vilarejo sem carros, a poucos passos dos teleféricos; todos os apartamentos do Ski-Inn RukaVillage têm sauna e armário de secagem para o equipamento de esqui.',
    'Hotéis no fjäll, de um hotel de montanha ski-in, ski-out a quartos com vista para Juhannuskallio.',
    'Cabanas de temporada ao redor do fjäll e à beira dos lagos de Kuusamo.',
    'Longe das pistas: um solar à beira do lago e um hotel com parque aquático e spa perto da cidade de Kuusamo, a 22 km.',
  ],
  siblings: [
    { name: 'Pyhä e Luosto', href: '/destinations/pyha-luosto', blurb: 'Dois vilarejos de fjäll na Lapônia Oriental, a 25 km um do outro.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'A capital da Lapônia e o seu principal aeroporto.' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'Vila de esqui no oeste da Lapônia, perto do aeroporto de Kittilä.' },
  ],
  anchorGroups: [
    {
      title: 'O vilarejo de Ruka e as pistas',
      items: [
        { name: 'Scandic Rukahovi', propertyQuery: 'Scandic Rukahovi', sid: 'destination_ruka_rukahovi', note: 'Hotel de montanha no vilarejo, com acesso ski-in, ski-out e uma casa noturna.' },
        { name: 'Ski-Inn RukaVillage', propertyQuery: 'Ski-Inn RukaVillage', sid: 'destination_ruka_rukavillage', note: 'Apartamentos no meio do vilarejo, todos com sauna e armário de secagem, alguns com banheira de hidromassagem.' },
        { name: 'Ruka Ski Chalets', propertyQuery: 'Ruka Ski Chalets', sid: 'destination_ruka_ski_chalets', note: 'Dá para ir a pé até os teleféricos; as unidades maiores (46–81,5 m²) têm sauna privativa.' },
        { name: 'Hotel Royal Ruka', propertyQuery: 'Hotel Royal Ruka', sid: 'destination_ruka_royal', note: 'Alguns quartos têm vista para Juhannuskallio; o restaurante serve peixe do lago Kitka e carne de rena.' },
        { name: 'Ski-Inn RukaValley', propertyQuery: 'Ski-Inn RukaValley', sid: 'destination_ruka_rukavalley', note: 'Quartos de hotel e apartamentos em Ruka Valley, no lado do fjäll onde fica Saarua.' },
      ],
    },
    {
      title: 'Na região de Kuusamo',
      items: [
        { name: 'House of Northern Senses', propertyQuery: 'House of Northern Senses', sid: 'destination_ruka_northern_senses', note: 'Um solar restaurado à beira do lago, com oito quartos e suítes para até 22 hóspedes, uma sauna de fumaça e uma sauna à beira do lago.' },
        { name: 'Holiday Club Kuusamon Tropiikki', propertyQuery: 'Holiday Club Kuusamon Tropiikki', sid: 'destination_ruka_tropiikki', note: 'Perto da cidade de Kuusamo, com parque aquático e spa, a 22 km das pistas e a 6,5 km do aeroporto.' },
      ],
    },
  ],
  anchorProperties: [
    { name: 'Todas as hospedagens de Ruka', href: HOTEL_SEARCH_FOR('pt-BR').ruka, sid: 'destination_ruka_all_search', note: 'Veja os hotéis e apartamentos de Ruka no Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Do Aeroporto de Kuusamo (KAO)', detail: 'Finnair de Helsinque o ano todo, cerca de 1 h; no inverno de 2026–27, também 9 voos diretos de 8 cidades europeias. 30 min de carro até Ruka.' },
    { mode: 'bus', label: 'Ônibus do aeroporto até o vilarejo de Ruka', detail: 'Espera todos os voos regulares. Reserve o lugar com pelo menos 24 h de antecedência.' },
    { mode: 'train', label: 'Trem noturno para Kemijärvi', detail: 'Diário a partir de Helsinque, com conexão de ônibus até Ruka que espera até 60 min se o trem atrasar.' },
    { mode: 'car', label: 'De carro a partir de Helsinque', detail: 'Pouco mais de 800 km pela rodovia 5. No vilarejo, o carro fica no estacionamento subterrâneo.' },
  ],
  carRental: {
    href: CARS_FOR('pt-BR').fromKuusamo,
    sid: 'destination_ruka_cars_kao',
    airport: 'Retirada no Aeroporto de Kuusamo (KAO)',
    blurb: '30 min até Ruka · o aeroporto para Ruka e Oulanka',
  },
  seoTitle: 'Kuusamo e Ruka, Finlândia: hotéis, apartamentos e cabanas',
  seoDescription: 'Hospedagem em Ruka e Kuusamo, na Finlândia: apartamentos no vilarejo sem carros, hotel ski-in, um solar à beira do lago, cabanas e como chegar.',
}

const ko: DestinationBody = {
  tagline: '라플란드 바로 남쪽, 쿠사모의 슬로프 41개 아래에 자리한 차 없는 마을. Oulanka 국립공원까지는 30km입니다.',
  description: `루카는 북포흐얀마주 코일리스마 지방의 쿠사모에 있는 펠이자 스키 리조트입니다. 행정구역상으로는 라플란드 바로 바깥이지만 눈은 다르지 않습니다. 10월 말부터 5월 중순까지, 한 해 약 200일 동안 땅이 하얗게 덮여 있습니다.

리조트에는 슬로프 41개와 리프트 22기가 있으며, 이번 시즌은 2026년 10월 2일부터 2027년 5월 2일까지입니다. 루카 마을은 슬로프 바로 아래에 있습니다. 차가 다니지 않는 마을 중심에 여행객용 침대 1,000개 이상, 레스토랑 15곳, 지하 주차장이 있습니다. 이 지역 숙소는 대부분 호텔이 아니라 휴가용 아파트와 코티지이며, 쿠사모에는 이런 숙소가 약 7,500곳 있습니다.`,
  facts: [
    { label: '슬로프와 리프트', value: '41 · 22' },
    { label: '펠 정상', value: '492m' },
    { label: '가장 가까운 공항', value: 'KAO, 30분' },
    { label: '스키 시즌 2026–27', value: '10월 2일–5월 2일' },
  ],
  highlights: [
    { title: '슬로프 앞, 차 없는 마을', body: '차는 320대를 세울 수 있는 지하 주차장에 두고 다닙니다. SkiBus, 공항버스, 트레일 버스는 마을 남쪽 끝의 회차장에 정차하며, Village-2-Valley 곤돌라가 마을에서 Ruka Valley까지 운행합니다.' },
    { title: 'Karhunkierros 트레일, 81km', body: '핀란드에서 가장 인기 있는 하이킹 트레일로, 루카 동쪽의 Saarua에서 시작하고 끝나며 그곳 주차는 무료입니다. 트레일은 Oulanka 국립공원을 지나고, 걷는 시기는 5월 말부터 10월까지입니다. 겨울에는 트레일이 안전하지 않습니다.' },
    { title: 'Oulanka 국립공원', body: '1956년에 지정되었고 면적은 286km², 루카에서 30km 거리입니다. 2024년 방문 횟수는 187,400회로, 쿠사모 주변 국립공원 가운데 가장 많습니다.' },
    { title: 'Riisitunturi와 눈 덮인 가문비나무', body: '루카에서 30km 떨어진 Riisitunturi 국립공원에서는 늦어도 10월부터 가문비나무에 눈과 상고대가 쌓입니다. 펠 정상에는 누구나 이용할 수 있는 야생 오두막이 있으며, 공원까지 가는 대중교통은 없습니다.' },
    { title: '오로라는 어디서 볼까', body: '리조트가 꼽는 곳은 차로 갈 수 있는 Juhannuskallio, 그리고 Valtavaara와 Konttainen 일대입니다. 8월부터 11월까지는 쿠사모 주변의 호숫가와 연못가에서 오로라를 두 번 볼 수도 있습니다. 한 번은 하늘에서, 또 한 번은 물 위에서입니다.' },
    { title: '여름: 바이크 파크와 백야', body: 'Ruka Bike Park에는 리프트 네 기가 운행되며, 이 지역에는 하이킹 코스 300km와 산악자전거 코스 180km가 있습니다. 쿠사모의 백야는 6월 중순부터 6월 말까지 이어집니다.' },
  ],
  whenToGo: `스키 시즌은 2026년 10월 2일부터 2027년 5월 2일까지이며, 12월부터 4월 중순까지는 매주 금요일 저녁 7시부터 밤 11시까지 야간 스키를 탈 수 있습니다.
오로라는 어두운 밤이 있어야 보이므로 가을부터 이른 봄까지가 적기입니다. 8월부터 11월까지는 얼지 않은 호수 수면에 오로라가 비치기도 합니다.
Karhunkierros 트레일은 5월 말부터 10월까지 걸을 수 있으며, 가장 붐비는 달은 7월과 단풍철인 9월입니다.`,
  howToGet: `비행기로는 쿠사모 공항(KAO)으로 갑니다. 핀에어가 헬싱키에서 연중 운항하며 한 시간 정도 걸리고, 2026–27년 겨울에는 유럽 8개 도시에서 오는 직항편 9개 노선도 있습니다. 공항에서 루카까지는 차로 30분입니다.
공항버스는 정기 항공편마다 도착을 기다립니다. 좌석은 늦어도 24시간 전까지 미리 예약하세요. 예약하지 않으면 자리가 남을 때만 탈 수 있습니다.
기차로는 헬싱키에서 케미야르비까지 야간열차를 타고, 연결 버스로 루카까지 갑니다. 자동차로는 헬싱키에서 5번 국도를 따라 800km가 조금 넘습니다.`,
  stayTypes: [
    '리프트에서 몇 걸음 거리, 차 없는 마을 안의 아파트. Ski-Inn RukaVillage의 아파트에는 모두 사우나와 스키 장비 건조 캐비닛이 있습니다.',
    '펠에 있는 호텔. 스키 인·스키 아웃이 되는 산악 호텔부터 Juhannuskallio가 보이는 객실까지 있습니다.',
    '펠 주변과 쿠사모 호숫가의 휴가용 코티지.',
    '슬로프에서 떨어진 곳: 호숫가의 저택, 그리고 22km 떨어진 쿠사모 시내 근처의 워터파크·스파 호텔.',
  ],
  siblings: [
    { name: 'Pyhä–Luosto', href: '/destinations/pyha-luosto', blurb: '라플란드 동부의 펠 마을 두 곳, 서로 25km 거리.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: '라플란드의 중심 도시이자 주요 공항이 있는 곳.' },
    { name: 'Levi', href: '/destinations/levi', blurb: '라플란드 서부의 스키 마을, 키틸래 공항 근처.' },
  ],
  anchorGroups: [
    {
      title: '루카 마을과 슬로프',
      items: [
        { name: 'Scandic Rukahovi', propertyQuery: 'Scandic Rukahovi', sid: 'destination_ruka_rukahovi', note: '마을 안의 산악 호텔로, 스키 인·스키 아웃이 되고 나이트클럽이 있습니다.' },
        { name: 'Ski-Inn RukaVillage', propertyQuery: 'Ski-Inn RukaVillage', sid: 'destination_ruka_rukavillage', note: '마을 한가운데의 아파트로, 모두 사우나와 건조 캐비닛을 갖췄고 일부에는 자쿠지가 있습니다.' },
        { name: 'Ruka Ski Chalets', propertyQuery: 'Ruka Ski Chalets', sid: 'destination_ruka_ski_chalets', note: '리프트까지 걸어갈 수 있는 거리입니다. 넓은 유닛(46–81.5m²)에는 전용 사우나가 있습니다.' },
        { name: 'Hotel Royal Ruka', propertyQuery: 'Hotel Royal Ruka', sid: 'destination_ruka_royal', note: '일부 객실에서 Juhannuskallio가 보이며, 레스토랑에서는 Kitka 호수의 생선과 순록 요리를 냅니다.' },
        { name: 'Ski-Inn RukaValley', propertyQuery: 'Ski-Inn RukaValley', sid: 'destination_ruka_rukavalley', note: '펠의 Saarua 쪽, Ruka Valley에 있는 호텔 객실과 아파트입니다.' },
      ],
    },
    {
      title: '쿠사모 주변',
      items: [
        { name: 'House of Northern Senses', propertyQuery: 'House of Northern Senses', sid: 'destination_ruka_northern_senses', note: '호숫가의 옛 저택을 복원한 숙소로, 객실과 스위트 여덟 개에 최대 22명이 묵을 수 있고 스모크 사우나와 호숫가 사우나가 있습니다.' },
        { name: 'Holiday Club Kuusamon Tropiikki', propertyQuery: 'Holiday Club Kuusamon Tropiikki', sid: 'destination_ruka_tropiikki', note: '쿠사모 시내 근처에 있으며 워터파크와 스파가 있습니다. 슬로프까지 22km, 공항까지 6.5km입니다.' },
      ],
    },
  ],
  anchorProperties: [
    { name: '루카 전체 숙소', href: HOTEL_SEARCH_FOR('ko').ruka, sid: 'destination_ruka_all_search', note: 'Trip.com에서 루카의 호텔과 아파트를 둘러보세요.' },
  ],
  transport: [
    { mode: 'plane', label: '쿠사모 공항(KAO)에서', detail: '헬싱키발 핀에어 연중 운항, 약 1시간. 2026–27년 겨울에는 유럽 8개 도시발 직항편 9개 노선도 운항. 루카까지 차로 30분.' },
    { mode: 'bus', label: '루카 마을행 공항버스', detail: '모든 정기 항공편에 맞춰 운행. 늦어도 24시간 전까지 좌석을 미리 예약하세요.' },
    { mode: 'train', label: '케미야르비행 야간열차', detail: '헬싱키에서 매일 운행. 루카행 연결 버스는 열차가 늦으면 최대 60분까지 기다립니다.' },
    { mode: 'car', label: '헬싱키에서 자동차로', detail: '5번 국도로 800km 남짓. 마을에서는 지하 주차장에 차를 세우세요.' },
  ],
  carRental: {
    href: CARS_FOR('ko').fromKuusamo,
    sid: 'destination_ruka_cars_kao',
    airport: '쿠사모 공항(KAO) 픽업',
    blurb: '루카까지 30분 · 루카와 Oulanka로 가는 공항',
  },
  seoTitle: '핀란드 루카 숙소: 호텔, 아파트, 코티지',
  seoDescription: '핀란드 루카 숙소 안내: 슬로프 옆 차 없는 마을의 아파트, 스키 인 호텔, 호숫가 저택, 쿠사모 주변 코티지와 가는 방법까지 소개합니다.',
}

const fr: DestinationBody = {
  tagline: 'Un village sans voitures au pied de 41 pistes, à Kuusamo, juste au sud de la Laponie, à 30 km du parc national d’Oulanka.',
  description: `Ruka est un fjäll et une station de ski de Kuusamo, dans la région du Koillismaa, en Ostrobotnie du Nord. Elle se trouve juste en dehors de la Laponie administrative, mais l’enneigement est le même : le sol reste blanc environ 200 jours par an, de fin octobre à la mi-mai.

La station compte 41 pistes et 22 remontées mécaniques, et cette saison s’étend du 2 octobre 2026 au 2 mai 2027. Le village de Ruka se trouve au pied des pistes : un centre sans voitures avec plus de 1 000 lits touristiques, 15 restaurants et un parking souterrain. L’essentiel de l’hébergement du secteur se compose d’appartements de vacances et de chalets plutôt que d’hôtels : Kuusamo en compte environ 7 500.`,
  facts: [
    { label: 'Pistes et remontées', value: '41 · 22' },
    { label: 'Sommet du fjäll', value: '492 m' },
    { label: 'Aéroport le plus proche', value: 'KAO, 30 min' },
    { label: 'Saison de ski 2026–27', value: '2 oct. – 2 mai' },
  ],
  highlights: [
    { title: 'Un village sans voitures au pied des pistes', body: 'Les voitures restent dans le parking souterrain de 320 places. Le SkiBus, le bus de l’aéroport et le bus des randonneurs s’arrêtent à l’aire de retournement, en lisière sud du village, et la télécabine Village-2-Valley relie le village à Ruka Valley.' },
    { title: 'Karhunkierros, 81 km', body: 'Le sentier de randonnée le plus populaire de Finlande commence et se termine à Saarua, à l’est de Ruka ; le stationnement y est gratuit. Il traverse le parc national d’Oulanka et se parcourt de fin mai à octobre ; en hiver, le sentier n’est pas sûr.' },
    { title: 'Parc national d’Oulanka', body: 'Créé en 1956, il couvre 286 km² et se trouve à 30 km de Ruka. Avec 187 400 visites en 2024, c’est le plus fréquenté des parcs nationaux de la région de Kuusamo.' },
    { title: 'Riisitunturi et ses épicéas chargés de neige', body: 'Dans le parc national de Riisitunturi, à 30 km de Ruka, la neige et le givre commencent à s’accumuler sur les épicéas au plus tard en octobre. Un refuge en libre accès se dresse au sommet du fjäll ; aucun transport en commun ne dessert le parc.' },
    { title: 'Où observer les aurores boréales', body: 'La station cite Juhannuskallio, accessible en voiture, ainsi que le secteur de Valtavaara et de Konttainen. D’août à novembre, au bord des lacs et des étangs de Kuusamo, l’aurore peut apparaître deux fois : dans le ciel et sur l’eau.' },
    { title: 'L’été : bike park et soleil de minuit', body: 'Quatre remontées desservent le Ruka Bike Park, et le secteur compte 300 km d’itinéraires de randonnée et 180 km de pistes de VTT. À Kuusamo, le soleil de minuit dure de la mi-juin à la fin du mois.' },
  ],
  whenToGo: `La saison de ski s’étend du 2 octobre 2026 au 2 mai 2027, avec du ski nocturne le vendredi de 19 h à 23 h, de décembre à la mi-avril.
Les aurores boréales demandent des nuits noires, donc de l’automne au début du printemps ; d’août à novembre, au bord des lacs, l’eau encore libre de glace peut les refléter.
Le Karhunkierros se parcourt de fin mai à octobre ; les mois les plus fréquentés sont juillet et septembre, le mois des couleurs d’automne.`,
  howToGet: `En avion jusqu’à Kuusamo (KAO) : Finnair relie Helsinki toute l’année en une heure environ, et l’hiver 2026–27 compte 9 vols directs depuis 8 villes européennes. Ruka est à 30 minutes de route de l’aéroport.
Le bus de l’aéroport attend chaque vol régulier. Réservez votre place à l’avance, au plus tard 24 heures avant ; sans réservation, vous ne montez que s’il reste de la place.
En train, prenez le train de nuit d’Helsinki à Kemijärvi, puis le bus en correspondance jusqu’à Ruka. En voiture, comptez un peu plus de 800 km depuis Helsinki par la route 5.`,
  stayTypes: [
    'Appartements dans le village sans voitures, à quelques pas des remontées ; tous les appartements du Ski-Inn RukaVillage ont un sauna et une armoire de séchage pour l’équipement de ski.',
    'Hôtels sur le fjäll, d’un hôtel de montagne skis aux pieds à des chambres avec vue sur Juhannuskallio.',
    'Chalets de vacances autour du fjäll et au bord des lacs de Kuusamo.',
    'À l’écart des pistes : un manoir au bord d’un lac, et un hôtel avec parc aquatique et spa près de la ville de Kuusamo, à 22 km.',
  ],
  siblings: [
    { name: 'Pyhä–Luosto', href: '/destinations/pyha-luosto', blurb: 'Deux villages de fjäll en Laponie orientale, à 25 km l’un de l’autre.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'La capitale de la Laponie et son principal aéroport.' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'Village de ski de Laponie occidentale, près de l’aéroport de Kittilä.' },
  ],
  anchorGroups: [
    {
      title: 'Le village de Ruka et les pistes',
      items: [
        { name: 'Scandic Rukahovi', propertyQuery: 'Scandic Rukahovi', sid: 'destination_ruka_rukahovi', note: 'Hôtel de montagne dans le village, skis aux pieds, avec une boîte de nuit.' },
        { name: 'Ski-Inn RukaVillage', propertyQuery: 'Ski-Inn RukaVillage', sid: 'destination_ruka_rukavillage', note: 'Appartements au cœur du village, tous avec sauna et armoire de séchage, certains avec jacuzzi.' },
        { name: 'Ruka Ski Chalets', propertyQuery: 'Ruka Ski Chalets', sid: 'destination_ruka_ski_chalets', note: 'À distance de marche des remontées ; les plus grands logements (46–81,5 m²) ont un sauna privatif.' },
        { name: 'Hotel Royal Ruka', propertyQuery: 'Hotel Royal Ruka', sid: 'destination_ruka_royal', note: 'Certaines chambres donnent sur Juhannuskallio ; le restaurant sert du poisson du lac Kitka et du renne.' },
        { name: 'Ski-Inn RukaValley', propertyQuery: 'Ski-Inn RukaValley', sid: 'destination_ruka_rukavalley', note: 'Chambres d’hôtel et appartements à Ruka Valley, sur le versant du fjäll côté Saarua.' },
      ],
    },
    {
      title: 'Autour de Kuusamo',
      items: [
        { name: 'House of Northern Senses', propertyQuery: 'House of Northern Senses', sid: 'destination_ruka_northern_senses', note: 'Un manoir restauré au bord d’un lac : huit chambres et suites pour 22 personnes au maximum, un sauna à fumée et un sauna au bord de l’eau.' },
        { name: 'Holiday Club Kuusamon Tropiikki', propertyQuery: 'Holiday Club Kuusamon Tropiikki', sid: 'destination_ruka_tropiikki', note: 'Près de la ville de Kuusamo, avec parc aquatique et spa, à 22 km des pistes et à 6,5 km de l’aéroport.' },
      ],
    },
  ],
  anchorProperties: [
    { name: 'Tous les hébergements de Ruka', href: HOTEL_SEARCH_FOR('fr').ruka, sid: 'destination_ruka_all_search', note: 'Parcourez les hôtels et appartements de Ruka sur Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Depuis l’aéroport de Kuusamo (KAO)', detail: 'Finnair depuis Helsinki toute l’année, environ 1 h ; pendant l’hiver 2026–27, également 9 vols directs depuis 8 villes européennes. Ruka à 30 min en voiture.' },
    { mode: 'bus', label: 'Bus de l’aéroport jusqu’au village de Ruka', detail: 'Attend chaque vol régulier. Réservez votre place à l’avance, au plus tard 24 h avant.' },
    { mode: 'train', label: 'Train de nuit jusqu’à Kemijärvi', detail: 'Tous les jours depuis Helsinki, avec un bus en correspondance pour Ruka qui attend jusqu’à 60 min un train en retard.' },
    { mode: 'car', label: 'En voiture depuis Helsinki', detail: 'Un peu plus de 800 km par la route 5. Au village, garez-vous dans le parking souterrain.' },
  ],
  carRental: {
    href: CARS_FOR('fr').fromKuusamo,
    sid: 'destination_ruka_cars_kao',
    airport: 'Prise en charge à l’aéroport de Kuusamo (KAO)',
    blurb: '30 min jusqu’à Ruka · l’aéroport de Ruka et d’Oulanka',
  },
  seoTitle: 'Ruka, Finlande : où loger ? Hôtels, appartements, chalets',
  seoDescription: 'Ruka, Finlande : appartements dans le village sans voitures, hôtel skis aux pieds, manoir au bord d’un lac, chalets autour de Kuusamo et comment y aller.',
}

const it: DestinationBody = {
  tagline: 'Un villaggio senza auto ai piedi di 41 piste a Kuusamo, appena a sud della Lapponia, con il parco nazionale di Oulanka a 30 km.',
  description: `Ruka è una località di fjäll e una stazione sciistica a Kuusamo, nella regione del Koillismaa, in Ostrobotnia settentrionale. Si trova appena fuori dalla Lapponia amministrativa, ma la neve è la stessa: il terreno resta bianco per circa 200 giorni all'anno, da fine ottobre a metà maggio.

Il comprensorio conta 41 piste e 22 impianti di risalita, e questa stagione va dal 2 ottobre 2026 al 2 maggio 2027. Il villaggio di Ruka sorge ai piedi delle piste: un centro senza auto con oltre 1.000 posti letto per i visitatori, 15 ristoranti e un parcheggio sotterraneo. La maggior parte degli alloggi della zona non sono hotel, ma appartamenti per le vacanze e chalet: a Kuusamo ce ne sono circa 7.500.`,
  facts: [
    { label: 'Piste e impianti', value: '41 · 22' },
    { label: 'Cima del fjäll', value: '492 m' },
    { label: 'Aeroporto più vicino', value: 'KAO, 30 min' },
    { label: 'Stagione sciistica 2026–27', value: '2 ott. – 2 mag.' },
  ],
  highlights: [
    { title: 'Un villaggio senza auto ai piedi delle piste', body: "Le auto restano nel parcheggio sotterraneo da 320 posti. Lo SkiBus, il bus dell'aeroporto e il bus del Karhunkierros si fermano al piazzale di inversione sul margine sud del villaggio, e la cabinovia Village-2-Valley collega il villaggio a Ruka Valley." },
    { title: 'Karhunkierros, 81 km', body: "Il sentiero escursionistico più frequentato della Finlandia parte e arriva a Saarua, nella parte est di Ruka, dove il parcheggio è gratuito. Attraversa il parco nazionale di Oulanka e si percorre da fine maggio a ottobre; in inverno il sentiero non è sicuro." },
    { title: 'Parco nazionale di Oulanka', body: 'Fondato nel 1956, si estende su 286 km² ed è a 30 km da Ruka. Con 187.400 visite nel 2024 è il più visitato dei parchi nazionali intorno a Kuusamo.' },
    { title: 'Riisitunturi e la neve sugli abeti', body: "Nel parco nazionale di Riisitunturi, a 30 km da Ruka, neve e galaverna si accumulano sugli abeti al più tardi a ottobre. In cima al fjäll c'è un rifugio aperto a tutti; il parco non è servito dai mezzi pubblici." },
    { title: "Dove guardare l'aurora boreale", body: "Il comprensorio indica Juhannuskallio, raggiungibile in auto, e la zona di Valtavaara e Konttainen. Da agosto a novembre, sulle rive dei laghi e degli stagni intorno a Kuusamo, l'aurora può comparire due volte: in cielo e sull'acqua." },
    { title: 'Estate: bike park e sole di mezzanotte', body: 'Quattro impianti servono il Ruka Bike Park, e la zona ha 300 km di sentieri escursionistici e 180 km di percorsi per mountain bike. A Kuusamo il sole di mezzanotte dura da metà giugno alla fine del mese.' },
  ],
  whenToGo: `La stagione sciistica va dal 2 ottobre 2026 al 2 maggio 2027, con sci notturno il venerdì dalle 19 alle 23 tra dicembre e metà aprile.
L'aurora boreale ha bisogno di notti buie, quindi dall'autunno all'inizio della primavera; da agosto a novembre le rive dei laghi possono rifletterla sull'acqua non ancora ghiacciata.
Il Karhunkierros si percorre da fine maggio a ottobre; luglio e settembre, con i colori dell'autunno, sono i mesi più frequentati.`,
  howToGet: `Voli per Kuusamo (KAO): Finnair vola da Helsinki tutto l'anno in circa un'ora, e nell'inverno 2026–27 ci sono 9 voli diretti da 8 città europee. Ruka è a 30 minuti d'auto dall'aeroporto.
Il bus dell'aeroporto attende ogni volo di linea. Prenoti il posto in anticipo, al più tardi 24 ore prima; senza prenotazione si sale solo se c'è posto.
In treno, prenda il notturno da Helsinki a Kemijärvi e poi il bus in coincidenza per Ruka. In auto sono poco più di 800 km da Helsinki sulla strada nazionale 5.`,
  stayTypes: [
    "Appartamenti nel villaggio senza auto, a pochi passi dagli impianti; tutti gli appartamenti dello Ski-Inn RukaVillage hanno la sauna e un armadio asciugatore per l'attrezzatura da sci.",
    'Hotel sul fjäll, da un hotel di montagna ski-in/ski-out a camere con vista su Juhannuskallio.',
    'Chalet per le vacanze intorno al fjäll e sulle rive dei laghi di Kuusamo.',
    'Lontano dalle piste: una casa padronale in riva al lago e un hotel con parco acquatico e spa poco fuori dal centro di Kuusamo, a 22 km.',
  ],
  siblings: [
    { name: 'Pyhä e Luosto', href: '/destinations/pyha-luosto', blurb: "Due villaggi di fjäll nella Lapponia orientale, a 25 km l'uno dall'altro." },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'La capitale della Lapponia e il suo aeroporto principale.' },
    { name: 'Levi', href: '/destinations/levi', blurb: "Villaggio sciistico nella Lapponia occidentale, vicino all'aeroporto di Kittilä." },
  ],
  anchorGroups: [
    {
      title: 'Il villaggio di Ruka e le piste',
      items: [
        { name: 'Scandic Rukahovi', propertyQuery: 'Scandic Rukahovi', sid: 'destination_ruka_rukahovi', note: 'Hotel di montagna nel villaggio, con accesso ski-in/ski-out e un nightclub.' },
        { name: 'Ski-Inn RukaVillage', propertyQuery: 'Ski-Inn RukaVillage', sid: 'destination_ruka_rukavillage', note: 'Appartamenti nel centro del villaggio, tutti con sauna e armadio asciugatore, alcuni con jacuzzi.' },
        { name: 'Ruka Ski Chalets', propertyQuery: 'Ruka Ski Chalets', sid: 'destination_ruka_ski_chalets', note: 'Raggiungibili a piedi dagli impianti; le unità più grandi (46–81,5 m²) hanno una sauna privata.' },
        { name: 'Hotel Royal Ruka', propertyQuery: 'Hotel Royal Ruka', sid: 'destination_ruka_royal', note: 'Alcune camere guardano verso Juhannuskallio; il ristorante serve pesce del lago Kitka e renna.' },
        { name: 'Ski-Inn RukaValley', propertyQuery: 'Ski-Inn RukaValley', sid: 'destination_ruka_rukavalley', note: "Camere d'hotel e appartamenti a Ruka Valley, sul versante del fjäll verso Saarua." },
      ],
    },
    {
      title: 'Intorno a Kuusamo',
      items: [
        { name: 'House of Northern Senses', propertyQuery: 'House of Northern Senses', sid: 'destination_ruka_northern_senses', note: 'Una casa padronale restaurata in riva al lago, con otto camere e suite per un massimo di 22 ospiti, una sauna a fumo e una sauna sul lago.' },
        { name: 'Holiday Club Kuusamon Tropiikki', propertyQuery: 'Holiday Club Kuusamon Tropiikki', sid: 'destination_ruka_tropiikki', note: "Poco fuori dal centro di Kuusamo, con parco acquatico e spa, a 22 km dalle piste e a 6,5 km dall'aeroporto." },
      ],
    },
  ],
  anchorProperties: [
    { name: 'Tutti gli alloggi di Ruka', href: HOTEL_SEARCH_FOR('it').ruka, sid: 'destination_ruka_all_search', note: 'Esplori hotel e appartamenti di Ruka su Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: "Dall'aeroporto di Kuusamo (KAO)", detail: "Finnair da Helsinki tutto l'anno, circa 1 h; nell'inverno 2026–27 anche 9 voli diretti da 8 città europee. 30 min in auto fino a Ruka." },
    { mode: 'bus', label: "Bus dell'aeroporto per il villaggio di Ruka", detail: 'Attende ogni volo di linea. Prenoti il posto in anticipo, al più tardi 24 h prima.' },
    { mode: 'train', label: 'Treno notturno per Kemijärvi', detail: 'Ogni giorno da Helsinki, con un bus in coincidenza per Ruka che attende un treno in ritardo fino a 60 min.' },
    { mode: 'car', label: 'In auto da Helsinki', detail: "Poco più di 800 km sulla strada nazionale 5. Nel villaggio lasci l'auto nel parcheggio sotterraneo." },
  ],
  carRental: {
    href: CARS_FOR('it').fromKuusamo,
    sid: 'destination_ruka_cars_kao',
    airport: "Ritiro all'aeroporto di Kuusamo (KAO)",
    blurb: "30 min fino a Ruka · l'aeroporto per Ruka e Oulanka",
  },
  seoTitle: 'Ruka, Finlandia: hotel, appartamenti e chalet a Kuusamo',
  seoDescription: 'Ruka, Finlandia: alloggi sulle piste e a Kuusamo. Appartamenti nel villaggio senza auto, hotel ski-in/ski-out, casa padronale sul lago, chalet e come arrivare.',
}

const nl: DestinationBody = {
  tagline: 'Een autovrij dorp aan de voet van 41 pistes in Kuusamo, net ten zuiden van Lapland, met het nationaal park Oulanka op 30 km.',
  description: `Ruka is een fjäll- en skigebied in Kuusamo, in de streek Koillismaa in Noord-Österbotten. Het ligt net buiten de bestuurlijke regio Lapland, maar de sneeuw is dezelfde: de grond is ongeveer 200 dagen per jaar wit, van eind oktober tot half mei.

Het skigebied heeft 41 pistes en 22 liften, en dit seizoen loopt van 2 oktober 2026 tot 2 mei 2027. Het dorp Ruka ligt aan de voet van de pistes: een autovrij centrum met ruim 1.000 bedden voor bezoekers, 15 restaurants en een ondergrondse parkeergarage. De meeste accommodatie in het gebied bestaat uit vakantieappartementen en -huisjes, niet uit hotels: Kuusamo heeft er ongeveer 7.500.`,
  facts: [
    { label: 'Pistes en liften', value: '41 · 22' },
    { label: 'Top van de fjäll', value: '492 m' },
    { label: 'Dichtst\u00ADbij\u00ADzijnde luchthaven', value: 'KAO, 30 min' },
    { label: 'Skiseizoen 2026–27', value: '2 okt. – 2 mei' },
  ],
  highlights: [
    { title: 'Een autovrij dorp bij de pistes', body: 'Auto’s staan in de ondergrondse parkeergarage met 320 plaatsen. De SkiBus, de luchthavenbus en de Karhunkierros-bus stoppen bij de keerlus aan de zuidrand van het dorp, en de gondel Village-2-Valley rijdt van het dorp naar Ruka Valley.' },
    { title: 'Karhunkierros, 81 km', body: 'De populairste wandelroute van Finland begint en eindigt in Saarua in Oost-Ruka, waar parkeren gratis is. De route loopt door het nationaal park Oulanka en wordt gelopen van eind mei tot oktober; in de winter is de route niet veilig te gebruiken.' },
    { title: 'Nationaal park Oulanka', body: 'Opgericht in 1956, 286 km² groot en 30 km van Ruka. Met 187.400 bezoeken in 2024 is Oulanka het meest bezochte nationale park rond Kuusamo.' },
    { title: 'Riisitunturi en de besneeuwde sparren', body: 'In het nationaal park Riisitunturi, 30 km van Ruka, beginnen sneeuw en rijp zich uiterlijk in oktober op de sparren op te hopen. Boven op de fjäll staat een open wildernishut; er is geen openbaar vervoer naar het park.' },
    { title: 'Waar u het noorderlicht kunt zien', body: 'Het skigebied noemt Juhannuskallio, dat met de auto bereikbaar is, en het gebied rond Valtavaara en Konttainen. Van augustus tot november kunt u het noorderlicht aan de oevers van meren en vennen rond Kuusamo twee keer zien: aan de hemel en in het water.' },
    { title: 'Zomer: bikepark en middernachtzon', body: 'Vier liften bedienen Ruka Bike Park, en het gebied heeft 300 km wandelroutes en 180 km mountainbikeroutes. In Kuusamo duurt de middernachtzon van half juni tot het eind van de maand.' },
  ],
  whenToGo: `Het skiseizoen loopt van 2 oktober 2026 tot 2 mei 2027, met avondskiën op vrijdag, van 19.00 tot 23.00 uur, van december tot half april.
Het noorderlicht vraagt om donkere nachten, dus van de herfst tot het vroege voorjaar; van augustus tot november kan het aan de oevers van meren weerspiegelen in open water.
De Karhunkierros wordt gelopen van eind mei tot oktober; juli en september zijn de drukste maanden, met in september de herfstkleuren.`,
  howToGet: `Vlieg naar Kuusamo (KAO): Finnair vliegt het hele jaar vanuit Helsinki in ongeveer een uur, en in de winter van 2026–27 zijn er 9 rechtstreekse vluchten uit 8 Europese steden. Vanaf de luchthaven is het 30 minuten rijden naar Ruka.
De luchthavenbus wacht op elke lijnvlucht. Reserveer vooraf een plaats, uiterlijk 24 uur van tevoren; zonder reservering kunt u alleen mee als er plaats is.
Per trein neemt u de nachttrein van Helsinki naar Kemijärvi en de aansluitende bus naar Ruka. Met de auto is het vanuit Helsinki iets meer dan 800 km via weg 5.`,
  stayTypes: [
    'Appartementen in het autovrije dorp, vlak bij de liften; alle appartementen van Ski-Inn RukaVillage hebben een sauna en een droogkast voor skispullen.',
    'Hotels op de fjäll, van een berghotel met ski-in, ski-out tot kamers met uitzicht op Juhannuskallio.',
    'Vakantiehuisjes rond de fjäll en aan de meren van Kuusamo.',
    'Buiten de pistes: een landhuis aan een meer, en een hotel met waterpark en spa net buiten het centrum van Kuusamo, op 22 km.',
  ],
  siblings: [
    { name: 'Pyhä–Luosto', href: '/destinations/pyha-luosto', blurb: 'Twee fjälldorpen in Oost-Lapland, 25 km van elkaar.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'De hoofdstad van Lapland en zijn belangrijkste luchthaven.' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'Skidorp in West-Lapland, bij de luchthaven van Kittilä.' },
  ],
  anchorGroups: [
    {
      title: 'Het dorp Ruka en de pistes',
      items: [
        { name: 'Scandic Rukahovi', propertyQuery: 'Scandic Rukahovi', sid: 'destination_ruka_rukahovi', note: 'Een berghotel in het dorp met ski-in, ski-out en een nachtclub.' },
        { name: 'Ski-Inn RukaVillage', propertyQuery: 'Ski-Inn RukaVillage', sid: 'destination_ruka_rukavillage', note: 'Appartementen midden in het dorp, allemaal met sauna en droogkast, sommige met jacuzzi.' },
        { name: 'Ruka Ski Chalets', propertyQuery: 'Ruka Ski Chalets', sid: 'destination_ruka_ski_chalets', note: 'Op loopafstand van de liften; de grotere chalets (46–81,5 m²) hebben een eigen sauna.' },
        { name: 'Hotel Royal Ruka', propertyQuery: 'Hotel Royal Ruka', sid: 'destination_ruka_royal', note: 'Een deel van de kamers kijkt uit op Juhannuskallio; het restaurant serveert vis uit het Kitkameer en rendier.' },
        { name: 'Ski-Inn RukaValley', propertyQuery: 'Ski-Inn RukaValley', sid: 'destination_ruka_rukavalley', note: 'Hotelkamers en appartementen in Ruka Valley, aan de Saarua-kant van de fjäll.' },
      ],
    },
    {
      title: 'Rond Kuusamo',
      items: [
        { name: 'House of Northern Senses', propertyQuery: 'House of Northern Senses', sid: 'destination_ruka_northern_senses', note: 'Een gerestaureerd landhuis aan een meer met acht kamers en suites voor maximaal 22 gasten, een rooksauna en een sauna aan het meer.' },
        { name: 'Holiday Club Kuusamon Tropiikki', propertyQuery: 'Holiday Club Kuusamon Tropiikki', sid: 'destination_ruka_tropiikki', note: 'Net buiten het centrum van Kuusamo, met waterpark en spa, 22 km van de pistes en 6,5 km van de luchthaven.' },
      ],
    },
  ],
  anchorProperties: [
    { name: 'Alle accommodaties in Ruka', href: HOTEL_SEARCH_FOR('nl').ruka, sid: 'destination_ruka_all_search', note: 'Bekijk hotels en appartementen in Ruka op Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Vanaf luchthaven Kuusamo (KAO)', detail: 'Finnair het hele jaar vanuit Helsinki, ongeveer 1 uur; in de winter van 2026–27 ook 9 rechtstreekse vluchten uit 8 Europese steden. Met de auto 30 min naar Ruka.' },
    { mode: 'bus', label: 'Luchthavenbus naar het dorp Ruka', detail: 'Wacht op elke lijnvlucht. Reserveer vooraf een plaats, uiterlijk 24 uur van tevoren.' },
    { mode: 'train', label: 'Nachttrein naar Kemijärvi', detail: 'Dagelijks vanuit Helsinki, met een busaansluiting naar Ruka die bij een vertraagde trein tot 60 min wacht.' },
    { mode: 'car', label: 'Met de auto vanuit Helsinki', detail: 'Iets meer dan 800 km via weg 5. In het dorp parkeert u in de ondergrondse garage.' },
  ],
  carRental: {
    href: CARS_FOR('nl').fromKuusamo,
    sid: 'destination_ruka_cars_kao',
    airport: 'Ophalen op luchthaven Kuusamo (KAO)',
    blurb: '30 min naar Ruka · de luchthaven voor Ruka en Oulanka',
  },
  seoTitle: 'Ruka, Finland: hotels, appartementen en huisjes in Kuusamo',
  seoDescription: 'Ruka, Finland: appartementen in het autovrije dorp bij het skigebied, een ski-in-hotel, een landhuis aan een meer en huisjes rond Kuusamo, en hoe u er komt.',
}

const zhCN: DestinationBody = {
  tagline: '庫薩莫的一座無車村莊，位於41條雪道的山腳下，在拉普蘭邊界以南不遠處，距Oulanka國家公園30公里。',
  description: `魯卡是位於庫薩莫的山區滑雪度假地，屬於北博滕區的Koillismaa一帶。它就在拉普蘭區的行政邊界之外，但雪況並無不同：每年約有200天地面被白雪覆蓋，從10月底一直到5月中旬。

滑雪場有41條雪道和22座纜車，本季從2026年10月2日開放到2027年5月2日。魯卡村就在雪道的山腳下：村中心不開放汽車通行，有超過1,000張遊客床位、15家餐廳和一座地下停車場。這一帶的住宿大多是度假公寓和木屋，而不是飯店：庫薩莫約有7,500間。`,
  facts: [
    { label: '雪道與纜車', value: '41 · 22' },
    { label: '山頂海拔', value: '492公尺' },
    { label: '最近機場', value: 'KAO，30分鐘' },
    { label: '2026–27年雪季', value: '10月2日–5月2日' },
  ],
  highlights: [
    { title: '雪道旁的無車村莊', body: '汽車停放在可容納320輛車的地下停車場。SkiBus滑雪巴士、機場巴士和健行步道巴士都停靠在村莊南緣的迴車場，Village-2-Valley纜車則從村裡通往Ruka Valley。' },
    { title: 'Karhunkierros步道，81公里', body: '芬蘭最熱門的健行步道，起點和終點都在魯卡東側的Saarua，那裡可以免費停車。步道穿越Oulanka國家公園，健行季從5月底到10月；冬季走這條步道並不安全。' },
    { title: 'Oulanka國家公園', body: '1956年成立，面積286平方公里，距魯卡30公里。2024年的造訪人次達187,400，是庫薩莫周邊國家公園中造訪人次最多的一座。' },
    { title: 'Riisitunturi與樹冰', body: '在距魯卡30公里的Riisitunturi國家公園，最晚從10月起，雪和霧凇就會在雲杉上層層堆積。山頂有一間對外開放的荒野小屋；公園沒有大眾運輸可以抵達。' },
    { title: '在哪裡看極光', body: '度假區推薦開車就能到的Juhannuskallio，以及Valtavaara和Konttainen一帶。8月到11月，庫薩莫周邊的湖岸與池畔有機會同時看到兩道極光：一道在天空，一道在水面上。' },
    { title: '夏季：單車公園與午夜陽光', body: 'Ruka Bike Park有四座纜車可用，這一帶另有300公里的健行路線和180公里的登山車路線。庫薩莫的午夜陽光從6月中旬持續到月底。' },
  ],
  whenToGo: `雪季從2026年10月2日到2027年5月2日；12月至4月中旬，每週五晚上7點到11點開放夜間滑雪。
看極光需要漆黑的夜晚，也就是秋季到早春；8月到11月，在湖岸還可能看到極光倒映在尚未結冰的水面上。
Karhunkierros步道的健行季從5月底到10月；7月和有秋色可賞的9月是遊客最多的月份。`,
  howToGet: `搭飛機到庫薩莫（KAO）：芬蘭航空全年都有赫爾辛基航班，飛行約一小時；2026–27年冬季另有來自8個歐洲城市的9個直飛航班。從機場開車到魯卡30分鐘。
機場巴士會等候每一班定期航班。請提前預訂座位，最晚在出發前24小時；沒有預訂的話，只有在還有空位時才能上車。
搭火車的話，從赫爾辛基搭夜車到凱米耶爾維，再轉乘接駁巴士到魯卡。開車則從赫爾辛基走5號公路，800公里出頭。`,
  stayTypes: [
    '無車村莊裡的公寓，走幾步就到纜車；Ski-Inn RukaVillage的公寓每間都有桑拿和滑雪裝備烘乾櫃。',
    '山上的飯店：從可直接滑雪進出的山區飯店，到看得見Juhannuskallio的客房都有。',
    '山區周圍與庫薩莫湖畔的度假木屋。',
    '遠離雪道的選擇：湖畔莊園，以及位於22公里外庫薩莫市區附近、附設水上樂園與水療中心的飯店。',
  ],
  siblings: [
    { name: 'Pyhä–Luosto', href: '/destinations/pyha-luosto', blurb: '拉普蘭東部的兩座山村，相距25公里。' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: '拉普蘭的首府與主要機場。' },
    { name: 'Levi', href: '/destinations/levi', blurb: '拉普蘭西部的滑雪村，靠近基蒂萊機場。' },
  ],
  anchorGroups: [
    {
      title: '魯卡村與雪道',
      items: [
        { name: 'Scandic Rukahovi', propertyQuery: 'Scandic Rukahovi', sid: 'destination_ruka_rukahovi', note: '位於村中的山區飯店，可直接滑雪進出，館內設有夜店。' },
        { name: 'Ski-Inn RukaVillage', propertyQuery: 'Ski-Inn RukaVillage', sid: 'destination_ruka_rukavillage', note: '位於村莊中心的公寓，每間都有桑拿和烘乾櫃，部分附按摩浴缸。' },
        { name: 'Ruka Ski Chalets', propertyQuery: 'Ruka Ski Chalets', sid: 'destination_ruka_ski_chalets', note: '步行就能到纜車；較大的房型（46–81.5 m²）附私人桑拿。' },
        { name: 'Hotel Royal Ruka', propertyQuery: 'Hotel Royal Ruka', sid: 'destination_ruka_royal', note: '部分客房可眺望Juhannuskallio；餐廳供應Kitka湖的魚和馴鹿肉。' },
        { name: 'Ski-Inn RukaValley', propertyQuery: 'Ski-Inn RukaValley', sid: 'destination_ruka_rukavalley', note: '位於Ruka Valley的飯店客房與公寓，在山的Saarua那一側。' },
      ],
    },
    {
      title: '庫薩莫周邊',
      items: [
        { name: 'House of Northern Senses', propertyQuery: 'House of Northern Senses', sid: 'destination_ruka_northern_senses', note: '修復後的湖畔莊園，共有八間客房與套房，最多可住22位客人，並有煙燻桑拿和湖畔桑拿。' },
        { name: 'Holiday Club Kuusamon Tropiikki', propertyQuery: 'Holiday Club Kuusamon Tropiikki', sid: 'destination_ruka_tropiikki', note: '位於庫薩莫市區附近，附設水上樂園與水療中心，距雪道22公里，距機場6.5公里。' },
      ],
    },
  ],
  anchorProperties: [
    { name: '魯卡全部住宿', href: HOTEL_SEARCH_FOR('zh-CN').ruka, sid: 'destination_ruka_all_search', note: '在Trip.com瀏覽魯卡的飯店與公寓。' },
  ],
  transport: [
    { mode: 'plane', label: '從庫薩莫機場（KAO）出發', detail: '芬蘭航空全年有赫爾辛基航班，約1小時；2026–27年冬季另有來自8個歐洲城市的9個直飛航班。開車到魯卡30分鐘。' },
    { mode: 'bus', label: '機場巴士到魯卡村', detail: '銜接每一班定期航班。請提前預訂座位，最晚在出發前24小時。' },
    { mode: 'train', label: '夜車到凱米耶爾維', detail: '每天從赫爾辛基發車，再轉乘開往魯卡的巴士；火車誤點時，巴士最多等候60分鐘。' },
    { mode: 'car', label: '從赫爾辛基開車', detail: '走5號公路，800公里出頭。到了村裡，請把車停在地下停車場。' },
  ],
  carRental: {
    href: CARS_FOR('zh-CN').fromKuusamo,
    sid: 'destination_ruka_cars_kao',
    airport: '庫薩莫機場（KAO）取車',
    blurb: '到魯卡30分鐘 · 前往魯卡與Oulanka的機場',
  },
  seoTitle: '魯卡住宿：芬蘭庫薩莫的飯店、公寓與木屋',
  seoDescription: '芬蘭魯卡住宿指南：庫薩莫無車滑雪村裡緊鄰雪道的公寓、可直接滑雪進出的飯店、湖畔莊園與度假木屋，以及前往魯卡的交通方式。',
}

/** Shown instead of "Finnish Lapland" (hero line, image alt, structured data): Ruka is in Kuusamo, not in Lapland. */
const RUKA_REGION: Record<Lang, string> = {
  en: 'Kuusamo, Finland',
  fi: 'Kuusamo, Suomi',
  de: 'Kuusamo, Finnland',
  ja: 'フィンランド・クーサモ',
  sv: 'Kuusamo, Finland',
  es: 'Kuusamo, Finlandia',
  'pt-BR': 'Kuusamo, Finlândia',
  ko: '핀란드 쿠사모',
  fr: 'Kuusamo, Finlande',
  it: 'Kuusamo, Finlandia',
  nl: 'Kuusamo, Finland',
  'zh-CN': '芬蘭庫薩莫',
}

export default function Ruka() {
  return (
    <DestinationPage
      slug="ruka"
      name="Ruka"
      heroImage="/images/ruka-hero.webp"
      heroSrcSet="/images/ruka-hero-800.webp 800w, /images/ruka-hero-1200.webp 1200w, /images/ruka-hero.webp 1920w, /images/ruka-hero-2560.webp 2560w"
      heroPhotoId="ruka-hero"
      region={{ label: RUKA_REGION, schema: 'North Ostrobothnia' }}
      ogImage="/og/destinations-ruka.jpg"
      seoKeywords={['ruka accommodation', 'ruka hotels', 'rukan majoitus', 'ruka finland', 'kuusamo hotels', 'ruka ski resort', 'ruka village apartments', 'karhunkierros accommodation']}
      body={{ en, fi, de, ja, es, 'pt-BR': ptBR, 'zh-CN': zhCN, ko, fr, it, nl, sv }}
    />
  )
}
