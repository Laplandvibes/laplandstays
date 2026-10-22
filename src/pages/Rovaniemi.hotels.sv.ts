import type { RovaniemiHotelsCopy } from './Rovaniemi.hotels.types'

/**
 * Hotell i Rovaniemi efter område, svenska (22.10.2026). Översatt från Rovaniemi.hotels.en.ts; varje
 * uppgift kommer från hotellets egen webbplats, läst 22.10.2026. Ingen siffra som inte står i den
 * engelska texten (numeroportti). Nätverkets svenska former: Jultomtens by, polcirkeln, Kemi älv,
 * Ounasjoki, fjället Ounasvaara (som i sajtens sv-text), bastu/bastur, badtunna. Tilltal: du.
 */
const sv: RovaniemiHotelsCopy = {
  intro: '20 hotell i fyra områden. Varje namn öppnar hotellets egen sida hos vår bokningspartner, med priser för dina resdatum.',
  groups: [
    {
      title: 'Centrum',
      items: [
        { key: 'arcticLight', note: 'Rovaniemis före detta stadshus, byggt 1949, i dag ett boutiquehotell med 57 rum; en del har egen bastu.' },
        { key: 'scandicRovaniemiCity', note: 'På Koskikatu intill köpcentrumen. Flygbussen stannar vid dörren, och Superior Sauna-rummen har egen bastu.' },
        { key: 'scandicPohjanhovi', note: 'Vid Kemi älvs strand. Många rum har utsikt över älven, och på vintern börjar snöskoterlederna utanför hotellet.' },
        { key: 'arcticCityHotel', note: '90 rum på Pekankatu. Frukost, bastu, parkering och wifi ingår i alla prisalternativ, och flygbussen stannar 300 m bort.' },
        { key: 'sokosVaakuna', note: '159 rum på Koskikatu, med gemensamma bastur som har öppet varje kväll.' },
        { key: 'santasHotelSantaClaus', note: 'I centrum på Korkalonkatu, cirka 10 km från flygplatsen, med egen bastuavdelning.' },
        { key: 'postmasterHotel', note: 'Ett restaurerat posthus från 1950-talet med 49 rum; en del sviter har pentry och bastu.' },
        { key: 'hotelAakenus', note: 'Familjedrivet, i ett lugnt område en kort promenad från centrum: 45 rum och 20 lägenheter med kök.' },
      ],
    },
    {
      title: 'Fjället Ounasvaara',
      items: [
        { key: 'skyOunasvaara', note: 'På toppen av Ounasvaara, 4 km från centrum och 20 m från närmaste backe; rum med bastu och familjerum.' },
        { key: 'laplandHotelsOunasvaara', note: 'Stugor och semesterlägenheter mellan Kemi älv och skidbackarna, alla med egen bastu och kök; 3 km från centrum.' },
        { key: 'santasport', note: 'Ett olympiskt träningscenter intill lederna på Ounasvaara, 2 km från centrum; en del rum har bastu och balkong.' },
      ],
    },
    {
      title: 'Jultomtens by och polcirkeln',
      items: [
        { key: 'santaClausHolidayVillage', note: 'På polcirkeln i Jultomtens by: stugor, sviter och glasigloostugor, alla med egen bastu.' },
        { key: 'santasIgloosArcticCircle', note: 'Glasigloor mot norr i Jultomtens by, var och en med norrskenslarm; 5 km från flygplatsen.' },
        { key: 'arcticTreeHouse', note: 'Sviter med en vägg helt i glas, i en skogssluttning 100 m från SantaPark och 2,2 km från Jultomtens by.' },
        { key: 'novaSkyland', note: 'Alla rum och stugor har egen bastu; cirka 300 m från Jultomtens by och 5 minuter med bil från flygplatsen.' },
        { key: 'glassResort', note: 'Lägenheter med glasväggar, egen bastu och badtunna utomhus, i en skog inne i Jultomtens by.' },
      ],
    },
    {
      title: 'Utanför staden',
      items: [
        { key: 'apukka', note: 'Glasigloor mellan två vildmarkssjöar, 18 km från staden, med anläggningens egen skyttelbuss till centrum.' },
        { key: 'arcticSnowHotel', note: 'Snö- och ishotell från den 15 december och uppvärmda glasigloor med 360°-glastak, 26 km från centrum.' },
        { key: 'invisibleForest', note: 'Sviter i speglande glas med egen bastu, badtunna utomhus och kök, vid älven Ounasjoki, mindre än 10 minuters bilväg från centrum.' },
        { key: 'silverBirch', note: 'Bara fem glasstugor, tre meter över marken vid en sjö nära Oikarainen; de säljs för vistelser på flera nätter.' },
      ],
    },
  ],
}

export default sv
