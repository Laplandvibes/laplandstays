# LaplandStays — Image Audit
*Auditoitu: 2026-04-20*

## Yhteenveto

| Kategoria | Kuvien määrä | ✅ Hyvä | ❌ Vaatii uuden |
|-----------|-------------|---------|----------------|
| Sisältökuvat (Unsplash) | 21 | 0 | 21 |
| OG-kuvat (public/) | 10 | 7 | 3 |
| Ikonit / favicon | 4 | 4 | 0 |
| **Yhteensä** | **35** | **11** | **24** |

**Kaikki Unsplash-kuvat ovat kiellettyjä** (brand policy: no stock photos).
Kolmessa OG-kuvassa teksti leikkautuu oikeasta reunasta.

---

## SISÄLTÖKUVAT — Kaikki ❌ (Unsplash = kielletty)

Generoi kuvat tekoälyllä. Tallenna tiedostoon `public/images/` tai vastaavaan kansioon ja päivitä URL koodeissa.

---

### 1. Homepage Hero
**Tiedosto:** `src/components/Hero.tsx` (vakio: `HERO_IMG`)  
**Käyttö:** Koko sivun taustakuva, tumma overlay + valkoinen teksti päälle  
**Koko:** 2200×1240 px (16:9)

**Prompt:**
```
Photorealistic luxury glass aurora cabin in Finnish Lapland, exterior night scene. Snow-covered pine forest surrounds the cabin. Aurora borealis in vivid emerald green and soft violet swirling across the dark arctic sky. The cabin glows warmly with amber light through floor-to-ceiling glass walls. Deep blue untouched snow in foreground. Cinematic wide-angle composition, premium architectural photography style. No people. High contrast between warm interior and cold arctic exterior. Moody atmospheric lighting. 16:9 landscape format, ultra-wide hero image.
```

---

### 2. Levi — Destination Hero
**Tiedosto:** `src/pages/Levi.tsx` (line 9)  
**Käyttö:** Destination-sivun hero-tausta  
**Koko:** 2000×1125 px (16:9)

**Prompt:**
```
Aerial panoramic view of Levi ski resort in Finnish Lapland at blue hour twilight. Snow-covered fell (tunturi) with ski runs cutting through dense pine forest. Warm lights from luxury chalets and lodges dotting the hillside. Deep blue winter sky fading to pale amber at the horizon. Pristine white powder snow on slopes. No people. Cinematic drone-shot perspective, premium travel photography. Wide 16:9 landscape format.
```

---

### 3. Ylläs — Destination Hero
**Tiedosto:** `src/pages/Yllas.tsx` (line 9)  
**Käyttö:** Destination-sivun hero-tausta  
**Koko:** 2000×1125 px (16:9)

**Prompt:**
```
The twin fells of Ylläs in Finnish Lapland at polar night blue hour. Vast snow-covered landscape with ancient pine and birch forest in the foreground. Gentle aurora borealis shimmering in soft green on the horizon. Absolute silence suggested by perfectly untouched snow. An isolated premium cabin glows with warm amber light in the far distance. Wide panoramic composition, cinematic arctic photography. No people. 16:9 landscape format.
```

---

### 4. Saariselkä — Destination Hero
**Tiedosto:** `src/pages/Saariselka.tsx` (line 9)  
**Käyttö:** Destination-sivun hero-tausta  
**Koko:** 2000×1125 px (16:9)

**Prompt:**
```
Remote wilderness landscape at the edge of Urho Kekkonen National Park near Saariselkä, Finnish Lapland. Polar night blue hour. Rolling open fells covered in deep snow stretching to the horizon. Ancient gnarled arctic birch trees bent under heavy snow weight. A single luxury wilderness lodge glows warmly in the far distance. Dramatic sky with faint aurora shimmer. Cinematic wide-angle composition. No people. 16:9 landscape format.
```

---

### 5. Inari — Destination Hero
**Tiedosto:** `src/pages/Inari.tsx` (line 9)  
**Käyttö:** Destination-sivun hero-tausta  
**Koko:** 2000×1125 px (16:9)

**Prompt:**
```
Frozen Lake Inari in Finnish Lapland at polar night. Vast expanse of snow-covered lake ice stretching to the horizon under a spectacular aurora borealis display in vivid emerald green and deep violet. Snow-capped pine trees on the distant shoreline silhouetted against the glowing sky. A traditional wooden jetty covered in fresh snow in the foreground. Profound arctic silence and isolation. Cinematic ultra-wide composition, moody blue-green color palette. No people. 16:9 landscape format.
```

