import type { RovaniemiHotelsCopy } from './Rovaniemi.hotels.types'

/**
 * Hotels in Rovaniemi per gebied, Nederlands (22.10.2026). Vertaald uit Rovaniemi.hotels.en.ts; elke notitie
 * komt van de eigen website van het hotel (gelezen 22.10.2026). Zelfde getallen als EN, geen nieuwe feiten
 * (numeroportti). Aanspreekvorm u (netwerkstandaard); de knoppen openen voor nl Trip.com, de intro noemt geen naam.
 */
const nl: RovaniemiHotelsCopy = {
  intro: '20 hotels in vier gebieden. Elke naam opent de eigen pagina van dat hotel bij onze boekingspartner, met prijzen voor uw reisdata.',
  groups: [
    {
      title: 'Stadscentrum',
      items: [
        { key: 'arcticLight', note: 'Het voormalige stadhuis van Rovaniemi, gebouwd in 1949, nu een boutiquehotel met 57 kamers; sommige hebben een eigen sauna.' },
        { key: 'scandicRovaniemiCity', note: 'Aan de Koskikatu naast de winkelcentra; de luchthavenbus stopt voor de deur, en de Superior Sauna-kamers hebben een eigen sauna.' },
        { key: 'scandicPohjanhovi', note: 'Aan de oever van de Kemijoki; veel kamers kijken uit over de rivier, en in de winter beginnen er sneeuwscooterroutes voor het hotel.' },
        { key: 'arcticCityHotel', note: '90 kamers aan de Pekankatu. Ontbijt, sauna, parkeren en wifi zijn bij elk tarief inbegrepen, en de luchthavenbus stopt op 300 m afstand.' },
        { key: 'sokosVaakuna', note: '159 kamers aan de Koskikatu, met gemeenschappelijke sauna’s die elke avond open zijn.' },
        { key: 'santasHotelSantaClaus', note: 'In het centrum aan de Korkalonkatu, ongeveer 10 km van de luchthaven, met eigen saunafaciliteiten.' },
        { key: 'postmasterHotel', note: 'Een gerestaureerd postkantoor uit de jaren 1950 met 49 kamers; sommige suites hebben een kitchenette en een sauna.' },
        { key: 'hotelAakenus', note: 'Een familiebedrijf in een rustige wijk op korte loopafstand van het centrum: 45 kamers en 20 appartementen met keuken.' },
      ],
    },
    {
      title: 'De heuvel Ounasvaara',
      items: [
        { key: 'skyOunasvaara', note: 'Boven op de Ounasvaara, 4 km van het centrum en 20 m van de dichtstbijzijnde piste; kamers met sauna en familiekamers.' },
        { key: 'laplandHotelsOunasvaara', note: 'Huisjes en vakantieappartementen tussen de Kemijoki en de skipistes, elk met een eigen sauna en keuken; 3 km van het centrum.' },
        { key: 'santasport', note: 'Een olympisch trainingscentrum naast de paden van de Ounasvaara, 2 km van het centrum; sommige kamers hebben een sauna en een balkon.' },
      ],
    },
    {
      title: 'Het Kerstmandorp en de Poolcirkel',
      items: [
        { key: 'santaClausHolidayVillage', note: 'Op de Poolcirkel in het Kerstmandorp: huisjes, suites en glazen iglohuisjes, allemaal met een eigen sauna.' },
        { key: 'santasIgloosArcticCircle', note: 'Glazen iglo’s gericht op het noorden in het Kerstmandorp, elk met een noorderlichtalarm; 5 km van de luchthaven.' },
        { key: 'arcticTreeHouse', note: 'Suites met een wand helemaal van glas, op een beboste helling, 100 m van SantaPark en 2,2 km van het Kerstmandorp.' },
        { key: 'novaSkyland', note: 'Elke kamer en elk huisje heeft een eigen sauna; ongeveer 300 m van het Kerstmandorp en 5 minuten rijden van de luchthaven.' },
        { key: 'glassResort', note: 'Glazen appartementen met een eigen sauna en een hottub buiten, in het bos binnen het Kerstmandorp.' },
      ],
    },
    {
      title: 'Buiten de stad',
      items: [
        { key: 'apukka', note: 'Glazen iglo’s tussen twee meren in de wildernis, 18 km van de stad; het resort heeft een eigen pendelbus naar het centrum.' },
        { key: 'arcticSnowHotel', note: 'Een sneeuw- en ijshotel vanaf 15 december en verwarmde glazen iglo’s met een 360°-glasdak, 26 km van het centrum.' },
        { key: 'invisibleForest', note: 'Suites van verspiegeld glas met een eigen sauna, een hottub buiten en een keuken, aan de Ounasjoki op minder dan 10 minuten rijden van het centrum.' },
        { key: 'silverBirch', note: 'Slechts vijf glazen hutten, drie meter boven de grond aan de oever van een meer bij Oikarainen, verkocht als verblijf van meerdere nachten.' },
      ],
    },
  ],
}

export default nl
