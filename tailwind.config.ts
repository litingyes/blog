/* eslint-disable ts/no-require-imports */
import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    nextui(),
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}

export default config
