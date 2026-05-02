import Hero from '../components/Hero'
import PropertyTypes from '../components/PropertyTypes'
import PriceGuide from '../components/PriceGuide'
import FeaturedProperties from '../components/FeaturedProperties'
import AmenitiesShowcase from '../components/AmenitiesShowcase'
import Locations from '../components/Locations'
import Reviews from '../components/Reviews'
import BookingCTA from '../components/BookingCTA'
import Newsletter from '../components/Newsletter'
import SEO from '../components/SEO'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LaplandStays',
  url: 'https://laplandstays.com',
  logo: 'https://laplandstays.com/favicon.svg',
  sameAs: [
    'https://youtube.com/@laplandvibes',
    'https://instagram.com/laplandvibesofficial',
    'https://tiktok.com/@laplandvibesofficial',
    'https://facebook.com/LaplandVibes',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'LaplandStays',
  url: 'https://laplandstays.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://laplandstays.com/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a glass igloo in Lapland cost per night?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Glass igloos in Finnish Lapland range from about €250 per night at Nova Skyland in Rovaniemi up to €1,500 per night at Kakslauttanen Arctic Resort in Saariselkä during peak aurora season. Mid-market glass igloos at Levin Iglut, Star Arctic and Aurora Village in Ivalo typically sit between €300 and €700 per night.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the best place to stay in Lapland for the Northern Lights?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For high aurora frequency, head as far north as you can. Saariselkä and Inari sit inside the auroral oval and get roughly 200 aurora-visible nights per year. Northern lights cabins in Saariselkä (Kakslauttanen, Muotka, Star Arctic) or on Lake Inari (Nellim, Aurora Village in Ivalo) give you the clearest dark-sky horizons.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Lapland accommodation cost on a budget?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lapland hotels and cabin chains start around €100 per night — Lapland Hotels operates across Levi, Ylläs, Saariselkä and Rovaniemi at that entry price. Harriniva in Muonio starts around €150. Aurora cabins at Apukka Resort, Arctic SnowHotel and similar properties start near €150 per night outside peak season.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to see the Northern Lights from a Lapland cabin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aurora season in Finnish Lapland runs from late August to early April. The darkest, coldest months — November through February — give the most consistent viewing windows. Properties with aurora alarms wake you only on clear, high-Kp nights so you do not lose sleep on cloudy ones.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Lapland cabins and glass igloos have private saunas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Almost every cabin, villa and chalet in Finnish Lapland has its own sauna — wood-burning, electric, or both. Many lakeside properties (Muotka, Nellim, lakeside Ylläs cabins) include direct access from the sauna to the lake for the traditional Finnish ice plunge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Lapland destination is best for first-time visitors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Levi is the easiest introduction — direct winter flights to Kittilä, restaurants and shops within walking distance, Lapland Hotels from €100 per night, and a full menu of safaris from the village. Ylläs offers a quieter, more nature-forward stay, while Saariselkä and Inari are best for travellers who want deeper wilderness and more glass-igloo inventory.',
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <SEO
        title="Lapland Accommodation: Glass Igloos & Cabins | LaplandStays"
        description="Where to stay in Lapland: compare glass igloos from €250/night, northern lights cabins from €150 and Lapland hotels from €100 across Levi, Ylläs, Saariselkä and Inari. Verified rates, private saunas, aurora alarms."
        canonicalPath="/"
        keywords={[
          'lapland accommodation',
          'where to stay in lapland',
          'glass igloo lapland',
          'glass igloo finland',
          'lapland hotel',
          'lapland cabin',
          'northern lights cabin',
          'kakslauttanen',
          'arctic treehouse hotel',
          'luxury lapland accommodation',
        ]}
        jsonLd={[organizationJsonLd, websiteJsonLd, faqJsonLd]}
      />
      <Hero />
      <PropertyTypes />
      <PriceGuide />
      <FeaturedProperties />
      <AmenitiesShowcase />
      <Locations />
      <Reviews />
      <BookingCTA />
      <Newsletter />
    </>
  )
}
