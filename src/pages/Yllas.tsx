import DestinationPage, { type DestinationBody } from '../components/DestinationPage'
import { HOTEL_SEARCH_FOR, CARS_FOR } from '../lib/affiliate'

const en: DestinationBody = {
  tagline: "Twin fells, Finland's longest ski runs, and silent forest cabins, Lapland for those who want the wilderness loud and the village quiet.",
  description: `Ylläs is the biggest fell in the Finnish ski area network by vertical drop, 464 metres, and has the longest downhill slopes in the country. It sits in Kolari and Kittilä municipalities, about 115 km north of the Arctic Circle, on the edge of Pallas-Yllästunturi National Park.

Two small villages, Ylläsjärvi on the south side and Äkäslompolo on the north, book-end the fell. There is no single resort core: premium cabins are spread through the forest and along the lakes, giving Ylläs its reputation as the calmer, more nature-forward alternative to Levi.`,
  facts: [
    { label: 'Log cabins from', value: '€150/night' },
    { label: 'Hotels from', value: '€100/night' },
    { label: 'Nearest airport', value: 'KTT 50 min' },
    { label: 'Vertical drop', value: '464 m' },
  ],
  highlights: [
    { title: "Finland's longest downhill runs", body: 'The 3 km front-side run on Yllästunturi drops from the treeless fell top through pine forest to the valley. Rare in Finland, most resorts run 1 km.' },
    { title: '330 km of cross-country tracks', body: 'Groomed classic and skating tracks thread the national park and connect Ylläsjärvi, Äkäslompolo and Pallas.' },
    { title: 'Pallas-Yllästunturi National Park', body: "Finland's third-largest national park, old-growth forest, seven named fells, and some of Europe's cleanest measured air." },
    { title: 'Silent forest cabins', body: 'Properties here are deliberately spaced apart. Your neighbour, if you have one, is a few hundred metres of pine through a clearing.' },
    { title: 'Äkäslompolo aurora shore', body: 'The lake at Äkäslompolo faces north, clear horizon, no village lights on the far side, strong aurora viewing from the ice.' },
    { title: 'Summer fell hiking', body: 'The fell-top routes between Ylläs and Pallas are boardwalked above treeline, open July to September with midnight-sun daylight.' },
  ],
  whenToGo: `December – March is the deep-winter window with reliable snow and full aurora season.
Early April offers the "kevättalvi", long daylight hours, bright snow, still full ski conditions.
September brings ruska autumn colours; July is midnight sun and hiking.`,
  howToGet: `Fly into Kittilä (KTT), 50 min transfer to Ylläs.
Rovaniemi airport (RVN) is an alternative, 2 hr drive.
Kolari train station, 40 min away, receives overnight trains from Helsinki with car-carrier service.`,
  stayTypes: [
    'Log cabins on the forest slopes of the fell, 4–8 guests, wood-burning sauna, fireplace, often with hot tub.',
    'Lakeside villas on Äkäslompolo and Kesänkijärvi, private shore, ice-swim hole in winter.',
    'Ski-in chalets at Äkäslompolo and Ylläsjärvi, direct slope access, gear storage, smaller crowds than Levi.',
    'Designer wilderness retreats inside the national park buffer, architect-built, fully off-grid feel with full comfort.',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: 'Bigger village, more restaurants, faster lifts.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Gateway to UKK wilderness further north.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'The regional capital and Santa Claus Village.' },
  ],
  anchorProperties: [
    { name: 'Lapland Hotels Saaga', propertyQuery: 'Lapland Hotels Saaga', sid: 'destination_yllas_saaga', note: 'Spa hotel in Ylläsjärvi on the south side, pool area and the gondola 300 m away.' },
    { name: 'Lapland Hotels Ylläskaltio', propertyQuery: 'Lapland Hotels Ylläskaltio', sid: 'destination_yllas_yllaskaltio', note: 'Sauna-equipped rooms in Äkäslompolo village, panoramic restaurant, ski resort 4.5 km.' },
    { name: 'Harriniva (Muonio)', propertyQuery: 'Harriniva', sid: 'destination_yllas_harriniva', note: '40 min from Ylläs, husky safari packages and lakeside cabins.' },
    { name: 'All Ylläs accommodation', href: HOTEL_SEARCH_FOR('en').yllas, sid: 'destination_yllas_all_search', note: 'Browse every Ylläs cabin and chalet on Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'From Kittilä Airport (KTT)', detail: 'Same airport as Levi. 50 km / 45 min to Äkäslompolo (north Ylläs), 35 km / 30 min to Ylläsjärvi (south Ylläs).' },
    { mode: 'bus', label: 'KTT airport bus to Ylläs', detail: '€25–30 one-way · 50 min · meets winter flights.' },
    { mode: 'train', label: 'Overnight train to Kolari', detail: 'VR sleeper from Helsinki ~€90 · 35 km / 35 min transfer to Ylläs by bus or taxi.' },
    { mode: 'car', label: 'Taxi from KTT', detail: '€100–120 to Ylläs village, usually only worth it for groups of 3+.' },
  ],
  carRental: {
    href: CARS_FOR('en').fromKittila,
    sid: 'destination_yllas_cars_ktt',
    airport: 'Pickup at Kittilä Airport (KTT)',
    blurb: '50 min to Ylläs · much cheaper than €100+ taxi for groups of 3+',
  },
  dayPlan: [
    { day: '01', title: 'Land · cabin · sauna', body: 'KTT or Kolari arrival, transfer to Äkäslompolo or Ylläsjärvi. Light dinner at the cabin, sauna, stretch from the flight. No agenda.' },
    { day: '02', title: 'Cross-country ski day', body: "Ylläs has Finland's longest cross-country trail network (330 km). Ski the marked Aakenusjärvi loop or ride the gondola up Yllästunturi for downhill. Pack a thermos." },
    { day: '03', title: 'National park hike + reindeer', body: "Snowshoe inside Pallas-Yllästunturi park. Visit a reindeer farm, Lainio Snow Village reindeer or Aakenus farm. Aurora-hunt from the cabin's north shore." },
    { day: '04', title: 'Slow morning · departure', body: 'Last sauna, breakfast, transfer back. Easter-week travellers: extend by a day to ski peak-week sun.' },
  ],
  seoTitle: 'Ylläs Accommodation, Log Cabins & Chalets from €150/Night',
  seoDescription: 'Where to stay in Ylläs, Lapland: log cabins from €150/night, lakeside villas and ski-in chalets on the edge of Pallas-Yllästunturi National Park.',
}

const fi: DestinationBody = {
  tagline: 'Kaksi tunturia, Suomen pisimmät rinteet ja hiljaiset metsämökit, Lappi heille jotka haluavat erämaan äänet ja kylähiljaisuuden.',
  description: `Ylläs on Suomen hiihtokeskusten korkein tunturi pudotukseltaan, 464 metriä, ja sillä on maan pisimmät alamäkirinteet. Se sijaitsee Kolarin ja Kittilän kunnissa, noin 115 km napapiirin pohjoispuolella, Pallas-Yllästunturin kansallispuiston kupeessa.

Kaksi pientä kylää, Ylläsjärvi etelässä ja Äkäslompolo pohjoisessa, kehystävät tunturin. Yhtenäistä keskustaa ei ole: premium-mökit ovat hajallaan metsässä ja järvien varsilla, mikä antaa Ylläkselle maineen rauhallisempana, luontopainotteisempana vaihtoehtona Levin rinnalla.`,
  facts: [
    { label: 'Hirsimökit alkaen', value: '150 €/yö' },
    { label: 'Hotellit alkaen', value: '100 €/yö' },
    { label: 'Lähin lentokenttä', value: 'KTT 50 min' },
    { label: 'Pudotuskorkeus', value: '464 m' },
  ],
  highlights: [
    { title: 'Suomen pisimmät alamäkirinteet', body: 'Yllästunturin 3 kilometrin eturinne laskee puuttomalta huipulta männikön läpi laaksoon. Harvinaista Suomessa, useimmissa keskuksissa rinteet ovat 1 km.' },
    { title: '330 km latuverkkoa', body: 'Hoidetut perinteen ja luistelun ladut kulkevat kansallispuiston läpi ja yhdistävät Ylläsjärven, Äkäslompolon ja Pallaksen.' },
    { title: 'Pallas-Yllästunturin kansallispuisto', body: 'Suomen kolmanneksi suurin kansallispuisto, ikimetsää, seitsemän nimettyä tunturia ja Euroopan puhtainta mitattua ilmaa.' },
    { title: 'Hiljaiset metsämökit', body: 'Kohteet on tarkoituksella sijoitettu kauas toisistaan. Naapurisi, jos sellaista on, on muutaman sadan metrin männikön takana aukealla.' },
    { title: 'Äkäslompolon revontulirantakaista', body: 'Äkäslompolon järvi avautuu pohjoiseen, selkeä horisontti, ei kylävaloja vastarannalla, vahva revontulinäkyvyys jäältä.' },
    { title: 'Kesätunturipatikointi', body: 'Tunturireitit Ylläksen ja Pallaksen välillä ovat pitkospuilla puurajan yläpuolella, avoinna heinäkuusta syyskuuhun keskiyön auringon valossa.' },
  ],
  whenToGo: `Joulukuu–maaliskuu on syvätalven ikkuna luotettavalla lumella ja täydellä revontulisesongilla.
Huhtikuun alku tarjoaa "kevättalven", pitkät päivänvalon tunnit, kirkas lumi, vielä täydet lasketteluolosuhteet.
Syyskuu tuo ruskan; heinäkuu on keskiyön aurinkoa ja patikointia.`,
  howToGet: `Lennä Kittilään (KTT), 50 min kuljetus Ylläkselle.
Rovaniemen lentokenttä (RVN) on vaihtoehto, 2 tunnin ajomatka.
Kolarin juna-asema, 40 min päässä, vastaanottaa yöjunat Helsingistä autonkuljetuspalvelulla.`,
  stayTypes: [
    'Hirsimökit tunturin metsärinteillä, 4–8 vierasta, puusauna, takka, usein paljakka.',
    'Rantavillat Äkäslompolossa ja Kesänkijärvellä, yksityinen ranta, avantopaikka talvella.',
    'Rinneasunnot Äkäslompolossa ja Ylläsjärvellä, suora rinnepääsy, varustetilat, vähemmän väkeä kuin Levillä.',
    'Design-erämaakohteet kansallispuiston vyöhykkeellä, arkkitehtien suunnittelemia, off-grid-tunnelma täydellä mukavuudella.',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: 'Isompi kylä, enemmän ravintoloita, nopeammat hissit.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Portti UKK-erämaahan pohjoisempana.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'Lapin pääkaupunki ja Joulupukin pajakylä.' },
  ],
  anchorProperties: [
    { name: 'Lapland Hotels Saaga', propertyQuery: 'Lapland Hotels Saaga', sid: 'destination_yllas_saaga', note: 'Kylpylähotelli Ylläsjärvellä etelärinteiden puolella, allasosasto ja gondoli 300 m päässä.' },
    { name: 'Lapland Hotels Ylläskaltio', propertyQuery: 'Lapland Hotels Ylläskaltio', sid: 'destination_yllas_yllaskaltio', note: 'Saunallisia hotellihuoneita Äkäslompolon kylässä, panoraamaravintola, hiihtokeskus 4,5 km.' },
    { name: 'Harriniva (Muonio)', propertyQuery: 'Harriniva', sid: 'destination_yllas_harriniva', note: '40 min Ylläkseltä, husky-safari-paketit ja rantamökit.' },
    { name: 'Kaikki Ylläksen majoitukset', href: HOTEL_SEARCH_FOR('fi').yllas, sid: 'destination_yllas_all_search', note: 'Selaa kaikki Ylläksen mökit ja chalet-asunnot Sembossa.' },
  ],
  transport: [
    { mode: 'plane', label: 'Kittilän lentokentältä (KTT)', detail: 'Sama lentokenttä kuin Levillä. 50 km / 45 min Äkäslompoloon (pohjois-Ylläs), 35 km / 30 min Ylläsjärvelle (etelä-Ylläs).' },
    { mode: 'bus', label: 'KTT-lentokenttäbussi Ylläkselle', detail: '25–30 € yhteen suuntaan · 50 min · talvilennoilla.' },
    { mode: 'train', label: 'Yöjuna Kolariin', detail: 'VR:n makuuvaunu Helsingistä ~90 € · 35 km / 35 min kuljetus Ylläkselle bussilla tai taksilla.' },
    { mode: 'car', label: 'Taksi KTT:ltä', detail: '100–120 € Ylläksen kylälle, yleensä vain 3+ hengen ryhmille kannattavaa.' },
  ],
  carRental: {
    href: CARS_FOR('fi').fromKittila,
    sid: 'destination_yllas_cars_ktt',
    airport: 'Nouto Kittilän lentokentältä (KTT)',
    blurb: '50 min Ylläkselle · paljon halvempi kuin yli 100 € taksi 3+ ryhmille',
  },
  dayPlan: [
    { day: '01', title: 'Lasku · mökki · sauna', body: 'KTT- tai Kolari-saapuminen, kuljetus Äkäslompoloon tai Ylläsjärvelle. Kevyt illallinen mökillä, sauna, venyttely lennon jälkeen. Ei aikataulua.' },
    { day: '02', title: 'Maastohiihtopäivä', body: 'Ylläksellä on Suomen pisin latuverkko (330 km). Hiihdä merkitty Aakenusjärven lenkki tai nouse gondolilla Yllästunturille laskettelemaan. Pakkaa termospullo.' },
    { day: '03', title: 'Kansallispuistopatikointi + porot', body: 'Lumikenkäile Pallas-Yllästunturin puistossa. Käy porotilalla, Lainion Lumikylän porot tai Aakenuksen tila. Revontulia mökin pohjoisrannalta.' },
    { day: '04', title: 'Rauhallinen aamu · lähtö', body: 'Viimeinen sauna, aamiainen, kuljetus takaisin. Pääsiäisviikon matkailijat: pidennä päivällä laskettelemaan kevätaurinkoa.' },
  ],
  seoTitle: 'Ylläksen majoitus, hirsimökit ja chaletit alkaen 150 €/yö',
  seoDescription: 'Missä yöpyä Ylläksellä: hirsimökit alkaen 150 €/yö, rantavillat ja rinneasunnot Pallas-Yllästunturin kansallispuiston kupeessa. Suora varaus.',
}

const de: DestinationBody = {
  tagline: 'Zwillings-Fjälls, Finnlands längste Skiabfahrten und stille Waldhütten, Lappland für alle, die Wildnis laut und Dorfbetrieb leise wollen.',
  description: `Ylläs ist mit 464 Metern Höhenunterschied das größte Fjäll im finnischen Skigebietsnetz und hat die längsten Abfahrtspisten des Landes. Es liegt in den Gemeinden Kolari und Kittilä, rund 115 km nördlich des Polarkreises, am Rande des Pallas-Yllästunturi-Nationalparks.

Zwei kleine Dörfer, Ylläsjärvi im Süden und Äkäslompolo im Norden, flankieren das Fjäll. Es gibt keinen zentralen Resort-Kern: Premium-Hütten verteilen sich durch den Wald und entlang der Seen, was Ylläs den Ruf als ruhigere, naturnähere Alternative zu Levi einbringt.`,
  facts: [
    { label: 'Blockhütten ab', value: '150 €/Nacht' },
    { label: 'Hotels ab', value: '100 €/Nacht' },
    { label: 'Nächster Flughafen', value: 'KTT 50 min' },
    { label: 'Höhenunterschied', value: '464 m' },
  ],
  highlights: [
    { title: 'Finnlands längste Abfahrten', body: 'Die 3 km lange Frontpiste am Yllästunturi fällt vom baumlosen Fjäll-Gipfel durch Kiefernwald ins Tal. Selten in Finnland, die meisten Resorts haben 1-km-Pisten.' },
    { title: '330 km Langlaufloipen', body: 'Gespurte klassische und Skating-Loipen ziehen durch den Nationalpark und verbinden Ylläsjärvi, Äkäslompolo und Pallas.' },
    { title: 'Pallas-Yllästunturi-Nationalpark', body: 'Finnlands drittgrößter Nationalpark, Urwald, sieben benannte Fjälls und eine der saubersten gemessenen Luftqualitäten Europas.' },
    { title: 'Stille Waldhütten', body: 'Unterkünfte sind hier bewusst weit auseinander gesetzt. Ihr Nachbar, wenn Sie einen haben, ist ein paar hundert Meter Kiefer und Lichtung entfernt.' },
    { title: 'Polarlicht-Ufer Äkäslompolo', body: 'Der See bei Äkäslompolo zeigt nach Norden, klarer Horizont, keine Dorflichter auf der anderen Seite, starke Polarlicht-Sicht vom Eis aus.' },
    { title: 'Sommer-Fjäll-Wandern', body: 'Die Fjäll-Gipfelrouten zwischen Ylläs und Pallas verlaufen oberhalb der Baumgrenze auf Bohlenwegen, geöffnet von Juli bis September im Mitternachtssonnen-Licht.' },
  ],
  whenToGo: `Dezember – März ist das tiefwinterliche Fenster mit zuverlässigem Schnee und voller Polarlicht-Saison.
Anfang April bietet den „Frühjahrswinter", lange Tageslichtstunden, helle Schneedecke, noch volle Ski-Bedingungen.
September bringt Ruska-Herbstfarben; Juli ist Mitternachtssonne und Wandern.`,
  howToGet: `Fliegen Sie nach Kittilä (KTT), 50 min Transfer nach Ylläs.
Flughafen Rovaniemi (RVN) ist eine Alternative, 2 h Fahrt.
Bahnhof Kolari, 40 min entfernt, empfängt die Nachtzüge aus Helsinki mit Autotransport-Service.`,
  stayTypes: [
    'Blockhütten an den bewaldeten Fjäll-Hängen, 4–8 Gäste, holzbeheizte Sauna, Kamin, oft mit Whirlpool.',
    'See-Villen an Äkäslompolo und Kesänkijärvi, privates Ufer, Eisloch im Winter.',
    'Ski-in-Chalets in Äkäslompolo und Ylläsjärvi, direkter Pistenzugang, Ausrüstungsräume, weniger Andrang als in Levi.',
    'Designer-Wildnis-Rückzugsorte in der Pufferzone des Nationalparks, architektonisch gebaut, Off-grid-Gefühl bei vollem Komfort.',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: 'Größeres Dorf, mehr Restaurants, schnellere Lifte.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Tor zur UKK-Wildnis weiter nördlich.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'Die Regionalhauptstadt und das Weihnachtsmanndorf.' },
  ],
  anchorProperties: [
    { name: 'Lapland Hotels Saaga', propertyQuery: 'Lapland Hotels Saaga', sid: 'destination_yllas_saaga', note: 'Spa-Hotel in Ylläsjärvi auf der Südseite, Badelandschaft und Gondel 300 m entfernt.' },
    { name: 'Lapland Hotels Ylläskaltio', propertyQuery: 'Lapland Hotels Ylläskaltio', sid: 'destination_yllas_yllaskaltio', note: 'Zimmer mit eigener Sauna im Dorf Äkäslompolo, Panoramarestaurant, Skigebiet 4,5 km.' },
    { name: 'Harriniva (Muonio)', propertyQuery: 'Harriniva', sid: 'destination_yllas_harriniva', note: '40 min von Ylläs, Husky-Safari-Pakete und Seehütten.' },
    { name: 'Alle Ylläs-Unterkünfte', href: HOTEL_SEARCH_FOR('de').yllas, sid: 'destination_yllas_all_search', note: 'Stöbern Sie in allen Ylläs-Hütten und Chalets auf Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Ab Flughafen Kittilä (KTT)', detail: 'Derselbe Flughafen wie Levi. 50 km / 45 min nach Äkäslompolo (Nord-Ylläs), 35 km / 30 min nach Ylläsjärvi (Süd-Ylläs).' },
    { mode: 'bus', label: 'KTT-Flughafenbus nach Ylläs', detail: '25–30 € einfach · 50 min · zu Winterflügen.' },
    { mode: 'train', label: 'Nachtzug nach Kolari', detail: 'VR-Schlafwagen ab Helsinki ~90 € · 35 km / 35 min Transfer per Bus oder Taxi nach Ylläs.' },
    { mode: 'car', label: 'Taxi ab KTT', detail: '100–120 € ins Ylläs-Dorf, meist nur für Gruppen ab 3 Personen sinnvoll.' },
  ],
  carRental: {
    href: CARS_FOR('de').fromKittila,
    sid: 'destination_yllas_cars_ktt',
    airport: 'Abholung am Flughafen Kittilä (KTT)',
    blurb: '50 min nach Ylläs · deutlich günstiger als ein 100 €+ Taxi für Gruppen ab 3',
  },
  dayPlan: [
    { day: '01', title: 'Landung · Hütte · Sauna', body: 'Ankunft KTT oder Kolari, Transfer nach Äkäslompolo oder Ylläsjärvi. Leichtes Abendessen in der Hütte, Sauna, Dehnen nach dem Flug. Kein Programm.' },
    { day: '02', title: 'Langlauftag', body: 'Ylläs hat Finnlands längstes Langlauf-Loipennetz (330 km). Fahren Sie die markierte Aakenusjärvi-Schleife oder nehmen Sie die Gondel auf den Yllästunturi für die Abfahrt. Thermoskanne einpacken.' },
    { day: '03', title: 'Nationalpark-Wanderung + Rentiere', body: 'Schneeschuhwanderung im Pallas-Yllästunturi-Park. Besuch einer Rentierfarm, Lainio Snow Village oder Aakenus-Hof. Polarlicht-Jagd vom Nordufer der Hütte.' },
    { day: '04', title: 'Ruhiger Morgen · Abreise', body: 'Letzte Sauna, Frühstück, Rücktransfer. Osterwochen-Reisende: einen Tag verlängern, um die Frühjahrssonne zu fahren.' },
  ],
  seoTitle: 'Ylläs-Unterkünfte, Blockhütten & Chalets ab 150 €/Nacht',
  seoDescription: 'Wo Sie in Ylläs übernachten: Blockhütten ab 150 €/Nacht, See-Villen und Ski-in-Chalets am Rande des Pallas-Yllästunturi-Nationalparks. Direkte Buchung.',
}

const ko: DestinationBody = {
  tagline: '쌍둥이 봉우리, 핀란드에서 가장 긴 슬로프, 그리고 고요한 숲속 캐빈. 야생은 크게, 마을은 조용한 라플란드.',
  description: `일래스는 핀란드 스키 리조트 네트워크 가운데 표고차(464m)가 가장 큰 봉우리이자, 핀란드에서 가장 긴 다운힐 슬로프를 보유한 산입니다. 콜라리·키틸레 자치체에 걸쳐 있으며, 북극권에서 약 115km 북쪽, Pallas-Yllästunturi 국립공원 자락에 자리합니다.

남쪽의 Ylläsjärvi, 북쪽의 Äkäslompolo. 두 개의 작은 마을이 봉우리를 사이에 두고 마주봅니다. 단일 리조트 단지는 없으며, 프리미엄 캐빈은 숲과 호숫가에 흩어져 있어 일래스에 '레비보다 조용하고 자연 중심적인 대안'이라는 평판을 안깁니다.`,
  facts: [
    { label: '통나무 캐빈 1박', value: '150€부터' },
    { label: '호텔 1박', value: '100€부터' },
    { label: '가장 가까운 공항', value: 'KTT 50분' },
    { label: '표고차', value: '464m' },
  ],
  highlights: [
    { title: '핀란드에서 가장 긴 다운힐 코스', body: 'Yllästunturi 정면의 3km 슬로프는 나무 한 그루 없는 봉우리 정상에서 소나무 숲을 가르며 계곡까지 이어집니다. 대부분의 핀란드 리조트가 1km 수준임을 감안하면 매우 드문 길이입니다.' },
    { title: '330km 크로스컨트리 트랙', body: '클래식과 스케이팅 트랙이 국립공원을 가로지르며 Ylläsjärvi, Äkäslompolo, 그리고 Pallas를 잇습니다.' },
    { title: 'Pallas-Yllästunturi 국립공원', body: '핀란드에서 세 번째로 큰 국립공원. 원시림, 이름을 가진 봉우리 일곱, 그리고 유럽에서 가장 깨끗한 측정 공기.' },
    { title: '고요한 숲속 캐빈', body: '숙소는 의도적으로 서로 멀리 떨어져 있습니다. 이웃이 있다 해도 수백 미터의 소나무 숲 너머의 빈터에 있을 뿐입니다.' },
    { title: 'Äkäslompolo의 오로라 호반', body: 'Äkäslompolo 호수는 정북향입니다. 깨끗한 지평선, 건너편에 마을 불빛이 없어 얼음 위에서 강력한 오로라 관측이 가능합니다.' },
    { title: '여름의 봉우리 트레킹', body: '일래스와 팔라스를 잇는 봉우리 능선 길은 숲 한계선 위로 데크가 놓여 있어, 7–9월 백야의 빛 속에 열립니다.' },
  ],
  whenToGo: `12월–3월은 안정적인 적설과 풀 오로라 시즌이 펼쳐지는 한겨울 윈도우입니다.
4월 초는 "kevättalvi(봄겨울)". 긴 햇빛, 눈부신 설질, 여전히 만족스러운 스키 컨디션이 공존합니다.
9월은 ruska 단풍, 7월은 백야와 하이킹의 계절입니다.`,
  howToGet: `키틸레(KTT)로 비행한 뒤 일래스까지 50분 트랜스퍼.
로바니에미 공항(RVN)도 대안입니다. 차로 2시간.
40분 거리의 Kolari 기차역은 헬싱키발 야간 열차와 자동차 운송 서비스를 모두 받아들입니다.`,
  stayTypes: [
    '봉우리 숲 사면의 통나무 캐빈. 4–8인용, 장작 사우나, 벽난로, 종종 핫텁까지.',
    'Äkäslompolo와 Kesänkijärvi 호숫가 빌라. 전용 호반, 겨울철 얼음 입수 구멍 포함.',
    'Äkäslompolo와 Ylläsjärvi의 스키 인 샬레. 슬로프 직접 연결, 장비 보관 공간, 레비보다 적은 인파.',
    '국립공원 완충 지대 안의 디자이너 윌더니스 리트리트. 건축가가 설계한 오프그리드 감성에 완벽한 편의를 더한 형태.',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: '더 큰 마을, 더 많은 레스토랑, 더 빠른 리프트.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: '더 북쪽 UKK 야생으로 향하는 관문.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: '라플란드의 중심 도시이자 산타클로스 마을.' },
  ],
  anchorProperties: [
    { name: 'Lapland Hotels Saaga', propertyQuery: 'Lapland Hotels Saaga', sid: 'destination_yllas_saaga', note: '남쪽 윌래스야르비의 스파 호텔. 수영장 구역이 있고 곤돌라까지 300m.' },
    { name: 'Lapland Hotels Ylläskaltio', propertyQuery: 'Lapland Hotels Ylläskaltio', sid: 'destination_yllas_yllaskaltio', note: '애캐슬롬폴로 마을의 사우나 완비 객실, 파노라마 레스토랑, 스키장까지 4.5km.' },
    { name: 'Harriniva (Muonio)', propertyQuery: 'Harriniva', sid: 'destination_yllas_harriniva', note: '일래스에서 40분. 허스키 사파리 패키지와 호숫가 캐빈.' },
    { name: '일래스 전체 숙소', href: HOTEL_SEARCH_FOR('ko').yllas, sid: 'destination_yllas_all_search', note: 'Trip.com에서 일래스 캐빈과 샬레 전체를 비교하세요.' },
  ],
  transport: [
    { mode: 'plane', label: '키틸레 공항(KTT)에서', detail: '레비와 같은 공항입니다. Äkäslompolo(북 일래스)까지 50km / 45분, Ylläsjärvi(남 일래스)까지 35km / 30분.' },
    { mode: 'bus', label: 'KTT 공항버스(일래스행)', detail: '편도 25–30€ · 50분 · 겨울 항공편에 맞춰 운행.' },
    { mode: 'train', label: 'Kolari행 야간 열차', detail: '헬싱키발 VR 침대차 약 90€ · 일래스까지 버스 또는 택시로 35km / 35분.' },
    { mode: 'car', label: 'KTT 택시', detail: '일래스 마을까지 100–120€. 3인 이상 그룹일 때 합리적입니다.' },
  ],
  carRental: {
    href: CARS_FOR('ko').fromKittila,
    sid: 'destination_yllas_cars_ktt',
    airport: '키틸레 공항(KTT) 픽업',
    blurb: '일래스까지 50분 · 3인 이상이면 100€+ 택시보다 훨씬 저렴',
  },
  dayPlan: [
    { day: '01', title: '도착 · 캐빈 · 사우나', body: 'KTT 또는 Kolari 도착 후 Äkäslompolo나 Ylläsjärvi로 트랜스퍼. 캐빈에서 가벼운 저녁, 사우나, 비행 후 스트레칭. 일정은 비워두세요.' },
    { day: '02', title: '크로스컨트리 스키 데이', body: '일래스는 핀란드에서 가장 긴 크로스컨트리 망(330km)을 보유합니다. 표시된 Aakenusjärvi 루프를 타거나 곤돌라로 Yllästunturi 정상에 올라 다운힐을 즐겨 보세요. 보온병은 필수입니다.' },
    { day: '03', title: '국립공원 하이킹 + 순록', body: 'Pallas-Yllästunturi 공원에서 스노슈잉. 순록 농장 방문. Lainio Snow Village의 순록 또는 Aakenus 농장. 캐빈 북쪽 호반에서 오로라 헌팅.' },
    { day: '04', title: '느긋한 아침 · 출발', body: '마지막 사우나, 아침식사, 트랜스퍼. 부활절 연휴 여행자라면 하루 더 머물러 봄 햇살 속 스키를 만끽하세요.' },
  ],
  seoTitle: '일래스 숙박. 통나무 캐빈과 샬레 1박 150€부터',
  seoDescription: '핀란드 라플란드 일래스 숙박 가이드: Pallas-Yllästunturi 국립공원 자락의 통나무 캐빈 1박 150€부터, 호숫가 빌라와 스키 인 샬레. 전용 사우나, 오로라가 보이는 호반, 직접 예약.',
}

