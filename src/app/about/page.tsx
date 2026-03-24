import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import cliffSitter from '@/images/photos/cliff-sitter.jpg'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container-wide max-w-5xl grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
            <div>
              <p className="text-small mb-4">About</p>
              <h1 className="heading-section mb-6">My Journey in Software Development</h1>
              <div className="space-y-5 text-body">
                <p>
                  My love for the web began young. At just 13, I was diving into HTML, PHP, and Photoshop,
                  crafting my first personal websites from scratch.
                </p>
                <p>
                  In high school, I balanced music and teenage life, then by 2009 my passion for web development
                  reignited as the web shifted toward responsive, user-centered design.
                </p>
                <p>
                  In 2015, I enrolled in the Digital Media and IT (DMIT) - Web Development program at NAIT.
                  That experience expanded my toolkit and prepared me to tackle modern web challenges.
                </p>
                <p>
                  Through personal projects, freelance work, and collaborations, I keep building useful digital
                  experiences and learning every day.
                </p>
              </div>

              <div className="mt-8">
                <p className="text-small mb-3">Core skills</p>
                <p className="text-muted-foreground">
                  HTML, SASS, JavaScript, TypeScript, Python, React Native, React, Apollo GraphQL, Docker,
                  Tailwind CSS, Accessibility, Git, CI, and Figma.
                </p>
              </div>
            </div>

            <div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image src={cliffSitter} alt="Steven Steinwand" className="w-full h-auto object-cover" />
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Friend. Developer. Photographer. Musician. Soup lover. Tea enthusiast. Plant daddy. Oat milk fan.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
