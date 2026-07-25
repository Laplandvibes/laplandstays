// Copy for the PriceGuide home-page section (lang: it).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Prezzi degli alloggi in Lapponia',
  heading: 'Quanto costa davvero una notte in Lapponia',
  lead: "L'aurora che scivola oltre il soffitto di vetro, la sauna già calda, a colazione una foresta ovattata di neve fuori dalla finestra, una notte così in Lapponia può costare €100 come €1,500. Abbiamo raccolto le fasce di prezzo reali di 15 strutture direttamente dalle pagine di prenotazione, così vede a colpo d'occhio quale sogno è alla portata del suo budget.",
  propertiesLabel: 'Strutture:',
  tiers: [
    {
      name: 'Igloo di vetro',
      note: 'a notte, per igloo',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      body: "Camere e igloo con tetto di vetro costruiti apposta per osservare l'aurora. La categoria più cara, tetti in vetro, località remote e disponibilità limitata fanno sì che Kakslauttanen si esaurisca con 8–12 mesi di anticipo.",
      ctaLabel: 'Trova igloo di vetro',
    },
    {
      name: "Baite per l'aurora boreale",
      note: 'a notte, per baita',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      body: "Il classico soggiorno in baita lappone: finestre rivolte verso l'aurora, sauna privata e foresta tutt'intorno. Il miglior rapporto prezzo-esperienza per coppie e piccoli gruppi a caccia dell'aurora.",
      ctaLabel: "Trova baite per l'aurora",
    },
    {
      name: 'Hotel di neve e ghiaccio',
      note: 'a notte, solo stagionale',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      body: 'Territorio da una notte sola, scolpiti nel ghiaccio ogni dicembre, sciolti ogni aprile. Spogliatoi riscaldati, sacchi a pelo termici e una storia che racconterà per sempre.',
      ctaLabel: 'Trova hotel di neve',
    },
    {
      name: 'Lodge nella natura selvaggia',
      note: 'a notte, solo suite',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      body: "Pensati per i cacciatori di aurore che vogliono il servizio. Piccoli, remoti, con guide. La natura selvaggia in versione all inclusive, cucina d'autore, husky a portata di mano e l'intero menù di safari direttamente dalla lobby.",
      ctaLabel: 'Trova lodge',
    },
    {
      name: 'Hotel e catene di baite della Lapponia',
      note: 'a notte, per camera',
      examples: ['Lapland Hotels (più resort)', 'Harriniva (Muonio)'],
      body: "Il punto d'ingresso più affidabile, hotel e catene di baite affermati a Levi, Ylläs, Saariselkä, Rovaniemi e Muonio. Ristoranti raggiungibili a piedi, safari in partenza dalla porta.",
      ctaLabel: 'Trova hotel e baite',
    },
  ],
  tip: {
    label: 'Consiglio di prenotazione.',
    pre: 'Gli igloo di vetro di Kakslauttanen e Levin Iglut si esauriscono con ',
    strong: '8–12 mesi di anticipo',
    post: " per l'alta stagione dell'aurora (novembre – marzo). Se uno di questi è il fulcro del viaggio, lo prenoti per primo e costruisca il resto dell'itinerario attorno a quella data.",
  },
}

export default copy
