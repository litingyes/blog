import type { MDXComponents } from 'mdx/types'
import { Image } from '@nextui-org/react'
import NextImage from 'next/image'

export const MdxImg: Required<MDXComponents>['img'] = ({ src, width, height, ...props }) => {
  // @ts-expect-error Image props type
  return (<Image as={NextImage} src={src} width={Math.round(Number(width ?? 1600))} height={Math.round(Number(height ?? 900))} {...props} radius="md" shadow="sm" isBlurred isZoomed priority />)
}
