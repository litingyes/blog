import type { MDXRemoteProps } from 'next-mdx-remote/rsc'
import { MdxH1, MdxH2, MdxH3, MdxH4, MdxH5, MdxH6 } from './heading'
import { MdxA } from './a'
import { MdxPre } from './pre'
import { MdxImg } from './img'

export const mdxComponents: MDXRemoteProps['components'] = {
  h1: MdxH1,
  h2: MdxH2,
  h3: MdxH3,
  h4: MdxH4,
  h5: MdxH5,
  h6: MdxH6,
  a: MdxA,
  pre: MdxPre,
  img: MdxImg,
}
