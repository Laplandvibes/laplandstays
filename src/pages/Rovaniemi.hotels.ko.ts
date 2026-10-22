import type { RovaniemiHotelsCopy } from './Rovaniemi.hotels.types'

/**
 * Rovaniemi hotels by area, Korean (22.10.2026). Translated from Rovaniemi.hotels.en.ts: no fact or number
 * beyond the English notes. Register 합쇼체 (-습니다) as in GlassIgloos.copy.ko.ts. Ounasvaara, Kemijoki,
 * Ounasjoki, Oikarainen and the street names stay Latin, as in this page's existing ko copy; 산타클로스 마을,
 * 북극권 and 스노호텔 as on the site, 산타파크 as on laplandchristmas/laplandkids. Units without a space and a
 * decimal point (2.2km), as in GlassIgloos.copy.ko.ts; 12월 15일 for 15 December, 3m for "three metres".
 */
const ko: RovaniemiHotelsCopy = {
  intro: '네 지역의 호텔 20곳입니다. 호텔 이름을 누르면 저희 예약 파트너 사이트에서 해당 호텔 페이지가 열리고, 여행 날짜의 요금을 확인할 수 있습니다.',
  groups: [
    {
      title: '도심',
      items: [
        { key: 'arcticLight', note: '1949년에 지은 로바니에미 옛 시청 건물로, 지금은 객실 57개의 부티크 호텔입니다. 일부 객실에는 전용 사우나가 있습니다.' },
        { key: 'scandicRovaniemiCity', note: 'Koskikatu의 쇼핑센터 옆에 있습니다. 공항버스가 호텔 바로 앞에 정차하며, Superior Sauna 객실에는 전용 사우나가 있습니다.' },
        { key: 'scandicPohjanhovi', note: 'Kemijoki 강변에 있으며, 강이 보이는 객실이 많습니다. 겨울에는 호텔 앞에서 스노모빌 루트가 시작됩니다.' },
        { key: 'arcticCityHotel', note: 'Pekankatu에 있는 객실 90개의 호텔입니다. 모든 요금에 조식, 사우나, 주차, Wi-Fi가 포함되며, 공항버스 정류장까지 300m입니다.' },
        { key: 'sokosVaakuna', note: 'Koskikatu에 있는 객실 159개의 호텔로, 공용 사우나를 매일 저녁 운영합니다.' },
        { key: 'santasHotelSantaClaus', note: '도심 Korkalonkatu에 있으며, 공항에서 약 10km 거리입니다. 자체 사우나 시설을 갖추고 있습니다.' },
        { key: 'postmasterHotel', note: '1950년대 우체국 건물을 복원한 호텔로, 객실은 49개입니다. 일부 스위트에는 간이 주방과 사우나가 있습니다.' },
        { key: 'hotelAakenus', note: '가족이 운영하는 호텔로, 도심에서 조금만 걸으면 닿는 조용한 동네에 있습니다. 객실 45개와 주방을 갖춘 아파트 20채가 있습니다.' },
      ],
    },
    {
      title: 'Ounasvaara 봉우리',
      items: [
        { key: 'skyOunasvaara', note: 'Ounasvaara 정상에 있으며, 도심에서 4km, 가장 가까운 슬로프에서 20m 거리입니다. 사우나가 딸린 객실과 패밀리룸이 있습니다.' },
        { key: 'laplandHotelsOunasvaara', note: 'Kemijoki 강과 스키 슬로프 사이의 캐빈과 휴가용 아파트로, 모두 전용 사우나와 주방을 갖췄습니다. 도심까지 3km입니다.' },
        { key: 'santasport', note: 'Ounasvaara 트레일 옆에 있는 올림픽 훈련 센터로, 도심에서 2km 거리입니다. 일부 객실에는 사우나와 발코니가 있습니다.' },
      ],
    },
    {
      title: '산타클로스 마을과 북극권',
      items: [
        { key: 'santaClausHolidayVillage', note: '북극권에 자리한 산타클로스 마을 안에 있습니다. 코티지, 스위트, 글래스 이글루 코티지가 있으며, 모두 전용 사우나를 갖췄습니다.' },
        { key: 'santasIgloosArcticCircle', note: '산타클로스 마을에 있는 북향 글래스 이글루로, 이글루마다 오로라 알람이 있습니다. 공항까지 5km입니다.' },
        { key: 'arcticTreeHouse', note: '벽 한 면 전체가 유리로 된 스위트가 숲 비탈에 있습니다. 산타파크에서 100m, 산타클로스 마을에서 2.2km 거리입니다.' },
        { key: 'novaSkyland', note: '모든 객실과 캐빈에 전용 사우나가 있습니다. 산타클로스 마을에서 약 300m, 공항에서 차로 5분 거리입니다.' },
        { key: 'glassResort', note: '산타클로스 마을 안 숲속에 있는 통유리 아파트로, 전용 사우나와 야외 핫텁을 갖췄습니다.' },
      ],
    },
    {
      title: '시외',
      items: [
        { key: 'apukka', note: '외딴 두 호수 사이에 자리한 글래스 이글루로, 시내에서 18km 떨어져 있습니다. 리조트 자체 셔틀버스가 도심까지 운행합니다.' },
        { key: 'arcticSnowHotel', note: '눈과 얼음으로 지은 스노호텔(12월 15일부터)과 360° 유리 지붕을 갖춘 난방 글래스 이글루가 있습니다. 도심에서 26km 거리입니다.' },
        { key: 'invisibleForest', note: '거울 유리로 된 스위트로, 전용 사우나, 야외 핫텁, 주방을 갖췄습니다. Ounasjoki 강변에 있으며 도심에서 차로 10분이 채 걸리지 않습니다.' },
        { key: 'silverBirch', note: 'Oikarainen 근처 호숫가에 지상 3m 높이로 지은 글래스 캐빈은 다섯 채뿐입니다. 연박 상품으로 판매합니다.' },
      ],
    },
  ],
}

export default ko
