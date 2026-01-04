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
    <section id="about" className="py-24 md:py-32">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 justify-start items-start">
          <div>
            <p className="text-small mb-4">About</p>
            <h2 className="heading-section mb-6">
              Making things on the internet, thoughtfully
            </h2>
            <div className="text-body space-y-4">
              <p>
                I’ve been building things on the web since I was 13, back when
                it was all tables, inline styles, and a lot of trial and error.
                As the web evolved, so did I. After formal training in web
                development at NAIT and years of hands-on work through personal
                projects, freelance gigs, and client collaborations, I now focus
                on creating thoughtful, well-crafted digital experiences that
                feel good to use and actually solve real problems. I’m endlessly
                curious, I love learning new things, and I care deeply about the
                work I put into the world. If you’re here, I’d love to see what
                we can build together.
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

          <div className="relative  max-w-[600px] ">
            <div className="aspect-[4/5]object-cover object-center overflow-hidden rounded-lg bg-muted">
              <Image className={"w-full h-auto"} src={stevenImg} alt="Portrait" />
            </div>
            <div className="absolute -bottom-1 -left-1 -z-10 h-32 w-32 rounded-lg bg-accent" />
            <div className="absolute -bottom-1 -right-1 -z-10 h-32 w-32 rounded-lg bg-accent" />
            <div className="absolute -top-1 -right-1 -z-10 h-32 w-32 rounded-lg bg-accent" />
            <div className="absolute -top-1 -left-1 -z-10 h-32 w-32 rounded-lg bg-accent" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
