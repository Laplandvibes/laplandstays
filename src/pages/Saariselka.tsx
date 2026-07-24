import DestinationPage, { type DestinationBody } from '../components/DestinationPage'
import { HOTEL_SEARCH, CARS } from '../lib/affiliate'

const en: DestinationBody = {
  tagline: "The gateway to Urho Kekkonen National Park, premium cabins at the edge of Europe's last real wilderness.",
  description: `Saariselkä sits in Inari municipality, 250 km north of the Arctic Circle, at the treeline. To the east stretches Urho Kekkonen National Park, 2,550 square kilometres of near-untouched fell, river and old-growth forest, one of the largest wilderness areas in the EU.

The village is small and walkable, grouped around a few hotels, restaurants and ski slopes. Premium cabins sit along the road to Ivalo and on the edge of the national park. The position matters: you can step from your door into an afternoon of husky sledding, then return for a private sauna under aurora on the same evening.`,
  facts: [
    { label: 'Glass igloos from', value: '€400/night' },
    { label: 'Wilderness lodges from', value: '€200/night' },
    { label: 'Aurora nights', value: '~200/yr' },
    { label: 'Nearest airport', value: 'IVL 25 min' },
  ],
  highlights: [
    { title: 'UKK National Park on your doorstep', body: "Finland's second-largest national park. Marked ski and hiking routes start from Saariselkä and run 60 km east into the wilderness." },
    { title: 'Kaunispää fell viewpoint', body: 'The fell above the village has a road and lift to the top. Clear-horizon aurora viewing and summer midnight-sun panoramas.' },
    { title: 'Husky and reindeer kennels', body: 'Several working kennels within 20 minutes of the village run half-day and multi-day sled trips into the national park.' },
    { title: 'Aurora density', body: 'At this latitude the aurora oval passes overhead more often than at more southern destinations, you see the lights far more often than further south.' },
    { title: 'Tankavaara gold village', body: 'A 30-minute drive south: the actual gold-prospecting heritage of Lapland, with panning courses and the Gold Museum.' },
    { title: 'Quiet winter trails', body: 'Ski networks are substantial but usage is thin, kilometres of groomed track with almost no other skiers on a weekday morning.' },
  ],
  whenToGo: `Late August – April is aurora season. October and February are the most settled, clear-sky windows.
December – March gives full snow cover and short, blue-lit days.
July – August is subarctic summer: midnight sun, hiking, river canoeing, no mosquitoes by September.`,
  howToGet: `Fly into Ivalo (IVL), 25 min transfer. Daily flights from Helsinki, seasonal direct routes from UK and Central Europe.
From Helsinki by overnight train to Rovaniemi + 3 hr drive, or direct charter flights in winter.
Car rental recommended, the best dark-sky cabin roads are a short drive from the village core.`,
  stayTypes: [
    'Aurora glass cabins at the edge of UKK park, small, 2-person, glass ceilings, no ambient light.',
    'Log villas on the Kakslauttanen side, 6–10 guests, private sauna, wood-burning fireplace, full wilderness silence.',
    'Ski-in apartments in the village, walkable to restaurants and the Kaunispää lift, good for families.',
    'Premium designer chalets toward Ivalo, larger plots, private lakes, the quietest listings in Lapland.',
  ],
  siblings: [
    { name: 'Inari', href: '/destinations/inari', blurb: 'Further north on the great lake, Sámi heartland.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: "Lapland's capital, Santa Claus Village, more amenities." },
    { name: 'Levi', href: '/destinations/levi', blurb: 'The biggest village and easiest arrival in Lapland.' },
  ],
  anchorProperties: [
    { name: 'Kakslauttanen Arctic Resort', propertyQuery: 'Kakslauttanen Arctic Resort', sid: 'destination_saariselka_kakslauttanen', note: 'The original glass igloos. Books 8–12 mo ahead for peak aurora.' },
    { name: 'Star Arctic Hotel', propertyQuery: 'Star Arctic Hotel', sid: 'destination_saariselka_star_arctic', note: 'On Kaunispää fell, glass-roofed rooms with the best Saariselkä village skyline.' },
    { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_saariselka_muotka', note: 'All-suite designer lodge with full safari programme.' },
    { name: 'All Saariselkä accommodation', href: HOTEL_SEARCH.saariselka, sid: 'destination_saariselka_all_search', note: 'Browse every Saariselkä property on Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'From Ivalo Airport (IVL)', detail: 'Direct winter flights from HEL · LHR · CDG. 30 km / 30 min south to Saariselkä village.' },
    { mode: 'bus', label: 'IVL airport bus', detail: '€15–20 one-way · 30 min · meets every flight.' },
    { mode: 'car', label: 'Taxi or pre-booked transfer', detail: '€40–60 to Saariselkä. Kakslauttanen and Muotka include private transfer at premium tier.' },
    { mode: 'train', label: 'Helsinki–Rovaniemi sleeper', detail: 'VR overnight train to Rovaniemi (~€90), then 4-hour bus or rental car. Slow alternative to flying IVL.' },
  ],
  carRental: {
    href: CARS.fromIvalo,
    sid: 'destination_saariselka_cars_ivl',
    airport: 'Pickup at Ivalo Airport (IVL)',
    blurb: '30 min to Saariselkä · useful for the Inari/Lake Inari side-trip',
  },
  dayPlan: [
    { day: '01', title: 'Arrive · glass igloo', body: 'IVL afternoon, transfer 30 min south, check into Kakslauttanen / Star Arctic / Muotka. Sauna, dinner, aurora-alarm armed.' },
    { day: '02', title: 'UKK national park snowshoe', body: 'Half-day guided snowshoe into Urho Kekkonen, gold-panning rivers, dwarf birch ridges. Lunch back at the property, second half free.' },
    { day: '03', title: 'Husky + reindeer day', body: 'Morning husky safari from Saariselkä village. Afternoon reindeer ride at a nearby Sámi farm. Evening: ice-fishing or a sauna lake plunge, and aurora watch if the sky is clear.' },
    { day: '04', title: 'Slow morning · drive to Inari', body: 'Last igloo morning, drive 50 min north to Lake Inari for a Sámi-culture day at Siida museum. Catch evening flight from IVL or extend by adding an Inari night.' },
  ],
  seoTitle: 'Saariselkä Glass Igloos & Accommodation, from €200/Night',
  seoDescription: 'Where to stay in Saariselkä, Lapland: Kakslauttanen glass igloos from €400/night, wilderness lodges (Muotka, Star Arctic) from €200. Dark skies, direct booking.',
}

const fi: DestinationBody = {
  tagline: 'Portti Urho Kekkosen kansallispuistoon, premium-mökkejä Euroopan viimeisen aidon erämaan reunalla.',
  description: `Saariselkä sijaitsee Inarin kunnassa, 250 km napapiirin pohjoispuolella, puurajalla. Idässä levittäytyy Urho Kekkosen kansallispuisto, 2 550 neliökilometriä lähes koskematonta tunturia, jokea ja ikimetsää, yksi EU:n suurimmista erämaa-alueista.

Kylä on pieni ja kävelyetäisyydellä, ryhmittynyt muutaman hotellin, ravintolan ja rinteen ympärille. Premium-mökit sijaitsevat Ivaloon vievän tien varrella ja kansallispuiston reunalla. Sijainti merkitsee: voit astua ovelta iltapäivän husky-ajelulle ja palata yksityiseen saunaan revontulten alle samana iltana.`,
  facts: [
    { label: 'Lasi-iglut alkaen', value: '400 €/yö' },
    { label: 'Erämaakohteet alkaen', value: '200 €/yö' },
    { label: 'Revontuliyöt', value: '~200/v' },
    { label: 'Lähin lentokenttä', value: 'IVL 25 min' },
  ],
  highlights: [
    { title: 'UKK-kansallispuisto ovellasi', body: 'Suomen toiseksi suurin kansallispuisto. Merkityt latu- ja vaellusreitit alkavat Saariselältä ja jatkuvat 60 km itään erämaahan.' },
    { title: 'Kaunispään tunturin näköalapaikka', body: 'Kylän yläpuolella olevalla tunturilla on tie ja hissi huipulle. Selkeähorisonttinen revontulinäkymä ja kesäisin keskiyön auringon panoraamat.' },
    { title: 'Husky- ja porotarhat', body: 'Useat toimivat tarhat 20 minuutin päässä kylästä järjestävät puolen päivän ja monipäiväisiä valjakkomatkoja kansallispuistoon.' },
    { title: 'Revontulitaajuus', body: 'Tällä leveysasteella revontuliovaali kulkee useammin pään yli kuin etelämpänä, näet revontulia selvästi useammin kuin etelämpänä.' },
    { title: 'Tankavaaran kultakylä', body: '30 min ajomatka etelään: Lapin kullankaivuun perintö, huuhdontakursseja ja Kultamuseo.' },
    { title: 'Hiljaiset talvilatuverkot', body: 'Latuverkko on laaja mutta käyttöaste matala, kilometrejä hoidettua latua lähes ilman muita hiihtäjiä arkiaamuna.' },
  ],
  whenToGo: `Elokuun loppu–huhtikuu on revontulisesonki. Lokakuu ja helmikuu ovat tasaisimmat, selkein taivas.
Joulukuu–maaliskuu antaa täyden lumipeitteen ja lyhyet, sinivalaistut päivät.
Heinä–elokuu on subarktista kesää: keskiyön aurinko, patikointi, joenkanootti, ei hyttysiä syyskuussa.`,
  howToGet: `Lennä Ivaloon (IVL), 25 min kuljetus. Päivittäiset lennot Helsingistä, kausittaisia suoria reittejä Iso-Britanniasta ja Keski-Euroopasta.
Helsingistä yöjunalla Rovaniemelle + 3 tunnin ajo, tai suorat charter-lennot talvella.
Vuokra-autoa suositellaan, parhaat pimeätaivasmökit ovat lyhyen ajomatkan päässä kyläytimestä.`,
  stayTypes: [
    'Aurora-lasimökit UKK-puiston reunalla, pieniä, kahdelle hengelle, lasikatto, ei ympäröivää valoa.',
    'Hirsivillat Kakslauttasen suunnalla, 6–10 vierasta, oma sauna, puutakka, täysi erämaa-hiljaisuus.',
    'Rinneasunnot kylässä, kävelyetäisyydellä ravintoloista ja Kaunispään hissistä, hyvä perheille.',
    'Premium-design-chaletit Ivalon suuntaan, suuremmat tontit, yksityiset järvet, Lapin hiljaisimmat kohteet.',
  ],
  siblings: [
    { name: 'Inari', href: '/destinations/inari', blurb: 'Pohjoisempana suurella järvellä, saamelaisten sydänmaa.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'Lapin pääkaupunki, Joulupukin pajakylä, enemmän palveluja.' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'Lapin suurin kylä ja helpoin saapuminen.' },
  ],
  anchorProperties: [
    { name: 'Kakslauttanen Arctic Resort', propertyQuery: 'Kakslauttanen Arctic Resort', sid: 'destination_saariselka_kakslauttanen', note: 'Alkuperäiset lasi-iglut. Varataan 8–12 kk etukäteen revontuli-huipulle.' },
    { name: 'Star Arctic Hotel', propertyQuery: 'Star Arctic Hotel', sid: 'destination_saariselka_star_arctic', note: 'Kaunispään tunturilla, lasikattoiset huoneet ja paras näkymä Saariselän kylälle.' },
    { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_saariselka_muotka', note: 'Pelkkiä sviittejä, design-erämaakohde täydellä safariohjelmalla.' },
    { name: 'Kaikki Saariselän majoitukset', href: HOTEL_SEARCH.saariselka, sid: 'destination_saariselka_all_search', note: 'Selaa kaikki Saariselän kohteet Trip.comissa.' },
  ],
  transport: [
    { mode: 'plane', label: 'Ivalon lentokentältä (IVL)', detail: 'Suorat talvilennot HEL · LHR · CDG. 30 km / 30 min etelään Saariselän kylälle.' },
    { mode: 'bus', label: 'IVL-lentokenttäbussi', detail: '15–20 € yhteen suuntaan · 30 min · jokaisen lennon yhteydessä.' },
    { mode: 'car', label: 'Taksi tai esivarattu kuljetus', detail: '40–60 € Saariselälle. Kakslauttanen ja Muotka sisältävät yksityiskuljetuksen premium-tasolla.' },
    { mode: 'train', label: 'Helsinki–Rovaniemi-makuujuna', detail: 'VR:n yöjuna Rovaniemelle (~90 €), sitten 4 tunnin bussi tai vuokra-auto. Hidas vaihtoehto IVL-lennon sijaan.' },
  ],
  carRental: {
    href: CARS.fromIvalo,
    sid: 'destination_saariselka_cars_ivl',
    airport: 'Nouto Ivalon lentokentältä (IVL)',
    blurb: '30 min Saariselälle · hyödyllinen Inarin/Inarijärven sivumatkalle',
  },
  dayPlan: [
    { day: '01', title: 'Saavu · lasi-iglu', body: 'IVL iltapäivällä, kuljetus 30 min etelään, kirjautuminen Kakslauttaseen / Star Arcticiin / Muotkaan. Sauna, illallinen, revontulihälytys päällä.' },
    { day: '02', title: 'UKK-kansallispuiston lumikenkä', body: 'Puolipäiväinen opastettu lumikenkäilyretki Urho Kekkoseen, kullanhuuhdontajoet, kääpiökoivuharjut. Lounas takaisin kohteessa, toinen puoli vapaata.' },
    { day: '03', title: 'Husky- + porotila-päivä', body: 'Aamulla husky-safari Saariselän kylältä. Iltapäivällä poroajelu lähellä olevalla saamelaistilalla. Iltaisin: pilkki tai sauna-järviuinti, ja revontulivahti jos taivas on selkeä.' },
    { day: '04', title: 'Rauhallinen aamu · ajo Inariin', body: 'Viimeinen iglu-aamu, ajo 50 min pohjoiseen Inarijärvelle saamelaiskulttuuripäivään Siida-museossa. Iltalento IVL:stä tai pidennä Inarin yöllä.' },
  ],
  seoTitle: 'Saariselän lasi-iglut ja majoitus, alkaen 200 €/yö',
  seoDescription: 'Missä yöpyä Saariselällä: Kakslauttasen lasi-iglut alkaen 400 €/yö, erämaakohteet (Muotka, Star Arctic) alkaen 200 €. Urho Kekkosen kansallispuiston reunalla.',
}

const de: DestinationBody = {
  tagline: 'Das Tor zum Urho-Kekkonen-Nationalpark, Premium-Hütten am Rand der letzten echten Wildnis Europas.',
  description: `Saariselkä liegt in der Gemeinde Inari, 250 km nördlich des Polarkreises, an der Baumgrenze. Östlich erstreckt sich der Urho-Kekkonen-Nationalpark, 2.550 Quadratkilometer nahezu unberührter Fjälls, Flüsse und Urwald, eines der größten Wildnisgebiete der EU.

Das Dorf ist klein und fußläufig, gruppiert um einige Hotels, Restaurants und Skipisten. Premium-Hütten liegen entlang der Straße nach Ivalo und am Rand des Nationalparks. Die Lage zählt: Sie können von Ihrer Tür in einen Nachmittag mit Husky-Schlittenfahrt aufbrechen und am selben Abend für eine private Sauna unter dem Polarlicht zurückkehren.`,
  facts: [
    { label: 'Glasiglus ab', value: '400 €/Nacht' },
    { label: 'Wildnis-Lodges ab', value: '200 €/Nacht' },
    { label: 'Polarlicht-Nächte', value: '~200/Jahr' },
    { label: 'Nächster Flughafen', value: 'IVL 25 min' },
  ],
  highlights: [
    { title: 'UKK-Nationalpark vor der Tür', body: 'Finnlands zweitgrößter Nationalpark. Markierte Ski- und Wanderrouten starten in Saariselkä und führen 60 km östlich in die Wildnis.' },
    { title: 'Aussichtspunkt Fjäll Kaunispää', body: 'Das Fjäll oberhalb des Dorfes hat eine Straße und einen Lift zum Gipfel. Polarlicht-Beobachtung mit klarem Horizont und Sommer-Mitternachtssonnen-Panoramen.' },
    { title: 'Husky- und Rentier-Zwinger', body: 'Mehrere arbeitende Zwinger im Umkreis von 20 Minuten bieten Halbtags- und Mehrtages-Schlittenfahrten in den Nationalpark.' },
    { title: 'Polarlicht-Dichte', body: 'Auf diesem Breitengrad zieht das Polarlichtoval häufiger über den Kopf als an südlicheren Reisezielen, Sie sehen das Polarlicht deutlich häufiger als weiter südlich.' },
    { title: 'Goldgräberdorf Tankavaara', body: '30 Minuten Fahrt südlich: das echte Goldwasch-Erbe Lapplands, mit Goldwaschkursen und dem Goldmuseum.' },
    { title: 'Ruhige Winter-Loipen', body: 'Das Loipennetz ist umfangreich, die Auslastung dünn, kilometerlange gespurte Strecken fast ohne andere Skifahrer an einem Werktag-Morgen.' },
  ],
  whenToGo: `Ende August – April ist Polarlicht-Saison. Oktober und Februar sind die ruhigsten, klarsten Fenster.
Dezember – März bringt volle Schneedecke und kurze, blau erleuchtete Tage.
Juli – August ist subarktischer Sommer: Mitternachtssonne, Wandern, Flusskanu, ab September keine Mücken mehr.`,
  howToGet: `Fliegen Sie nach Ivalo (IVL), 25 min Transfer. Tägliche Flüge aus Helsinki, saisonale Direktrouten aus dem UK und Mitteleuropa.
Aus Helsinki Nachtzug nach Rovaniemi + 3 h Fahrt, oder direkte Charterflüge im Winter.
Mietwagen empfohlen, die besten Dunkelhimmel-Hütten liegen eine kurze Fahrt vom Dorfkern entfernt.`,
  stayTypes: [
    'Polarlicht-Glashütten am Rand des UKK-Parks, klein, für 2 Personen, Glasdach, kein Umgebungslicht.',
    'Blockvillen auf der Kakslauttanen-Seite, 6–10 Gäste, eigene Sauna, Holzofen-Kamin, volle Wildnisstille.',
    'Ski-in-Apartments im Dorf, fußläufig zu Restaurants und dem Kaunispää-Lift, gut für Familien.',
    'Premium-Designer-Chalets Richtung Ivalo, größere Grundstücke, private Seen, die ruhigsten Angebote Lapplands.',
  ],
  siblings: [
    { name: 'Inari', href: '/destinations/inari', blurb: 'Weiter nördlich am großen See, das Herzland der Sámi.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'Lapplands Hauptstadt, Weihnachtsmanndorf, mehr Annehmlichkeiten.' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'Das größte Dorf und die einfachste Ankunft in Lappland.' },
  ],
  anchorProperties: [
    { name: 'Kakslauttanen Arctic Resort', propertyQuery: 'Kakslauttanen Arctic Resort', sid: 'destination_saariselka_kakslauttanen', note: 'Die ursprünglichen Glasiglus. 8–12 Monate im Voraus für die Polarlicht-Hauptsaison ausgebucht.' },
    { name: 'Star Arctic Hotel', propertyQuery: 'Star Arctic Hotel', sid: 'destination_saariselka_star_arctic', note: 'Auf dem Fjäll Kaunispää, Räume mit Glasdach und der beste Blick auf das Dorf.' },
    { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_saariselka_muotka', note: 'Nur Suiten, Designer-Lodge mit vollem Safari-Programm.' },
    { name: 'Alle Saariselkä-Unterkünfte', href: HOTEL_SEARCH.saariselka, sid: 'destination_saariselka_all_search', note: 'Stöbern Sie in allen Unterkünften auf Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Ab Flughafen Ivalo (IVL)', detail: 'Direkte Winterflüge ab HEL · LHR · CDG. 30 km / 30 min südlich ins Dorf Saariselkä.' },
    { mode: 'bus', label: 'IVL-Flughafenbus', detail: '15–20 € einfach · 30 min · zu jedem Flug.' },
    { mode: 'car', label: 'Taxi oder vorgebuchter Transfer', detail: '40–60 € nach Saariselkä. Kakslauttanen und Muotka beinhalten privaten Transfer im Premium-Tarif.' },
    { mode: 'train', label: 'Nachtzug Helsinki–Rovaniemi', detail: 'VR-Nachtzug nach Rovaniemi (~90 €), dann 4-stündiger Bus oder Mietwagen. Langsame Alternative zum IVL-Flug.' },
  ],
  carRental: {
    href: CARS.fromIvalo,
    sid: 'destination_saariselka_cars_ivl',
    airport: 'Abholung am Flughafen Ivalo (IVL)',
    blurb: '30 min nach Saariselkä · nützlich für den Inari/Inarisee-Abstecher',
  },
  dayPlan: [
    { day: '01', title: 'Ankunft · Glasiglu', body: 'IVL am Nachmittag, Transfer 30 min südlich, Check-in in Kakslauttanen / Star Arctic / Muotka. Sauna, Abendessen, Polarlicht-Wecker aktiviert.' },
    { day: '02', title: 'UKK-Nationalpark-Schneeschuhwanderung', body: 'Halbtägige geführte Schneeschuhwanderung in den Urho-Kekkonen-Park, Goldwasch-Flüsse, Zwergbirken-Höhenzüge. Mittag zurück im Haus, zweite Hälfte frei.' },
    { day: '03', title: 'Husky- + Rentiertag', body: 'Morgens Husky-Safari ab Saariselkä. Nachmittags Rentierfahrt auf einem nahen Sámi-Hof. Abends: Eisfischen oder Sauna-Seesprung, und bei klarem Himmel Polarlicht-Wache.' },
    { day: '04', title: 'Ruhiger Morgen · Fahrt nach Inari', body: 'Letzter Iglu-Morgen, 50 min nördlich zum Inarisee für einen Sámi-Kulturtag im Siida-Museum. Abendflug ab IVL oder mit einer Inari-Nacht verlängern.' },
  ],
  seoTitle: 'Saariselkä Glasiglus & Unterkünfte, ab 200 €/Nacht',
  seoDescription: 'Wo Sie in Saariselkä übernachten: Kakslauttanen-Glasiglus ab 400 €/Nacht, Wildnis-Lodges (Muotka, Star Arctic) ab 200 €, am Urho-Kekkonen-Nationalpark.',
}

const ko: DestinationBody = {
  tagline: 'Urho Kekkonen 국립공원으로 향하는 관문. 유럽 최후의 진짜 야생 가장자리에 자리한 프리미엄 캐빈.',
  description: `사리셀카는 이나리 자치체에 속하며, 북극권에서 250km 북쪽 수목한계선에 자리합니다. 동쪽으로는 Urho Kekkonen 국립공원이 펼쳐집니다. 손길이 거의 닿지 않은 봉우리와 강, 원시림 2,550 km², EU 최대급의 야생 보호 구역 중 하나입니다.

마을은 작고 도보 가능한 규모로, 호텔과 레스토랑, 스키 슬로프 몇 곳을 중심으로 모여 있습니다. 프리미엄 캐빈은 Ivalo로 향하는 도로변과 국립공원 가장자리에 자리합니다. 위치가 핵심입니다. 문 앞에서 오후의 허스키 썰매 투어를 출발해 같은 저녁 오로라 아래에서 전용 사우나에 몸을 담그실 수 있습니다.`,
  facts: [
    { label: '글래스 이글루 1박', value: '400€부터' },
    { label: '윌더니스 로지 1박', value: '200€부터' },
    { label: '오로라 관측 가능 밤', value: '연 약 200일' },
    { label: '가장 가까운 공항', value: 'IVL 25분' },
  ],
  highlights: [
    { title: 'UKK 국립공원이 문 앞에', body: '핀란드에서 두 번째로 큰 국립공원. 사리셀카에서 표시된 스키·하이킹 코스가 시작되어 동쪽 야생 60km까지 이어집니다.' },
    { title: 'Kaunispää 봉우리 전망', body: '마을 위의 봉우리에는 정상까지 도로와 리프트가 연결되어, 깨끗한 지평선의 오로라 뷰와 여름 백야 파노라마를 선사합니다.' },
    { title: '허스키와 순록 켄넬', body: '마을에서 20분 이내에 자리한 여러 켄넬이 국립공원으로 향하는 반나절·다일정 썰매 투어를 운영합니다.' },
    { title: '오로라 밀도', body: '이 위도에서는 오로라 오벌이 머리 위로 자주 지나갑니다. 더 남쪽보다 훨씬 자주 오로라를 볼 수 있습니다.' },
    { title: '탕카바라 골드 빌리지', body: '차로 30분 남쪽: 라플란드 금광 채굴의 실제 유산이 살아 있으며, 사금 채취 체험과 황금 박물관이 함께 자리합니다.' },
    { title: '한적한 겨울 트레일', body: '트랙 길이는 길지만 이용 밀도는 낮아, 평일 아침에는 수 km의 정비된 트랙을 거의 단독으로 누리실 수 있습니다.' },
  ],
  whenToGo: `8월 말–4월이 오로라 시즌입니다. 10월과 2월이 가장 안정적이고 맑은 윈도우입니다.
12월–3월은 두꺼운 적설과 짧고 푸르게 빛나는 낮이 이어집니다.
7–8월은 아북극의 여름으로, 백야와 트레킹, 강 카누가 가능하고 9월부터는 모기가 사라집니다.`,
  howToGet: `이발로(IVL)로 비행, 25분 트랜스퍼. 헬싱키발 매일편이 있고, 영국·중부 유럽발 시즌 직항편이 운영됩니다.
헬싱키에서 로바니에미행 야간 열차 + 3시간 운전, 또는 겨울 직항 차터편도 가능합니다.
다크 스카이 캐빈은 마을 중심에서 조금 떨어져 있으므로 렌터카를 권장합니다.`,
  stayTypes: [
    'UKK 공원 가장자리의 오로라 글래스 캐빈. 2인용 소규모, 유리 천장, 주변 광원 없음.',
    'Kakslauttanen 방면 통나무 빌라. 6–10인용, 전용 사우나, 장작 벽난로, 완전한 야생의 정적.',
    '마을 안의 스키 인 아파트. 레스토랑과 Kaunispää 리프트까지 도보, 가족 단위에 적합.',
    'Ivalo 방면의 프리미엄 디자이너 샬레. 더 넓은 부지, 전용 호수, 라플란드에서 가장 조용한 매물.',
  ],
  siblings: [
    { name: 'Inari', href: '/destinations/inari', blurb: '더 북쪽 거대 호수 옆, 사미 문화의 중심지.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: '라플란드의 중심 도시이자 산타클로스 마을, 더 풍부한 인프라.' },
    { name: 'Levi', href: '/destinations/levi', blurb: '라플란드 최대 마을, 가장 쉬운 도착지.' },
  ],
  anchorProperties: [
    { name: 'Kakslauttanen Arctic Resort', propertyQuery: 'Kakslauttanen Arctic Resort', sid: 'destination_saariselka_kakslauttanen', note: '글래스 이글루의 원조. 오로라 성수기는 8–12개월 전 마감.' },
    { name: 'Star Arctic Hotel', propertyQuery: 'Star Arctic Hotel', sid: 'destination_saariselka_star_arctic', note: 'Kaunispää 봉우리 위. 유리 천장 객실과 사리셀카 최고의 스카이라인 뷰.' },
    { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_saariselka_muotka', note: '전 객실 스위트의 디자이너 로지, 풀 사파리 프로그램 포함.' },
    { name: '사리셀카 전체 숙소', href: HOTEL_SEARCH.saariselka, sid: 'destination_saariselka_all_search', note: 'Trip.com에서 사리셀카의 모든 숙소를 비교하세요.' },
  ],
  transport: [
    { mode: 'plane', label: '이발로 공항(IVL)에서', detail: 'HEL · LHR · CDG 겨울 직항편. 사리셀카 마을까지 남쪽으로 30km / 30분.' },
    { mode: 'bus', label: 'IVL 공항버스', detail: '편도 15–20€ · 30분 · 모든 항공편에 맞춰 운행.' },
    { mode: 'car', label: '택시 또는 사전 예약 트랜스퍼', detail: '사리셀카까지 40–60€. Kakslauttanen과 Muotka는 프리미엄 티어에 프라이빗 트랜스퍼가 포함됩니다.' },
    { mode: 'train', label: '헬싱키–로바니에미 침대 열차', detail: '로바니에미까지 VR 야간 열차(약 90€), 이후 버스 또는 렌터카로 4시간. IVL 항공편의 대안이지만 시간이 더 소요됩니다.' },
  ],
  carRental: {
    href: CARS.fromIvalo,
    sid: 'destination_saariselka_cars_ivl',
    airport: '이발로 공항(IVL) 픽업',
    blurb: '사리셀카까지 30분 · 이나리·이나리 호수 사이드트립에 유용',
  },
  dayPlan: [
    { day: '01', title: '도착 · 글래스 이글루', body: 'IVL 오후 도착, 남쪽으로 30분 트랜스퍼, Kakslauttanen / Star Arctic / Muotka 체크인. 사우나, 저녁, 오로라 알람 활성화.' },
    { day: '02', title: 'UKK 국립공원 스노슈', body: 'Urho Kekkonen에서 반나절 가이드 스노슈. 사금 채취 강과 키 작은 자작나무 능선. 점심은 숙소에서, 오후는 자유.' },
    { day: '03', title: '허스키 + 순록 데이', body: '아침 사리셀카 출발 허스키 사파리. 오후는 인근 사미 농장에서 순록 라이드. 저녁은 얼음낚시 또는 사우나·호수 입수. 하늘이 맑으면 오로라 관측.' },
    { day: '04', title: '느긋한 아침 · 이나리로 이동', body: '이글루에서의 마지막 아침, 북쪽으로 50분 운전해 이나리 호수와 Siida 박물관에서 사미 문화 체험. IVL에서 저녁 항공편 또는 이나리에서 하룻밤 더 연장.' },
  ],
  seoTitle: '사리셀카 글래스 이글루와 숙박. 1박 200€부터',
  seoDescription: '핀란드 라플란드 사리셀카 숙박 가이드: Kakslauttanen 글래스 이글루 1박 400€부터, 윌더니스 로지(Muotka, Star Arctic) 200€부터. Urho Kekkonen 국립공원 가장자리. 전용 사우나, 다크 스카이, 직접 예약.',
}

const fr: DestinationBody = {
  tagline: "La porte du parc national Urho Kekkonen, chalets premium aux portes de la dernière vraie nature sauvage d'Europe.",
  description: `Saariselkä se situe dans la commune d'Inari, à 250 km au nord du cercle polaire, à la limite des arbres. À l'est s'étend le parc national Urho Kekkonen, 2 550 km² de fjells, rivières et forêts primaires quasi intacts, l'une des plus grandes zones sauvages de l'UE.

Le village est petit et se parcourt à pied, autour de quelques hôtels, restaurants et pistes de ski. Les chalets premium se déploient le long de la route d'Ivalo et au bord du parc national. La situation compte : on peut sortir de chez soi pour une après-midi de traîneau à huskys et rentrer le même soir pour un sauna privatif sous les aurores.`,
  facts: [
    { label: 'Igloos de verre dès', value: '400 €/nuit' },
    { label: 'Lodges en pleine nature dès', value: '200 €/nuit' },
    { label: 'Nuits aurores', value: '~200/an' },
    { label: 'Aéroport le plus proche', value: 'IVL 25 min' },
  ],
  highlights: [
    { title: 'Le parc national UKK au pas de la porte', body: 'Le deuxième plus grand parc national de Finlande. Des pistes balisées de ski et de randonnée partent de Saariselkä et s\'enfoncent à 60 km vers l\'est.' },
    { title: 'Belvédère du fjell Kaunispää', body: 'Le fjell au-dessus du village a une route et une remontée jusqu\'au sommet. Aurore à horizon dégagé et panoramas de soleil de minuit en été.' },
    { title: 'Chenils de huskys et de rennes', body: 'Plusieurs élevages en activité à moins de 20 minutes du village proposent des sorties d\'une demi-journée ou de plusieurs jours dans le parc.' },
    { title: 'Densité d\'aurores', body: 'À cette latitude, l\'ovale auroral passe plus souvent au-dessus de la tête que dans les destinations plus méridionales, on voit des aurores bien plus souvent que plus au sud.' },
    { title: 'Village d\'orpaillage de Tankavaara', body: 'À 30 minutes au sud : l\'héritage minier de Laponie, avec stages d\'orpaillage et le Musée de l\'Or.' },
    { title: 'Pistes d\'hiver tranquilles', body: 'Le réseau de pistes est vaste mais peu fréquenté, des kilomètres de tracé damé pour vous quasi seul un matin de semaine.' },
  ],
  whenToGo: `Fin août à avril, c\'est la saison des aurores. Octobre et février sont les fenêtres les plus stables et dégagées.
Décembre à mars apporte la couverture neigeuse complète et des journées brèves baignées de lumière bleue.
Juillet–août est l\'été subarctique : soleil de minuit, randonnée, canoë sur les rivières, plus de moustiques dès septembre.`,
  howToGet: `Vol vers Ivalo (IVL), 25 min de transfert. Vols quotidiens depuis Helsinki, routes directes saisonnières depuis le Royaume-Uni et l\'Europe centrale.
Depuis Helsinki, train de nuit jusqu\'à Rovaniemi + 3 h de route, ou vols charter directs en hiver.
Voiture de location recommandée, les meilleurs chalets à ciel noir sont à quelques minutes du cœur du village.`,
  stayTypes: [
    'Chalets aurores en verre en bordure du parc UKK, petits, pour deux, toit de verre, sans lumière ambiante.',
    'Villas en rondins côté Kakslauttanen, 6 à 10 voyageurs, sauna privatif, cheminée à bois, silence sauvage complet.',
    'Appartements ski-in au village, à pied des restaurants et du télésiège de Kaunispää, parfait pour les familles.',
    'Chalets premium signés vers Ivalo, terrains plus vastes, lacs privés, les annonces les plus calmes de Laponie.',
  ],
  siblings: [
    { name: 'Inari', href: '/destinations/inari', blurb: 'Plus au nord sur le grand lac, cœur du peuple sámi.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'La capitale de la Laponie, le village du Père Noël et plus de services.' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'Le plus grand village et l\'arrivée la plus simple en Laponie.' },
  ],
  anchorProperties: [
    { name: 'Kakslauttanen Arctic Resort', propertyQuery: 'Kakslauttanen Arctic Resort', sid: 'destination_saariselka_kakslauttanen', note: 'Les igloos de verre originels. Complets 8 à 12 mois à l\'avance en haute saison aurores.' },
    { name: 'Star Arctic Hotel', propertyQuery: 'Star Arctic Hotel', sid: 'destination_saariselka_star_arctic', note: 'Sur le fjell Kaunispää, chambres à toit de verre et la plus belle ligne de toits sur Saariselkä.' },
    { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_saariselka_muotka', note: 'Lodge signé tout-suites avec programme safari complet.' },
    { name: 'Tous les hébergements de Saariselkä', href: HOTEL_SEARCH.saariselka, sid: 'destination_saariselka_all_search', note: 'Parcourez chaque adresse de Saariselkä sur Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Depuis l\'aéroport d\'Ivalo (IVL)', detail: 'Vols hivernaux directs HEL · LHR · CDG. 30 km / 30 min vers le sud jusqu\'au village.' },
    { mode: 'bus', label: 'Bus aéroport IVL', detail: '15 à 20 € l\'aller · 30 min · à chaque vol.' },
    { mode: 'car', label: 'Taxi ou transfert pré-réservé', detail: '40 à 60 € jusqu\'à Saariselkä. Kakslauttanen et Muotka incluent un transfert privé en formule premium.' },
    { mode: 'train', label: 'Couchette Helsinki–Rovaniemi', detail: 'Train de nuit VR jusqu\'à Rovaniemi (~90 €), puis 4 h en bus ou voiture. Alternative lente au vol IVL.' },
  ],
  carRental: {
    href: CARS.fromIvalo,
    sid: 'destination_saariselka_cars_ivl',
    airport: 'Prise en charge à l\'aéroport d\'Ivalo (IVL)',
    blurb: '30 min jusqu\'à Saariselkä · utile pour l\'excursion Inari / lac Inari',
  },
  dayPlan: [
    { day: '01', title: 'Arrivée · igloo de verre', body: 'IVL en après-midi, transfert 30 min vers le sud, check-in à Kakslauttanen / Star Arctic / Muotka. Sauna, dîner, réveil aurores armé.' },
    { day: '02', title: 'Raquettes dans le parc UKK', body: 'Sortie raquettes guidée d\'une demi-journée dans Urho Kekkonen, rivières d\'orpailleurs, crêtes de bouleaux nains. Déjeuner de retour à l\'hébergement, après-midi libre.' },
    { day: '03', title: 'Journée husky + rennes', body: 'Safari husky le matin depuis le village. Après-midi en traîneau à rennes dans une ferme sámi voisine. Soirée : pêche blanche ou plongeon depuis le sauna, et veille aux aurores par ciel clair.' },
    { day: '04', title: 'Matinée tranquille · route vers Inari', body: 'Dernière matinée en igloo, route 50 min au nord vers le lac Inari pour une journée culture sámi au musée Siida. Vol du soir depuis IVL ou prolongation avec une nuit à Inari.' },
  ],
  seoTitle: "Igloos de verre et hébergements à Saariselkä, dès 200 €",
  seoDescription: 'Où loger à Saariselkä : igloos de verre Kakslauttanen dès 400 €/nuit et lodges (Muotka, Star Arctic) dès 200 €, en bordure du parc national Urho Kekkonen.',
}

const it: DestinationBody = {
  tagline: "La porta del parco nazionale Urho Kekkonen, chalet premium ai margini dell'ultima vera natura selvaggia d'Europa.",
  description: `Saariselkä si trova nel comune di Inari, 250 km a nord del Circolo Polare, al limite degli alberi. A est si stende il parco nazionale Urho Kekkonen, 2.550 km² di fjell, fiumi e foreste antiche quasi intatti, una delle più vaste aree selvagge dell'UE.

Il paese è piccolo e si percorre a piedi, raccolto attorno a pochi hotel, ristoranti e piste da sci. Gli chalet premium si distribuiscono lungo la strada per Ivalo e ai margini del parco. La posizione conta: si può uscire di casa per un pomeriggio in slitta trainata dagli husky e rientrare la sera stessa per una sauna privata sotto l'aurora.`,
  facts: [
    { label: 'Igloo di vetro da', value: '400 €/notte' },
    { label: 'Lodge nella natura da', value: '200 €/notte' },
    { label: 'Notti aurorali', value: '~200/anno' },
    { label: 'Aeroporto più vicino', value: 'IVL 25 min' },
  ],
  highlights: [
    { title: 'Il parco nazionale UKK alla porta', body: 'Il secondo parco nazionale più grande di Finlandia. Tracciati segnati per sci e trekking partono da Saariselkä e si spingono per 60 km verso est.' },
    { title: 'Panoramica del fjell Kaunispää', body: 'Il fjell sopra il paese ha una strada e un impianto fino in cima. Aurora con orizzonte aperto e panorami del sole di mezzanotte in estate.' },
    { title: 'Allevamenti di husky e renne', body: 'Più allevamenti in attività entro 20 minuti dal paese offrono uscite di mezza giornata o di più giorni nel parco.' },
    { title: 'Densità di aurore', body: 'A questa latitudine l\'ovale aurorale passa più spesso sopra la testa rispetto a destinazioni più meridionali, si vedono aurore molto più spesso che più a sud.' },
    { title: 'Villaggio dei cercatori d\'oro di Tankavaara', body: 'A 30 min in auto verso sud: la vera eredità della corsa all\'oro lappone, con corsi di setacciatura e Museo dell\'Oro.' },
    { title: 'Piste invernali tranquille', body: 'La rete piste è ampia ma poco frequentata, chilometri battuti quasi vuoti in una mattina infrasettimanale.' },
  ],
  whenToGo: `Fine agosto–aprile è la stagione delle aurore. Ottobre e febbraio sono le finestre più stabili e serene.
Da dicembre a marzo il manto nevoso è completo e le giornate sono brevi, illuminate di blu.
Luglio–agosto è l\'estate subartica: sole di mezzanotte, trekking, canoa sul fiume; le zanzare scompaiono da settembre.`,
  howToGet: `Voli per Ivalo (IVL), 25 min di transfer. Voli quotidiani da Helsinki e rotte dirette stagionali da Regno Unito ed Europa centrale.
Da Helsinki, treno notturno per Rovaniemi + 3 ore d\'auto, oppure charter diretti in inverno.
Auto a noleggio consigliata, gli chalet con cielo più scuro distano una breve guida dal centro del paese.`,
  stayTypes: [
    'Chalet aurora in vetro ai margini del parco UKK, piccoli, per due persone, tetto di vetro, niente luci d\'intorno.',
    'Ville in tronchi sul versante di Kakslauttanen, 6–10 ospiti, sauna privata, camino a legna, silenzio selvaggio completo.',
    'Appartamenti ski-in in paese, a piedi da ristoranti e impianto di Kaunispää, ottimi per famiglie.',
    'Chalet premium firmati verso Ivalo, terreni più ampi, laghi privati, le proposte più silenziose di Lapponia.',
  ],
  siblings: [
    { name: 'Inari', href: '/destinations/inari', blurb: 'Più a nord sul grande lago, cuore del popolo sámi.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'La capitale della Lapponia e il villaggio di Babbo Natale, con più servizi.' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'Il paese più grande e l\'arrivo più semplice in Lapponia.' },
  ],
  anchorProperties: [
    { name: 'Kakslauttanen Arctic Resort', propertyQuery: 'Kakslauttanen Arctic Resort', sid: 'destination_saariselka_kakslauttanen', note: 'Gli igloo di vetro originali. Si prenotano 8–12 mesi prima in alta stagione aurorale.' },
    { name: 'Star Arctic Hotel', propertyQuery: 'Star Arctic Hotel', sid: 'destination_saariselka_star_arctic', note: 'Sul fjell Kaunispää, camere con tetto di vetro e la migliore vista sullo skyline di Saariselkä.' },
    { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_saariselka_muotka', note: 'Lodge solo suite di design con programma safari completo.' },
    { name: 'Tutti gli alloggi di Saariselkä', href: HOTEL_SEARCH.saariselka, sid: 'destination_saariselka_all_search', note: 'Esplori ogni struttura di Saariselkä su Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Dall\'aeroporto di Ivalo (IVL)', detail: 'Voli invernali diretti HEL · LHR · CDG. 30 km / 30 min verso sud fino al paese di Saariselkä.' },
    { mode: 'bus', label: 'Bus aeroporto IVL', detail: '15–20 € sola andata · 30 min · in coincidenza con ogni volo.' },
    { mode: 'car', label: 'Taxi o transfer pre-prenotato', detail: '40–60 € fino a Saariselkä. Kakslauttanen e Muotka includono il transfer privato in fascia premium.' },
    { mode: 'train', label: 'Vagone letto Helsinki–Rovaniemi', detail: 'Treno notturno VR fino a Rovaniemi (~90 €), poi 4 ore in bus o auto a noleggio. Alternativa lenta al volo per IVL.' },
  ],
  carRental: {
    href: CARS.fromIvalo,
    sid: 'destination_saariselka_cars_ivl',
    airport: 'Ritiro all\'aeroporto di Ivalo (IVL)',
    blurb: '30 min fino a Saariselkä · utile per la gita a Inari/Lago Inari',
  },
  dayPlan: [
    { day: '01', title: 'Arrivo · igloo di vetro', body: 'IVL nel pomeriggio, transfer 30 min verso sud, check-in a Kakslauttanen / Star Arctic / Muotka. Sauna, cena, allerta aurora attivata.' },
    { day: '02', title: 'Ciaspolata nel parco UKK', body: 'Mezza giornata guidata in racchette da neve nel parco Urho Kekkonen, fiumi auriferi, crinali di betulle nane. Pranzo al rientro in struttura, pomeriggio libero.' },
    { day: '03', title: 'Giornata husky + renne', body: 'Safari con husky al mattino dal paese. Pomeriggio in slitta con renne in una fattoria sámi vicina. Sera: pesca sul ghiaccio o tuffo dalla sauna, e caccia aurorale con cielo sereno.' },
    { day: '04', title: 'Mattina lenta · trasferimento a Inari', body: 'Ultima mattina in igloo, 50 min a nord fino al lago Inari per una giornata sámi al museo Siida. Volo serale da IVL o prolungare con una notte a Inari.' },
  ],
  seoTitle: 'Igloo di vetro e alloggi a Saariselkä, da 200 €/notte',
  seoDescription: 'Dove soggiornare a Saariselkä: igloo di vetro Kakslauttanen da 400 €/notte e lodge (Muotka, Star Arctic) da 200 €, al parco nazionale Urho Kekkonen.',
}

const nl: DestinationBody = {
  tagline: 'De poort naar het Urho Kekkonen-nationaal park, premium cabins aan de rand van de laatste echte wildernis van Europa.',
  description: `Saariselkä ligt in de gemeente Inari, 250 km ten noorden van de Poolcirkel, op de boomgrens. Naar het oosten strekt zich het Urho Kekkonen-nationaal park uit, 2.550 km² vrijwel onaangeroerd fjell, rivieren en oerbos, een van de grootste wildernissen van de EU.

Het dorp is klein en beloopbaar, rond enkele hotels, restaurants en skipistes. Premium cabins liggen langs de weg naar Ivalo en aan de rand van het park. De positie telt: u stapt vanaf de deur in een middag huskysleeën en keert dezelfde avond terug voor een privésauna onder het noorderlicht.`,
  facts: [
    { label: 'Glasiglo\'s vanaf', value: '€400/nacht' },
    { label: 'Wildernislodges vanaf', value: '€200/nacht' },
    { label: 'Aurora-nachten', value: '~200/jaar' },
    { label: 'Dichtstbijzijnde luchthaven', value: 'IVL 25 min' },
  ],
  highlights: [
    { title: 'UKK-nationaal park bij de deur', body: 'Het op een na grootste nationaal park van Finland. Gemarkeerde ski- en wandelroutes vertrekken vanuit Saariselkä en lopen 60 km oostwaarts.' },
    { title: 'Uitzichtpunt Kaunispää', body: 'Het fjell boven het dorp heeft een weg en een lift naar de top. Aurora met vrije horizon en zomerse middernachtszon-panorama\'s.' },
    { title: 'Husky- en rendierkennels', body: 'Meerdere actieve kennels binnen 20 minuten van het dorp organiseren halvedag- en meerdaagse sledetochten in het park.' },
    { title: 'Aurora-dichtheid', body: 'Op deze breedte trekt de aurora-ovaal vaker over het hoofd dan op zuidelijker bestemmingen, u ziet het noorderlicht veel vaker dan zuidelijker.' },
    { title: 'Gouddorp Tankavaara', body: '30 minuten zuidwaarts: het echte goudwasverleden van Lapland, met goudwascursussen en het Goudmuseum.' },
    { title: 'Rustige winterloipes', body: 'Het loipennetwerk is ruim maar weinig benut, kilometers prepareerd spoor vrijwel zonder andere skiërs op een doordeweekse ochtend.' },
  ],
  whenToGo: `Eind augustus–april is aurora-seizoen. Oktober en februari zijn de meest stabiele, heldere vensters.
December–maart geeft volledige sneeuwdek en korte, blauw belichte dagen.
Juli–augustus is subarctische zomer: middernachtszon, wandelen, riviervaren met de kano; vanaf september geen muggen meer.`,
  howToGet: `Vlieg naar Ivalo (IVL), 25 min transfer. Dagelijkse vluchten vanuit Helsinki en seizoensgebonden directe routes vanuit het VK en Centraal-Europa.
Vanuit Helsinki met de nachttrein naar Rovaniemi + 3 uur rijden, of directe charters in de winter.
Huurauto aanbevolen, de beste donkere-hemel cabins liggen op een korte rit van de dorpskern.`,
  stayTypes: [
    'Aurora-glascabins aan de rand van UKK, klein, voor twee personen, glazen plafond, geen omgevingslicht.',
    'Houten villa\'s aan de Kakslauttanen-zijde, 6–10 gasten, eigen sauna, houtgestookte open haard, volledige wildernisstilte.',
    'Ski-in appartementen in het dorp, loopafstand tot restaurants en de Kaunispää-lift, ideaal voor gezinnen.',
    'Premium designerchalets richting Ivalo, grotere kavels, privé-meren, de stilste aanbiedingen van Lapland.',
  ],
  siblings: [
    { name: 'Inari', href: '/destinations/inari', blurb: 'Noordelijker aan het grote meer, hart van het Sámi-volk.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'De hoofdstad van Lapland, het Kerstmandorp, meer voorzieningen.' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'Het grootste dorp en de makkelijkste aankomst in Lapland.' },
  ],
  anchorProperties: [
    { name: 'Kakslauttanen Arctic Resort', propertyQuery: 'Kakslauttanen Arctic Resort', sid: 'destination_saariselka_kakslauttanen', note: 'De oorspronkelijke glasiglo\'s. 8–12 maanden vooruit volgeboekt in aurora-hoogseizoen.' },
    { name: 'Star Arctic Hotel', propertyQuery: 'Star Arctic Hotel', sid: 'destination_saariselka_star_arctic', note: 'Op het Kaunispää-fjell, kamers met glazen dak en het mooiste zicht op Saariselkä.' },
    { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_saariselka_muotka', note: 'Designerlodge met enkel suites en volledig safariprogramma.' },
    { name: 'Alle Saariselkä-accommodaties', href: HOTEL_SEARCH.saariselka, sid: 'destination_saariselka_all_search', note: 'Bekijk elke Saariselkä-accommodatie op Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Vanaf luchthaven Ivalo (IVL)', detail: 'Directe wintervluchten HEL · LHR · CDG. 30 km / 30 min zuidwaarts naar het dorp Saariselkä.' },
    { mode: 'bus', label: 'IVL-luchthavenbus', detail: '€15–20 enkele reis · 30 min · sluit aan op elke vlucht.' },
    { mode: 'car', label: 'Taxi of vooraf geboekte transfer', detail: '€40–60 naar Saariselkä. Kakslauttanen en Muotka inclusief privétransfer in premium-tier.' },
    { mode: 'train', label: 'Slaaprijtuig Helsinki–Rovaniemi', detail: 'VR-nachttrein naar Rovaniemi (~€90), daarna 4 uur bus of huurauto. Langzamer alternatief voor de IVL-vlucht.' },
  ],
  carRental: {
    href: CARS.fromIvalo,
    sid: 'destination_saariselka_cars_ivl',
    airport: 'Ophalen op luchthaven Ivalo (IVL)',
    blurb: '30 min naar Saariselkä · handig voor de zijtrip naar Inari/Inarimeer',
  },
  dayPlan: [
    { day: '01', title: 'Aankomst · glasiglo', body: 'IVL in de middag, transfer 30 min zuidwaarts, check-in bij Kakslauttanen / Star Arctic / Muotka. Sauna, diner, aurora-alarm geactiveerd.' },
    { day: '02', title: 'UKK-park sneeuwschoenwandeling', body: 'Halve dag begeleide sneeuwschoenwandeling in Urho Kekkonen, rivieren met goudwasverleden, ruggen met dwergberk. Lunch terug in de accommodatie, tweede helft vrij.' },
    { day: '03', title: 'Husky + rendierdag', body: 'Husky-safari in de ochtend vanuit Saariselkä. Middags rendierenrit op een nabijgelegen Sámi-boerderij. Avond: ijsvissen of sauna-meersprong, en bij heldere hemel noorderlicht kijken.' },
    { day: '04', title: 'Rustige ochtend · rijden naar Inari', body: 'Laatste iglo-ochtend, 50 min noordwaarts naar het Inari-meer voor een Sámi-cultuurdag in het Siida-museum. Avondvlucht vanaf IVL of verlengen met een nacht in Inari.' },
  ],
  seoTitle: "Glasiglo\'s en accommodaties in Saariselkä, vanaf €200/nacht",
  seoDescription: 'Waar te verblijven in Saariselkä: Kakslauttanen-glasiglo\'s vanaf €400/nacht en wildernislodges (Muotka, Star Arctic) vanaf €200, bij het Urho Kekkonen-park.',
}

const ja: DestinationBody = {
  tagline: 'ウルホ・ケッコネン国立公園への玄関口。ヨーロッパ最後の真の原野の縁にあるプレミアムキャビン。',
  description: `サーリセルカは北極圏のおよそ250km北、樹林限界に位置するイナリ自治体内の集落です。東側にはウルホ・ケッコネン国立公園が広がり、2,550平方kmのほぼ手つかずの山、川、原生林がEU最大級の原野の一つを形作っています。

村は小さく徒歩で回れ、いくつかのホテル、レストラン、スキー場が中心に集まっています。プレミアムキャビンはイヴァロへ向かう道沿いと国立公園の縁に並びます。この立地が肝心で、玄関先から午後のハスキーぞりに出かけ、その夜にはオーロラの下でプライベートサウナへ戻ることができます。`,
  facts: [
    { label: 'ガラス製イグルー1泊', value: '400ユーロから' },
    { label: 'ウィルダネスロッジ1泊', value: '200ユーロから' },
    { label: 'オーロラ観測夜', value: '年間約200日' },
    { label: '最寄り空港', value: 'IVL 25分' },
  ],
  highlights: [
    { title: '玄関先にUKK国立公園', body: 'フィンランドで2番目に大きな国立公園。サーリセルカからマークされたスキー&ハイキングルートが東へ60km、原野へ伸びています。' },
    { title: 'カウニスパー山の展望', body: '村の上の山には道路とリフトで頂上まで上がれます。地平線が開けたオーロラ観賞と、夏の白夜のパノラマ。' },
    { title: 'ハスキーとトナカイの飼育場', body: '村から20分圏内に営業中の飼育場が複数あり、半日から数日のそりツアーで国立公園を駆け抜けます。' },
    { title: 'オーロラの濃度', body: 'この緯度ではオーロラ帯が頭上を通る頻度が南の目的地より高く、南の目的地よりはるかに頻繁にオーロラが見られます。' },
    { title: 'タンカヴァーラ・ゴールドビレッジ', body: '南へ車で30分。ラップランド本物の金採掘の遺産、砂金採り体験コースとゴールド博物館があります。' },
    { title: '静かな冬のトレイル', body: 'スキー網は充実していますが利用は少なく、平日朝には何キロもの整備されたトラックを独占できます。' },
  ],
  whenToGo: `8月下旬から4月がオーロラ・シーズンです。10月と2月が最も天候が安定し、空が澄んだ窓です。
12月から3月は積雪が安定し、青い光に包まれた短い日が続きます。
7〜8月は亜寒帯の夏:白夜、ハイキング、川のカヌー、9月までには蚊もいなくなります。`,
  howToGet: `イヴァロ(IVL)へ。送迎は25分。ヘルシンキから毎日便、冬季にはイギリスや中央ヨーロッパからの季節直行便があります。
ヘルシンキからはロヴァニエミへの夜行列車+車で3時間、または冬季の直行チャーター便。
レンタカー推奨。最高の暗い空のキャビン道は、村中心から少し走った先にあります。`,
  stayTypes: [
    'UKK公園の縁にあるオーロラ・ガラスキャビン。小ぶり、2名、ガラス天井、周囲に光はありません。',
    'カクスラウッタネン側のログヴィラ。6〜10名、専用サウナ、薪暖炉、原野の完全な静寂。',
    '村のスキーインアパートメント。レストランとカウニスパーリフトまで徒歩、家族向け。',
    'イヴァロ方面のプレミアムデザイナーシャレー。広い敷地、専用湖、ラップランドで最も静かな物件群。',
  ],
  siblings: [
    { name: 'Inari', href: '/destinations/inari', blurb: 'さらに北、大湖のほとり、サーミ文化の中心。' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'ラップランドの首府、サンタクロース村、より整った設備。' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'ラップランドで最大の村、最も到着しやすい場所。' },
  ],
  anchorProperties: [
    { name: 'Kakslauttanen Arctic Resort', propertyQuery: 'Kakslauttanen Arctic Resort', sid: 'destination_saariselka_kakslauttanen', note: '元祖ガラス・イグルー。オーロラのピーク期は8〜12か月前に予約。' },
    { name: 'Star Arctic Hotel', propertyQuery: 'Star Arctic Hotel', sid: 'destination_saariselka_star_arctic', note: 'カウニスパー山上。ガラス屋根の客室から、サーリセルカ村のスカイラインが最も美しく見えます。' },
    { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_saariselka_muotka', note: 'オールスイートのデザイナーロッジ。サファリ全プログラム付き。' },
    { name: 'サーリセルカのすべての宿泊施設', href: HOTEL_SEARCH.saariselka, sid: 'destination_saariselka_all_search', note: 'Trip.comでサーリセルカの全宿を閲覧できます。' },
  ],
  transport: [
    { mode: 'plane', label: 'イヴァロ空港(IVL)から', detail: 'HEL · LHR · CDG からの冬季直行便。30km / 30分南でサーリセルカ村。' },
    { mode: 'bus', label: 'IVL空港バス', detail: '片道15〜20ユーロ・30分・全便に接続。' },
    { mode: 'car', label: 'タクシーまたは事前予約送迎', detail: 'サーリセルカまで40〜60ユーロ。カクスラウッタネンとムオトカの上級プランには専用送迎が含まれます。' },
    { mode: 'train', label: 'ヘルシンキ〜ロヴァニエミ寝台', detail: 'VR夜行でロヴァニエミ(約90ユーロ)、その後バスかレンタカーで4時間。IVL便のゆったりした代替。' },
  ],
  carRental: {
    href: CARS.fromIvalo,
    sid: 'destination_saariselka_cars_ivl',
    airport: 'イヴァロ空港(IVL)で受け取り',
    blurb: 'サーリセルカまで30分・イナリ/イナリ湖サイドトリップに便利',
  },
  dayPlan: [
    { day: '01', title: '到着・ガラス・イグルー', body: 'IVL午後着、南へ30分送迎、Kakslauttanen / Star Arctic / Muotkaにチェックイン。サウナ、夕食、オーロラ・アラームをセット。' },
    { day: '02', title: 'UKK国立公園のスノーシュー', body: 'ウルホ・ケッコネンへガイド付き半日スノーシュー。砂金採りの川、ドワーフバーチの尾根。昼食は宿に戻り、午後は自由時間。' },
    { day: '03', title: 'ハスキー&トナカイの日', body: '午前はサーリセルカ村発のハスキーサファリ。午後は近くのサーミ農場でトナカイ乗り。夜はアイスフィッシングまたはサウナ後の湖入り。晴れていればオーロラ観賞も。' },
    { day: '04', title: 'ゆっくり朝・イナリへドライブ', body: 'イグルーで最後の朝、北へ50分走りイナリ湖へ。Siida博物館でサーミ文化の日。夕方のIVL便で出発、またはイナリで1泊延長。' },
  ],
  seoTitle: 'サーリセルカのガラス・イグルー&宿泊。1泊200ユーロから',
  seoDescription: 'フィンランド領ラップランド・サーリセルカでの宿選び:カクスラウッタネンのガラス・イグルー1泊400ユーロから、ウィルダネスロッジ(ムオトカ、Star Arctic)200ユーロから。ウルホ・ケッコネン国立公園の縁。プライベートサウナ、暗い空、直接予約。',
}

const es: DestinationBody = {
  tagline: 'La puerta al Parque Nacional Urho Kekkonen, cabañas premium al borde del último gran wildernes de Europa.',
  description: `Saariselkä se sitúa en el municipio de Inari, 250 km al norte del Círculo Polar, en el límite del bosque. Al este se extiende el Parque Nacional Urho Kekkonen, 2.550 km² de fells, ríos y bosque primario casi intactos, una de las mayores zonas salvajes de la UE.

El pueblo es pequeño y peatonal, agrupado en torno a unos pocos hoteles, restaurantes y pistas de esquí. Las cabañas premium se reparten a lo largo de la carretera hacia Ivalo y junto al límite del parque. La ubicación importa: puede salir de su puerta a una tarde de mushing y volver para una sauna privada bajo la aurora esa misma noche.`,
  facts: [
    { label: 'Iglús de cristal desde', value: '400 €/noche' },
    { label: 'Lodges silvestres desde', value: '200 €/noche' },
    { label: 'Noches de aurora', value: '~200/año' },
    { label: 'Aeropuerto más cercano', value: 'IVL 25 min' },
  ],
  highlights: [
    { title: 'Parque Nacional UKK a la puerta', body: 'Segundo mayor parque nacional de Finlandia. Rutas marcadas de esquí y senderismo salen de Saariselkä y se internan 60 km al este en la naturaleza.' },
    { title: 'Mirador del fell Kaunispää', body: 'El fell sobre el pueblo tiene carretera y remonte hasta la cima. Auroras con horizonte limpio y panorámicas de sol de medianoche en verano.' },
    { title: 'Granjas de huskys y renos', body: 'Varias granjas activas a 20 min del pueblo organizan salidas en trineo de medio día y de varios días dentro del parque nacional.' },
    { title: 'Densidad de auroras', body: 'A esta latitud, el óvalo auroral pasa por encima con más frecuencia que en destinos más al sur, verá auroras mucho más a menudo que más al sur.' },
    { title: 'Aldea del oro de Tankavaara', body: 'A 30 min en coche al sur: la herencia real de búsqueda de oro de Laponia, con cursos de bateo y el Museo del Oro.' },
    { title: 'Pistas invernales silenciosas', body: 'Las redes de esquí son extensas pero poco frecuentadas, kilómetros de pista preparada con casi nadie más una mañana entre semana.' },
  ],
  whenToGo: `Finales de agosto – abril es temporada de aurora. Octubre y febrero son las ventanas más estables y de cielo despejado.
Diciembre – marzo trae la cubierta de nieve completa y días cortos teñidos de azul.
Julio – agosto es verano subártico: sol de medianoche, senderismo, canoa por el río, sin mosquitos a partir de septiembre.`,
  howToGet: `Vuele a Ivalo (IVL), 25 min de traslado. Vuelos diarios desde Helsinki y rutas directas estacionales desde Reino Unido y Europa central.
Desde Helsinki en tren nocturno a Rovaniemi + 3 h en coche, o vuelos chárter directos en invierno.
Coche de alquiler recomendado, los mejores caminos a cabañas con cielo oscuro están a un breve trayecto del centro del pueblo.`,
  stayTypes: [
    'Cabañas aurora de cristal al borde del parque UKK, pequeñas, para 2 personas, techos de cristal, sin luz ambiente.',
    'Villas de troncos en el lado de Kakslauttanen, 6–10 huéspedes, sauna privada, chimenea de leña, silencio salvaje completo.',
    'Apartamentos ski-in en el pueblo, restaurantes y remonte Kaunispää a pie, buenos para familias.',
    'Chalets de diseño hacia Ivalo, parcelas mayores, lagos privados, los alojamientos más silenciosos de Laponia.',
  ],
  siblings: [
    { name: 'Inari', href: '/destinations/inari', blurb: 'Más al norte sobre el gran lago, corazón sami.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'La capital de Laponia, Pueblo de Papá Noel, más servicios.' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'El pueblo más grande y el llegada más fácil a Laponia.' },
  ],
  anchorProperties: [
    { name: 'Kakslauttanen Arctic Resort', propertyQuery: 'Kakslauttanen Arctic Resort', sid: 'destination_saariselka_kakslauttanen', note: 'Los iglús de cristal originales. Se reservan con 8–12 meses para la mejor aurora.' },
    { name: 'Star Arctic Hotel', propertyQuery: 'Star Arctic Hotel', sid: 'destination_saariselka_star_arctic', note: 'En el fell Kaunispää, habitaciones con techo de cristal y la mejor línea del pueblo de Saariselkä.' },
    { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_saariselka_muotka', note: 'Lodge de diseño con todas las suites y programa completo de safaris.' },
    { name: 'Todos los alojamientos de Saariselkä', href: HOTEL_SEARCH.saariselka, sid: 'destination_saariselka_all_search', note: 'Consulte todas las propiedades de Saariselkä en Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Desde el aeropuerto de Ivalo (IVL)', detail: 'Vuelos directos invernales desde HEL · LHR · CDG. 30 km / 30 min al sur hasta el pueblo de Saariselkä.' },
    { mode: 'bus', label: 'Autobús del aeropuerto IVL', detail: '15–20 € ida · 30 min · enlaza con cada vuelo.' },
    { mode: 'car', label: 'Taxi o traslado reservado', detail: '40–60 € hasta Saariselkä. Kakslauttanen y Muotka incluyen traslado privado en su categoría premium.' },
    { mode: 'train', label: 'Coche cama Helsinki–Rovaniemi', detail: 'Tren nocturno VR a Rovaniemi (~90 €), después 4 h en autobús o coche de alquiler. Alternativa lenta al vuelo a IVL.' },
  ],
  carRental: {
    href: CARS.fromIvalo,
    sid: 'destination_saariselka_cars_ivl',
    airport: 'Recogida en el aeropuerto de Ivalo (IVL)',
    blurb: '30 min a Saariselkä · útil para la escapada a Inari/Lago Inari',
  },
  dayPlan: [
    { day: '01', title: 'Llegada · iglú de cristal', body: 'IVL por la tarde, traslado 30 min al sur, check-in en Kakslauttanen / Star Arctic / Muotka. Sauna, cena, alarma de aurora armada.' },
    { day: '02', title: 'Raquetas en el parque UKK', body: 'Medio día con guía en raquetas dentro de Urho Kekkonen, ríos de oro, lomas de abedul enano. Almuerzo de regreso en el hotel, segunda mitad libre.' },
    { day: '03', title: 'Día de husky + reno', body: 'Safari de huskys por la mañana desde el pueblo de Saariselkä. Por la tarde, paseo en reno en una granja sami cercana. Por la noche: pesca en hielo o baño en el lago tras la sauna, y vigilancia de auroras si el cielo está despejado.' },
    { day: '04', title: 'Mañana lenta · viaje a Inari', body: 'Última mañana en el iglú, 50 min al norte hasta el lago Inari para un día de cultura sami en el museo Siida. Tomar el vuelo de tarde desde IVL o ampliar con una noche en Inari.' },
  ],
  seoTitle: 'Iglús de cristal y alojamiento en Saariselkä, desde 200 €',
  seoDescription: 'Dónde alojarse en Saariselkä: iglús de cristal Kakslauttanen desde 400 €/noche y lodges (Muotka, Star Arctic) desde 200 €, junto al Parque Urho Kekkonen.',
}

const ptBR: DestinationBody = {
  tagline: 'A porta de entrada para o Parque Nacional Urho Kekkonen, cabanas premium na borda da última verdadeira região selvagem da Europa.',
  description: `Saariselkä fica no município de Inari, 250 km ao norte do Círculo Polar Ártico, na linha das árvores. A leste se estende o Parque Nacional Urho Kekkonen, 2.550 quilômetros quadrados de fells, rios e floresta primária quase intocados, uma das maiores áreas selvagens da UE.

A vila é pequena e percorrível a pé, agrupada em torno de alguns hotéis, restaurantes e pistas de esqui. As cabanas premium ficam ao longo da estrada para Ivalo e à beira do parque. A localização importa: você pode sair da porta para uma tarde de trenó com huskies e voltar para uma sauna privativa sob a aurora na mesma noite.`,
  facts: [
    { label: 'Iglus de vidro a partir de', value: '€400/noite' },
    { label: 'Lodges selvagens a partir de', value: '€200/noite' },
    { label: 'Noites de aurora', value: '~200/ano' },
    { label: 'Aeroporto mais próximo', value: 'IVL 25 min' },
  ],
  highlights: [
    { title: 'Parque Nacional UKK na porta', body: 'Segundo maior parque nacional da Finlândia. Rotas marcadas de esqui e caminhada partem de Saariselkä e seguem 60 km a leste mata adentro.' },
    { title: 'Mirante do fell Kaunispää', body: 'O fell acima da vila tem estrada e teleférico até o topo. Observação de aurora com horizonte limpo e panoramas de sol da meia-noite no verão.' },
    { title: 'Canis de huskies e renas', body: 'Vários canis em atividade a 20 min da vila operam passeios de trenó de meio dia e de vários dias dentro do parque nacional.' },
    { title: 'Densidade de auroras', body: 'Nesta latitude, o oval auroral passa por cima com mais frequência do que em destinos mais ao sul, você vê auroras com muito mais frequência do que mais ao sul.' },
    { title: 'Vila do ouro de Tankavaara', body: 'A 30 min de carro ao sul: a herança real da garimpagem de ouro na Lapônia, com cursos de bateia e o Museu do Ouro.' },
    { title: 'Trilhas tranquilas de inverno', body: 'As redes de esqui são extensas, mas o uso é rarefeito, quilômetros de pista preparada com quase ninguém em uma manhã de dia útil.' },
  ],
  whenToGo: `Fim de agosto a abril é a temporada de aurora. Outubro e fevereiro são as janelas mais estáveis e de céu limpo.
Dezembro a março traz cobertura total de neve e dias curtos banhados de luz azul.
Julho e agosto é verão subártico: sol da meia-noite, caminhadas, canoagem no rio, sem mosquitos a partir de setembro.`,
  howToGet: `Voe até Ivalo (IVL), 25 min de traslado. Voos diários de Helsinque e rotas diretas sazonais do Reino Unido e da Europa central.
De Helsinque, trem noturno até Rovaniemi + 3 h de carro, ou voos charter diretos no inverno.
Aluguel de carro recomendado, as melhores estradas para cabanas em céu escuro ficam a poucos minutos do centro da vila.`,
  stayTypes: [
    'Cabanas aurora de vidro na borda do parque UKK, pequenas, para 2 pessoas, tetos de vidro, sem luz ambiente.',
    'Vilas de tronco no lado de Kakslauttanen, 6–10 hóspedes, sauna privativa, lareira a lenha, silêncio selvagem completo.',
    'Apartamentos ski-in na vila, a pé até os restaurantes e ao teleférico de Kaunispää, bons para famílias.',
    'Chalés de design rumo a Ivalo, terrenos maiores, lagos privativos, as hospedagens mais silenciosas da Lapônia.',
  ],
  siblings: [
    { name: 'Inari', href: '/destinations/inari', blurb: 'Mais ao norte no grande lago, coração sámi.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'A capital da Lapônia, Vila do Papai Noel, mais infraestrutura.' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'A maior vila e a chegada mais fácil à Lapônia.' },
  ],
  anchorProperties: [
    { name: 'Kakslauttanen Arctic Resort', propertyQuery: 'Kakslauttanen Arctic Resort', sid: 'destination_saariselka_kakslauttanen', note: 'Os iglus de vidro originais. Reserve com 8–12 meses para o pico da aurora.' },
    { name: 'Star Arctic Hotel', propertyQuery: 'Star Arctic Hotel', sid: 'destination_saariselka_star_arctic', note: 'No fell Kaunispää, quartos com teto de vidro e o melhor skyline da vila de Saariselkä.' },
    { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_saariselka_muotka', note: 'Lodge de design com todas as suítes e programa completo de safáris.' },
    { name: 'Todas as hospedagens de Saariselkä', href: HOTEL_SEARCH.saariselka, sid: 'destination_saariselka_all_search', note: 'Veja todas as propriedades de Saariselkä no Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Do Aeroporto de Ivalo (IVL)', detail: 'Voos diretos de inverno de HEL · LHR · CDG. 30 km / 30 min ao sul até a vila de Saariselkä.' },
    { mode: 'bus', label: 'Ônibus do aeroporto IVL', detail: '€15–20 só ida · 30 min · liga com todos os voos.' },
    { mode: 'car', label: 'Táxi ou traslado pré-agendado', detail: '€40–60 até Saariselkä. Kakslauttanen e Muotka incluem traslado privativo no nível premium.' },
    { mode: 'train', label: 'Vagão-leito Helsinque–Rovaniemi', detail: 'Trem noturno VR até Rovaniemi (~€90), depois 4 h de ônibus ou carro alugado. Alternativa lenta ao voo para IVL.' },
  ],
  carRental: {
    href: CARS.fromIvalo,
    sid: 'destination_saariselka_cars_ivl',
    airport: 'Retirada no Aeroporto de Ivalo (IVL)',
    blurb: '30 min até Saariselkä · útil para o bate-volta a Inari/Lago Inari',
  },
  dayPlan: [
    { day: '01', title: 'Chegada · iglu de vidro', body: 'IVL à tarde, traslado 30 min ao sul, check-in em Kakslauttanen / Star Arctic / Muotka. Sauna, jantar, alarme de aurora armado.' },
    { day: '02', title: 'Raquetes no parque UKK', body: 'Meio dia guiado de raquetes em Urho Kekkonen, rios de ouro, cristas de bétula-anã. Almoço de volta na propriedade, segunda metade livre.' },
    { day: '03', title: 'Dia de huskies + renas', body: 'Safári de huskies pela manhã saindo da vila de Saariselkä. À tarde, passeio com rena em uma fazenda sámi próxima. À noite: pesca no gelo ou mergulho no lago após a sauna, e vigília da aurora se o céu estiver limpo.' },
    { day: '04', title: 'Manhã lenta · estrada para Inari', body: 'Última manhã no iglu, 50 min ao norte até o Lago Inari para um dia de cultura sámi no museu Siida. Pegue o voo da noite em IVL ou acrescente uma noite em Inari.' },
  ],
  seoTitle: 'Iglus de vidro e hospedagem em Saariselkä, desde €200',
  seoDescription: 'Onde ficar em Saariselkä: iglus de vidro Kakslauttanen a partir de €400/noite e lodges (Muotka, Star Arctic) a partir de €200, no Parque Urho Kekkonen.',
}

const zhCN: DestinationBody = {
  tagline: '通往乌尔霍·凯科宁国家公园的门户。位于欧洲最后真正荒野边缘的高端小屋。',
  description: `萨利瑟尔卡位于伊纳里市,在北极圈以北250公里、树线一带。东侧是乌尔霍·凯科宁国家公园,2,550平方公里近乎未受干扰的山地、河流与原始森林,是欧盟最大的荒野地带之一。

村庄小巧、可步行,几家酒店、餐厅与雪道围绕其间。高端小屋沿着前往伊瓦洛的公路以及国家公园边缘排开。位置至关重要:走出家门即可享受一下午的哈士奇雪橇,当晚再回到极光下的私人桑拿。`,
  facts: [
    { label: '玻璃冰屋每晚', value: '400欧元起' },
    { label: '荒野小屋每晚', value: '200欧元起' },
    { label: '极光夜', value: '约200晚/年' },
    { label: '最近机场', value: 'IVL 25分钟' },
  ],
  highlights: [
    { title: 'UKK国家公园近在门口', body: '芬兰第二大国家公园。标记好的滑雪与徒步路线从萨利瑟尔卡出发,向东深入荒野60公里。' },
    { title: 'Kaunispää山观景台', body: '村庄上方的山有公路与缆车直达山顶。地平线开阔的极光视野,夏季还可眺望午夜阳光全景。' },
    { title: '哈士奇与驯鹿农场', body: '村庄20分钟车程内有多家在运营的犬舍,提供半日及多日的国家公园雪橇之旅。' },
    { title: '极光密度', body: '在此纬度,极光椭圆带掠过头顶的频率高于更南的目的地。比更南边的目的地更常见到极光。' },
    { title: 'Tankavaara黄金村', body: '向南驱车30分钟:拉普兰真正的淘金传承,提供淘金课程与黄金博物馆。' },
    { title: '宁静的冬季雪道', body: '滑雪网络规模不小,使用却很少。平日清晨,数公里整理好的雪道几乎只有你一人。' },
  ],
  whenToGo: `8月底至4月是极光季。10月与2月是天空最稳定、最清澈的窗口。
12月至3月,积雪满覆,白昼短促而浸染蓝光。
7月至8月是亚北极夏:午夜阳光、徒步、河道独木舟,9月起再无蚊虫。`,
  howToGet: `飞往伊瓦洛(IVL),接送25分钟。每日有赫尔辛基航班,冬季还有来自英国与中欧的季节直飞。
赫尔辛基出发可乘夜车至罗瓦涅米再驱车3小时,或冬季直飞包机。
推荐租车。最佳暗空小屋的道路距村中心仅短程车程。`,
  stayTypes: [
    'UKK公园边缘的极光玻璃小屋。小巧、2人入住、玻璃天花板,无环境灯光。',
    'Kakslauttanen一侧的原木别墅。6–10人,私人桑拿、薪火壁炉,完全荒野般的寂静。',
    '村中的滑入式公寓。步行可达餐厅与Kaunispää缆车,适合家庭。',
    '通往伊瓦洛方向的高端设计师木屋。更大地块、私人湖泊,拉普兰最安静的房源。',
  ],
  siblings: [
    { name: 'Inari', href: '/destinations/inari', blurb: '更靠北的大湖,萨米文化的核心。' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: '拉普兰首府、圣诞老人村、设施更齐全。' },
    { name: 'Levi', href: '/destinations/levi', blurb: '拉普兰最大、最易抵达的村庄。' },
  ],
  anchorProperties: [
    { name: 'Kakslauttanen Arctic Resort', propertyQuery: 'Kakslauttanen Arctic Resort', sid: 'destination_saariselka_kakslauttanen', note: '初代玻璃冰屋。极光旺季需提前8–12个月预订。' },
    { name: 'Star Arctic Hotel', propertyQuery: 'Star Arctic Hotel', sid: 'destination_saariselka_star_arctic', note: '位于Kaunispää山。玻璃屋顶客房俯瞰最佳的萨利瑟尔卡村轮廓。' },
    { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_saariselka_muotka', note: '全套房设计师小屋,配有完整探险项目。' },
    { name: '萨利瑟尔卡全部住宿', href: HOTEL_SEARCH.saariselka, sid: 'destination_saariselka_all_search', note: '在Trip.com浏览萨利瑟尔卡的所有房源。' },
  ],
  transport: [
    { mode: 'plane', label: '从伊瓦洛机场(IVL)出发', detail: '冬季直飞自HEL · LHR · CDG。南行30公里 / 30分钟抵达萨利瑟尔卡村。' },
    { mode: 'bus', label: 'IVL机场巴士', detail: '单程15–20欧元 · 30分钟 · 每趟航班均衔接。' },
    { mode: 'car', label: '出租车或预订接送', detail: '至萨利瑟尔卡40–60欧元。Kakslauttanen与Muotka的高级套餐含私人接送。' },
    { mode: 'train', label: '赫尔辛基。罗瓦涅米卧铺', detail: 'VR夜车至罗瓦涅米(约90欧元),再乘巴士或租车4小时。是IVL直飞的慢速替代。' },
  ],
  carRental: {
    href: CARS.fromIvalo,
    sid: 'destination_saariselka_cars_ivl',
    airport: '伊瓦洛机场(IVL)取车',
    blurb: '至萨利瑟尔卡30分钟 · 便于前往伊纳里/伊纳里湖一日游',
  },
  dayPlan: [
    { day: '01', title: '抵达 · 玻璃冰屋', body: '下午抵达IVL,南行30分钟,入住Kakslauttanen / Star Arctic / Muotka。桑拿、晚餐,启动极光警报。' },
    { day: '02', title: 'UKK国家公园雪鞋徒步', body: '在乌尔霍·凯科宁公园的半日向导雪鞋徒步。淘金的河流、矮桦山脊。返回住处午餐,下午自由。' },
    { day: '03', title: '哈士奇 + 驯鹿日', body: '上午自萨利瑟尔卡村出发的哈士奇探险。下午前往附近的萨米农场骑驯鹿。夜晚:冰钓或桑拿后跳湖。天空晴朗时还可观赏极光。' },
    { day: '04', title: '悠闲早晨 · 驱车前往伊纳里', body: '冰屋最后一晨,北行50分钟前往伊纳里湖,Siida博物馆度过萨米文化日。从IVL搭乘傍晚航班,或在伊纳里加宿一晚。' },
  ],
  seoTitle: '萨利瑟尔卡玻璃冰屋与住宿。每晚200欧元起',
  seoDescription: '芬兰拉普兰萨利瑟尔卡住宿指南:Kakslauttanen玻璃冰屋每晚400欧元起、Muotka与Star Arctic等荒野小屋200欧元起。位于乌尔霍·凯科宁国家公园边缘。私人桑拿、暗空、直接预订。',
}

export default function Saariselka() {
  return (
    <DestinationPage
      slug="saariselka"
      name="Saariselkä"
      heroImage="/images/saariselka-hero.webp"
      ogImage="https://laplandstays.com/og-saariselka.jpg"
      seoKeywords={['saariselka accommodation', 'saariselkä glass igloo', 'kakslauttanen', 'star arctic hotel', 'muotka wilderness lodge', 'where to stay in saariselkä', 'ukk park accommodation', 'ivalo cabin']}
      body={{ en, fi, de, ja, es, 'pt-BR': ptBR, 'zh-CN': zhCN, ko, fr, it, nl }}
      highlightLinks={{
        3: { base: 'https://laplandvibes.com', path: '/northern-lights/' },
        5: { base: 'https://laplandskiresorts.com', path: '/resort/saariselka/' },
      }}
    />
  )
}
