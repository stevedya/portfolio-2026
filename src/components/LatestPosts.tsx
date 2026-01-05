import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt: "Lessons learned from architecting large-scale frontend applications...",
    date: "Dec 15, 2024",
    category: "Development",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Art of Landscape Photography",
    excerpt: "Tips and techniques for capturing stunning natural scenes...",
    date: "Dec 8, 2024",
    category: "Photography",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "TypeScript Best Practices in 2024",
    excerpt: "Modern patterns and practices for type-safe JavaScript...",
    date: "Nov 28, 2024",
    category: "Development",
    readTime: "6 min read",
  },
];

const LatestPosts = () => {
  return (
    <section className="py-24 md:py-32 bg-card/50">
      <div className="container-wide max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-small mb-4">Blog</p>
            <h2 className="heading-section">Latest Thoughts</h2>
          </div>
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline inline-flex items-center gap-2"
          >
            View all posts
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:gap-0 md:divide-y divide-border">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group block md:py-8 first:pt-0 last:pb-0"
            >
              <article className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-small">{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span className="text-small">{post.readTime}</span>
                  </div>
                  <h3 className="heading-card mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground hidden md:block">
                    {post.date}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
