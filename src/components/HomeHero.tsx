import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import avatarImg from "@/images/photos/avatar.jpg";
import cliffSitter from "@/images/photos/cliff-sitter.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center gradient-hero pt-20">
      <div className="container-wide max-w-7xl py-20 md:py-32">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <Avatar className="h-10 w-10 border-2 border-border">
                <AvatarImage
                  src={avatarImg.src}
                  alt="Steven Steinwand"
                />
                <AvatarFallback>SS</AvatarFallback>
              </Avatar>
              <p className="text-small">Coffee addict & creator</p>
            </div>

            <h1 className="heading-display mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Building digital experiences with{" "}
              <span className="italic">code</span> and capturing moments through{" "}
              <span className="italic">light</span>
            </h1>

            <p className="text-body max-w-2xl mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              I'm Steven, a software developer based in Canada.
              I craft clean, thoughtful web experiences and explore the world through my camera lens.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="lg" asChild>
                <Link href="/work">View My Work</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>

          {/* Hero Portrait Image */}
          <div className="hidden lg:block animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="w-72 h-96 rounded-lg overflow-hidden shadow-2xl relative">
              <Image
                src={cliffSitter}
                alt="Steven sitting"
                fill
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-24 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Scroll to explore</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
