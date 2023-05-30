import { resolve } from 'node:path'

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
        '@vueuse/nuxt',
        '@vite-pwa/nuxt',
        '@nuxt/content',
        ['@pinia/nuxt', {
            autoImports: ['defineStore', 'storeToRefs'],
        }],
        'dayjs-nuxt',
        'nuxt-simple-sitemap',
        '@nuxtjs/robots',
    ],
    colorMode: {
        storageKey: 'liting-blog-color-mode',
        preference: 'dark',
    },
    css: [
        '@unocss/reset/tailwind-compat.css',
        '@/assets/styles/root.scss',
    ],
    stylelint: {},
    image: {
        screens: {
            sm: 676,
            md: 960,
            lg: 1440,
        },
        provider: 'ipx',
    },
    pwa: {
        registerType: 'autoUpdate',
        manifest: {
            name: '文侯的博客',
            short_name: '博客',
        },
        client: {
            installPrompt: true,
        },
        devOptions: {
            enabled: true,
            type: 'module',
        },
    },
    content: {
        documentDriven: true,
        sources: {
            content: {
                driver: 'fs',
                prefix: '/articles',
                base: resolve(__dirname, 'articles'),
            },
        },
        highlight: {
            theme: {
                default: 'rose-pine-dawn',
                dark: 'rose-pine-moon',
            },
        },
        markdown: {
            anchorLinks: {
                depth: 2,
                exclude: [1],
            },
        },
    },
    dayjs: {
        // locales: ['zh-cn'],
        // defaultLocale: 'zh-cn',
        // defaultTimezone: 'Asia/Shanghai',
        // plugins: ['utc', 'timezone'],
    },
    sitemap: {
        siteUrl: 'https://www.liting.ink',
    },
    imports: {
        dirs: ['stores'],
    },
})
