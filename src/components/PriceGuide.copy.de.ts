// Copy for the PriceGuide home-page section (lang: de).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Unterkunftspreise in Lappland',
  heading: 'Was eine Nacht in Lappland wirklich kostet',
  lead: 'Polarlichter, die über das Glasdach ziehen, eine bereits eingeheizte Sauna und beim Frühstück ein verschneiter, ganz stiller Wald vor dem Fenster, eine solche Nacht in Lappland kann 100 € kosten oder 1.500 €. Wir haben die tatsächlichen Preisspannen von 15 Unterkünften direkt von den Buchungsseiten zusammengetragen, damit Sie auf einen Blick sehen, welcher Traum in Ihr Budget passt.',
  tiers: [
    {
      name: 'Glasiglus',
      note: 'pro Nacht, pro Iglu',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: 'Glasiglus finden',
    },
    {
      name: 'Aurora- & Polarlicht-Hütten',
      note: 'pro Nacht, pro Hütte',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: 'Aurora-Hütten finden',
    },
    {
      name: 'Schnee- & Eishotels',
      note: 'pro Nacht, nur saisonal',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: 'Schneehotels finden',
    },
    {
      name: 'Wildnis-Lodges',
      note: 'pro Nacht, nur Suiten',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: 'Wildnis-Lodges finden',
    },
    {
      name: 'Lappland-Hotels & Hüttenketten',
      note: 'pro Nacht, pro Zimmer',
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
