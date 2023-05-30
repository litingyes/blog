import readingTime from 'reading-time'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:beforeParse', (file) => {
    const content: string = file.body
    const frontMatter = content.match(/^---.*?---\r?\n/ms)

    if (frontMatter?.length) {
      const oldFrontMatter = frontMatter[0]
      const content_ = content.replace(oldFrontMatter, '')
      const measureResults = readingTime(content_)
      file.body = `---
readMinutes: ${measureResults.minutes}
readTime: ${measureResults.time}
totalCount: ${measureResults.words}
${oldFrontMatter.replace(/^---\r?\n/, '')}
${content_}`
    }
    else {
      const measureResults = readingTime(content)
      file.body = `---
readMinutes: ${measureResults.minutes}
readTime: ${measureResults.time}
totalCount: ${measureResults.words}
---
${content}`
    }
  })
})
