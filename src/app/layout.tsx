import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import '@unocss/reset/normalize.css'
import './globals.scss'
import { LayoutHeader } from '@/components/layout'

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
          <main className="hover:bg-red-50">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