const fr: DestinationBody = {
  tagline: "Fjells jumeaux, pistes les plus longues de Finlande et chalets de forêt silencieux, la Laponie pour qui veut la nature bruyante et le village discret.",
  description: `Ylläs est le fjell le plus haut du réseau finlandais de domaines skiables, 464 mètres de dénivelé, et offre les plus longues pistes de descente du pays. Il se trouve dans les communes de Kolari et Kittilä, à environ 115 km au nord du cercle polaire, en lisière du parc national Pallas-Yllästunturi.

Deux petits villages, Ylläsjärvi côté sud et Äkäslompolo côté nord, encadrent le fjell. Pas de noyau-station unique : les chalets premium s'éparpillent dans la forêt et le long des lacs, ce qui vaut à Ylläs sa réputation d'alternative plus calme et plus proche de la nature que Levi.`,
  facts: [
    { label: 'Chalets en rondins dès', value: '150 €/nuit' },
    { label: 'Hôtels dès', value: '100 €/nuit' },
    { label: 'Aéroport le plus proche', value: 'KTT 50 min' },
    { label: 'Dénivelé', value: '464 m' },
  ],
  highlights: [
    { title: 'Les pistes les plus longues de Finlande', body: 'La piste de 3 km du versant avant de l\'Yllästunturi plonge du sommet nu du fjell à travers la pinède jusqu\'à la vallée. Rare en Finlande, la plupart des stations tournent autour de 1 km.' },
    { title: '330 km de pistes de ski de fond', body: 'Des pistes classiques et skating damées traversent le parc national et relient Ylläsjärvi, Äkäslompolo et Pallas.' },
    { title: 'Parc national Pallas-Yllästunturi', body: 'Le troisième plus grand parc national de Finlande, forêt primaire, sept fjells nommés et l\'un des airs les plus purs d\'Europe.' },
    { title: 'Chalets de forêt silencieux', body: 'Les hébergements sont volontairement espacés. Votre voisin, si vous en avez un, se trouve à quelques centaines de mètres de pinède au-delà d\'une clairière.' },
    { title: 'Rive aurores d\'Äkäslompolo', body: 'Le lac d\'Äkäslompolo regarde plein nord, horizon dégagé, aucune lumière de village sur la rive d\'en face, observation des aurores puissante depuis la glace.' },
    { title: 'Randonnée d\'été sur les fjells', body: 'Les itinéraires de crête entre Ylläs et Pallas suivent des caillebotis au-dessus de la limite des arbres, ouverts de juillet à septembre sous le soleil de minuit.' },
  ],
  whenToGo: `Décembre à mars constitue la fenêtre de plein hiver avec neige fiable et pleine saison aurores.
Début avril offre le « kevättalvi », longues heures de jour, neige éclatante, conditions de ski encore au sommet.
Septembre amène la ruska, l\'or de l\'automne ; juillet est le soleil de minuit et la randonnée.`,
  howToGet: `Vol vers Kittilä (KTT), 50 min de transfert vers Ylläs.
L\'aéroport de Rovaniemi (RVN) est une alternative, 2 h de route.
La gare de Kolari, à 40 min, accueille les trains de nuit depuis Helsinki avec service auto-train.`,
  stayTypes: [
    'Chalets en rondins sur les pentes boisées du fjell, 4 à 8 voyageurs, sauna au bois, cheminée, souvent bain nordique.',
    'Villas au bord des lacs Äkäslompolo et Kesänkijärvi, rive privée, trou pour la baignade glacée en hiver.',
    'Chalets ski-in à Äkäslompolo et Ylläsjärvi, accès direct aux pistes, locaux à matériel, moins de monde qu\'à Levi.',
    'Refuges design dans la zone tampon du parc national, signés par des architectes, sensation off-grid avec confort intégral.',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: 'Village plus grand, plus de restaurants, remontées plus rapides.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Porte de la nature sauvage UKK plus au nord.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'La capitale régionale et le village du Père Noël.' },
  ],
  anchorProperties: [
    { name: 'Lapland Hotels Saaga', propertyQuery: 'Lapland Hotels Saaga', sid: 'destination_yllas_saaga', note: 'Hôtel spa à Ylläsjärvi, côté sud, espace piscine et télécabine à 300 m.' },
    { name: 'Lapland Hotels Ylläskaltio', propertyQuery: 'Lapland Hotels Ylläskaltio', sid: 'destination_yllas_yllaskaltio', note: "Chambres avec sauna au village d'Äkäslompolo, restaurant panoramique, domaine skiable à 4,5 km." },
    { name: 'Harriniva (Muonio)', propertyQuery: 'Harriniva', sid: 'destination_yllas_harriniva', note: 'À 40 min d\'Ylläs, formules safari husky et chalets au bord du lac.' },
    { name: 'Tous les hébergements d\'Ylläs', href: HOTEL_SEARCH_FOR('fr').yllas, sid: 'destination_yllas_all_search', note: 'Parcourez tous les chalets et villas d\'Ylläs sur Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: "Depuis l'aéroport de Kittilä (KTT)", detail: 'Même aéroport que Levi. 50 km / 45 min jusqu\'à Äkäslompolo (Ylläs nord), 35 km / 30 min jusqu\'à Ylläsjärvi (Ylläs sud).' },
    { mode: 'bus', label: 'Bus aéroport KTT vers Ylläs', detail: '25 à 30 € l\'aller · 50 min · sur les vols hivernaux.' },
    { mode: 'train', label: 'Train de nuit pour Kolari', detail: 'Wagon-lit VR depuis Helsinki ~90 € · 35 km / 35 min en bus ou taxi jusqu\'à Ylläs.' },
    { mode: 'car', label: 'Taxi depuis KTT', detail: '100 à 120 € jusqu\'au village d\'Ylläs, généralement rentable seulement à partir de trois voyageurs.' },
  ],
  carRental: {
    href: CARS_FOR('fr').fromKittila,
    sid: 'destination_yllas_cars_ktt',
    airport: 'Prise en charge à l\'aéroport de Kittilä (KTT)',
    blurb: '50 min jusqu\'à Ylläs · bien moins cher qu\'un taxi à 100 €+ dès trois voyageurs',
  },
  dayPlan: [
    { day: '01', title: 'Atterrissage · chalet · sauna', body: 'Arrivée à KTT ou Kolari, transfert vers Äkäslompolo ou Ylläsjärvi. Dîner léger au chalet, sauna, étirements après le vol. Aucun programme.' },
    { day: '02', title: 'Journée ski de fond', body: 'Ylläs offre le plus long réseau de fond de Finlande (330 km). Faites la boucle balisée d\'Aakenusjärvi ou montez en télécabine au sommet de l\'Yllästunturi pour la descente. Pensez à la thermos.' },
    { day: '03', title: 'Randonnée parc + rennes', body: 'Raquettes dans le parc Pallas-Yllästunturi. Visite d\'une ferme à rennes, Lainio Snow Village ou ferme Aakenus. Chasse aux aurores depuis la rive nord du chalet.' },
    { day: '04', title: 'Matinée tranquille · départ', body: 'Dernier sauna, petit-déjeuner, transfert retour. Voyageurs de la semaine de Pâques : prolongez d\'une journée pour profiter du soleil de printemps sur les pistes.' },
  ],
  seoTitle: "Hébergements à Ylläs, chalets et villas dès 150 €/nuit",
  seoDescription: 'Où loger à Ylläs : chalets en rondins dès 150 €/nuit, villas au bord du lac et chalets ski-in en lisière du parc national Pallas-Yllästunturi.',
}

const it: DestinationBody = {
  tagline: 'Due fjell gemelli, le piste più lunghe della Finlandia e chalet silenziosi nel bosco, la Lapponia per chi vuole la natura forte e il paese discreto.',
  description: `Ylläs è il fjell con maggiore dislivello del network sciistico finlandese, 464 metri, e ha le piste da discesa più lunghe del Paese. Si trova nei comuni di Kolari e Kittilä, circa 115 km a nord del Circolo Polare, ai margini del parco nazionale Pallas-Yllästunturi.

Due piccoli paesi, Ylläsjärvi a sud e Äkäslompolo a nord, fanno da quinte al fjell. Non c'è un unico cuore-resort: gli chalet premium si distribuiscono nel bosco e lungo i laghi, conferendo a Ylläs la fama di alternativa più tranquilla e più vicina alla natura rispetto a Levi.`,
  facts: [
    { label: 'Chalet in tronchi da', value: '150 €/notte' },
    { label: 'Hotel da', value: '100 €/notte' },
    { label: 'Aeroporto più vicino', value: 'KTT 50 min' },
    { label: 'Dislivello', value: '464 m' },
  ],
  highlights: [
    { title: 'Le piste da discesa più lunghe della Finlandia', body: 'La pista di 3 km sul versante anteriore dello Yllästunturi scende dalla cima brulla del fjell attraverso la pineta fino al fondovalle. Rara in Finlandia, la maggior parte delle stazioni si ferma a 1 km.' },
    { title: '330 km di tracciati di sci di fondo', body: 'Piste classiche e di skating battute attraversano il parco nazionale e collegano Ylläsjärvi, Äkäslompolo e Pallas.' },
    { title: 'Parco nazionale Pallas-Yllästunturi', body: 'Il terzo parco nazionale più grande di Finlandia, foreste antiche, sette fjell con un nome e una delle arie più pure misurate in Europa.' },
    { title: 'Chalet silenziosi nel bosco', body: 'Le strutture sono volutamente distanziate. Il Suo vicino, se ne ha uno, dista qualche centinaio di metri di pineta oltre una radura.' },
    { title: 'Sponda aurora di Äkäslompolo', body: 'Il lago di Äkäslompolo guarda a nord, orizzonte pulito, nessuna luce di paese sul lato opposto, osservazione dell\'aurora forte dal ghiaccio.' },
    { title: 'Trekking estivo sui fjell', body: 'I percorsi di crinale tra Ylläs e Pallas seguono passerelle sopra il limite del bosco, aperti da luglio a settembre con la luce del sole di mezzanotte.' },
  ],
  whenToGo: `Da dicembre a marzo è la finestra di pieno inverno con neve sicura e piena stagione aurorale.
Inizio aprile offre il "kevättalvi", giornate lunghe, neve brillante e condizioni di sci ancora al top.
Settembre porta la ruska autunnale; luglio è sole di mezzanotte e trekking.`,
  howToGet: `Voli per Kittilä (KTT), 50 min di transfer fino a Ylläs.
L\'aeroporto di Rovaniemi (RVN) è un\'alternativa, 2 ore di auto.
La stazione di Kolari, a 40 min, accoglie i treni notturni da Helsinki con servizio auto al seguito.`,
  stayTypes: [
    'Chalet in tronchi sui versanti boschivi del fjell, 4–8 ospiti, sauna a legna, camino, spesso vasca esterna.',
    'Ville sul lago di Äkäslompolo e Kesänkijärvi, riva privata, foro nel ghiaccio per il bagno invernale.',
    'Chalet ski-in ad Äkäslompolo e Ylläsjärvi, accesso diretto alle piste, deposito attrezzature, meno gente che a Levi.',
    'Rifugi di design nella fascia di rispetto del parco nazionale, firme d\'architetto, atmosfera off-grid con comfort pieno.',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: 'Paese più grande, più ristoranti, impianti più rapidi.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Porta verso la natura selvaggia UKK più a nord.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'La capitale regionale e il villaggio di Babbo Natale.' },
  ],
  anchorProperties: [
    { name: 'Lapland Hotels Saaga', propertyQuery: 'Lapland Hotels Saaga', sid: 'destination_yllas_saaga', note: 'Hotel spa a Ylläsjärvi, sul versante sud, area piscine e cabinovia a 300 m.' },
    { name: 'Lapland Hotels Ylläskaltio', propertyQuery: 'Lapland Hotels Ylläskaltio', sid: 'destination_yllas_yllaskaltio', note: 'Camere con sauna nel villaggio di Äkäslompolo, ristorante panoramico, comprensorio a 4,5 km.' },
    { name: 'Harriniva (Muonio)', propertyQuery: 'Harriniva', sid: 'destination_yllas_harriniva', note: 'A 40 min da Ylläs, pacchetti safari husky e chalet sul lago.' },
    { name: 'Tutti gli alloggi di Ylläs', href: HOTEL_SEARCH_FOR('it').yllas, sid: 'destination_yllas_all_search', note: 'Esplori tutti gli chalet e le ville di Ylläs su Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Dall\'aeroporto di Kittilä (KTT)', detail: 'Stesso aeroporto di Levi. 50 km / 45 min ad Äkäslompolo (Ylläs nord), 35 km / 30 min a Ylläsjärvi (Ylläs sud).' },
    { mode: 'bus', label: 'Bus aeroporto KTT per Ylläs', detail: '25–30 € sola andata · 50 min · sui voli invernali.' },
    { mode: 'train', label: 'Treno notturno per Kolari', detail: 'Vagone letto VR da Helsinki ~90 € · 35 km / 35 min in bus o taxi fino a Ylläs.' },
    { mode: 'car', label: 'Taxi da KTT', detail: '100–120 € fino al paese di Ylläs, di norma conviene da tre persone in su.' },
  ],
  carRental: {
    href: CARS_FOR('it').fromKittila,
    sid: 'destination_yllas_cars_ktt',
    airport: 'Ritiro all\'aeroporto di Kittilä (KTT)',
    blurb: '50 min a Ylläs · molto meno di un taxi da 100 €+ da tre persone in su',
  },
  dayPlan: [
    { day: '01', title: 'Atterraggio · chalet · sauna', body: 'Arrivo a KTT o Kolari, transfer ad Äkäslompolo o Ylläsjärvi. Cena leggera in chalet, sauna, stretching dopo il volo. Niente programma.' },
    { day: '02', title: 'Giornata di sci di fondo', body: 'Ylläs ha la più lunga rete di fondo della Finlandia (330 km). Percorra l\'anello segnato di Aakenusjärvi o salga in cabinovia sullo Yllästunturi per la discesa. Non dimentichi il thermos.' },
    { day: '03', title: 'Escursione nel parco + renne', body: 'Ciaspolata nel parco Pallas-Yllästunturi. Visita a una fattoria di renne, Lainio Snow Village o fattoria Aakenus. Caccia all\'aurora dalla sponda nord dello chalet.' },
    { day: '04', title: 'Mattina lenta · partenza', body: 'Ultima sauna, colazione, transfer di ritorno. Per chi viaggia a Pasqua: prolunghi di un giorno per sciare nel sole di primavera.' },
  ],
  seoTitle: 'Alloggi a Ylläs, chalet in tronchi e ville da 150 €/notte',
  seoDescription: 'Dove soggiornare a Ylläs: chalet in tronchi da 150 €/notte, ville sul lago e chalet ski-in ai margini del parco nazionale Pallas-Yllästunturi.',
}

const nl: DestinationBody = {
  tagline: "Tweelingfjells, Finland\'s langste pistes en stille boscabins, Lapland voor wie de wildernis luid en het dorp stil wil.",
  description: `Ylläs is met 464 meter hoogteverschil het hoogste fjell van het Finse skinetwerk en heeft de langste afdaalpistes van het land. Het ligt in de gemeenten Kolari en Kittilä, ongeveer 115 km ten noorden van de Poolcirkel, aan de rand van het Pallas-Yllästunturi-nationaal park.

Twee kleine dorpen, Ylläsjärvi aan de zuidkant en Äkäslompolo aan de noordkant, flankeren het fjell. Er is geen centrale resortkern: premium cabins liggen verspreid in het bos en langs de meren, wat Ylläs zijn reputatie geeft van rustiger, natuurgerichter alternatief voor Levi.`,
  facts: [
    { label: 'Houten cabins vanaf', value: '€150/nacht' },
    { label: 'Hotels vanaf', value: '€100/nacht' },
    { label: 'Dichtstbijzijnde luchthaven', value: 'KTT 50 min' },
    { label: 'Hoogteverschil', value: '464 m' },
  ],
  highlights: [
    { title: "Finland\'s langste afdalingen", body: 'De 3 km lange piste op de voorzijde van de Yllästunturi daalt vanaf de kale top van het fjell door dennenbos naar het dal. Zeldzaam in Finland, de meeste resorts hebben pistes van rond de 1 km.' },
    { title: '330 km langlauftracks', body: 'Gemaaide klassieke en skatingsporen lopen door het nationaal park en verbinden Ylläsjärvi, Äkäslompolo en Pallas.' },
    { title: 'Pallas-Yllästunturi-nationaal park', body: 'Het op twee na grootste nationaal park van Finland, oerbos, zeven met naam genoemde fjells en een van de zuiverste gemeten lucht van Europa.' },
    { title: 'Stille boscabins', body: 'Accommodaties staan hier bewust uit elkaar. Heeft u een buur, dan ligt die enkele honderden meters dennenbos en open plek verderop.' },
    { title: 'Aurora-oever van Äkäslompolo', body: 'Het meer bij Äkäslompolo kijkt pal noord uit, vrije horizon, geen dorpslichten aan de overkant, sterk noorderlicht vanaf het ijs.' },
    { title: 'Zomerwandelingen op het fjell', body: 'De toproutes tussen Ylläs en Pallas lopen via planken boven de boomgrens, open van juli tot september bij het licht van de middernachtszon.' },
  ],
  whenToGo: `December–maart is het diepe-winter venster met betrouwbare sneeuw en volledig aurora-seizoen.
Begin april biedt de "kevättalvi", lange daglichturen, helle sneeuw en nog volle skicondities.
September brengt de ruska-herfstkleuren; juli is middernachtszon en wandelen.`,
  howToGet: `Vlieg naar Kittilä (KTT), 50 min transfer naar Ylläs.
Luchthaven Rovaniemi (RVN) is een alternatief, 2 uur rijden.
Station Kolari, op 40 min, ontvangt nachttreinen uit Helsinki met autorailservice.`,
  stayTypes: [
    'Houten cabins op de beboste fjell-hellingen, 4–8 gasten, houtgestookte sauna, open haard, vaak een hottub.',
    'Villa\'s aan het meer Äkäslompolo en Kesänkijärvi, privé-oever, ijswak in de winter.',
    'Ski-in chalets bij Äkäslompolo en Ylläsjärvi, directe toegang tot de piste, materiaalberging, minder drukte dan in Levi.',
    'Designer wildernislodges in de bufferzone van het nationaal park, door architecten gebouwd, off-grid gevoel met volledig comfort.',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: 'Groter dorp, meer restaurants, snellere liften.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Poort naar de UKK-wildernis verder noordelijk.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'De regionale hoofdstad en het Kerstmandorp.' },
  ],
  anchorProperties: [
    { name: 'Lapland Hotels Saaga', propertyQuery: 'Lapland Hotels Saaga', sid: 'destination_yllas_saaga', note: 'Spahotel in Ylläsjärvi aan de zuidkant, zwembadgedeelte en gondel op 300 m.' },
    { name: 'Lapland Hotels Ylläskaltio', propertyQuery: 'Lapland Hotels Ylläskaltio', sid: 'destination_yllas_yllaskaltio', note: 'Kamers met eigen sauna in het dorp Äkäslompolo, panoramarestaurant, skigebied op 4,5 km.' },
    { name: 'Harriniva (Muonio)', propertyQuery: 'Harriniva', sid: 'destination_yllas_harriniva', note: '40 min van Ylläs, husky-safari-pakketten en cabins aan het meer.' },
    { name: 'Alle Ylläs-accommodaties', href: HOTEL_SEARCH_FOR('nl').yllas, sid: 'destination_yllas_all_search', note: 'Bekijk alle Ylläs-cabins en chalets op Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Vanaf luchthaven Kittilä (KTT)', detail: 'Dezelfde luchthaven als Levi. 50 km / 45 min naar Äkäslompolo (Ylläs noord), 35 km / 30 min naar Ylläsjärvi (Ylläs zuid).' },
    { mode: 'bus', label: 'KTT-luchthavenbus naar Ylläs', detail: '€25–30 enkele reis · 50 min · sluit aan op de wintervluchten.' },
    { mode: 'train', label: 'Nachttrein naar Kolari', detail: 'VR-slaaptrein vanuit Helsinki ~€90 · 35 km / 35 min met bus of taxi naar Ylläs.' },
    { mode: 'car', label: 'Taxi vanaf KTT', detail: '€100–120 naar het dorp Ylläs, gewoonlijk alleen rendabel vanaf drie personen.' },
  ],
  carRental: {
    href: CARS_FOR('nl').fromKittila,
    sid: 'destination_yllas_cars_ktt',
    airport: 'Ophalen op luchthaven Kittilä (KTT)',
    blurb: '50 min naar Ylläs · veel goedkoper dan een taxi van €100+ vanaf drie personen',
  },
  dayPlan: [
    { day: '01', title: 'Landing · cabin · sauna', body: 'Aankomst KTT of Kolari, transfer naar Äkäslompolo of Ylläsjärvi. Licht diner in de cabin, sauna, rekken na de vlucht. Geen schema.' },
    { day: '02', title: 'Langlaufdag', body: 'Ylläs heeft het langste langlaufnetwerk van Finland (330 km). Ski de aangegeven Aakenusjärvi-lus of neem de gondel de Yllästunturi op voor de afdaling. Neem een thermoskan mee.' },
    { day: '03', title: 'Wandeling in het park + rendieren', body: 'Sneeuwschoenwandeling in het Pallas-Yllästunturi-park. Bezoek aan een rendierenboerderij, Lainio Snow Village of boerderij Aakenus. Aurora-jacht vanaf de noordoever van de cabin.' },
    { day: '04', title: 'Rustige ochtend · vertrek', body: 'Laatste sauna, ontbijt, transfer terug. Voor paasweekreizigers: een dag verlengen om in de voorjaarszon te skiën.' },
  ],
  seoTitle: "Ylläs-accommodatie, cabins en chalets vanaf €150/nacht",
  seoDescription: 'Waar te verblijven in Ylläs: houten cabins vanaf €150/nacht, villa\'s aan het meer en ski-in chalets aan de rand van het Pallas-Yllästunturi-park.',
}

const ja: DestinationBody = {
  tagline: '双子の山、フィンランド最長のゲレンデ、静かな森のキャビン。大自然はにぎやかに、村は静かに過ごしたい方のためのラップランド。',
  description: `イラスはフィンランドのスキーリゾート網のなかで標高差がもっとも大きい山で、その差は464m。国内で最も長いダウンヒルコースを擁します。コラリ自治体とキッティラ自治体にまたがり、北極圏のおよそ115km北に位置し、パッラス・イラストゥントゥリ国立公園に隣接しています。

南側のイラスヤルヴィと北側のアカスロンポロという2つの小さな村が山を挟むように立ち、明確なリゾート中心部はありません。プレミアムキャビンは森の中や湖畔に点在し、レビよりも静かで自然志向だという評価をイラスにもたらしています。`,
  facts: [
    { label: 'ログキャビン1泊', value: '150ユーロから' },
    { label: 'ホテル1泊', value: '100ユーロから' },
    { label: '最寄り空港', value: 'KTT 50分' },
    { label: '標高差', value: '464m' },
  ],
  highlights: [
    { title: 'フィンランド最長のダウンヒルコース', body: 'イラストゥントゥリ正面の3kmゲレンデは樹林帯のない山頂から松林を抜けて谷へと下ります。フィンランドでは稀で、多くのリゾートは1kmです。' },
    { title: '330kmのクロスカントリートラック', body: '整備されたクラシックとスケーティングのコースが国立公園を縫い、イラスヤルヴィ、アカスロンポロ、パッラスを結びます。' },
    { title: 'パッラス・イラストゥントゥリ国立公園', body: 'フィンランドで3番目に大きな国立公園。原生林、名のある7つの山々、そしてヨーロッパで最も清浄と計測される空気があります。' },
    { title: '静寂の森のキャビン', body: 'ここの宿はあえて距離を取って配置されています。お隣がいるとしても、松林を数百m挟んだ向こう側です。' },
    { title: 'アカスロンポロのオーロラ湖岸', body: 'アカスロンポロの湖は北を向き、対岸に村の灯はなく、地平線はクリア。氷上から強いオーロラを観賞できます。' },
    { title: '夏の山岳ハイキング', body: 'イラスとパッラスを結ぶ稜線ルートは樹林限界の上に板敷きの遊歩道があり、7〜9月に白夜の光のもと歩けます。' },
  ],
  whenToGo: `12月から3月は厳冬期で、安定した積雪とオーロラ全盛のシーズンです。
4月初旬は「kevättalvi」。長い日照、まばゆい雪、フルスペックのスキーコンディションが揃います。
9月はルスカの紅葉、7月は白夜とハイキングの季節です。`,
  howToGet: `キッティラ(KTT)へ。イラスまで50分の送迎です。
ロヴァニエミ空港(RVN)も選択肢で、車で2時間。
40分のコラリ駅は、車両運搬車サービス付きの夜行列車をヘルシンキから受け入れています。`,
  stayTypes: [
    '山の森のログキャビン。4〜8名、薪サウナ、暖炉、ホットタブ付きが多くあります。',
    'アカスヤルヴィ、ケサンキ湖畔のラケヴィラ。プライベートの湖岸、冬には氷穴入水。',
    'アカスロンポロとイラスヤルヴィのスキーインシャレー。ゲレンデ直結、装備保管庫、レビよりも空いています。',
    '国立公園のバッファゾーン内にあるデザイナー隠れ家。建築家設計、オフグリッド感と快適性を両立します。',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: 'より大きな村、より多くのレストラン、より速いリフト。' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'さらに北、UKK原野への入り口。' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: '地方の中心都市、サンタクロース村。' },
  ],
  anchorProperties: [
    { name: 'Lapland Hotels Saaga', propertyQuery: 'Lapland Hotels Saaga', sid: 'destination_yllas_saaga', note: '南側ユッラスヤルヴィのスパホテル。プールエリアを備え、ゴンドラまで300m。' },
    { name: 'Lapland Hotels Ylläskaltio', propertyQuery: 'Lapland Hotels Ylläskaltio', sid: 'destination_yllas_yllaskaltio', note: 'アカスロンポロ村のサウナ付き客室、パノラマレストラン、スキー場まで4.5km。' },
    { name: 'Harriniva (Muonio)', propertyQuery: 'Harriniva', sid: 'destination_yllas_harriniva', note: 'イラスから40分。ハスキーサファリのパッケージと湖畔キャビン。' },
    { name: 'イラスのすべての宿泊施設', href: HOTEL_SEARCH_FOR('ja').yllas, sid: 'destination_yllas_all_search', note: 'Trip.comでイラスのキャビンとシャレーをすべて比較できます。' },
  ],
  transport: [
    { mode: 'plane', label: 'キッティラ空港(KTT)から', detail: 'レビと同じ空港です。アカスロンポロ(北イラス)まで50km / 45分、イラスヤルヴィ(南イラス)まで35km / 30分。' },
    { mode: 'bus', label: 'KTT空港バス(イラス行き)', detail: '片道25〜30ユーロ・50分・冬季便に接続します。' },
    { mode: 'train', label: 'コラリ行き夜行列車', detail: 'ヘルシンキ発VR寝台車約90ユーロ・バスかタクシーでイラスへ35km / 35分。' },
    { mode: 'car', label: 'KTTからタクシー', detail: 'イラス村まで100〜120ユーロ。通常は3名以上のグループ向けです。' },
  ],
  carRental: {
    href: CARS_FOR('ja').fromKittila,
    sid: 'destination_yllas_cars_ktt',
    airport: 'キッティラ空港(KTT)で受け取り',
    blurb: 'イラスまで50分・3名以上なら100ユーロ超のタクシーよりはるかに割安',
  },
  dayPlan: [
    { day: '01', title: '到着・キャビン・サウナ', body: 'KTTまたはコラリ到着、アカスロンポロかイラスヤルヴィへ送迎。キャビンで軽い夕食、サウナ、フライトの疲れを伸ばします。予定なし。' },
    { day: '02', title: 'クロスカントリースキーの一日', body: 'イラスはフィンランド最長(330km)のクロスカントリートレイル網を擁します。マーク付きのアーケヌスヤルヴィ・ループを滑るか、ゴンドラでイラストゥントゥリの山頂へ上がってダウンヒル。魔法瓶を持参してください。' },
    { day: '03', title: '国立公園ハイク + トナカイ', body: 'パッラス・イラストゥントゥリ国立公園内でスノーシュー。ライニオ・スノービレッジのトナカイか、アーケヌス農場へ。キャビンの北岸からオーロラ観賞。' },
    { day: '04', title: 'ゆっくりした朝・出発', body: '最後のサウナ、朝食、復路の送迎。イースター週の旅行者は1日延ばしてピーク週のサンスキーを。' },
  ],
  seoTitle: 'イラスの宿泊。1泊150ユーロからのログキャビン&シャレー',
  seoDescription: 'フィンランド領ラップランド・イラスでの宿選び:1泊150ユーロからのログキャビン、パッラス・イラストゥントゥリ国立公園そばのレイクヴィラとスキーインシャレー。プライベートサウナ、オーロラを望む湖岸、直接予約。',
}

