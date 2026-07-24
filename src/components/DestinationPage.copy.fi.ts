import type { Copy } from './DestinationPage.copy.types'

const copy: Copy = {
    breadcrumbHome: 'Etusivu',
    breadcrumbDest: 'Kohteet',
    overviewEyebrow: 'Yleiskuva',
    overviewH2: (n: string) => `Miksi yöpyä kohteessa ${n}`,
    seePricesIn: (n: string) => `Katso hinnat kohteessa ${n}`,
    highlightsEyebrow: 'Mikä tekee siitä erityisen',
    highlightsH2: (n: string) => {
      const genitive: Record<string, string> = {
        'Levi': 'Levin',
        'Ylläs': 'Ylläksen',
        'Saariselkä': 'Saariselän',
        'Rovaniemi': 'Rovaniemen',
        'Inari': 'Inarin',
      }
      return `${genitive[n] ?? `${n}:n`} kohokohdat`
    },
    whenToGoEyebrow: 'Milloin matkustaa',
    seasonsH3: 'Vuodenajat',
    gettingThereEyebrow: 'Saapuminen',
    travelH3: 'Matkustaminen',
    staysInEyebrow: (n: string) => `Majoitus kohteessa ${n}`,
    whatToBookH2: 'Mitä varata',
    findCabinH3: (n: string) => {
      const genitive: Record<string, string> = {
        'Levi': 'Levin',
        'Ylläs': 'Ylläksen',
        'Saariselkä': 'Saariselän',
        'Rovaniemi': 'Rovaniemen',
        'Inari': 'Inarin',
      }
      return `Löydä ${genitive[n] ?? `${n}:n`} mökkisi`
    },
    findCabinLead: 'Tarkista saatavuus ja vertaa hintoja, ei välityskuluja.',
    checkAvailability: 'Tarkista saatavuus',
    anchorEyebrow: 'Ankkurikohteet',
    whereToStayH2: (n: string) => `Missä yöpyä kohteessa ${n}`,
    anchorLead: 'Klikkaa ajantasaisiin Trip.com-hintoihin. Kohteet varataan 4–8 kuukautta etukäteen sesongin huipulla.',
    gettingThereH2: (n: string) => `Saapuminen kohteeseen ${n}`,
    transportLead: 'Todelliset hinnat operaattorien sivuilta, tarkistettu kausittain. Kuljetukset yleensä esivarattavissa kohteen kautta.',
    rentCarLabel: 'Vuokraa auto · EconomyBookings',
    sampleItinerary: 'Mallimatkasuunnitelma',
    dayPlanH2: (n: number, name: string) => `${n} päivän suunnitelma kohteessa ${name}`,
    dayPlanLead: 'Tyypillisen revontulisesongin matkan muoto. Säädä taitotason mukaan, nämä ovat lähtökohtia, eivät reseptejä.',
    moreLapland: 'Lisää Lappia',
    otherDestinations: 'Muut kohteet',
    seeStays: 'Katso majoitukset',
    finnishLapland: 'Suomen Lappi',
    readMore: "Tutustu Lapissa",
    planTripEyebrow: "Majoituksen lisäksi",
    planTripH2: "Suunnittele koko matka",
    planActivities: "Aktiviteetit",
    planSkiResorts: "Hiihtokeskukset",
    planTransfers: "Kuljetukset",
    planCarRental: "Autonvuokraus",
  }

export default copy