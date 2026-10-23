import type { Copy } from './DestinationPage.copy.types'

/**
 * Paikannimet taivutettuina (Vesa 23.10.2026: "Löydä Ruka:n mökkisi" ja "Miksi yöpyä kohteessa Ruka" eivät ole suomea).
 * gen = genetiivi, loc = missä (Rukalla, Inarissa), ill = mihin (Rukalle, Inariin), abl = mistä (Rukalta, Inarista).
 * Uusi kohdesivu ⇒ uusi rivi tähän; puuttuva nimi putoaa "kohteessa X" -muotoon, joka on kömpelö mutta ei väärin.
 */
const FI: Record<string, { gen: string; loc: string; ill: string; abl: string }> = {
  Levi: { gen: 'Levin', loc: 'Levillä', ill: 'Leville', abl: 'Leviltä' },
  Ylläs: { gen: 'Ylläksen', loc: 'Ylläksellä', ill: 'Ylläkselle', abl: 'Ylläkseltä' },
  Saariselkä: { gen: 'Saariselän', loc: 'Saariselällä', ill: 'Saariselälle', abl: 'Saariselältä' },
  Rovaniemi: { gen: 'Rovaniemen', loc: 'Rovaniemellä', ill: 'Rovaniemelle', abl: 'Rovaniemeltä' },
  Inari: { gen: 'Inarin', loc: 'Inarissa', ill: 'Inariin', abl: 'Inarista' },
  Ruka: { gen: 'Rukan', loc: 'Rukalla', ill: 'Rukalle', abl: 'Rukalta' },
  'Pyhä–Luosto': { gen: 'Pyhän ja Luoston', loc: 'Pyhällä ja Luostolla', ill: 'Pyhälle ja Luostolle', abl: 'Pyhältä ja Luostolta' },
}
const loc = (n: string) => FI[n]?.loc ?? `kohteessa ${n}`
const gen = (n: string) => FI[n]?.gen ?? `kohteen ${n}`
const ill = (n: string) => FI[n]?.ill ?? `kohteeseen ${n}`
const abl = (n: string) => FI[n]?.abl ?? `kohteesta ${n}`

const copy: Copy = {
    breadcrumbHome: 'Etusivu',
    overviewEyebrow: 'Yleiskuva',
    overviewH2: (n: string) => `Miksi majoittua ${loc(n)}`,
    seePricesIn: (n: string) => `Katso ${gen(n)} majoitusten hinnat`,
    highlightsEyebrow: 'Nähtävää ja koettavaa',
    highlightsH2: (n: string) => `${gen(n)} kohokohdat`,
    whenToGoEyebrow: 'Milloin matkustaa',
    seasonsH3: 'Vuodenajat',
    gettingThereEyebrow: 'Saapuminen',
    travelH3: 'Kulkuyhteydet',
    staysInEyebrow: (n: string) => `Majoitus ${loc(n)}`,
    whatToBookH2: 'Majoitusvaihtoehdot',
    // Nappi vie hotellihakuun (buildHotelSearch), ei mökkeihin: otsikko ei saa luvata mökkiä (natiivilukija 23.10.2026).
    findCabinH3: (n: string) => `Etsi majoitus ${abl(n)}`,
    findCabinLead: 'Valitse päivät ja vertaa vapaiden majoitusten hintoja.',
    checkAvailability: 'Katso vapaat majoitukset',
    anchorEyebrow: 'Majoituspaikat',
    whereToStayH2: (n: string) => `Missä majoittua ${loc(n)}`,
    anchorLead: 'Kohteen nimestä aukeaa sen sivu varauskumppanimme palvelussa, jossa näet ajantasaiset hinnat valitsemillesi päiville.',
    gettingThereH2: (n: string) => `Näin pääset ${ill(n)}`,
    transportLead: 'Tarkista aikataulut ja hinnat liikennöitsijän omilta sivuilta ennen matkaa.',
    rentCarLabel: 'Vuokraa auto · EconomyBookings',
    sampleItinerary: 'Esimerkkimatka',
    dayPlanH2: (n: number, name: string) => `${n} päivää ${loc(name)}`,
    dayPlanLead: 'Esimerkki tavallisesta matkasta revontulikaudella. Muokkaa suunnitelmaa omien taitojesi mukaan: tämä on lähtökohta, ei valmis ohjelma.',
    moreLapland: 'Lisää Lappia',
    otherDestinations: 'Muut kohteet',
    seeStays: 'Katso majoitukset',
    finnishLapland: 'Suomen Lappi',
    readMore: 'Lue lisää',
    planTripEyebrow: "Majoituksen lisäksi",
    planTripH2: "Suunnittele koko matka",
    planActivities: "Aktiviteetit",
    planSkiResorts: "Hiihtokeskukset",
    planTransfers: "Kuljetukset",
    planCarRental: "Autonvuokraus",
  }

export default copy