const es: DestinationBody = {
  tagline: 'Fells gemelos, las pistas más largas de Finlandia y cabañas silenciosas en el bosque, la Laponia para quienes quieren la naturaleza ruidosa y el pueblo en silencio.',
  description: `Ylläs es el fell con mayor desnivel de la red de estaciones de esquí de Finlandia, 464 metros, y cuenta con las pistas de descenso más largas del país. Se sitúa en los municipios de Kolari y Kittilä, a unos 115 km al norte del Círculo Polar Ártico, al borde del Parque Nacional Pallas-Yllästunturi.

Dos pequeños pueblos, Ylläsjärvi al sur y Äkäslompolo al norte, flanquean el fell. No hay un núcleo único de estación: las cabañas premium se reparten por el bosque y junto a los lagos, lo que ha dado a Ylläs su fama de alternativa más tranquila y naturalista frente a Levi.`,
  facts: [
    { label: 'Cabañas de troncos desde', value: '150 €/noche' },
    { label: 'Hoteles desde', value: '100 €/noche' },
    { label: 'Aeropuerto más cercano', value: 'KTT 50 min' },
    { label: 'Desnivel', value: '464 m' },
  ],
  highlights: [
    { title: 'Las pistas de descenso más largas de Finlandia', body: 'La pista frontal del Yllästunturi, de 3 km, baja desde la cima sin árboles del fell a través del pinar hasta el valle. Algo raro en Finlandia, la mayoría de estaciones tiene 1 km.' },
    { title: '330 km de circuitos de esquí de fondo', body: 'Pistas clásicas y de skating preparadas atraviesan el parque nacional y conectan Ylläsjärvi, Äkäslompolo y Pallas.' },
    { title: 'Parque Nacional Pallas-Yllästunturi', body: 'El tercer parque nacional más grande de Finlandia, bosque primario, siete fells con nombre y uno de los aires más limpios medidos en Europa.' },
    { title: 'Cabañas en bosque silencioso', body: 'Los alojamientos aquí están deliberadamente separados. Su vecino, si lo hay, está a unos cuantos cientos de metros de pinos a través de un claro.' },
    { title: 'Costa aurora de Äkäslompolo', body: 'El lago de Äkäslompolo mira al norte, horizonte limpio, sin luces de pueblo al otro lado, observación intensa de auroras desde el hielo.' },
    { title: 'Senderismo de verano en los fells', body: 'Las rutas de cima entre Ylläs y Pallas están con pasarelas por encima del límite del bosque, abiertas de julio a septiembre con sol de medianoche.' },
  ],
  whenToGo: `Diciembre – marzo es la ventana de pleno invierno: nieve segura y auroras a pleno rendimiento.
A principios de abril llega el "kevättalvi", muchas horas de luz, nieve brillante y todavía esquí en pleno.
Septiembre trae los colores de la ruska; julio es sol de medianoche y caminatas.`,
  howToGet: `Vuele a Kittilä (KTT), 50 min de traslado a Ylläs.
El aeropuerto de Rovaniemi (RVN) es una alternativa, 2 h en coche.
La estación de Kolari, a 40 min, recibe trenes nocturnos desde Helsinki con servicio de transporte de coches.`,
  stayTypes: [
    'Cabañas de troncos en las laderas boscosas del fell, 4–8 huéspedes, sauna de leña, chimenea y a menudo jacuzzi.',
    'Villas a la orilla de los lagos Äkäslompolo y Kesänkijärvi, costa privada y agujero para baño en hielo en invierno.',
    'Chalets ski-in en Äkäslompolo y Ylläsjärvi, acceso directo a pista, guardaequipos, menos gente que en Levi.',
    'Retiros de diseño en la zona de amortiguación del parque, obra de arquitectos, sensación off-grid con confort total.',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: 'Pueblo más grande, más restaurantes, remontes más rápidos.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Puerta a la naturaleza UKK, más al norte.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'Capital regional y Pueblo de Papá Noel.' },
  ],
  anchorProperties: [
    { name: 'Lapland Hotels Saaga', propertyQuery: 'Lapland Hotels Saaga', sid: 'destination_yllas_saaga', note: 'Hotel spa en Ylläsjärvi, en la vertiente sur, zona de piscinas y telecabina a 300 m.' },
    { name: 'Lapland Hotels Ylläskaltio', propertyQuery: 'Lapland Hotels Ylläskaltio', sid: 'destination_yllas_yllaskaltio', note: 'Habitaciones con sauna en el pueblo de Äkäslompolo, restaurante panorámico, estación a 4,5 km.' },
    { name: 'Harriniva (Muonio)', propertyQuery: 'Harriniva', sid: 'destination_yllas_harriniva', note: 'A 40 min de Ylläs, paquetes de safari de huskys y cabañas junto al lago.' },
    { name: 'Todos los alojamientos de Ylläs', href: HOTEL_SEARCH_FOR('es').yllas, sid: 'destination_yllas_all_search', note: 'Consulte todas las cabañas y chalets de Ylläs en Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Desde el aeropuerto de Kittilä (KTT)', detail: 'Mismo aeropuerto que Levi. 50 km / 45 min a Äkäslompolo (norte), 35 km / 30 min a Ylläsjärvi (sur).' },
    { mode: 'bus', label: 'Autobús de KTT a Ylläs', detail: '25–30 € ida · 50 min · enlaza con vuelos de invierno.' },
    { mode: 'train', label: 'Tren nocturno a Kolari', detail: 'Coche cama VR desde Helsinki ~90 € · 35 km / 35 min de traslado a Ylläs en autobús o taxi.' },
    { mode: 'car', label: 'Taxi desde KTT', detail: '100–120 € al pueblo de Ylläs, solo merece la pena para grupos de 3 o más.' },
  ],
  carRental: {
    href: CARS_FOR('es').fromKittila,
    sid: 'destination_yllas_cars_ktt',
    airport: 'Recogida en el aeropuerto de Kittilä (KTT)',
    blurb: '50 min a Ylläs · mucho más barato que un taxi de 100 €+ para grupos de 3 o más',
  },
  dayPlan: [
    { day: '01', title: 'Aterrizaje · cabaña · sauna', body: 'Llegada a KTT o Kolari, traslado a Äkäslompolo o Ylläsjärvi. Cena ligera en la cabaña, sauna, estiramientos tras el vuelo. Sin agenda.' },
    { day: '02', title: 'Día de esquí de fondo', body: 'Ylläs tiene la mayor red de pistas de fondo de Finlandia (330 km). Esquíe el bucle señalizado de Aakenusjärvi o suba en góndola al Yllästunturi para el descenso. Lleve termo.' },
    { day: '03', title: 'Caminata en el parque nacional + renos', body: 'Raquetas dentro del parque Pallas-Yllästunturi. Visite una granja de renos, los de Lainio Snow Village o la granja Aakenus. Caza de auroras desde la orilla norte de la cabaña.' },
    { day: '04', title: 'Mañana lenta · partida', body: 'Última sauna, desayuno, traslado de vuelta. Viajeros de Semana Santa: amplíe un día para esquiar al sol de la semana pico.' },
  ],
  seoTitle: 'Alojamiento en Ylläs, cabañas y chalets desde 150 €/noche',
  seoDescription: 'Dónde alojarse en Ylläs: cabañas de troncos desde 150 €/noche, villas junto al lago y chalets ski-in al borde del Parque Nacional Pallas-Yllästunturi.',
}

