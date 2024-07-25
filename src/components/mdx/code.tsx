'use client'

import type { MDXComponents } from 'mdx/types'
import { Button, Chip } from '@nextui-org/react'
import { useRef, useState } from 'react'
import { useHover } from 'ahooks'
import { IconCopy } from '@/components/icons/copy'
import { IconCheckmark } from '@/components/icons/checkmark'
import { copyToClipboard } from '@/utils/dom'

const LANGUAGE_PREFIX = 'language-'

export const MdxCode: Required<MDXComponents>['code'] = ({ children, ...props }) => {
  const language = props.className?.split(' ').filter(str => str.startsWith(LANGUAGE_PREFIX)).map(str => str.slice(LANGUAGE_PREFIX.length))[0]

  const copyRef = useRef<HTMLElement>(null)
  const bar = useRef<HTMLDivElement>(null)
  const isHovering = useHover(bar)
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    copyToClipboard(copyRef.current?.textContent ?? '').then(() => {
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    })
  }

  return (
    <code ref={copyRef} {...props}>
      {children}
      {language
        ? (
            <div ref={bar} className="absolute right-1 top-1">
              {isHovering
                ? (
                    <Button className="text-xl" color={copied ? 'success' : 'default'} size="sm" isDisabled={copied} isIconOnly onClick={handleCopy}>
                      {copied ? <IconCheckmark /> : <IconCopy />}
                    </Button>
                  )
                : (
                    <Chip color="secondary" size="sm" radius="sm" variant="flat">{language}</Chip>
                  )}
            </div>
          )
        : null}
    </code>
  )
}
