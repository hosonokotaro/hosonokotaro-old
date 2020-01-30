const title = 'WEB DEVELOPER HOSONO KOTARO'
const description = '都内で活動するフロントエンドエンジニア、細野 広太郎です。仕事・その他活動の履歴を掲載しています'
const url = 'https://hosonokotaro.jp'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  srcDir: 'src/',
  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: url + '/img/og.png' },
      { name: 'twitter:card', content: 'summary' }
    ],
    link: [
    ],
    script: [
      { src: '/__/firebase/5.4.2/firebase-app.js', body: true },
      { src: '/__/firebase/init.js', body: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#0096ff' },
  pageTransition: {
    name: 'page'
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/sass/project.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  // typescript: {
  //   typeCheck: {
  //     eslint: true
  //   }
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config) {
      if (process.server && process.browser) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