const ptBR: DestinationBody = {
  tagline: 'Fells gêmeos, as pistas de esqui mais longas da Finlândia e cabanas silenciosas na floresta, a Lapônia para quem quer a natureza barulhenta e a vila quieta.',
  description: `Ylläs é o fell com maior desnível na rede de estações de esqui da Finlândia, 464 metros, e tem as pistas de descida mais longas do país. Fica nos municípios de Kolari e Kittilä, cerca de 115 km ao norte do Círculo Polar Ártico, junto ao Parque Nacional Pallas-Yllästunturi.

Duas pequenas vilas, Ylläsjärvi ao sul e Äkäslompolo ao norte, emolduram o fell. Não há um núcleo único de estação: as cabanas premium se espalham pela floresta e à beira dos lagos, dando a Ylläs sua fama de alternativa mais tranquila e voltada à natureza em relação a Levi.`,
  facts: [
    { label: 'Cabanas de tronco a partir de', value: '€150/noite' },
    { label: 'Hotéis a partir de', value: '€100/noite' },
    { label: 'Aeroporto mais próximo', value: 'KTT 50 min' },
    { label: 'Desnível', value: '464 m' },
  ],
  highlights: [
    { title: 'As pistas de descida mais longas da Finlândia', body: 'A pista frontal do Yllästunturi, de 3 km, desce do topo do fell sem árvores atravessando o pinhal até o vale. Raro na Finlândia, a maioria das estações tem 1 km.' },
    { title: '330 km de pistas de esqui cross-country', body: 'Trilhas clássicas e de skating preparadas atravessam o parque nacional e ligam Ylläsjärvi, Äkäslompolo e Pallas.' },
    { title: 'Parque Nacional Pallas-Yllästunturi', body: 'Terceiro maior parque nacional da Finlândia, floresta primária, sete fells com nome próprio e um dos ares mais limpos já medidos na Europa.' },
    { title: 'Cabanas em floresta silenciosa', body: 'Os imóveis aqui são propositalmente espaçados. Seu vizinho, se houver, está a algumas centenas de metros de pinheiros em uma clareira.' },
    { title: 'Costa aurora de Äkäslompolo', body: 'O lago em Äkäslompolo está voltado ao norte, horizonte limpo, sem luzes de vila do outro lado, observação intensa de aurora a partir do gelo.' },
    { title: 'Caminhadas de verão nos fells', body: 'As rotas no topo entre Ylläs e Pallas têm passarelas acima do limite das árvores, abertas de julho a setembro com sol da meia-noite.' },
  ],
  whenToGo: `Dezembro a março é a janela de inverno profundo, com neve garantida e temporada de aurora em pleno funcionamento.
Início de abril traz o "kevättalvi", longas horas de luz, neve brilhante e ainda condições plenas para esqui.
Setembro traz as cores da ruska; julho é sol da meia-noite e caminhadas.`,
  howToGet: `Voe até Kittilä (KTT), traslado de 50 min até Ylläs.
O aeroporto de Rovaniemi (RVN) é alternativa, 2 h de carro.
A estação ferroviária de Kolari, a 40 min, recebe trens noturnos de Helsinque com serviço de transporte de automóveis.`,
  stayTypes: [
    'Cabanas de tronco nas encostas florestadas do fell, 4–8 hóspedes, sauna a lenha, lareira, frequentemente com hot tub.',
    'Vilas à beira dos lagos Äkäslompolo e Kesänkijärvi, costa privativa e buraco para banho no gelo no inverno.',
    'Chalés ski-in em Äkäslompolo e Ylläsjärvi, acesso direto à pista, depósito de equipamentos, menos gente que Levi.',
    'Retiros de design na zona-tampão do parque, projetados por arquitetos, sensação off-grid com conforto integral.',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: 'Vila maior, mais restaurantes, teleféricos mais rápidos.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Portal para a natureza selvagem do UKK, mais ao norte.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'A capital regional e a Vila do Papai Noel.' },
  ],
  anchorProperties: [
    { name: 'Lapland Hotels Saaga', propertyQuery: 'Lapland Hotels Saaga', sid: 'destination_yllas_saaga', note: 'Hotel spa em Ylläsjärvi, no lado sul, área de piscinas e teleférico a 300 m.' },
    { name: 'Lapland Hotels Ylläskaltio', propertyQuery: 'Lapland Hotels Ylläskaltio', sid: 'destination_yllas_yllaskaltio', note: 'Quartos com sauna na vila de Äkäslompolo, restaurante panorâmico, estação a 4,5 km.' },
    { name: 'Harriniva (Muonio)', propertyQuery: 'Harriniva', sid: 'destination_yllas_harriniva', note: 'A 40 min de Ylläs, pacotes de safári de huskies e cabanas à beira do lago.' },
    { name: 'Todas as hospedagens de Ylläs', href: HOTEL_SEARCH_FOR('pt-BR').yllas, sid: 'destination_yllas_all_search', note: 'Veja todas as cabanas e chalés de Ylläs no Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Do Aeroporto de Kittilä (KTT)', detail: 'Mesmo aeroporto de Levi. 50 km / 45 min até Äkäslompolo (norte), 35 km / 30 min até Ylläsjärvi (sul).' },
    { mode: 'bus', label: 'Ônibus do aeroporto KTT para Ylläs', detail: '€25–30 só ida · 50 min · liga aos voos de inverno.' },
    { mode: 'train', label: 'Trem noturno para Kolari', detail: 'Vagão-leito VR de Helsinque ~€90 · 35 km / 35 min de traslado a Ylläs por ônibus ou táxi.' },
    { mode: 'car', label: 'Táxi desde KTT', detail: '€100–120 até a vila de Ylläs, geralmente só vale a pena para grupos de 3 ou mais.' },
  ],
  carRental: {
    href: CARS_FOR('pt-BR').fromKittila,
    sid: 'destination_yllas_cars_ktt',
    airport: 'Retirada no Aeroporto de Kittilä (KTT)',
    blurb: '50 min até Ylläs · muito mais barato que um táxi de €100+ para grupos de 3 ou mais',
  },
  dayPlan: [
    { day: '01', title: 'Pouso · cabana · sauna', body: 'Chegada em KTT ou Kolari, traslado para Äkäslompolo ou Ylläsjärvi. Jantar leve na cabana, sauna, alongamento depois do voo. Sem agenda.' },
    { day: '02', title: 'Dia de esqui cross-country', body: 'Ylläs tem a maior rede de cross-country da Finlândia (330 km). Esquie o circuito sinalizado Aakenusjärvi ou suba de gôndola ao topo do Yllästunturi para a descida. Leve garrafa térmica.' },
    { day: '03', title: 'Caminhada no parque nacional + renas', body: 'Raquete de neve dentro do parque Pallas-Yllästunturi. Visite uma fazenda de renas, as do Lainio Snow Village ou a fazenda Aakenus. Caça à aurora a partir da margem norte da cabana.' },
    { day: '04', title: 'Manhã lenta · partida', body: 'Última sauna, café da manhã, traslado de volta. Quem viaja na Páscoa: estenda um dia para esquiar no sol da semana de pico.' },
  ],
  seoTitle: 'Hospedagem em Ylläs, cabanas e chalés desde €150/noite',
  seoDescription: 'Onde ficar em Ylläs: cabanas de tronco a partir de €150/noite, vilas à beira do lago e chalés ski-in junto ao Parque Nacional Pallas-Yllästunturi.',
}

