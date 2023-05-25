export default defineNuxtConfig({
    modules: [
        '@nuxtjs/eslint-module',
        '@unocss/nuxt',
        '@nuxt/image-edge',
        '@nuxthq/ui',
        '@nuxtjs/color-mode',
        '@nuxtjs/stylelint-module',
        '@nuxtjs/fontaine',
        '@nuxt/image-edge',
        'nuxt-purgecss',
        '@vueuse/nuxt',
    ],
    colorMode: {
        preference: 'system',
        fallback: 'light',
        storageKey: 'liting-blog-color-mode',
    },
    css: [
        '@unocss/reset/tailwind-compat.css',
        'animate.css',
        '@/assets/styles/root.scss',
    ],
    stylelint: {},
    image: {
        screens: {
            sm: 676,
            md: 960,
            lg: 1440,
        },
    },
    purgecss: {
        keyframes: true,
    },
})
