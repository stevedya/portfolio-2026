import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getPhotographyItems, groupPhotographyRows } from '@/lib/photography'
import { withBasePath } from '@/lib/assets'

const PhotographyPage = () => {
  const items = getPhotographyItems()
  const rows = groupPhotographyRows(items)

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container-wide">
            <div className="max-w-2xl mb-10 md:mb-12">
              <p className="text-small mb-3">Photography</p>
              <h1 className="heading-display mb-4">Life through my lens</h1>
              <p className="text-body">
                Moments in time pass quickly, but photos help hold onto them a little longer.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {rows.map((row, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
                  {row.length === 1 && row[0].orientation === 'landscape' ? (
                    <img
                      src={withBasePath(row[0].src)}
                      alt={row[0].alt}
                      className="md:col-span-3 w-full h-auto rounded-lg"
                      loading="lazy"
                    />
                  ) : row.length === 2 ? (
                    <>
                      <img
                        src={withBasePath(row[0].src)}
                        alt={row[0].alt}
                        className="md:col-span-2 w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                      <img
                        src={withBasePath(row[1].src)}
                        alt={row[1].alt}
                        className="md:col-span-1 w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    </>
                  ) : row.length === 3 ? (
                    row.map((item) => (
                      <img
                        key={item.src}
                        src={withBasePath(item.src)}
                        alt={item.alt}
                        className="md:col-span-1 w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    ))
                  ) : (
                    row.map((item) => (
                      <img
                        key={item.src}
                        src={withBasePath(item.src)}
                        alt={item.alt}
                        className="w-full h-auto rounded-lg"
                        loading="lazy"
                      />
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default PhotographyPage
