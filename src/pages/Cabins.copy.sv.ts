// Stugsemesterguide (Lomarengas-partnerartikel), svenska.
import type { PageCopy } from './Cabins.copy.types'

const copy: PageCopy = {
  seo: {
    title: 'Stugsemester i Lappland: Levi, Ylläs, Ruka, Saariselkä',
    description: 'Så fungerar en finsk stugsemester: vad en mökki innehåller, hur Levi, Ylläs, Ruka och Saariselkä skiljer sig åt och hur du bläddrar bland stugor via Lomarengas.',
  },
  ui: {
    adNotice: 'Innehåller reklamlänkar · Lomarengas-samarbete',
    eyebrow: 'Stugsemester',
    h1: 'Stugsemestern i Lappland',
    heroAlt: 'Timmerstuga i snöigt Lappland i blå timmen, varmt ljus i fönstren och svagt norrsken på himlen',
    lead: 'Egna timmerväggar, egen bastu och ingen ovanför, under eller bakom väggen.',

    whyEyebrow: 'Varför stuga',
    whyH2: 'Det en mökki ger dig som ett hotell inte kan',
    whyLead: 'En mökki är den finska semesterstugan, och den kommer med sina egna ritualer. Fyra skäl till att den slår ett hotellrum för en vecka i norr:',
    whyCards: [
      {
        title: 'Din egen bastu',
        body: 'De flesta hyrstugor har egen bastu, och i de bättre eldas den med ved. Skidor, bastu, middag, norrskensvakt: det är dagsrytmen i en finsk stugvecka.',
      },
      {
        title: 'Plats för hela gänget',
        body: 'Stugor rymmer allt från två till tolv personer eller fler. Ett kök, en braskamin och en räkning delad mellan vänner slår oftast tre eller fyra hotellrum.',
      },
      {
        title: 'Ditt eget kök',
        body: 'Restaurangpriserna i skidorten hinner bli många på en vecka. Ett stugkök betyder lugna frukostar, matsäck till backen och ett stort inköp i byns mataffär.',
      },
      {
        title: 'Tystnaden',
        body: 'Kliv av verandan och du står i snön, under stjärnorna, ofta med norrsken över dig. Inga korridorer, ingen lobby, inga andra gäster. Den tystnaden är själva poängen.',
      },
    ],

    partnerEyebrow: 'Där vi letar först',
    partnerH2: 'Stugsök: Lomarengas',
    partnerBody: 'Lomarengas är en finsk stugförmedling med över 8 000 semesterbostäder listade runt om i landet, från skidstugor vid Levis backar till sjönära stugor längst i norr. Annonserna visar riktiga foton, exakta lägen och priser vecka för vecka, och varje stuga anger vad som ingår.',
    partnerNote: 'Länkarna nedan tar dig till lomarengas.fi, där sökningen, priserna och bokningen sköts av Lomarengas. Om du bokar via länkarna får LaplandStays en fast provision utan extra kostnad för dig.',
    partnerCta: 'Bläddra bland stugorna',

    areasEyebrow: 'De fyra klassikerna',
    areasH2: 'Levi, Ylläs, Ruka eller Saariselkä?',
    areasLead: 'Alla fyra ger dig backar, längdspår och stugor på kort köravstånd från en by. Skillnaden är atmosfären: hur mycket by du vill ha utanför stugdörren.',
    areas: [
      {
        name: 'Levi',
        tagline: 'Fullserviceorten',
        body: 'Finlands livligaste skidort, med världscupslalom varje november och en by där restauranger, uthyrningsbutiker och safariupphämtningar ligger på gångavstånd. Stugorna ringar in fjället, så du kan välja mellan ski-in-lägen nära gondolen och lugnare tomter några kilometer bort.',
        bullets: [
          'Bäst för: förstagångsbesökare och gäng som vill ha restauranger och nattliv nära stugan',
          'Byns service på gångavstånd från de närmaste stugområdena',
          'Kittilä flygplats ligger cirka 15 minuter bort, Lapplands enklaste transfer',
        ],
        note: '',
        cta: 'Levi-stugor · Lomarengas',
      },
      {
        name: 'Ylläs',
        tagline: 'Det tysta fjällandet',
        body: 'Finlands längsta backar på ett och samma fjäll, två stillsamma byar (Äkäslompolo och Ylläsjärvi) vid dess fot, och nationalparken Pallas-Yllästunturi som börjar vid spårnätets kant. Stuglivet här handlar mer om att skida från dörren och mindre om afterski.',
        bullets: [
          'Bäst för: längdskidåkare, familjer och alla som är allergiska mot trängsel',
          'Två byar betyder butiker och restauranger utan skidortens brus',
          'Samma Kittilä flygplats som Levi, cirka 50 minuters transfer',
        ],
        note: '',
        cta: 'Ylläs-stugor · Lomarengas',
      },
      {
        name: 'Ruka',
        tagline: 'Försäsongens arbetshäst',
        body: 'Ruka öppnar i oktober och backarna håller in i maj, en av Finlands längsta säsonger, och den kompakta backbyn håller allt nära. Nedanför fjället är Kuusamos sjölandskap klassisk stugterräng, med nationalparken Oulanka och vandringsleden Karhunkierros i närheten för dagarna utan skidor.',
        bullets: [
          'Bäst för: skidåkning tidig och sen säsong, ruska-vandringar om hösten och fiskare',
          'Kuusamo flygplats ligger cirka 25 minuter från backarna',
          'Enormt utbud av sjönära stugor på landsbygden runt Kuusamo',
        ],
        note: 'Strängt taget ligger Ruka i Kuusamo, strax söder om Lapplands administrativa gräns. Snön verkar inte bry sig, och det gör inte stughyrarna heller.',
        cta: 'Ruka-stugor · Lomarengas',
      },
      {
        name: 'Saariselkä',
        tagline: 'Norrskensbasen längst i norr',
        body: 'Den nordligaste av de fyra stora, på ungefär 68°N, vilket placerar dig under norrskensovalen: en klar natt är oddsen helt enkelt bättre här. Byn är kompakt, nationalparken Urho Kekkonen börjar bakom den, och fjällen rullar hundra kilometer österut utan något människobyggt i sikte.',
        bullets: [
          'Bäst för: norrskensjägare, snösko- och vildmarksmänniskor, andragångsbesökare',
          'Ivalo flygplats ligger cirka 30 minuter bort',
          'Kaunispääs topp och Finlands längsta pulkabacke ligger direkt ovanför byn',
        ],
        note: '',
        cta: 'Saariselkä-stugor · Lomarengas',
      },
    ],

    practicalEyebrow: 'Innan du bokar',
    practicalH2: 'Så läser du en stugannons',
    practicalLead: 'Finska stugannonser är ärliga men fåordiga. Det här är detaljerna värda att kolla innan du binder dig till en vecka:',
    checkTitle: 'Kolla i annonsen',
    checkList: [
      'Bastutyp: vedeldad är den fulla upplevelsen, elbastu vardagsvarianten',
      'Lakan och slutstädning: ofta prissatta separat, lägg till dem innan du jämför totalpriser',
      'Avstånd till backar, spår och närmaste mataffär, i kilometer och inte adjektiv',
      'Braskamin och ved: ingår oftast, men bekräfta om det är viktigt för dig',
      'Vinterväghållning och parkering, särskilt för stugor utanför byarna',
    ],
    knowTitle: 'Bra att veta',
    knowList: [
      'Bil lönar sig för stugor utanför gångavstånd från en by, se vår transportguide',
      'Stugveckor löper under högsäsong oftast från lördag till lördag',
      'December till mars är högsäsong; boka populära veckor många månader i förväg',
      'Ruskan i september och midnattssolen i juni är lågsäsongens fynd',
      'Ta med tofflor. Finska stugor är en skofri zon, och golven vet om det.',
    ],

    seasonEyebrow: 'Tajming',
    seasonH2: 'När du ska ta din stugvecka',
    seasonLead: 'Det finns ingen fel årstid för en mökki, bara olika:',
    seasons: [
      { period: 'December till mars', body: 'Full vinter: backarna öppna, spåren dragna och norrskenssäsongen i full gång. Störst efterfrågan på stugor, så ju tidigare du bokar, desto bättre urval.' },
      { period: 'April', body: 'Vårskidåkning: långa dagar, packad snö och solglasögonväder på terrassen. Lokalborna kallar det skidårets bäst bevarade hemlighet.' },
      { period: 'Juni till augusti', body: 'Midnattssol: vandring, fiske och bad från stugbryggan, med dagsljus dygnet runt. Sjönära stugor är som bäst.' },
      { period: 'September till oktober', body: 'Ruskan, höstfärgssäsongen: fjällen skiftar i rött och guld, luften är skarp och de första norrskenen återvänder till mörka himlar.' },
    ],

    ctaH2: 'Välj fjäll först, sedan stuga',
    ctaLead: 'Börja med regionen som passar ditt sällskap och jämför sedan stugor på Lomarengas listsidor. Bokningen sker på lomarengas.fi.',
    ctaPrimary: 'Alla stugor på Lomarengas',
    ctaSecondary: 'När du ska åka',

    showcase: {
      eyebrow: 'Direkt ur utbudet',
      h2: 'Riktiga stugor, riktiga bilder',
      lead: 'Ett dagligen uppdaterat urval ur Lomarengas utbud kring varje skidort, hämtat direkt ur produktdatan. Priserna är veckopriser från; slutpriset beror på veckan.',
      weekFrom: 'vecka från {price} €',
      guestsLabel: 'personer',
      bedroomsLabel: 'sovrum',
      sizeLabel: 'storlek',
      viewCabin: 'Se stugan',
      browseAll: 'Bläddra bland områdets alla {count} stugor',
      dataNote: 'Bilder och priser: Lomarengas produktdata, uppdateras dagligen.',
    },
  },
}

export default copy
