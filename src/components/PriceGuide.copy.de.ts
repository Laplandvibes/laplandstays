// Copy for the PriceGuide home-page section (lang: de).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Unterkunftspreise in Lappland',
  heading: 'Was eine Nacht in Lappland wirklich kostet',
  lead: 'Polarlichter, die über das Glasdach ziehen, eine bereits eingeheizte Sauna und beim Frühstück ein verschneiter, ganz stiller Wald vor dem Fenster, eine solche Nacht in Lappland kann €100 kosten oder €1,500. Wir haben die tatsächlichen Preisspannen von 15 Unterkünften direkt von den Buchungsseiten zusammengetragen, damit Sie auf einen Blick sehen, welcher Traum in Ihr Budget passt.',
  propertiesLabel: 'Unterkünfte:',
  tiers: [
    {
      name: 'Glasiglus',
      note: 'pro Nacht, pro Iglu',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      body: 'Zimmer und Iglus mit Glasdach, gebaut speziell für die Polarlichtbeobachtung. Die teuerste Kategorie, Glasdächer, abgelegene Lagen und knappes Angebot bedeuten: Kakslauttanen ist 8–12 Monate im Voraus ausgebucht.',
      ctaLabel: 'Glasiglus finden',
    },
    {
      name: 'Aurora- & Polarlicht-Hütten',
      note: 'pro Nacht, pro Hütte',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      body: 'Klassische Lappland-Hütten mit Aurora-Fenstern, eigener Sauna und Wald ringsum. Das beste Verhältnis von Preis zu Erlebnis für Paare und kleine Gruppen auf Polarlichtjagd.',
      ctaLabel: 'Aurora-Hütten finden',
    },
    {
      name: 'Schnee- & Eishotels',
      note: 'pro Nacht, nur saisonal',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      body: 'Ein Erlebnis für genau eine Nacht, jeden Dezember aus Eis gebaut, jeden April geschmolzen. Warme Umkleiden, Thermoschlafsäcke und eine Geschichte, die Sie für immer erzählen werden.',
      ctaLabel: 'Schneehotels finden',
    },
    {
      name: 'Wildnis-Lodges',
      note: 'pro Nacht, nur Suiten',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      body: 'Gebaut für Polarlichtjäger, die Service wollen. Klein, abgelegen, geführt. Wildnis als All-inclusive, Küchenchefs, Huskys vor der Tür und das volle Safari-Programm direkt aus der Lobby.',
      ctaLabel: 'Wildnis-Lodges finden',
    },
    {
      name: 'Lappland-Hotels & Hüttenketten',
      note: 'pro Nacht, pro Zimmer',
      examples: ['Lapland Hotels (mehrere Resorts)', 'Harriniva (Muonio)'],
      body: 'Der verlässlichste Einstieg, etablierte Lappland-Hotels und Hüttenketten in Levi, Ylläs, Saariselkä, Rovaniemi und Muonio. Restaurants zu Fuß erreichbar, Safaris starten direkt vor der Tür.',
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
