import DestinationPage, { type DestinationBody } from '../components/DestinationPage'
import { HOTEL_SEARCH_FOR, CARS_FOR } from '../lib/affiliate'

const en: DestinationBody = {
  tagline: 'The capital of Finnish Lapland, Santa Claus Village, two rivers, and direct aurora access from a full-service city.',
  description: `Rovaniemi is the administrative capital of Finnish Lapland and the main international gateway. The city sits on the Arctic Circle, at the confluence of the Kemijoki and Ounasjoki rivers, with a population of about 65,000, small by European standards, but by far the largest settlement in the region.

The mix is unusual: a working northern city with restaurants, the Arktikum science museum, and Aalto-designed civic architecture, alongside the original Santa Claus Village on the Arctic Circle line and a network of cabin areas within a short drive. For travellers who want aurora and wilderness but also want to fly home via a major airport, Rovaniemi is the natural base.`,
  facts: [
    { label: 'Nearest airport', value: 'RVN 10 min' },
    { label: 'Population', value: '~65,000' },
    { label: 'Arctic Circle', value: 'Runs through city' },
    { label: 'Santa Village', value: 'Open year-round' },
  ],
  highlights: [
    { title: 'Santa Claus Village on the Arctic Circle', body: 'The original, a white line marks the Arctic Circle across the square, and Santa keeps office hours every day of the year.' },
    { title: 'Arktikum museum', body: "One of Finland's finest museums of Arctic science, Sámi culture and Lapland history, a 172-metre glass tube on the bank of the Ounasjoki, pointing north." },
    { title: 'Ranua Wildlife Park', body: "An 80 km drive south: one of the world's northernmost zoos, with 50 Arctic and boreal species including Finland's only polar bears, wolverines and lynx." },
    { title: 'Ounasvaara fell inside the city', body: 'A ski hill, downhill bike park and aurora viewpoint, 10 minutes from the centre by car, no national-park drive required.' },
    { title: 'Flight connectivity', body: 'Rovaniemi airport has the widest winter route network in Lapland: direct to London, Paris, Frankfurt, Vienna, and dozens of charter routes.' },
    { title: 'River-side cabin belts', body: 'Properties along the Kemijoki and on Ounasvaara give aurora-ready dark skies within 15 minutes of restaurants and shopping.' },
  ],
  whenToGo: `Mid-September – late March is aurora season; November – February is deepest winter.
Around December 21 the sun rises for barely two hours: Rovaniemi sits just south of true polar night, in long blue twilight.
June – July gives midnight sun and rafting trips on the rivers around the city.`,
  howToGet: `Fly into Rovaniemi (RVN), the best-connected airport in Lapland.
Finnish Railways runs overnight trains from Helsinki with car-carrier service direct to Rovaniemi station.
Onward car hire is easy; the city is the logistical base for inland Lapland road trips.`,
  stayTypes: [
    'River-side log cabins on the Kemijoki and Ounasjoki, 6–10 guests, sauna, fireplace, open river views.',
    'Glass aurora villas around Santa Claus Village, purpose-built for Arctic Circle experience with sky-view bedrooms.',
    'Designer apartments in the city centre, walkable to restaurants, a base for day-trip safari schedules.',
    'Ounasvaara fell-side chalets, ski-in in winter, bike trails in summer, aurora-ready horizon five minutes from downtown.',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: 'The biggest ski village in Finland, 2 hr north.' },
    { name: 'Ylläs', href: '/destinations/yllas', blurb: 'Quieter fell destination, 2 hr northwest.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Wilderness gateway, 3 hr further north.' },
  ],
  anchorProperties: [
    { name: 'Arctic TreeHouse Hotel', propertyQuery: 'Arctic TreeHouse Hotel', sid: 'destination_rovaniemi_arctic_treehouse', note: 'Architect-designed glass-front nest suites at Santa Claus Village.' },
    { name: 'Apukka Resort', propertyQuery: 'Apukka Resort Rovaniemi', sid: 'destination_rovaniemi_apukka', note: 'Lakeside aurora cabins 15 min from the city, full safari menu on site.' },
    { name: 'Nova Skyland', propertyQuery: 'Nova Skyland', sid: 'destination_rovaniemi_nova_skyland', note: 'Newer glass-roofed apartments with skyline views from Ounasvaara fell.' },
    { name: 'All Rovaniemi accommodation', href: HOTEL_SEARCH_FOR('en').rovaniemi, sid: 'destination_rovaniemi_all_search', note: 'Browse every Rovaniemi hotel and cabin on Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'From Rovaniemi Airport (RVN)', detail: 'Year-round flights from HEL plus winter routes from LHR · CDG · BCN · MAD. 10 km / 15 min to city centre.' },
    { mode: 'bus', label: 'RVN airport bus', detail: '€7 one-way · 15 min to centre · meets every flight.' },
    { mode: 'car', label: 'Taxi to centre', detail: '€15–25. Most central hotels include shuttle in winter packages.' },
    { mode: 'train', label: 'Helsinki–Rovaniemi sleeper', detail: 'VR overnight train with car-carriage option, ~€90 in a couchette. The most popular family arrival route.' },
  ],
  carRental: {
    href: CARS_FOR('en').fromRovaniemi,
    sid: 'destination_rovaniemi_cars_rvn',
    airport: 'Pickup at Rovaniemi Airport (RVN)',
    blurb: '10 km to city · the easiest pickup in Lapland · year-round availability',
  },
  dayPlan: [
    { day: '01', title: 'Arrive · Santa Claus Village', body: 'RVN 10 km from city. Drop bags, head straight to Santa Claus Village (open year-round). Cross the Arctic Circle line, post a card. Dinner in town at Nili.' },
    { day: '02', title: 'Husky + ice-floating', body: 'Apukka or a nearby farm for a husky safari (book ahead). Afternoon dry-suit ice-floating on Ounasjoki, surprisingly warm, completely silent. Aurora window from Ounasvaara fell.' },
    { day: '03', title: 'Arktikum + city culture', body: 'Half-day at Arktikum (Sámi + Lapland history museum, beautiful glass corridor). Lunch in city. Afternoon free, Lainio Snow Village day-trip if seasonal.' },
    { day: '04', title: 'Slow morning · onward', body: 'Last sauna, breakfast in town. Either fly home from RVN or rent a car and drive 2 h north to Levi for a second leg.' },
  ],
  seoTitle: 'Rovaniemi Cabins & Aurora Villas, The Arctic Circle Capital',
  seoDescription: 'River-side log cabins, glass aurora villas and Santa Claus Village stays in Rovaniemi, Finnish Lapland. Arctic Circle access, major airport, direct booking.',
}

const fi: DestinationBody = {
  tagline: 'Suomen Lapin pääkaupunki, Joulupukin pajakylä, kaksi jokea ja suora pääsy revontulille täysipalvelukaupungista.',
  description: `Rovaniemi on Suomen Lapin hallinnollinen pääkaupunki ja pääasiallinen kansainvälinen porttikaupunki. Kaupunki sijaitsee napapiirillä, Kemijoen ja Ounasjoen yhtymäkohdassa, ja siellä on noin 65 000 asukasta, eurooppalaisittain pieni, mutta selvästi alueen suurin asutus.

Yhdistelmä on epätavallinen: toimiva pohjoinen kaupunki ravintoloineen, Arktikum-tiedemuseo ja Aallon suunnittelema kuntahallinnon arkkitehtuuri, jonka rinnalla alkuperäinen Joulupukin pajakylä napapiirin linjalla ja mökkialueet lyhyen ajomatkan päässä. Matkailijoille jotka haluavat revontulia ja erämaata mutta myös lentää kotiin suuren lentokentän kautta, Rovaniemi on luonnollinen tukikohta.`,
  facts: [
    { label: 'Lähin lentokenttä', value: 'RVN 10 min' },
    { label: 'Väkiluku', value: '~65 000' },
    { label: 'Napapiiri', value: 'Kulkee kaupungin läpi' },
    { label: 'Pajakylä', value: 'Auki ympäri vuoden' },
  ],
  highlights: [
    { title: 'Joulupukin pajakylä napapiirillä', body: 'Alkuperäinen: valkoinen viiva merkitsee napapiirin kulun aukion poikki, ja Joulupukki pitää vastaanottoa joka päivä vuodessa.' },
    { title: 'Arktikum-museo', body: 'Suomen hienoin arktisen tieteen, saamelaiskulttuurin ja Lapin historian museo, 172 metrin lasiputki Ounasjoen rannalla, osoittamassa pohjoiseen.' },
    { title: 'Ranuan eläinpuisto', body: '80 km ajomatka etelään: yksi maailman pohjoisimmista eläinpuistoista, 50 arktista ja boreaalista lajia mukaan lukien Suomen ainoat jääkarhut, ahmat ja ilvekset.' },
    { title: 'Ounasvaaran tunturi kaupungin sisällä', body: 'Hiihtomäki, alamäkipyöräpuisto ja revontulien näkölava, 10 minuuttia keskustasta autolla, ei kansallispuistoajoa tarvita.' },
    { title: 'Lentoyhteydet', body: 'Rovaniemen lentokentällä on Lapin laajin talviverkosto: suoria Lontooseen, Pariisiin, Frankfurtiin, Wieniin ja kymmeniä charter-reittejä.' },
    { title: 'Joenvarsimökkivyöhykkeet', body: 'Kemijoen varrella ja Ounasvaaralla sijaitsevat kohteet tarjoavat revontulivalmiit pimeät taivaat 15 minuutin päässä ravintoloista ja kaupoista.' },
  ],
  whenToGo: `Syyskuun puoliväli–maaliskuun loppu on revontulisesonki; marraskuu–helmikuu on syvintä talvea.
Rovaniemellä ei ole varsinaista kaamosta: aurinko nousee jouluaikaankin pariksi tunniksi, ja keskipäivä on pitkää sinistä hämärää.
Kesä–heinäkuu antaa keskiyön auringon ja koskenlaskua Oikaraisenkoskella.`,
  howToGet: `Lennä Rovaniemelle (RVN), Lapin parhaiten verkostoitunut lentokenttä.
VR liikennöi yöjunia Helsingistä autonkuljetuspalvelulla suoraan Rovaniemen asemalle.
Jatkokulku vuokra-autolla on helppo; kaupunki on sisämaa-Lapin road tripin logistinen tukikohta.`,
  stayTypes: [
    'Joenvarsihirsimökit Kemijoen ja Ounasjoen varrella, 6–10 vierasta, sauna, takka, avoimet jokimaisemat.',
    'Lasi-aurora-villat Joulupukin pajakylän ympärillä, rakennettu napapiirikokemukseen taivaannäköalalla.',
    'Design-huoneistot kaupungin keskustassa, kävelyetäisyydellä ravintoloista, tukikohta päiväretkisafariaikatauluille.',
    'Ounasvaaran tunturin rinneasunnot, rinneasuminen talvella, polut kesällä, revontulihorisontti viiden minuutin päässä keskustasta.',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: 'Suomen suurin hiihtokylä, 2 tunnin päässä pohjoiseen.' },
    { name: 'Ylläs', href: '/destinations/yllas', blurb: 'Hiljaisempi tunturikohde, 2 tunnin päässä luoteeseen.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Erämaaportti, 3 tunnin päässä pohjoisempana.' },
  ],
  anchorProperties: [
    { name: 'Arctic TreeHouse Hotel', propertyQuery: 'Arctic TreeHouse Hotel', sid: 'destination_rovaniemi_arctic_treehouse', note: 'Arkkitehtien suunnittelemat lasisviitit Joulupukin Pajakylässä.' },
    { name: 'Apukka Resort', propertyQuery: 'Apukka Resort Rovaniemi', sid: 'destination_rovaniemi_apukka', note: 'Rannan aurora-mökit 15 min päässä kaupungista, täysi safarivalikoima paikan päällä.' },
    { name: 'Nova Skyland', propertyQuery: 'Nova Skyland', sid: 'destination_rovaniemi_nova_skyland', note: 'Uudet lasikattoiset huoneistot Ounasvaaran tunturilta kaupunkinäkymin.' },
    { name: 'Kaikki Rovaniemen majoitukset', href: HOTEL_SEARCH_FOR('fi').rovaniemi, sid: 'destination_rovaniemi_all_search', note: 'Selaa kaikki Rovaniemen hotellit ja mökit Sembossa.' },
  ],
  transport: [
    { mode: 'plane', label: 'Rovaniemen lentokentältä (RVN)', detail: 'Ympärivuotiset lennot HEL:stä sekä talvireitit LHR · CDG · BCN · MAD. 10 km / 15 min kaupungin keskustaan.' },
    { mode: 'bus', label: 'RVN-lentokenttäbussi', detail: '7 € yhteen suuntaan · 15 min keskustaan · jokaisen lennon yhteydessä.' },
    { mode: 'car', label: 'Taksi keskustaan', detail: '15–25 €. Useimmat keskustahotellit sisältävät kuljetuksen talvipaketteihin.' },
    { mode: 'train', label: 'Helsinki–Rovaniemi-makuujuna', detail: 'VR:n yöjuna autonkuljetusvaihtoehdolla, noin 90 € makuupaikassa. Suosituin perhematkareitti.' },
  ],
  carRental: {
    href: CARS_FOR('fi').fromRovaniemi,
    sid: 'destination_rovaniemi_cars_rvn',
    airport: 'Nouto Rovaniemen lentokentältä (RVN)',
    blurb: '10 km kaupunkiin · Lapin helpoin nouto · saatavuus ympäri vuoden',
  },
  dayPlan: [
    { day: '01', title: 'Saavu · Joulupukin pajakylä', body: 'RVN 10 km kaupungista. Jätä laukut, suuntaa suoraan Pajakylään (auki ympäri vuoden). Ylitä napapiirin viiva, lähetä kortti. Illallinen Niliissä keskustassa.' },
    { day: '02', title: 'Husky + jäätikkö-kelluminen', body: 'Apukka tai lähitilalla husky-safari (varaa etukäteen). Iltapäivällä kuivapuvun jäätikkö-kelluminen Ounasjoella, yllättävän lämmin, täysin hiljainen. Revontuli-ikkuna Ounasvaaralta.' },
    { day: '03', title: 'Arktikum + kaupunkikulttuuri', body: 'Puolipäivä Arktikumissa (saamelais- + Lapin-historian museo, kaunis lasikäytävä). Lounas kaupungissa. Iltapäivä vapaa, Lainion lumikylän päiväretki sesongissa.' },
    { day: '04', title: 'Rauhallinen aamu · eteenpäin', body: 'Viimeinen sauna, aamiainen kaupungissa. Lennä kotiin RVN:stä tai vuokraa auto ja aja 2 h pohjoiseen Leville toiselle etapille.' },
  ],
  seoTitle: 'Rovaniemen mökit ja aurora-villat, napapiirin pääkaupunki',
  seoDescription: 'Joenvarsihirsimökit, lasi-aurora-villat ja Joulupukin pajakylän majoitukset Rovaniemellä. Napapiirin pääsy, iso lentokenttä, suora varaus.',
}

