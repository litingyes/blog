import antfu from '@antfu/eslint-config'
import * as mdx from 'eslint-plugin-mdx'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    javascript: true,
    typescript: true,
    jsx: true,
    jsonc: true,
    react: true,
    regexp: true,
    formatters: {
      css: true,
      html: true,
      markdown: true,
    },
  },
  {
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
  },
  {
    ...mdx.flatCodeBlocks,
  },
  ...compat.config(
    {
      extends: ['plugin:@next/next/recommended', 'plugin:tailwindcss/recommended'],
    },
  ),
)
