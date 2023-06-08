// @nuxt/content
interface ParsedContentInternalMeta {
  _id: string
  _source?: string
  _path?: string
  title?: string
  _draft?: boolean
  _partial?: boolean
  _locale?: string
  _type?: string
  _file?: string
  _extension?: string
}

interface ParsedContentMeta extends ParsedContentInternalMeta {
  [key: string]: any
}

interface ParsedContent extends ParsedContentMeta {
  excerpt?: any
  body: any
}

interface ParsedArticle extends ParsedContent {
  title: string
  description: string
  postDate: Date
  _sitemap: {
    loc: string
    lastmod: Date
  }
}