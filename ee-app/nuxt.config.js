import axios from 'axios';
import getRoutes from "./utils/getRoutes";
export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    publicRuntimeConfig: {
        axios: {
            baseURL: process.env.NODE_ENV === 'production' ? process.env.BASE_URL || 'http://localhost:8888/' : 'http://localhost:8888/',
        }
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Home',
        htmlAttrs: {
            lang: 'en'
        },
        titleTemplate: '%s | Entropia Estate',
        meta: [
            { charset: 'utf-8' },
            { 'http-equiv': 'X-UA-Compatible', content:'IE=edge' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Market data from auction about Player housing in Entropia Universe. And your first stop for virtual visits of Entropia estates.' },
            // Twitter
            {
                hid: 'twitter:card',
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            {
                hid: 'twitter:url',
                name: 'twitter:url',
                content: 'https://entropia.estate'
            },
            {
                hid: 'twitter:title',
                name: 'twitter:title',
                content: 'Entropia Estate'
            },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: 'Market data from auction about Player housing in Entropia Universe. And your first stop for virtual visits of Entropia estates.'
            },
            {
                hid: 'twitter:image',
                name: 'twitter:image',
                content: 'https://entropia.estate/img/og-img-entropia-market-default.png'
            },
            // Open Graph
            { hid: 'og:site_name', property: 'og:site_name', content: 'Entropia Estate' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            {
                hid: 'og:url',
                property: 'og:url',
                content: 'https://entropia.estate'
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: 'Entropia Estate'
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'Market data from auction about Player housing in Entropia Universe. And your first stop for virtual visits of Entropia estates.'
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: 'https://entropia.estate/img/og-img-entropia-market-default.png'
            },
            {
                hid: 'og:image:secure_url',
                property: 'og:image:secure_url',
                content: 'https://entropia.estate/img/og-img-entropia-market-default.png'
            },
            {
                hid: 'og:image:alt',
                property: 'og:image:alt',
                content: 'Entropia Estate'
            }
        ],
        link: [
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://entropia.estate/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://entropia.estate/favicon-16x16.png' },
            { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css' },
            { rel: 'stylesheet', href: 'https://unpkg.com/vue-cool-lightbox/dist/vue-cool-lightbox.min.css' }
        ]
    },
    script: [

    ],
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/styles/main.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/gtag', mode: "client" },
        { src: '~/plugins/vue-js-clipboard.js', mode: "client" },
        { src: '~/plugins/ped-format.js', mode: "client" },
        { src: '~/plugins/planet-link-format.js', mode: "client" },
        { src: '~/plugins/vue-scrollto.js', mode: "client" },
        { src: '~/plugins/supabase.js' }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        'nuxt-purgecss',
        ['@fullhuman/postcss-purgecss', {
            content: ['./pages/**/*.vue', './components/**/*.vue'], safelist: ['html', 'body']}
        ]
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/sitemap',
        '@nuxtjs/robots',
        '@nuxtjs/axios',
        ['vue-scrollto/nuxt', { duration: 300 }],
        '@nuxtjs/redirect-module',
        [
            'nuxt-social-meta',
            {
                site_name: "Entropia Estate",
                author: "Heuze Productions",
                img: "https://entropia.estate/img/og-img-entropia-market-default.png",
                img_size: { width: "1200", height: "630" },
                locale: "en_US",
                twitter: "@E2Prod",
                twitter_card: "summary",
                theme_color: "#117492"
            }
        ],
        // ['@nuxtjs/google-adsense', {
        //     id: 'ca-pub-7979199247908074'
        // }],
        'nuxt-highcharts',
        '@nuxt/content'
    ],
    highcharts: {
        /* module options */
    },
    redirect: [
        { from: '^/deeds-and-shares.php', to: '/deeds-condos-shops-estates/', statusCode: 301 }
    ],
    //robots.txt
    robots: {
        Sitemap: 'https://entropia.estate/sitemap.xml',
        UserAgent: '*',
        Allow: '/'
    },
    //content
    content: {
        fullTextSearchFields: ['title', 'description', 'slug'],
        liveEdit: false
    },
    loading: {
        color: '#8bdbff',
        height: '7px',
        continuous: true,
        duration: 3000
    },
    hooks: {
    },
    //Sitemap config
    sitemap: {
        hostname: 'https://entropia.estate',
        trailingSlash: true,
        defaults: {
            changefreq: 'daily',
            priority: 1,
            lastmod: new Date()
        },
        routes() {
            return getRoutes();
        }
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        cssSourceMap: true,
        extractCSS: true,
        analyze: false
    },
    generate: {
        fallback: '404.html'
    },
    router: {
        trailingSlash: true
    }
}