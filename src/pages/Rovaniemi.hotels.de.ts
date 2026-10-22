import type { RovaniemiHotelsCopy } from './Rovaniemi.hotels.types'

/**
 * Hotels in Rovaniemi nach Lage, Deutsch (22.10.2026). Aus Rovaniemi.hotels.en.ts übersetzt: gleiche
 * Gruppen, gleiche Reihenfolge, keine Zahl und keine Angabe, die im englischen Text nicht steht
 * (numeroportti). Begriffe wie auf der deutschen Glasiglu-Seite: Glasiglu, Weihnachtsmanndorf,
 * Polarlicht-Alarm, Reisedaten. Anrede: Sie. Straßennamen „an der Koskikatu“ wie in den deutschen Nachrichten.
 */
const de: RovaniemiHotelsCopy = {
  intro: '20 Hotels in vier Gegenden. Jeder Name öffnet die Seite dieses Hotels bei unserem Buchungspartner, mit Preisen für Ihre Reisedaten.',
  groups: [
    {
      title: 'Stadtzentrum',
      items: [
        { key: 'arcticLight', note: 'Das ehemalige Rathaus von Rovaniemi, 1949 erbaut, heute ein Boutique-Hotel mit 57 Zimmern; einige haben eine eigene Sauna.' },
        { key: 'scandicRovaniemiCity', note: 'An der Koskikatu neben den Einkaufszentren. Der Flughafenbus hält vor der Tür, und die Zimmer der Kategorie Superior Sauna haben eine eigene Sauna.' },
        { key: 'scandicPohjanhovi', note: 'Am Ufer des Kemijoki. Viele Zimmer blicken auf den Fluss, und im Winter beginnen die Schneemobil-Routen vor dem Hotel.' },
        { key: 'arcticCityHotel', note: '90 Zimmer an der Pekankatu. Frühstück, Sauna, Parkplatz und WLAN sind in jedem Tarif enthalten, und der Flughafenbus hält in 300 m Entfernung.' },
        { key: 'sokosVaakuna', note: '159 Zimmer an der Koskikatu; die Gemeinschaftssaunen sind jeden Abend geöffnet.' },
        { key: 'santasHotelSantaClaus', note: 'Zentral an der Korkalonkatu, etwa 10 km vom Flughafen, mit eigenem Saunabereich.' },
        { key: 'postmasterHotel', note: 'Ein restauriertes Postgebäude aus den 1950er-Jahren mit 49 Zimmern; einige Suiten haben eine Kochnische und eine Sauna.' },
        { key: 'hotelAakenus', note: 'Familiengeführt, in ruhiger Lage einen kurzen Fußweg vom Zentrum entfernt: 45 Zimmer und 20 Apartments mit Küche.' },
      ],
    },
    {
      title: 'Ounasvaara-Fjäll',
      items: [
        { key: 'skyOunasvaara', note: 'Oben auf dem Ounasvaara, 4 km vom Zentrum und 20 m von der nächsten Piste; Zimmer mit Sauna und Familienzimmer.' },
        { key: 'laplandHotelsOunasvaara', note: 'Hütten und Ferienwohnungen zwischen dem Kemijoki und den Skipisten, alle mit eigener Sauna und Küche; 3 km vom Zentrum.' },
        { key: 'santasport', note: 'Ein olympisches Trainingszentrum an den Wegen des Ounasvaara, 2 km vom Zentrum; einige Zimmer haben Sauna und Balkon.' },
      ],
    },
    {
      title: 'Weihnachtsmanndorf und Polarkreis',
      items: [
        { key: 'santaClausHolidayVillage', note: 'Am Polarkreis im Weihnachtsmanndorf: Hütten, Suiten und Glasiglu-Hütten, alle mit eigener Sauna.' },
        { key: 'santasIgloosArcticCircle', note: 'Nach Norden ausgerichtete Glasiglus im Weihnachtsmanndorf, jedes mit Polarlicht-Alarm; 5 km vom Flughafen.' },
        { key: 'arcticTreeHouse', note: 'Suiten mit durchgehender Glasfront an einem Waldhang, 100 m vom SantaPark und 2,2 km vom Weihnachtsmanndorf.' },
        { key: 'novaSkyland', note: 'Jedes Zimmer und jede Hütte hat eine eigene Sauna; etwa 300 m zum Weihnachtsmanndorf und 5 Autominuten zum Flughafen.' },
        { key: 'glassResort', note: 'Glas-Apartments mit eigener Sauna und Außenwhirlpool, in einem Waldstück innerhalb des Weihnachtsmanndorfs.' },
      ],
    },
    {
      title: 'Außerhalb der Stadt',
      items: [
        { key: 'apukka', note: 'Glasiglus zwischen zwei Seen in der Wildnis, 18 km von der Stadt, mit resorteigenem Shuttlebus ins Zentrum.' },
        { key: 'arcticSnowHotel', note: 'Ein Schnee- und Eishotel ab dem 15. Dezember und beheizte Glasiglus mit 360°-Glasdach, 26 km vom Zentrum.' },
        { key: 'invisibleForest', note: 'Suiten aus verspiegeltem Glas mit eigener Sauna, Außenwhirlpool und Küche, am Ounasjoki, unter 10 Autominuten vom Zentrum.' },
        { key: 'silverBirch', note: 'Nur fünf Glashütten, drei Meter über dem Boden an einem Seeufer bei Oikarainen; angeboten werden Aufenthalte über mehrere Nächte.' },
      ],
    },
  ],
}

export default de
