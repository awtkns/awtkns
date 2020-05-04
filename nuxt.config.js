import colors from 'vuetify/es5/util/colors'

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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: { color: '#fff' },
  css: [
    '@/assets/elevation-color.scss'
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
      analytics: true
    }
  },

  // Vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  }
}
