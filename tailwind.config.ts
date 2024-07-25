/* eslint-disable ts/no-require-imports */
import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './src/app/**/*.tsx',
    './src/components/**/*.tsx',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: [
            {
              'a': {
                'color': colors.blue[400],
                'text-decoration-line': 'underline',
                'text-decoration-color': 'currentColor',
                'text-decoration-style': 'solid',
                'text-decoration-thickness': '1px',
                'text-underline-offset': '4px',
              },
              'img': {
                margin: 0,
              },
              'pre': {
                position: 'relative',
              },
              'code': {
                padding: '4px 8px',
                backgroundColor: colors.gray[200],
                borderRadius: '4px',
              },
              'code::before': {
                content: 'none',
              },
              'code::after': {
                content: 'none',
              },
              'thead th': {
                backgroundColor: 'var(--tw-prose-th)',
                padding: '8px',
              },
              'tbody tr': {
                'transition': 'backgroundColor 0.3s',
                '&:nth-child(2n)': {
                  backgroundColor: 'var(--tw-prose-tr)',
                },
                '&:hover': {
                  backgroundColor: 'var(--tw-prose-tr-hover)',
                },
              },
            },
          ],
        },
        slate: {
          css: {
            '--tw-prose-code': colors.slate[600],
            '--tw-prose-invert-body': colors.slate[100],
            '--tw-prose-th': colors.gray[200],
            '--tw-prose-invert-th': colors.gray[800],
            '--tw-prose-tr': colors.gray[50],
            '--tw-prose-invert-tr': colors.gray[900],
            '--tw-prose-tr-hover': colors.gray[100],
            '--tw-prose-invert-tr-hover': colors.gray[700],
          },
        },
        invert: {
          css: {
            '--tw-prose-th': 'var(--tw-prose-invert-th)',
            '--tw-prose-tr': 'var(--tw-prose-invert-tr)',
            '--tw-prose-tr-hover': 'var(--tw-prose-invert-tr-hover)',
          },
        },
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: colors.gray[100],
          },
        },
        dark: {
          colors: {
            background: colors.gray[950],
          },
        },
      },
    }),
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}

export default config
