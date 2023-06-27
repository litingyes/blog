import type { NitroCtx } from 'nuxt-module-feed'

export default defineNitroPlugin((nitroApp) => {
  const articleContentMap = new Map<string, string>()
  const articles: ParsedArticle[] = []

  // @ts-expect-error no hook
  nitroApp.hooks.hook('content:file:beforeParse', (file: ParsedArticle) => {
    articleContentMap.set(file._id, file.body)
  })

  // @ts-expect-error no hook
  nitroApp.hooks.hook('content:file:afterParse', (file: ParsedArticle) => {
    articles.push(file)
  })

  // @ts-expect-error no hook
  nitroApp.hooks.hook('feed:generate', async ({ feed }: NitroCtx) => {
    feed.options = {
      id: 'feed-rss',
      title: '文侯的博客网站',
      generator: 'nuxt with nuxt-module-feed',
      language: 'zh-CN',
      author: {
        name: 'liting-yes',
        email: 'luz.liting@gmail.com',
        link: 'https://liting.ink',
      },
      link: 'https://liting.ink',
      description: '文侯的个人博客空间',
      copyright: 'Copyright © 2023 liting-yes',
    }
    articles?.forEach((article) => {
      feed.addItem({
        title: article.title,
        id: article._id,
        link: article._path ?? 'https://liting.ink/',
        date: article._sitemap.lastmod,
        description: article.description,
        content: articleContentMap.get(article._id),
        author: [{
          name: 'liting-yes',
          email: 'luz.liting@gmail.com',
          link: 'https://liting.ink/',
        }],
        published: article.postDate,
      })
    })
    feed.addCategory('博客')
    feed.addContributor({
      name: 'liting-yes',
      email: 'luz.liting@gmail.com',
      link: 'https://liting.ink/',
    })
  })
})