const de: DestinationBody = {
  tagline: 'Die Hauptstadt von Finnisch-Lappland, Weihnachtsmanndorf, zwei Flüsse und direkter Polarlicht-Zugang aus einer Vollservice-Stadt.',
  description: `Rovaniemi ist die Verwaltungshauptstadt von Finnisch-Lappland und das wichtigste internationale Tor zur Region. Die Stadt liegt auf dem Polarkreis, am Zusammenfluss von Kemijoki und Ounasjoki, mit etwa 65.000 Einwohnern, nach europäischen Maßstäben klein, aber bei weitem die größte Siedlung der Region.

Die Mischung ist ungewöhnlich: eine funktionierende nordische Stadt mit Restaurants, dem Wissenschaftsmuseum Arktikum und Aalto-Architektur, dazu das ursprüngliche Weihnachtsmanndorf auf der Polarkreis-Linie und ein Netzwerk von Hüttengebieten in kurzer Fahrt. Für Reisende, die Polarlicht und Wildnis wollen, aber auch über einen großen Flughafen heimfliegen möchten, ist Rovaniemi die natürliche Basis.`,
  facts: [
    { label: 'Nächster Flughafen', value: 'RVN 10 min' },
    { label: 'Einwohner', value: '~65.000' },
    { label: 'Polarkreis', value: 'Läuft durch die Stadt' },
    { label: 'Weihnachtsmanndorf', value: 'Ganzjährig geöffnet' },
  ],
  highlights: [
    { title: 'Weihnachtsmanndorf am Polarkreis', body: 'Das Original, eine weiße Linie markiert den Polarkreis über den Platz, und der Weihnachtsmann hält jeden Tag des Jahres Bürozeiten.' },
    { title: 'Arktikum-Museum', body: 'Finnlands schönstes Museum für arktische Wissenschaft, Sámi-Kultur und Lappland-Geschichte, eine 172 Meter lange Glasröhre am Ufer des Ounasjoki, die nach Norden zeigt.' },
    { title: 'Ranua Wildpark', body: '80 km Fahrt südlich: einer der nördlichsten Zoos der Welt, mit 50 arktischen und borealen Arten, darunter Finnlands einzige Eisbären, Vielfraße und Luchse.' },
    { title: 'Ounasvaara-Fjäll mitten in der Stadt', body: 'Eine Skihöhe, ein Downhill-Bikepark und ein Polarlicht-Aussichtspunkt, 10 Minuten mit dem Auto vom Zentrum, ohne Nationalpark-Fahrt.' },
    { title: 'Flugverbindungen', body: 'Der Flughafen Rovaniemi hat das breiteste Winter-Streckennetz Lapplands: Direktflüge nach London, Paris, Frankfurt, Wien und dutzende Charterrouten.' },
    { title: 'Flussufer-Hüttenzonen', body: 'Unterkünfte am Kemijoki und auf Ounasvaara bieten polarlicht-taugliche dunkle Himmel innerhalb von 15 Minuten zu Restaurants und Einkauf.' },
  ],
  whenToGo: `Mitte September – Ende März ist Polarlicht-Saison; November – Februar ist tiefster Winter.
Rovaniemi hat keine echte Polarnacht: Auch um den 21. Dezember geht die Sonne für gut zwei Stunden auf, der Mittag ist eine lange blaue Dämmerung.
Juni – Juli bringt Mitternachtssonne und Wildwasser-Rapids in Oikaraisenkoski.`,
  howToGet: `Fliegen Sie nach Rovaniemi (RVN), der bestvernetzte Flughafen Lapplands.
Die finnischen Eisenbahnen fahren Nachtzüge aus Helsinki mit Autotransport direkt zum Bahnhof Rovaniemi.
Weiterfahrt mit Mietwagen ist einfach; die Stadt ist die logistische Basis für Roadtrips im Inland-Lappland.`,
  stayTypes: [
    'Flussufer-Blockhütten am Kemijoki und Ounasjoki, 6–10 Gäste, Sauna, Kamin, offene Flussblicke.',
    'Polarlicht-Glasvillen rund um das Weihnachtsmanndorf, speziell für das Polarkreis-Erlebnis mit Schlafzimmern mit Himmelsblick.',
    'Designer-Apartments im Stadtzentrum, fußläufig zu Restaurants, Basis für Tagestour-Safari-Pläne.',
    'Chalets am Hang des Ounasvaara, Ski-in im Winter, Bike-Trails im Sommer, polarlicht-tauglicher Horizont fünf Minuten vom Zentrum.',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: 'Das größte Skidorf Finnlands, 2 h nördlich.' },
    { name: 'Ylläs', href: '/destinations/yllas', blurb: 'Ruhigeres Fjäll-Ziel, 2 h nordwestlich.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Wildnis-Tor, 3 h weiter nördlich.' },
  ],
  anchorProperties: [
    { name: 'Arctic TreeHouse Hotel', propertyQuery: 'Arctic TreeHouse Hotel', sid: 'destination_rovaniemi_arctic_treehouse', note: 'Architektonisch gestaltete Nest-Suiten mit Glasfront am Weihnachtsmanndorf.' },
    { name: 'Apukka Resort', propertyQuery: 'Apukka Resort Rovaniemi', sid: 'destination_rovaniemi_apukka', note: 'Polarlicht-Hütten am See 15 min von der Stadt, volles Safari-Menü vor Ort.' },
    { name: 'Nova Skyland', propertyQuery: 'Nova Skyland', sid: 'destination_rovaniemi_nova_skyland', note: 'Neuere Apartments mit Glasdach mit Skyline-Blick vom Fjäll Ounasvaara.' },
    { name: 'Alle Rovaniemi-Unterkünfte', href: HOTEL_SEARCH_FOR('de').rovaniemi, sid: 'destination_rovaniemi_all_search', note: 'Stöbern Sie in allen Rovaniemi-Hotels und Hütten auf Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Ab Flughafen Rovaniemi (RVN)', detail: 'Ganzjährige Flüge ab HEL plus Winterrouten ab LHR · CDG · BCN · MAD. 10 km / 15 min ins Stadtzentrum.' },
    { mode: 'bus', label: 'RVN-Flughafenbus', detail: '7 € einfach · 15 min ins Zentrum · zu jedem Flug.' },
    { mode: 'car', label: 'Taxi ins Zentrum', detail: '15–25 €. Die meisten zentralen Hotels beinhalten Shuttle in Winterpaketen.' },
    { mode: 'train', label: 'Nachtzug Helsinki–Rovaniemi', detail: 'VR-Nachtzug mit Autotransport-Option, ~90 € im Liegewagen. Die beliebteste Anreise für Familien.' },
  ],
  carRental: {
    href: CARS_FOR('de').fromRovaniemi,
    sid: 'destination_rovaniemi_cars_rvn',
    airport: 'Abholung am Flughafen Rovaniemi (RVN)',
    blurb: '10 km zur Stadt · die einfachste Abholung in Lappland · ganzjährig verfügbar',
  },
  dayPlan: [
    { day: '01', title: 'Ankunft · Weihnachtsmanndorf', body: 'RVN 10 km vom Zentrum. Gepäck abstellen, direkt zum Weihnachtsmanndorf (ganzjährig geöffnet). Polarkreis-Linie überqueren, Postkarte abschicken. Abendessen im Nili in der Stadt.' },
    { day: '02', title: 'Husky + Eisfloating', body: 'Apukka oder ein nahegelegener Hof für eine Husky-Safari (vorbuchen). Nachmittags Trockenanzug-Eisfloating auf dem Ounasjoki, überraschend warm, völlig still. Polarlicht-Fenster vom Fjäll Ounasvaara.' },
    { day: '03', title: 'Arktikum + Stadtkultur', body: 'Halbtägiger Besuch im Arktikum (Sámi + Lappland-Geschichtsmuseum, schöner Glaskorridor). Mittag in der Stadt. Nachmittag frei, saisonaler Tagesausflug ins Lainio Snow Village.' },
    { day: '04', title: 'Ruhiger Morgen · Weiterreise', body: 'Letzte Sauna, Frühstück in der Stadt. Entweder von RVN heimfliegen oder einen Mietwagen nehmen und 2 h nordwärts nach Levi für eine zweite Etappe fahren.' },
  ],
  seoTitle: 'Rovaniemi: Hütten & Polarlicht-Villen am Polarkreis',
  seoDescription: 'Flussufer-Blockhütten, Polarlicht-Glasvillen und Übernachtungen im Weihnachtsmanndorf in Rovaniemi. Polarkreis-Zugang, großer Flughafen, direkte Buchung.',
}