---

### 6. Rovaniemi — Destination Hero
**Tiedosto:** `src/pages/Rovaniemi.tsx` (line 9)  
**Käyttö:** Destination-sivun hero-tausta  
**Koko:** 2000×1125 px (16:9)

**Prompt:**
```
Rovaniemi city lights reflected on the frozen Kemijoki river at polar night, Finnish Lapland. Snow-covered riverside with pine trees dusted in white. Aurora borealis in emerald green arching above the city skyline. Warm golden streetlights contrasting with cold blue arctic sky. Wide cinematic river-level composition, premium travel photography. No people. 16:9 landscape format.
```

---

### 7. Booking CTA — Background
**Tiedosto:** `src/components/BookingCTA.tsx` (line 10)  
**Käyttö:** Booking-kehotteen taustakuva, tumma overlay  
**Koko:** 2000×1125 px (16:9)

**Prompt:**
```
Interior of a luxury Finnish Lapland cabin at night. Warm amber fireplace glow illuminating a cozy living space with exposed wooden beams and Scandinavian minimalist furniture. Through floor-to-ceiling panoramic glass windows, aurora borealis glows in vivid green in the dark sky. A steaming mug on a wooden coffee table in the foreground. Deep shadows and warm highlights creating cinematic interior atmosphere. Premium architectural interior photography. No people. 16:9 wide landscape format.
```

---

## FEATURED PROPERTIES — Kortit (FeaturedProperties.tsx)

**Koko kaikille:** 800×600 px (4:3) — kortit sivuston "Featured Properties" -osiossa

---

### 8. Aurora Glass Villa — Levi
**Alt:** "Aurora Glass Villa, Levi"

**Prompt:**
```
Luxury glass-walled aurora viewing cabin in Finnish Lapland at night. The entire roof and one wall are floor-to-ceiling glass. Spectacular aurora borealis in vivid green swirls visible through the glass ceiling. Warm amber interior light glowing softly. Surrounded by snow-covered pine forest. Fresh deep snow in foreground. Architectural exterior photography, cinematic moody lighting. No people. 4:3 format.
```

---

### 9. Fell View Chalet — Ylläs
**Alt:** "Fell View Chalet, Ylläs"

**Prompt:**
```
Premium Finnish log chalet perched on a Lapland fell hillside with panoramic view of snow-covered landscape below. Traditional dark-stained timber architecture with modern touches. Smoke rising gently from chimney. Blue-hour twilight lighting on deep snow. Surrounded by pine forest. Architectural exterior photography, cinematic and moody. No people. 4:3 format.
```

---

### 10. Arctic Lakeside Retreat — Inari
**Alt:** "Arctic Lakeside Retreat, Inari"

**Prompt:**
```
Luxury private retreat cabin on the shore of frozen Lake Inari, Finnish Lapland. Modern Scandinavian architecture with large windows. Aurora borealis reflecting faintly on the frozen lake surface. Wooden snow-covered dock extending over the ice. Deep snow surroundings. Warm interior light glowing through large windows. Polar night atmosphere. Editorial travel photography style. No people. 4:3 format.
```

---

### 11. Northern Crown Lodge — Saariselkä
**Alt:** "Northern Crown Lodge, Saariselkä"

**Prompt:**
```
Remote luxury wilderness lodge in Saariselkä, Finnish Lapland. Dark timber exterior with warm amber light from windows. Panoramic setting in ancient pine forest covered in deep snow. Outdoor hot tub with steam rising visibly in arctic air. Northern lights shimmering overhead. Dramatic polar night atmosphere. Premium property photography. No people. 4:3 format.
```

---

### 12. Midnight Sun Cabin — Levi
**Alt:** "Midnight Sun Cabin, Levi"

**Prompt:**
```
Modern design cabin in Levi, Finnish Lapland during the midnight sun season. Warm golden 1am light flooding the landscape. Lush green birch and pine forest. The cabin has a generous wooden deck overlooking a glimmering lake. Long golden shadows, golden-hour quality light. Scandinavian minimalist architecture. Warm amber and green tones. No people. 4:3 format.
```

---

### 13. Polar Designer Villa — Ylläs
**Alt:** "Polar Designer Villa, Ylläs"