const zhCN: DestinationBody = {
  tagline: '双子峰、芬兰最长的雪道与森林中的寂静小屋。为那些想要荒野喧闹、村庄安静的人准备的拉普兰。',
  description: `伊拉斯是芬兰滑雪度假区网络中落差最大的山,达464米,拥有该国最长的下山雪道。它跨越科拉里和基蒂莱两个市,大约位于北极圈以北115公里,毗邻帕拉斯-伊拉斯通图里国家公园。

两座小村庄。南面的伊拉斯耶尔维和北面的阿卡斯隆波罗。分别坐落在山的两端。这里没有单一的度假村中心:高端小屋散布于森林与湖畔之间,使伊拉斯赢得了比莱维更安静、更亲近自然的口碑。`,
  facts: [
    { label: '原木小屋每晚', value: '150欧元起' },
    { label: '酒店每晚', value: '100欧元起' },
    { label: '最近机场', value: 'KTT 50分钟' },
    { label: '落差', value: '464米' },
  ],
  highlights: [
    { title: '芬兰最长的下山雪道', body: '长达3公里的伊拉斯通图里正面雪道从无树的山顶穿越松林直下山谷。在芬兰极为罕见。大多数度假区只有1公里。' },
    { title: '330公里越野滑雪赛道', body: '修整过的传统式和滑步式雪道穿过国家公园,连接伊拉斯耶尔维、阿卡斯隆波罗和帕拉斯。' },
    { title: '帕拉斯-伊拉斯通图里国家公园', body: '芬兰第三大国家公园。原始森林、七座命名山峰,以及欧洲空气最洁净的测量数据之一。' },
    { title: '静寂的森林小屋', body: '这里的住宿刻意拉开距离。即使有邻居,也隔着数百米的松林和一片空地。' },
    { title: '阿卡斯隆波罗的极光湖岸', body: '阿卡斯隆波罗的湖泊朝北。地平线清晰,对岸没有村庄灯光,从冰面观赏极光极佳。' },
    { title: '夏季山岳徒步', body: '伊拉斯与帕拉斯之间的山顶步道铺设在林木线以上,7月至9月开放,可享白夜阳光。' },
  ],
  whenToGo: `12月至3月是深冬窗口:雪况稳定、极光季全开。
4月初是"kevättalvi"。日照长、雪面明亮,依然有完整的滑雪条件。
9月迎来ruska秋色,7月是午夜阳光与徒步的季节。`,
  howToGet: `飞往基蒂莱(KTT),50分钟车程抵达伊拉斯。
罗瓦涅米机场(RVN)是备选。2小时车程。
40分钟车程的科拉里火车站接收赫尔辛基的夜班列车,并提供轿车托运服务。`,
  stayTypes: [
    '山间林坡上的原木小屋。可住4–8人,柴烧桑拿、壁炉,常配热水浴缸。',
    '阿卡斯隆波罗与Kesänkijärvi湖畔的别墅。私人湖岸,冬季备有冰洞游泳。',
    '阿卡斯隆波罗与伊拉斯耶尔维的滑入式木屋。直通雪道、装备储藏室、人潮远少于莱维。',
    '国家公园缓冲区内的设计师隐居地。建筑师设计,兼具脱网感与全功能舒适。',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: '更大的村庄、更多餐厅、更快的缆车。' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: '通往更北的UKK荒野的入口。' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: '地区首府与圣诞老人村。' },
  ],
  anchorProperties: [
    { name: 'Lapland Hotels Saaga', propertyQuery: 'Lapland Hotels Saaga', sid: 'destination_yllas_saaga', note: '位于南侧于莱斯耶尔维的水疗酒店,设泳池区,距缆车300米。' },
    { name: 'Lapland Hotels Ylläskaltio', propertyQuery: 'Lapland Hotels Ylläskaltio', sid: 'destination_yllas_yllaskaltio', note: '阿卡斯隆波洛村内的桑拿客房,设全景餐厅,距滑雪场4.5公里。' },
    { name: 'Harriniva (Muonio)', propertyQuery: 'Harriniva', sid: 'destination_yllas_harriniva', note: '距伊拉斯40分钟。哈士奇探险套餐与湖畔小屋。' },
    { name: '伊拉斯全部住宿', href: HOTEL_SEARCH_FOR('zh-CN').yllas, sid: 'destination_yllas_all_search', note: '在Trip.com浏览伊拉斯的所有小屋与木屋。' },
  ],
  transport: [
    { mode: 'plane', label: '从基蒂莱机场(KTT)出发', detail: '与莱维同一机场。距阿卡斯隆波罗(北伊拉斯)50公里 / 45分钟,距伊拉斯耶尔维(南伊拉斯)35公里 / 30分钟。' },
    { mode: 'bus', label: '至伊拉斯的KTT机场巴士', detail: '单程25–30欧元 · 50分钟 · 衔接冬季航班。' },
    { mode: 'train', label: '至科拉里的夜班列车', detail: '赫尔辛基出发VR卧铺车约90欧元 · 巴士或出租车35公里 / 35分钟到伊拉斯。' },
    { mode: 'car', label: 'KTT出租车', detail: '到伊拉斯村100–120欧元。通常仅适合3人及以上团组。' },
  ],
  carRental: {
    href: CARS_FOR('zh-CN').fromKittila,
    sid: 'destination_yllas_cars_ktt',
    airport: '基蒂莱机场(KTT)取车',
    blurb: '至伊拉斯50分钟 · 比100欧元以上的出租车便宜得多,适合3人及以上',
  },
  dayPlan: [
    { day: '01', title: '抵达 · 小屋 · 桑拿', body: 'KTT或科拉里抵达,接送至阿卡斯隆波罗或伊拉斯耶尔维。小屋内简餐、桑拿、舒展身体,无行程安排。' },
    { day: '02', title: '越野滑雪日', body: '伊拉斯拥有芬兰最长的越野雪道网(330公里)。滑行标记好的Aakenusjärvi环线,或乘缆车登上伊拉斯通图里滑降。带上保温瓶。' },
    { day: '03', title: '国家公园徒步 + 驯鹿', body: '在帕拉斯-伊拉斯通图里公园内雪鞋行走。参观驯鹿农场。Lainio雪村驯鹿或Aakenus农场。从小屋北岸寻找极光。' },
    { day: '04', title: '悠闲晨光 · 启程', body: '最后一次桑拿、早餐、返程接送。复活节周出行者:多留一天,在旺季周的阳光下滑雪。' },
  ],
  seoTitle: '伊拉斯住宿。原木小屋与木屋,每晚150欧元起',
  seoDescription: '芬兰拉普兰伊拉斯住宿指南:原木小屋每晚150欧元起、湖畔别墅与紧邻帕拉斯-伊拉斯通图里国家公园的滑入式木屋。私人桑拿、面向极光的湖岸、直接预订。',
}