const ko: DestinationBody = {
  tagline: '핀란드 라플란드의 중심 도시. 산타클로스 마을, 두 강줄기, 그리고 풀서비스 도시에서 곧장 닿는 오로라.',
  description: `로바니에미는 핀란드 라플란드의 행정 중심이자 가장 큰 국제 관문입니다. 도시는 북극권 위에, Kemijoki와 Ounasjoki 두 강이 합류하는 지점에 자리하며 인구는 약 65,000명입니다. 유럽 기준으로는 작지만 이 지역에서는 단연 가장 큰 도시입니다.

조합은 흔치 않습니다. 레스토랑과 Arktikum 과학 박물관, 알바 알토가 설계한 공공 건축이 어우러진 진짜 북쪽 도시이지만, 북극권 라인 위의 원조 산타클로스 마을과 차로 짧은 거리의 캐빈 단지가 그 옆에 함께합니다. 오로라와 야생을 원하지만 큰 공항에서 손쉽게 귀국하길 바라는 분께 로바니에미는 자연스러운 베이스입니다.`,
  facts: [
    { label: '가장 가까운 공항', value: 'RVN 10분' },
    { label: '인구', value: '약 65,000명' },
    { label: '북극권', value: '도심을 가로지름' },
    { label: '산타 빌리지', value: '연중무휴' },
  ],
  highlights: [
    { title: '북극권의 산타클로스 마을', body: '원조입니다. 광장을 가로지르는 흰 선이 북극권을 표시하며, 산타는 일 년 365일 사무 시간을 지킵니다.' },
    { title: 'Arktikum 박물관', body: '북극 과학, 사미 문화, 라플란드 역사. 핀란드 최고의 박물관으로, 172m 길이의 유리 회랑이 Ounasjoki 강가에서 북쪽을 가리킵니다.' },
    { title: 'Ranua 야생동물원', body: '남쪽으로 80km: 세계 최북단급 동물원에서 핀란드 유일의 북극곰과 울버린, 스라소니를 비롯한 50종의 북극·아북극 동물을 만날 수 있습니다.' },
    { title: '도심 안의 Ounasvaara 봉우리', body: '스키 슬로프, 다운힐 바이크 파크, 오로라 전망대까지 모두 있는 봉우리. 도심에서 차로 10분, 국립공원까지 운전할 필요가 없습니다.' },
    { title: '항공 연결성', body: '로바니에미 공항은 라플란드에서 가장 넓은 겨울 노선망을 갖춥니다. 런던, 파리, 프랑크푸르트, 빈 직항편과 수십 개의 차터 노선.' },
    { title: '강가 캐빈 벨트', body: 'Kemijoki와 Ounasvaara에 자리한 숙소는 레스토랑과 쇼핑 인프라에서 15분 이내, 오로라 관측에 충분히 어두운 하늘을 제공합니다.' },
  ],
  whenToGo: `9월 중순–3월 말이 오로라 시즌이고, 11월–2월이 가장 깊은 겨울입니다.
로바니에미에는 진정한 극야가 없습니다. 12월 21일 무렵에도 해가 두 시간 남짓 떠오르며, 한낮은 긴 푸른 황혼입니다.
6–7월은 백야와 Oikaraisenkoski의 급류 래프팅의 계절입니다.`,
  howToGet: `로바니에미(RVN)로 비행하세요. 라플란드에서 가장 잘 연결된 공항입니다.
VR이 헬싱키에서 자동차 운송 서비스가 포함된 야간 열차를 운행하며, 로바니에미 역에 바로 정차합니다.
이후 렌터카 이동도 수월하며, 도시는 내륙 라플란드 로드트립의 물류 거점이 됩니다.`,
  stayTypes: [
    'Kemijoki와 Ounasjoki 강가의 통나무 캐빈. 6–10인용, 사우나, 벽난로, 트인 강 풍경.',
    '산타클로스 마을 주변의 글래스 오로라 빌라. 북극권 체험에 맞춰 설계, 하늘이 보이는 침실.',
    '도심의 디자이너 아파트. 레스토랑까지 도보, 당일치기 사파리 일정을 짜기 좋은 베이스.',
    'Ounasvaara 봉우리 사면의 샬레. 겨울엔 스키 인, 여름엔 트레일, 도심에서 5분이면 오로라 지평선.',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: '핀란드 최대 스키 마을, 북쪽으로 2시간.' },
    { name: 'Ylläs', href: '/destinations/yllas', blurb: '더 조용한 봉우리 목적지, 북서쪽으로 2시간.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: '야생 관문, 더 북쪽으로 3시간.' },
  ],
  anchorProperties: [
    { name: 'Arctic TreeHouse Hotel', propertyQuery: 'Arctic TreeHouse Hotel', sid: 'destination_rovaniemi_arctic_treehouse', note: '산타클로스 마을의 건축가가 설계한 유리 정면 네스트 스위트.' },
    { name: 'Apukka Resort', propertyQuery: 'Apukka Resort Rovaniemi', sid: 'destination_rovaniemi_apukka', note: '도심에서 15분 거리의 호숫가 오로라 캐빈. 풀 사파리 프로그램이 현장에서 운영됩니다.' },
    { name: 'Nova Skyland', propertyQuery: 'Nova Skyland', sid: 'destination_rovaniemi_nova_skyland', note: 'Ounasvaara 봉우리에서 도심 스카이라인이 펼쳐지는 신축 유리 천장 아파트.' },
    { name: '로바니에미 전체 숙소', href: HOTEL_SEARCH_FOR('ko').rovaniemi, sid: 'destination_rovaniemi_all_search', note: 'Trip.com에서 로바니에미의 모든 호텔과 캐빈을 비교하세요.' },
  ],
  transport: [
    { mode: 'plane', label: '로바니에미 공항(RVN)에서', detail: '연중 헬싱키발 노선과 LHR · CDG · BCN · MAD 겨울 직항편. 도심까지 10km / 15분.' },
    { mode: 'bus', label: 'RVN 공항버스', detail: '편도 7€ · 도심까지 15분 · 모든 항공편에 맞춰 운행.' },
    { mode: 'car', label: '도심까지 택시', detail: '15–25€. 대부분의 중심부 호텔은 겨울 패키지에 셔틀이 포함됩니다.' },
    { mode: 'train', label: '헬싱키–로바니에미 침대 열차', detail: '자동차 운송 옵션이 포함된 VR 야간 열차, 침대 1석 약 90€. 가족 단위 여행자가 가장 선호하는 도착 경로입니다.' },
  ],
  carRental: {
    href: CARS_FOR('ko').fromRovaniemi,
    sid: 'destination_rovaniemi_cars_rvn',
    airport: '로바니에미 공항(RVN) 픽업',
    blurb: '도심까지 10km · 라플란드에서 가장 쉬운 픽업 · 연중 운영',
  },
  dayPlan: [
    { day: '01', title: '도착 · 산타클로스 마을', body: 'RVN에서 도심까지 10km. 짐을 두고 곧장 산타클로스 마을로(연중 개방). 북극권 선을 넘어 엽서 한 장 부치고, 저녁은 도심의 Nili에서.' },
    { day: '02', title: '허스키 + 아이스 플로팅', body: 'Apukka 또는 인근 농장에서 허스키 사파리(사전 예약). 오후는 Ounasjoki 강에서 드라이슈트 아이스 플로팅. 의외로 따뜻하고 완전히 고요합니다. Ounasvaara 봉우리에서 오로라 윈도우.' },
    { day: '03', title: 'Arktikum + 도시 문화', body: '오전은 Arktikum(사미와 라플란드 역사 박물관, 아름다운 유리 회랑)에서 반나절. 도심에서 점심. 오후는 자유. 시즌이라면 Lainio Snow Village 당일치기를 권합니다.' },
    { day: '04', title: '느긋한 아침 · 다음 일정', body: '마지막 사우나, 도심에서 아침. RVN에서 귀국 항공편을 타거나, 렌터카로 북쪽으로 2시간 운전해 두 번째 일정의 레비로 이동.' },
  ],
  seoTitle: '로바니에미 캐빈과 오로라 빌라. 북극권의 중심 도시',
  seoDescription: '핀란드 라플란드 로바니에미: 강가 통나무 캐빈, 글래스 오로라 빌라, 산타클로스 마을 숙박. 북극권 접근성과 대형 공항, 직접 예약.',
}

const fr: DestinationBody = {
  tagline: 'La capitale de la Laponie finlandaise, village du Père Noël, deux rivières et accès direct aux aurores depuis une ville full-service.',
  description: `Rovaniemi est la capitale administrative de la Laponie finlandaise et la principale porte internationale de la région. La ville s'étend sur le cercle polaire, à la confluence du Kemijoki et de l'Ounasjoki, et compte environ 65 000 habitants, petite à l'échelle européenne, mais de loin la plus grande agglomération de la région.

Le mélange est singulier : une vraie ville du Nord avec restaurants, le musée scientifique Arktikum et une architecture civique signée Aalto, à côté du village originel du Père Noël posé sur la ligne du cercle polaire et d'un chapelet de zones de chalets accessibles en quelques minutes. Pour qui veut aurores et nature mais aussi rentrer par un grand aéroport, Rovaniemi est la base évidente.`,
  facts: [
    { label: 'Aéroport le plus proche', value: 'RVN 10 min' },
    { label: 'Population', value: '~65 000' },
    { label: 'Cercle polaire', value: 'Traverse la ville' },
    { label: 'Village du Père Noël', value: 'Ouvert toute l\'année' },
  ],
  highlights: [
    { title: 'Village du Père Noël sur le cercle polaire', body: 'L\'original, une ligne blanche marque le cercle à travers la place, et le Père Noël tient bureau chaque jour de l\'année.' },
    { title: 'Musée Arktikum', body: 'Le plus beau musée de Finlande sur la science arctique, la culture sámi et l\'histoire de Laponie, un tube de verre de 172 mètres sur la rive de l\'Ounasjoki, pointant vers le nord.' },
    { title: 'Parc animalier de Ranua', body: 'À 80 km au sud : l\'un des zoos les plus septentrionaux au monde, avec 50 espèces arctiques et boréales, dont les seuls ours polaires de Finlande, gloutons et lynx.' },
    { title: 'Fjell Ounasvaara dans la ville', body: 'Pistes de ski, parc VTT de descente et belvédère aurores, à 10 minutes du centre en voiture, sans détour par un parc national.' },
    { title: 'Connexions aériennes', body: 'L\'aéroport de Rovaniemi a le plus large réseau hivernal de Laponie : vols directs vers Londres, Paris, Francfort, Vienne et des dizaines de charters.' },
    { title: 'Ceintures de chalets en bord de rivière', body: 'Les adresses le long du Kemijoki et sur Ounasvaara offrent un ciel suffisamment noir pour l\'aurore à quinze minutes des restaurants et des commerces.' },
  ],
  whenToGo: `Mi-septembre à fin mars constitue la saison des aurores ; novembre à février est le cœur de l\'hiver.
Rovaniemi ne connaît pas de vraie nuit polaire : même le 21 décembre, le soleil se lève environ deux heures, et la mi-journée est un long crépuscule bleu.
Juin–juillet apporte le soleil de minuit et les rapides d\'Oikaraisenkoski.`,
  howToGet: `Vol vers Rovaniemi (RVN), l\'aéroport le mieux connecté de Laponie.
Les chemins de fer finlandais assurent des trains de nuit depuis Helsinki avec service auto-train direct jusqu\'à la gare de Rovaniemi.
La location de voiture est simple ; la ville est la base logistique des road trips à l\'intérieur de la Laponie.`,
  stayTypes: [
    'Chalets en rondins en bord de rivière sur le Kemijoki et l\'Ounasjoki, 6 à 10 voyageurs, sauna, cheminée, vues ouvertes sur l\'eau.',
    'Villas aurores en verre autour du village du Père Noël, conçues pour l\'expérience du cercle polaire avec chambres tournées vers le ciel.',
    'Appartements design en centre-ville, à pied des restaurants, base idéale pour planifier des safaris en journée.',
    'Chalets sur les flancs d\'Ounasvaara, ski aux pieds l\'hiver, sentiers VTT l\'été, horizon aurores à cinq minutes du centre.',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: 'Le plus grand village de ski de Finlande, à 2 h au nord.' },
    { name: 'Ylläs', href: '/destinations/yllas', blurb: 'Destination de fjell plus calme, à 2 h au nord-ouest.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Porte de la nature sauvage, 3 h plus au nord.' },
  ],
  anchorProperties: [
    { name: 'Arctic TreeHouse Hotel', propertyQuery: 'Arctic TreeHouse Hotel', sid: 'destination_rovaniemi_arctic_treehouse', note: 'Suites-nichoirs à façade vitrée signées par un architecte, au village du Père Noël.' },
    { name: 'Apukka Resort', propertyQuery: 'Apukka Resort Rovaniemi', sid: 'destination_rovaniemi_apukka', note: 'Chalets aurores au bord du lac à 15 min de la ville, carte complète de safaris sur place.' },
    { name: 'Nova Skyland', propertyQuery: 'Nova Skyland', sid: 'destination_rovaniemi_nova_skyland', note: 'Appartements à toit de verre récents avec vue sur la ligne d\'horizon depuis Ounasvaara.' },
    { name: 'Tous les hébergements de Rovaniemi', href: HOTEL_SEARCH_FOR('fr').rovaniemi, sid: 'destination_rovaniemi_all_search', note: 'Parcourez tous les hôtels et chalets de Rovaniemi sur Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Depuis l\'aéroport de Rovaniemi (RVN)', detail: 'Vols toute l\'année depuis HEL, lignes hivernales depuis LHR · CDG · BCN · MAD. 10 km / 15 min au centre.' },
    { mode: 'bus', label: 'Bus aéroport RVN', detail: '7 € l\'aller · 15 min jusqu\'au centre · à chaque vol.' },
    { mode: 'car', label: 'Taxi vers le centre', detail: '15 à 25 €. La plupart des hôtels centraux incluent la navette dans les forfaits hivernaux.' },
    { mode: 'train', label: 'Couchette Helsinki–Rovaniemi', detail: 'Train de nuit VR avec option auto-train, ~90 € en couchette. La voie d\'arrivée préférée des familles.' },
  ],
  carRental: {
    href: CARS_FOR('fr').fromRovaniemi,
    sid: 'destination_rovaniemi_cars_rvn',
    airport: 'Prise en charge à l\'aéroport de Rovaniemi (RVN)',
    blurb: '10 km jusqu\'à la ville · la prise en charge la plus simple de Laponie · disponible toute l\'année',
  },
  dayPlan: [
    { day: '01', title: 'Arrivée · village du Père Noël', body: 'RVN à 10 km de la ville. Dépose des bagages, cap sur le village du Père Noël (ouvert toute l\'année). Franchissement de la ligne du cercle polaire, carte postale. Dîner au Nili en ville.' },
    { day: '02', title: 'Husky + ice-floating', body: 'Apukka ou une ferme voisine pour un safari husky (à réserver). Après-midi en combinaison étanche pour le flottage sur la glace de l\'Ounasjoki, étonnamment chaud, complètement silencieux. Fenêtre aurores depuis le fjell Ounasvaara.' },
    { day: '03', title: 'Arktikum + culture urbaine', body: 'Demi-journée à l\'Arktikum (musée sámi et histoire de Laponie, beau couloir de verre). Déjeuner en ville. Après-midi libre, excursion à Lainio Snow Village selon la saison.' },
    { day: '04', title: 'Matinée tranquille · suite du voyage', body: 'Dernier sauna, petit-déjeuner en ville. Vol retour depuis RVN ou location de voiture et 2 h de route au nord vers Levi pour une seconde étape.' },
  ],
  seoTitle: 'Chalets et villas aurores à Rovaniemi, cercle polaire',
  seoDescription: 'Chalets en rondins en bord de rivière, villas aurores en verre et séjours au village du Père Noël à Rovaniemi. Accès au cercle polaire, grand aéroport.',
}

