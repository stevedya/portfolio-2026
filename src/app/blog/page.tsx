import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt: "Lessons learned from architecting large-scale frontend applications. We'll explore component patterns, state management strategies, and performance optimization techniques.",
    date: "Dec 15, 2024",
    category: "Development",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
  },
  {
    id: 2,
    title: "The Art of Landscape Photography",
    excerpt: "Tips and techniques for capturing stunning natural scenes. From golden hour timing to composition rules that will elevate your outdoor photography.",
    date: "Dec 8, 2024",
    category: "Photography",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=800&h=500&fit=crop",
  },
  {
    id: 3,
    title: "TypeScript Best Practices in 2024",
    excerpt: "Modern patterns and practices for type-safe JavaScript development. Covering utility types, generics, and the latest TypeScript features.",
    date: "Nov 28, 2024",
    category: "Development",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop",
  },
  {
    id: 4,
    title: "Hiking the Pacific Northwest",
    excerpt: "My favorite trails and hidden gems across Washington and Oregon. A guide for photographers and nature enthusiasts alike.",
    date: "Nov 15, 2024",
    category: "Travel",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop",
  },
  {
    id: 5,
    title: "Understanding React Server Components",
    excerpt: "A deep dive into React's new paradigm for building modern web applications with improved performance and developer experience.",
    date: "Oct 30, 2024",
    category: "Development",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container-wide">
            <div className="max-w-2xl mb-12 md:mb-16">
              <p className="text-small mb-4">Blog</p>
              <h1 className="heading-display mb-6">Thoughts & Stories</h1>
              <p className="text-body">
                Writing about software development, photography, and the journey
                of building things on the web.
              </p>
            </div>

            {/* Featured Post */}
            <Link href={`/blog/${posts[0].id}`} className="group block mb-12 md:mb-16">
              <article className="grid md:grid-cols-2 gap-6 md:gap-8 items-center card-hover rounded-lg overflow-hidden bg-card p-6">
                <div className="aspect-[16/10] overflow-hidden rounded-lg">
                  <img
                    src={posts[0].image}
                    alt={posts[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-small">{posts[0].category}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span className="text-small">{posts[0].readTime}</span>
                  </div>
                  <h2 className="heading-section mb-4 group-hover:text-accent transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-body mb-4">{posts[0].excerpt}</p>
                  <span className="text-sm text-muted-foreground">{posts[0].date}</span>
                </div>
              </article>
            </Link>

            {/* Post Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {posts.slice(1).map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group block"
                >
                  <article className="card-hover rounded-lg overflow-hidden bg-card">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-small">{post.category}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <span className="text-small">{post.readTime}</span>
                      </div>
                      <h3 className="heading-card mb-2 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
