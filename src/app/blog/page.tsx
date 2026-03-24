import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { getPosts } from '@/lib/posts'
import { withBasePath } from '@/lib/assets'

const Blog = () => {
  const posts = getPosts()

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container-wide">
            <div className="max-w-2xl mb-12 md:mb-16">
              <p className="text-small mb-4">Blog</p>
              <h1 className="heading-display mb-6">The blogs of Steve</h1>
              <p className="text-body">
                A bunch of writings from Steve himself about software, recipes, music, and experiments.
              </p>
            </div>

            {posts.length > 0 && (
              <>
                <Link href={`/blog/${posts[0].slug}`} className="group block mb-12 md:mb-16">
                  <article className="grid md:grid-cols-2 gap-6 md:gap-8 items-center card-hover rounded-lg overflow-hidden bg-card p-6">
                    {posts[0].image ? (
                      <div className="aspect-[16/10] overflow-hidden rounded-lg">
                        <img
                          src={withBasePath(posts[0].image)}
                          alt={posts[0].title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/10] overflow-hidden rounded-lg bg-secondary" />
                    )}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-small">{posts[0].category}</span>
                        {posts[0].readTime ? (
                          <>
                            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                            <span className="text-small">{posts[0].readTime}</span>
                          </>
                        ) : null}
                      </div>
                      <h2 className="heading-section mb-4 group-hover:text-accent transition-colors">{posts[0].title}</h2>
                      <p className="text-body mb-4">{posts[0].excerpt}</p>
                      <span className="text-sm text-muted-foreground">{posts[0].date}</span>
                    </div>
                  </article>
                </Link>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {posts.slice(1).map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                      <article className="card-hover rounded-lg overflow-hidden bg-card h-full">
                        {post.image ? (
                          <div className="aspect-[16/10] overflow-hidden">
                            <img
                              src={withBasePath(post.image)}
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>
                        ) : null}
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-small">{post.category}</span>
                            {post.readTime ? (
                              <>
                                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                                <span className="text-small">{post.readTime}</span>
                              </>
                            ) : null}
                          </div>
                          <h3 className="heading-card mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">{post.date}</span>
                            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Blog
