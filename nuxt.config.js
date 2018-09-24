module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'hosonokotaro',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
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
    }
  }
}

