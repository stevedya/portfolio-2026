'use client'

import { useEffect, useMemo, useState } from 'react'

type ReactionKey = 'heart' | 'rocket' | 'fire' | 'thumbsup' | 'eyes' | 'thumbsdown' | 'tada'

type Reaction = {
  key: ReactionKey
  emoji: string
  label: string
}

const REACTIONS: Reaction[] = [
  { key: 'heart', emoji: '❤️', label: 'Love' },
  { key: 'rocket', emoji: '🚀', label: 'Rocket' },
  { key: 'fire', emoji: '🔥', label: 'Fire' },
  { key: 'thumbsup', emoji: '👍', label: 'Thumbs up' },
  { key: 'eyes', emoji: '👀', label: 'Eyes' },
  { key: 'thumbsdown', emoji: '👎', label: 'Thumbs down' },
  { key: 'tada', emoji: '🎉', label: 'Tada' },
]

const emptyCounts = () => Object.fromEntries(REACTIONS.map((r) => [r.key, 0])) as Record<ReactionKey, number>

export default function BlogReactions({ slug }: { slug: string }) {
  const storageKey = useMemo(() => `blog:reactions:${slug}`, [slug])
  const userKey = useMemo(() => `blog:reactions:user:${slug}`, [slug])

  const [counts, setCounts] = useState<Record<ReactionKey, number>>(emptyCounts)
  const [mine, setMine] = useState<Record<ReactionKey, boolean>>({
    heart: false,
    rocket: false,
    fire: false,
    thumbsup: false,
    eyes: false,
    thumbsdown: false,
    tada: false,
  })

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey)
      const storedMine = localStorage.getItem(userKey)
      if (stored) setCounts({ ...emptyCounts(), ...JSON.parse(stored) })
      if (storedMine) setMine((prev) => ({ ...prev, ...JSON.parse(storedMine) }))
    } catch {
      // ignore read errors
    }
  }, [storageKey, userKey])

  const toggleReaction = (key: ReactionKey) => {
    setCounts((prev) => {
      const next = { ...prev }
      const isOn = !!mine[key]
      next[key] = Math.max(0, (next[key] ?? 0) + (isOn ? -1 : 1))
      try {
        localStorage.setItem(storageKey, JSON.stringify(next))
      } catch {
        // ignore write errors
      }
      return next
    })

    setMine((prev) => {
      const next = { ...prev, [key]: !prev[key] }
      try {
        localStorage.setItem(userKey, JSON.stringify(next))
      } catch {
        // ignore write errors
      }
      return next
    })
  }

  return (
    <section className="mt-12 border-t border-border pt-6">
      <p className="text-sm text-muted-foreground mb-3">Reactions</p>
      <div className="flex flex-wrap gap-2">
        {REACTIONS.map((reaction) => {
          const active = mine[reaction.key]
          return (
            <button
              key={reaction.key}
              type="button"
              aria-label={reaction.label}
              onClick={() => toggleReaction(reaction.key)}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors ${
                active
                  ? 'border-foreground/30 bg-foreground/10 text-foreground'
                  : 'border-border bg-card text-muted-foreground hover:text-foreground'
              }`}
            >
              <span>{reaction.emoji}</span>
              <span>{counts[reaction.key] ?? 0}</span>
            </button>
          )
        })}
      </div>
      <p className="text-xs text-muted-foreground mt-3">Counts are currently stored per browser/device.</p>
    </section>
  )
}
