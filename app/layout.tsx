import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { colors } from '@/config/colors'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://tillaczel.net'

export const metadata: Metadata = {
  title: 'Till Aczel',
  description: 'Personal academic website',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Till Aczel',
    description: 'PhD student at ETH Zurich',
    url: siteUrl,
    siteName: 'Till Aczel',
    images: [
      {
        url: `${siteUrl}/profile.jpg`,
        width: 1200,
        height: 630,
        alt: 'Till Aczel',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Till Aczel',
    description: 'PhD student at ETH Zurich',
    images: [`${siteUrl}/profile.jpg`],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const profileImageUrl = `${siteUrl}${basePath}/profile.jpg`

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Till Aczel',
    description: 'PhD student at ETH Zurich',
    image: profileImageUrl,
    url: `${siteUrl}${basePath}`,
    email: 'taczel@ethz.ch',
    jobTitle: 'PhD Student',
    worksFor: {
      '@type': 'Organization',
      name: 'ETH Zurich',
    },
    sameAs: [
      'https://github.com/tillaczel',
      'https://www.linkedin.com/in/till-aczel/',
    ],
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          <main className={`min-h-screen ${colors.background.primary} ${colors.text.primary} transition-colors duration-300`}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

