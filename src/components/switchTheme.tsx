'use client'

import { useEffect, useState } from 'react'
import { Switch } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@/components/icons/theme'

export default function SwitchTheme() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted)
    return null

  const onSwitchTheme = (isSelected: boolean) => {
    setTheme(isSelected ? 'light' : 'dark')
  }

  return (
    <Switch
      defaultSelected={resolvedTheme === 'light'}
      size="sm"
      color="success"
      thumbIcon={({ isSelected, className }) =>
        isSelected
          ? (
            <SunIcon className={className} />
            )
          : (
            <MoonIcon className={className} />
      )}
      onValueChange={onSwitchTheme}
    >
    </Switch>
  )
}