const it: DestinationBody = {
  tagline: 'La capitale della Lapponia finlandese, villaggio di Babbo Natale, due fiumi e aurora a portata di mano da una città a servizio completo.',
  description: `Rovaniemi è la capitale amministrativa della Lapponia finlandese e la principale porta internazionale della regione. La città sorge sul Circolo Polare, alla confluenza di Kemijoki e Ounasjoki, e conta circa 65.000 abitanti, piccola per gli standard europei, ma di gran lunga il centro più grande della zona.

La miscela è inconsueta: una vera città nordica con ristoranti, il museo scientifico Arktikum e architettura civica firmata Aalto, accanto al villaggio originale di Babbo Natale sulla linea del Circolo Polare e a una rete di zone-chalet a pochi minuti d\'auto. Per chi vuole l\'aurora e la natura ma anche tornare a casa da un grande aeroporto, Rovaniemi è la base naturale.`,
  facts: [
    { label: 'Aeroporto più vicino', value: 'RVN 10 min' },
    { label: 'Popolazione', value: '~65.000' },
    { label: 'Circolo Polare', value: 'Attraversa la città' },
    { label: 'Villaggio di Babbo Natale', value: 'Aperto tutto l\'anno' },
  ],
  highlights: [
    { title: 'Villaggio di Babbo Natale sul Circolo Polare', body: 'L\'originale, una linea bianca segna il Circolo attraverso la piazza, e Babbo Natale riceve ogni giorno dell\'anno.' },
    { title: 'Museo Arktikum', body: 'Il più bello dei musei finlandesi su scienza artica, cultura sámi e storia della Lapponia, un tubo di vetro di 172 metri sulla riva dell\'Ounasjoki, puntato a nord.' },
    { title: 'Parco faunistico di Ranua', body: 'A 80 km verso sud: uno degli zoo più settentrionali del mondo, con 50 specie artiche e boreali, tra cui gli unici orsi polari di Finlandia, ghiottoni e linci.' },
    { title: 'Fjell Ounasvaara dentro la città', body: 'Pista da sci, bike park di discesa e punto panoramico aurore, a 10 minuti d\'auto dal centro, senza dover entrare in un parco nazionale.' },
    { title: 'Connessioni aeree', body: 'L\'aeroporto di Rovaniemi vanta la rete invernale più ampia di Lapponia: voli diretti per Londra, Parigi, Francoforte, Vienna e decine di charter.' },
    { title: 'Cinture di chalet lungo i fiumi', body: 'Le strutture sul Kemijoki e su Ounasvaara offrono cieli abbastanza scuri per l\'aurora a un quarto d\'ora da ristoranti e negozi.' },
  ],
  whenToGo: `Da metà settembre a fine marzo è stagione di aurore; novembre–febbraio è l\'inverno più profondo.
Rovaniemi non ha una vera notte polare: anche il 21 dicembre il sole sorge per circa due ore, e il mezzogiorno è un lungo crepuscolo blu.
Giugno–luglio porta il sole di mezzanotte e le rapide di Oikaraisenkoski.`,
  howToGet: `Voli per Rovaniemi (RVN), l\'aeroporto meglio connesso della Lapponia.
Le ferrovie finlandesi corrono treni notturni da Helsinki con servizio auto al seguito direttamente alla stazione di Rovaniemi.
Il noleggio auto è semplice; la città è la base logistica per road trip nell\'interno della Lapponia.`,
  stayTypes: [
    'Chalet in tronchi sulle rive di Kemijoki e Ounasjoke, 6–10 ospiti, sauna, camino, viste aperte sul fiume.',
    'Ville aurora in vetro intorno al villaggio di Babbo Natale, pensate per l\'esperienza del Circolo Polare con camere rivolte al cielo.',
    'Appartamenti di design in centro città, ristoranti a piedi, base ideale per itinerari safari in giornata.',
    'Chalet sui versanti di Ounasvaara, ski-in in inverno, sentieri in estate, orizzonte aurorale a cinque minuti dal centro.',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: 'Il paese sciistico più grande della Finlandia, a 2 ore verso nord.' },
    { name: 'Ylläs', href: '/destinations/yllas', blurb: 'Destinazione di fjell più tranquilla, a 2 ore verso nord-ovest.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Porta della natura selvaggia, 3 ore più a nord.' },
  ],
  anchorProperties: [
    { name: 'Arctic TreeHouse Hotel', propertyQuery: 'Arctic TreeHouse Hotel', sid: 'destination_rovaniemi_arctic_treehouse', note: 'Suite-nido firmate da un architetto con facciata in vetro, al villaggio di Babbo Natale.' },
    { name: 'Apukka Resort', propertyQuery: 'Apukka Resort Rovaniemi', sid: 'destination_rovaniemi_apukka', note: 'Chalet aurora sul lago a 15 min dalla città, menù safari completo in struttura.' },
    { name: 'Nova Skyland', propertyQuery: 'Nova Skyland', sid: 'destination_rovaniemi_nova_skyland', note: 'Appartamenti con tetto di vetro più recenti, vista skyline dal fjell Ounasvaara.' },
    { name: 'Tutti gli alloggi di Rovaniemi', href: HOTEL_SEARCH_FOR('it').rovaniemi, sid: 'destination_rovaniemi_all_search', note: 'Esplori ogni hotel e chalet di Rovaniemi su Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Dall\'aeroporto di Rovaniemi (RVN)', detail: 'Voli tutto l\'anno da HEL e rotte invernali da LHR · CDG · BCN · MAD. 10 km / 15 min al centro.' },
    { mode: 'bus', label: 'Bus aeroporto RVN', detail: '7 € sola andata · 15 min al centro · in coincidenza con ogni volo.' },
    { mode: 'car', label: 'Taxi al centro', detail: '15–25 €. La maggior parte degli hotel del centro include la navetta nei pacchetti invernali.' },
    { mode: 'train', label: 'Vagone letto Helsinki–Rovaniemi', detail: 'Treno notturno VR con opzione auto al seguito, ~90 € in cuccetta. È la via d\'arrivo preferita dalle famiglie.' },
  ],
  carRental: {
    href: CARS_FOR('it').fromRovaniemi,
    sid: 'destination_rovaniemi_cars_rvn',
    airport: 'Ritiro all\'aeroporto di Rovaniemi (RVN)',
    blurb: '10 km fino in città · il ritiro più semplice di Lapponia · disponibilità tutto l\'anno',
  },
  dayPlan: [
    { day: '01', title: 'Arrivo · villaggio di Babbo Natale', body: 'RVN a 10 km dal centro. Lascia i bagagli e via subito al villaggio di Babbo Natale (aperto tutto l\'anno). Attraversa la linea del Circolo Polare, spedisci una cartolina. Cena al Nili in centro.' },
    { day: '02', title: 'Husky + ice-floating', body: 'Apukka o una fattoria vicina per un safari con husky (prenoti in anticipo). Pomeriggio in muta stagna per il floating sul ghiaccio dell\'Ounasjoki, sorprendentemente caldo, totalmente silenzioso. Finestra aurora dal fjell Ounasvaara.' },
    { day: '03', title: 'Arktikum + cultura cittadina', body: 'Mezza giornata all\'Arktikum (museo sámi e storia della Lapponia, splendido corridoio di vetro). Pranzo in città. Pomeriggio libero, escursione al Lainio Snow Village se la stagione lo consente.' },
    { day: '04', title: 'Mattina lenta · prosecuzione', body: 'Ultima sauna, colazione in centro. Volo da RVN per il ritorno, oppure auto a noleggio e 2 ore di guida a nord verso Levi per una seconda tappa.' },
  ],
  seoTitle: 'Chalet e ville aurora a Rovaniemi, Circolo Polare',
  seoDescription: 'Chalet in tronchi sui fiumi, ville aurora in vetro e soggiorni al villaggio di Babbo Natale a Rovaniemi. Accesso al Circolo Polare, grande aeroporto.',
}

const nl: DestinationBody = {
  tagline: 'De hoofdstad van Fins Lapland, Kerstmandorp, twee rivieren en directe aurora-toegang vanuit een volwaardige stad.',
  description: `Rovaniemi is de bestuurlijke hoofdstad van Fins Lapland en de belangrijkste internationale poort van de regio. De stad ligt op de Poolcirkel, op de samenvloeiing van Kemijoki en Ounasjoki, en telt circa 65.000 inwoners, klein naar Europese maatstaven, maar veruit de grootste plaats in de regio.

De mix is ongebruikelijk: een werkende noordelijke stad met restaurants, het wetenschapsmuseum Arktikum en door Aalto ontworpen overheidsarchitectuur, naast het originele Kerstmandorp op de Poolcirkellijn en een net van cabin-gebieden binnen korte rijafstand. Voor reizigers die noorderlicht en wildernis willen maar ook via een grote luchthaven thuiskomen, is Rovaniemi de logische basis.`,
  facts: [
    { label: 'Dichtstbijzijnde luchthaven', value: 'RVN 10 min' },
    { label: 'Inwoners', value: '~65.000' },
    { label: 'Poolcirkel', value: 'Door de stad' },
    { label: 'Kerstmandorp', value: 'Heel jaar open' },
  ],
  highlights: [
    { title: 'Kerstmandorp op de Poolcirkel', body: 'Het origineel, een witte lijn markeert de Poolcirkel over het plein, en de Kerstman houdt elke dag van het jaar spreekuur.' },
    { title: 'Arktikum-museum', body: 'Finland\'s mooiste museum over arctische wetenschap, Sámi-cultuur en Laplandse geschiedenis, een 172 meter lange glazen koker aan de oever van de Ounasjoki, gericht naar het noorden.' },
    { title: 'Ranua-wildpark', body: '80 km naar het zuiden: een van de noordelijkste dierentuinen ter wereld, met 50 arctische en boreale soorten waaronder de enige ijsberen van Finland, veelvraten en lynxen.' },
    { title: 'Ounasvaara-fjell in de stad', body: 'Skipiste, downhill bikepark en uitkijkpunt voor noorderlicht, 10 minuten van het centrum met de auto, geen rit door een nationaal park nodig.' },
    { title: 'Vluchtverbindingen', body: 'Luchthaven Rovaniemi heeft het breedste winterse netwerk van Lapland: directe vluchten naar Londen, Parijs, Frankfurt, Wenen en tientallen charters.' },
    { title: 'Cabin-zones langs de rivier', body: 'Accommodaties langs de Kemijoki en op Ounasvaara bieden donker genoeg hemel voor aurora binnen 15 minuten van restaurants en winkels.' },
  ],
  whenToGo: `Half september–eind maart is aurora-seizoen; november–februari is de diepste winter.
Rovaniemi heeft geen echte poolnacht: zelfs op 21 december komt de zon ruim twee uur op, en de middag is een lange blauwe schemering.
Juni–juli geeft middernachtszon en wildwaterstroomversnellingen bij Oikaraisenkoski.`,
  howToGet: `Vlieg naar Rovaniemi (RVN), de best verbonden luchthaven van Lapland.
De Finse spoorwegen rijden nachttreinen vanuit Helsinki met autorailservice tot aan station Rovaniemi.
Doorrijden met een huurauto is eenvoudig; de stad is de logistieke uitvalsbasis voor roadtrips door binnenland-Lapland.`,
  stayTypes: [
    'Houten cabins aan de Kemijoki en Ounasjoki, 6–10 gasten, sauna, open haard, vrij riviergezicht.',
    'Glazen aurora-villa\'s rond het Kerstmandorp, gebouwd voor de Poolcirkelervaring, met slaapkamers gericht op de hemel.',
    'Designer-appartementen in het centrum, restaurants op loopafstand, basis voor dagsafari\'s.',
    'Chalets op de hellingen van Ounasvaara, ski-in in de winter, paden in de zomer, aurora-horizon vijf minuten van het centrum.',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: 'Het grootste skidorp van Finland, 2 uur noordelijker.' },
    { name: 'Ylläs', href: '/destinations/yllas', blurb: 'Rustigere fjell-bestemming, 2 uur naar het noordwesten.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Poort naar de wildernis, 3 uur verder noordwaarts.' },
  ],
  anchorProperties: [
    { name: 'Arctic TreeHouse Hotel', propertyQuery: 'Arctic TreeHouse Hotel', sid: 'destination_rovaniemi_arctic_treehouse', note: 'Door architecten ontworpen nest-suites met glazen front bij het Kerstmandorp.' },
    { name: 'Apukka Resort', propertyQuery: 'Apukka Resort Rovaniemi', sid: 'destination_rovaniemi_apukka', note: 'Aurora-cabins aan het meer op 15 min van de stad, volledig safarimenu ter plaatse.' },
    { name: 'Nova Skyland', propertyQuery: 'Nova Skyland', sid: 'destination_rovaniemi_nova_skyland', note: 'Nieuwere appartementen met glazen dak en zicht op de skyline vanaf Ounasvaara.' },
    { name: 'Alle Rovaniemi-accommodaties', href: HOTEL_SEARCH_FOR('nl').rovaniemi, sid: 'destination_rovaniemi_all_search', note: 'Bekijk elke Rovaniemi-hotel en cabin op Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Vanaf luchthaven Rovaniemi (RVN)', detail: 'Jaarrond vluchten vanaf HEL plus winterroutes vanaf LHR · CDG · BCN · MAD. 10 km / 15 min naar het centrum.' },
    { mode: 'bus', label: 'RVN-luchthavenbus', detail: '€7 enkele reis · 15 min naar centrum · sluit aan op elke vlucht.' },
    { mode: 'car', label: 'Taxi naar centrum', detail: '€15–25. De meeste centrale hotels nemen de shuttle op in hun winterpakket.' },
    { mode: 'train', label: 'Slaaprijtuig Helsinki–Rovaniemi', detail: 'VR-nachttrein met autorail-optie, ~€90 in een couchette. De geliefdste aankomst voor gezinnen.' },
  ],
  carRental: {
    href: CARS_FOR('nl').fromRovaniemi,
    sid: 'destination_rovaniemi_cars_rvn',
    airport: 'Ophalen op luchthaven Rovaniemi (RVN)',
    blurb: '10 km tot de stad · de makkelijkste pick-up in Lapland · jaarrond beschikbaar',
  },
  dayPlan: [
    { day: '01', title: 'Aankomst · Kerstmandorp', body: 'RVN 10 km van het centrum. Tassen wegzetten en direct door naar het Kerstmandorp (heel jaar open). Steek de Poolcirkellijn over, stuur een kaart. Diner in de stad bij Nili.' },
    { day: '02', title: 'Husky + ice-floating', body: 'Apukka of een nabij bedrijf voor een husky-safari (vooraf boeken). \'s Middags droogpak-floating op de Ounasjoki, verrassend warm, volledig stil. Aurora-venster vanaf het Ounasvaara-fjell.' },
    { day: '03', title: 'Arktikum + stadscultuur', body: 'Halve dag in Arktikum (Sámi en Lapland-geschiedenis, prachtige glazen gang). Lunch in de stad. Middag vrij, dagtrip naar Lainio Snow Village indien in seizoen.' },
    { day: '04', title: 'Rustige ochtend · verder', body: 'Laatste sauna, ontbijt in de stad. Naar huis vanaf RVN of een huurauto nemen en 2 uur noordwaarts rijden naar Levi voor een tweede etappe.' },
  ],
  seoTitle: 'Rovaniemi-cabins en aurora-villa\'s, aan de Poolcirkel',
  seoDescription: 'Houten cabins aan de rivier, glazen aurora-villa\'s en verblijven in het Kerstmandorp in Rovaniemi. Toegang tot de Poolcirkel, grote luchthaven.',
}

