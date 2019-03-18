import pkg from './package'
import routes from './routes'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Mono:100,400'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.css', '~/assets/css/tailwind.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['nuxt-purgecss', { mode: 'postcss' }]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  purgeCSS: {
    whitelist: ['text-black', 'text-white'],
    enabled: true,
    mode: 'postcss'
    // extractors: [
    //   {
    //     extractor: class {
    //       static extract(content) {
    //         // return content.match(/[A-Za-z0-9-_:\\/]+/g) || []
    //         return content.match(/[A-z   0-9-_:\\/]+/g)
    //       }
    //     },
    //     extensions: ['html', 'js', 'vue']
    //   }
    // ]
  },

  router: {
    middleware: 'api-data'
  },

  generate: {
    routes: routes
    // postcss: {
    //   plugins: {
    //     tailwindcss: './tailwind.js'
    //   },
    //   preset: {
    //     // Change the postcss-preset-env settings
    //     // autoprefixer: {
    //     //   grid: true
    //     // }
    //   }
    // }
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.js'
      },
      preset: {
        // Change the postcss-preset-env settings
        // autoprefixer: {
        //   grid: true
        // }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
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
