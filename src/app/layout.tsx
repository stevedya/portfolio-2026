import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Steven Steinwand',
    default:
      'Steven Steinwand - Software developer & photographer based in Canada.',
  },
  description:
    'Software developer & photographer based in Canada.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:shadow"
        >
          Skip to main content
        </a>
        <Providers>
          <div id="main-content" tabIndex={-1}>
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
