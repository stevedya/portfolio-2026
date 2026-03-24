import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { getFeaturedProjects, getProjectsBySlugs } from '@/lib/projects'
import { getHomeContent } from '@/lib/home'
import { withBasePath } from '@/lib/assets'

const FeaturedProjects = () => {
  const { featuredProjects } = getHomeContent()
  const selectedProjects = getProjectsBySlugs(featuredProjects)
  const projects = selectedProjects.length ? selectedProjects : getFeaturedProjects()

  return (
    <section className="py-16 md:py-20 bg-card/50">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          <div>
            <p className="text-small mb-3">Featured Work</p>
            <h2 className="heading-section">Featured Projects</h2>
          </div>
          <Link
            href="/work"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline inline-flex items-center gap-2"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <Link key={project.slug} href={`/work#${project.slug}`} className="group block">
              <article className="card-hover rounded-xl overflow-hidden bg-background border border-border/50 h-full">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={withBasePath(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <p className="text-small mb-2">{project.category}</p>
                  <h3 className="heading-card mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    View project
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
