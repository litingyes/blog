'use client'

import { useEffect, useState } from 'react'
import { VisuallyHidden, useSwitch } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@/components/icons/theme'

export default function SwitchTheme() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    defaultSelected: resolvedTheme === 'light',
    onValueChange: isSelected => setTheme(isSelected ? 'light' : 'dark'),
  })

  useEffect(() => setMounted(true), [])
  if (!mounted)
    return null

  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
              class: [
                'w-6 h-6 rounded-md flex items-center justify-center',
              ],
            })}
      >
        {isSelected ? <SunIcon /> : <MoonIcon /> }
      </div>
    </Component>
  )
}
