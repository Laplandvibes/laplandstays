import type { RovaniemiHotelsCopy } from './Rovaniemi.hotels.types'

/**
 * Hotel a Rovaniemi per zona, italiano (22.10.2026). Tradotto da Rovaniemi.hotels.en.ts: stessi gruppi,
 * stesso ordine, nessun numero e nessun fatto che non sia nel testo inglese (numeroportti). Termini come
 * nella pagina italiana sugli igloo di vetro: Villaggio di Babbo Natale, Circolo Polare Artico, allarme
 * aurora, chalet, le Sue date di viaggio. Forma di cortesia: Lei. Vie come «in Koskikatu».
 */
const it: RovaniemiHotelsCopy = {
  intro: "20 hotel in quattro zone. Ogni nome apre la pagina di quell'hotel presso il nostro partner di prenotazione, con i prezzi per le Sue date di viaggio.",
  groups: [
    {
      title: "Centro città",
      items: [
        { key: 'arcticLight', note: "L'ex municipio di Rovaniemi, costruito nel 1949, oggi è un boutique hotel con 57 camere; alcune hanno la sauna privata." },
        { key: 'scandicRovaniemiCity', note: "In Koskikatu, accanto ai centri commerciali. Il bus per l'aeroporto si ferma davanti all'ingresso e le camere Superior Sauna hanno la sauna privata." },
        { key: 'scandicPohjanhovi', note: "Sulla riva del Kemijoki. Molte camere danno sul fiume e d'inverno i percorsi in motoslitta partono davanti all'hotel." },
        { key: 'arcticCityHotel', note: "90 camere in Pekankatu. Colazione, sauna, parcheggio e Wi-Fi sono inclusi in ogni tariffa; la fermata del bus per l'aeroporto è a 300 m." },
        { key: 'sokosVaakuna', note: "159 camere in Koskikatu, con saune in comune aperte ogni sera." },
        { key: 'santasHotelSantaClaus', note: "In centro, in Korkalonkatu, a circa 10 km dall'aeroporto, con una propria zona sauna." },
        { key: 'postmasterHotel', note: "Un ex ufficio postale degli anni '50, restaurato, con 49 camere; alcune suite hanno angolo cottura e sauna." },
        { key: 'hotelAakenus', note: "A gestione familiare, in una zona tranquilla a pochi passi dal centro: 45 camere e 20 appartamenti con cucina." },
      ],
    },
    {
      title: "Fjäll Ounasvaara",
      items: [
        { key: 'skyOunasvaara', note: "In cima all'Ounasvaara, a 4 km dal centro e a 20 m dalla pista più vicina; camere con sauna e camere per famiglie." },
        { key: 'laplandHotelsOunasvaara', note: "Chalet e appartamenti per le vacanze tra il fiume Kemijoki e le piste da sci, tutti con sauna privata e cucina; a 3 km dal centro." },
        { key: 'santasport', note: "Centro di preparazione olimpica accanto ai percorsi dell'Ounasvaara, a 2 km dal centro città; alcune camere hanno sauna e balcone." },
      ],
    },
    {
      title: "Villaggio di Babbo Natale e Circolo Polare Artico",
      items: [
        { key: 'santaClausHolidayVillage', note: "Sul Circolo Polare Artico, nel Villaggio di Babbo Natale: cottage, suite e cottage-igloo di vetro, tutti con sauna privata." },
        { key: 'santasIgloosArcticCircle', note: "Igloo di vetro rivolti a nord nel Villaggio di Babbo Natale, ognuno con allarme aurora; a 5 km dall'aeroporto." },
        { key: 'arcticTreeHouse', note: "Suite con un'intera parete di vetro su un pendio nel bosco, a 100 m da SantaPark e a 2,2 km dal Villaggio di Babbo Natale." },
        { key: 'novaSkyland', note: "Ogni camera e ogni chalet ha la sauna privata; a circa 300 m dal Villaggio di Babbo Natale e a 5 minuti d'auto dall'aeroporto." },
        { key: 'glassResort', note: "Appartamenti in vetro con sauna privata e vasca idromassaggio all'aperto, in un bosco all'interno del Villaggio di Babbo Natale." },
      ],
    },
    {
      title: "Fuori città",
      items: [
        { key: 'apukka', note: "Igloo di vetro tra due laghi nella natura selvaggia, a 18 km dalla città; il resort ha una sua navetta per il centro." },
        { key: 'arcticSnowHotel', note: "Un hotel di neve e ghiaccio dal 15 dicembre e igloo di vetro riscaldati con tetto di vetro a 360°, a 26 km dal centro." },
        { key: 'invisibleForest', note: "Suite in vetro a specchio con sauna privata, vasca idromassaggio all'aperto e cucina, lungo il fiume Ounasjoki, a meno di 10 minuti dal centro in auto." },
        { key: 'silverBirch', note: "Solo cinque cabine di vetro a tre metri da terra, sulla riva di un lago vicino a Oikarainen, prenotabili per soggiorni di più notti." },
      ],
    },
  ],
}

export default it