const sv: DestinationBody = {
  tagline: 'Tvillingfjäll, Finlands längsta nedfarter och tysta skogsstugor: Lappland för dig som vill ha mycket vildmark och lite by.',
  description: `Ylläs är det fjäll som har störst fallhöjd bland de finska skidorterna, 464 meter, och landets längsta nedfarter. Fjället ligger i kommunerna Kolari och Kittilä, omkring 115 km norr om polcirkeln, i kanten av Pallas-Yllästunturi nationalpark.

Två små byar ramar in fjället: Ylläsjärvi på södra sidan och Äkäslompolo på den norra. Någon samlad ortskärna finns inte: premiumstugorna ligger utspridda i skogen och längs sjöarna, vilket har gett Ylläs ryktet som det lugnare, mer naturnära alternativet till Levi.`,
  facts: [
    { label: 'Timmerstugor från', value: '150 €/natt' },
    { label: 'Hotell från', value: '100 €/natt' },
    { label: 'Närmaste flygplats', value: 'KTT 50 min' },
    { label: 'Fallhöjd', value: '464 m' },
  ],
  highlights: [
    { title: 'Finlands längsta nedfarter', body: 'Den 3 km långa nedfarten på Yllästunturis framsida går från kalfjället högst upp genom tallskogen ner till dalen. Ovanligt i Finland, där de flesta orter har nedfarter på 1 km.' },
    { title: '330 km längdspår', body: 'Pistade spår för klassisk stil och skate löper genom nationalparken och binder samman Ylläsjärvi, Äkäslompolo och Pallas.' },
    { title: 'Pallas-Yllästunturi nationalpark', body: 'Finlands tredje största nationalpark: gammelskog, sju namngivna fjäll och några av de renaste luftvärden som uppmätts i Europa.' },
    { title: 'Tysta skogsstugor', body: 'Boendena här ligger medvetet långt från varandra. Grannen, om du har någon, finns några hundra meter tallskog bort över en glänta.' },
    { title: 'Norrskensstranden i Äkäslompolo', body: 'Sjön vid Äkäslompolo öppnar sig mot norr: fri horisont, inga byljus på andra sidan och starkt norrsken sett från isen.' },
    { title: 'Fjällvandring på sommaren', body: 'Lederna över fjälltopparna mellan Ylläs och Pallas går på spänger ovanför trädgränsen, öppna från juli till september i midnattssolens ljus.' },
  ],
  whenToGo: `December–mars är djupvinterns fönster, med pålitlig snö och full norrskenssäsong.
Början av april ger "kevättalvi", vårvintern: långa ljusa dagar, bländande snö och fortfarande fullgoda skidförhållanden.
September ger ruska, höstfärgerna; juli betyder midnattssol och vandring.`,
  howToGet: `Flyg till Kittilä (KTT), 50 min transfer till Ylläs.
Rovaniemi flygplats (RVN) är ett alternativ, 2 timmars bilresa.
Kolari järnvägsstation, 40 min bort, tar emot nattåg från Helsingfors med bilvagn.`,
  stayTypes: [
    'Timmerstugor i skogssluttningarna på fjället, 4–8 gäster, vedeldad bastu, öppen spis, ofta med badtunna.',
    'Sjövillor vid Äkäslompolo och Kesänkijärvi, egen strand och isvak för vinterbad.',
    'Ski in-stugor i Äkäslompolo och Ylläsjärvi, direkt tillgång till backen, förvaring för utrustning och mindre folk än i Levi.',
    'Arkitektritade vildmarksboenden i nationalparkens randzon, med känslan av att vara helt utanför nätet men med full komfort.',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: 'Större by, fler restauranger, snabbare liftar.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Porten till UKK-vildmarken längre norrut.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'Regionens huvudstad och Santa Claus Village.' },
  ],
  anchorProperties: [
    { name: 'Lapland Hotels Saaga', propertyQuery: 'Lapland Hotels Saaga', sid: 'destination_yllas_saaga', note: 'Spahotell i Ylläsjärvi på södra sidan, poolavdelning och gondol 300 m bort.' },
    { name: 'Lapland Hotels Ylläskaltio', propertyQuery: 'Lapland Hotels Ylläskaltio', sid: 'destination_yllas_yllaskaltio', note: 'Rum med egen bastu i byn Äkäslompolo, panoramarestaurang, skidanläggning 4,5 km.' },
    { name: 'Harriniva (Muonio)', propertyQuery: 'Harriniva', sid: 'destination_yllas_harriniva', note: '40 min från Ylläs, paket med hundspannssafari och stugor vid vattnet.' },
    { name: 'Alla boenden i Ylläs', href: HOTEL_SEARCH_FOR('sv').yllas, sid: 'destination_yllas_all_search', note: 'Bläddra bland alla stugor och chalets i Ylläs på Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Från Kittilä flygplats (KTT)', detail: 'Samma flygplats som för Levi. 50 km / 45 min till Äkäslompolo (norra Ylläs), 35 km / 30 min till Ylläsjärvi (södra Ylläs).' },
    { mode: 'bus', label: 'Flygbussen från KTT till Ylläs', detail: '25–30 € enkel resa · 50 min · möter vinterflygen.' },
    { mode: 'train', label: 'Nattåg till Kolari', detail: 'VR:s sovvagn från Helsingfors ca 90 € · 35 km / 35 min transfer till Ylläs med buss eller taxi.' },
    { mode: 'car', label: 'Taxi från KTT', detail: '100–120 € till Ylläs by, oftast värt det bara för grupper på 3 personer eller fler.' },
  ],
  carRental: {
    href: CARS_FOR('sv').fromKittila,
    sid: 'destination_yllas_cars_ktt',
    airport: 'Upphämtning på Kittilä flygplats (KTT)',
    blurb: '50 min till Ylläs · klart billigare än taxi för 100 € och uppåt när ni är 3 eller fler',
  },
  dayPlan: [
    { day: '01', title: 'Landa · stuga · bastu', body: 'Ankomst till KTT eller Kolari, transfer till Äkäslompolo eller Ylläsjärvi. Lätt middag i stugan, bastu och lite stretch efter flyget. Inget program.' },
    { day: '02', title: 'Längdskiddag', body: 'Ylläs har Finlands längsta nät av längdspår (330 km). Åk den markerade slingan runt Aakenusjärvi eller ta gondolen upp på Yllästunturi för utförsåkning. Ta med en termos.' },
    { day: '03', title: 'Vandring i nationalparken + renar', body: 'Snöskovandring inne i Pallas-Yllästunturi nationalpark. Besök en rengård, renarna vid Lainio Snow Village eller Aakenus gård. Spana efter norrsken från stugans norra strand.' },
    { day: '04', title: 'Långsam morgon · hemresa', body: 'Sista bastun, frukost, transfer tillbaka. Reser du påskveckan: lägg till en dag och åk skidor i högsäsongens sol.' },
  ],
  seoTitle: 'Boende i Ylläs: timmerstugor och chalets från 150 €/natt',
  seoDescription: 'Var du bor i Ylläs, Lappland: timmerstugor från 150 €/natt, sjövillor och ski in-stugor i kanten av Pallas-Yllästunturi nationalpark.',
}

export default function Yllas() {
  return (
    <DestinationPage
      slug="yllas"
      name="Ylläs"
      heroImage="/images/yllas-hero.webp"
      ogImage="https://laplandstays.com/og-yllas.jpg"
      seoKeywords={['yllas accommodation', 'ylläs cabin', 'ylläs log cabin', 'ylläs hotel', 'äkäslompolo villa', 'pallas-yllästunturi accommodation', 'ylläs chalet', 'where to stay in ylläs']}
      body={{ en, fi, de, ja, es, 'pt-BR': ptBR, 'zh-CN': zhCN, ko, fr, it, nl, sv }}
      highlightLinks={{
        0: { base: 'https://laplandskiresorts.com', path: '/resort/yllas/' },
        4: { base: 'https://laplandvibes.com', path: '/northern-lights/' },
      }}
    />
  )
}
