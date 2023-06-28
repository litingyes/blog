import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { fontSplit } from '@konghayao/cn-font-split'
import { remove } from 'fs-extra'

const __dirname = dirname(fileURLToPath(import.meta.url))

remove(resolve(__dirname, '../public/fonts/lxgw'), (err) => {
  if (err)
    return

  fontSplit({
    FontPath: resolve(__dirname, '../assets/fonts/LXGWWenKaiGBScreenR.ttf'),
    destFold: resolve(__dirname, '../public/fonts/lxgw'),
    targetType: 'ttf',
    chunkSize: 128 * 1024,
    testHTML: true,
    reporter: true,
    threads: {},
  })
})

remove(resolve(__dirname, '../public/fonts/smiley'), (err) => {
  if (err)
    return

  fontSplit({
    FontPath: resolve(__dirname, '../assets/fonts/SmileySans-Oblique.ttf'),
    destFold: resolve(__dirname, '../public/fonts/smiley'),
    targetType: 'ttf',
    chunkSize: 128 * 1024,
    testHTML: true,
    reporter: true,
    threads: {},
  })
})
