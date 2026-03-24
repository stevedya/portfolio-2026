import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getPostBySlug, getPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'

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
          <p className="text-small mb-4">{post.category}</p>
          <h1 className="heading-display mb-4">{post.title}</h1>
          <p className="text-sm text-muted-foreground mb-8">{post.date}</p>
          {post.image ? <img src={post.image} alt={post.title} className="w-full rounded-lg mb-10" /> : null}
          <div className="prose prose-zinc dark:prose-invert max-w-none whitespace-pre-line">{post.content.trim()}</div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
