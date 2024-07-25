'use client'

import { SwitchTheme } from '@/components/switchTheme'

export function LayoutFooter() {
  return (
    <footer className="fixed inset-x-0 bottom-0 flex h-12 items-center justify-between bg-gray-100/30 px-6 backdrop-blur-sm dark:bg-gray-950/70">
      <div />
      <p className="text-sm text-slate-500">Copyright © 2024-present litingyes </p>
      <div>
        <SwitchTheme />
      </div>
    </footer>
  )
}
