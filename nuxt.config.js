module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Kegged.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'client side repository for kegged app' }
    ],
    // favicon
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/keg.png' }
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
    }
  },
  // element UI plugin
  plugins: [
    '~/plugins/ElementUI',
    '~/plugins/Timeago',
    '~/plugins/Markdown'
  ],
  // tell app to use element ui
  css: [
    'node_modules/element-ui/lib/theme-chalk/index.css'
  ]
}
