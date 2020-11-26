import colors from 'vuetify/es5/util/colors'
import FMMode from 'frontmatter-markdown-loader/mode'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Quicksand&display=swap'
      }
      ]
  },

  loading: { color: '#fff' },
  css: [
    "@/assets/main.css",
    "@/assets/darcula.css",
    "@/assets/vue-typed-js.css"
  ],
  plugins: [],
  buildModules: [
    '@nuxtjs/vuetify'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/firebase'
  ],
  router: {
    middleware: 'layout'
  },

  // Firebase
  firebase: {
    config: {
      apiKey: "AIzaSyALqetlEz5SJ5HbLKI1_ppX_pxcr5_VVAs",
      authDomain: "wtkns-pylight.firebaseapp.com",
      databaseURL: "https://wtkns-pylight.firebaseio.com",
      projectId: "wtkns-pylight",
      storageBucket: "wtkns-pylight.appspot.com",
      messagingSenderId: "1051586488156",
      appId: "1:1051586488156:web:4bc353437f2874affb4399",
      measurementId: "G-CMP6EGJPTM"
    },
    services: {
      realtimeDb: true,
      analytics:  process.env.NODE_ENV === 'production'
    }
  },

  // Vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss', '~/assets/overrides.sass'],
    theme: {
      dark: false,
      options: { customProperties: true },
      themes: {
        dark: {
          primary: '#e32902',
          accent: '#e32902',
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {
    extend(config, ctx) {
      const markdownIt = require('markdown-it');
      const markdownItPrism = require('markdown-it-prism');

      config.module.rules.push({
          test: /\.md$/,
          loader: "frontmatter-markdown-loader",
          options: {
            mode: [FMMode.VUE_COMPONENT],
            markdownIt: markdownIt({ html: true }).use(markdownItPrism)
          }
        })
    }
  }
}
