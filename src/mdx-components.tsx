import type { MDXComponents } from 'mdx/types'
import { MdxH1, MdxH2, MdxH3, MdxH4, MdxH5, MdxH6 } from '@/components/mdx/heading'
import { MdxA } from '@/components/mdx/a'
import { MdxCode } from '@/components/mdx/code'
import { MdxImg } from '@/components/mdx/img'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: MdxH1,
    h2: MdxH2,
    h3: MdxH3,
    h4: MdxH4,
    h5: MdxH5,
    h6: MdxH6,
    a: MdxA,
    code: MdxCode,
    img: MdxImg,
    ...components,
  }
}
