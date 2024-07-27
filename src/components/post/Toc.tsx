'use client'

import type { TocItem } from 'remark-flexible-toc'
import Link from 'next/link'
import type { MouseEvent } from 'react'
import { formatDomId } from '@/utils/format'
// import { updateHash } from '@/utils/dom'
import { useHash } from '@/hooks/useHash'

interface Props {
  toc: TocItem[]
}

export function PostToc({ toc }: Props) {
  const { hash, updateHash } = useHash()

  const onClickAnchor = (e: MouseEvent, id: string) => {
    e.preventDefault()

    updateHash(id)
  }

  return (
    <div className="flex flex-col gap-1 border-l border-solid border-slate-500 px-2">
      {toc.map(item => (
        <Link className={`truncate rounded py-1 text-sm transition-colors hover:bg-gray-300 dark:hover:bg-gray-700 ${(hash === `#${formatDomId(item.value)}`) ? '!bg-blue-300 dark:!bg-blue-700' : ''}`} key={item.href} href={`#${formatDomId(item.value)}`} onClick={e => onClickAnchor(e, item.value)} style={{ paddingLeft: `${(item.depth - 1) * 8}px` }}>
          {item.value}
        </Link>
      ))}
    </div>
  )
}
