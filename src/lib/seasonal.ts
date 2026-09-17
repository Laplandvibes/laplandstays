/**
 * Kausivalinta kuville — sama konventio kuin hubin src/data/images.ts.
 *
 * 🔴 Verkkosääntö (Vesa 2026-08-23, opittu kolmen sivun kautta): käytä tätä
 * PAIKALLE (kohdesivun hero, destination-kortti), älä koskaan TUOTTEELLE.
 * Kortti joka lupaa lasi-igluja, revontulia tai rinteitä on talvilupaus —
 * sen kuvan kääntäminen vihreäksi 1.5. saisi kortin valehtelemaan 5 kk.
 * Tuotekortit käyttävät kiinteää talvitiedostoa.
 *
 * Kesä = touko–elo. Syyskuusta huhtikuuhun sivu myy talvea: talven
 * varausikkuna on auki jo syyskuussa ja revontulikausi alkaa elokuun lopussa
 * (auditti 16.9.2026, kohta 5; Vesa 17.9.). 🔴 Sama raja on index.html:n
 * hero-preloadissa — pidä synkassa.
 */
export const isSummerSeason = (): boolean => {
  const m = new Date().getMonth() + 1
  return m >= 5 && m <= 8
}

export const seasonal = (winter: string, summer: string): string =>
  isSummerSeason() ? summer : winter
