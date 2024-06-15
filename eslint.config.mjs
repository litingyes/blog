import antfu from '@antfu/eslint-config'
import next from '@next/eslint-plugin-next'

export default antfu({
  javascript: true,
  typescript: true,
  jsx: true,
  jsonc: true,
  unocss: true,
  react: true,
  regexp: true,
  formatters: {
    css: true,
    html: true,
    markdown: true,
  },
}, {
  plugins: {
    next,
  },
})
