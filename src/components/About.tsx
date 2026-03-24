import stevenImg from '@/images/photos/avatar.jpg'
import Image from 'next/image'

const About = () => {
  const skills = [
    'HTML',
    'SASS',
    'JavaScript',
    'TypeScript',
    'Python',
    'React Native',
    'React',
    'Apollo GraphQL',
    'Docker',
    'Tailwind CSS',
    'A11y',
    'Git',
    'Continuous Integration',
    'Figma',
    'Fun',
  ]

  return (
    <section id="about" className="py-16 md:py-20">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 justify-start items-start">
          <div>
            <p className="text-small mb-4">About</p>
            <h2 className="heading-section mb-6">
              Making things on the internet, thoughtfully
            </h2>
            <div className="text-body space-y-4">
              <p>
                I started building websites at 13 and never really stopped. Over the years I&apos;ve worked across
                personal products, freelance builds, and agency projects, always with the same goal: make things
                simple, useful, and enjoyable to use.
              </p>
              <p>
                I care a lot about clean frontend architecture, thoughtful UX, and shipping work that solves real
                problems. If you&apos;re building something and want a dev partner who actually sweats the details, I&apos;m in.
              </p>
            </div>

            <div className="mt-8">
              <p className="mb-4 text-sm font-medium">
                Technologies I work with
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-[340px] lg:ml-auto">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <Image className="h-full w-full object-cover object-center" src={stevenImg} alt="Portrait" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
