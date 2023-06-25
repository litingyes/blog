import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetTypography(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      collections: {
        custom: {
          blibli: `
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
              <path
                d="M894.597 152.050147h-188.943502l91.836749-91.836749A34.615603 34.615603 0 0 0 748.562423 11.285574l-140.764573 140.764573h-138.545624L328.487653 11.285574a34.615603 34.615603 0 1 0-48.927824 48.927824l91.836749 91.836749H182.425339A182.425339 182.425339 0 0 0 0 334.586434v447.950317a182.425339 182.425339 0 0 0 182.425339 182.425339h26.655124a58.996305 58.996305 0 0 0 117.99261 0h422.876193a58.996305 58.996305 0 0 0 117.99261 0h26.655124a182.425339 182.425339 0 0 0 182.42534-182.425339v-447.950317a182.425339 182.425339 0 0 0-182.42534-182.425339m58.24741 639.889399a67.872101 67.872101 0 0 1-67.872101 67.872101H192.105504a67.872101 67.872101 0 0 1-67.8721-67.872101V325.072691a67.872101 67.872101 0 0 1 67.8721-67.872101H884.805888a67.872101 67.872101 0 0 1 67.872101 67.872101z" fill="currentColor">
              </path>
              <path d="M413.556608 412.000015l-222.727 44.378979 17.252328 83.51569 222.699263-43.74103z" fill="currentColor"></path>
              <path d="M646.213404 496.18139l222.726999 43.741031 17.224591-83.51569-222.726999-44.378979z" fill="currentColor"></path>
              <path
                d="M599.504529 698.937849c-21.884384 0-45.987717-29.844863-60.771464-61.631306l-0.221895 1.026264-0.194158-1.026264c-14.783747 31.81418-38.831606 61.631307-60.771464 61.631306s-47.735139-34.476919-47.735139-34.476919l-33.811235 22.550069a102.626388 102.626388 0 0 0 86.844114 54.364249 95.886331 95.886331 0 0 0 55.667882-29.567495 95.997278 95.997278 0 0 0 55.695618 29.567495 102.626388 102.626388 0 0 0 86.844114-54.364249l-33.811234-22.550069s-25.850755 34.476919-47.735139 34.476919" fill="currentColor">
              </path>
            </svg>
          `,
        },
      },
    }),
    presetUno(),
    presetScrollbar(),
  ],
  theme: {
    breakpoints: {
      sm: '480px',
      md: '960px',
      lg: '1440px',
    },
  },
  rules: [
    ['font-smiley', {
      'font-family': 'SmileySans',
    }],
  ],
  shortcuts: {
    'btn-container': 'dark:hover:bg-slate-700 hover:bg-slate-200 rounded-lg flex justify-center items-center cursor-pointer',
    'scrollbar-primary': 'scrollbar scrollbar-rounded scrollbar-track-color-slate-200 dark:scrollbar-track-color-slate-700 scrollbar-thumb-color-slate-300 dark:scrollbar-thumb-color-slate-600',
    'scrollbar-hidden': 'scrollbar scrollbar-w-0',
    'link': 'no-underline relative after:(absolute inset-y-0 left-0 block w-0 border-black transition-all content-[\'\'] dark:border-white) hover:after:(w-full border-b-2)',
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
