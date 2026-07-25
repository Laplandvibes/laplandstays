// Copy for the PriceGuide home-page section (lang: it).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Prezzi degli alloggi in Lapponia',
  heading: 'Quanto costa davvero una notte in Lapponia',
  lead: "L'aurora che scivola oltre il soffitto di vetro, la sauna già calda, a colazione una foresta ovattata di neve fuori dalla finestra, una notte così in Lapponia può costare 100 € come 1500 €. Abbiamo raccolto le fasce di prezzo reali di 15 strutture direttamente dalle pagine di prenotazione, così vede a colpo d'occhio quale sogno è alla portata del suo budget.",
  tiers: [
    {
      name: 'Igloo di vetro',
      note: 'a notte, per igloo',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: 'Trova igloo di vetro',
    },
    {
      name: "Baite per l'aurora boreale",
      note: 'a notte, per baita',
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: "Trova baite per l'aurora",
    },
    {
      name: 'Hotel di neve e ghiaccio',
      note: 'a notte, solo stagionale',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: 'Trova hotel di neve',
    },
    {
      name: 'Lodge nella natura selvaggia',
      note: 'a notte, solo suite',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: 'Trova lodge',
    },
    {
      name: 'Hotel e catene di baite della Lapponia',
      note: 'a notte, per camera',
      examples: ['Lapland Hotels (più resort)', 'Harriniva (Muonio)'],
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
