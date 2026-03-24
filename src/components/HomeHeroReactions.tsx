import ReactionsWidget, { type ReactionDef } from '@/components/ReactionsWidget'

const HOME_REACTIONS: ReactionDef[] = [
  { key: 'wave', emoji: '👋', label: 'Wave' },
  { key: 'heart', emoji: '❤️', label: 'Love' },
  { key: 'fire', emoji: '🔥', label: 'Fire' },
  { key: 'eyes', emoji: '👀', label: 'Eyes' },
  { key: 'thumbsup', emoji: '👍', label: 'Thumbs up' },
]

export default function HomeHeroReactions() {
  return (
    <ReactionsWidget
      slug="home-hero"
      reactions={HOME_REACTIONS}
      title=""
      showHint={false}
      containerClassName="mt-5"
    />
  )
}
