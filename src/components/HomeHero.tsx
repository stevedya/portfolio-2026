import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import Image from 'next/image'
import avatarImg from '@/images/photos/avatar.jpg'
import cliffSitter from '@/images/photos/cliff-sitter.jpg'
import HomeHeroReactions from '@/components/HomeHeroReactions'

const Hero = () => {
  return (
    <section className="min-h-[84vh] flex items-center gradient-hero pt-20">
      <div className="container-wide max-w-7xl py-14 md:py-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Avatar className="h-10 w-10 border-2 border-border">
                <AvatarImage src={avatarImg.src} alt="Steven Steinwand" />
                <AvatarFallback>SS</AvatarFallback>
              </Avatar>
              <p className="text-small">Coffee addict & creator</p>
            </div>

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

          <div className="hidden lg:block">
            <div className="w-72 h-96 rounded-lg overflow-hidden shadow-2xl relative">
              <Image src={cliffSitter} alt="Steven sitting" fill className="w-full h-auto object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
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
