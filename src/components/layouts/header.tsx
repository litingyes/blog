'use client'

import { Tab, Tabs } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import { IconProfile } from '@/components/icons/profile'
import { IconPost } from '@/components/icons/post'

const tabs = [
  {
    title: 'About',
    href: '/about',
    icon: <IconProfile />,
  },
  {
    title: 'Posts',
    href: '/posts',
    icon: <IconPost />,
  },
]

export function LayoutHeader() {
  const pathname = usePathname()

  return (
    <div className="fixed left-1/2 top-6 -translate-x-1/2">
      <Tabs selectedKey={pathname} size="sm">
        {tabs.map(tab => (
          <Tab
            key={tab.href}
            title={(
              <div className="flex items-center gap-2 text-base">
                {tab.icon}
                <span>{tab.title}</span>
              </div>
            )}
            href={tab.href}
          />
        ))}
      </Tabs>
    </div>
  )
}
