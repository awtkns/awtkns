<template>
  <v-app>
    <v-app-bar
      v-scroll="onScroll"
      fixed
      app
      elevate-on-scroll
      :color="appBarColor"
    >
      <v-col>
        <v-row justify="space-between" align="center">
          <v-btn icon @click="toggleDarkMode">
            <v-icon size="24px" :color="appBarTextColor" v-text="toggleIcon" />
          </v-btn>
          <v-toolbar-title :class="appBarTextColor + '--text'" v-text="title" />
          <v-btn :color="appBarTextColor" text>
            Blog
          </v-btn>
        </v-row>
      </v-col>
    </v-app-bar>
    <nuxt />
    <Footer />
  </v-app>
</template>
<script>
import { mdiLightbulb } from '@mdi/js'
import Footer from '../components/footer'
export default {
  components: { Footer },
  data() {
    return {
      title: 'Adam Watkins',
      isScrolled: false,
      toggleIcon: mdiLightbulb
    }
  },
  computed: {
    appBarColor() {
      return this.isScrolled ? '' : 'transparent'
    },
    appBarTextColor() {
      return this.isScrolled ? '' : 'white'
    }
  },
  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    onScroll(e) {
      this.isScrolled = e.target.scrollingElement.scrollTop !== 0
    }
  }
}
</script>
