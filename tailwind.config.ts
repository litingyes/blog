/* eslint-disable ts/no-require-imports */
import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: [
            {
              '--tw-prose-code': 'red',
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
                backgroundColor: colors.gray[200],
                padding: '8px',
              },
              'tbody tr': {
                'transition': 'backgroundColor 0.3s',
                '&:nth-child(2n)': {
                  backgroundColor: colors.gray[50],
                },
                '&:hover': {
                  backgroundColor: colors.gray[100],
                },
              },
            },
          ],
        },
        slate: {
          css: {
            '--tw-prose-code': colors.slate[600],
          },
        },
      },
    },
  },
  plugins: [
    nextui(),
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}

export default config
