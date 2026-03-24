import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getProjects } from '@/lib/projects'
import { withBasePath } from '@/lib/assets'

const PersonalProjects = () => {
  const projects = getProjects().filter((project) => project.category === 'Personal Project')

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container-wide">
            <div className="max-w-3xl mb-12 md:mb-14">
              <p className="text-small mb-4">Personal Projects</p>
              <h1 className="heading-display mb-5">Passion projects of mine</h1>
              <p className="text-body">
                Over the past few years I&apos;ve been building Tripfomo, a platform for group travellers to plan trips in
                one place instead of scattered spreadsheets and random group chats.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project) => (
                <article key={project.slug} className="rounded-lg overflow-hidden bg-card border border-border/50">
                  <a
                    href={project.liveUrl ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-[16/10] overflow-hidden block"
                  >
                    <img src={withBasePath(project.image)} alt={project.title} className="w-full h-full object-cover" />
                  </a>
                  <div className="p-6">
                    <h2 className="heading-card mb-2">
                      <a
                        href={project.liveUrl ?? '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors"
                      >
                        {project.title}
                      </a>
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Visit project
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default PersonalProjects
