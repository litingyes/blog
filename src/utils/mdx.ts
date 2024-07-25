import { readFileSync, readdirSync } from 'node:fs'
import { basename, extname, join } from 'node:path'
import { cwd } from 'node:process'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkGfm from 'remark-gfm'
import stringWidth from 'string-width'
import remarkExtendedTable from 'remark-extended-table'
import remarkToc from 'remark-toc'
import remarkEmoji from 'remark-emoji'
import remarkA11yEmoji from '@fec/remark-a11y-emoji'
import remarkBreaks from 'remark-breaks'
import remarkDirective from 'remark-directive'
import remarkRemoveUrlTrailingSlash from 'remark-remove-url-trailing-slash'
import remarkFlexibleContainers from 'remark-flexible-containers'
import rehypeShiki from '@shikijs/rehype'
import {
  transformerCompactLineOptions,
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
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
    ...(await compileMDX({
      source: mdxContent,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [
            remarkFrontmatter,
            remarkMdxFrontmatter,
            [
              remarkGfm,
              {
                stringWidth,
                tableCellPadding: false,
              },
            ],
            remarkExtendedTable,
            [
              remarkFlexibleContainers,
              {
                containerTagName: (type: string) =>
                  type === 'details' ? 'details' : 'section',
                containerClassName: 'post-banner',
                containerProperties: (type: string) => ({
                  'data-type': type,
                }),
                title: (type: string, title: string) =>
                  title?.trim() ? title : type.toLocaleUpperCase(),
                titleTagName: (type: string) => {
                  return type === 'details' ? 'summary' : 'div'
                },
                titleClassName: 'post-banner__title',
              },
            ],
            remarkToc,
            remarkEmoji,
            remarkA11yEmoji,
            remarkBreaks,
            remarkDirective,
            remarkRemoveUrlTrailingSlash,
          ],
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
                  transformerCompactLineOptions(),
                ],
                addLanguageClass: true,
              },
            ],
            [
              rehypeExternalLinks,
              {
                rel: [''],
                target: '_blank',
              },
            ],
            rehypeSlug,
            rehypePrune,
          ],
          format: 'mdx',
        },
      },
      components: mdxComponents,
    })),
  }
}

export async function getAllMdxData() {
  return (
    await Promise.all(getMdxPaths().map(path => getMdxData(path as string)))
  ).sort((a, b) =>
    transformDateStringToTimestamp(a.frontmatter.lastUpdatedTime as string)
    > transformDateStringToTimestamp(b.frontmatter.lastUpdatedTime as string)
      ? -1
      : 1,
  )
}