const ja: DestinationBody = {
  tagline: 'フィンランド領ラップランドの首府。サンタクロース村、2本の川、そしてフル機能の都市からそのままオーロラへ。',
  description: `ロヴァニエミはフィンランド領ラップランドの行政上の首府であり、主要な国際ゲートウェイです。北極圏の上、ケミ川とオウナス川の合流点に位置し、人口は約65,000人。ヨーロッパでは小規模ですが、この地域では群を抜いて最大の都市です。

組み合わせが特異です。レストラン、Arktikum科学博物館、アアルト設計の市庁舎建築をもつ働く北方都市が、北極圏線上にあるオリジナルのサンタクロース村と、近距離のキャビン地域のネットワークと並んでいます。オーロラと原野を求めつつも主要空港から帰国したい旅行者にとって、ロヴァニエミは自然な拠点です。`,
  facts: [
    { label: '最寄り空港', value: 'RVN 10分' },
    { label: '人口', value: '約65,000' },
    { label: '北極圏', value: '市街を貫く' },
    { label: 'サンタ村', value: '通年営業' },
  ],
  highlights: [
    { title: '北極圏のサンタクロース村', body: '元祖。広場に北極圏を示す白線が引かれ、サンタは1年365日、執務時間を守って迎えてくれます。' },
    { title: 'Arktikum博物館', body: '北極科学、サーミ文化、ラップランド史を扱うフィンランド屈指の博物館。オウナス川のほとりで172mのガラスチューブが北を指して伸びています。' },
    { title: 'Ranua野生動物公園', body: '南へ80km。世界最北級の動物園で、フィンランド唯一のホッキョクグマをはじめ、クズリ、オオヤマネコなど50種の北極・北方林の動物がいます。' },
    { title: '市内に位置するオウナスヴァーラ山', body: 'スキー場、ダウンヒルバイクパーク、オーロラ展望地。中心地から車で10分、国立公園まで走る必要はありません。' },
    { title: '便利な空路接続', body: 'ロヴァニエミ空港はラップランドで最も広い冬季ルート網をもち、ロンドン、パリ、フランクフルト、ウィーンへの直行便と多数のチャーター便があります。' },
    { title: '川辺のキャビンベルト', body: 'ケミ川沿いとオウナスヴァーラ山の物件は、レストランやショッピングから15分以内でオーロラに適した暗い空を提供します。' },
  ],
  whenToGo: `9月中旬〜3月下旬がオーロラ・シーズン。11月〜2月は厳冬期です。
ロヴァニエミに本当の極夜はありません。12月21日前後でも太陽は2時間ほど昇り、日中は長い青の薄明に包まれます。
6〜7月は白夜とOikaraisenkoskiの急流が楽しめます。`,
  howToGet: `ロヴァニエミ(RVN)へ。ラップランドで最も路線網が充実した空港。
フィンランド国鉄はヘルシンキからの夜行列車を運行し、車両運搬車サービスでロヴァニエミ駅まで直行します。
レンタカーも容易。市は内陸ラップランドのロードトリップの拠点です。`,
  stayTypes: [
    'ケミ川・オウナス川沿いのログキャビン。6〜10名、サウナ、暖炉、開けた川景。',
    'サンタクロース村周辺のオーロラ・ガラスヴィラ。北極圏体験のために作られた、空の見える寝室付き。',
    '市中心部のデザイナーアパートメント。レストランまで徒歩、日帰りサファリの拠点に最適。',
    'オウナスヴァーラ山麓のシャレー。冬はスキーイン、夏はバイクトレイル、ダウンタウンから5分で開けた空。',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: 'フィンランド最大のスキー村、北へ2時間。' },
    { name: 'Ylläs', href: '/destinations/yllas', blurb: 'より静かな山岳目的地、北西へ2時間。' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: '原野への入り口、さらに北へ3時間。' },
    // ja-only: /ja/glass-igloos on olemassa vain ja-lokaalissa (GlassIgloos.tsx)
    { name: 'ガラスイグルー比較', href: '/glass-igloos', blurb: 'ロヴァニエミ周辺と北のイグルー11施設を料金と場所で比較。' },
  ],
  anchorProperties: [
    { name: 'Arctic TreeHouse Hotel', propertyQuery: 'Arctic TreeHouse Hotel', sid: 'destination_rovaniemi_arctic_treehouse', note: 'サンタクロース村にある、建築家設計のガラスフロント・ネストスイート。' },
    { name: 'Apukka Resort', propertyQuery: 'Apukka Resort Rovaniemi', sid: 'destination_rovaniemi_apukka', note: '市から15分の湖畔オーロラキャビン。サファリのフルメニューを敷地内に。' },
    { name: 'Nova Skyland', propertyQuery: 'Nova Skyland', sid: 'destination_rovaniemi_nova_skyland', note: 'オウナスヴァーラ山からスカイラインを望むガラス屋根の新しいアパートメント。' },
    { name: 'ロヴァニエミのすべての宿泊施設', href: HOTEL_SEARCH_FOR('ja').rovaniemi, sid: 'destination_rovaniemi_all_search', note: 'Trip.comでロヴァニエミの全宿を閲覧できます。' },
  ],
  transport: [
    { mode: 'plane', label: 'ロヴァニエミ空港(RVN)から', detail: '通年HEL便、加えて冬季はLHR · CDG · BCN · MADから。市中心まで10km / 15分。' },
    { mode: 'bus', label: 'RVN空港バス', detail: '片道7ユーロ・15分で中心部・全便に接続。' },
    { mode: 'car', label: 'タクシーで中心部へ', detail: '15〜25ユーロ。中心部の主要ホテルは冬季パッケージにシャトルを含みます。' },
    { mode: 'train', label: 'ヘルシンキ〜ロヴァニエミ寝台', detail: 'VR夜行(車両運搬車オプションあり)、寝台で約90ユーロ。家族旅行で最も人気の到着ルート。' },
  ],
  carRental: {
    href: CARS_FOR('ja').fromRovaniemi,
    sid: 'destination_rovaniemi_cars_rvn',
    airport: 'ロヴァニエミ空港(RVN)で受け取り',
    blurb: '市まで10km・ラップランド最楽の受け取り・通年利用可',
  },
  dayPlan: [
    { day: '01', title: '到着・サンタクロース村', body: 'RVNから市中心まで10km。荷物を置いて、まっすぐサンタクロース村へ(通年営業)。北極圏線を越え、絵葉書を出します。Niliで市内ディナー。' },
    { day: '02', title: 'ハスキー&アイスフロート', body: 'ApukkaまたはMENZIES近郊でハスキーサファリ(事前予約推奨)。午後はオウナス川でドライスーツのアイスフロート。思いのほか暖かく、完全な静寂。オウナスヴァーラ山でオーロラ・ウィンドウを。' },
    { day: '03', title: 'Arktikum+市の文化', body: '半日Arktikumで(サーミ&ラップランド史博物館、美しいガラス回廊)。市内で昼食。午後は自由。季節次第でLainio Snow Villageの日帰りも。' },
    { day: '04', title: 'ゆっくり朝・移動', body: '最後のサウナ、市内で朝食。RVNから帰国するか、レンタカーで2時間北のLeviに移って第2レグへ。' },
  ],
  seoTitle: 'ロヴァニエミのキャビン&オーロラ・ヴィラ。北極圏の首府',
  seoDescription: 'ロヴァニエミ(フィンランド領ラップランド)の川辺ログキャビン、ガラスのオーロラ・ヴィラ、サンタクロース村滞在。北極圏アクセス、主要空港、直接予約。',
}