**Prompt:**
```
Contemporary minimalist designer villa in Ylläs, Finnish Lapland. Dark charcoal-clad Nordic architecture with extensive glass facade. Deep winter snow surrounding the property. The villa is elevated on a hillside with ski slopes visible in the background. Dramatic blue-hour twilight sky. Clean angular architectural photography. Premium luxury feel. No people. 4:3 format.
```

---

## PROPERTY TYPES — Kortit (PropertyTypes.tsx)

**Koko kaikille:** 800×600 px (4:3) — kategoriakorttien taustakuvat

---

### 14. Aurora Villas
**Alt:** "Aurora Villas"

**Prompt:**
```
Ultra-modern glass aurora cabin in Finnish Lapland at night. The slanted glass roof offers unobstructed view of a spectacular emerald-green aurora borealis display filling the sky. Warm amber glow from interior. Surrounded by dark snowy wilderness. The definitive icon of Lapland luxury accommodation. Dramatic contrast between glowing sky and dark forest. Architectural exterior photography. No people. 4:3 format.
```

---

### 15. Lakeside Cabins
**Alt:** "Lakeside Cabins"

**Prompt:**
```
Traditional Finnish log cabin on the shore of a frozen Lapland lake. Rustic wooden sauna with blue smoke from chimney. Snow-covered wooden dock extending over the ice. Frozen lake stretching to birch forest on the far shore. Soft blue winter light. Peaceful and authentic Finnish holiday atmosphere. Cozy Nordic log architecture. No people. 4:3 format.
```

---

### 16. Mountain Chalets
**Alt:** "Mountain Chalets"

**Prompt:**
```
Ski-in ski-out chalet on the slopes of a Lapland fell. Snow-covered terrace with fresh powder snow piled against the walls. Panoramic view of the white fell landscape and valley below. Warm wooden Scandinavian architecture. Dramatic winter sky. Premium mountain accommodation feel. No people. 4:3 format.
```

---

### 17. Designer Lodges
**Alt:** "Designer Lodges"

**Prompt:**
```
Interior of a premium designer lodge in Finnish Lapland. Scandinavian minimalist interior with natural materials: polished concrete floors, light birch wood panels, a reindeer hide on a designer sofa. Floor-to-ceiling windows with a view of snowy pine forest. Statement fireplace with dramatic flame. Editorial interior photography, moody dramatic lighting. No people. 4:3 format.
```

---

## LOCATION CARDS — Kohdekortit (Locations.tsx)

**Koko kaikille:** 800×600 px (4:3) — kohteiden esittelykortit

---

### 18. Levi — Location Card
**Alt:** "Levi, Finnish Lapland"

**Prompt:**
```
Iconic nighttime view of Levi ski resort, Finnish Lapland. Illuminated ski runs glowing orange cutting down the dark fell. Resort village warm lights twinkling in the valley below. Deep blue winter sky. Fresh snow on forested slopes. Aerial or elevated hillside perspective. Cinematic moody photography. No people. 4:3 format.
```

---

### 19. Ylläs — Location Card
**Alt:** "Ylläs, Finnish Lapland"

**Prompt:**
```
Pristine wilderness landscape of Ylläs, Finnish Lapland. Ancient old-growth pine and birch forest blanketed in deep snow. The two fells of Ylläs visible on the horizon. Untouched polar wilderness, not a single track in the snow. Aurora borealis faintly visible. Cinematic blue tones, sense of solitude and raw arctic nature. Wide-angle landscape photography. No people. 4:3 format.
```

---

### 20. Saariselkä — Location Card
**Alt:** "Saariselkä, Finnish Lapland"

**Prompt:**
```
Dramatic open fell landscape near Saariselkä, Finnish Lapland. Wind-swept arctic birch trees (tunturikoivu) completely covered in hoarfrost, ghostly white forms against a deep blue polar twilight sky. Low sun or full moon grazing the snow creates long blue shadows. Vast open wilderness panorama suggesting the gateway to a national park. Cinematic landscape photography. No people. 4:3 format.
```

---

### 21. Inari — Location Card
**Alt:** "Inari, Finnish Lapland"

**Prompt:**
```
Lake Inari shoreline in Finnish Lapland, the largest lake in Finnish Lapland. Snow-covered shore with ancient dark pine forest. Vivid aurora borealis in green and violet reflected on the frozen lake surface. A traditional wooden Sámi-style boat resting on the ice in the foreground. Profound northern wilderness atmosphere. Wide cinematic composition. No people. 4:3 format.
```

---

## OG-KUVAT (public/)

### ✅ Hyvät — EI tarvitse uutta kuvaa

