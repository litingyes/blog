import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Providers } from './providers'
import { LayoutHeader } from '@/components/layouts/header'
import { LayoutFooter } from '@/components/layouts/footer'

import '@unocss/reset/normalize.css'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Liting\'s Blog',
  description: 'Study & Record',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <LayoutHeader />
          <main id="main" className="max-h-screen snap-y overflow-auto px-32 pb-12 pt-20">
            {children}
          </main>
          <LayoutFooter />
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  )
}
