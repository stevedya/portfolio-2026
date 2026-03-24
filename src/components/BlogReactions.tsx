'use client'

import { useEffect, useMemo, useState } from 'react'
import { doc, getDoc, increment, setDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

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

  const docRef = useMemo(() => doc(db, 'reactions', slug), [slug])

  useEffect(() => {
    const load = async () => {
      try {
        const snap = await getDoc(docRef)
        if (snap.exists()) {
          const data = snap.data() as Partial<Record<ReactionKey, number>>
          setCounts({ ...emptyCounts(), ...data })
        }
      } catch {
        // ignore
      }

      const nextMine = { ...mine }
      for (const reaction of REACTIONS) {
        const key = `reacted:${slug}:${reaction.key}`
        nextMine[reaction.key] = sessionStorage.getItem(key) === '1'
      }
      setMine(nextMine)
    }

    void load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docRef, slug])

  const react = async (key: ReactionKey) => {
    if (mine[key]) return

    const sessionKey = `reacted:${slug}:${key}`
    if (sessionStorage.getItem(sessionKey) === '1') return

    setMine((prev) => ({ ...prev, [key]: true }))
    setCounts((prev) => ({ ...prev, [key]: (prev[key] ?? 0) + 1 }))

    sessionStorage.setItem(sessionKey, '1')

    try {
      await setDoc(
        docRef,
        {
          [key]: increment(1),
          updatedAt: Date.now(),
        },
        { merge: true },
      )
    } catch {
      // ignore
    }
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
              onClick={() => react(reaction.key)}
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
      <p className="text-xs text-muted-foreground mt-3">Each reaction can be clicked once per page visit.</p>
    </section>
  )
}
