export default defineNuxtConfig({
    modules: [
        '@nuxtjs/eslint-module',
        '@unocss/nuxt',
        '@nuxt/image-edge',
        '@nuxthq/ui',
        '@nuxtjs/color-mode',
        '@nuxtjs/stylelint-module',
    ],
    colorMode: {
        preference: 'system',
        fallback: 'light',
        storageKey: 'liting-blog-color-mode',
    },
    css: [
        '@unocss/reset/tailwind-compat.css',
        '@/assets/root.scss',
    ],
    stylelint: {},
})