const es: DestinationBody = {
  // ES targets `cabañas en rovaniemi` (brief 187, 2026-08-15): hero H1 override +
  // guide-osio alla. Muut lokaalit renderöityvät ennallaan.
  heroH1: 'Cabañas en Rovaniemi',
  tagline: 'Qué es un mökki, en qué zona conviene dormir y qué mirar antes de reservar, con el Círculo Polar y todos los servicios de la capital lapona al lado.',
  description: `Rovaniemi es la capital administrativa de la Laponia finlandesa y la principal puerta internacional. La ciudad está sobre el Círculo Polar, en la confluencia de los ríos Kemijoki y Ounasjoki, con unos 65.000 habitantes, pequeña para los estándares europeos, pero, con diferencia, el mayor asentamiento de la región.

La mezcla es inusual: una ciudad norteña en activo con restaurantes, el museo de ciencia Arktikum y arquitectura cívica diseñada por Aalto, junto con el Pueblo de Papá Noel original sobre el Círculo Polar y una red de zonas de cabañas a corta distancia. Para quienes quieren aurora y naturaleza pero también volar a casa desde un aeropuerto importante, Rovaniemi es la base natural.`,
  facts: [
    { label: 'Aeropuerto más cercano', value: 'RVN 10 min' },
    { label: 'Población', value: '~65.000' },
    { label: 'Círculo Polar', value: 'Atraviesa la ciudad' },
    { label: 'Pueblo de Santa', value: 'Abierto todo el año' },
  ],
  highlights: [
    { title: 'Pueblo de Papá Noel sobre el Círculo Polar', body: 'El original, una línea blanca marca el Círculo Polar en la plaza, y Papá Noel tiene horario de oficina todos los días del año.' },
    { title: 'Museo Arktikum', body: 'El mejor museo finlandés de ciencia ártica, cultura sami e historia de Laponia, un tubo de cristal de 172 metros a orillas del Ounasjoki, apuntando al norte.' },
    { title: 'Parque de fauna Ranua', body: 'A 80 km en coche al sur: uno de los zoos más septentrionales del mundo, con 50 especies árticas y boreales, entre ellas los únicos osos polares de Finlandia, glotones y linces.' },
    { title: 'Fell Ounasvaara dentro de la ciudad', body: 'Una pista de esquí, un bike park de descenso y un mirador de aurora, a 10 min del centro en coche, sin necesidad de viajar al parque nacional.' },
    { title: 'Conectividad aérea', body: 'El aeropuerto de Rovaniemi tiene la red de rutas invernales más amplia de Laponia: directos a Londres, París, Frankfurt, Viena y decenas de chárter.' },
    { title: 'Cinturones de cabañas junto al río', body: 'Las propiedades a lo largo del Kemijoki y sobre Ounasvaara ofrecen cielos oscuros aptos para auroras a 15 minutos de restaurantes y compras.' },
  ],
  whenToGo: `Mediados de septiembre – finales de marzo es temporada de aurora; noviembre – febrero es el invierno más profundo.
Rovaniemi no tiene noche polar: incluso el 21 de diciembre el sol sale unas dos horas, y el mediodía es un largo crepúsculo azul.
Junio – julio trae sol de medianoche y aguas bravas en Oikaraisenkoski.`,
  howToGet: `Vuele a Rovaniemi (RVN), el aeropuerto mejor conectado de Laponia.
Los ferrocarriles finlandeses operan trenes nocturnos desde Helsinki con servicio de transporte de coches directo a la estación de Rovaniemi.
El alquiler de coche es sencillo; la ciudad es la base logística para road trips por la Laponia interior.`,
  stayTypes: [
    'Cabañas de troncos junto al río en Kemijoki y Ounasjoki, 6–10 huéspedes, sauna, chimenea, vistas abiertas del río.',
    'Villas aurora de cristal en torno al Pueblo de Papá Noel, construidas a propósito para la experiencia del Círculo Polar, con dormitorios con vista al cielo.',
    'Apartamentos de diseño en el centro, restaurantes a pie, base para programas de safari por el día.',
    'Chalets a los pies del fell Ounasvaara, ski-in en invierno, sendas de bici en verano, horizonte apto para aurora a cinco minutos del centro.',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: 'El mayor pueblo de esquí de Finlandia, 2 h al norte.' },
    { name: 'Ylläs', href: '/destinations/yllas', blurb: 'Destino de fells más tranquilo, 2 h al noroeste.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Puerta a la naturaleza, 3 h más al norte.' },
  ],
  anchorProperties: [
    { name: 'Arctic TreeHouse Hotel', propertyQuery: 'Arctic TreeHouse Hotel', sid: 'destination_rovaniemi_arctic_treehouse', note: 'Suites tipo nido con frente de cristal diseñadas por arquitectos en el Pueblo de Papá Noel.' },
    { name: 'Apukka Resort', propertyQuery: 'Apukka Resort Rovaniemi', sid: 'destination_rovaniemi_apukka', note: 'Cabañas aurora junto al lago a 15 min de la ciudad, carta completa de safaris en el mismo recinto.' },
    { name: 'Nova Skyland', propertyQuery: 'Nova Skyland', sid: 'destination_rovaniemi_nova_skyland', note: 'Apartamentos más nuevos con techo de cristal y vistas desde el fell Ounasvaara.' },
    { name: 'Todos los alojamientos de Rovaniemi', href: HOTEL_SEARCH_FOR('es').rovaniemi, sid: 'destination_rovaniemi_all_search', note: 'Consulte todos los hoteles y cabañas de Rovaniemi en Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Desde el aeropuerto de Rovaniemi (RVN)', detail: 'Vuelos todo el año desde HEL y rutas invernales desde LHR · CDG · BCN · MAD. 10 km / 15 min al centro.' },
    { mode: 'bus', label: 'Autobús del aeropuerto RVN', detail: '7 € ida · 15 min al centro · enlaza con cada vuelo.' },
    { mode: 'car', label: 'Taxi al centro', detail: '15–25 €. La mayoría de hoteles céntricos incluye shuttle en los paquetes de invierno.' },
    { mode: 'train', label: 'Coche cama Helsinki–Rovaniemi', detail: 'Tren nocturno VR con opción de transporte de coches, ~90 € en litera. La ruta familiar más popular.' },
  ],
  carRental: {
    href: CARS_FOR('es').fromRovaniemi,
    sid: 'destination_rovaniemi_cars_rvn',
    airport: 'Recogida en el aeropuerto de Rovaniemi (RVN)',
    blurb: '10 km a la ciudad · la recogida más sencilla de Laponia · disponible todo el año',
  },
  dayPlan: [
    { day: '01', title: 'Llegada · Pueblo de Papá Noel', body: 'RVN a 10 km del centro. Dejar maletas y al Pueblo de Papá Noel (abierto todo el año). Cruzar el Círculo Polar y mandar una postal. Cena en Nili.' },
    { day: '02', title: 'Husky + flotación en hielo', body: 'Apukka o granja cercana para safari de huskys (reservar con antelación). Por la tarde, flotación en traje seco por el Ounasjoki, sorprendentemente cálido, completamente silencioso. Ventana de aurora desde el fell Ounasvaara.' },
    { day: '03', title: 'Arktikum + cultura urbana', body: 'Media jornada en Arktikum (museo sami + historia de Laponia, hermoso corredor de cristal). Almuerzo en la ciudad. Tarde libre, excursión a Lainio Snow Village si la temporada lo permite.' },
    { day: '04', title: 'Mañana tranquila · siguiente parada', body: 'Última sauna, desayuno en la ciudad. Volar de vuelta desde RVN o alquilar coche y conducir 2 h al norte hasta Levi para una segunda etapa.' },
  ],
  guide: {
    eyebrow: 'Guía de cabañas',
    h2: 'Cabañas en Rovaniemi: qué es un mökki y cuál le conviene',
    intro: `Los buscadores le enseñan cientos de "cabañas" en Rovaniemi, pero no le dicen lo único que de verdad decide la estancia: qué tipo de cabaña es, en qué zona está y qué incluye. Esta guía no es un listado, es el criterio de elección: la diferencia entre un mökki y un iglú de cristal, las cuatro zonas de Rovaniemi con sus distancias reales, cuándo hace falta coche y qué preguntar antes de pagar. Distancias y transporte comprobados el 15.8.2026 con fuentes oficiales.`,
    sections: [
      {
        h3: 'Qué es un mökki (y en qué se diferencia de un iglú de cristal)',
        paras: [
          'En Finlandia, la palabra para cabaña es mökki: una construcción independiente, casi siempre de madera, pensada para alojarse por cuenta propia, con cocina, chimenea o estufa y, muy a menudo, sauna propia. Es alojamiento, no producto de experiencia: se paga por metros, equipamiento y ubicación.',
          'Un iglú de cristal es lo contrario: una habitación con techo de cristal que se vende como experiencia, una o dos noches, precio por el cielo sobre la cama, servicios de hotel. Entre ambos quedan chalets y villas con servicio hotelero. Si busca una semana con cocina y sauna, busque mökki; si busca una noche mirando el cielo desde la cama, eso es otra categoría y otro presupuesto.',
        ],
        links: [
          { label: 'Tipos de alojamiento en Laponia', href: '/property-types' },
          { label: 'Cabañas en Levi, Ylläs, Ruka y Saariselkä', href: '/cabins' },
          { label: 'Las cabañas de cristal, aclaradas por categorías', href: 'https://laplandvibes.com/es/blog/lapland-glass-cabin-categories/', external: true },
        ],
      },
      {
        h3: 'Las cuatro zonas: centro, Ounasvaara, Pueblo de Papá Noel y los cinturones de río',
        paras: [
          'La elección de zona decide más que la elección de cabaña: fija cuánto conducirá, qué cielo verá por la noche y si la cena es un paseo o un trayecto. Rovaniemi se reparte, a efectos de alojamiento, en cuatro zonas:',
        ],
        table: {
          head: ['Zona', 'Distancia', '¿Coche?', 'Para quién'],
          rows: [
            ['Centro', 'Todo a pie', 'No', 'Restaurantes y servicios al lado; más apartamentos que cabañas propiamente dichas'],
            ['Ounasvaara', '~10 min en coche del centro', 'Útil, no imprescindible', 'Pistas, sendas y horizonte de auroras casi dentro de la ciudad'],
            ['Pueblo de Papá Noel', '8 km al norte del centro', 'No imprescindible: bus urbano 8 todo el año', 'Familias y villas de cristal junto al Círculo Polar'],
            ['Cinturones de río y bosque', '~15 min en coche (Kemijoki / Ounasjoki)', 'Sí, en la práctica', 'Cabañas clásicas con sauna y cielo oscuro para auroras'],
          ],
          note: 'Distancia y bus del Pueblo de Papá Noel: santaclausvillage.info ("8 km al norte del centro"; bus 8 todo el año), comprobado el 15.8.2026. Resto: datos publicados de este sitio. En invierno cuente los trayectos en tiempo, no en kilómetros.',
        },
      },
      {
        h3: '¿Hace falta coche? Distancias y transporte zona por zona',
        paras: [
          'Depende de la zona, y la tabla de arriba es la respuesta corta. La larga: el aeropuerto (RVN) está a 10 km del centro, con autobús de enlace (7 € por trayecto, 15 min) y taxis por 15–25 €. Al Pueblo de Papá Noel llega el autobús urbano 8 durante todo el año. Con base en el centro o junto al Pueblo, el día a día se resuelve sin volante.',
          'La cuenta cambia en los cinturones de río y bosque: allí la cabaña se elige precisamente por estar lejos de las luces, y eso significa conducir, al supermercado, a los safaris, a cualquier cena que no cocine usted. Si su cabaña está a más de un cuarto de hora del centro, alquile coche desde el aeropuerto y confirme con el propietario que el acceso se mantiene despejado de nieve.',
        ],
        links: [{ label: 'Transporte en Laponia: cómo moverse', href: '/transport' }],
        cta: {
          kind: 'cars',
          label: 'Comparar coches en el aeropuerto (RVN)',
          sid: 'stays_es_rovcab_car',
          destination: 'RVN',
          note: 'Recogida en el aeropuerto de Rovaniemi. Los coches de alquiler en Laponia llevan neumáticos de invierno en temporada.',
        },
      },
      {
        h3: 'Sauna propia, sauna compartida o sin sauna: lo que cambia de verdad',
        paras: [
          'En una cabaña finlandesa la sauna no es un extra de spa: es parte del tipo de alojamiento. La diferencia práctica es triple. Sauna propia dentro de la cabaña: se calienta cuando usted quiera, tantas veces como quiera, el estándar del mökki clásico. Sauna compartida del complejo: funciona con horarios o turnos reservados, lo habitual en apartamentos y villas. Sin sauna: raro en cabañas, normal en apartamentos de centro.',
          'Dos preguntas concretas al anunciante: ¿la sauna es eléctrica o de leña? La leña es parte del ritual, pero exige encenderla y a veces se cobra por saco. ¿Y está dentro de la cabaña o en un edificio aparte en el patio? Con −15 °C, ese trayecto en toalla importa.',
        ],
      },
      {
        h3: 'Orientación al norte: cuándo una cabaña sirve para ver auroras',
        paras: [
          'Para auroras, lo primero no es la orientación sino la oscuridad: una cabaña en el cinturón de río con cielo abierto gana a cualquier ventanal dentro del resplandor urbano. Lo segundo sí es hacia dónde mira la cabaña: las auroras aparecen sobre el horizonte norte, así que ventanas o terraza hacia el norte permiten vigilar el cielo desde dentro, con la calefacción puesta.',
          'Y una regla de honestidad: la orientación exacta y la vista libre de una cabaña concreta solo las conoce el propietario. Los buscadores no las filtran y las fotos engañan, si es su prioridad, pregúntelo directamente antes de reservar.',
        ],
        links: [
          { label: 'Auroras boreales en Laponia: cuándo y dónde', href: 'https://laplandvibes.com/es/northern-lights/', external: true },
          { label: 'Guía completa de Rovaniemi', href: 'https://laplandvibes.com/es/destination/rovaniemi/', external: true },
        ],
      },
      {
        h3: 'Lo que no siempre viene incluido: pregúntelo antes',
        paras: [
          'Ninguna de estas líneas es universal, ese es exactamente el punto: varían por propiedad, y las sorpresas de última hora se evitan con cuatro preguntas al reservar.',
        ],
        bullets: [
          'Ropa de cama y toallas: en cabañas de alquiler pueden facturarse aparte o esperarse que las traiga.',
          'Leña para la estufa o la sauna: a veces incluida, a veces por saco.',
          'Ropa térmica: casi nunca la da el alojamiento. Los operadores de safaris prestan monos y botas para sus salidas, y en la ciudad se alquila equipamiento por días.',
          'Traslados: una cabaña fuera del centro rara vez incluye recogida en el aeropuerto, cuente con taxi o coche de alquiler.',
          'Limpieza final: en alquileres tipo mökki suele ser un cargo aparte o una tarea que se deja hecha.',
        ],
      },
      {
        h3: 'Cabañas en verano: río, mosquitos y otro ritmo de precios',
        paras: [
          'La misma cabaña vive dos vidas. En invierno mandan las auroras y la nieve; de junio a agosto mandan el río y la luz ( en Rovaniemi el sol no se pone del 6 de junio al 5 de julio ) con remo y pesca en el Kemijoki y la sauna con baño en el río como programa de la tarde.',
          'Los mosquitos son reales desde finales de junio, más en el bosque que en el centro; repelente y mosquiteras resuelven la mayor parte. En precios, el invierno navideño es la temporada alta de la zona: el verano juega en una categoría más tranquila, con más disponibilidad para semanas enteras.',
        ],
        links: [
          { label: 'Cuándo ir: la temporada mes a mes', href: '/when-to-go' },
          { label: 'Mosquitos en Laponia: qué funciona de verdad', href: 'https://laplandvibes.com/es/blog/lapland-mosquitoes-summer-guide/', external: true },
        ],
      },
      {
        h3: 'Qué preguntar antes de reservar',
        paras: [
          'La lista corta para cerrar sin sorpresas, cinco minutos de mensajes al propietario valen más que una hora de fotos:',
        ],
        bullets: [
          '¿A cuántos minutos en coche está el supermercado más cercano, y el acceso se mantiene despejado de nieve en invierno?',
          '¿La sauna es propia o compartida, eléctrica o de leña, dentro de la cabaña o en el patio?',
          '¿Ropa de cama, toallas, leña y limpieza final: incluidas o aparte?',
          '¿Hay vista libre hacia el horizonte norte para las auroras?',
          '¿Hace falta coche para esa ubicación, o hay transporte razonable?',
          '¿Cuáles son las condiciones de cancelación en fechas de diciembre? La semana de Navidad se reserva con meses de antelación.',
        ],
        cta: {
          kind: 'hotels',
          label: 'Ver cabañas y villas en Rovaniemi',
          sid: 'stays_es_rovcab_search',
          destination: 'Rovaniemi, Finland',
        },
      },
    ],
    footnote: 'Distancias y transporte comprobados el 15.8.2026 (santaclausvillage.info y datos publicados de este sitio). Los servicios concretos de cada cabaña ( sauna, orientación, extras ) son datos del anunciante: confírmelos en la página de la propiedad antes de reservar.',
  },
  seoTitle: 'Cabañas en Rovaniemi: cómo elegir y qué mirar antes',
  seoDescription: 'Qué es un mökki, en qué zona de Rovaniemi dormir ( centro, Ounasvaara, Pueblo de Papá Noel o cinturones de río ), cuándo hace falta coche y qué preguntar antes de reservar una cabaña.',
}

