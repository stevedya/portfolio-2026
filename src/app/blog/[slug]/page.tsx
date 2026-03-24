import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getPostBySlug, getPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { marked } from 'marked'
import { withBasePath } from '@/lib/assets'

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }))
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <article className="container-wide max-w-3xl py-16 md:py-24">
          <div className="flex flex-wrap items-center gap-3 text-small mb-4">
            <span>{post.category}</span>
            {post.readTime ? (
              <>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span>{post.readTime}</span>
              </>
            ) : null}
          </div>
          <h1 className="heading-section mb-4">{post.title}</h1>
          <p className="text-sm text-muted-foreground mb-8">{post.date}</p>
          {post.image ? <img src={withBasePath(post.image)} alt={post.title} className="w-full rounded-lg mb-10" /> : null}
          <div
            className="prose prose-zinc dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: marked.parse(post.content) as string }}
          />
        </article>
      </main>
      <Footer />
    </div>
  )
}
