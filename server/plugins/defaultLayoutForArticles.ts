export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    if (!file._id.endsWith('.md') || (file.layout && file.layout !== 'default'))
      return
    file.layout = 'article'
  })
})