const ptBR: DestinationBody = {
  tagline: 'A capital da Lapônia finlandesa, Vila do Papai Noel, dois rios e acesso direto à aurora a partir de uma cidade com toda a infraestrutura.',
  description: `Rovaniemi é a capital administrativa da Lapônia finlandesa e a principal porta de entrada internacional. A cidade fica sobre o Círculo Polar Ártico, na confluência dos rios Kemijoki e Ounasjoki, com cerca de 65.000 habitantes, pequena para os padrões europeus, mas, de longe, a maior do território.

A combinação é incomum: uma cidade nortenha em pleno funcionamento, com restaurantes, o museu de ciência Arktikum e arquitetura cívica desenhada por Aalto, ao lado da Vila do Papai Noel original sobre a linha do Círculo Polar e uma rede de áreas de cabanas a poucos minutos. Para viajantes que querem aurora e natureza, mas também voltar para casa por um aeroporto principal, Rovaniemi é a base natural.`,
  facts: [
    { label: 'Aeroporto mais próximo', value: 'RVN 10 min' },
    { label: 'População', value: '~65.000' },
    { label: 'Círculo Polar', value: 'Atravessa a cidade' },
    { label: 'Vila do Papai Noel', value: 'Aberta o ano todo' },
  ],
  highlights: [
    { title: 'Vila do Papai Noel sobre o Círculo Polar', body: 'A original, uma linha branca marca o Círculo Polar atravessando a praça, e o Papai Noel cumpre horário comercial todos os dias do ano.' },
    { title: 'Museu Arktikum', body: 'O melhor museu finlandês de ciência ártica, cultura sámi e história da Lapônia, um tubo de vidro de 172 metros à margem do Ounasjoki, apontando para o norte.' },
    { title: 'Parque de Vida Selvagem Ranua', body: 'A 80 km de carro ao sul: um dos zoológicos mais ao norte do mundo, com 50 espécies árticas e boreais, incluindo os únicos ursos-polares da Finlândia, glutões e linces.' },
    { title: 'Fell Ounasvaara dentro da cidade', body: 'Pista de esqui, parque de mountain bike e mirante de aurora, a 10 min do centro de carro, sem precisar dirigir até um parque nacional.' },
    { title: 'Conectividade aérea', body: 'O aeroporto de Rovaniemi tem a maior rede de rotas de inverno da Lapônia: direto para Londres, Paris, Frankfurt, Viena e dezenas de rotas charter.' },
    { title: 'Faixas de cabanas à beira-rio', body: 'As propriedades ao longo do Kemijoki e sobre Ounasvaara oferecem céus escuros prontos para aurora a 15 minutos de restaurantes e compras.' },
  ],
  whenToGo: `Meados de setembro a fim de março é temporada de aurora; novembro a fevereiro é o pleno inverno.
Rovaniemi não tem noite polar de verdade: mesmo em 21 de dezembro o sol nasce por cerca de duas horas, e o meio-dia é um longo crepúsculo azul.
Junho a julho traz sol da meia-noite e corredeiras em Oikaraisenkoski.`,
  howToGet: `Voe até Rovaniemi (RVN), o aeroporto mais conectado da Lapônia.
A ferrovia finlandesa opera trens noturnos a partir de Helsinque com serviço de transporte de automóveis direto à estação de Rovaniemi.
Aluguel de carro é tranquilo; a cidade é a base logística para road trips pelo interior da Lapônia.`,
  stayTypes: [
    'Cabanas de tronco à beira do Kemijoki e do Ounasjoki, 6–10 hóspedes, sauna, lareira, vista aberta do rio.',
    'Vilas aurora de vidro em torno da Vila do Papai Noel, construídas para a experiência do Círculo Polar, com quartos voltados ao céu.',
    'Apartamentos de design no centro, restaurantes a pé, base para safáris bate-volta.',
    'Chalés ao pé do fell Ounasvaara, ski-in no inverno, trilhas de bike no verão, horizonte de aurora a cinco minutos do centro.',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: 'A maior vila de esqui da Finlândia, 2 h ao norte.' },
    { name: 'Ylläs', href: '/destinations/yllas', blurb: 'Destino de fells mais tranquilo, 2 h a noroeste.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Portal para a natureza, mais 3 h ao norte.' },
  ],
  anchorProperties: [
    { name: 'Arctic TreeHouse Hotel', propertyQuery: 'Arctic TreeHouse Hotel', sid: 'destination_rovaniemi_arctic_treehouse', note: 'Suítes tipo ninho com frente de vidro projetadas por arquitetos na Vila do Papai Noel.' },
    { name: 'Apukka Resort', propertyQuery: 'Apukka Resort Rovaniemi', sid: 'destination_rovaniemi_apukka', note: 'Cabanas aurora à beira do lago a 15 min da cidade, cardápio completo de safáris no local.' },
    { name: 'Nova Skyland', propertyQuery: 'Nova Skyland', sid: 'destination_rovaniemi_nova_skyland', note: 'Apartamentos mais novos com teto de vidro e vistas do fell Ounasvaara.' },
    { name: 'Todas as hospedagens de Rovaniemi', href: HOTEL_SEARCH_FOR('pt-BR').rovaniemi, sid: 'destination_rovaniemi_all_search', note: 'Veja todos os hotéis e cabanas de Rovaniemi no Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Do Aeroporto de Rovaniemi (RVN)', detail: 'Voos o ano todo de HEL e rotas de inverno de LHR · CDG · BCN · MAD. 10 km / 15 min até o centro.' },
    { mode: 'bus', label: 'Ônibus do aeroporto RVN', detail: '€7 só ida · 15 min até o centro · liga aos voos.' },
    { mode: 'car', label: 'Táxi até o centro', detail: '€15–25. A maioria dos hotéis centrais inclui transfer nos pacotes de inverno.' },
    { mode: 'train', label: 'Vagão-leito Helsinque–Rovaniemi', detail: 'Trem noturno VR com opção de transporte de automóvel, ~€90 em cama. A rota de chegada mais popular para famílias.' },
  ],
  carRental: {
    href: CARS_FOR('pt-BR').fromRovaniemi,
    sid: 'destination_rovaniemi_cars_rvn',
    airport: 'Retirada no Aeroporto de Rovaniemi (RVN)',
    blurb: '10 km até a cidade · a retirada mais fácil da Lapônia · disponível o ano todo',
  },
  dayPlan: [
    { day: '01', title: 'Chegada · Vila do Papai Noel', body: 'RVN a 10 km do centro. Deixe as malas e siga direto para a Vila do Papai Noel (aberta o ano todo). Atravesse a linha do Círculo Polar, envie um cartão. Jantar na cidade no Nili.' },
    { day: '02', title: 'Huskies + flutuação no gelo', body: 'Apukka ou fazenda próxima para safári de huskies (reserve com antecedência). À tarde, flutuação em traje seco no Ounasjoki, surpreendentemente quente, completamente silencioso. Janela de aurora a partir do fell Ounasvaara.' },
    { day: '03', title: 'Arktikum + cultura urbana', body: 'Meio dia no Arktikum (museu sámi + história da Lapônia, belo corredor de vidro). Almoço na cidade. Tarde livre, bate-volta a Lainio Snow Village se a temporada permitir.' },
    { day: '04', title: 'Manhã lenta · próxima etapa', body: 'Última sauna, café da manhã na cidade. Voe para casa de RVN ou alugue um carro e dirija 2 h ao norte até Levi para a segunda etapa.' },
  ],
  seoTitle: 'Cabanas e vilas aurora em Rovaniemi, Círculo Polar',
  seoDescription: 'Cabanas de tronco à beira-rio, vilas aurora de vidro e estadias na Vila do Papai Noel em Rovaniemi. Acesso ao Círculo Polar, aeroporto principal.',
}

