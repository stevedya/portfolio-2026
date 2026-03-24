import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getPhotographyItems, groupPhotographyRows } from '@/lib/photography'
import { withBasePath } from '@/lib/assets'

const Img = ({ src, alt }: { src: string; alt: string }) => (
  <img src={withBasePath(src)} alt={alt} className="w-full h-auto rounded-lg" loading="lazy" />
)

const PhotographyPage = () => {
  const items = getPhotographyItems()
  const rows = groupPhotographyRows(items)

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container-wide">
            <div className="max-w-4xl mb-10 md:mb-14">
              <h1 className="heading-display mb-4">Moments in time.</h1>
              <p className="text-body">
                Moments in time, they pass quickly, but through my lens, I try to hold onto them just a little longer.
                Over the years, I’ve been lucky enough to capture these fleeting memories alongside some amazing people,
                whether planned or unexpected. It’s not about perfection, but about finding beauty in the everyday, and
                maybe having a little fun along the way.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              {rows.map((row, idx) => {
                if (row.type === 'singleLandscape') {
                  const item = row.items[0]
                  if (!item) return null
                  return (
                    <div key={idx}>
                      <Img src={item.src} alt={item.alt} />
                    </div>
                  )
                }

                if (row.type === 'landscapePortrait') {
                  const [land, port] = row.items
                  if (!land || !port) return null
                  return (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">
                      <div className="md:col-span-2">
                        <Img src={land.src} alt={land.alt} />
                      </div>
                      <div className="md:col-span-1">
                        <Img src={port.src} alt={port.alt} />
                      </div>
                    </div>
                  )
                }

                if (row.type === 'portraitLandscape') {
                  const [port, land] = row.items
                  if (!port || !land) return null
                  return (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">
                      <div className="md:col-span-1">
                        <Img src={port.src} alt={port.alt} />
                      </div>
                      <div className="md:col-span-2">
                        <Img src={land.src} alt={land.alt} />
                      </div>
                    </div>
                  )
                }

                if (row.type === 'threePortraits') {
                  return (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">
                      {row.items.map((item) => (
                        <div key={item.src}>
                          <Img src={item.src} alt={item.alt} />
                        </div>
                      ))}
                    </div>
                  )
                }

                if (row.type === 'portraitWithLandscapeStack') {
                  const [port, l1, l2] = row.items
                  if (!port || !l1 || !l2) return null
                  return (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">
                      <div className="md:col-span-1">
                        <Img src={port.src} alt={port.alt} />
                      </div>
                      <div className="md:col-span-2 grid grid-cols-1 gap-4 md:gap-6">
                        <Img src={l1.src} alt={l1.alt} />
                        <Img src={l2.src} alt={l2.alt} />
                      </div>
                    </div>
                  )
                }

                if (row.type === 'landscapeStackWithPortrait') {
                  const [l1, l2, port] = row.items
                  if (!l1 || !l2 || !port) return null
                  return (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">
                      <div className="md:col-span-2 grid grid-cols-1 gap-4 md:gap-6">
                        <Img src={l1.src} alt={l1.alt} />
                        <Img src={l2.src} alt={l2.alt} />
                      </div>
                      <div className="md:col-span-1">
                        <Img src={port.src} alt={port.alt} />
                      </div>
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
