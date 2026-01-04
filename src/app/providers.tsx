'use client'

import { createContext, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/hooks/use-theme'
import { ThemeProvider} from '@/hooks/use-theme'

function usePrevious<T>(value: T) {
  let ref = useRef<T | undefined>(undefined)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export const AppContext = createContext<{ previousPathname?: string }>({})

export function Providers({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let previousPathname = usePrevious(pathname)

  return (
    <AppContext.Provider value={{ previousPathname }}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  )
}
