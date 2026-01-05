import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  order?: number;
};

const projectsDir = path.join(process.cwd(), "src", "content", "projects");

const normalizeProject = (slug: string, data: Record<string, unknown>): Project => {
  return {
    slug,
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    category: String(data.category ?? ""),
    image: String(data.image ?? ""),
    tech: Array.isArray(data.tech) ? data.tech.map(String) : [],
    liveUrl: data.liveUrl ? String(data.liveUrl) : undefined,
    githubUrl: data.githubUrl ? String(data.githubUrl) : undefined,
    featured: Boolean(data.featured),
    order: typeof data.order === "number" ? data.order : undefined,
  };
};

export const getProjects = (): Project[] => {
  if (!fs.existsSync(projectsDir)) return [];

  const entries = fs
    .readdirSync(projectsDir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));

  const projects = entries.map((file) => {
    const fullPath = path.join(projectsDir, file);
    const slug = path.basename(file, path.extname(file));
    const contents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(contents);
    return normalizeProject(slug, data);
  });

  return projects.sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order;
    }
    if (a.order !== undefined) return -1;
    if (b.order !== undefined) return 1;
    return a.title.localeCompare(b.title);
  });
};

export const getFeaturedProjects = (limit = 3): Project[] => {
  const projects = getProjects();
  const featured = projects.filter((project) => project.featured);
  return (featured.length ? featured : projects).slice(0, limit);
};

export const getProjectsBySlugs = (slugs: string[]): Project[] => {
  if (!slugs.length) return [];
  const projects = getProjects();
  const projectMap = new Map(projects.map((project) => [project.slug, project]));
  return slugs
    .map((slug) => projectMap.get(slug))
    .filter((project): project is Project => Boolean(project));
};