const zhCN: DestinationBody = {
  tagline: '芬兰拉普兰首府。圣诞老人村、两条河流,以及在功能齐全的城市里直通极光的便利。',
  description: `罗瓦涅米是芬兰拉普兰的行政首府,也是主要的国际门户。城市位于北极圈上、克米河与奥纳斯河交汇处,人口约65,000。以欧洲标准而言不大,却是该地区遥遥领先的最大聚居点。

这里的组合很独特:一座运转中的北方城市,有餐厅、Arktikum科学博物馆与阿尔托设计的市政建筑,紧邻北极圈线上的原版圣诞老人村,以及短程车程内的多片小屋区。对于想要极光与荒野,同时希望从大型机场返程的旅客而言,罗瓦涅米是天然的基地。`,
  facts: [
    { label: '最近机场', value: 'RVN 10分钟' },
    { label: '人口', value: '约65,000' },
    { label: '北极圈', value: '穿城而过' },
    { label: '圣诞老人村', value: '全年开放' },
  ],
  highlights: [
    { title: '北极圈上的圣诞老人村', body: '原版。广场上一条白线标示北极圈,圣诞老人每天都按时"上班"。' },
    { title: 'Arktikum博物馆', body: '芬兰最优秀的北极科学、萨米文化与拉普兰历史博物馆。一根172米长的玻璃管在奥纳斯河畔向北延伸。' },
    { title: 'Ranua野生动物园', body: '向南80公里:全球最北的动物园之一,拥有50种北极与北方林动物,包括芬兰仅有的北极熊、貂熊与猞猁。' },
    { title: '市区内的Ounasvaara山', body: '滑雪场、速降自行车公园与极光观景点。驱车10分钟即达,无需前往国家公园。' },
    { title: '空中连接', body: '罗瓦涅米机场拥有拉普兰最广泛的冬季航线网络:直飞伦敦、巴黎、法兰克福、维也纳以及数十条包机线路。' },
    { title: '滨河小屋带', body: '沿克米河及Ounasvaara山的房源在15分钟车程内即可远离餐厅与购物区,享受适合极光的暗空。' },
  ],
  whenToGo: `9月中旬至3月下旬为极光季;11月至2月是深冬。
罗瓦涅米没有真正的极夜：即使在12月21日前后，太阳也会升起约两小时，正午是漫长的蓝色暮光。
6月至7月带来午夜阳光与Oikaraisenkoski的激流。`,
  howToGet: `飞往罗瓦涅米(RVN)。拉普兰连接最完善的机场。
芬兰国铁开行赫尔辛基至罗瓦涅米的夜班列车,并提供轿车托运,直达罗瓦涅米站。
此后租车便捷;该市是拉普兰内陆自驾游的物流基地。`,
  stayTypes: [
    '克米河与奥纳斯河畔的原木小屋。可住6–10人,桑拿、壁炉、开阔河景。',
    '圣诞老人村周边的玻璃极光别墅。为北极圈体验量身打造,卧室设有观天视角。',
    '市中心的设计师公寓。步行可达餐厅,作为单日探险出发的基地。',
    'Ounasvaara山麓木屋。冬季滑入式、夏季有自行车道,距市中心五分钟即享适合极光的地平线。',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: '芬兰最大的滑雪村,北行2小时。' },
    { name: 'Ylläs', href: '/destinations/yllas', blurb: '更安静的山地目的地,西北行2小时。' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: '通往荒野的入口,再向北3小时。' },
  ],
  anchorProperties: [
    { name: 'Arctic TreeHouse Hotel', propertyQuery: 'Arctic TreeHouse Hotel', sid: 'destination_rovaniemi_arctic_treehouse', note: '圣诞老人村内由建筑师设计的玻璃幕墙巢式套房。' },
    { name: 'Apukka Resort', propertyQuery: 'Apukka Resort Rovaniemi', sid: 'destination_rovaniemi_apukka', note: '距市区15分钟的湖畔极光小屋。园区内提供全套探险菜单。' },
    { name: 'Nova Skyland', propertyQuery: 'Nova Skyland', sid: 'destination_rovaniemi_nova_skyland', note: '位于Ounasvaara山的较新玻璃屋顶公寓,可眺望天际线。' },
    { name: '罗瓦涅米全部住宿', href: HOTEL_SEARCH_FOR('zh-CN').rovaniemi, sid: 'destination_rovaniemi_all_search', note: '在Trip.com浏览罗瓦涅米所有酒店与小屋。' },
  ],
  transport: [
    { mode: 'plane', label: '从罗瓦涅米机场(RVN)出发', detail: '全年HEL航班,以及冬季来自LHR · CDG · BCN · MAD。距市中心10公里 / 15分钟。' },
    { mode: 'bus', label: 'RVN机场巴士', detail: '单程7欧元 · 15分钟到中心 · 衔接每趟航班。' },
    { mode: 'car', label: '出租车至市中心', detail: '15–25欧元。大多数中心酒店在冬季套餐中包含接驳。' },
    { mode: 'train', label: '赫尔辛基。罗瓦涅米卧铺', detail: 'VR夜车含轿车托运选项,卧铺约90欧元。家庭出行最受欢迎的抵达方式。' },
  ],
  carRental: {
    href: CARS_FOR('zh-CN').fromRovaniemi,
    sid: 'destination_rovaniemi_cars_rvn',
    airport: '罗瓦涅米机场(RVN)取车',
    blurb: '距市区10公里 · 拉普兰最便捷的取车点 · 全年可用',
  },
  dayPlan: [
    { day: '01', title: '抵达 · 圣诞老人村', body: 'RVN距市中心10公里。放下行李,直奔圣诞老人村(全年开放)。跨越北极圈线,寄出明信片。在市内Nili用晚餐。' },
    { day: '02', title: '哈士奇 + 冰漂', body: '前往Apukka或附近农场参加哈士奇探险(提前预订)。下午在奥纳斯河进行干衣冰漂。出奇暖和、完全寂静。在Ounasvaara山等候极光窗口。' },
    { day: '03', title: 'Arktikum + 城市文化', body: '半日在Arktikum(萨米与拉普兰历史博物馆,玻璃廊道极美)。在市内午餐。下午自由。若季节合适可前往Lainio雪村一日游。' },
    { day: '04', title: '悠闲晨光 · 继续行程', body: '最后一次桑拿、市内早餐。从RVN返航,或租车北行2小时前往Levi开启下一段。' },
  ],
  seoTitle: '罗瓦涅米小屋与极光别墅。北极圈首府',
  seoDescription: '芬兰拉普兰罗瓦涅米的滨河原木小屋、玻璃极光别墅与圣诞老人村住宿。北极圈入口、主要机场、直接预订。',
}

const sv: DestinationBody = {
  tagline: 'Finska Lapplands huvudstad: Santa Claus Village, två älvar och norrsken inom räckhåll från en stad med all service.',
  description: `Rovaniemi är finska Lapplands administrativa huvudstad och regionens viktigaste internationella inkörsport. Staden ligger på polcirkeln, där älvarna Kemijoki och Ounasjoki möts, och har omkring 65 000 invånare, litet med europeiska mått men med stor marginal den största orten i regionen.

Blandningen är ovanlig: en fungerande nordlig stad med restauranger, vetenskapsmuseet Arktikum och offentlig arkitektur ritad av Aalto, sida vid sida med det ursprungliga Santa Claus Village på polcirkellinjen och ett nät av stugområden en kort bilresa bort. För dig som vill ha norrsken och vildmark men också flyga hem via en större flygplats är Rovaniemi den självklara basen.`,
  facts: [
    { label: 'Närmaste flygplats', value: 'RVN 10 min' },
    { label: 'Invånare', value: 'ca 65 000' },
    { label: 'Polcirkeln', value: 'Går genom staden' },
    { label: 'Santa Claus Village', value: 'Öppet året runt' },
  ],
  highlights: [
    { title: 'Santa Claus Village på polcirkeln', body: 'Originalet: en vit linje markerar polcirkeln tvärs över torget, och tomten har kontorstid varje dag året runt.' },
    { title: 'Museet Arktikum', body: 'Finlands främsta museum om arktisk vetenskap, samisk kultur och Lapplands historia, ett 172 meter långt glasrör på Ounasjokis strand, riktat mot norr.' },
    { title: 'Ranua djurpark', body: '80 km söderut: en av världens nordligaste djurparker, med 50 arktiska och boreala arter, bland dem Finlands enda isbjörnar, järvar och lodjur.' },
    { title: 'Fjället Ounasvaara inne i staden', body: 'Skidbacke, downhillcykelpark och norrskensutsikt, 10 minuter med bil från centrum, utan att du behöver köra till en nationalpark.' },
    { title: 'Flygförbindelser', body: 'Rovaniemi flygplats har Lapplands bredaste vinterlinjenät: direkt till London, Paris, Frankfurt och Wien, plus dussintals charterlinjer.' },
    { title: 'Stugbälten längs älven', body: 'Boenden längs Kemijoki och på Ounasvaara ger mörk himmel för norrsken inom 15 minuter från restauranger och butiker.' },
  ],
  whenToGo: `Mitten av september–slutet av mars är norrskenssäsong; november–februari är djupvinter.
Rovaniemi har ingen egentlig polarnatt: även kring den 21 december går solen upp i drygt två timmar, och mitt på dagen råder en lång blå skymning.
Juni–juli ger midnattssol och forsränning i Oikaraisenkoski.`,
  howToGet: `Flyg till Rovaniemi (RVN), Lapplands bäst förbundna flygplats.
Finska statsjärnvägarna kör nattåg från Helsingfors med bilvagn direkt till Rovaniemi station.
Hyrbil för vidare färd är enkelt; staden är den logistiska basen för bilresor i Lapplands inland.`,
  stayTypes: [
    'Timmerstugor vid Kemijoki och Ounasjoki, 6–10 gäster, bastu, öppen spis och fri utsikt över älven.',
    'Norrskensvillor i glas runt Santa Claus Village, byggda för polcirkelupplevelsen, med sovrum där du ser himlen.',
    'Designlägenheter i centrum, gångavstånd till restaurangerna, en bas för safariprogram i dagsutflyktsformat.',
    'Stugor på Ounasvaaras sidor, ski in på vintern, cykelleder på sommaren och en horisont för norrsken fem minuter från centrum.',
  ],
  siblings: [
    { name: 'Levi', href: '/destinations/levi', blurb: 'Finlands största skidby, 2 timmar norrut.' },
    { name: 'Ylläs', href: '/destinations/yllas', blurb: 'Lugnare fjälldestination, 2 timmar nordväst.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Porten till vildmarken, 3 timmar längre norrut.' },
  ],
  anchorProperties: [
    { name: 'Arctic TreeHouse Hotel', propertyQuery: 'Arctic TreeHouse Hotel', sid: 'destination_rovaniemi_arctic_treehouse', note: 'Arkitektritade sviter med glasfront, som fågelbon, vid Santa Claus Village.' },
    { name: 'Apukka Resort', propertyQuery: 'Apukka Resort Rovaniemi', sid: 'destination_rovaniemi_apukka', note: 'Norrskensstugor vid sjön 15 min från staden, med hela safariutbudet på plats.' },
    { name: 'Nova Skyland', propertyQuery: 'Nova Skyland', sid: 'destination_rovaniemi_nova_skyland', note: 'Nyare lägenheter med glastak och vy över staden från Ounasvaara.' },
    { name: 'Alla boenden i Rovaniemi', href: HOTEL_SEARCH_FOR('sv').rovaniemi, sid: 'destination_rovaniemi_all_search', note: 'Bläddra bland alla hotell och stugor i Rovaniemi på Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Från Rovaniemi flygplats (RVN)', detail: 'Flyg året runt från HEL plus vinterlinjer från LHR · CDG · BCN · MAD. 10 km / 15 min till centrum.' },
    { mode: 'bus', label: 'Flygbussen från RVN', detail: '7 € enkel resa · 15 min till centrum · möter varje flyg.' },
    { mode: 'car', label: 'Taxi till centrum', detail: '15–25 €. De flesta centrala hotell har transfer i sina vinterpaket.' },
    { mode: 'train', label: 'Sovvagn Helsingfors–Rovaniemi', detail: 'VR:s nattåg med möjlighet till bilvagn, ca 90 € i liggvagn. Den populäraste ankomstvägen för familjer.' },
  ],
  carRental: {
    href: CARS_FOR('sv').fromRovaniemi,
    sid: 'destination_rovaniemi_cars_rvn',
    airport: 'Upphämtning på Rovaniemi flygplats (RVN)',
    blurb: '10 km till staden · Lapplands enklaste upphämtning · tillgängligt året runt',
  },
  dayPlan: [
    { day: '01', title: 'Ankomst · Santa Claus Village', body: 'RVN ligger 10 km från staden. Lämna väskorna och åk direkt till Santa Claus Village (öppet året runt). Kliv över polcirkellinjen och posta ett kort. Middag i stan på Nili.' },
    { day: '02', title: 'Hundspann + isflytning', body: 'Apukka eller en gård i närheten för en hundspannssafari (boka i förväg). På eftermiddagen isflytning i torrdräkt på Ounasjoki, förvånansvärt varmt och helt tyst. Norrskensfönster från Ounasvaara.' },
    { day: '03', title: 'Arktikum + stadens kultur', body: 'Halvdag på Arktikum (museum om samisk kultur och Lapplands historia, med en vacker glaskorridor). Lunch i stan. Eftermiddagen fri, eller en dagsutflykt till Lainio Snow Village om säsongen tillåter.' },
    { day: '04', title: 'Långsam morgon · vidare', body: 'Sista bastun, frukost i stan. Antingen flyger du hem från RVN eller hyr bil och kör 2 timmar norrut till Levi för en andra etapp.' },
  ],
  seoTitle: 'Stugor och norrskensvillor i Rovaniemi vid polcirkeln',
  seoDescription: 'Timmerstugor vid älven, norrskensvillor i glas och boende vid Santa Claus Village i Rovaniemi, finska Lappland. Polcirkeln, stor flygplats och direktbokning.',
}

export default function Rovaniemi() {
  return (
    <DestinationPage
      slug="rovaniemi"
      name="Rovaniemi"
      heroImage="/images/extra-2.webp"
      ogImage="https://laplandstays.com/og-rovaniemi.jpg"
      seoKeywords={['Rovaniemi cabin', 'Santa Claus Village accommodation', 'Rovaniemi aurora villa', 'Arctic Circle cabin', 'Ounasvaara chalet', 'Rovaniemi holiday']}
      body={{ en, fi, de, ja, es, 'pt-BR': ptBR, 'zh-CN': zhCN, ko, fr, it, nl, sv }}
      highlightLinks={{
        0: { base: 'https://laplandchristmas.com', path: '/santa-village/' },
        1: { base: 'https://laplandvisit.com' },
        2: { base: 'https://laplandkids.com' },
      }}
    />
  )
}
