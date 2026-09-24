// Copy for the PriceGuide home-page section (lang: it).
import type { PriceGuideCopy } from './PriceGuide.copy.en'

const copy: PriceGuideCopy = {
  eyebrow: 'Livello di prezzo',
  heading: 'Alloggi in Lapponia, dal più caro al più economico',
  lead: "Aurore che scorrono sopra il tetto di vetro, una sauna già calda e, a colazione, una foresta innevata e silenziosa oltre la finestra. Cinque tipi di notte lappone, in ordine dall'irripetibile al quotidiano, con le strutture che stanno dietro a ciascuno. Quanto costa una notte cambia con la stagione e con la settimana, quindi la tariffa arriva dalla pagina di prenotazione, per le Sue date.",
  scale: { low: 'Più economico', high: 'Più caro' },
  tiers: [
    {
      name: 'Igloo di vetro',
      examples: ['Kakslauttanen Arctic Resort', 'Levin Iglut', 'Star Arctic Hotel', 'Aurora Village Ivalo', 'Nova Skyland Rovaniemi'],
      ctaLabel: 'Trova igloo di vetro',
    },
    {
      name: "Baite per l'aurora boreale",
      examples: ['Apukka Resort', 'Arctic TreeHouse Hotel', 'Arctic SnowHotel & Glass Igloos'],
      ctaLabel: "Trova baite per l'aurora",
    },
    {
      name: 'Hotel di neve e ghiaccio',
      examples: ['Lainio Snow Village (Kittilä)', 'Torassieppi Winter Village (Muonio)'],
      ctaLabel: 'Trova hotel di neve',
    },
    {
      name: 'Lodge nella natura selvaggia',
      examples: ['Muotka Wilderness Lodge (Inari)', 'Nellim Wilderness Hotel', 'Lumi Resort (Kittilä)'],
      ctaLabel: 'Trova lodge',
    },
    {
      name: 'Hotel e catene di baite della Lapponia',
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
