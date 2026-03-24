import ReactionsWidget, { type ReactionDef } from '@/components/ReactionsWidget'

const BLOG_REACTIONS: ReactionDef[] = [
  { key: 'heart', emoji: '❤️', label: 'Love' },
  { key: 'rocket', emoji: '🚀', label: 'Rocket' },
  { key: 'fire', emoji: '🔥', label: 'Fire' },
  { key: 'thumbsup', emoji: '👍', label: 'Thumbs up' },
  { key: 'eyes', emoji: '👀', label: 'Eyes' },
  { key: 'thumbsdown', emoji: '👎', label: 'Thumbs down' },
  { key: 'tada', emoji: '🎉', label: 'Tada' },
]

export default function BlogReactions({ slug }: { slug: string }) {
  return (
    <ReactionsWidget
      slug={slug}
      reactions={BLOG_REACTIONS}
      title="Reactions"
      showHint
      containerClassName="mt-12 border-t border-border pt-6"
    />
  )
}
