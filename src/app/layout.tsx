import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Providers } from './providers'
import { LayoutHeader } from '@/components/layout'

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
          <main>
            {children}
          </main>
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  )
}
