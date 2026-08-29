import DestinationPage, { type DestinationBody } from '../components/DestinationPage'
import { HOTEL_SEARCH_FOR, CARS_FOR } from '../lib/affiliate'

const en: DestinationBody = {
  tagline: "Finland's biggest ski resort with restaurants, safaris and aurora cabins a short drive from the lifts.",
  description: `Levi sits in Kittilä municipality, about 170 km north of the Arctic Circle. It grew from a single lift in the 1960s into Finland's largest ski resort, with 44 slopes and 26 lifts served by a compact, walkable village centre.

It is the easiest entry point into luxury Lapland travel: Kittilä airport is 15 minutes away, the FIS World Cup slalom opens each November on Levi Black, and premium cabins are scattered through the surrounding fell landscape, close enough to the village for dinner, far enough for silence and dark-sky aurora viewing.`,
  facts: [
    { label: 'Hotels from', value: '€100/night' },
    { label: 'Glass igloos from', value: '€350/night' },
    { label: 'Nearest airport', value: 'KTT 15 min' },
    { label: 'Slopes', value: '44' },
  ],
  highlights: [
    { title: 'Ski-in cabins on Levitunturi', body: 'Chalets on the slopes of Levifell give direct access to the gondola and the long blue and red runs that ring the mountain.' },
    { title: 'A walkable village with serious kitchens', body: 'The centre has Michelin-recommended restaurants, reindeer tasting menus, and a tight cluster of cafés, rare for a fell destination.' },
    { title: 'Full safari menu', body: 'Huskies, snowmobiles, reindeer sleds, aurora photography tours and ice-hole swimming all depart from pickup points inside the village.' },
    { title: 'Aurora dark-sky zones', body: 'Drive 15 minutes out of the village and light pollution drops to near zero. Cabins on the north side of the fell have the clearest horizon.' },
    { title: 'Summer fell biking and midnight sun', body: 'In June and July the sun does not set. Levi reopens gondolas and trails for downhill and cross-country mountain biking.' },
    { title: 'World Cup slalom kickoff', body: 'Every November the FIS Alpine Ski World Cup opens on Levi Black, the earliest, most reliable snow on the tour.' },
  ],
  whenToGo: `November – March is peak: reliable snow, aurora nights, and full safari season.
Late August – October brings ruska (autumn colour) and the first aurora windows with no crowds.
June – July is the midnight sun window: 24-hour daylight and a different kind of cabin holiday.`,
  howToGet: `Fly into Kittilä (KTT). Direct winter routes from London, Paris, Amsterdam, Frankfurt, Zurich and Helsinki.
Transfer to Levi village is 15 km. Most premium cabins include private transfer.
From Helsinki, overnight trains to Kolari + 1-hour transfer is a scenic alternative.`,
  stayTypes: [
    'Aurora glass villas, glass-roofed bedrooms for horizon-to-horizon sky viewing, usually 2–4 guests.',
    'Ski-in chalets on the fell, 6–10 guests, private sauna, often with outdoor hot tub and gear drying room.',
    'Lakeside log cabins on Immeljärvi, quieter, forest setting, a few minutes drive from the village.',
    'Designer apartments in the village core, walkable to restaurants, good for first-time Lapland visitors.',
  ],
  siblings: [
    { name: 'Ylläs', href: '/destinations/yllas', blurb: "Quieter twin fells with Finland's longest ski runs." },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Gateway to UKK national park wilderness.' },
    { name: 'Inari', href: '/destinations/inari', blurb: 'Remote lake, Sámi heritage and deep-north skies.' },
  ],
  anchorProperties: [
    { name: 'Levin Iglut', propertyQuery: 'Levin Iglut', sid: 'destination_levi_levin_iglut', note: 'Glass igloos on the fell, peak weeks book 10–12 mo ahead.' },
    { name: 'Hotel Levi Panorama', propertyQuery: 'Hotel Levi Panorama', sid: 'destination_levi_panorama', note: 'On the slope of Levi fell: the gondola stops at the door and skiing starts in the yard.' },
    { name: 'Lapland Hotels Sirkantähti', propertyQuery: 'Lapland Hotels Sirkantähti', sid: 'destination_levi_sirkantahti', note: 'Rooms and apartments in Levi, every one with its own sauna, about 500 m from the slopes.' },
    { name: 'All Levi accommodation', href: HOTEL_SEARCH_FOR('en').levi, sid: 'destination_levi_all_search', note: 'Compare every Levi hotel and chalet on Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'From Kittilä Airport (KTT)', detail: 'Direct winter flights LHR · CDG · AMS · FRA · ZRH · HEL. 15 km / 15 min to Levi village.' },
    { mode: 'bus', label: 'KTT airport bus', detail: '€8 one-way · 25 min · meets every flight.' },
    { mode: 'car', label: 'Taxi or pre-booked transfer', detail: '€25–35 to village. Most premium cabins include private transfer.' },
    { mode: 'train', label: 'Overnight train to Kolari', detail: 'VR sleeper from Helsinki ~€90, then 1 h transfer to Levi. Scenic alternative in winter.' },
  ],
  carRental: {
    href: CARS_FOR('en').fromKittila,
    sid: 'destination_levi_cars_ktt',
    airport: 'Pickup at Kittilä Airport (KTT)',
    blurb: '15 min from Levi village · winter studded tyres standard',
  },
  dayPlan: [
    { day: '01', title: 'Arrive · settle · short ski', body: 'Land at KTT mid-afternoon, transfer to village, pick up rentals at Zero Point. One easy run before sunset to test gear and legs.' },
    { day: '02', title: 'Full ski day · evening sauna', body: 'Lifts open at 09:30. Lunch at Tuikku top of gondola. Down by 15:00, sauna at the cabin. Aurora alarm enabled before bed.' },
    { day: '03', title: 'Husky safari + village dinner', body: 'Morning husky-farm safari (book 2 weeks ahead). Walk the village afternoon, Kammi-Bar for reindeer, Saamen Kammi for traditional. On a clear night, watch for auroras from the Levi summit.' },
    { day: '04', title: 'Aurora cabin night · gentle day', body: 'Drive 15 min north to a glass igloo for the last night. Slow morning, sauna, watch the sky. Earliest possible flight home next morning.' },
  ],
  seoTitle: 'Levi Accommodation: Hotels, Cabins & Igloos | LaplandStays',
  seoDescription: 'Where to stay in Levi, Lapland: Lapland Hotels from €100/night, Levin Iglut glass igloos from €350, ski-in chalets from €200. 15 min from Kittilä airport.',
}

const fi: DestinationBody = {
  tagline: 'Suomen suurin hiihtokeskus ravintoloineen, safareineen ja revontulimökkeineen lyhyen ajomatkan päässä rinteistä.',
  description: `Levi sijaitsee Kittilän kunnassa, noin 170 km napapiirin pohjoispuolella. Yhdestä hissistä 1960-luvulla kasvoi Suomen suurin hiihtokeskus: 44 rinnettä ja 26 hissiä, joita palvelee tiivis, kävelyetäisyydellä oleva kyläkeskus.

Se on helpoin sisäänkäynti Lapin luksusmatkailuun: Kittilän lentokenttä on 15 minuutin päässä, FIS-maailmancupin pujottelu avaa kauden joka marraskuu Levi Blackilla, ja premium-mökit ovat hajallaan ympäröivässä tunturimaisemassa, riittävän lähellä kylää illalliselle, riittävän kaukana hiljaisuuteen ja revontulien katseluun pimeällä taivaalla.`,
  facts: [
    { label: 'Hotellit alkaen', value: '100 €/yö' },
    { label: 'Lasi-iglut alkaen', value: '350 €/yö' },
    { label: 'Lähin lentokenttä', value: 'KTT 15 min' },
    { label: 'Rinteitä', value: '44' },
  ],
  highlights: [
    { title: 'Rinneasunnot Levitunturilla', body: 'Levitunturin rinteillä sijaitsevat asunnot tarjoavat suoran pääsyn gondoliin ja pitkille sinisille ja punaisille rinteille, jotka kiertävät tunturia.' },
    { title: 'Kävelykylä vakavasti otettavilla keittiöillä', body: 'Keskustassa on Michelin-suositeltuja ravintoloita, poronkäristys-tasting-menuja ja tiivis kahvilakeskittymä, harvinaista tunturikohteessa.' },
    { title: 'Täysi safariohjelma', body: 'Huskyt, moottorikelkat, porovaljakot, revontulivalokuvauskierrokset ja avantouinti lähtevät kaikki noutopisteistä kylän sisältä.' },
    { title: 'Revontulien pimeät vyöhykkeet', body: 'Aja 15 minuuttia ulos kylästä ja valosaaste tipahtaa lähelle nollaa. Mökit tunturin pohjoispuolella tarjoavat selkeimmän horisontin.' },
    { title: 'Kesätunturipyöräily ja keskiyön aurinko', body: 'Kesä- ja heinäkuussa aurinko ei laske. Levi avaa gondolit ja polut alamäki- ja maastopyöräilyyn.' },
    { title: 'Maailmancupin pujottelun avaus', body: 'Joka marraskuu FIS Alpine Ski World Cup avaa Levi Blackillä, aikaisin ja luotettavin lumi kiertueella.' },
  ],
  whenToGo: `Marraskuu–maaliskuu on huippukautta: luotettava lumi, revontuliyöt ja täysi safarikausi.
Elokuun loppu–lokakuu tuo ruskan ja ensimmäiset revontuliyöt ilman ruuhkaa.
Kesä–heinäkuu on keskiyön auringon aikaa: 24 tunnin valoa ja erilaista mökkilomaa.`,
  howToGet: `Lennä Kittilään (KTT). Suorat talvilennot Lontoosta, Pariisista, Amsterdamista, Frankfurtista, Zürichistä ja Helsingistä.
Kuljetus Levin kylään on 15 km. Useimmat premium-mökit sisältävät yksityiskuljetuksen.
Helsingistä yöjuna Kolariin + tunnin kuljetus on maisemallinen vaihtoehto.`,
  stayTypes: [
    'Aurora-lasivillat, lasikattoiset makuuhuoneet horisontista horisonttiin -taivaan katseluun, yleensä 2–4 vieraalle.',
    'Rinneasunnot tunturilla, 6–10 vierasta, oma sauna, usein ulkopalju ja varustekuivaushuone.',
    'Rantamökit Immeljärven varrella, hiljaisempi, metsäinen sijainti, muutaman minuutin ajomatka kylästä.',
    'Design-huoneistot kylän ytimessä, kävelyetäisyydellä ravintoloista, hyvä ensikertalaisille Lapissa.',
  ],
  siblings: [
    { name: 'Ylläs', href: '/destinations/yllas', blurb: 'Hiljaisemmat sisar-tunturit Suomen pisimmillä rinteillä.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Portti UKK-kansallispuiston erämaahan.' },
    { name: 'Inari', href: '/destinations/inari', blurb: 'Syrjäinen järvi, saamelaisperintö ja pohjoisen taivas.' },
  ],
  anchorProperties: [
    { name: 'Levin Iglut', propertyQuery: 'Levin Iglut', sid: 'destination_levi_levin_iglut', note: 'Lasi-iglut tunturilla, huippuviikot varataan 10–12 kk etukäteen.' },
    { name: 'Hotel Levi Panorama', propertyQuery: 'Hotel Levi Panorama', sid: 'destination_levi_panorama', note: 'Levitunturin rinteessä: gondoli pysähtyy ovelle ja hiihto alkaa pihasta.' },
    { name: 'Lapland Hotels Sirkantähti', propertyQuery: 'Lapland Hotels Sirkantähti', sid: 'destination_levi_sirkantahti', note: 'Levin huoneita ja eri kokoisia huoneistoja, joissa jokaisessa oma sauna, noin 500 m rinteiltä.' },
    { name: 'Kaikki Levin majoitukset', href: HOTEL_SEARCH_FOR('fi').levi, sid: 'destination_levi_all_search', note: 'Vertaa kaikkia Levin hotelleja ja chalet-asuntoja Sembossa.' },
  ],
  transport: [
    { mode: 'plane', label: 'Kittilän lentokentältä (KTT)', detail: 'Suorat talvilennot LHR · CDG · AMS · FRA · ZRH · HEL. 15 km / 15 min Levin kylälle.' },
    { mode: 'bus', label: 'KTT-lentokenttäbussi', detail: '8 € yhteen suuntaan · 25 min · jokaisen lennon yhteydessä.' },
    { mode: 'car', label: 'Taksi tai esivarattu kuljetus', detail: '25–35 € kylälle. Useimmat premium-mökit sisältävät yksityiskuljetuksen.' },
    { mode: 'train', label: 'Yöjuna Kolariin', detail: 'VR:n makuuvaunu Helsingistä noin 90 €, sitten 1 h kuljetus Leville. Maisemallinen vaihtoehto talvella.' },
  ],
  carRental: {
    href: CARS_FOR('fi').fromKittila,
    sid: 'destination_levi_cars_ktt',
    airport: 'Nouto Kittilän lentokentältä (KTT)',
    blurb: '15 min Levin kylälle · nastarenkaat vakiona talvella',
  },
  dayPlan: [
    { day: '01', title: 'Saavu · asetu · lyhyt lasku', body: 'Lasku KTT:lle iltapäivällä, kuljetus kylälle, vuokraa varusteet Zero Pointista. Yksi helppo rinne ennen auringonlaskua varusteiden ja jalkojen testaamiseen.' },
    { day: '02', title: 'Täysi lasketteluvuoro · iltasauna', body: 'Hissit aukeavat klo 09:30. Lounas Tuikulla gondolin huipulla. Alas klo 15:00, sauna mökillä. Revontulihälytys päälle ennen nukkumaanmenoa.' },
    { day: '03', title: 'Husky-safari + kyläillallinen', body: 'Aamulla husky-tilan safari (varaa 2 viikkoa etukäteen). Kävele kylällä iltapäivällä, Kammi-Bar poroon, Saamen Kammi perinteiseen. Selkeänä iltana revontulia voi kytätä Levin huipulta.' },
    { day: '04', title: 'Revontuli-mökki-ilta · rauhallinen päivä', body: 'Aja 15 min pohjoiseen lasi-igluun viimeiseksi yöksi. Rauhallinen aamu, sauna, katsele taivasta. Aikaisin lento kotiin seuraavana aamuna.' },
  ],
  seoTitle: 'Levin majoitus: hotellit, mökit ja iglut | LaplandStays',
  seoDescription: 'Missä yöpyä Levillä: Lapland Hotels alkaen 100 €/yö, Levin Iglutin lasi-iglut alkaen 350 €, rinneasunnot alkaen 200 €. 15 min Kittilän lentokentältä.',
}

const de: DestinationBody = {
  tagline: 'Finnlands größtes Skigebiet mit Restaurants, Safaris und Polarlicht-Hütten wenige Autominuten von den Liften entfernt.',
  description: `Levi liegt in der Gemeinde Kittilä, rund 170 km nördlich des Polarkreises. Aus einem einzigen Lift in den 1960er Jahren ist Finnlands größtes Skigebiet gewachsen: 44 Pisten und 26 Lifte, bedient von einem kompakten, fußläufigen Dorfkern.

Es ist der einfachste Einstieg in den Luxus-Lappland-Tourismus: Der Flughafen Kittilä ist 15 Minuten entfernt, der FIS-Slalom-Weltcup eröffnet jedes Jahr im November auf der Levi Black, und Premium-Hütten verteilen sich über die umliegende Fjäll-Landschaft, nah genug für ein Abendessen im Dorf, weit genug für Stille und Polarlicht-Beobachtung bei dunklem Himmel.`,
  facts: [
    { label: 'Hotels ab', value: '100 €/Nacht' },
    { label: 'Glasiglus ab', value: '350 €/Nacht' },
    { label: 'Nächster Flughafen', value: 'KTT 15 min' },
    { label: 'Pisten', value: '44' },
  ],
  highlights: [
    { title: 'Ski-in-Chalets am Levitunturi', body: 'Chalets an den Hängen des Levifjälls bieten direkten Zugang zur Gondel und zu den langen blauen und roten Abfahrten rund um den Berg.' },
    { title: 'Ein fußläufiges Dorf mit ernsthaften Küchen', body: 'Das Zentrum hat Michelin-empfohlene Restaurants, Rentier-Tasting-Menüs und ein dichtes Café-Cluster, selten für einen Fjäll-Ort.' },
    { title: 'Volles Safari-Menü', body: 'Huskys, Schneemobile, Rentier-Schlitten, Polarlicht-Fototouren und Eisloch-Schwimmen starten alle von Abholpunkten im Dorf.' },
    { title: 'Polarlicht-Dunkelhimmel-Zonen', body: 'Fahren Sie 15 Minuten aus dem Dorf und die Lichtverschmutzung sinkt auf nahezu null. Hütten auf der Nordseite des Fjälls haben den klarsten Horizont.' },
    { title: 'Sommer-Fjällbiken und Mitternachtssonne', body: 'Im Juni und Juli geht die Sonne nicht unter. Levi öffnet Gondeln und Wege für Downhill- und Cross-Country-Mountainbiking.' },
    { title: 'Weltcup-Slalom-Auftakt', body: 'Jeden November eröffnet der FIS Alpine Ski Weltcup auf der Levi Black, der früheste, zuverlässigste Schnee auf der Tour.' },
  ],
  whenToGo: `November – März ist die Hauptsaison: zuverlässiger Schnee, Polarlicht-Nächte und volles Safari-Programm.
Ende August – Oktober bringt Ruska (Herbstfarben) und die ersten Polarlicht-Fenster ohne Ansturm.
Juni – Juli ist die Mitternachtssonnen-Periode: 24 Stunden Tageslicht und eine andere Art von Hüttenurlaub.`,
  howToGet: `Fliegen Sie nach Kittilä (KTT). Direkte Winterrouten aus London, Paris, Amsterdam, Frankfurt, Zürich und Helsinki.
Transfer ins Levi-Dorf sind 15 km. Die meisten Premium-Hütten beinhalten einen privaten Transfer.
Aus Helsinki ist der Nachtzug nach Kolari + 1-stündiger Transfer eine landschaftlich reizvolle Alternative.`,
  stayTypes: [
    'Polarlicht-Glasvillen, Schlafzimmer mit Glasdach für Horizont-zu-Horizont-Himmelsblick, üblich für 2–4 Gäste.',
    'Ski-in-Chalets am Fjäll, 6–10 Gäste, eigene Sauna, oft mit Außenwhirlpool und Trockenraum.',
    'Blockhütten am Immeljärvi-See, ruhigere Waldlage, wenige Minuten Fahrt vom Dorf.',
    'Designer-Apartments im Dorfkern, fußläufig zu Restaurants, gut für Erstbesucher in Lappland.',
  ],
  siblings: [
    { name: 'Ylläs', href: '/destinations/yllas', blurb: 'Ruhigere Zwillings-Fjälls mit Finnlands längsten Skiabfahrten.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Tor zur Wildnis des UKK-Nationalparks.' },
    { name: 'Inari', href: '/destinations/inari', blurb: 'Abgelegener See, Sámi-Kultur und tiefer nordischer Himmel.' },
  ],
  anchorProperties: [
    { name: 'Levin Iglut', propertyQuery: 'Levin Iglut', sid: 'destination_levi_levin_iglut', note: 'Glasiglus am Fjäll, Hauptwochen werden 10–12 Monate im Voraus gebucht.' },
    { name: 'Hotel Levi Panorama', propertyQuery: 'Hotel Levi Panorama', sid: 'destination_levi_panorama', note: 'Am Hang des Levifjells: Die Gondel hält vor der Tür, Skifahren beginnt im Hof.' },
    { name: 'Lapland Hotels Sirkantähti', propertyQuery: 'Lapland Hotels Sirkantähti', sid: 'destination_levi_sirkantahti', note: 'Zimmer und Apartments in Levi, jedes mit eigener Sauna, rund 500 m von den Pisten.' },
    { name: 'Alle Levi-Unterkünfte', href: HOTEL_SEARCH_FOR('de').levi, sid: 'destination_levi_all_search', note: 'Vergleichen Sie alle Levi-Hotels und Chalets auf Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Ab Flughafen Kittilä (KTT)', detail: 'Direkte Winterflüge LHR · CDG · AMS · FRA · ZRH · HEL. 15 km / 15 min ins Levi-Dorf.' },
    { mode: 'bus', label: 'KTT-Flughafenbus', detail: '8 € einfach · 25 min · zu jedem Flug.' },
    { mode: 'car', label: 'Taxi oder vorgebuchter Transfer', detail: '25–35 € ins Dorf. Die meisten Premium-Hütten beinhalten einen privaten Transfer.' },
    { mode: 'train', label: 'Nachtzug nach Kolari', detail: 'VR-Schlafwagen ab Helsinki ~90 €, dann 1 h Transfer nach Levi. Landschaftliche Winter-Alternative.' },
  ],
  carRental: {
    href: CARS_FOR('de').fromKittila,
    sid: 'destination_levi_cars_ktt',
    airport: 'Abholung am Flughafen Kittilä (KTT)',
    blurb: '15 min vom Levi-Dorf · Winter-Spikereifen Standard',
  },
  dayPlan: [
    { day: '01', title: 'Ankunft · einrichten · kurze Abfahrt', body: 'Landung in KTT am Nachmittag, Transfer ins Dorf, Verleih bei Zero Point. Eine leichte Abfahrt vor Sonnenuntergang, um Ausrüstung und Beine zu testen.' },
    { day: '02', title: 'Voller Skitag · Abendsauna', body: 'Lifte öffnen um 09:30. Mittag im Tuikku oben an der Gondel. Bis 15:00 unten, Sauna in der Hütte. Polarlicht-Wecker vor dem Schlafen aktivieren.' },
    { day: '03', title: 'Husky-Safari + Dorfdinner', body: 'Morgens Husky-Farm-Safari (2 Wochen im Voraus buchen). Nachmittags durchs Dorf, Kammi-Bar für Rentier, Saamen Kammi für traditionell. In klaren Nächten lohnt die Polarlicht-Beobachtung vom Levi-Gipfel.' },
    { day: '04', title: 'Polarlicht-Hütten-Nacht · ruhiger Tag', body: 'Fahren Sie 15 min nördlich zu einem Glasiglu für die letzte Nacht. Langsamer Morgen, Sauna, Himmel beobachten. Frühestmöglicher Flug am nächsten Morgen.' },
  ],
  seoTitle: 'Levi-Unterkünfte: Hotels, Hütten & Iglus | LaplandStays',
  seoDescription: 'Wo Sie in Levi übernachten: Lapland Hotels ab 100 €/Nacht, Glasiglus bei Levin Iglut ab 350 €, Pisten-Chalets ab 200 €. 15 min vom Flughafen Kittilä.',
}

const ko: DestinationBody = {
  tagline: '리프트에서 가까운 거리에 레스토랑, 사파리, 오로라 캐빈이 어우러진 핀란드 최대의 스키 리조트.',
  description: `레비는 키틸레 시 자치체에 속하며 북극권에서 약 170km 북쪽에 자리합니다. 1960년대에 단 한 대의 리프트로 시작해 지금은 슬로프 44개, 리프트 26대를 갖춘 핀란드 최대의 스키 리조트로 성장했고, 도보로 걸을 수 있는 아담한 마을 중심이 그 모든 시설을 받쳐줍니다.

이곳은 라플란드 럭셔리 여행으로 들어가는 가장 쉬운 관문입니다. 키틸레 공항까지 15분, FIS 월드컵 슬라롬이 매년 11월 Levi Black에서 시즌을 열며, 프리미엄 캐빈은 주변 산자락에 흩어져 있습니다. 마을에서 저녁식사를 즐길 만큼 가깝지만, 다크 스카이에서 오로라를 볼 만큼 떨어진 거리입니다.`,
  facts: [
    { label: '호텔 1박', value: '100€부터' },
    { label: '글래스 이글루 1박', value: '350€부터' },
    { label: '가장 가까운 공항', value: 'KTT 15분' },
    { label: '슬로프', value: '44개' },
  ],
  highlights: [
    { title: 'Levitunturi 스키 인 캐빈', body: 'Levifell 슬로프에 자리한 샬레는 곤돌라와 산을 둘러싼 긴 블루·레드 코스로 바로 연결됩니다.' },
    { title: '실력 있는 주방이 모인 도보 마을', body: '중심부에는 미슐랭이 추천한 레스토랑, 순록 테이스팅 메뉴, 그리고 카페가 빽빽이 모여 있습니다. 산악 목적지에서는 드문 풍경입니다.' },
    { title: '풀 사파리 메뉴', body: '허스키, 스노모빌, 순록 썰매, 오로라 사진 투어, 얼음 구멍 입수까지 모두 마을 안 픽업 포인트에서 출발합니다.' },
    { title: '오로라 다크 스카이 존', body: '마을에서 차로 15분만 벗어나면 광공해가 거의 사라집니다. 산 북쪽 사면의 캐빈에서 가장 깨끗한 지평선을 마주합니다.' },
    { title: '여름의 산악 바이크와 백야', body: '6–7월에는 해가 지지 않습니다. 레비는 곤돌라와 트레일을 다시 열어 다운힐과 크로스컨트리 마운틴 바이크를 제공합니다.' },
    { title: '월드컵 슬라롬 개막', body: '매년 11월 FIS 알파인 스키 월드컵이 Levi Black에서 시즌을 엽니다. 시즌 내 가장 이르고 가장 안정적인 설질입니다.' },
  ],
  whenToGo: `11월–3월이 절정입니다. 안정적인 적설, 오로라의 밤, 사파리 전 시즌이 열립니다.
8월 말–10월에는 ruska(가을 단풍)와 첫 오로라 윈도우를 인파 없이 즐기실 수 있습니다.
6–7월은 백야의 시기로, 24시간 햇빛 아래 또 다른 형태의 캐빈 휴가가 펼쳐집니다.`,
  howToGet: `키틸레(KTT)로 비행하세요. 런던, 파리, 암스테르담, 프랑크푸르트, 취리히, 헬싱키에서 겨울 직항편이 있습니다.
레비 마을까지는 15km. 대부분의 프리미엄 캐빈은 프라이빗 트랜스퍼를 포함합니다.
헬싱키에서는 Kolari행 야간 열차와 1시간 트랜스퍼가 풍경 좋은 대안입니다.`,
  stayTypes: [
    '오로라 글래스 빌라. 지평선에서 지평선까지 하늘을 담는 유리 천장 침실, 보통 2–4인용입니다.',
    '산악 지대의 스키 인 샬레. 6–10인용, 전용 사우나에 종종 야외 핫텁과 장비 건조실까지 갖추어집니다.',
    'Immeljärvi 호숫가 통나무 캐빈. 더 조용하고 숲에 둘러싸인 위치로, 마을에서 차로 몇 분 거리입니다.',
    '마을 중심부 디자이너 아파트. 레스토랑까지 도보, 라플란드를 처음 찾는 분께 권합니다.',
  ],
  siblings: [
    { name: 'Ylläs', href: '/destinations/yllas', blurb: '핀란드에서 가장 긴 슬로프를 가진, 더 조용한 쌍둥이 봉우리.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'UKK 국립공원 야생으로 이어지는 관문.' },
    { name: 'Inari', href: '/destinations/inari', blurb: '외딴 호수, 사미 유산, 그리고 깊은 북쪽의 하늘.' },
  ],
  anchorProperties: [
    { name: 'Levin Iglut', propertyQuery: 'Levin Iglut', sid: 'destination_levi_levin_iglut', note: '산자락의 글래스 이글루. 성수기 주차는 10–12개월 전 예약됩니다.' },
    { name: 'Hotel Levi Panorama', propertyQuery: 'Hotel Levi Panorama', sid: 'destination_levi_panorama', note: '레비 펠 사면에 위치. 곤돌라가 문 앞에 서고 스키는 마당에서 시작됩니다.' },
    { name: 'Lapland Hotels Sirkantähti', propertyQuery: 'Lapland Hotels Sirkantähti', sid: 'destination_levi_sirkantahti', note: '레비의 객실과 다양한 크기의 아파트. 전 객실 전용 사우나, 슬로프까지 약 500m.' },
    { name: '레비 전체 숙소', href: HOTEL_SEARCH_FOR('ko').levi, sid: 'destination_levi_all_search', note: 'Trip.com에서 레비의 모든 호텔과 샬레를 한 번에 비교하세요.' },
  ],
  transport: [
    { mode: 'plane', label: '키틸레 공항(KTT)에서', detail: 'LHR · CDG · AMS · FRA · ZRH · HEL 겨울 직항편. 레비 마을까지 15km / 15분.' },
    { mode: 'bus', label: 'KTT 공항버스', detail: '편도 8€ · 25분 · 모든 항공편에 맞춰 운행합니다.' },
    { mode: 'car', label: '택시 또는 사전 예약 트랜스퍼', detail: '마을까지 25–35€. 대부분의 프리미엄 캐빈에는 프라이빗 트랜스퍼가 포함됩니다.' },
    { mode: 'train', label: 'Kolari행 야간 열차', detail: '헬싱키발 VR 침대차 약 90€, 이후 1시간 트랜스퍼로 레비. 겨울철 풍경 좋은 대안입니다.' },
  ],
  carRental: {
    href: CARS_FOR('ko').fromKittila,
    sid: 'destination_levi_cars_ktt',
    airport: '키틸레 공항(KTT) 픽업',
    blurb: '레비 마을까지 15분 · 겨울 스파이크 타이어 기본',
  },
  dayPlan: [
    { day: '01', title: '도착 · 짐 정리 · 가벼운 활강', body: '오후에 KTT 도착, 마을로 트랜스퍼, Zero Point에서 장비를 빌리세요. 해가 지기 전 쉬운 코스 한 번으로 컨디션과 장비를 점검합니다.' },
    { day: '02', title: '풀 스키 데이 · 저녁 사우나', body: '리프트는 09:30에 운행을 시작합니다. 곤돌라 정상의 Tuikku에서 점심. 15:00에 내려와 캐빈에서 사우나. 자기 전 오로라 알람을 설정해 두세요.' },
    { day: '03', title: '허스키 사파리 + 마을 디너', body: '아침 허스키 농장 사파리(2주 전 예약). 오후는 마을 산책. 순록은 Kammi-Bar, 전통식은 Saamen Kammi. 맑은 밤에는 레비 정상에서 오로라를 기다려 보세요.' },
    { day: '04', title: '오로라 캐빈의 밤 · 여유로운 하루', body: '북쪽으로 15분 운전해 마지막 밤은 글래스 이글루에서. 느긋한 아침, 사우나, 하늘 감상. 다음 날 아침 가능한 가장 이른 항공편으로 귀국.' },
  ],
  seoTitle: '레비 숙박: 호텔, 캐빈, 이글루 | LaplandStays',
  seoDescription: '레비에서 어디에 묵을까: Lapland Hotels 1박 100€부터, Levin Iglut 글래스 이글루 350€부터, 스키 인 샬레 200€부터. 키틸레 공항에서 15분. 검증된 요금과 직접 예약.',
}

const fr: DestinationBody = {
  tagline: "La plus grande station de ski de Finlande, avec restaurants, safaris et chalets aurores à quelques minutes des remontées.",
  description: `Levi se situe dans la commune de Kittilä, à environ 170 km au nord du cercle polaire. D'un unique téléski dans les années 1960, la station est devenue la plus grande du pays : 44 pistes, 26 remontées et un cœur de village compact, qui se parcourt à pied.

C'est la porte d'entrée la plus simple vers la Laponie haut de gamme : l'aéroport de Kittilä est à 15 minutes, la Coupe du monde FIS de slalom ouvre chaque novembre sur Levi Black, et les chalets premium se dispersent dans le paysage de fjells environnant, assez près du village pour y dîner, assez loin pour le silence et l'observation des aurores sous un ciel noir.`,
  facts: [
    { label: 'Hôtels à partir de', value: '100 €/nuit' },
    { label: 'Igloos de verre à partir de', value: '350 €/nuit' },
    { label: 'Aéroport le plus proche', value: 'KTT 15 min' },
    { label: 'Pistes', value: '44' },
  ],
  highlights: [
    { title: 'Chalets ski-in sur le Levitunturi', body: 'Les chalets posés sur les flancs du Levifjäll donnent un accès direct à la télécabine et aux longues pistes bleues et rouges qui ceinturent la montagne.' },
    { title: 'Un village à pied avec de vraies cuisines', body: 'Le centre réunit des restaurants recommandés par Michelin, des menus dégustation au renne et un essaim serré de cafés, rare pour une destination de fjell.' },
    { title: 'Carte complète de safaris', body: 'Huskys, motoneiges, traîneaux à rennes, photo des aurores et baignade dans la glace partent tous de points de prise en charge à l\'intérieur du village.' },
    { title: 'Zones de ciel noir pour les aurores', body: 'À 15 minutes en voiture, la pollution lumineuse tombe à presque rien. Les chalets sur le versant nord du fjell offrent l\'horizon le plus dégagé.' },
    { title: 'VTT de fjell et soleil de minuit', body: 'En juin et juillet, le soleil ne se couche pas. Levi rouvre télécabines et sentiers pour le VTT de descente et de cross-country.' },
    { title: 'Ouverture du slalom de Coupe du monde', body: 'Chaque novembre, la Coupe du monde FIS de ski alpin ouvre sur Levi Black, la neige la plus précoce et la plus fiable du circuit.' },
  ],
  whenToGo: `Novembre – mars constitue la haute saison : neige fiable, nuits d'aurores et programme complet de safaris.
Fin août – octobre apporte la ruska (couleurs d'automne) et les premières fenêtres d'aurores, sans la foule.
Juin – juillet est la période du soleil de minuit : 24 heures de lumière et un autre style de séjour en chalet.`,
  howToGet: `Vol vers Kittilä (KTT). Vols hivernaux directs depuis Londres, Paris, Amsterdam, Francfort, Zurich et Helsinki.
Le transfert vers le village de Levi est de 15 km. La plupart des chalets premium incluent un transfert privé.
Depuis Helsinki, le train de nuit jusqu'à Kolari + 1 h de transfert constitue une alternative panoramique.`,
  stayTypes: [
    'Villas aurores en verre, chambres à toit de verre pour un ciel d\'horizon à horizon, généralement 2 à 4 voyageurs.',
    'Chalets ski-in sur le fjell, 6 à 10 voyageurs, sauna privatif, souvent bain nordique extérieur et local de séchage.',
    'Chalets en rondins au bord du lac Immeljärvi, cadre forestier plus calme, à quelques minutes en voiture du village.',
    'Appartements design au cœur du village, restaurants à pied, parfaits pour une première fois en Laponie.',
  ],
  siblings: [
    { name: 'Ylläs', href: '/destinations/yllas', blurb: 'Fjells jumeaux plus calmes, avec les plus longues pistes de Finlande.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Porte de la nature sauvage du parc national UKK.' },
    { name: 'Inari', href: '/destinations/inari', blurb: 'Lac reculé, héritage sámi et ciels du Grand Nord.' },
  ],
  anchorProperties: [
    { name: 'Levin Iglut', propertyQuery: 'Levin Iglut', sid: 'destination_levi_levin_iglut', note: 'Igloos de verre sur le fjell, les semaines fortes se réservent 10 à 12 mois à l\'avance.' },
    { name: 'Hotel Levi Panorama', propertyQuery: 'Hotel Levi Panorama', sid: 'destination_levi_panorama', note: 'Sur les pentes du fjeld de Levi : télécabine devant la porte et ski dès la cour.' },
    { name: 'Lapland Hotels Sirkantähti', propertyQuery: 'Lapland Hotels Sirkantähti', sid: 'destination_levi_sirkantahti', note: 'Chambres et appartements à Levi, chacun avec son sauna privé, à environ 500 m des pistes.' },
    { name: 'Tous les hébergements de Levi', href: HOTEL_SEARCH_FOR('fr').levi, sid: 'destination_levi_all_search', note: 'Comparez tous les hôtels et chalets de Levi sur Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: "Depuis l'aéroport de Kittilä (KTT)", detail: 'Vols hivernaux directs LHR · CDG · AMS · FRA · ZRH · HEL. 15 km / 15 min jusqu\'au village de Levi.' },
    { mode: 'bus', label: 'Bus aéroport KTT', detail: '8 € l\'aller · 25 min · à chaque arrivée d\'avion.' },
    { mode: 'car', label: 'Taxi ou transfert pré-réservé', detail: '25 à 35 € jusqu\'au village. La plupart des chalets premium incluent un transfert privé.' },
    { mode: 'train', label: 'Train de nuit vers Kolari', detail: 'Wagon-lit VR depuis Helsinki ~90 €, puis 1 h de transfert jusqu\'à Levi. Alternative panoramique en hiver.' },
  ],
  carRental: {
    href: CARS_FOR('fr').fromKittila,
    sid: 'destination_levi_cars_ktt',
    airport: 'Prise en charge à l\'aéroport de Kittilä (KTT)',
    blurb: '15 min du village de Levi · pneus cloutés hiver fournis',
  },
  dayPlan: [
    { day: '01', title: 'Arrivée · installation · descente courte', body: 'Atterrissage à KTT en milieu d\'après-midi, transfert au village, location chez Zero Point. Une piste facile avant le coucher du soleil pour tester matériel et jambes.' },
    { day: '02', title: 'Journée ski complète · sauna en soirée', body: 'Les remontées ouvrent à 09:30. Déjeuner au Tuikku, au sommet de la télécabine. Retour avant 15:00, sauna au chalet. Réveil aurores activé avant la nuit.' },
    { day: '03', title: 'Safari husky + dîner au village', body: 'Safari en ferme de huskys le matin (à réserver deux semaines à l\'avance). Village l\'après-midi, Kammi-Bar pour le renne, Saamen Kammi pour le traditionnel. Par nuit claire, guettez les aurores depuis le sommet de Levi.' },
    { day: '04', title: 'Nuit en chalet aurores · journée douce', body: '15 min de route vers le nord jusqu\'à un igloo de verre pour la dernière nuit. Matinée lente, sauna, regard vers le ciel. Vol retour au plus tôt le lendemain matin.' },
  ],
  seoTitle: 'Hébergements à Levi : hôtels et igloos | LaplandStays',
  seoDescription: 'Où loger à Levi : Lapland Hotels dès 100 €/nuit, igloos de verre à Levin Iglut dès 350 €, chalets ski-in dès 200 €. À 15 min de l\'aéroport de Kittilä.',
}

const it: DestinationBody = {
  tagline: 'La più grande stazione sciistica della Finlandia, con ristoranti, safari e chalet aurora a pochi minuti dagli impianti.',
  description: `Levi sorge nel comune di Kittilä, circa 170 km a nord del Circolo Polare. Da un solo impianto degli anni Sessanta è cresciuta fino a diventare la più grande stazione sciistica del Paese: 44 piste, 26 impianti e un piccolo centro paese, percorribile a piedi, a fare da snodo.

È il modo più semplice per entrare nel turismo di lusso lappone: l'aeroporto di Kittilä è a 15 minuti, la Coppa del Mondo FIS di slalom apre ogni novembre su Levi Black e gli chalet premium sono distribuiti nel paesaggio dei fjell, abbastanza vicini al paese per cenare, abbastanza lontani per il silenzio e l'osservazione dell'aurora sotto un cielo scuro.`,
  facts: [
    { label: 'Hotel da', value: '100 €/notte' },
    { label: 'Igloo di vetro da', value: '350 €/notte' },
    { label: 'Aeroporto più vicino', value: 'KTT 15 min' },
    { label: 'Piste', value: '44' },
  ],
  highlights: [
    { title: 'Chalet ski-in sul Levitunturi', body: 'Gli chalet sui pendii del Levifjäll consentono l\'accesso diretto alla cabinovia e alle lunghe piste blu e rosse che circondano la montagna.' },
    { title: 'Un paese da percorrere a piedi con cucine serie', body: 'Il centro accoglie ristoranti consigliati dalla guida Michelin, menu degustazione di renna e un fitto nucleo di caffè, raro per una destinazione di fjell.' },
    { title: 'Menù safari completo', body: 'Husky, motoslitte, slitte trainate da renne, tour fotografici dell\'aurora e tuffi nel ghiaccio partono tutti da punti di raccolta in paese.' },
    { title: 'Zone di cielo scuro per l\'aurora', body: 'Bastano 15 minuti di auto fuori dal paese perché l\'inquinamento luminoso scenda quasi a zero. Gli chalet sul versante nord del fjell hanno l\'orizzonte più pulito.' },
    { title: 'Mountain bike sul fjell e sole di mezzanotte', body: 'A giugno e luglio il sole non tramonta. Levi riapre cabinovie e sentieri per il downhill e la mountain bike cross-country.' },
    { title: 'Inaugurazione dello slalom di Coppa del Mondo', body: 'Ogni novembre la Coppa del Mondo FIS di sci alpino si apre su Levi Black, la neve più precoce e affidabile del circuito.' },
  ],
  whenToGo: `Da novembre a marzo è il periodo di punta: neve sicura, notti aurorali e stagione safari piena.
Fine agosto–ottobre porta la ruska (foliage autunnale) e le prime finestre aurorali senza affollamento.
Giugno–luglio è il periodo del sole di mezzanotte: 24 ore di luce e un'altra forma di vacanza in chalet.`,
  howToGet: `Voli per Kittilä (KTT). Voli invernali diretti da Londra, Parigi, Amsterdam, Francoforte, Zurigo ed Helsinki.
Il trasferimento al paese di Levi è di 15 km. La maggior parte degli chalet premium include il transfer privato.
Da Helsinki, il treno notturno per Kolari + 1 ora di trasferimento è un'alternativa panoramica.`,
  stayTypes: [
    'Ville aurora in vetro, camere con tetto vetrato per cielo da orizzonte a orizzonte, in genere per 2–4 ospiti.',
    'Chalet ski-in sul fjell, 6–10 ospiti, sauna privata, spesso vasca esterna e locale asciugatura attrezzature.',
    'Chalet in tronchi sul lago Immeljärvi, contesto più tranquillo, immerso nel bosco, a pochi minuti d\'auto dal paese.',
    'Appartamenti di design nel cuore del paese, ristoranti a piedi, ideali per chi visita la Lapponia per la prima volta.',
  ],
  siblings: [
    { name: 'Ylläs', href: '/destinations/yllas', blurb: 'Fjell gemelli più silenziosi, con le piste più lunghe della Finlandia.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Porta verso il parco nazionale UKK e la sua natura selvaggia.' },
    { name: 'Inari', href: '/destinations/inari', blurb: 'Lago remoto, eredità sámi e cieli del profondo Nord.' },
  ],
  anchorProperties: [
    { name: 'Levin Iglut', propertyQuery: 'Levin Iglut', sid: 'destination_levi_levin_iglut', note: 'Igloo di vetro sul fjell, le settimane di punta si prenotano con 10–12 mesi di anticipo.' },
    { name: 'Hotel Levi Panorama', propertyQuery: 'Hotel Levi Panorama', sid: 'destination_levi_panorama', note: 'Sulle pendici del fjell di Levi: cabinovia davanti alla porta e sci dal cortile.' },
    { name: 'Lapland Hotels Sirkantähti', propertyQuery: 'Lapland Hotels Sirkantähti', sid: 'destination_levi_sirkantahti', note: 'Camere e appartamenti a Levi, ciascuno con sauna privata, a circa 500 m dalle piste.' },
    { name: 'Tutti gli alloggi di Levi', href: HOTEL_SEARCH_FOR('it').levi, sid: 'destination_levi_all_search', note: 'Confronti tutti gli hotel e gli chalet di Levi su Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Dall\'aeroporto di Kittilä (KTT)', detail: 'Voli invernali diretti LHR · CDG · AMS · FRA · ZRH · HEL. 15 km / 15 min al paese di Levi.' },
    { mode: 'bus', label: 'Bus aeroporto KTT', detail: '8 € sola andata · 25 min · in coincidenza con ogni volo.' },
    { mode: 'car', label: 'Taxi o transfer pre-prenotato', detail: '25–35 € fino al paese. La maggior parte degli chalet premium include il transfer privato.' },
    { mode: 'train', label: 'Treno notturno per Kolari', detail: 'Vagone letto VR da Helsinki ~90 €, poi 1 h di trasferimento a Levi. Alternativa panoramica in inverno.' },
  ],
  carRental: {
    href: CARS_FOR('it').fromKittila,
    sid: 'destination_levi_cars_ktt',
    airport: 'Ritiro all\'aeroporto di Kittilä (KTT)',
    blurb: '15 min dal paese di Levi · pneumatici chiodati invernali di serie',
  },
  dayPlan: [
    { day: '01', title: 'Arrivo · sistemazione · sciata breve', body: 'Atterraggio a KTT nel pomeriggio, transfer in paese, ritiro dell\'attrezzatura allo Zero Point. Una pista facile prima del tramonto per testare attrezzi e gambe.' },
    { day: '02', title: 'Giornata piena di sci · sauna serale', body: 'Gli impianti aprono alle 09:30. Pranzo al Tuikku, in cima alla cabinovia. Ritorno entro le 15:00, sauna allo chalet. Allerta aurora attivata prima di andare a letto.' },
    { day: '03', title: 'Safari con husky + cena in paese', body: 'Safari in fattoria di husky al mattino (prenoti con due settimane di anticipo). Pomeriggio in paese, Kammi-Bar per la renna, Saamen Kammi per la cucina tradizionale. Nelle notti serene, aurora dalla cima di Levi.' },
    { day: '04', title: 'Notte in chalet aurora · giornata leggera', body: '15 min verso nord fino a un igloo di vetro per l\'ultima notte. Mattina lenta, sauna, sguardo al cielo. Volo di ritorno il prima possibile la mattina seguente.' },
  ],
  seoTitle: 'Alloggi a Levi: hotel, chalet e igloo | LaplandStays',
  seoDescription: 'Dove soggiornare a Levi: Lapland Hotels da 100 €/notte, igloo di vetro a Levin Iglut da 350 €, chalet ski-in da 200 €. 15 min dall\'aeroporto di Kittilä.',
}

const nl: DestinationBody = {
  tagline: 'De grootste skiresort van Finland, met restaurants, safari\'s en aurora-cabins op korte afstand van de liften.',
  description: `Levi ligt in de gemeente Kittilä, ongeveer 170 km ten noorden van de Poolcirkel. Van één lift in de jaren zestig groeide het uit tot de grootste skiresort van Finland: 44 pistes en 26 liften rond een compact, beloopbaar dorpscentrum.

Het is het makkelijkste startpunt voor luxueus reizen door Lapland: de luchthaven Kittilä ligt op 15 minuten, de FIS-wereldbeker slalom opent elk jaar in november op Levi Black, en premium cabins liggen verspreid in het fjell-landschap eromheen, dichtbij genoeg om in het dorp te eten, ver genoeg voor stilte en noorderlicht onder een donkere hemel.`,
  facts: [
    { label: 'Hotels vanaf', value: '€100/nacht' },
    { label: 'Glasiglo\'s vanaf', value: '€350/nacht' },
    { label: 'Dichtstbijzijnde luchthaven', value: 'KTT 15 min' },
    { label: 'Pistes', value: '44' },
  ],
  highlights: [
    { title: 'Ski-in cabins op de Levitunturi', body: 'Chalets op de hellingen van de Levifjell geven directe toegang tot de gondel en de lange blauwe en rode pistes rond de berg.' },
    { title: 'Een beloopbaar dorp met serieuze keukens', body: 'Het centrum heeft door Michelin aanbevolen restaurants, rendier-tastingmenu\'s en een dichte cluster cafés, zeldzaam voor een fjell-bestemming.' },
    { title: 'Volledig safari-aanbod', body: 'Husky\'s, sneeuwscooters, rendierensledes, aurora-fotografietours en ijszwemmen vertrekken allemaal vanaf ophaalpunten in het dorp.' },
    { title: 'Donkere hemelzones voor aurora', body: '15 minuten rijden uit het dorp en de lichtvervuiling valt naar bijna nul. Cabins aan de noordkant van de fjell hebben de helderste horizon.' },
    { title: 'Zomer-mountainbike en middernachtszon', body: 'In juni en juli gaat de zon niet onder. Levi opent dan gondels en paden voor downhill en cross-country mountainbiken.' },
    { title: 'Wereldbeker slalom-opening', body: 'Elk november opent de FIS Alpine wereldbeker op Levi Black, de vroegste, betrouwbaarste sneeuw van het circuit.' },
  ],
  whenToGo: `November–maart is hoogseizoen: betrouwbare sneeuw, aurora-nachten en volledig safarischema.
Eind augustus–oktober brengt de ruska (herfstkleuren) en de eerste aurora-vensters zonder drukte.
Juni–juli is de tijd van de middernachtszon: 24 uur daglicht en een ander soort cabinvakantie.`,
  howToGet: `Vlieg naar Kittilä (KTT). Directe winterroutes vanuit Londen, Parijs, Amsterdam, Frankfurt, Zürich en Helsinki.
Naar het dorp Levi is het 15 km. De meeste premium cabins inclusief privétransfer.
Vanuit Helsinki is de nachttrein naar Kolari + 1 uur transfer een schilderachtig alternatief.`,
  stayTypes: [
    'Aurora-glasvilla\'s, slaapkamers met glazen dak voor horizon-tot-horizon zicht, doorgaans voor 2–4 gasten.',
    'Ski-in chalets op de fjell, 6–10 gasten, eigen sauna, vaak met buiten-hottub en droogruimte voor materiaal.',
    'Houten cabins aan het Immeljärvi-meer, rustiger, in het bos, op enkele minuten rijden van het dorp.',
    'Designer-appartementen in de dorpskern, restaurants op loopafstand, ideaal voor eerste keer Lapland.',
  ],
  siblings: [
    { name: 'Ylläs', href: '/destinations/yllas', blurb: 'Rustigere zusterfjells met de langste pistes van Finland.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Poort naar de wildernis van het UKK-nationaal park.' },
    { name: 'Inari', href: '/destinations/inari', blurb: 'Afgelegen meer, Sámi-erfgoed en hemels van het hoge noorden.' },
  ],
  anchorProperties: [
    { name: 'Levin Iglut', propertyQuery: 'Levin Iglut', sid: 'destination_levi_levin_iglut', note: 'Glasiglo\'s op de fjell, piekweken zijn 10–12 maanden vooruit volgeboekt.' },
    { name: 'Hotel Levi Panorama', propertyQuery: 'Hotel Levi Panorama', sid: 'destination_levi_panorama', note: 'Op de helling van de Levi-fjeld: de gondel stopt voor de deur en skiën begint op het erf.' },
    { name: 'Lapland Hotels Sirkantähti', propertyQuery: 'Lapland Hotels Sirkantähti', sid: 'destination_levi_sirkantahti', note: 'Kamers en appartementen in Levi, elk met eigen sauna, op ongeveer 500 m van de pistes.' },
    { name: 'Alle Levi-accommodaties', href: HOTEL_SEARCH_FOR('nl').levi, sid: 'destination_levi_all_search', note: 'Vergelijk alle Levi-hotels en chalets op Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Vanaf luchthaven Kittilä (KTT)', detail: 'Directe wintervluchten LHR · CDG · AMS · FRA · ZRH · HEL. 15 km / 15 min naar het dorp Levi.' },
    { mode: 'bus', label: 'KTT-luchthavenbus', detail: '€8 enkele reis · 25 min · sluit aan op elke vlucht.' },
    { mode: 'car', label: 'Taxi of vooraf geboekte transfer', detail: '€25–35 naar het dorp. De meeste premium cabins inclusief privétransfer.' },
    { mode: 'train', label: 'Nachttrein naar Kolari', detail: 'VR-slaaptrein vanuit Helsinki ~€90, daarna 1 uur transfer naar Levi. Schilderachtig winteralternatief.' },
  ],
  carRental: {
    href: CARS_FOR('nl').fromKittila,
    sid: 'destination_levi_cars_ktt',
    airport: 'Ophalen op luchthaven Kittilä (KTT)',
    blurb: '15 min van het dorp Levi · winterspijkerbanden standaard',
  },
  dayPlan: [
    { day: '01', title: 'Aankomst · installeren · korte afdaling', body: 'Land in de namiddag op KTT, transfer naar het dorp, materiaal halen bij Zero Point. Eén makkelijke piste voor zonsondergang om materiaal en benen te testen.' },
    { day: '02', title: 'Volle skidag · saunaavond', body: 'De liften gaan om 09:30 open. Lunch bij Tuikku boven aan de gondel. Voor 15:00 weer beneden, sauna in de cabin. Aurora-alarm aan vóór slapen.' },
    { day: '03', title: 'Husky-safari + dorpsdiner', body: 'Husky-farm safari in de ochtend (twee weken vooruit boeken). Middag in het dorp, Kammi-Bar voor rendier, Saamen Kammi voor traditioneel. Bij heldere hemel: noorderlicht spotten vanaf de top van Levi.' },
    { day: '04', title: 'Aurora-cabinnacht · rustige dag', body: '15 min noordwaarts rijden naar een glasiglo voor de laatste nacht. Rustige ochtend, sauna, hemel kijken. De volgende ochtend de eerstmogelijke vlucht naar huis.' },
  ],
  seoTitle: 'Levi-accommodatie: hotels, cabins en iglo\'s | LaplandStays',
  seoDescription: 'Waar te verblijven in Levi: Lapland Hotels vanaf €100/nacht, glasiglo\'s bij Levin Iglut vanaf €350, ski-in chalets vanaf €200. 15 min van luchthaven Kittilä.',
}

const ja: DestinationBody = {
  tagline: 'リフトからわずかな距離にレストラン、サファリ、オーロラキャビンが集まる、フィンランド最大のスキーリゾートです。',
  description: `レビは北極圏のおよそ170km北、キッティラ自治体に位置します。1960年代に1基のリフトから始まり、いまではスロープ44本、リフト26基を擁するフィンランド最大のスキーリゾートへと成長し、徒歩で回れるコンパクトな村の中心がそのすべてを支えています。

ラップランドの上質な旅への入り口として最も気軽に訪れられる場所です。キッティラ空港まで15分、FISワールドカップのスラロームが毎年11月にLevi Blackで開幕し、プレミアムキャビンは周囲の丘陵地に点在しています。村まで夕食に出かけられる距離でありながら、静寂と暗い空でのオーロラ観賞を楽しめる距離です。`,
  facts: [
    { label: 'ホテル1泊', value: '100ユーロから' },
    { label: 'ガラス製イグルー1泊', value: '350ユーロから' },
    { label: '最寄り空港', value: 'KTT 15分' },
    { label: 'スロープ', value: '44本' },
  ],
  highlights: [
    { title: 'レヴィトゥントゥリのスキーインキャビン', body: 'レヴィフェルの斜面に立つシャレーから、ゴンドラと山を取り囲む長いブルー・レッドコースへ直接アクセスできます。' },
    { title: '本格的な厨房を備えた徒歩圏の村', body: '中心部にはミシュランの推奨レストラン、トナカイのテイスティングメニュー、密集したカフェが揃います。山岳リゾートでは珍しい充実ぶりです。' },
    { title: 'フルラインのサファリ', body: 'ハスキー、スノーモービル、トナカイぞり、オーロラ撮影ツアー、氷穴入水まで、すべて村内のピックアップポイントから出発します。' },
    { title: 'オーロラ観賞に適したダークスカイ', body: '村から車で15分離れると光害はほぼ消えます。山の北側のキャビンからは最も澄んだ地平線が望めます。' },
    { title: '夏のマウンテンバイクと白夜', body: '6月から7月にかけて太陽は沈みません。レビはゴンドラとトレイルを再開し、ダウンヒルとクロスカントリーのマウンテンバイクが楽しめます。' },
    { title: 'ワールドカップ・スラロームの開幕', body: '毎年11月、FISアルパインスキー・ワールドカップがLevi Blackで開幕します。シーズン中もっとも早く、もっとも安定した雪質です。' },
  ],
  whenToGo: `11月から3月がハイシーズンです。安定した積雪、オーロラの夜、そしてサファリの全プログラムが揃います。
8月下旬から10月にはルスカ(紅葉)と最初のオーロラの機会が、混雑なく訪れます。
6月から7月は白夜の季節で、24時間の光のもと、また違ったキャビン滞在が楽しめます。`,
  howToGet: `キッティラ(KTT)へお越しください。ロンドン、パリ、アムステルダム、フランクフルト、チューリッヒ、ヘルシンキから冬季直行便があります。
レビ村までは15km。多くのプレミアムキャビンにはプライベート送迎が含まれます。
ヘルシンキからはコラリ行き夜行列車と1時間の送迎が、景観を楽しめる代替ルートです。`,
  stayTypes: [
    'オーロラ・ガラスヴィラ。地平線から地平線まで空を見渡せるガラス屋根の寝室。通常2〜4名利用です。',
    '山上のスキーインシャレー。6〜10名利用。専用サウナを備え、屋外ホットタブと装備乾燥室付きが多くあります。',
    'インメル湖畔のログキャビン。より静かな森の立地で、村から車で数分の距離です。',
    '村中心部のデザイナーアパートメント。レストランまで徒歩。ラップランド初訪問の方に適しています。',
  ],
  siblings: [
    { name: 'Ylläs', href: '/destinations/yllas', blurb: 'フィンランド最長のコースを擁する、より静かな双子のフェル。' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'UKK国立公園の原野への入り口。' },
    { name: 'Inari', href: '/destinations/inari', blurb: '人里離れた湖、サーミの伝統、深い北方の空。' },
  ],
  anchorProperties: [
    { name: 'Levin Iglut', propertyQuery: 'Levin Iglut', sid: 'destination_levi_levin_iglut', note: '山上のガラスイグルー。ピーク週は10〜12か月前に予約が埋まります。' },
    { name: 'Hotel Levi Panorama', propertyQuery: 'Hotel Levi Panorama', sid: 'destination_levi_panorama', note: 'レヴィ・フェルの斜面に立地。ゴンドラが玄関前に停まり、スキーは中庭から始まります。' },
    { name: 'Lapland Hotels Sirkantähti', propertyQuery: 'Lapland Hotels Sirkantähti', sid: 'destination_levi_sirkantahti', note: 'レヴィの客室とさまざまな広さのアパートメント。全室に専用サウナ、ゲレンデまで約500m。' },
    { name: 'レビのすべての宿泊施設', href: HOTEL_SEARCH_FOR('ja').levi, sid: 'destination_levi_all_search', note: 'Trip.comでレビのホテルとシャレーをまとめて比較できます。' },
  ],
  transport: [
    { mode: 'plane', label: 'キッティラ空港(KTT)から', detail: 'LHR · CDG · AMS · FRA · ZRH · HEL からの冬季直行便。レビ村まで15km / 15分。' },
    { mode: 'bus', label: 'KTT空港バス', detail: '片道8ユーロ・25分・全便に接続します。' },
    { mode: 'car', label: 'タクシーまたは事前予約送迎', detail: '村まで25〜35ユーロ。多くのプレミアムキャビンにはプライベート送迎が含まれます。' },
    { mode: 'train', label: 'コラリ行き夜行列車', detail: 'ヘルシンキ発VR寝台車約90ユーロ、その後1時間の送迎でレビへ。冬季の景観を楽しむ代替ルートです。' },
  ],
  carRental: {
    href: CARS_FOR('ja').fromKittila,
    sid: 'destination_levi_cars_ktt',
    airport: 'キッティラ空港(KTT)で受け取り',
    blurb: 'レビ村まで15分・冬季はスパイクタイヤ標準装備',
  },
  dayPlan: [
    { day: '01', title: '到着・くつろぎ・軽く一本', body: '午後にKTT着、村へ送迎、Zero Pointでレンタル受け取り。日没前にやさしいコースを一本滑り、装備と脚を確かめます。' },
    { day: '02', title: '一日スキー・夜のサウナ', body: 'リフトは9:30運行開始。ゴンドラ頂上のTuikkuで昼食。15:00までに下山し、キャビンでサウナ。就寝前にオーロラアラームを設定します。' },
    { day: '03', title: 'ハスキーサファリと村のディナー', body: '午前はハスキーファームのサファリ(2週間前に予約)。午後は村を散策。トナカイならKammi-Bar、伝統料理ならSaamen Kammi。晴れた夜はレビ山頂からオーロラを観賞。' },
    { day: '04', title: 'オーロラキャビンの夜・ゆったりした一日', body: '北へ15分走り、最終夜はガラスイグルーで。ゆっくりとした朝、サウナ、そして空を眺めます。翌朝の最も早い便で帰路に。' },
  ],
  seoTitle: 'レビの宿泊:ホテル、キャビン、イグルー | LaplandStays',
  seoDescription: 'ラップランドのレビでの宿選び:Lapland Hotels1泊100ユーロから、Levin Iglutのガラスイグルー350ユーロから、スキーインシャレー200ユーロから。キッティラ空港から15分。検証済みの料金で直接予約。',
}

const es: DestinationBody = {
  tagline: 'La estación de esquí más grande de Finlandia, con restaurantes, safaris y cabañas con aurora a pocos minutos en coche de los remontes.',
  description: `Levi se encuentra en el municipio de Kittilä, a unos 170 km al norte del Círculo Polar. De un único remonte en los años sesenta creció hasta convertirse en la mayor estación de esquí de Finlandia: 44 pistas y 26 remontes alrededor de un centro de pueblo compacto y peatonal.

Es la puerta de entrada más sencilla al turismo de lujo en Laponia: el aeropuerto de Kittilä queda a 15 minutos, la Copa del Mundo FIS de eslalon abre cada noviembre en Levi Black y las cabañas premium se reparten por el paisaje de fells circundante, lo bastante cerca del pueblo para cenar, lo bastante lejos para disfrutar del silencio y observar la aurora bajo un cielo oscuro.`,
  facts: [
    { label: 'Hoteles desde', value: '100 €/noche' },
    { label: 'Iglús de cristal desde', value: '350 €/noche' },
    { label: 'Aeropuerto más cercano', value: 'KTT 15 min' },
    { label: 'Pistas', value: '44' },
  ],
  highlights: [
    { title: 'Cabañas ski-in en Levitunturi', body: 'Los chalets en las laderas del Levifjäll dan acceso directo a la telecabina y a las largas pistas azules y rojas que rodean la montaña.' },
    { title: 'Un pueblo a pie con cocinas serias', body: 'El centro reúne restaurantes recomendados por Michelin, menús de degustación de reno y un núcleo denso de cafés, poco habitual en un destino de fell.' },
    { title: 'Carta completa de safaris', body: 'Huskys, motonieves, trineos de reno, salidas de fotografía de auroras y baño en hielo parten todos desde puntos de recogida dentro del pueblo.' },
    { title: 'Zonas de cielo oscuro para auroras', body: 'A 15 minutos en coche del pueblo, la contaminación lumínica cae a casi cero. Las cabañas en la cara norte del fell ofrecen el horizonte más limpio.' },
    { title: 'Bicicleta de montaña y sol de medianoche', body: 'En junio y julio el sol no se pone. Levi reabre telecabinas y senderos para descenso y bicicleta de montaña a campo través.' },
    { title: 'Apertura del eslalon de Copa del Mundo', body: 'Cada noviembre, la Copa del Mundo FIS de esquí alpino abre temporada en Levi Black, la nieve más temprana y fiable del circuito.' },
  ],
  whenToGo: `Noviembre – marzo es la temporada alta: nieve fiable, noches de aurora y safaris a pleno funcionamiento.
Finales de agosto – octubre trae la ruska (color otoñal) y las primeras ventanas de aurora sin aglomeraciones.
Junio – julio es el periodo del sol de medianoche: 24 horas de luz y una manera distinta de vivir las cabañas.`,
  howToGet: `Vuele a Kittilä (KTT). Vuelos directos invernales desde Londres, París, Ámsterdam, Frankfurt, Zúrich y Helsinki.
El traslado al pueblo de Levi es de 15 km. La mayoría de las cabañas premium incluye traslado privado.
Desde Helsinki, el tren nocturno a Kolari y 1 hora de traslado es una alternativa panorámica.`,
  stayTypes: [
    'Villas aurora de cristal, habitaciones con techo de cristal para una vista de horizonte a horizonte, normalmente para 2–4 huéspedes.',
    'Chalets ski-in en el fell, para 6–10 huéspedes, sauna privada y, a menudo, jacuzzi exterior y secadero de equipo.',
    'Cabañas de troncos junto al lago Immeljärvi, entorno forestal más tranquilo, a pocos minutos en coche del pueblo.',
    'Apartamentos de diseño en el centro del pueblo, restaurantes a pie, ideales para una primera vez en Laponia.',
  ],
  siblings: [
    { name: 'Ylláş', href: '/destinations/yllas', blurb: 'Fells gemelos más tranquilos, con las pistas más largas de Finlandia.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Puerta de entrada a la naturaleza salvaje del parque nacional UKK.' },
    { name: 'Inari', href: '/destinations/inari', blurb: 'Lago remoto, herencia sami y cielos del norte profundo.' },
  ],
  anchorProperties: [
    { name: 'Levin Iglut', propertyQuery: 'Levin Iglut', sid: 'destination_levi_levin_iglut', note: 'Iglús de cristal en el fell, las semanas punta se reservan con 10–12 meses de antelación.' },
    { name: 'Hotel Levi Panorama', propertyQuery: 'Hotel Levi Panorama', sid: 'destination_levi_panorama', note: 'En la ladera del fjell de Levi: el telecabina para en la puerta y se esquía desde el patio.' },
    { name: 'Lapland Hotels Sirkantähti', propertyQuery: 'Lapland Hotels Sirkantähti', sid: 'destination_levi_sirkantahti', note: 'Habitaciones y apartamentos en Levi, todos con sauna privada, a unos 500 m de las pistas.' },
    { name: 'Todos los alojamientos de Levi', href: HOTEL_SEARCH_FOR('es').levi, sid: 'destination_levi_all_search', note: 'Compare todos los hoteles y chalets de Levi en Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Desde el aeropuerto de Kittilä (KTT)', detail: 'Vuelos directos invernales LHR · CDG · AMS · FRA · ZRH · HEL. 15 km / 15 min al pueblo de Levi.' },
    { mode: 'bus', label: 'Autobús del aeropuerto KTT', detail: '8 € ida · 25 min · enlaza con cada vuelo.' },
    { mode: 'car', label: 'Taxi o traslado reservado', detail: '25–35 € al pueblo. La mayoría de las cabañas premium incluyen traslado privado.' },
    { mode: 'train', label: 'Tren nocturno a Kolari', detail: 'Coche cama VR desde Helsinki ~90 €, después 1 h de traslado a Levi. Alternativa panorámica en invierno.' },
  ],
  carRental: {
    href: CARS_FOR('es').fromKittila,
    sid: 'destination_levi_cars_ktt',
    airport: 'Recogida en el aeropuerto de Kittilä (KTT)',
    blurb: '15 min del pueblo de Levi · neumáticos con clavos de invierno de serie',
  },
  dayPlan: [
    { day: '01', title: 'Llegada · instalación · bajada corta', body: 'Aterrizaje en KTT a media tarde, traslado al pueblo, recogida del material en Zero Point. Una pista fácil antes del ocaso para probar equipo y piernas.' },
    { day: '02', title: 'Día completo de esquí · sauna nocturna', body: 'Los remontes abren a las 09:30. Comida en Tuikku, en lo alto de la telecabina. De vuelta antes de las 15:00, sauna en la cabaña. Alarma de aurora activada antes de dormir.' },
    { day: '03', title: 'Safari de huskys + cena en el pueblo', body: 'Safari en la granja de huskys por la mañana (reservar con dos semanas de antelación). Por la tarde, pueblo, Kammi-Bar para reno, Saamen Kammi para cocina tradicional. En noches despejadas, auroras desde la cima de Levi.' },
    { day: '04', title: 'Noche en cabaña aurora · día tranquilo', body: '15 min hacia el norte hasta un iglú de cristal para la última noche. Mañana lenta, sauna, ojos al cielo. Vuelo de regreso lo más temprano posible al día siguiente.' },
  ],
  seoTitle: 'Alojamiento en Levi: hoteles, cabañas e iglús | LaplandStays',
  seoDescription: 'Dónde alojarse en Levi: Lapland Hotels desde 100 €/noche, iglús en Levin Iglut desde 350 €, chalets ski-in desde 200 €. A 15 min del aeropuerto Kittilä.',
}

const ptBR: DestinationBody = {
  tagline: 'A maior estação de esqui da Finlândia, com restaurantes, safáris e cabanas com aurora a poucos minutos de carro dos teleféricos.',
  description: `Levi fica no município de Kittilä, cerca de 170 km ao norte do Círculo Polar Ártico. De um único teleférico nos anos 1960, cresceu até se tornar a maior estação de esqui da Finlândia: 44 pistas e 26 teleféricos em torno de um centro de vila compacto, que se percorre a pé.

É a porta de entrada mais simples para o turismo de luxo na Lapônia: o aeroporto de Kittilä fica a 15 minutos, a Copa do Mundo FIS de slalom abre a temporada todo novembro em Levi Black e as cabanas premium estão espalhadas pelo entorno dos fells, perto o bastante da vila para jantar, longe o bastante para o silêncio e a observação da aurora sob céu escuro.`,
  facts: [
    { label: 'Hotéis a partir de', value: '€100/noite' },
    { label: 'Iglus de vidro a partir de', value: '€350/noite' },
    { label: 'Aeroporto mais próximo', value: 'KTT 15 min' },
    { label: 'Pistas', value: '44' },
  ],
  highlights: [
    { title: 'Cabanas ski-in em Levitunturi', body: 'Os chalés nas encostas do Levifjäll dão acesso direto à gôndola e às longas pistas azuis e vermelhas que contornam a montanha.' },
    { title: 'Uma vila a pé com cozinhas de verdade', body: 'O centro reúne restaurantes recomendados pelo Michelin, menus degustação de rena e um adensado de cafés, raro em um destino de fell.' },
    { title: 'Cardápio completo de safáris', body: 'Huskies, snowmobiles, trenós puxados por renas, passeios fotográficos de aurora e mergulho em buraco no gelo partem todos de pontos de embarque dentro da vila.' },
    { title: 'Zonas de céu escuro para aurora', body: '15 minutos de carro fora da vila e a poluição luminosa cai a quase zero. As cabanas na face norte do fell oferecem o horizonte mais limpo.' },
    { title: 'Mountain bike de fell e sol da meia-noite', body: 'Em junho e julho o sol não se põe. Levi reabre gôndolas e trilhas para downhill e mountain bike cross-country.' },
    { title: 'Abertura do slalom da Copa do Mundo', body: 'Todo novembro, a Copa do Mundo FIS de esqui alpino abre em Levi Black, a neve mais cedo e confiável do circuito.' },
  ],
  whenToGo: `Novembro a março é a alta temporada: neve garantida, noites de aurora e safáris a pleno vapor.
Fim de agosto a outubro traz a ruska (folhagem de outono) e as primeiras janelas de aurora sem multidão.
Junho e julho é a temporada do sol da meia-noite: 24 horas de luz e um outro estilo de férias em cabana.`,
  howToGet: `Voe até Kittilä (KTT). Voos diretos de inverno saindo de Londres, Paris, Amsterdã, Frankfurt, Zurique e Helsinque.
O traslado até a vila de Levi é de 15 km. A maioria das cabanas premium inclui traslado privativo.
De Helsinque, o trem noturno até Kolari + 1 hora de traslado é uma alternativa panorâmica.`,
  stayTypes: [
    'Vilas aurora de vidro, quartos com teto de vidro para vista de horizonte a horizonte, em geral para 2–4 hóspedes.',
    'Chalés ski-in no fell, para 6–10 hóspedes, sauna privativa e, com frequência, hot tub ao ar livre e sala de secagem de equipamentos.',
    'Cabanas de tronco à beira do lago Immeljärvi, ambiente florestal mais tranquilo, a poucos minutos de carro da vila.',
    'Apartamentos de design no núcleo da vila, restaurantes a pé, ideais para quem visita a Lapônia pela primeira vez.',
  ],
  siblings: [
    { name: 'Ylläs', href: '/destinations/yllas', blurb: 'Fells gêmeos mais silenciosos, com as pistas mais longas da Finlândia.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Portal para a natureza selvagem do Parque Nacional UKK.' },
    { name: 'Inari', href: '/destinations/inari', blurb: 'Lago remoto, herança sámi e céus do norte profundo.' },
  ],
  anchorProperties: [
    { name: 'Levin Iglut', propertyQuery: 'Levin Iglut', sid: 'destination_levi_levin_iglut', note: 'Iglus de vidro no fell, semanas de pico são reservadas com 10–12 meses de antecedência.' },
    { name: 'Hotel Levi Panorama', propertyQuery: 'Hotel Levi Panorama', sid: 'destination_levi_panorama', note: 'Na encosta do fjell de Levi: o teleférico para na porta e a esquiada começa no pátio.' },
    { name: 'Lapland Hotels Sirkantähti', propertyQuery: 'Lapland Hotels Sirkantähti', sid: 'destination_levi_sirkantahti', note: 'Quartos e apartamentos em Levi, todos com sauna privativa, a cerca de 500 m das pistas.' },
    { name: 'Todas as hospedagens de Levi', href: HOTEL_SEARCH_FOR('pt-BR').levi, sid: 'destination_levi_all_search', note: 'Compare todos os hotéis e chalés de Levi no Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Do Aeroporto de Kittilä (KTT)', detail: 'Voos diretos de inverno LHR · CDG · AMS · FRA · ZRH · HEL. 15 km / 15 min até a vila de Levi.' },
    { mode: 'bus', label: 'Ônibus do aeroporto KTT', detail: '€8 só ida · 25 min · liga com todos os voos.' },
    { mode: 'car', label: 'Táxi ou traslado pré-agendado', detail: '€25–35 até a vila. A maioria das cabanas premium inclui traslado privativo.' },
    { mode: 'train', label: 'Trem noturno para Kolari', detail: 'Vagão-leito VR de Helsinque ~€90, depois 1 h de traslado até Levi. Alternativa panorâmica no inverno.' },
  ],
  carRental: {
    href: CARS_FOR('pt-BR').fromKittila,
    sid: 'destination_levi_cars_ktt',
    airport: 'Retirada no Aeroporto de Kittilä (KTT)',
    blurb: '15 min da vila de Levi · pneus com cravos de inverno de série',
  },
  dayPlan: [
    { day: '01', title: 'Chegada · acomodação · descida curta', body: 'Pouso em KTT no meio da tarde, traslado para a vila, retirada de equipamento na Zero Point. Uma pista fácil antes do pôr do sol para testar equipamento e pernas.' },
    { day: '02', title: 'Dia inteiro de esqui · sauna à noite', body: 'Os teleféricos abrem às 09:30. Almoço no Tuikku, no topo da gôndola. De volta às 15:00, sauna na cabana. Alarme de aurora ativado antes de dormir.' },
    { day: '03', title: 'Safári de huskies + jantar na vila', body: 'Safári em fazenda de huskies pela manhã (reserve com duas semanas de antecedência). À tarde, caminhe pela vila, Kammi-Bar para rena, Saamen Kammi para cozinha tradicional. Em noites claras, observe a aurora do topo de Levi.' },
    { day: '04', title: 'Noite em cabana com aurora · dia leve', body: '15 min ao norte até um iglu de vidro para a última noite. Manhã lenta, sauna, olhos no céu. Voo de volta no horário mais cedo possível no dia seguinte.' },
  ],
  seoTitle: 'Hospedagem em Levi: hotéis, cabanas e iglus | LaplandStays',
  seoDescription: 'Onde ficar em Levi: Lapland Hotels a partir de €100/noite, iglus de vidro a partir de €350, chalés ski-in a partir de €200. 15 min do aeroporto de Kittilä.',
}

const zhCN: DestinationBody = {
  tagline: '芬兰最大的滑雪度假区,餐厅、雪地探险和极光小屋距缆车仅数分钟车程。',
  description: `莱维位于基蒂莱市,大约在北极圈以北170公里。从1960年代的一部缆车起步,如今已发展为芬兰最大的滑雪度假区,拥有44条雪道、26部缆车,以及一个紧凑、可步行的村庄中心。

这里是进入拉普兰高端旅行最便捷的入口:基蒂莱机场15分钟可达,FIS世界杯回转赛每年11月在Levi Black揭幕,周围山地散布着高端小屋。离村中心近得可以前去用晚餐,远得足以享受寂静与暗空中的极光。`,
  facts: [
    { label: '酒店每晚', value: '100欧元起' },
    { label: '玻璃冰屋每晚', value: '350欧元起' },
    { label: '最近机场', value: 'KTT 15分钟' },
    { label: '雪道', value: '44条' },
  ],
  highlights: [
    { title: 'Levitunturi山上的滑入式小屋', body: 'Levifell山坡上的木屋可直接通往缆车,以及环山的长距离蓝、红色雪道。' },
    { title: '可步行村庄与认真做菜的厨房', body: '中心拥有米其林推荐餐厅、驯鹿试味菜单,以及紧凑的咖啡馆群落。这在山地度假区并不常见。' },
    { title: '完整的探险菜单', body: '哈士奇、雪地摩托、驯鹿雪橇、极光摄影团和冰洞游泳,全部从村内接送点出发。' },
    { title: '极光暗空区', body: '从村中心驱车15分钟,光污染几乎降至零。山北侧的小屋拥有最清晰的地平线视野。' },
    { title: '夏季山地骑行与午夜阳光', body: '六七月份太阳不落。莱维重新开放缆车和步道,提供速降和越野山地骑行。' },
    { title: '世界杯回转赛揭幕', body: '每年11月,FIS高山滑雪世界杯在Levi Black揭幕。巡回赛中最早、最稳定的雪况。' },
  ],
  whenToGo: `11月至3月为旺季:雪况稳定、极光夜色,以及全套探险项目。
8月底至10月迎来ruska(秋色)与首批不拥挤的极光观赏窗口。
6月至7月是午夜阳光季:24小时光照,带来另一种小屋度假体验。`,
  howToGet: `飞往基蒂莱(KTT)。冬季有伦敦、巴黎、阿姆斯特丹、法兰克福、苏黎世和赫尔辛基直飞航班。
到莱维村为15公里。大多数高端小屋包含私人接送。
从赫尔辛基出发,夜班火车至Kolari再加1小时接送是风景优美的备选方案。`,
  stayTypes: [
    '极光玻璃别墅。玻璃屋顶卧室,提供地平线到地平线的天空视野,通常入住2–4人。',
    '山间滑入式木屋。入住6–10人,配私人桑拿,常有户外热水浴缸和装备烘干室。',
    'Immeljärvi湖畔原木小屋。更安静的森林环境,距村中心数分钟车程。',
    '村中心设计师公寓。步行可达餐厅,适合首次造访拉普兰的旅客。',
  ],
  siblings: [
    { name: 'Ylläs', href: '/destinations/yllas', blurb: '更宁静的姊妹双峰,拥有芬兰最长的雪道。' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'UKK国家公园荒野的入口。' },
    { name: 'Inari', href: '/destinations/inari', blurb: '偏远湖泊、萨米传统与深远的北方天空。' },
  ],
  anchorProperties: [
    { name: 'Levin Iglut', propertyQuery: 'Levin Iglut', sid: 'destination_levi_levin_iglut', note: '山上的玻璃冰屋。旺季周次需提前10–12个月预订。' },
    { name: 'Hotel Levi Panorama', propertyQuery: 'Hotel Levi Panorama', sid: 'destination_levi_panorama', note: '坐落于莱维山坡,缆车停在门前,从院子即可滑雪出发。' },
    { name: 'Lapland Hotels Sirkantähti', propertyQuery: 'Lapland Hotels Sirkantähti', sid: 'destination_levi_sirkantahti', note: '莱维的客房与各种户型公寓,均配私人桑拿,距雪道约500米。' },
    { name: '莱维所有住宿', href: HOTEL_SEARCH_FOR('zh-CN').levi, sid: 'destination_levi_all_search', note: '在Trip.com比较莱维所有酒店与木屋。' },
  ],
  transport: [
    { mode: 'plane', label: '从基蒂莱机场(KTT)出发', detail: '冬季直飞LHR · CDG · AMS · FRA · ZRH · HEL。距莱维村15公里 / 15分钟。' },
    { mode: 'bus', label: 'KTT机场巴士', detail: '单程8欧元 · 25分钟 · 每趟航班均有衔接。' },
    { mode: 'car', label: '出租车或预订接送', detail: '到村中心25–35欧元。大多数高端小屋含私人接送。' },
    { mode: 'train', label: '至Kolari的夜班列车', detail: '从赫尔辛基出发的VR卧铺车约90欧元,再换乘1小时抵达莱维。冬季风景优美的备选。' },
  ],
  carRental: {
    href: CARS_FOR('zh-CN').fromKittila,
    sid: 'destination_levi_cars_ktt',
    airport: '基蒂莱机场(KTT)取车',
    blurb: '距莱维村15分钟 · 冬季标配防滑钉胎',
  },
  dayPlan: [
    { day: '01', title: '抵达 · 安顿 · 短滑一段', body: '下午抵达KTT,接送至村,Zero Point领取装备。日落前滑一条简单雪道,检查装备与状态。' },
    { day: '02', title: '全天滑雪 · 夜晚桑拿', body: '缆车9:30开放。缆车顶的Tuikku享用午餐。15:00前下山,在小屋桑拿。睡前打开极光警报。' },
    { day: '03', title: '哈士奇探险 + 村中晚餐', body: '上午前往哈士奇农场探险(提前两周预订)。下午漫步村中。Kammi-Bar吃驯鹿,Saamen Kammi品传统菜。晴朗的夜晚,可从莱维山顶观赏极光。' },
    { day: '04', title: '极光小屋夜 · 悠闲一日', body: '向北驱车15分钟,最后一晚入住玻璃冰屋。悠闲早晨,桑拿,仰望天空。次日尽早搭机返程。' },
  ],
  seoTitle: '莱维住宿:酒店、木屋与冰屋 | LaplandStays',
  seoDescription: '拉普兰莱维住宿指南:Lapland Hotels每晚100欧元起、Levin Iglut玻璃冰屋350欧元起、滑入式木屋200欧元起。距基蒂莱机场15分钟。已核实价格,直接预订。',
}

const sv: DestinationBody = {
  tagline: 'Finlands största skidort, med restauranger, safarier och norrskensstugor en kort bilresa från liftarna.',
  description: `Levi ligger i Kittilä kommun, omkring 170 km norr om polcirkeln. Från en enda lift på 1960-talet har orten vuxit till Finlands största skidort: 44 nedfarter och 26 liftar, med ett kompakt bycentrum som går att gå runt i.

Det är den enklaste vägen in i Lapplands lyxresande: Kittilä flygplats ligger 15 minuter bort, FIS-världscupens slalom öppnar säsongen varje november på Levi Black, och premiumstugorna ligger utspridda i fjällandskapet runtom, nära nog byn för en middag, långt nog bort för tystnad och norrsken under mörk himmel.`,
  facts: [
    { label: 'Hotell från', value: '100 €/natt' },
    { label: 'Glasigloor från', value: '350 €/natt' },
    { label: 'Närmaste flygplats', value: 'KTT 15 min' },
    { label: 'Nedfarter', value: '44' },
  ],
  highlights: [
    { title: 'Ski in-stugor på Levitunturi', body: 'Stugorna på Levifjällets sidor ger direkt tillgång till gondolen och till de långa blå och röda nedfarterna som ringar in fjället.' },
    { title: 'En by du går runt i, med kök att räkna med', body: 'I centrum finns Michelin-rekommenderade restauranger, avsmakningsmenyer på ren och ett tätt kluster av kaféer, ovanligt för en fjälldestination.' },
    { title: 'Hela safariutbudet', body: 'Hundspann, snöskotrar, renslädar, fototurer efter norrsken och bad i isvak startar alla från upphämtningsplatser inne i byn.' },
    { title: 'Mörka zoner för norrsken', body: 'Kör 15 minuter ut från byn och ljusföroreningarna faller till nästan noll. Stugorna på fjällets norra sida har den renaste horisonten.' },
    { title: 'Fjällcykling på sommaren och midnattssol', body: 'I juni och juli går solen inte ner. Levi öppnar gondoler och leder för downhill och cross country på mountainbike.' },
    { title: 'Världscupens slalompremiär', body: 'Varje november inleds FIS alpina världscup på Levi Black, den tidigaste och mest pålitliga snön i hela cupen.' },
  ],
  whenToGo: `November–mars är högsäsong: pålitlig snö, norrskensnätter och full safarisäsong.
Slutet av augusti–oktober ger ruska (höstfärgerna) och de första norrskensfönstren utan trängsel.
Juni–juli är midnattssolens tid: ljus dygnet runt och en annan sorts stugsemester.`,
  howToGet: `Flyg till Kittilä (KTT). Direkta vinterlinjer från London, Paris, Amsterdam, Frankfurt, Zürich och Helsingfors.
Till Levi by är det 15 km. De flesta premiumstugor inkluderar privat transfer.
Från Helsingfors är nattåg till Kolari plus en timmes transfer ett vackert alternativ.`,
  stayTypes: [
    'Norrskensvillor i glas, sovrum med glastak för utsikt från horisont till horisont, oftast för 2–4 gäster.',
    'Ski in-stugor på fjället, 6–10 gäster, egen bastu, ofta med badtunna utomhus och torkrum för utrustningen.',
    'Timmerstugor vid Immeljärvi, lugnare, i skogen, några minuters bilresa från byn.',
    'Designlägenheter i bykärnan, gångavstånd till restaurangerna, bra för dig som besöker Lappland första gången.',
  ],
  siblings: [
    { name: 'Ylläs', href: '/destinations/yllas', blurb: 'Lugnare tvillingfjäll med Finlands längsta nedfarter.' },
    { name: 'Saariselkä', href: '/destinations/saariselka', blurb: 'Porten till vildmarken i UKK nationalpark.' },
    { name: 'Inari', href: '/destinations/inari', blurb: 'Avlägsen sjö, samiskt arv och den djupa nordens himmel.' },
  ],
  anchorProperties: [
    { name: 'Levin Iglut', propertyQuery: 'Levin Iglut', sid: 'destination_levi_levin_iglut', note: 'Glasigloor på fjället, högsäsongsveckorna bokas 10–12 månader i förväg.' },
    { name: 'Hotel Levi Panorama', propertyQuery: 'Hotel Levi Panorama', sid: 'destination_levi_panorama', note: 'I Levifjällets sluttning: gondolen stannar vid dörren och skidåkningen börjar på gården.' },
    { name: 'Lapland Hotels Sirkantähti', propertyQuery: 'Lapland Hotels Sirkantähti', sid: 'destination_levi_sirkantahti', note: 'Rum och lägenheter i Levi, alla med egen bastu, cirka 500 m från backarna.' },
    { name: 'Alla boenden i Levi', href: HOTEL_SEARCH_FOR('sv').levi, sid: 'destination_levi_all_search', note: 'Jämför alla hotell och stugor i Levi på Trip.com.' },
  ],
  transport: [
    { mode: 'plane', label: 'Från Kittilä flygplats (KTT)', detail: 'Direkta vinterflyg LHR · CDG · AMS · FRA · ZRH · HEL. 15 km / 15 min till Levi by.' },
    { mode: 'bus', label: 'Flygbussen från KTT', detail: '8 € enkel resa · 25 min · möter varje flyg.' },
    { mode: 'car', label: 'Taxi eller förbokad transfer', detail: '25–35 € till byn. De flesta premiumstugor inkluderar privat transfer.' },
    { mode: 'train', label: 'Nattåg till Kolari', detail: 'VR:s sovvagn från Helsingfors ca 90 €, sedan 1 h transfer till Levi. Vackert alternativ på vintern.' },
  ],
  carRental: {
    href: CARS_FOR('sv').fromKittila,
    sid: 'destination_levi_cars_ktt',
    airport: 'Upphämtning på Kittilä flygplats (KTT)',
    blurb: '15 min från Levi by · dubbdäck som standard på vintern',
  },
  dayPlan: [
    { day: '01', title: 'Ankomst · landa in · en kort tur', body: 'Landning på KTT tidig eftermiddag, transfer till byn, hämta hyrutrustning på Zero Point. En lätt nedfart innan solnedgången för att testa utrustning och ben.' },
    { day: '02', title: 'Full skiddag · bastu på kvällen', body: 'Liftarna öppnar 09:30. Lunch på Tuikku högst upp vid gondolen. Nere vid 15:00, bastu i stugan. Norrskenslarmet på innan du somnar.' },
    { day: '03', title: 'Hundspannssafari + middag i byn', body: 'Safari på huskygård på morgonen (boka 2 veckor i förväg). Promenad i byn på eftermiddagen, Kammi-Bar för ren, Saamen Kammi för det traditionella. En klar kväll spanar du efter norrsken från Levitoppen.' },
    { day: '04', title: 'Natt i norrskensstuga · en lugn dag', body: 'Kör 15 min norrut till en glasigloo för sista natten. Långsam morgon, bastu, titta på himlen. Tidigast möjliga flyg hem nästa morgon.' },
  ],
  seoTitle: 'Boende i Levi: hotell, stugor och igloor | LaplandStays',
  seoDescription: 'Var du bor i Levi, Lappland: Lapland Hotels från 100 €/natt, glasigloor på Levin Iglut från 350 €, ski in-stugor från 200 €. 15 min från Kittilä flygplats.',
}

export default function Levi() {
  return (
    <DestinationPage
      slug="levi"
      name="Levi"
      heroImage="/images/levi-hero.webp"
      ogImage="https://laplandstays.com/og-levi.jpg"
      seoKeywords={['levi accommodation', 'levi hotel', 'levi cabin rental', 'levi glass igloo', 'levin iglut', 'levi ski chalet', 'kittilä cabin', 'luxury levi accommodation']}
      body={{ en, fi, de, ja, es, 'pt-BR': ptBR, 'zh-CN': zhCN, ko, fr, it, nl, sv }}
      highlightLinks={{
        0: { base: 'https://laplandskiresorts.com', path: '/resort/levi/' },
        3: { base: 'https://laplandvibes.com', path: '/northern-lights/' },
      }}
    />
  )
}
