import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getPhotographyItems, groupPhotographyRows } from '@/lib/photography'
import { withBasePath } from '@/lib/assets'

const Img = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => (
  <img src={withBasePath(src)} alt={alt} className={`block w-full h-full object-cover rounded-lg ${className}`} loading="lazy" />
)

const PhotographyPage = () => {
  const items = getPhotographyItems()
  const heroPhoto = items[0]
  const rows = groupPhotographyRows(items.slice(1))
  let mixedIndex = 0

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-16 md:py-24 overflow-x-clip">
          <div className="container-wide max-w-7xl">
            <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center mb-16 md:mb-24">
              <div className="max-w-4xl">
                <h1 className="heading-display mb-4">Moments in time.</h1>
                <p className="text-body">
                  Moments in time, they pass quickly, but through my lens, I try to hold onto them just a little longer.
                  Over the years, I’ve been lucky enough to capture these fleeting memories alongside some amazing people,
                  whether planned or unexpected. It’s not about perfection, but about finding beauty in the everyday, and
                  maybe having a little fun along the way.
                </p>
              </div>
              {heroPhoto ? (
                <>
                  <div className="hidden lg:block">
                    <div className="w-72 h-96 overflow-hidden rounded-lg shadow-2xl">
                      <Img src={heroPhoto.src} alt={heroPhoto.alt} />
                    </div>
                  </div>
                  <div className="lg:hidden mt-2">
                    <div className="aspect-[3/4] max-w-sm overflow-hidden rounded-lg">
                      <Img src={heroPhoto.src} alt={heroPhoto.alt} />
                    </div>
                  </div>
                </>
              ) : null}
            </div>

            <div className="space-y-6 md:space-y-8">
              {rows.map((row, idx) => {
                if (row.type === 'singleLandscape') {
                  const item = row.items[0]
                  if (!item) return null
                  return (
                    <div key={idx} className="aspect-[16/8] md:aspect-[16/7] overflow-hidden">
                      <Img src={item.src} alt={item.alt} />
                    </div>
                  )
                }

                if (row.type === 'singlePortrait') {
                  const item = row.items[0]
                  if (!item) return null
                  return (
                    <div key={idx} className="max-w-md aspect-[3/4] overflow-hidden">
                      <Img src={item.src} alt={item.alt} />
                    </div>
                  )
                }

                if (row.type === 'landscapePortrait' || row.type === 'portraitLandscape') {
                  const land = row.items.find((i) => i.orientation === 'landscape')
                  const port = row.items.find((i) => i.orientation === 'portrait')
                  if (!land || !port) return null

                  const landscapeLeft = mixedIndex % 2 === 0
                  mixedIndex += 1

                  return (
                    <div
                      key={idx}
                      className={`grid grid-cols-1 gap-4 md:gap-0 items-stretch ${
                        landscapeLeft
                          ? 'md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]'
                          : 'md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]'
                      }`}
                    >
                      {landscapeLeft ? (
                        <>
                          <div className="min-w-0 pr-0 md:pr-3">
                            <div className="aspect-[16/10] overflow-hidden">
                              <Img src={land.src} alt={land.alt} />
                            </div>
                          </div>
                          <div className="min-w-0 pl-0 md:pl-3">
                            <div className="aspect-[3/4] overflow-hidden">
                              <Img src={port.src} alt={port.alt} />
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="min-w-0 pr-0 md:pr-3">
                            <div className="aspect-[3/4] overflow-hidden">
                              <Img src={port.src} alt={port.alt} />
                            </div>
                          </div>
                          <div className="min-w-0 pl-0 md:pl-3">
                            <div className="aspect-[16/10] overflow-hidden">
                              <Img src={land.src} alt={land.alt} />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  )
                }

                if (row.type === 'threePortraits') {
                  return (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start md:[&>*]:min-w-0">
                      {row.items.map((item) => (
                        <div key={item.src} className="aspect-[3/4] overflow-hidden">
                          <Img src={item.src} alt={item.alt} />
                        </div>
                      ))}
                    </div>
                  )
                }


                return null
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default PhotographyPage
