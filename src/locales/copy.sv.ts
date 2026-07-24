import type { ChromeCopy } from './copy.types'

const copy: ChromeCopy = {
  nav: {
    home: 'Hem',
    propertyTypes: 'Boendetyper',
    whenToGo: 'När du ska åka',
    transport: 'Transport',
    about: 'Om oss',
    levi: 'Levi',
    yllas: 'Ylläs',
    saariselka: 'Saariselkä',
    inari: 'Inari',
    rovaniemi: 'Rovaniemi',
    bookNow: 'Boka nu',
    cabins: 'Stugsemester',
    langSwitch: 'Byt språk',
  },
  hero: {
    eyebrow: 'Boende i Lappland · Finland',
    h1: 'Var du ska bo i finska Lappland',
    lead: 'En glasiglo där du ser norrskenet från kudden, en timmerstuga med egen bastu och sjön precis utanför, eller ett riktigt hotell i byn.',
    leadSummer: 'En sjöstuga under midnattssolen med egen bastu, en älvnära lodge i de gröna fjällen, eller ett riktigt hotell i byn.',
    disclosure: 'Den här sidan innehåller affiliatelänkar. Om du bokar via dem kan LaplandStays få provision utan extra kostnad för dig.',
    alt: 'Varmt upplyst lyxstuga i snöiga finska Lappland under norrskenshimlen',
  },
  reviewedBy: {
    reviewedLabel: 'Granskad av',
    policyLabel: 'redaktionell policy',
    resolvedDate: 'april 2026',
  },
  networkHub: {
    huskySafaris: 'Hundspannssafarier',
    skiResorts: 'Skidorter',
  },
  mobileStickyCta: {
    fromPrice: 'Från 100 €/natt',
    headline: 'Verifierade stugor och iglor i Lappland',
    cta: 'Boka nu',
  },
  newsletter: {
    eyebrow: 'LaplandStays Insider',
    h2: 'Planera din Lapplandsresa med oss',
    lead: 'Skrivet härifrån, och bara när vi verkligen har något att berätta: ett bra datumfönster, en iglo som just blev ledig, ett pris värt att haffa innan det försvinner. Du väljer bara dagarna och packar ullstrumporna.',
    emailPlaceholder: 'din@epost.se',
    emailLabel: 'E-postadress',
    submit: 'Få nästa mejl',
    submitting: 'Anmäler…',
    success: 'Du är med på listan. Vi ses under norrskenet.',
    footnote: 'Bara när vi verkligen har något att berätta. Avsluta med ett klick.',
    privacyLink: 'Integritetspolicy',
    benefits: [
      { title: 'Norrskenslarm', body: 'Vi hör av oss när en bra norrskensnatt är på väg, så att du ligger under glastaket exakt rätt natt.' },
      { title: 'Nya lediga stugor', body: 'Du hör det först när Kakslauttanen, Levin Iglut, Star Arctic och Aurora Village öppnar säsongen, de bästa nätterna går snabbt.' },
      { title: 'Planeringshjälp', body: 'När du ska komma, vad du ska boka först, vad du lugnt kan hoppa över, berättat som vi skulle berätta för en vän, direkt härifrån Lappland.' },
      { title: 'Insiderpriser', body: 'Våra partners säsongserbjudanden landar först hos prenumeranterna, så du bokar innan alla andra hör talas om dem.' },
    ],
  },
  footerEditorialNote: 'Drivs oberoende av Lapeso Oy i finska Lappland · senast granskad april 2026 · vi tjänar affiliateprovision på vissa bokningar, men det påverkar aldrig vilka boenden vi rekommenderar.',
  footerExtraLegal: { editorialPolicy: 'Redaktionell policy', about: 'Om oss' },
  pages: {
    home: {
      seoTitle: 'Var du ska bo i Lappland 2026, glasiglor, stugor, riktiga priser',
      seoDescription: 'Planera din vistelse i Lappland 2026, glasiglor från 250 €/natt, norrskensstugor från 150 €, hotell från 100 €. Levi, Ylläs, Saariselkä, Inari.',
    },
    propertyTypes: {
      kicker: 'Boendetyper',
      h1: 'Glasiglor, stugor, hotell och villor',
      lead: 'Från vedeldade stugor vid sjön till trippelglasade glasiglor, så här känns det att vakna i varje format under den arktiska natten.',
      types: [
        { title: 'Glasiglo', body: 'Trippelglasad kupol med egen säng, komplett badrum och panoramautsikt över norrskenet från kudden.' },
        { title: 'Norrskensstuga', body: 'Traditionell finsk stuga med bastu, öppen spis och mörk himmel, ofta med ett norrskenslarm.' },
        { title: 'Lapplandshotell', body: 'Fullservicehotell med restaurang, lobby, bastu och ski-in-läge där byns placering tillåter det.' },
        { title: 'Villa och chalet', body: 'Större format för familjer och grupper, ofta med flera sovrum, eget kök, bastu och badtunna.' },
      ],
    },
    locations: {
      kicker: 'Resmål',
      h1: 'Där Lappland lever, fem baser, ett norrsken',
      lead: 'Levi för den enkla introduktionen, Ylläs för lugnet, Saariselkä och Inari för djupare vistelser under mörk himmel, Rovaniemi för jultomten och polcirkeln.',
      cards: [
        { name: 'Levi', desc: 'Den största skidorten, de enklaste flygen, ett komplett restaurangutbud och en heltäckande safarimeny.' },
        { name: 'Ylläs', desc: 'Två byar, sju leder i nationalparken, den mest autentiska och tysta Lapplandsvistelsen.' },
        { name: 'Saariselkä', desc: 'Inne i norrskensovalen, hem för Kakslauttanen och det djupaste utbudet av stugor under mörk himmel.' },
        { name: 'Inari', desc: 'Inarisjön, samisk kultur, landets nordligaste ände, och de allra bästa norrskenschanserna.' },
        { name: 'Rovaniemi', desc: 'Jultomtens by, polcirkeln och den enklaste internationella flygplatsen i Lappland.' },
      ],
    },
    whenToGo: {
      kicker: 'Bästa tiden',
      h1: 'En Lapplandskalender månad för månad',
      lead: 'Polarnatt, isfestivaler, midnattssol, ruska-hösten, varje månad i Lappland är ett annat land.',
      months: [
        { month: 'November', tip: 'Polarnatten börjar. Norrskenet återvänder. Stugorna fylls, boka tidigt inför julen.' },
        { month: 'December', tip: 'Jultomtesäsongen på full intensitet. Snön är garanterad. Kortaste dagarna, ljusaste snön.' },
        { month: 'Januari', tip: 'Kallaste månaden. Årets lugnaste vecka mellan nyår och de första skidlägren.' },
        { month: 'Februari', tip: 'Långa norrskensnätter, solen återvänder långsamt, perfekt för safarier och pilkfiske.' },
        { month: 'Mars', tip: 'Långa dagar, gott om snö och vårskidfönstret öppnar i Levi och Ylläs.' },
      ],
    },
    transport: {
      kicker: 'Så tar du dig dit',
      h1: 'Så tar du dig till finska Lappland',
      lead: 'Direkta vinterflyg till Kittilä, Rovaniemi och Ivalo, plus nattåget från Helsingfors, så här fungerar varje alternativ i praktiken.',
      airports: [
        { name: 'Kittilä (KTT)', desc: 'Direkta vintercharter från London, Paris, Amsterdam, Zürich och längre bort. Ingången till Levi och Ylläs.' },
        { name: 'Rovaniemi (RVN)', desc: 'Finnair-förbindelser året runt via Helsingfors. Gångavstånd till transfererna mot Jultomtens by.' },
        { name: 'Ivalo (IVL)', desc: 'EU:s nordligaste flygplats, ingången till Saariselkä, Inari och norrskensbältet.' },
      ],
    },
    about: {
      kicker: 'Om LaplandStays',
      h1: 'Oberoende skrivet från finska Lappland',
      lead: 'Guiden uppdateras varje säsong, och vi säger rakt ut när ett boende är överhypat.',
      mission: 'Vårt uppdrag är att ge varje resenär samma rekommendation som vi skulle ge en vän, byggd på riktiga vistelser, verifierade nattpriser och den lokalkännedom du bara får av att vara på plats.',
    },
  },
}

export default copy
