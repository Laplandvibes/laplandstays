// Copy for the PriceGuide home-page section (lang: sv).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Boendepriser i Lappland',
  heading: 'Vad en natt i Lappland faktiskt kostar',
  lead: 'Norrsken som glider förbi glastaket, en bastu som redan är varm, en snötyst skog utanför fönstret vid frukosten: en sådan natt i Lappland kan kosta 100 € eller 1 500 €. Vi samlade de verkliga prisintervallen för 15 boenden direkt från bokningssidorna, så att du med en blick ser vilken dröm din budget räcker till.',
  tiers: [
    {
      name: 'Glasiglor',
      note: 'per natt, per iglo',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: 'Hitta glasiglor',
    },
    {
      name: 'Norrskensstugor',
      note: 'per natt, per stuga',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: 'Hitta norrskensstugor',
    },
    {
      name: 'Snö- och ishotell',
      note: 'per natt, endast under säsong',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: 'Hitta snöhotell',
    },
    {
      name: 'Vildmarkslodger',
      note: 'per natt, endast sviter',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: 'Hitta vildmarkslodger',
    },
    {
      name: 'Lapplandshotell och stugkedjor',
      note: 'per natt, per rum',
      examples: ['Lapland Hotels (flera orter)', 'Harriniva (Muonio)'],
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
