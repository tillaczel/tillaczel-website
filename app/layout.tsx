import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { colors } from '@/config/colors'

const inter = Inter({ subsets: ['latin'] })

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
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

