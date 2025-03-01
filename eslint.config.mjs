import antfu from '@antfu/eslint-config'
// the mdx plugin will remove symbol like #
// import * as mdx from 'eslint-plugin-mdx'
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
    rules: {
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'n/prefer-global/process': ['error', 'always'],
    },
  },
  // {
  //   ...mdx.flat,
  // },
  ...compat.config(
    {
      extends: ['plugin:@next/next/recommended', 'plugin:tailwindcss/recommended'],
      rules: {
        '@next/next/no-duplicate-head': 0,
        'tailwindcss/no-custom-classname': [1, {
          whitelist: ['^post-.*'],
        }],
      },
    },
  ),
)
