import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export type Post = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime?: string
  image?: string
  content: string
  order?: number
}

const postsDir = path.join(process.cwd(), 'src', 'content', 'blog')

const normalizePost = (slug: string, data: Record<string, unknown>, content: string): Post => ({
  slug,
  title: String(data.title ?? ''),
  excerpt: String(data.excerpt ?? ''),
  category: String(data.category ?? 'General'),
  date: String(data.date ?? ''),
  readTime: data.readTime ? String(data.readTime) : undefined,
  image: data.image ? String(data.image) : undefined,
  order: typeof data.order === 'number' ? data.order : undefined,
  content,
})

export const getPosts = (): Post[] => {
  if (!fs.existsSync(postsDir)) return []

  const entries = fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))

  const posts = entries.map((file) => {
    const fullPath = path.join(postsDir, file)
    const slug = path.basename(file, path.extname(file))
    const contents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(contents)
    return normalizePost(slug, data, content)
  })

  return posts.sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) return a.order - b.order
    if (a.order !== undefined) return -1
    if (b.order !== undefined) return 1
    return b.date.localeCompare(a.date)
  })
}

export const getLatestPosts = (limit = 3): Post[] => getPosts().slice(0, limit)

export const getPostBySlug = (slug: string): Post | null => {
  const postPathMd = path.join(postsDir, `${slug}.md`)
  const postPathMdx = path.join(postsDir, `${slug}.mdx`)
  const postPath = fs.existsSync(postPathMd) ? postPathMd : postPathMdx

  if (!postPath || !fs.existsSync(postPath)) return null

  const contents = fs.readFileSync(postPath, 'utf8')
  const { data, content } = matter(contents)
  return normalizePost(slug, data, content)
}
