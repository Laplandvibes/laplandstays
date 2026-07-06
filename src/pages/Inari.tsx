import DestinationPage, { type DestinationBody } from '../components/DestinationPage'
import { HOTEL_SEARCH, CARS } from '../lib/affiliate'

const en: DestinationBody = {
  tagline: "Sámi capital, Finland's third-largest lake, and the most remote cabins in Finnish Lapland.",
  description: `Inari is the capital of Finnish Sámi culture and the largest municipality in Finland by area. Lake Inari, Inarijärvi, is 1,040 km² dotted with 3,000 islands, the third-largest lake in the country and one of the clearest bodies of water in Europe.

This is the deep north. Cabins here are genuinely remote: a ten-minute drive from the village can put you on a shore with no other lights visible for 180° of horizon. The SIIDA museum in Inari village anchors Sámi heritage, and the surrounding wilderness reaches into the tundra plateaus of the Utsjoki border.`,
  facts: [
    { label: 'Lakeside cabins from', value: '€200/night' },
    { label: 'Aurora Village from', value: '€300/night' },
    { label: 'Lake size', value: '1,040 km²' },
    { label: 'Nearest airport', value: 'IVL 40 min' },
  ],
  highlights: [
    { title: 'Lake Inari exclusivity', body: 'Properties on the lake shore are far apart by design. Private docks, ice-fishing holes in winter, summer boat cruises past the sacred island Ukonkivi (landings are no longer permitted).' },
    { title: 'SIIDA Sámi museum and nature centre', body: 'The best introduction to Sámi culture in the Nordic countries, indigenous history, language and the ecology of Sápmi, all in one building.' },
    { title: 'Aurora over open water', body: 'The lake shore gives a rare 180° unobstructed sky. In winter, aurora reflections on the frozen surface make viewing unusually dramatic.' },
    { title: 'Sámi food traditions', body: 'Local kitchens serve poronkäristys (sautéed reindeer), cold-smoked Arctic char, cloudberry desserts, ingredients from the land around you.' },
    { title: 'Tundra fjeld hiking', body: 'North of Inari the treeline thins into open Lapland fjeld. Summer hiking across Kevo and Utsjoki is as remote as Europe gets.' },
    { title: 'Winter husky and snowmobile access', body: 'Kennels around Inari run lake-ice sled routes on frozen Inarijärvi, wide open, no trees, unusually fast and silent.' },
  ],
  whenToGo: `Late September – early April is aurora season; at this latitude the aurora oval regularly sits directly overhead.
Mid-June – late July is midnight sun: the sun never sets for roughly six weeks.
Mid-August brings the short, intense ruska (autumn colour), reds and oranges across the fjeld.`,
  howToGet: `Fly into Ivalo (IVL), 40 min transfer. Direct Helsinki – Ivalo daily, seasonal charter routes from UK and Central Europe.
Rent a car, the best cabins are on lake-shore side-roads and require private transport.
For extended wilderness trips, the road continues to Utsjoki and the Norwegian border.`,
  stayTypes: [
    'Lakeside log cabins on Inarijärvi, 4–6 guests, private shore, wood-fired sauna, ice-fishing gear.',
    'Remote wilderness villas, off-grid-feel with full comfort, hours of untouched forest in every direction.',
    'Sámi-family-run cabins, small, personal, often with reindeer-herding heritage and on-site storytelling.',
    'Aurora glass retreats north of Inari village, designed specifically for sky viewing at high latitude.',
  ],
  siblings: [
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Gateway to UKK wilderness, 50 min south.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: "Lapland's capital and main arrival point." },
    { name: 'Levi', href: '/destinations/levi', blurb: 'The big ski village with a walkable centre.' },
  ],
  anchorProperties: [
    { name: 'Wilderness Hotel Nellim', propertyQuery: 'Wilderness Hotel Nellim', sid: 'destination_inari_nellim', note: 'On the eastern shore of Lake Inari, near the Russian border. Sámi-fish-and-sauna culture.' },
    { name: 'Aurora Village Ivalo', propertyQuery: 'Aurora Village Ivalo', sid: 'destination_inari_aurora_village', note: '20 min from Ivalo airport, glass-roofed cabins, aurora wake-up service.' },
    { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_inari_muotka', note: 'Architect-designed all-suite lodge between Inari and Saariselkä.' },
    { name: 'All Inari accommodation', href: HOTEL_SEARCH.inari, sid: 'destination_inari_all_search', note: 'Browse every Inari property on Hotels.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'From Ivalo Airport (IVL)', detail: 'Direct winter flights from HEL · LHR · CDG · AMS. 50 km / 40 min north to Inari village.' },
    { mode: 'bus', label: 'IVL airport bus to Inari', detail: '€15 one-way · 40 min · meets winter flights.' },
    { mode: 'car', label: 'Taxi or pre-booked transfer', detail: '€60–80 from IVL to Inari village. Most premium properties offer private transfer.' },
    { mode: 'car', label: 'Drive from Saariselkä', detail: '50 min along E75. Easy day-trip if your base is Saariselkä, many travellers split nights.' },
  ],
  carRental: {
    href: CARS.fromIvalo,
    sid: 'destination_inari_cars_ivl',
    airport: 'Pickup at Ivalo Airport (IVL)',
    blurb: '40 min to Inari village · essential for Nellim and Lake Inari shore cabins',
  },
  dayPlan: [
    { day: '01', title: 'Land · lakeside cabin', body: 'IVL midday flight, drive north to Inari village or further to Nellim. Settle, sauna, lake-edge walk. The Inari quiet sets in by hour two.' },
    { day: '02', title: 'Sámi culture · Siida museum', body: 'Morning at Siida (the indigenous Sámi museum, the most complete Sámi collection in the Nordics). Lunch in Inari village. Afternoon ice-fishing or a guided forest walk.' },
    { day: '03', title: 'Lake Inari snowshoe', body: 'Head out onto frozen Inarijärvi by snowmobile with a guide, open ice with the sacred island Ukonkivi on the horizon (the island itself is off-limits). Dark by 14:30 in winter, back at the cabin for the long aurora window.' },
    { day: '04', title: 'Slow departure', body: 'Reindeer farm visit, last sauna, drive back to IVL. Extend by 2 days if you can, Inari rewards slow.' },
  ],
  seoTitle: 'Inari Accommodation: Lakeside Cabins & Aurora Villas',
  seoDescription: 'Where to stay in Inari, Lapland: lakeside log cabins from €200/night, Aurora Village and Nellim Wilderness Hotel from €300. Private Lake Inari shores.',
}

const fi: DestinationBody = {
  tagline: 'Saamelaisten pääkaupunki, Suomen kolmanneksi suurin järvi ja koko Lapin syrjäisimmät mökit.',
  description: `Inari on Suomen saamelaiskulttuurin pääkaupunki ja pinta-alaltaan Suomen suurin kunta. Inarijärvi on 1 040 km², jolla on 3 000 saarta, maan kolmanneksi suurin järvi ja yksi Euroopan kirkkaimmista vesistöistä.

Tämä on syvä pohjoinen. Mökit täällä ovat aidosti syrjäisiä: kymmenen minuutin ajomatka kylästä voi viedä sinut rannalle, jossa muita valoja ei näy 180 asteen horisontissa. SIIDA-museo Inarin kylässä ankkuroi saamelaisperinnön, ja ympäröivä erämaa ulottuu Utsjoen rajan tundraylängöille.`,
  facts: [
    { label: 'Rantamökit alkaen', value: '200 €/yö' },
    { label: 'Aurora Village alkaen', value: '300 €/yö' },
    { label: 'Järven koko', value: '1 040 km²' },
    { label: 'Lähin lentokenttä', value: 'IVL 40 min' },
  ],
  highlights: [
    { title: 'Inarijärven eksklusiivisuus', body: 'Järven rannan kohteet on suunniteltu kauas toisistaan. Yksityiset laiturit, pilkkireiät talvella, kesällä veneristeilyt pyhän Ukonkiven ohi (saarelle ei enää saa nousta maihin).' },
    { title: 'SIIDA-saamelaismuseo ja luontokeskus', body: 'Paras johdatus saamelaiskulttuuriin Pohjoismaissa, alkuperäiskansan historia, kieli ja Sápmin ekologia, kaikki yhdessä rakennuksessa.' },
    { title: 'Revontulet avovedellä', body: 'Järvenranta tarjoaa harvinaisen 180 asteen esteettömän taivaan. Talvella revontulien heijastukset jäätyneellä pinnalla tekevät katselusta epätavallisen dramaattista.' },
    { title: 'Saamelaiset ruokaperinteet', body: 'Paikalliset keittiöt tarjoavat poronkäristystä, kylmäsavustettua nieriää, hillajälkiruokia, raaka-aineet ympäröivästä maasta.' },
    { title: 'Tundratuntureiden patikointi', body: 'Inarista pohjoiseen puuraja ohenee avoimeen Lapin tunturiin. Kevon ja Utsjoen kesäpatikointi on niin syrjäistä kuin Euroopassa pääsee.' },
    { title: 'Talvinen husky- ja moottorikelkkapääsy', body: 'Inarin ympärillä toimivat tarhat järjestävät järvijää-valjakkoreittejä Inarijärvelle, avara, ei puita, epätavallisen nopea ja hiljainen.' },
  ],
  whenToGo: `Syyskuun loppu–huhtikuun alku on revontulisesonki; tällä leveysasteella aurora-ovaali sijaitsee säännöllisesti suoraan pään yllä.
Kesäkuun puoliväli–heinäkuun loppu on keskiyön aurinkoa: aurinko ei laske noin kuuteen viikkoon.
Elokuun puoliväli tuo lyhyen, intensiivisen ruskan, punaiset ja oranssit värit tunturilla.`,
  howToGet: `Lennä Ivaloon (IVL), 40 min kuljetus. Suora Helsinki–Ivalo päivittäin, kausittaisia charter-reittejä Iso-Britanniasta ja Keski-Euroopasta.
Vuokraa auto, parhaat mökit ovat järven rannan sivuteillä ja vaativat yksityistä kulkua.
Pidemmille erämaamatkoille tie jatkuu Utsjokeen ja Norjan rajalle.`,
  stayTypes: [
    'Rantamökit Inarijärvellä, 4–6 vierasta, yksityinen ranta, puulla lämpiävä sauna, pilkkivälineet.',
    'Syrjäiset erämaavillat, off-grid-tunnelma täydellä mukavuudella, tunteja koskematonta metsää joka suuntaan.',
    'Saamelaisperheen pyörittämät mökit, pieniä, henkilökohtaisia, usein poronhoitoperinnöllä ja paikan päällä tarinointia.',
    'Aurora-lasiretriitit Inarin kylän pohjoispuolella, suunniteltu nimenomaan taivaan katseluun korkealla leveysasteella.',
  ],
  siblings: [
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Portti UKK-erämaahan, 50 min etelään.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'Lapin pääkaupunki ja pääsaapumispiste.' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'Iso hiihtokylä kävelyetäisyydellä olevalla keskustalla.' },
  ],
  anchorProperties: [
    { name: 'Wilderness Hotel Nellim', propertyQuery: 'Wilderness Hotel Nellim', sid: 'destination_inari_nellim', note: 'Inarijärven itärannalla, lähellä Venäjän rajaa. Saamelaista kala- ja saunakulttuuria.' },
    { name: 'Aurora Village Ivalo', propertyQuery: 'Aurora Village Ivalo', sid: 'destination_inari_aurora_village', note: '20 min Ivalon lentokentältä, lasikattoiset mökit, revontulien herätys.' },
    { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_inari_muotka', note: 'Arkkitehtien suunnittelema sviittikohde Inarin ja Saariselän välillä.' },
    { name: 'Kaikki Inarin majoitukset', href: HOTEL_SEARCH.inari, sid: 'destination_inari_all_search', note: 'Selaa kaikki Inarin kohteet Hotels.comissa.' },
  ],
  transport: [
    { mode: 'plane', label: 'Ivalon lentokentältä (IVL)', detail: 'Suorat talvilennot HEL · LHR · CDG · AMS. 50 km / 40 min pohjoiseen Inarin kylälle.' },
    { mode: 'bus', label: 'IVL-lentokenttäbussi Inariin', detail: '15 € yhteen suuntaan · 40 min · talvilennoilla.' },
    { mode: 'car', label: 'Taksi tai esivarattu kuljetus', detail: '60–80 € IVL:stä Inarin kylälle. Useimmat premium-kohteet tarjoavat yksityiskuljetuksen.' },
    { mode: 'car', label: 'Ajo Saariselältä', detail: '50 min E75:llä. Helppo päiväretki jos tukikohtana on Saariselkä, moni matkailija jakaa yöt.' },
  ],
  carRental: {
    href: CARS.fromIvalo,
    sid: 'destination_inari_cars_ivl',
    airport: 'Nouto Ivalon lentokentältä (IVL)',
    blurb: '40 min Inarin kylälle · välttämätön Nellimille ja Inarijärven rantamökeille',
  },
  dayPlan: [
    { day: '01', title: 'Lasku · rantamökki', body: 'IVL-keskipäivän lento, ajo pohjoiseen Inarin kylälle tai Nellimiin. Asettuminen, sauna, rannankäynti. Inarin hiljaisuus asettuu tunnin kahden kuluttua.' },
    { day: '02', title: 'Saamelaiskulttuuri · Siida-museo', body: 'Aamu Siidassa (alkuperäinen saamelaismuseo, hiljainen huippuluokan kokoelma). Lounas Inarin kylällä. Iltapäivällä pilkki tai opastettu metsäkävely.' },
    { day: '03', title: 'Inarijärven lumikenkä', body: 'Lähde oppaan kanssa moottorikelkkaretkelle Inarijärven jäälle, pyhä Ukonsaari siintää horisontissa (saarelle ei nousta maihin). Pimeää klo 14:30 talvella, takaisin mökille pitkään revontuli-ikkunaan.' },
    { day: '04', title: 'Rauhallinen lähtö', body: 'Porotilakäynti, viimeinen sauna, ajo takaisin IVL:lle. Pidennä kahdella päivällä jos voit, Inari palkitsee hitaasti.' },
  ],
  seoTitle: 'Inarin majoitus: rantamökit ja aurora-villat',
  seoDescription: 'Missä yöpyä Inarissa: rantamökit alkaen 200 €/yö, Aurora Village ja Nellim Wilderness Hotel alkaen 300 €. Yksityiset rannat Inarijärvellä, saamelaisperintö.',
}

const de: DestinationBody = {
  tagline: 'Hauptstadt der Sámi, Finnlands drittgrößter See und die abgelegensten Hütten in Finnisch-Lappland.',
  description: `Inari ist die Hauptstadt der finnischen Sámi-Kultur und flächenmäßig die größte Gemeinde Finnlands. Der Inarisee, Inarijärvi, ist 1.040 km² groß, übersät mit 3.000 Inseln, der drittgrößte See des Landes und eines der klarsten Gewässer Europas.

Das ist der tiefe Norden. Hütten hier sind wirklich abgelegen: Eine zehnminütige Fahrt aus dem Dorf kann Sie an ein Ufer bringen, an dem 180° des Horizonts keine anderen Lichter zeigen. Das SIIDA-Museum im Dorf Inari verankert das Sámi-Erbe, und die umliegende Wildnis erstreckt sich bis in die Tundra-Hochebenen an der Grenze zu Utsjoki.`,
  facts: [
    { label: 'Seehütten ab', value: '200 €/Nacht' },
    { label: 'Aurora Village ab', value: '300 €/Nacht' },
    { label: 'Seegröße', value: '1.040 km²' },
    { label: 'Nächster Flughafen', value: 'IVL 40 min' },
  ],
  highlights: [
    { title: 'Exklusivität am Inarisee', body: 'Unterkünfte am See-Ufer liegen bewusst weit auseinander. Private Stege, Eislöcher im Winter, im Sommer Bootsfahrten vorbei an der heiligen Insel Ukonkivi (Anlandungen sind nicht mehr erlaubt).' },
    { title: 'SIIDA Sámi-Museum und Naturzentrum', body: 'Die beste Einführung in die Sámi-Kultur in den nordischen Ländern, indigene Geschichte, Sprache und die Ökologie Sápmis, alles in einem Gebäude.' },
    { title: 'Polarlicht über offenem Wasser', body: 'Das Seeufer bietet einen seltenen 180°-Blick ohne Hindernisse. Im Winter machen Polarlicht-Reflexionen auf der gefrorenen Fläche die Beobachtung außergewöhnlich dramatisch.' },
    { title: 'Sámi-Essenstraditionen', body: 'Lokale Küchen servieren poronkäristys (geschmortes Rentier), kaltgeräucherten Saibling, Moltebeer-Desserts, Zutaten aus dem Land um Sie herum.' },
    { title: 'Tundra-Fjäll-Wandern', body: 'Nördlich von Inari lichtet sich die Baumgrenze zur offenen Lappland-Fjäll-Landschaft. Sommer-Wandern in Kevo und Utsjoki ist so abgelegen, wie Europa es zulässt.' },
    { title: 'Winter-Husky- und Schneemobil-Zugang', body: 'Zwinger um Inari bieten Seeeis-Schlittenrouten auf dem gefrorenen Inarijärvi, weit offen, keine Bäume, ungewöhnlich schnell und still.' },
  ],
  whenToGo: `Ende September – Anfang April ist Polarlicht-Saison; auf dieser Breite liegt das Polarlichtoval regelmäßig direkt über dem Kopf.
Mitte Juni – Ende Juli ist Mitternachtssonne: Die Sonne geht rund sechs Wochen lang nicht unter.
Mitte August bringt die kurze, intensive Ruska (Herbstfarben), Rot und Orange über das Fjäll.`,
  howToGet: `Fliegen Sie nach Ivalo (IVL), 40 min Transfer. Direkt Helsinki – Ivalo täglich, saisonale Charterrouten aus dem UK und Mitteleuropa.
Mietwagen, die besten Hütten liegen an Seitenstraßen am Seeufer und brauchen einen privaten Wagen.
Für ausgedehnte Wildnisreisen führt die Straße weiter nach Utsjoki und zur norwegischen Grenze.`,
  stayTypes: [
    'Blockhütten am Ufer des Inarijärvi, 4–6 Gäste, privates Ufer, holzbeheizte Sauna, Eisfischer-Ausrüstung.',
    'Abgelegene Wildnis-Villen, Off-grid-Gefühl mit vollem Komfort, in jede Richtung Stunden unberührter Wald.',
    'Von Sámi-Familien geführte Hütten, klein, persönlich, oft mit Rentierhirten-Erbe und vor Ort erzählten Geschichten.',
    'Polarlicht-Glas-Refugien nördlich von Inari, speziell für die Himmelsbeobachtung auf hoher Breite gebaut.',
  ],
  siblings: [
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Tor zur UKK-Wildnis, 50 min südlich.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'Lapplands Hauptstadt und Hauptankunftspunkt.' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'Das große Skidorf mit fußläufigem Zentrum.' },
  ],
  anchorProperties: [
    { name: 'Wilderness Hotel Nellim', propertyQuery: 'Wilderness Hotel Nellim', sid: 'destination_inari_nellim', note: 'Am Ostufer des Inarisees, nahe der russischen Grenze. Sámi-Fisch- und Saunakultur.' },
    { name: 'Aurora Village Ivalo', propertyQuery: 'Aurora Village Ivalo', sid: 'destination_inari_aurora_village', note: '20 min vom Flughafen Ivalo, Hütten mit Glasdach, Polarlicht-Weckdienst.' },
    { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_inari_muotka', note: 'Architektonisch gestaltete Suiten-Lodge zwischen Inari und Saariselkä.' },
    { name: 'Alle Inari-Unterkünfte', href: HOTEL_SEARCH.inari, sid: 'destination_inari_all_search', note: 'Stöbern Sie in allen Inari-Unterkünften auf Hotels.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Ab Flughafen Ivalo (IVL)', detail: 'Direkte Winterflüge ab HEL · LHR · CDG · AMS. 50 km / 40 min nordwärts ins Dorf Inari.' },
    { mode: 'bus', label: 'IVL-Flughafenbus nach Inari', detail: '15 € einfach · 40 min · zu Winterflügen.' },
    { mode: 'car', label: 'Taxi oder vorgebuchter Transfer', detail: '60–80 € von IVL ins Dorf Inari. Die meisten Premium-Unterkünfte bieten privaten Transfer.' },
    { mode: 'car', label: 'Anfahrt aus Saariselkä', detail: '50 min auf der E75. Leichter Tagesausflug, wenn Saariselkä Ihre Basis ist, viele Reisende teilen die Nächte.' },
  ],
  carRental: {
    href: CARS.fromIvalo,
    sid: 'destination_inari_cars_ivl',
    airport: 'Abholung am Flughafen Ivalo (IVL)',
    blurb: '40 min ins Dorf Inari · unverzichtbar für Nellim und Hütten am Inarisee',
  },
  dayPlan: [
    { day: '01', title: 'Landung · Seehütte', body: 'IVL-Mittagsflug, Fahrt nordwärts ins Dorf Inari oder weiter nach Nellim. Einrichten, Sauna, Spaziergang am Ufer. Die Inari-Stille setzt nach zwei Stunden ein.' },
    { day: '02', title: 'Sámi-Kultur · Siida-Museum', body: 'Vormittag im Siida (das indigene Sámi-Museum, die umfassendste Sámi-Sammlung der nordischen Länder). Mittag im Dorf Inari. Nachmittags Eisfischen oder geführter Waldspaziergang.' },
    { day: '03', title: 'Inarisee-Schneeschuhwanderung', body: 'Geführte Schneemobiltour über das Eis des Inarisees, mit Blick auf die heilige Insel Ukonkivi (die Insel selbst darf nicht betreten werden). Dunkelheit ab 14:30 im Winter, zurück in der Hütte für das lange Polarlicht-Fenster.' },
    { day: '04', title: 'Ruhige Abreise', body: 'Besuch einer Rentierfarm, letzte Sauna, Rückfahrt nach IVL. Verlängern Sie um 2 Tage, wenn möglich, Inari belohnt Entschleunigung.' },
  ],
  seoTitle: 'Inari-Unterkünfte: Seehütten & Polarlicht-Villen',
  seoDescription: 'Wo Sie in Inari übernachten: Blockhütten am See ab 200 €/Nacht, Aurora Village und Nellim Wilderness Hotel ab 300 €. Private Ufer am Inarisee, Sámi-Erbe.',
}

const ko: DestinationBody = {
  tagline: '사미 문화의 중심, 핀란드에서 세 번째로 큰 호수, 그리고 핀란드 라플란드에서 가장 외딴 캐빈.',
  description: `이나리는 핀란드 사미 문화의 중심지이자 면적 기준 핀란드에서 가장 큰 자치체입니다. 이나리 호수(Inarijärvi)는 1,040km² 면적에 3,000개의 섬이 흩어진 핀란드 제3의 호수로, 유럽에서 가장 맑은 수역 중 하나로 꼽힙니다.

이곳은 깊은 북쪽입니다. 캐빈들은 진정한 의미로 외져 있습니다. 마을에서 차로 10분만 달려도 180° 지평선 전체에 다른 불빛이라곤 보이지 않는 호반에 닿을 수 있습니다. 이나리 마을의 SIIDA 박물관이 사미의 유산을 단단히 지키며, 주변 야생은 Utsjoki 국경의 툰드라 고원까지 이어집니다.`,
  facts: [
    { label: '호숫가 캐빈 1박', value: '200€부터' },
    { label: 'Aurora Village 1박', value: '300€부터' },
    { label: '호수 면적', value: '1,040 km²' },
    { label: '가장 가까운 공항', value: 'IVL 40분' },
  ],
  highlights: [
    { title: '이나리 호수의 독점성', body: '호반의 숙소는 의도적으로 멀찍이 떨어져 있습니다. 전용 부두, 겨울철 얼음 낚시 구멍, 여름에는 신성한 섬 Ukonkivi 옆을 지나는 보트 크루즈를 즐길 수 있습니다(섬 상륙은 더 이상 허용되지 않습니다).' },
    { title: 'SIIDA 사미 박물관과 자연센터', body: '북유럽에서 사미 문화를 만나는 최고의 입문지. 원주민의 역사, 언어, Sápmi의 생태가 한 건물 안에 모여 있습니다.' },
    { title: '열린 수면 위의 오로라', body: '호반은 180° 시야가 막힘 없이 트인 드문 장소입니다. 겨울에는 얼어붙은 수면에 반사되는 오로라가 관측을 더욱 극적으로 만듭니다.' },
    { title: '사미 식문화 전통', body: 'poronkäristys(볶은 순록), 차갑게 훈제한 북극 곤들매기, 클라우드베리 디저트 등. 주변 자연에서 얻은 재료가 그대로 식탁에 오릅니다.' },
    { title: '툰드라 산악 트레킹', body: '이나리 북쪽으로는 수목한계선이 옅어지며 라플란드 툰드라가 펼쳐집니다. Kevo와 Utsjoki를 가로지르는 여름 트레킹은 유럽에서 가장 외딴 영역에 가깝습니다.' },
    { title: '겨울 허스키와 스노모빌 접근성', body: '이나리 인근 켄넬들은 얼어붙은 Inarijärvi 위로 호수 빙판 썰매 코스를 운영합니다. 광활하고 나무 없는 평원에서 유난히 빠르고 고요합니다.' },
  ],
  whenToGo: `9월 말–4월 초가 오로라 시즌입니다. 이 위도에서는 오로라 오벌이 정수리 위에 자주 머무릅니다.
6월 중순–7월 말은 백야 시기로, 약 6주 동안 해가 지지 않습니다.
8월 중순에는 짧고 강렬한 ruska(가을 단풍). 산자락 전체가 붉은빛과 주황빛으로 물듭니다.`,
  howToGet: `이발로(IVL)로 비행, 40분 트랜스퍼. 헬싱키–이발로 매일 직항, 영국·중부 유럽발 시즌 차터편이 있습니다.
렌터카를 권장합니다. 가장 좋은 캐빈은 호반의 좁은 길 끝에 있어 개인 차량이 필요합니다.
더 긴 야생 여행을 원하시면 도로는 Utsjoki와 노르웨이 국경까지 이어집니다.`,
  stayTypes: [
    'Inarijärvi 호숫가의 통나무 캐빈. 4–6인용, 전용 호반, 장작 사우나, 얼음 낚시 장비.',
    '깊숙한 윌더니스 빌라. 오프그리드 감성에 완벽한 편의, 사방으로 손길 닿지 않은 숲이 몇 시간 거리.',
    '사미 가족이 운영하는 캐빈. 작고 따뜻하며, 종종 순록 사육 유산과 직접 들려주는 이야기가 함께합니다.',
    '이나리 마을 북쪽의 오로라 글래스 리트리트. 고위도에서 하늘을 바라보기 위해 특별히 설계되었습니다.',
  ],
  siblings: [
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'UKK 야생으로 향하는 관문, 남쪽으로 50분.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: '라플란드의 중심 도시이자 주요 입국 거점.' },
    { name: 'Levi', href: '/destinations/levi', blurb: '도보 거리의 마을 중심을 갖춘 라플란드 최대 스키 마을.' },
  ],
  anchorProperties: [
    { name: 'Wilderness Hotel Nellim', propertyQuery: 'Wilderness Hotel Nellim', sid: 'destination_inari_nellim', note: '이나리 호수 동쪽 기슭, 러시아 국경 근처. 사미 어업과 사우나 문화가 살아 있습니다.' },
    { name: 'Aurora Village Ivalo', propertyQuery: 'Aurora Village Ivalo', sid: 'destination_inari_aurora_village', note: '이발로 공항에서 20분. 유리 천장 캐빈과 오로라 모닝콜 서비스.' },
    { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_inari_muotka', note: '이나리와 사리셀카 사이에 자리한 건축가 설계 전 객실 스위트 로지.' },
    { name: '이나리 전체 숙소', href: HOTEL_SEARCH.inari, sid: 'destination_inari_all_search', note: 'Hotels.com에서 이나리의 모든 숙소를 둘러보세요.' },
  ],
  transport: [
    { mode: 'plane', label: '이발로 공항(IVL)에서', detail: 'HEL · LHR · CDG · AMS 겨울 직항편. 이나리 마을까지 북쪽으로 50km / 40분.' },
    { mode: 'bus', label: 'IVL 공항버스(이나리행)', detail: '편도 15€ · 40분 · 겨울 항공편에 맞춰 운행.' },
    { mode: 'car', label: '택시 또는 사전 예약 트랜스퍼', detail: 'IVL에서 이나리 마을까지 60–80€. 대부분의 프리미엄 숙소는 프라이빗 트랜스퍼를 제공합니다.' },
    { mode: 'car', label: '사리셀카에서 차로', detail: 'E75 도로로 50분. 사리셀카가 베이스라면 손쉬운 당일치기. 많은 여행자가 두 곳에 나누어 묵습니다.' },
  ],
  carRental: {
    href: CARS.fromIvalo,
    sid: 'destination_inari_cars_ivl',
    airport: '이발로 공항(IVL) 픽업',
    blurb: '이나리 마을까지 40분 · Nellim과 이나리 호수 캐빈 방문에 필수',
  },
  dayPlan: [
    { day: '01', title: '도착 · 호숫가 캐빈', body: 'IVL 정오 항공편, 북쪽으로 운전해 이나리 마을 또는 Nellim까지. 짐 정리, 사우나, 호반 산책. 두 시간이면 이나리의 고요가 몸에 스며듭니다.' },
    { day: '02', title: '사미 문화 · Siida 박물관', body: '오전 Siida에서 시간 보내기(사미 토착 박물관, 북유럽에서 가장 충실한 사미 컬렉션). 이나리 마을에서 점심. 오후는 얼음 낚시 또는 가이드 숲 산책.' },
    { day: '03', title: '이나리 호수 스노슈', body: '가이드와 함께 스노모빌로 얼어붙은 호수 위를 달립니다. 신성한 Ukko 섬이 수평선 위로 보입니다(섬에는 오르지 않습니다). 겨울에는 14:30이면 어두워지므로. 캐빈으로 돌아와 긴 오로라 윈도우를 누리세요.' },
    { day: '04', title: '느긋한 출발', body: '순록 농장 방문, 마지막 사우나, IVL로 귀로. 가능하면 이틀 더 머무세요. 이나리는 천천히 보는 분께 보답합니다.' },
  ],
  seoTitle: '이나리 숙박: 호숫가 캐빈과 오로라 빌라',
  seoDescription: '핀란드 라플란드 이나리 숙박 가이드: 호숫가 통나무 캐빈 1박 200€부터, Aurora Village와 Nellim Wilderness Hotel 300€부터. 이나리 호수의 전용 호반, 사미 유산, 다크 스카이, 직접 예약.',
}

const fr: DestinationBody = {
  tagline: "Capitale sámi, troisième plus grand lac de Finlande et les chalets les plus reculés de Laponie finlandaise.",
  description: `Inari est la capitale de la culture sámi finlandaise et la commune la plus vaste du pays. Le lac Inari, Inarijärvi, couvre 1 040 km² parsemés de 3 000 îles, troisième lac du pays et l'une des étendues d'eau les plus pures d'Europe.

C'est le grand Nord. Les chalets y sont réellement reculés : dix minutes de voiture depuis le village suffisent pour atteindre une rive où, sur 180° d'horizon, aucune autre lumière ne brille. Le musée SIIDA au village d'Inari ancre l'héritage sámi, et la nature autour s'étire jusqu'aux plateaux de toundra de la frontière d'Utsjoki.`,
  facts: [
    { label: 'Chalets au bord du lac dès', value: '200 €/nuit' },
    { label: 'Aurora Village dès', value: '300 €/nuit' },
    { label: 'Surface du lac', value: '1 040 km²' },
    { label: 'Aéroport le plus proche', value: 'IVL 40 min' },
  ],
  highlights: [
    { title: 'Exclusivité du lac Inari', body: 'Les hébergements sur la rive sont voulus éloignés les uns des autres. Pontons privés, trous de pêche sur glace en hiver, en été, croisières en bateau longeant l\'île sacrée d\'Ukonkivi (le débarquement n\'y est plus autorisé).' },
    { title: 'Musée et centre nature SIIDA', body: 'La meilleure introduction à la culture sámi des pays nordiques, histoire indigène, langue et écologie du Sápmi, le tout dans un même bâtiment.' },
    { title: 'Aurores au-dessus du grand large', body: 'La rive du lac offre 180° de ciel sans obstacle, rare. En hiver, les reflets aurores sur la glace rendent l\'observation singulièrement spectaculaire.' },
    { title: 'Traditions culinaires sámi', body: 'Les cuisines locales proposent du poronkäristys (renne sauté), de l\'omble chevalier fumé à froid, des desserts à la mûre arctique, les ingrédients sortent du paysage qui vous entoure.' },
    { title: 'Randonnée sur les fjells de toundra', body: 'Au nord d\'Inari, la limite des arbres s\'efface vers le fjell ouvert. Les randonnées d\'été à Kevo et Utsjoki touchent à ce que l\'Europe offre de plus reculé.' },
    { title: 'Accès huskys et motoneige en hiver', body: 'Les chenils autour d\'Inari exploitent des itinéraires sur la glace de l\'Inarijärvi, grand ouvert, sans arbres, étonnamment rapide et silencieux.' },
  ],
  whenToGo: `Fin septembre à début avril, c\'est la saison des aurores ; à cette latitude, l\'ovale auroral passe régulièrement à la verticale.
Mi-juin à fin juillet, c\'est le soleil de minuit : il ne se couche pas pendant environ six semaines.
Mi-août apporte la ruska, brève et intense, rouges et orangés sur les fjells.`,
  howToGet: `Vol vers Ivalo (IVL), 40 min de transfert. Direct Helsinki – Ivalo quotidien, routes charter saisonnières depuis le Royaume-Uni et l\'Europe centrale.
Voiture de location, les meilleurs chalets se trouvent sur des chemins latéraux au bord du lac et exigent un véhicule.
Pour une virée plus longue dans la nature, la route continue jusqu\'à Utsjoki et la frontière norvégienne.`,
  stayTypes: [
    'Chalets en rondins au bord de l\'Inarijärvi, 4 à 6 voyageurs, rive privée, sauna au bois, équipement de pêche sur glace.',
    'Villas isolées en pleine nature, sensation off-grid avec confort complet, des heures de forêt vierge dans toutes les directions.',
    'Chalets tenus par des familles sámi, petits, personnels, souvent porteurs d\'un héritage d\'élevage de rennes et de récits sur place.',
    'Refuges en verre aurores au nord d\'Inari, conçus spécifiquement pour observer le ciel à haute latitude.',
  ],
  siblings: [
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Porte de la nature UKK, à 50 min au sud.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'Capitale de la Laponie et principal point d\'arrivée.' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'Le grand village de ski avec son centre à pied.' },
  ],
  anchorProperties: [
    { name: 'Wilderness Hotel Nellim', propertyQuery: 'Wilderness Hotel Nellim', sid: 'destination_inari_nellim', note: 'Sur la rive est du lac Inari, près de la frontière russe. Culture sámi du poisson et du sauna.' },
    { name: 'Aurora Village Ivalo', propertyQuery: 'Aurora Village Ivalo', sid: 'destination_inari_aurora_village', note: 'À 20 min de l\'aéroport d\'Ivalo, chalets à toit de verre, service de réveil aurores.' },
    { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_inari_muotka', note: 'Lodge signé tout-suites entre Inari et Saariselkä.' },
    { name: 'Tous les hébergements d\'Inari', href: HOTEL_SEARCH.inari, sid: 'destination_inari_all_search', note: 'Parcourez chaque adresse d\'Inari sur Hotels.com.' },
  ],
  transport: [
    { mode: 'plane', label: "Depuis l'aéroport d'Ivalo (IVL)", detail: 'Vols hivernaux directs HEL · LHR · CDG · AMS. 50 km / 40 min vers le nord jusqu\'au village d\'Inari.' },
    { mode: 'bus', label: "Bus aéroport IVL pour Inari", detail: '15 € l\'aller · 40 min · sur les vols hivernaux.' },
    { mode: 'car', label: 'Taxi ou transfert pré-réservé', detail: '60 à 80 € depuis IVL jusqu\'au village d\'Inari. La plupart des adresses premium incluent un transfert privé.' },
    { mode: 'car', label: 'Route depuis Saariselkä', detail: '50 min par la E75. Excursion facile si Saariselkä sert de base, beaucoup de voyageurs partagent les nuits.' },
  ],
  carRental: {
    href: CARS.fromIvalo,
    sid: 'destination_inari_cars_ivl',
    airport: 'Prise en charge à l\'aéroport d\'Ivalo (IVL)',
    blurb: '40 min jusqu\'au village d\'Inari · indispensable pour Nellim et les rives du lac',
  },
  dayPlan: [
    { day: '01', title: 'Atterrissage · chalet au bord du lac', body: 'Vol IVL en début d\'après-midi, route vers le nord jusqu\'au village d\'Inari ou plus loin vers Nellim. Installation, sauna, marche au bord de l\'eau. Le silence d\'Inari s\'installe au bout de deux heures.' },
    { day: '02', title: 'Culture sámi · musée Siida', body: 'Matinée au Siida (musée sámi indigène, la collection sámi la plus complète des pays nordiques). Déjeuner au village d\'Inari. Après-midi pêche sur glace ou balade guidée en forêt.' },
    { day: '03', title: 'Raquettes sur le lac Inari', body: 'Sortie guidée en motoneige sur le lac gelé, avec vue sur l\'île sacrée d\'Ukonkivi (on n\'y débarque pas). Nuit dès 14h30 en hiver, retour au chalet pour la longue fenêtre aurores.' },
    { day: '04', title: 'Départ tranquille', body: 'Visite d\'une ferme à rennes, dernier sauna, route retour vers IVL. Prolongez de deux jours si possible, Inari récompense la lenteur.' },
  ],
  seoTitle: "Hébergements à Inari : chalets au lac et villas aurores",
  seoDescription: 'Où loger à Inari : chalets en rondins au bord du lac dès 200 €/nuit, Aurora Village et Nellim Wilderness Hotel dès 300 €. Rives privées, héritage sámi.',
}

const it: DestinationBody = {
  tagline: 'Capitale sámi, terzo lago più grande della Finlandia e gli chalet più remoti della Lapponia finlandese.',
  description: `Inari è la capitale della cultura sámi finlandese ed è il comune più esteso del Paese per superficie. Il lago Inari, Inarijärvi, copre 1.040 km² punteggiati da 3.000 isole, terzo lago della Finlandia e uno degli specchi d\'acqua più puri d\'Europa.

Questo è il profondo Nord. Gli chalet sono davvero isolati: dieci minuti d\'auto dal paese La portano su una sponda dove, su 180° di orizzonte, non si vede nessun\'altra luce. Il museo SIIDA, in paese, custodisce l\'eredità sámi e la natura circostante si spinge fino agli altipiani di tundra al confine con Utsjoki.`,
  facts: [
    { label: 'Chalet sul lago da', value: '200 €/notte' },
    { label: 'Aurora Village da', value: '300 €/notte' },
    { label: 'Superficie del lago', value: '1.040 km²' },
    { label: 'Aeroporto più vicino', value: 'IVL 40 min' },
  ],
  highlights: [
    { title: 'Esclusività del lago Inari', body: 'Le strutture sulla riva sono volutamente distanti. Pontili privati, fori per la pesca sul ghiaccio in inverno, in estate crociere in barca lungo l\'isola sacra di Ukonkivi (lo sbarco non è più consentito).' },
    { title: 'Museo e centro natura SIIDA', body: 'La migliore introduzione alla cultura sámi nei Paesi nordici, storia indigena, lingua ed ecologia del Sápmi, in un solo edificio.' },
    { title: 'Aurora su acqua aperta', body: 'La sponda del lago offre una rara fascia di 180° senza ostacoli. In inverno i riflessi dell\'aurora sul ghiaccio rendono l\'osservazione inusualmente teatrale.' },
    { title: 'Tradizioni gastronomiche sámi', body: 'Le cucine locali servono poronkäristys (renna saltata), salmerino affumicato a freddo, dolci ai lamponi artici, ingredienti dal territorio intorno a Lei.' },
    { title: 'Trekking sui fjell della tundra', body: 'A nord di Inari il limite del bosco si dirada nei fjell aperti della Lapponia. I trekking estivi attraverso Kevo e Utsjoki sono fra i più remoti d\'Europa.' },
    { title: 'Husky e motoslitta in inverno', body: 'Gli allevamenti attorno a Inari propongono percorsi su slitta sul ghiaccio dell\'Inarijärvi, distesa aperta, niente alberi, sorprendentemente rapidi e silenziosi.' },
  ],
  whenToGo: `Fine settembre–inizio aprile è la stagione delle aurore; a questa latitudine l\'ovale aurorale si trova spesso direttamente sopra la testa.
Metà giugno–fine luglio è sole di mezzanotte: per circa sei settimane il sole non tramonta.
Metà agosto porta la ruska, breve e intensa, rossi e arancioni sui fjell.`,
  howToGet: `Voli per Ivalo (IVL), 40 min di transfer. Diretto Helsinki–Ivalo ogni giorno, rotte charter stagionali da Regno Unito ed Europa centrale.
Auto a noleggio, gli chalet migliori si trovano su strade laterali in riva al lago e richiedono mezzi propri.
Per viaggi più lunghi nella natura, la strada prosegue fino a Utsjoki e al confine norvegese.`,
  stayTypes: [
    'Chalet in tronchi sulla riva dell\'Inarijärvi, 4–6 ospiti, riva privata, sauna a legna, attrezzatura per la pesca sul ghiaccio.',
    'Ville isolate nella natura, atmosfera off-grid con comfort pieno, ore di foresta intatta in ogni direzione.',
    'Chalet gestiti da famiglie sámi, piccoli, personali, spesso legati alla pastorizia delle renne e a racconti in casa.',
    'Rifugi in vetro per l\'aurora a nord del paese di Inari, pensati per osservare il cielo ad alta latitudine.',
  ],
  siblings: [
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Porta verso la natura UKK, a 50 min verso sud.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'Capitale della Lapponia e principale punto d\'arrivo.' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'Il grande paese sciistico con centro a piedi.' },
  ],
  anchorProperties: [
    { name: 'Wilderness Hotel Nellim', propertyQuery: 'Wilderness Hotel Nellim', sid: 'destination_inari_nellim', note: 'Sulla riva orientale del lago Inari, vicino al confine russo. Cultura sámi di pesce e sauna.' },
    { name: 'Aurora Village Ivalo', propertyQuery: 'Aurora Village Ivalo', sid: 'destination_inari_aurora_village', note: 'A 20 min dall\'aeroporto di Ivalo, chalet con tetto di vetro, sveglia dedicata all\'aurora.' },
    { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_inari_muotka', note: 'Lodge firmato, solo suite, tra Inari e Saariselkä.' },
    { name: 'Tutti gli alloggi di Inari', href: HOTEL_SEARCH.inari, sid: 'destination_inari_all_search', note: 'Esplori ogni struttura di Inari su Hotels.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Dall\'aeroporto di Ivalo (IVL)', detail: 'Voli invernali diretti HEL · LHR · CDG · AMS. 50 km / 40 min verso nord fino al paese di Inari.' },
    { mode: 'bus', label: 'Bus aeroporto IVL per Inari', detail: '15 € sola andata · 40 min · in coincidenza con i voli invernali.' },
    { mode: 'car', label: 'Taxi o transfer pre-prenotato', detail: '60–80 € da IVL fino al paese di Inari. La maggior parte delle strutture premium offre il transfer privato.' },
    { mode: 'car', label: 'Auto da Saariselkä', detail: '50 min lungo la E75. Gita semplice se la base è Saariselkä, molti viaggiatori dividono le notti.' },
  ],
  carRental: {
    href: CARS.fromIvalo,
    sid: 'destination_inari_cars_ivl',
    airport: 'Ritiro all\'aeroporto di Ivalo (IVL)',
    blurb: '40 min fino al paese di Inari · indispensabile per Nellim e per gli chalet in riva al lago',
  },
  dayPlan: [
    { day: '01', title: 'Atterraggio · chalet sul lago', body: 'Volo IVL a metà giornata, auto verso nord fino al paese di Inari o oltre, a Nellim. Sistemazione, sauna, passeggiata sulla riva. Dopo due ore il silenzio di Inari fa il Suo lavoro.' },
    { day: '02', title: 'Cultura sámi · museo Siida', body: 'Mattina al Siida (museo sámi indigeno, la collezione sámi più completa dei Paesi nordici). Pranzo in paese. Pomeriggio sul ghiaccio per la pesca o passeggiata guidata nel bosco.' },
    { day: '03', title: 'Ciaspolata sul lago Inari', body: 'Escursione guidata in motoslitta sul ghiaccio del lago, con vista sull\'isola sacra di Ukonkivi (senza sbarcare sull\'isola). In inverno è buio dalle 14:30, ritorno in chalet per la lunga finestra dell\'aurora.' },
    { day: '04', title: 'Partenza lenta', body: 'Visita a una fattoria di renne, ultima sauna, ritorno verso IVL. Se può, prolunghi di due giorni, Inari premia la lentezza.' },
  ],
  seoTitle: 'Alloggi a Inari: chalet sul lago e ville aurora',
  seoDescription: 'Dove soggiornare a Inari: chalet in tronchi sul lago da 200 €/notte, Aurora Village e Nellim Wilderness Hotel da 300 €. Sponde private, eredità sámi.',
}

const nl: DestinationBody = {
  tagline: 'Sámi-hoofdstad, het op twee na grootste meer van Finland en de meest afgelegen cabins van Fins Lapland.',
  description: `Inari is de hoofdstad van de Finse Sámi-cultuur en in oppervlakte de grootste gemeente van Finland. Het Inari-meer (Inarijärvi) beslaat 1.040 km² met 3.000 eilanden, het op twee na grootste meer van het land en een van de helderste wateren van Europa.

Dit is het diepe noorden. Cabins liggen hier oprecht afgelegen: tien minuten rijden vanaf het dorp brengt u op een oever waar 180° horizon geen ander licht laat zien. Het SIIDA-museum in het dorp Inari verankert het Sámi-erfgoed, en de wildernis eromheen reikt tot de toendrahoogvlaktes bij de grens van Utsjoki.`,
  facts: [
    { label: 'Cabins aan het meer vanaf', value: '€200/nacht' },
    { label: 'Aurora Village vanaf', value: '€300/nacht' },
    { label: 'Oppervlakte meer', value: '1.040 km²' },
    { label: 'Dichtstbijzijnde luchthaven', value: 'IVL 40 min' },
  ],
  highlights: [
    { title: 'Exclusiviteit van het Inari-meer', body: 'Accommodaties aan de oever liggen bewust ver uit elkaar. Eigen steigers, ijsvisgaten in de winter, in de zomer boottochten langs het heilige eiland Ukonkivi (aan land gaan is niet meer toegestaan).' },
    { title: 'SIIDA Sámi-museum en natuurcentrum', body: 'De beste inleiding op de Sámi-cultuur in de Noord-Europese landen, inheemse geschiedenis, taal en ecologie van Sápmi, alles in één gebouw.' },
    { title: 'Aurora boven open water', body: 'De meeroever biedt 180° onbelemmerde hemel, zeldzaam. \'s Winters maken aurora-spiegelingen op het ijs de waarneming buitengewoon dramatisch.' },
    { title: 'Sámi-eettradities', body: 'Lokale keukens serveren poronkäristys (gebakken rendier), koud gerookte arctische riddervis, kruisbessendesserts, ingrediënten uit het land om u heen.' },
    { title: 'Wandelen op toendra-fjell', body: 'Ten noorden van Inari dunt de boomgrens uit tot open Laplands fjell. Zomerwandelingen door Kevo en Utsjoki zijn zo afgelegen als Europa toelaat.' },
    { title: 'Husky\'s en sneeuwscooter in de winter', body: 'Kennels rondom Inari verzorgen sledetochten over het ijs van de Inarijärvi, open vlakte, geen bomen, ongebruikelijk snel en stil.' },
  ],
  whenToGo: `Eind september–begin april is aurora-seizoen; op deze breedte staat de aurora-ovaal regelmatig recht boven u.
Half juni–eind juli is middernachtszon: zes weken lang gaat de zon niet onder.
Half augustus brengt de korte, intense ruska, rood en oranje over de fjells.`,
  howToGet: `Vlieg naar Ivalo (IVL), 40 min transfer. Directe Helsinki–Ivalo dagelijks, seizoensgebonden charters vanuit het VK en Centraal-Europa.
Huur een auto, de mooiste cabins liggen op zijwegen aan de oever en vragen om eigen vervoer.
Voor langere wildernisritten gaat de weg verder naar Utsjoki en de Noorse grens.`,
  stayTypes: [
    'Houten cabins aan de Inarijärvi, 4–6 gasten, privé-oever, houtgestookte sauna, ijsvistuig.',
    'Afgelegen wildernis-villa\'s, off-grid gevoel met volledig comfort, uren ongerept bos in elke richting.',
    'Cabins van Sámi-families, klein, persoonlijk, vaak met rendierherderserfgoed en verhalen ter plekke.',
    'Aurora-glasretreats ten noorden van Inari, speciaal ontworpen om de hemel op hoge breedte te bekijken.',
  ],
  siblings: [
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Poort naar de UKK-wildernis, 50 min zuidwaarts.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'Hoofdstad van Lapland en belangrijkste aankomstpunt.' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'Het grote skidorp met een beloopbaar centrum.' },
  ],
  anchorProperties: [
    { name: 'Wilderness Hotel Nellim', propertyQuery: 'Wilderness Hotel Nellim', sid: 'destination_inari_nellim', note: 'Aan de oostoever van het Inari-meer, dicht bij de Russische grens. Sámi-vis- en saunacultuur.' },
    { name: 'Aurora Village Ivalo', propertyQuery: 'Aurora Village Ivalo', sid: 'destination_inari_aurora_village', note: '20 min van luchthaven Ivalo, cabins met glazen dak, aurora-wekservice.' },
    { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_inari_muotka', note: 'Door architecten ontworpen all-suite lodge tussen Inari en Saariselkä.' },
    { name: 'Alle Inari-accommodaties', href: HOTEL_SEARCH.inari, sid: 'destination_inari_all_search', note: 'Bekijk elke Inari-accommodatie op Hotels.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Vanaf luchthaven Ivalo (IVL)', detail: 'Directe wintervluchten HEL · LHR · CDG · AMS. 50 km / 40 min noordwaarts naar het dorp Inari.' },
    { mode: 'bus', label: 'IVL-luchthavenbus naar Inari', detail: '€15 enkele reis · 40 min · sluit aan op de wintervluchten.' },
    { mode: 'car', label: 'Taxi of vooraf geboekte transfer', detail: '€60–80 van IVL naar het dorp Inari. De meeste premium adressen bieden privétransfer.' },
    { mode: 'car', label: 'Rijden vanuit Saariselkä', detail: '50 min via de E75. Eenvoudige dagtrip als Saariselkä uw uitvalsbasis is, veel reizigers verdelen de nachten.' },
  ],
  carRental: {
    href: CARS.fromIvalo,
    sid: 'destination_inari_cars_ivl',
    airport: 'Ophalen op luchthaven Ivalo (IVL)',
    blurb: '40 min naar het dorp Inari · onmisbaar voor Nellim en cabins aan het meer',
  },
  dayPlan: [
    { day: '01', title: 'Landing · cabin aan het meer', body: 'IVL-vlucht rond het middaguur, noordwaarts naar het dorp Inari of door naar Nellim. Installeren, sauna, wandeling langs het water. Na twee uur is de Inari-stilte tot u doorgedrongen.' },
    { day: '02', title: 'Sámi-cultuur · Siida-museum', body: 'Ochtend in Siida (het inheemse Sámi-museum, de meest complete Sámi-collectie van Noord-Europa). Lunch in het dorp Inari. Middag ijsvissen of een begeleide boswandeling.' },
    { day: '03', title: 'Sneeuwschoenwandeling op het Inari-meer', body: 'Met gids per sneeuwscooter het bevroren meer op, met zicht op het heilige Ukko-eiland (het eiland zelf betreedt u niet). \'s Winters al donker om 14:30, terug in de cabin voor het lange aurora-venster.' },
    { day: '04', title: 'Rustige vertrekdag', body: 'Bezoek rendierboerderij, laatste sauna, terug naar IVL. Verleng zo mogelijk met twee dagen, Inari beloont traagheid.' },
  ],
  seoTitle: 'Inari-accommodatie: cabins aan het meer en aurora-villa\'s',
  seoDescription: 'Waar te verblijven in Inari: houten cabins aan het meer vanaf €200/nacht, Aurora Village en Nellim Wilderness Hotel vanaf €300. Privé-oevers, Sámi-erfgoed.',
}

const ja: DestinationBody = {
  tagline: 'サーミ文化の中心、フィンランドで3番目に大きな湖、そしてフィンランド領ラップランドでもっとも辺鄙なキャビン。',
  description: `イナリはフィンランドのサーミ文化の中心地であり、面積では同国最大の自治体です。イナリ湖(Inarijärvi)は1,040平方km、3,000の島々が点在し、国内3番目に大きく、ヨーロッパでも有数の澄んだ湖です。

ここは深北です。キャビンは文字どおりの僻地に建ち、村から車で10分も走れば、180度の地平線に他の灯りひとつ見えない湖岸に立てます。イナリ村のSIIDA博物館がサーミの伝統を支え、周囲の原野はウツヨキ国境のツンドラ台地へとつながっています。`,
  facts: [
    { label: '湖畔キャビン1泊', value: '200ユーロから' },
    { label: 'オーロラ・ヴィレッジ1泊', value: '300ユーロから' },
    { label: '湖の面積', value: '1,040平方km' },
    { label: '最寄り空港', value: 'IVL 40分' },
  ],
  highlights: [
    { title: 'イナリ湖の独占感', body: '湖畔の宿は意図的に離して配置されています。プライベート桟橋、冬は氷穴フィッシング、夏は聖なるウコンキヴィ島のそばを巡るボートクルーズが楽しめます(島への上陸は現在認められていません)。' },
    { title: 'SIIDAサーミ博物館・自然センター', body: '北欧諸国でもっともすぐれたサーミ文化への入り口。先住民の歴史、言語、サープミの生態系がひとつの建物に集約されています。' },
    { title: '湖面に広がるオーロラ', body: '湖岸からは180度の遮るもののない空が望めます。冬は凍った湖面に映るオーロラがとくに劇的です。' },
    { title: 'サーミの食文化', body: '地元の厨房はポロンカリスティス(炒めトナカイ)、コールドスモークの北極イワナ、クラウドベリーのデザートを供します。周囲の大地から採れた素材です。' },
    { title: 'ツンドラの山岳ハイキング', body: 'イナリの北で樹林は薄まり、開けたラップランドの山岳へと続きます。ケヴォとウツヨキを横断する夏のハイキングは、ヨーロッパで最も遠く感じられます。' },
    { title: '冬のハスキー&スノーモービル', body: 'イナリ周辺の犬舎は凍ったイナリ湖の氷上をそりで巡るルートを運行します。広々として木がなく、速く、静かです。' },
  ],
  whenToGo: `9月下旬〜4月初旬がオーロラ・シーズン。この緯度ではオーロラ帯がしばしば真上に位置します。
6月中旬〜7月下旬は白夜:およそ6週間、太陽は沈みません。
8月中旬には短く濃密なルスカ(紅葉)が訪れ、山岳一面が赤と橙に染まります。`,
  howToGet: `イヴァロ(IVL)へ。送迎は40分。ヘルシンキ〜イヴァロは毎日運航、冬季には英国・中央ヨーロッパからの季節チャーター便があります。
レンタカーを。最高のキャビンは湖畔の側道沿いにあり、自前の移動手段が必要です。
原野へのロングトリップでは、道路はウツヨキとノルウェー国境まで続きます。`,
  stayTypes: [
    'イナリ湖畔のログキャビン。4〜6名、専用の湖岸、薪サウナ、氷釣り装備付き。',
    '遠隔のウィルダネスヴィラ。オフグリッド感と完全な快適性。どの方角を見ても、何時間分もの手つかずの森。',
    'サーミ家族経営のキャビン。小ぶりで個人的、しばしばトナカイ放牧の伝統と現地の語りが付随します。',
    'イナリ村北のオーロラ・グラスリトリート。高緯度での空の観賞専用に設計されています。',
  ],
  siblings: [
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: '南へ50分、UKK原野への玄関口。' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'ラップランドの首府、主要な到着拠点。' },
    { name: 'Levi', href: '/destinations/levi', blurb: '徒歩で回れる中心部のある大きなスキー村。' },
  ],
  anchorProperties: [
    { name: 'Wilderness Hotel Nellim', propertyQuery: 'Wilderness Hotel Nellim', sid: 'destination_inari_nellim', note: 'イナリ湖の東岸、ロシア国境近く。サーミの魚とサウナの文化。' },
    { name: 'Aurora Village Ivalo', propertyQuery: 'Aurora Village Ivalo', sid: 'destination_inari_aurora_village', note: 'イヴァロ空港から20分。ガラス屋根のキャビン、オーロラ・ウェイクアップサービス。' },
    { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_inari_muotka', note: 'イナリとサーリセルカの間にある、建築家設計のオールスイートロッジ。' },
    { name: 'イナリのすべての宿泊施設', href: HOTEL_SEARCH.inari, sid: 'destination_inari_all_search', note: 'Hotels.comでイナリの全宿を閲覧できます。' },
  ],
  transport: [
    { mode: 'plane', label: 'イヴァロ空港(IVL)から', detail: 'HEL · LHR · CDG · AMS からの冬季直行便。北へ50km / 40分でイナリ村。' },
    { mode: 'bus', label: 'IVL〜イナリ空港バス', detail: '片道15ユーロ・40分・冬季便に接続します。' },
    { mode: 'car', label: 'タクシーまたは事前予約送迎', detail: 'IVLからイナリ村まで60〜80ユーロ。多くの上級宿は専用送迎を用意しています。' },
    { mode: 'car', label: 'サーリセルカからの運転', detail: 'E75を50分。サーリセルカ拠点なら気軽な日帰り。多くの旅行者は両所で宿泊を分けます。' },
  ],
  carRental: {
    href: CARS.fromIvalo,
    sid: 'destination_inari_cars_ivl',
    airport: 'イヴァロ空港(IVL)で受け取り',
    blurb: 'イナリ村まで40分・ネリムとイナリ湖畔キャビンには必須',
  },
  dayPlan: [
    { day: '01', title: '到着・湖畔キャビン', body: 'IVL昼便、北へ走りイナリ村またはネリムへ。落ち着き、サウナ、湖岸を散策。2時間目にはイナリの静けさが身体に染みます。' },
    { day: '02', title: 'サーミ文化・Siida博物館', body: '午前はSiida(サーミの先住民博物館。北欧でもっとも充実したサーミ・コレクション)。昼はイナリ村で。午後は氷釣りまたはガイド付きの森歩き。' },
    { day: '03', title: 'イナリ湖のスノーシュー', body: 'ガイド付きスノーモービルで凍ったイナリ湖の氷上へ。聖なるウッコ島を遠くに望みます(島への上陸はできません)。冬は14:30には暗くなります。キャビンに戻り、長いオーロラ・ウィンドウへ。' },
    { day: '04', title: 'ゆっくり出発', body: 'トナカイ農場訪問、最後のサウナ、IVLへ運転。可能なら2日延ばしてください。イナリはゆっくり過ごすほど報われます。' },
  ],
  seoTitle: 'イナリの宿泊:湖畔キャビン&オーロラ・ヴィラ',
  seoDescription: 'フィンランド領ラップランド・イナリでの宿選び:湖畔ログキャビン1泊200ユーロから、Aurora Villageとネリム・ウィルダネス・ホテル300ユーロから。イナリ湖のプライベート湖岸、サーミの伝統、暗い空、直接予約。',
}

const es: DestinationBody = {
  tagline: 'Capital sami, el tercer lago más grande de Finlandia y las cabañas más remotas de la Laponia finlandesa.',
  description: `Inari es la capital de la cultura sami finlandesa y el mayor municipio de Finlandia por superficie. El lago Inari, Inarijärvi, tiene 1.040 km² salpicados con 3.000 islas, es el tercer lago más grande del país y una de las masas de agua más cristalinas de Europa.

Esto es el norte profundo. Las cabañas aquí son genuinamente remotas: diez minutos en coche desde el pueblo le pueden dejar en una orilla sin ninguna otra luz visible en 180° de horizonte. El museo SIIDA en el pueblo de Inari ancla el patrimonio sami, y la naturaleza circundante se adentra en las mesetas de tundra de la frontera de Utsjoki.`,
  facts: [
    { label: 'Cabañas a orillas del lago desde', value: '200 €/noche' },
    { label: 'Aurora Village desde', value: '300 €/noche' },
    { label: 'Tamaño del lago', value: '1.040 km²' },
    { label: 'Aeropuerto más cercano', value: 'IVL 40 min' },
  ],
  highlights: [
    { title: 'Exclusividad del lago Inari', body: 'Los alojamientos en la orilla están separados a propósito. Embarcaderos privados, agujeros para pesca en hielo en invierno, en verano, paseos en barco junto a la isla sagrada de Ukonkivi (ya no se permite desembarcar en ella).' },
    { title: 'Museo sami y centro natural SIIDA', body: 'La mejor introducción a la cultura sami en los países nórdicos, historia indígena, lengua y ecología de Sápmi, todo en un edificio.' },
    { title: 'Aurora sobre aguas abiertas', body: 'La orilla del lago ofrece un raro cielo despejado a 180°. En invierno, los reflejos de la aurora sobre la superficie helada hacen la observación inusualmente espectacular.' },
    { title: 'Tradiciones culinarias sami', body: 'Las cocinas locales sirven poronkäristys (reno salteado), trucha alpina ahumada en frío, postres de mora ártica, ingredientes de la tierra a su alrededor.' },
    { title: 'Senderismo en la tundra', body: 'Al norte de Inari, el bosque se va abriendo a la tundra abierta de Laponia. Las caminatas estivales por Kevo y Utsjoki son lo más remoto que ofrece Europa.' },
    { title: 'Acceso a huskys y motonieves en invierno', body: 'Las granjas en torno a Inari operan rutas en trineo sobre el hielo del Inarijärvi, abierto, sin árboles, sorprendentemente rápido y silencioso.' },
  ],
  whenToGo: `Finales de septiembre – principios de abril es temporada de aurora; en esta latitud, el óvalo auroral se sitúa con frecuencia justo sobre la vertical.
Mediados de junio – finales de julio es sol de medianoche: el sol no se pone durante unas seis semanas.
A mediados de agosto llega la ruska (color otoñal) corta e intensa, rojos y naranjas por la tundra.`,
  howToGet: `Vuele a Ivalo (IVL), traslado de 40 min. Diario directo Helsinki – Ivalo, rutas chárter estacionales desde Reino Unido y Europa central.
Alquile coche, las mejores cabañas están en caminos secundarios junto al lago y requieren transporte propio.
Para viajes prolongados al territorio salvaje, la carretera continúa a Utsjoki y a la frontera con Noruega.`,
  stayTypes: [
    'Cabañas de troncos a orillas del Inarijärvi, 4–6 huéspedes, costa privada, sauna de leña, equipo para pescar en el hielo.',
    'Villas remotas en la naturaleza, sensación off-grid con confort total, horas de bosque virgen en cualquier dirección.',
    'Cabañas regentadas por familias sami, pequeñas, personales, a menudo con tradición de pastoreo de renos y narración in situ.',
    'Refugios aurora de cristal al norte del pueblo de Inari, diseñados específicamente para observar el cielo en latitudes altas.',
  ],
  siblings: [
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Puerta a la naturaleza UKK, 50 min al sur.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'La capital de Laponia y principal punto de llegada.' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'El gran pueblo de esquí con centro peatonal.' },
  ],
  anchorProperties: [
    { name: 'Wilderness Hotel Nellim', propertyQuery: 'Wilderness Hotel Nellim', sid: 'destination_inari_nellim', note: 'En la orilla oriental del lago Inari, cerca de la frontera rusa. Cultura sami de pesca y sauna.' },
    { name: 'Aurora Village Ivalo', propertyQuery: 'Aurora Village Ivalo', sid: 'destination_inari_aurora_village', note: 'A 20 min del aeropuerto de Ivalo, cabañas con techo de cristal, servicio de aviso por aurora.' },
    { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_inari_muotka', note: 'Lodge de diseño de arquitectos, todo suites, entre Inari y Saariselkä.' },
    { name: 'Todos los alojamientos de Inari', href: HOTEL_SEARCH.inari, sid: 'destination_inari_all_search', note: 'Consulte todas las propiedades de Inari en Hotels.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Desde el aeropuerto de Ivalo (IVL)', detail: 'Vuelos directos invernales desde HEL · LHR · CDG · AMS. 50 km / 40 min al norte hasta el pueblo de Inari.' },
    { mode: 'bus', label: 'Autobús del aeropuerto IVL a Inari', detail: '15 € ida · 40 min · enlaza con vuelos de invierno.' },
    { mode: 'car', label: 'Taxi o traslado pre-reservado', detail: '60–80 € de IVL al pueblo de Inari. La mayoría de las propiedades premium ofrecen traslado privado.' },
    { mode: 'car', label: 'Conducir desde Saariselkä', detail: '50 min por la E75. Excursión fácil si su base es Saariselkä, muchos viajeros reparten las noches.' },
  ],
  carRental: {
    href: CARS.fromIvalo,
    sid: 'destination_inari_cars_ivl',
    airport: 'Recogida en el aeropuerto de Ivalo (IVL)',
    blurb: '40 min al pueblo de Inari · imprescindible para las cabañas de Nellim y la orilla del lago',
  },
  dayPlan: [
    { day: '01', title: 'Aterrizaje · cabaña junto al lago', body: 'Vuelo al mediodía a IVL, conducir al norte hasta el pueblo de Inari o más lejos hasta Nellim. Acomodarse, sauna, paseo por la orilla. El silencio de Inari se asienta a la segunda hora.' },
    { day: '02', title: 'Cultura sami · museo Siida', body: 'Mañana en Siida (el museo sami indígena, la colección sami más completa de los países nórdicos). Almuerzo en el pueblo. Por la tarde, pesca en hielo o paseo guiado por el bosque.' },
    { day: '03', title: 'Raquetas en el lago Inari', body: 'Salida guiada en motonieve por el lago helado, con vistas a la isla sagrada de Ukko (no se desembarca en ella). En invierno oscurece a las 14:30, vuelta a la cabaña para la larga ventana de aurora.' },
    { day: '04', title: 'Salida pausada', body: 'Visita a una granja de renos, última sauna, vuelta a IVL. Amplíe 2 días si puede, Inari recompensa la calma.' },
  ],
  seoTitle: 'Alojamiento en Inari: cabañas junto al lago y villas aurora',
  seoDescription: 'Dónde alojarse en Inari: cabañas junto al lago desde 200 €/noche, Aurora Village y Nellim Wilderness Hotel desde 300 €. Orillas privadas, patrimonio sami.',
}

const ptBR: DestinationBody = {
  tagline: 'Capital sámi, o terceiro maior lago da Finlândia e as cabanas mais remotas da Lapônia finlandesa.',
  description: `Inari é a capital da cultura sámi finlandesa e o maior município da Finlândia em área. O Lago Inari, Inarijärvi, tem 1.040 km² salpicados por 3.000 ilhas, é o terceiro maior lago do país e um dos corpos d'água mais cristalinos da Europa.

Este é o norte profundo. As cabanas aqui são genuinamente remotas: dez minutos de carro a partir da vila podem deixar você em uma margem sem nenhuma outra luz visível em 180° de horizonte. O museu SIIDA na vila de Inari ancora o patrimônio sámi, e a natureza ao redor se estende para os platôs de tundra da fronteira de Utsjoki.`,
  facts: [
    { label: 'Cabanas à beira do lago a partir de', value: '€200/noite' },
    { label: 'Aurora Village a partir de', value: '€300/noite' },
    { label: 'Tamanho do lago', value: '1.040 km²' },
    { label: 'Aeroporto mais próximo', value: 'IVL 40 min' },
  ],
  highlights: [
    { title: 'Exclusividade do Lago Inari', body: 'As propriedades na margem do lago ficam propositalmente afastadas. Cais privativos, buracos para pesca no gelo no inverno, no verão, passeios de barco contornando a ilha sagrada Ukonkivi (desembarques não são mais permitidos).' },
    { title: 'Museu sámi e centro de natureza SIIDA', body: 'A melhor introdução à cultura sámi nos países nórdicos, história indígena, língua e ecologia de Sápmi, tudo em um único edifício.' },
    { title: 'Aurora sobre águas abertas', body: 'A margem do lago oferece um raro céu desimpedido em 180°. No inverno, os reflexos da aurora na superfície congelada tornam a observação especialmente dramática.' },
    { title: 'Tradições alimentares sámi', body: 'As cozinhas locais servem poronkäristys (rena salteada), salvelino defumado a frio, sobremesas de amora-ártica, ingredientes da terra ao seu redor.' },
    { title: 'Caminhadas na tundra', body: 'Ao norte de Inari, a linha das árvores se afina até a tundra aberta da Lapônia. As caminhadas de verão por Kevo e Utsjoki são o que a Europa oferece de mais remoto.' },
    { title: 'Acesso a huskies e snowmobile no inverno', body: 'Canis em torno de Inari operam rotas de trenó sobre o gelo do Inarijärvi, aberto, sem árvores, surpreendentemente rápido e silencioso.' },
  ],
  whenToGo: `Fim de setembro a início de abril é temporada de aurora; nesta latitude, o oval auroral fica frequentemente sobre o céu.
Meados de junho a fim de julho é sol da meia-noite: o sol não se põe por cerca de seis semanas.
Meados de agosto traz a ruska (cor de outono) curta e intensa, vermelhos e laranjas pela tundra.`,
  howToGet: `Voe até Ivalo (IVL), traslado de 40 min. Voos diários diretos Helsinque – Ivalo, rotas charter sazonais do Reino Unido e da Europa central.
Alugue um carro, as melhores cabanas ficam em estradas secundárias à beira do lago e exigem transporte próprio.
Para viagens prolongadas na natureza, a estrada continua até Utsjoki e a fronteira com a Noruega.`,
  stayTypes: [
    'Cabanas de tronco à beira do Inarijärvi, 4–6 hóspedes, costa privativa, sauna a lenha, equipamento para pesca no gelo.',
    'Vilas remotas no mato, sensação off-grid com conforto total, horas de floresta intocada em qualquer direção.',
    'Cabanas administradas por famílias sámi, pequenas, pessoais, frequentemente com herança de pastoreio de renas e narração no local.',
    'Refúgios aurora de vidro ao norte da vila de Inari, projetados especificamente para observação do céu em alta latitude.',
  ],
  siblings: [
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Portal para a natureza UKK, 50 min ao sul.' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: 'A capital da Lapônia e principal ponto de chegada.' },
    { name: 'Levi', href: '/destinations/levi', blurb: 'A grande vila de esqui com centro a pé.' },
  ],
  anchorProperties: [
    { name: 'Wilderness Hotel Nellim', propertyQuery: 'Wilderness Hotel Nellim', sid: 'destination_inari_nellim', note: 'Na margem leste do Lago Inari, perto da fronteira com a Rússia. Cultura sámi de peixe e sauna.' },
    { name: 'Aurora Village Ivalo', propertyQuery: 'Aurora Village Ivalo', sid: 'destination_inari_aurora_village', note: 'A 20 min do aeroporto de Ivalo, cabanas com teto de vidro, serviço de despertar por aurora.' },
    { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_inari_muotka', note: 'Lodge projetado por arquitetos, todo em suítes, entre Inari e Saariselkä.' },
    { name: 'Todas as hospedagens de Inari', href: HOTEL_SEARCH.inari, sid: 'destination_inari_all_search', note: 'Veja todas as propriedades de Inari no Hotels.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Do Aeroporto de Ivalo (IVL)', detail: 'Voos diretos de inverno de HEL · LHR · CDG · AMS. 50 km / 40 min ao norte até a vila de Inari.' },
    { mode: 'bus', label: 'Ônibus do aeroporto IVL até Inari', detail: '€15 só ida · 40 min · liga aos voos de inverno.' },
    { mode: 'car', label: 'Táxi ou traslado pré-agendado', detail: '€60–80 de IVL até a vila de Inari. A maioria das propriedades premium oferece traslado privativo.' },
    { mode: 'car', label: 'Dirigir a partir de Saariselkä', detail: '50 min pela E75. Bate-volta fácil se sua base for Saariselkä, muitos viajantes dividem as noites.' },
  ],
  carRental: {
    href: CARS.fromIvalo,
    sid: 'destination_inari_cars_ivl',
    airport: 'Retirada no Aeroporto de Ivalo (IVL)',
    blurb: '40 min até a vila de Inari · essencial para Nellim e cabanas à beira do Lago Inari',
  },
  dayPlan: [
    { day: '01', title: 'Pouso · cabana à beira do lago', body: 'Voo do meio-dia para IVL, dirigir ao norte até a vila de Inari ou mais adiante até Nellim. Acomodar-se, sauna, caminhada à beira do lago. O silêncio de Inari se instala já na segunda hora.' },
    { day: '02', title: 'Cultura sámi · museu Siida', body: 'Manhã no Siida (o museu indígena sámi, a coleção sámi mais completa dos países nórdicos). Almoço na vila. À tarde, pesca no gelo ou caminhada guiada pela floresta.' },
    { day: '03', title: 'Raquete no Lago Inari', body: 'Passeio guiado de snowmobile pelo lago congelado, com vista para a ilha sagrada Ukko (sem desembarcar nela). No inverno escurece às 14:30, de volta à cabana para a longa janela de aurora.' },
    { day: '04', title: 'Partida lenta', body: 'Visita a uma fazenda de renas, última sauna, retorno a IVL. Estenda 2 dias se possível, Inari recompensa quem fica devagar.' },
  ],
  seoTitle: 'Hospedagem em Inari: cabanas à beira do lago e vilas aurora',
  seoDescription: 'Onde ficar em Inari: cabanas à beira do lago a partir de €200/noite, Aurora Village e Nellim Wilderness Hotel a partir de €300. Herança sámi.',
}

const zhCN: DestinationBody = {
  tagline: '萨米文化首府、芬兰第三大湖,以及芬兰拉普兰最偏远的小屋。',
  description: `伊纳里是芬兰萨米文化的首府,也是芬兰面积最大的市镇。伊纳里湖(Inarijärvi)面积1,040平方公里,点缀着3,000座小岛,是芬兰第三大湖,也是欧洲最清澈的水体之一。

这里是深北。这里的小屋是真正意义上的偏远:从村庄驱车十分钟,就可置身于180°地平线上看不到其他灯光的湖岸。伊纳里村中的SIIDA博物馆是萨米文化的核心,周围的荒野延伸至乌茨约基边境的苔原高原。`,
  facts: [
    { label: '湖畔小屋每晚', value: '200欧元起' },
    { label: '极光之村每晚', value: '300欧元起' },
    { label: '湖面面积', value: '1,040平方公里' },
    { label: '最近机场', value: 'IVL 40分钟' },
  ],
  highlights: [
    { title: '伊纳里湖的独享感', body: '湖岸住宿刻意彼此疏远。私人码头、冬季冰钓孔、夏季可乘船巡游,途经神圣的Ukonkivi岛(现已禁止登岛)。' },
    { title: 'SIIDA萨米博物馆与自然中心', body: '在北欧最好的萨米文化入门。原住民历史、语言、Sápmi的生态,集合于一栋建筑。' },
    { title: '开阔水面上的极光', body: '湖岸提供罕见的180°无遮挡天空。冬季,极光在冰面上的倒影使观赏格外震撼。' },
    { title: '萨米饮食传统', body: '当地厨房供应poronkäristys(炒驯鹿)、冷熏北极红点鲑、云莓甜点。食材都来自周边土地。' },
    { title: '苔原山地徒步', body: '伊纳里以北树线渐稀,过渡到开阔的拉普兰苔原。穿越Kevo与Utsjoki的夏季徒步,是欧洲最偏远的体验之一。' },
    { title: '冬季哈士奇与雪地摩托', body: '伊纳里周边犬舍在冻结的Inarijärvi湖面上开辟雪橇路线。开阔、无树,出奇地快且寂静。' },
  ],
  whenToGo: `9月下旬至4月初是极光季;此纬度上,极光椭圆带常常正悬头顶。
6月中旬至7月下旬是午夜阳光季:大约六周时间太阳不落。
8月中旬迎来短暂而浓烈的ruska(秋色)。苔原一片红橙。`,
  howToGet: `飞往伊瓦洛(IVL),接送40分钟。每日有赫尔辛基。伊瓦洛直飞,冬季还有来自英国与中欧的季节包机。
租车。最棒的小屋位于湖畔小路,需要私人车辆。
若进行长途荒野旅行,公路继续通往Utsjoki及挪威边境。`,
  stayTypes: [
    '伊纳里湖畔原木小屋。可住4–6人,私人湖岸、柴烧桑拿、冰钓装备。',
    '偏远荒野别墅。脱网般的体验与完整舒适,任何方向都是几小时的未受干扰森林。',
    '萨米家庭经营的小屋。小巧而具个性,常伴有驯鹿放牧传统与现场讲述。',
    '伊纳里村以北的极光玻璃静修屋。专为高纬度观星而设计。',
  ],
  siblings: [
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: '通往UKK荒野的入口,南行50分钟。' },
    { name: 'Rovaniemi', href: '/destinations/rovaniemi', blurb: '拉普兰首府,主要的抵达地点。' },
    { name: 'Levi', href: '/destinations/levi', blurb: '大型滑雪村庄,可步行的中心区。' },
  ],
  anchorProperties: [
    { name: 'Wilderness Hotel Nellim', propertyQuery: 'Wilderness Hotel Nellim', sid: 'destination_inari_nellim', note: '位于伊纳里湖东岸、邻近俄罗斯边境。萨米的渔与桑拿文化。' },
    { name: 'Aurora Village Ivalo', propertyQuery: 'Aurora Village Ivalo', sid: 'destination_inari_aurora_village', note: '距伊瓦洛机场20分钟。玻璃屋顶小屋,提供极光呼叫服务。' },
    { name: 'Wilderness Hotel Muotka', propertyQuery: 'Wilderness Hotel Muotka', sid: 'destination_inari_muotka', note: '位于伊纳里与萨利瑟尔卡之间,由建筑师设计的全套房小屋。' },
    { name: '伊纳里全部住宿', href: HOTEL_SEARCH.inari, sid: 'destination_inari_all_search', note: '在Hotels.com浏览伊纳里所有房源。' },
  ],
  transport: [
    { mode: 'plane', label: '从伊瓦洛机场(IVL)出发', detail: '冬季直飞自HEL · LHR · CDG · AMS。北行50公里 / 40分钟抵达伊纳里村。' },
    { mode: 'bus', label: 'IVL机场巴士至伊纳里', detail: '单程15欧元 · 40分钟 · 衔接冬季航班。' },
    { mode: 'car', label: '出租车或预订接送', detail: '从IVL至伊纳里村60–80欧元。大多数高端房源提供私人接送。' },
    { mode: 'car', label: '从萨利瑟尔卡自驾', detail: '沿E75行驶50分钟。如以萨利瑟尔卡为基地,日游轻松。许多旅客分宿两地。' },
  ],
  carRental: {
    href: CARS.fromIvalo,
    sid: 'destination_inari_cars_ivl',
    airport: '伊瓦洛机场(IVL)取车',
    blurb: '至伊纳里村40分钟 · Nellim与伊纳里湖畔小屋必备',
  },
  dayPlan: [
    { day: '01', title: '抵达 · 湖畔小屋', body: '中午抵达IVL,向北驱车至伊纳里村或更远的Nellim。安顿、桑拿、湖边散步。第二个小时,伊纳里的寂静就会沉下来。' },
    { day: '02', title: '萨米文化 · Siida博物馆', body: '上午在Siida(萨米原住民博物馆,北欧最完整的萨米馆藏)。在伊纳里村午餐。下午冰钓或随导游森林漫步。' },
    { day: '03', title: '伊纳里湖雪鞋行', body: '由导游带领,乘雪地摩托驰骋于冻结的湖面,远眺神圣的Ukko岛(不可登岛)。冬季14:30天即暗。回到小屋,迎接漫长的极光窗口。' },
    { day: '04', title: '缓慢启程', body: '驯鹿农场参观、最后一次桑拿、驱车返回IVL。条件允许就多加两天。伊纳里慢游回报最丰。' },
  ],
  seoTitle: '伊纳里住宿:湖畔小屋与极光别墅',
  seoDescription: '芬兰拉普兰伊纳里住宿指南:湖畔原木小屋每晚200欧元起、Aurora Village与Nellim Wilderness Hotel 300欧元起。伊纳里湖私人湖岸、萨米传统、暗空、直接预订。',
}

export default function Inari() {
  return (
    <DestinationPage
      slug="inari"
      name="Inari"
      heroImage="/images/inari-hero.webp"
      ogImage="https://laplandstays.com/og-inari.jpg"
      seoKeywords={['inari accommodation', 'inari cabin', 'lake inari villa', 'aurora village ivalo', 'nellim wilderness hotel', 'where to stay in inari', 'sami cabin lapland', 'inarijärvi accommodation']}
      body={{ en, fi, de, ja, es, 'pt-BR': ptBR, 'zh-CN': zhCN, ko, fr, it, nl }}
      highlightLinks={{
        1: { base: 'https://laplandvisit.com' },
        2: { base: 'https://laplandvibes.com', path: '/northern-lights/' },
      }}
    />
  )
}
