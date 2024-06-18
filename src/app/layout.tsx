import type { Metadata } from 'next'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
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
        <NextUIProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <LayoutHeader />
            <main>
              {children}
            </main>
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}
