
const path = require('path');

function tryResolve_(url, sourceFilename) {
    // Put require.resolve in a try/catch to avoid node-sass failing with cryptic libsass errors
    // when the importer throws
    try {
        return require.resolve(url, { paths: [path.dirname(sourceFilename)] });
    } catch (e) {
        return '';
    }
}

function tryResolveScss(url, sourceFilename) {
    // Support omission of .scss and leading _
    const normalizedUrl = url.endsWith('.scss') ? url : `${url}.scss`;
    return tryResolve_(normalizedUrl, sourceFilename) ||
        tryResolve_(path.join(path.dirname(normalizedUrl), `_${path.basename(normalizedUrl)}`),
            sourceFilename);
}

function materialImporter(url, prev) {
    if (url.startsWith('@material')) {
        const resolved = tryResolveScss(url, prev);
        return { file: resolved || url };
    }
    return { file: url };
}
module.exports = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#00DD00' },
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~/plugins/filters' },
        { src: '~/plugins/vuelidate' },
        // { src: '~/plugins/material' },
        { src: '~/plugins/toasted', ssr: false },
        { src: '~/plugins/prism', ssr: false },

    ],
    /*
     ** Global CSS
     */
    css: ['@/assets/scss/main.scss'],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
    ],
    //     vueMaterial: {
    //     theme: 'default-dark'
    //   }
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    serverMiddleware: ['~/server/routes/index'],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, { isDev, isClient }) { },
        postcss: {
            plugins: {

            },
            preset: {
                autoprefixer: {
                    grid: true
                }
            }
        }
    },
    buildModules: [
        // With options
        ['@nuxtjs/vuetify', { /* module options */ }]
    ],
    loader: 'sass-loader',
    options: {
        importer: materialImporter
    },
}
