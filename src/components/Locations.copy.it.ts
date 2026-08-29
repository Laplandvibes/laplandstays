import type { Copy } from './Locations.copy.types'

const copy: Copy = {
    eyebrow: 'Dove soggiornare in Lapponia',
    h2: 'Quattro mete, quattro viaggi diversi',
    lead: "Levi per l'accesso comodo e la vita di paese. Ylläs per il silenzio. Saariselkä per gli igloo di vetro sotto l'aurora. Inari per la quiete del profondo Nord che quasi nessuno raggiunge.",
    pricesLabel: 'Prezzi:',
    checkAvailability: 'Verifica disponibilità',
    guideTo: (name: string) => `Guida a ${name}`,
    locations: [
      { name: 'Levi', tagline: 'Il cuore del lusso lappone', description: "La più grande stazione sciistica della Finlandia, con un paese a piedi alla base del fjell. Le strutture vanno dagli appartamenti Lapland Hotels nel centro agli chalet ski-in e agli chalet di vetro di Levin Iglut, abbastanza vicini per la cena in paese, abbastanza lontani per osservare l'aurora con cielo scuro.", highlights: ['Chalet ski-in', 'Ristoranti e vita notturna', 'Menù completo di safari'], priceFrom: 'Hotel a partire da 100 €/notte · igloo di vetro a partire da 350 €' },
      { name: 'Ylläs', tagline: 'Natura nordica intatta', description: "Due fjell, le piste più lunghe della Finlandia e nessuna sovrastruttura da resort, Ylläs è la sorella più silenziosa. Le strutture sono chalet di tronchi distribuiti ai margini del parco nazionale Pallas-Yllästunturi, perfetti quando il silenzio e l'accesso alle piste contano più del trambusto del paese.", highlights: ['Regno dello sci di fondo', 'Chalet con vista sul fjell', 'Senza folla'], priceFrom: 'Chalet di tronchi a partire da 150 €/notte' },
      { name: 'Saariselkä', tagline: "La porta dell'Artico", description: "Confina con il parco nazionale Urho Kekkonen, una delle ultime grandi aree selvagge d'Europa. Questa è la terra degli igloo di vetro di Saariselkä, Kakslauttanen, Star Arctic e Muotka, dove i tetti vetrati incontrano i fiumi della corsa all'oro e l'aria diventa davvero gelida.", highlights: ['Terra di igloo di vetro', 'Accesso al parco nazionale', "Zona profonda dell'aurora"], priceFrom: 'Igloo di vetro Kakslauttanen a partire da 400 €/notte · lodge a partire da 200 €' },
      { name: 'Inari', tagline: 'Cultura sámi, laghi artici', description: "Dove il patrimonio sámi incontra l'immenso lago Inari gelato. La più remota ed esclusiva delle quattro, chalet su rive private, Nellim Wilderness Lodge e ville aurora a Ivalo, per chi misura un viaggio in quiete e non in tappe.", highlights: ['Lago Inari', 'Cultura sámi', 'Lontananza del Nord profondo'], priceFrom: 'Chalet sul lago a partire da 200 €/notte · Aurora Village a partire da 300 €' },
    ],
  }

export default copy