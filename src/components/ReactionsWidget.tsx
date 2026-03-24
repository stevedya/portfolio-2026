'use client'

import { useEffect, useMemo, useState } from 'react'
import { doc, increment, onSnapshot, setDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export type ReactionDef = {
  key: string
  emoji: string
  label: string
}

type ReactionsWidgetProps = {
  slug: string
  reactions: ReactionDef[]
  title?: string
  showHint?: boolean
  containerClassName?: string
}

const makeEmptyCounts = (reactions: ReactionDef[]) =>
  Object.fromEntries(reactions.map((reaction) => [reaction.key, 0])) as Record<string, number>

const makeEmptyMine = (reactions: ReactionDef[]) =>
  Object.fromEntries(reactions.map((reaction) => [reaction.key, false])) as Record<string, boolean>

export default function ReactionsWidget({
  slug,
  reactions,
  title = 'Reactions',
  showHint = true,
  containerClassName,
}: ReactionsWidgetProps) {
  const [counts, setCounts] = useState<Record<string, number>>(() => makeEmptyCounts(reactions))
  const [mine, setMine] = useState<Record<string, boolean>>(() => makeEmptyMine(reactions))
  const [errorText, setErrorText] = useState<string | null>(null)

  const docRef = useMemo(() => doc(db, 'reactions', slug), [slug])

  useEffect(() => {
    const nextMine = makeEmptyMine(reactions)
    for (const reaction of reactions) {
      const key = `reacted:${slug}:${reaction.key}`
      nextMine[reaction.key] = sessionStorage.getItem(key) === '1'
    }
    setMine(nextMine)

    const unsubscribe = onSnapshot(
      docRef,
      (snap) => {
        if (!snap.exists()) {
          setCounts(makeEmptyCounts(reactions))
          return
        }

        const data = snap.data() as Record<string, unknown>
        const nextCounts = makeEmptyCounts(reactions)
        for (const reaction of reactions) {
          const value = data[reaction.key]
          if (typeof value === 'number') {
            nextCounts[reaction.key] = value
          }
        }
        setCounts(nextCounts)
        setErrorText(null)
      },
      (err: any) => {
        console.error('Firestore realtime listener failed:', err)
        setErrorText(`Reactions sync issue (${err?.code || 'listen-failed'})`)
      },
    )

    return () => unsubscribe()
  }, [docRef, reactions, slug])

  const react = async (key: string) => {
    if (mine[key]) return

    const sessionKey = `reacted:${slug}:${key}`
    if (sessionStorage.getItem(sessionKey) === '1') return

    setMine((prev) => ({ ...prev, [key]: true }))
    setCounts((prev) => ({ ...prev, [key]: (prev[key] ?? 0) + 1 }))
    sessionStorage.setItem(sessionKey, '1')

    try {
      const fallbackKey = `reactions:fallback:${slug}`
      const current = localStorage.getItem(fallbackKey)
      const parsed = current ? (JSON.parse(current) as Record<string, number>) : makeEmptyCounts(reactions)
      const next = { ...parsed, [key]: (parsed[key] ?? 0) + 1 }
      localStorage.setItem(fallbackKey, JSON.stringify(next))
    } catch {
      // ignore local fallback errors
    }

    try {
      await setDoc(
        docRef,
        {
          [key]: increment(1),
          updatedAt: Date.now(),
        },
        { merge: true },
      )
      setErrorText(null)
    } catch (err: any) {
      console.error('Firestore write failed:', err)
      setErrorText(`Reactions sync issue (${err?.code || 'write-failed'})`)
    }
  }

  return (
    <section className={containerClassName}>
      {title ? <p className="text-sm text-muted-foreground mb-3">{title}</p> : null}
      <div className="flex flex-wrap gap-2">
        {reactions.map((reaction) => {
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
      {showHint ? <p className="text-xs text-muted-foreground mt-3">Each reaction can be clicked once per page visit.</p> : null}
      {errorText ? <p className="text-xs text-red-500 mt-2">{errorText}</p> : null}
    </section>
  )
}