| Tiedosto | Arvio |
|----------|-------|
| `og-default.jpg` | ✅ Teksti mahtuu, design OK |
| `og-levi.jpg` | ✅ Teksti mahtuu, design OK |
| `og-yllas.jpg` | ✅ Teksti mahtuu, design OK |
| `og-inari.jpg` | ✅ Teksti mahtuu, design OK |
| `og-cookies.jpg` | ✅ Teksti mahtuu, design OK |
| `og-terms.jpg` | ✅ Teksti mahtuu, design OK |
| `og-privacy.jpg` | ✅ Oletetaan OK (sama template) |

> **Huomio kaikissa OG-kuvissa:** "STAYS"-teksti on amber/oranssi (#F59E0B-tyylinen) vibe-pinkin (#EC4899) sijaan. Onko tämä tarkoituksellinen LaplandStays-brändipoikkeus? Jos haluat yhtenäistää, kaikki OG:t pitää generoida uudelleen.

---

### ❌ Vaatii uuden — teksti leikkautuu

#### og-rovaniemi.jpg ❌
**Ongelma:** Teksti "The Arctic Circle capital" leikkautuu oikealta reunasta — "capit..." jää näkyviin.

**Korjaus:** Generoi uusi OG-kuva lyhyemmällä tekstillä tai pienemmällä fonttikoolla.  
**Ehdotettu kopio:**
- Label: `DESTINATION · ROVANIEMI`
- Headline: `Arctic Circle capital`  *(poistettu "The" — mahtuu riville)*

**Design spec (sama pohja kuin muut):**
```
1200×630px OG card. Dark background gradient from deep navy (#0F172A left) to near-black (#0a0a0f right), 
with a subtle warm amber glow (#92400E at 30% opacity) bottom-right quadrant.
Top-left: "#LAPLANDSTAYS" — "#LAPLAND" in pink (#EC4899), "STAYS" in amber (#F59E0B). 
Bebas Neue or Playfair Display bold, ~52px.
Center-left: small caps label "DESTINATION · ROVANIEMI" in pink (#EC4899), ~14px tracking-widest.
Below label: headline "Arctic Circle capital" in white (#F9FAFB), Playfair Display bold, ~64px.
Bottom-left: pill badge "laplandstays.com" — dark background, white text.
```

---

#### og-saariselka.jpg ❌
**Ongelma:** Teksti "Gateway to UKK wilderness" leikkautuu — "wilde..." jää näkyviin.

**Korjaus:** Lyhyempi kopio.  
**Ehdotettu kopio:**
- Label: `DESTINATION · SAARISELKÄ`
- Headline: `UKK wilderness gateway`

**Design spec:** Sama pohja kuin yllä, vain kopio muuttuu.

---

#### og-property-types.jpg ❌
**Ongelma:** Teksti "Aurora villas to log cabins" leikkautuu — "Aurora villas to log ca..." jää näkyviin.

**Korjaus:** Lyhyempi kopio.  
**Ehdotettu kopio:**
- Label: `GUIDE`
- Headline: `Every cabin type in Lapland`

**Design spec:** Sama pohja kuin yllä, vain kopio muuttuu.

---

## IKONIT / FAVICON — Kaikki ✅

| Tiedosto | Status | Huomio |
|----------|--------|--------|
| `favicon.svg` | ✅ | OK |
| `favicon-32.png` | ✅ | OK |
| `apple-touch-icon.png` | ✅ | OK |
| `icons.svg` | ✅ | OK |

---

## Kuvien sijainti koodissa — pikaviite

| Kuva | Tiedosto | Rivi |
|------|----------|------|
| Homepage hero | `src/components/Hero.tsx` | ~4 (`HERO_IMG`) |
| Destination hero | `src/pages/Levi.tsx` | ~9 |
| Destination hero | `src/pages/Yllas.tsx` | ~9 |
| Destination hero | `src/pages/Saariselka.tsx` | ~9 |
| Destination hero | `src/pages/Inari.tsx` | ~9 |
| Destination hero | `src/pages/Rovaniemi.tsx` | ~9 |
| Featured properties (6 kpl) | `src/components/FeaturedProperties.tsx` | ~20, 32, 44, 56, 68, 80 |
| Property types (4 kpl) | `src/components/PropertyTypes.tsx` | ~8, 15, 22, 29 |
| Location cards (4 kpl) | `src/components/Locations.tsx` | ~11, 20, 29, 38 |
| Booking CTA background | `src/components/BookingCTA.tsx` | ~10 |
