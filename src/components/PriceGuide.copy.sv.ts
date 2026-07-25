// Copy for the PriceGuide home-page section (lang: sv).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Boendepriser i Lappland',
  heading: 'Vad en natt i Lappland faktiskt kostar',
  lead: 'Norrsken som glider förbi glastaket, en bastu som redan är varm, en snötyst skog utanför fönstret vid frukosten: en sådan natt i Lappland kan kosta 100 € eller 1 500 €. Vi samlade de verkliga prisintervallen för 15 boenden direkt från bokningssidorna, så att du med en blick ser vilken dröm din budget räcker till.',
  propertiesLabel: 'Boenden:',
  tiers: [
    {
      name: 'Glasiglor',
      note: 'per natt, per iglo',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      body: 'Rum och iglor med glastak, byggda särskilt för att titta på norrsken. Den dyraste kategorin: glastak, avlägsna platser och ett begränsat utbud gör att Kakslauttanen är fullbokat 8–12 månader i förväg.',
      ctaLabel: 'Hitta glasiglor',
    },
    {
      name: 'Norrskensstugor',
      note: 'per natt, per stuga',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      body: 'Klassiskt stugboende i Lappland med fönster mot norrskenet, egen bastu och skog runt omkring. Bäst förhållande mellan pris och upplevelse för par och små sällskap som jagar norrsken.',
      ctaLabel: 'Hitta norrskensstugor',
    },
    {
      name: 'Snö- och ishotell',
      note: 'per natt, endast under säsong',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      body: 'Marker för en enda natt, huggna ur is varje december, bortsmälta varje april. Varma omklädningsrum, termosovsäckar och en historia du berättar för alltid.',
      ctaLabel: 'Hitta snöhotell',
    },
    {
      name: 'Vildmarkslodger',
      note: 'per natt, endast sviter',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      body: 'Byggda för norrskensjägare som vill ha service. Små, avlägsna, med guide. Tänk vildmark med allt inkluderat, kockar i köket, husky-turer nära och ett helt safariutbud direkt från lobbyn.',
      ctaLabel: 'Hitta vildmarkslodger',
    },
    {
      name: 'Lapplandshotell och stugkedjor',
      note: 'per natt, per rum',
      examples: ['Lapland Hotels (flera orter)', 'Harriniva (Muonio)'],
      body: 'Den mest pålitliga ingången: etablerade Lapplandshotell och stugkedjor i Levi, Ylläs, Saariselkä, Rovaniemi och Muonio. Gångavstånd till restauranger, safarier utgår från dörren.',
      ctaLabel: 'Hitta hotell och stugor',
    },
  ],
  tip: {
    label: 'Bokningstips.',
    pre: 'Glasiglorna på Kakslauttanen och Levin Iglut är slutbokade ',
    strong: '8–12 månader i förväg',
    post: ' inför högsäsongen för norrsken (november – mars). Om någon av dem är ankaret för din resa, boka den först och planera resten av resan kring det datumet.',
  },
}

export default copy
