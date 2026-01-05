import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { getProjects } from "@/lib/projects";

const Work = () => {
  const projects = getProjects();
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container-wide">
            <div className="max-w-2xl mb-12 md:mb-16">
              <p className="text-small mb-4">Projects</p>
              <h1 className="heading-display mb-6">Selected Work</h1>
              <p className="text-body">
                A collection of projects I've worked on, ranging from web applications
                to open-source contributions.
              </p>
            </div>

            {/* Featured Project */}
            {featuredProject && (
              <div className="mb-16 md:mb-24">
                <article
                  id={featuredProject.slug}
                  className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-lg card-hover">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-small mb-3">{featuredProject.category}</p>
                    <h2 className="heading-section mb-4">{featuredProject.title}</h2>
                    <p className="text-body mb-6">{featuredProject.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredProject.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="hero" asChild>
                        <a
                          href={featuredProject.liveUrl ?? "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Live
                        </a>
                      </Button>
                      <Button variant="heroOutline" asChild>
                        <a
                          href={featuredProject.githubUrl ?? "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              </div>
            )}

            {/* Other Projects */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {otherProjects.map((project) => (
                <article
                  key={project.slug}
                  id={project.slug}
                  className="group card-hover rounded-lg overflow-hidden bg-card"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-small mb-2">{project.category}</p>
                    <h3 className="heading-card mb-3">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live
                      </a>
                      <a
                        href={project.githubUrl ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Source
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 md:mt-24 text-center">
              <p className="text-body mb-6">
                Interested in working together?
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">
                  Let's Talk
                  <ArrowUpRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
