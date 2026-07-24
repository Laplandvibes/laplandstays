// Mökkiloma-opas (Lomarengas-kumppaniartikkeli), suomi.
import type { PageCopy } from './Cabins.copy.types'

const copy: PageCopy = {
  seo: {
    title: 'Lapin mökkiloma: Levi, Ylläs, Ruka ja Saariselkä',
    description: 'Näin Lapin mökkiloma toimii: mitä mökkiin kuuluu, miten Levi, Ylläs, Ruka ja Saariselkä eroavat toisistaan ja miten selaat mökkejä Lomarenkaan kautta.',
  },
  ui: {
    adNotice: 'Sisältää mainoslinkkejä · Lomarengas-kumppanuus',
    eyebrow: 'Mökkiloma',
    h1: 'Lapin mökkiloma',
    heroAlt: 'Hirsimökki lumisessa Lapissa sinisen hetken hämärässä, ikkunoissa lämmin valo ja heikot revontulet taivaalla',
    lead: 'Omat hirsiseinät, oma sauna, eikä ketään yläpuolella, alapuolella tai seinän takana.',

    whyEyebrow: 'Miksi mökki',
    whyH2: 'Mitä mökki antaa, mitä hotelli ei voi',
    whyLead: 'Mökkiin kuuluu oma rituaalinsa. Neljä syytä, miksi se voittaa hotellihuoneen viikon pohjoisreissulla:',
    whyCards: [
      {
        title: 'Oma sauna',
        body: 'Useimmissa vuokramökeissä on oma sauna, ja paremmissa se lämpiää puilla. Ladulle, saunaan, ruoanlaittoon ja revontulivahtiin: siinä mökkiviikon päivärytmi.',
      },
      {
        title: 'Tilaa koko porukalle',
        body: 'Mökeissä nukkuu kahdesta kahteentoista henkeen tai enemmänkin. Yksi keittiö, yksi takka ja yksi lasku jaettuna porukalla voittaa yleensä kolme tai neljä hotellihuonetta.',
      },
      {
        title: 'Oma keittiö',
        body: 'Hiihtokeskuksen ravintolahinnat kertautuvat viikossa nopeasti. Mökin keittiö tarkoittaa rauhallisia aamiaisia, eväitä rinteeseen ja yhtä isoa kauppareissua kylän markettiin.',
      },
      {
        title: 'Hiljaisuus',
        body: 'Astu kuistilta ulos ja olet lumessa, tähtien alla, usein revontulten alla. Ei käytäviä, ei aulaa, ei muita vieraita. Se hiljaisuus on koko homman pointti.',
      },
    ],

    partnerEyebrow: 'Mistä me aloitamme haun',
    partnerH2: 'Mökkihaku: Lomarengas',
    partnerBody: 'Lomarengas on suomalainen mökkivälittäjä, jolla on yli 8 000 lomakohdetta ympäri maan, Levin rinteiden hiihtomökeistä pohjoisen järvenrantamökkeihin. Kohteissa on oikeat kuvat, tarkka sijainti ja viikkokohtaiset hinnat, ja jokaisen mökin tiedoissa lukee mitä hintaan kuuluu.',
    partnerNote: 'Alla olevat linkit vievät lomarengas.fi-sivustolle, jossa haku, hinnat ja varaus hoituvat Lomarenkaan kautta. Jos varaat näiden linkkien kautta, LaplandStays saa kiinteän provision ilman lisäkustannuksia sinulle.',
    partnerCta: 'Selaa Lapin mökkejä',

    areasEyebrow: 'Neljä klassikkoa',
    areasH2: 'Levi, Ylläs, Ruka vai Saariselkä?',
    areasLead: 'Kaikista neljästä löytyy rinteet, ladut ja mökit lyhyen ajomatkan päässä kylästä. Ero on tunnelmassa: kuinka paljon kylää haluat mökin oven ulkopuolelle.',
    areas: [
      {
        name: 'Levi',
        tagline: 'Täyden palvelun keskus',
        body: 'Suomen vilkkain hiihtokeskus, jossa ajetaan maailmancupin pujottelu joka marraskuu ja jonka kylässä ravintolat, välinevuokraamot ja safarinoudot ovat kävelymatkan päässä. Mökit kiertävät tunturia, joten voit valita ski-in-sijainnin gondolin läheltä tai rauhallisemman tontin muutaman kilometrin päästä.',
        bullets: [
          'Parhaimmillaan: ensikertalaisille ja porukoille, jotka haluavat ravintolat ja menoa mökin lähelle',
          'Kylän palvelut kävelymatkan päässä lähimmiltä mökkialueilta',
          'Kittilän kenttä on noin 15 minuutin päässä, Lapin helpoin siirtymä',
        ],
        note: '',
        cta: 'Levin mökit · Lomarengas',
      },
      {
        name: 'Ylläs',
        tagline: 'Hiljainen tunturimaa',
        body: 'Suomen pisimmät rinteet yhdellä tunturilla, kaksi leppoisaa kylää (Äkäslompolo ja Ylläsjärvi) sen juurella ja Pallas-Yllästunturin kansallispuisto alkaa latuverkon reunasta. Mökkielämä on täällä enemmän ovelta hiihtämistä ja vähemmän after skitä.',
        bullets: [
          'Parhaimmillaan: hiihtäjille, perheille ja kaikille, jotka karttavat ruuhkia',
          'Kaksi kylää tarkoittaa kauppoja ja ravintoloita ilman keskuksen hälinää',
          'Sama Kittilän kenttä kuin Levillä, siirtymä noin 50 minuuttia',
        ],
        note: '',
        cta: 'Ylläksen mökit · Lomarengas',
      },
      {
        name: 'Ruka',
        tagline: 'Alkutalven työjuhta',
        body: 'Ruka avaa lokakuussa ja rinteet kestävät toukokuulle, yksi Suomen pisimmistä kausista, ja tiivis rinnekylä pitää kaiken lähellä. Tunturin alapuolella Kuusamon järviseutu on klassista mökkimaastoa, ja Oulangan kansallispuisto ja Karhunkierros ovat lähellä hiihdottomia päiviä varten.',
        bullets: [
          'Parhaimmillaan: alku- ja loppukauden laskijoille, ruskaretkille ja kalastajille',
          'Kuusamon kenttä on noin 25 minuutin päässä rinteistä',
          'Ympäröivältä Kuusamon maaseudulta löytyy valtava valikoima rantamökkejä',
        ],
        note: 'Tarkkaan ottaen Ruka on Kuusamossa, hallinnollisen Lapin rajan eteläpuolella. Lumi ei tunnu välittävän, eivätkä mökkivuokraajatkaan.',
        cta: 'Rukan mökit · Lomarengas',
      },
      {
        name: 'Saariselkä',
        tagline: 'Kaukopohjolan revontulitukikohta',
        body: 'Neljästä pohjoisin, noin 68. leveysasteella, mikä vie sinut revontuliovaalin alle: kirkkaana yönä todennäköisyydet ovat täällä yksinkertaisesti paremmat. Kylä on tiivis, Urho Kekkosen kansallispuisto alkaa sen takaa, ja tunturit jatkuvat itään sata kilometriä ilman ainuttakaan rakennusta näköpiirissä.',
        bullets: [
          'Parhaimmillaan: revontulten metsästäjille, lumikenkäilijöille ja toisen kerran kävijöille',
          'Ivalon kenttä on noin 30 minuutin päässä',
          'Kaunispään laki ja Suomen pisin kelkkamäki ovat heti kylän yläpuolella',
        ],
        note: '',
        cta: 'Saariselän mökit · Lomarengas',
      },
    ],

    practicalEyebrow: 'Ennen varausta',
    practicalH2: 'Näin luet mökki-ilmoitusta',
    practicalLead: 'Suomalaiset mökki-ilmoitukset ovat rehellisiä mutta niukkasanaisia. Nämä kannattaa tarkistaa ennen kuin sitoudut viikkoon:',
    checkTitle: 'Tarkista ilmoituksesta',
    checkList: [
      'Saunan tyyppi: puulämmitteinen on se täysi kokemus, sähkökiuas arkinen',
      'Liinavaatteet ja loppusiivous: usein erikseen hinnoiteltuja, lisää ne ennen hintavertailua',
      'Etäisyys rinteisiin, laduille ja lähikauppaan, kilometreinä eikä adjektiiveina',
      'Takka ja polttopuut: kuuluvat yleensä hintaan, mutta varmista jos sillä on väliä',
      'Talvikunnossapito ja pysäköinti, etenkin kylien ulkopuolisissa mökeissä',
    ],
    knowTitle: 'Hyvä tietää',
    knowList: [
      'Auto kannattaa, jos mökki ei ole kävelymatkan päässä kylästä, katso saapumisoppaamme',
      'Mökkiviikot kulkevat sesongilla yleensä lauantaista lauantaihin',
      'Joulukuusta maaliskuuhun on huippusesonki; varaa suositut viikot monta kuukautta etukäteen',
      'Syyskuun ruska ja kesäkuun yötön yö ovat hiljaisen kauden löydöt',
      'Ota tossut mukaan. Suomalainen mökki on kengätön vyöhyke, ja lattiat tietävät sen.',
    ],

    seasonEyebrow: 'Ajoitus',
    seasonH2: 'Milloin pitää mökkiviikko',
    seasonLead: 'Mökille ei ole väärää vuodenaikaa, vain erilaisia:',
    seasons: [
      { period: 'Joulukuu–maaliskuu', body: 'Täysi talvi: rinteet auki, ladut ajettu ja revontulikausi kuumimmillaan. Mökeillä on eniten kysyntää, joten mitä aiemmin varaat, sitä parempi valikoima.' },
      { period: 'Huhtikuu', body: 'Kevätlaskettelu: pitkät päivät, kantava hanki ja aurinkolasikeli terassilla. Paikalliset kutsuvat tätä hiihtovuoden parhaiten varjelluksi salaisuudeksi.' },
      { period: 'Kesäkuu–elokuu', body: 'Yötön yö: vaellusta, kalastusta ja uintia mökkilaiturilta, valoa vuorokauden ympäri. Rantamökit ovat parhaimmillaan.' },
      { period: 'Syyskuu–lokakuu', body: 'Ruska: tunturit hehkuvat punaista ja kultaa, ilma on terävä ja ensimmäiset revontulet palaavat pimenneelle taivaalle.' },
    ],

    ctaH2: 'Valitse ensin tunturi, sitten mökki',
    ctaLead: 'Aloita alueesta, joka sopii porukallesi, ja vertaile sitten mökkejä Lomarenkaan listaussivuilla. Varaus tehdään lomarengas.fi-sivustolla.',
    ctaPrimary: 'Kaikki mökit Lomarenkaalla',
    ctaSecondary: 'Milloin matkustaa',
  },
}

export default copy
