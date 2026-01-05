import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

type HomeContent = {
  featuredProjects: string[];
};

const homePath = path.join(process.cwd(), "src", "content", "home.md");

export const getHomeContent = (): HomeContent => {
  if (!fs.existsSync(homePath)) {
    return { featuredProjects: [] };
  }

  const contents = fs.readFileSync(homePath, "utf8");
  const { data } = matter(contents);
  const featuredProjects = Array.isArray(data.featuredProjects)
    ? data.featuredProjects.map(String)
    : [];

  return { featuredProjects };
};
