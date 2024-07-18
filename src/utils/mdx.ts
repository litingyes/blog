import { readFileSync, readdirSync } from 'node:fs'
import { basename, extname, join } from 'node:path'
import { cwd } from 'node:process'
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
import { compileMDX } from 'next-mdx-remote/rsc'
import { rehypePrune } from '@/plugins/rehypePrune.mjs'
import { mdxComponents } from '@/components/mdx'
import { transformDateStringToTimestamp } from '@/utils/date'

const blogsDir = join(cwd(), 'docs')

export function getMdxPaths() {
  return readdirSync(blogsDir, {
    recursive: true,
  }).filter(path => extname(path as string) === '.mdx')
}

export async function getMdxData(path: string) {
  const filePath = join(blogsDir, path)
  const mdxContent = readFileSync(filePath, 'utf-8')

  return {
    slug: basename(filePath, '.mdx'),
    ...await compileMDX({
      source: mdxContent,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
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
          format: 'mdx',
        },
      },
      components: mdxComponents,
    }),
  }
}

export async function getAllMdxData() {
  return (await Promise.all(getMdxPaths().map(path => getMdxData(path as string)))).sort((a, b) => transformDateStringToTimestamp(a.frontmatter.lastUpdatedTime as string) > transformDateStringToTimestamp(b.frontmatter.lastUpdatedTime as string) ? -1 : 1)
}
