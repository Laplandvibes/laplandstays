// Copy for the PriceGuide home-page section (lang: sv).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Prisnivå',
  heading: 'Boenden i Lappland, från dyrast till billigast',
  lead: 'Norrsken som glider förbi glastaket, en bastu som redan är varm och vid frukosten en snötyst skog utanför fönstret. Fem sorters Lapplandsnatt, ordnade från det som händer en gång i livet till det vardagliga, med boendena bakom varje sort. Vad en natt kostar svänger med säsongen och veckan, så priset kommer från bokningssidan, för dina egna datum.',
  scale: { low: 'Billigare', high: 'Dyrare' },
  tiers: [
    {
      name: 'Glasigloor',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: 'Hitta glasigloor',
    },
    {
      name: 'Norrskensstugor',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: 'Hitta norrskensstugor',
    },
    {
      name: 'Snö- och ishotell',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: 'Hitta snöhotell',
    },
    {
      name: 'Vildmarkslodger',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: 'Hitta vildmarkslodger',
    },
    {
      name: 'Lapplandshotell och stugkedjor',
      examples: ['Lapland Hotels (flera orter)', 'Harriniva (Muonio)'],
      ctaLabel: 'Hitta hotell och stugor',
    },
  ],
  tip: {
    label: 'Bokningstips.',
    pre: 'Glasigloorna på Kakslauttanen och Levin Iglut är slutbokade ',
    strong: '8–12 månader i förväg',
    post: ' inför högsäsongen för norrsken (november – mars). Om någon av dem är ankaret för din resa, boka den först och planera resten av resan kring det datumet.',
  },
}

export default copy
