const orderedFiles = [
  'stevecliff-1.2e16d0ba.fill-475x600.jpg',
  'photography-52.2e16d0ba.fill-800x550.jpg',
  'photography-51.2e16d0ba.fill-375x550.jpg',
  'photography-47.2e16d0ba.fill-800x550.jpg',
  'photography-44.2e16d0ba.fill-375x550.jpg',
  'photography-45.2e16d0ba.fill-800x550.jpg',
  'photography-46.2e16d0ba.fill-375x550.jpg',
  'photography-32.2e16d0ba.fill-400x240.jpg',
  'photography-33.2e16d0ba.fill-400x240.jpg',
  'photography-40.2e16d0ba.fill-640x768.jpg',
  'photography-20.2e16d0ba.fill-400x240.jpg',
  'photography-34.2e16d0ba.fill-400x240.jpg',
  'photography-37.2e16d0ba.fill-640x768.jpg',
  'photography-36.2e16d0ba.fill-60x51.jpg',
  'photography-38.2e16d0ba.fill-60x51.jpg',
  'photography-29.2e16d0ba.fill-800x550.jpg',
  'photography-31.2e16d0ba.fill-375x550.jpg',
  'photography-22.2e16d0ba.fill-800x550.jpg',
  'photography-21.2e16d0ba.fill-375x550.jpg',
  'photography-27.2e16d0ba.fill-800x550.jpg',
  'photography-26.2e16d0ba.fill-375x550.jpg',
  'photography-18_82eCZyl.2e16d0ba.fill-60x51.jpg',
  'photography-17_0tbk0Jq.2e16d0ba.fill-60x51.jpg',
  'photography-16_bTDloZm.2e16d0ba.fill-60x51.jpg',
  'NatAndLuke-61.2e16d0ba.fill-800x550.jpg',
  'NatAndLuke-29.2e16d0ba.fill-375x550.jpg',
  'RileyRoseApril2022-37.2e16d0ba.fill-60x51.jpg',
  'RileyRoseApril2022-38.2e16d0ba.fill-60x51.jpg',
  'ShannonFeb2021-17.2e16d0ba.fill-60x51.jpg',
  'photography-14_MGE154d.2e16d0ba.fill-800x550.jpg',
  'photography-15_HX5Ngev.2e16d0ba.fill-375x550.jpg',
  'photography-10_DGMXQjm.2e16d0ba.fill-800x550.jpg',
  'photography-12_Bq4rbn5.2e16d0ba.fill-375x550.jpg',
  'DhavalAndShamali-116_GlK0Hit.2e16d0ba.fill-60x51.jpg',
  'DhavalAndShamali-120_wzL3vf4.2e16d0ba.fill-60x51.jpg',
  'KaylaFall2019-125.height-1200_ukGF02.2e16d0ba.fill-60x51.jpg',
  'photography-2_OUER7AP.2e16d0ba.fill-60x51.jpg',
  'MarijaHarleyQuinnOct2022-28_Liqs43H.2e16d0ba.fill-60x51.jpg',
  'KaylaMarch2020-REVISED-3_LHc51zn.hei.2e16d0ba.fill-60x51.jpg',
  'photography-4_cvhEIDo.2e16d0ba.fill-800x550.jpg',
  'photography-3_kh5H5Pb.2e16d0ba.fill-375x550.jpg',
  'photography-5_Uih29Wb.2e16d0ba.fill-800x550.jpg',
  'DayneCayla2020-76.height-1200_jD65.2e16d0ba.fill-375x550.jpg',
  'HarleyPhotoshootOct2019-130_xNgOZtQ.2e16d0ba.fill-60x51.jpg',
  'DayneCayla2020-214.height-1200_wXZnc.2e16d0ba.fill-60x51.jpg',
  'MegMac2019-92_VhuaKm8.2e16d0ba.fil.2e16d0ba.fill-800x550.jpg',
  'FriendshipShootOct2019-44.2e16d0ba.2e16d0ba.fill-375x550.jpg',
  'photography-1_st12pEP.2e16d0ba.fill-800x550.jpg',
  'photography-49.2e16d0ba.fill-375x550.jpg',
  'BrianaFallFamilyHighRes-76_56ZhGps.2e16d0ba.fill-800x550.jpg',
  'BrianaFallFamilyHighRes-119_Y9Ij4u.2e16d0ba.fill-375x550.jpg',
  'photography-9.2e16d0ba.fill-800x550.jpg',
  'photography-48.2e16d0ba.fill-375x550.jpg',
  'DayneCayla2020-82.height-1200_ABNseU.2e16d0ba.fill-60x51.jpg',
  'photography-13_zihF7Sk.2e16d0ba.fill-60x51.jpg',
  'photography-6_Wegzx73.2e16d0ba.fill-60x51.jpg',
  'yegFall2020-56.2e16d0ba.fill-800x550.jpg',
  'photography-30.2e16d0ba.fill-375x550.jpg',
] as const

export type PhotoItem = {
  src: string
  alt: string
  orientation: 'landscape' | 'portrait'
}

const orientationFromName = (name: string): 'landscape' | 'portrait' => {
  const match = name.match(/fill-(\d+)x(\d+)/)
  if (!match) return 'landscape'
  const w = Number(match[1])
  const h = Number(match[2])
  return h > w ? 'portrait' : 'landscape'
}

export const getPhotographyItems = (): PhotoItem[] =>
  orderedFiles.map((name) => ({
    src: `/images/photography/${name}`,
    alt: name.split('.2e16d0ba')[0].replace(/[-_]+/g, ' '),
    orientation: orientationFromName(name),
  }))

export const groupPhotographyRows = (items: PhotoItem[]): PhotoItem[][] => {
  const rows: PhotoItem[][] = []
  let i = 0

  while (i < items.length) {
    const current = items[i]
    if (!current) break

    if (current.orientation === 'landscape') {
      const next = items[i + 1]
      if (next?.orientation === 'portrait') {
        rows.push([current, next])
        i += 2
      } else {
        rows.push([current])
        i += 1
      }
      continue
    }

    const p1 = items[i]
    const p2 = items[i + 1]
    const p3 = items[i + 2]
    if (p1 && p2?.orientation === 'portrait' && p3?.orientation === 'portrait') {
      rows.push([p1, p2, p3])
      i += 3
    } else {
      rows.push([p1])
      i += 1
    }
  }

  return rows
}
