// Copy for the PriceGuide home-page section (lang: de).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Preisniveau',
  heading: 'Lappland-Unterkünfte, von teuer bis günstig',
  lead: 'Polarlichter, die über das Glasdach ziehen, eine bereits eingeheizte Sauna und beim Frühstück ein verschneiter, ganz stiller Wald vor dem Fenster. Fünf Arten von Lappland-Nacht, geordnet vom Einmaligen bis zum Alltäglichen, mit den Unterkünften hinter jeder Stufe. Was eine Nacht kostet, schwankt mit Saison und Woche, deshalb kommt der Preis von der Buchungsseite, für Ihre eigenen Daten.',
  scale: { low: 'Günstiger', high: 'Teurer' },
  tiers: [
    {
      name: 'Glasiglus',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: 'Glasiglus finden',
    },
    {
      name: 'Aurora- & Polarlicht-Hütten',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: 'Aurora-Hütten finden',
    },
    {
      name: 'Schnee- & Eishotels',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: 'Schneehotels finden',
    },
    {
      name: 'Wildnis-Lodges',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: 'Wildnis-Lodges finden',
    },
    {
      name: 'Lappland-Hotels & Hüttenketten',
      examples: ['Lapland Hotels (mehrere Resorts)', 'Harriniva (Muonio)'],
      ctaLabel: 'Hotels & Hütten finden',
    },
  ],
  tip: {
    label: 'Buchungstipp.',
    pre: 'Glasiglus in Kakslauttanen und Levin Iglut sind für die Polarlicht-Hauptsaison (November – März) ',
    strong: '8–12 Monate im Voraus',
    post: ' ausgebucht. Wenn eines davon der Anker Ihrer Reise ist, reservieren Sie es zuerst und planen Sie den Rest der Reise um dieses Datum herum.',
  },
}

export default copy
