import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stevensteinwand.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s - Steven Steinwand',
    default: 'Steven Steinwand - Software developer & photographer based in Canada.',
  },
  description: 'Software developer & photographer based in Canada.',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Steven Steinwand - Software developer & photographer based in Canada.',
    description: 'Software developer & photographer based in Canada.',
    images: [
      {
        url: '/images/projects/world-wildlife-thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Steven Steinwand Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steven Steinwand - Software developer & photographer based in Canada.',
    description: 'Software developer & photographer based in Canada.',
    images: ['/images/projects/world-wildlife-thumbnail.png'],
  },
  alternates: {
    canonical: siteUrl,
    types: {
      'application/rss+xml': `${siteUrl}/feed.xml`,
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
