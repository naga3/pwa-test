// const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? { base: '/pwa-test/' } : {}
const routerBase = {}
const appId = process.env.DEPLOY_ENV === 'GH_PAGES' ? '3f0dc461-32a9-438a-becf-551d39112d85' : '4a264266-471c-4abf-a48f-8067ca820aa1'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'pwatest',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },
  modules: [
    '@nuxtjs/onesignal', // pwaの前に定義
    '@nuxtjs/pwa'
  ],
  workbox: {
    dev: true, //開発環境でもPWAできるように
  },
  router: routerBase,
  oneSignal: {
    cdn: true,
    init: {
      appId: appId,
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true
      },
    }
  },
  manifest: {
    name: 'PWAテストだよー',
    short_name: 'PWA Test',
    title: 'PWATest title',
    description: 'PWATest desc',
    lang: 'ja',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  },
}
