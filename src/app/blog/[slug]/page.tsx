import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getPostBySlug, getPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { marked } from 'marked'
import { withBasePath } from '@/lib/assets'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post not found',
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stevensteinwand.com'
  const postUrl = `${siteUrl}/blog/${slug}`
  const imageUrl = post.image
    ? `${siteUrl}${post.image.startsWith('/') ? post.image : `/${post.image}`}`
    : `${siteUrl}/images/projects/world-wildlife-thumbnail.png`

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      type: 'article',
      url: postUrl,
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: imageUrl,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  }
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
          {post.image ? (
            <figure className="mb-10">
              <div className={post.imageSquare ? 'w-full max-w-xl aspect-square overflow-hidden rounded-lg' : ''}>
                <img
                  src={withBasePath(post.image)}
                  alt={post.title}
                  className={post.imageSquare ? 'w-full h-full object-cover rounded-lg' : 'w-full rounded-lg'}
                />
              </div>
              {post.imageCaption ? (
                <figcaption className="text-xs text-muted-foreground mt-2">{post.imageCaption}</figcaption>
              ) : null}
            </figure>
          ) : null}
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
