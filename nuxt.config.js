module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'WEB DEVELOPER >> HOSONO KOTARO',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '都内で活動するフロントエンドエンジニア、細野 広太郎です。仕事の履歴や活動履歴を掲載しています' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'WEB DEVELOPER >> HOSONO KOTARO' },
      { property: 'og:description', content: '都内で活動するフロントエンドエンジニア、細野 広太郎です。仕事の履歴や活動履歴を掲載しています' },
      { property: 'twitter:card', content: 'summary' }
    ],
    link: [
    ],
    script: [
      { src: '/__/firebase/5.4.2/firebase-app.js', body: true },
      { src: '/__/firebase/init.js', body: true }
    ],
  },
  css: [
    '@/assets/sass/project.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#0096ff' },
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
    }
  }
}

