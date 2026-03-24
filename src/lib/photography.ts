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
  'photography-29.2e16d0ba.fill-800x550.jpg',
  'photography-31.2e16d0ba.fill-375x550.jpg',
  'photography-22.2e16d0ba.fill-800x550.jpg',
  'photography-21.2e16d0ba.fill-375x550.jpg',
  'photography-27.2e16d0ba.fill-800x550.jpg',
  'photography-26.2e16d0ba.fill-375x550.jpg',
  'NatAndLuke-61.2e16d0ba.fill-800x550.jpg',
  'NatAndLuke-29.2e16d0ba.fill-375x550.jpg',
  'photography-14_MGE154d.2e16d0ba.fill-800x550.jpg',
  'photography-15_HX5Ngev.2e16d0ba.fill-375x550.jpg',
  'photography-10_DGMXQjm.2e16d0ba.fill-800x550.jpg',
  'photography-12_Bq4rbn5.2e16d0ba.fill-375x550.jpg',
  'photography-4_cvhEIDo.2e16d0ba.fill-800x550.jpg',
  'photography-3_kh5H5Pb.2e16d0ba.fill-375x550.jpg',
  'photography-5_Uih29Wb.2e16d0ba.fill-800x550.jpg',
  'DayneCayla2020-76.height-1200_jD65.2e16d0ba.fill-375x550.jpg',
  'MegMac2019-92_VhuaKm8.2e16d0ba.fil.2e16d0ba.fill-800x550.jpg',
  'FriendshipShootOct2019-44.2e16d0ba.2e16d0ba.fill-375x550.jpg',
  'photography-1_st12pEP.2e16d0ba.fill-800x550.jpg',
  'photography-49.2e16d0ba.fill-375x550.jpg',
  'BrianaFallFamilyHighRes-76_56ZhGps.2e16d0ba.fill-800x550.jpg',
  'BrianaFallFamilyHighRes-119_Y9Ij4u.2e16d0ba.fill-375x550.jpg',
  'photography-9.2e16d0ba.fill-800x550.jpg',
  'photography-48.2e16d0ba.fill-375x550.jpg',
  'yegFall2020-56.2e16d0ba.fill-800x550.jpg',
  'photography-30.2e16d0ba.fill-375x550.jpg',
] as const

export type PhotoItem = {
  src: string
  alt: string
  orientation: 'landscape' | 'portrait'
}

export type PhotoRow = {
  type: 'landscapePortrait' | 'portraitLandscape' | 'threePortraits' | 'singleLandscape' | 'singlePortrait'
  items: PhotoItem[]
}

const getSizeFromName = (name: string): { w: number; h: number } | null => {
  const match = name.match(/fill-(\d+)x(\d+)/)
  if (!match) return null
  return { w: Number(match[1]), h: Number(match[2]) }
}

const orientationFromName = (name: string): 'landscape' | 'portrait' => {
  const size = getSizeFromName(name)
  if (!size) return 'landscape'
  return size.h > size.w ? 'portrait' : 'landscape'
}

export const getPhotographyItems = (): PhotoItem[] =>
  orderedFiles
    .filter((name) => {
      const size = getSizeFromName(name)
      if (!size) return true
      return size.w >= 240 && size.h >= 240
    })
    .map((name) => ({
      src: `/images/photography/${name}`,
      alt: name.split('.2e16d0ba')[0].replace(/[-_]+/g, ' '),
      orientation: orientationFromName(name),
    }))

export const groupPhotographyRows = (items: PhotoItem[]): PhotoRow[] => {
  const rows: PhotoRow[] = []
  let i = 0

  while (i < items.length) {
    const a = items[i]
    const b = items[i + 1]
    const c = items[i + 2]

    if (!a) break


    if (a.orientation === 'landscape' && b?.orientation === 'portrait') {
      rows.push({ type: 'landscapePortrait', items: [a, b] })
      i += 2
      continue
    }

    if (a.orientation === 'portrait' && b?.orientation === 'landscape') {
      rows.push({ type: 'portraitLandscape', items: [a, b] })
      i += 2
      continue
    }

    if (a.orientation === 'portrait' && b?.orientation === 'portrait' && c?.orientation === 'portrait') {
      rows.push({ type: 'threePortraits', items: [a, b, c] })
      i += 3
      continue
    }

    if (a.orientation === 'landscape') {
      rows.push({ type: 'singleLandscape', items: [a] })
      i += 1
      continue
    }

    // fallback for isolated portrait
    rows.push({ type: 'singlePortrait', items: [a] })
    i += 1
  }

  return rows
}
