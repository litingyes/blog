import type { MDXComponents } from 'mdx/types'
import { Image } from '@nextui-org/react'
import NextImage from 'next/image'

export const MdxImg: Required<MDXComponents>['img'] = ({ src, width, height, ...props }) => {
  // @ts-expect-error Image props type
  return (<Image as={NextImage} src={src} width={Math.round(Number(width))} height={Math.round(Number(height))} {...props} radius="md" shadow="sm" isBlurred isZoomed />)
}
