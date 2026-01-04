import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern shopping experience built with React and Node.js",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    link: "/work",
  },
  {
    id: 2,
    title: "Financial Dashboard",
    description: "Real-time analytics and data visualization for fintech",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    link: "/work",
  },
  {
    id: 3,
    title: "Mobile App Design",
    description: "Cross-platform app for task management and productivity",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    link: "/work",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-24 md:py-32 bg-card/50">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-small mb-4">Featured Work</p>
            <h2 className="heading-section">Selected Projects</h2>
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
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={project.link}
              className="group block"
            >
              <article className="relative card-hover rounded-xl overflow-hidden bg-background border border-border/50">
                {/* Project number badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-sm text-xs font-medium text-neutral-900 dark:text-neutral-100 border border-black/10 dark:border-white/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Category pill */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-sm text-xs font-medium text-neutral-900 dark:text-neutral-100 border border-black/10 dark:border-white/20">
                    {project.category}
                  </span>
                </div>

                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Strong gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="heading-card text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/80 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-4 flex items-center gap-2 text-white/70 group-hover:text-white transition-colors">
                    <span className="text-xs uppercase tracking-wider">View Project</span>
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
