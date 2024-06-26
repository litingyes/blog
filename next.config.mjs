import withMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkGfm from 'remark-gfm'
import rehypeShiki from '@shikijs/rehype'
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
  transformerRenderWhitespace,

} from '@shikijs/transformers'
import { rehypePrune } from './plugins/rehypePrune.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

export default withMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
    rehypePlugins: [
      [
        rehypeShiki,
        {
          themes: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
          },
          transformers: [
            transformerMetaHighlight(),
            transformerMetaWordHighlight(),
            transformerNotationDiff(),
            transformerNotationErrorLevel(),
            transformerNotationFocus(),
            transformerNotationHighlight(),
            transformerNotationWordHighlight(),
            transformerRenderWhitespace(),
          ],
        },
      ],
      rehypePrune,
    ],
  },
})(nextConfig)
