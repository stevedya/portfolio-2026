import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import avatarImg from '@/images/photos/avatar.jpg'
import HomeHeroReactions from '@/components/HomeHeroReactions'
import { CursorPortrait } from '@/components/cursor-portrait/CursorPortrait'

const Hero = () => {
  return (
    <section className="flex min-h-[84vh] items-center pt-20 gradient-hero">
      <div className="container-wide max-w-7xl py-14 md:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-0">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Avatar className="h-10 w-10 border-2 border-border">
                <AvatarImage src={avatarImg.src} alt="Steven Steinwand" />
                <AvatarFallback>SS</AvatarFallback>
              </Avatar>
              <p className="text-small">Coffee addict & creator</p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[17rem] sm:max-w-[22rem] md:max-w-[24rem] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:ml-auto lg:mr-0 lg:max-w-[30rem]">
            <div className="overflow-hidden rounded-lg border border-border/70 bg-card/40 shadow-2xl">
              <CursorPortrait
                spriteSrc="/portrait/portrait-sprite-2.webp"
                manifestSrc="/portrait/portrait-manifest-2.json"
                className="bg-muted/40"
                ariaLabel="Portrait of Steven Steinwand"
              />
            </div>
          </div>

          <div className="lg:col-start-1">
            <h1 className="heading-display mb-6">
              Solving real problems with <span className="italic">code</span> and thoughtful <span className="italic">design</span>
            </h1>

            <p className="text-body max-w-2xl mb-8">
              I&apos;m Steven, a software developer based in Canada. I focus on clean UX, solid systems, and building
              products that solve real problems for real people.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link href="/work">View My Work</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link href="/about">About Me</Link>
              </Button>
            </div>

            <HomeHeroReactions />
          </div>
        </div>

        <div className="mt-14 md:mt-16">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Scroll to explore</span>
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
