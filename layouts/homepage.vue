<template>
  <v-app>
    <v-app-bar
      v-scroll="onScroll"
      app
      dense
      :flat="isIntersecting"
      :color="appBarColor"
    >
      <v-btn icon @click="toggleDarkMode">
        <v-icon size="24px" :color="appBarTextColor" v-text="toggleIcon" />
      </v-btn>
      <v-btn to="/" :color="appBarTextColor" text v-text="'Adam Watkins'" />
      <v-spacer />
      <v-btn to="/VueGlow" :color="appBarTextColor" text v-text="'VueGlow'" />
      <v-btn to="/blog" :color="appBarTextColor" text v-text="'Blog'" />
    </v-app-bar>

    <v-parallax v-intersect="intersectObserver" src="hero.jpg" height="400" />

    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>

    <Footer />
  </v-app>
</template>
<script>
import { mdiLightbulbOff, mdiLightbulb } from '@mdi/js'
import Footer from '../components/footer'
export default {
  components: { Footer },
  data() {
    return {
      isScrolled: false,
      isIntersecting: false,
      intersectObserver: {
        handler: this.onIntersect,
        options: {
          rootMargin: '-48px 0px 0px 0px'
        }
      }
    }
  },
  computed: {
    appBarColor() {
      return this.isIntersecting ? 'transparent' : ''
    },
    appBarTextColor() {
      return this.isIntersecting ? 'white' : ''
    },
    toggleIcon() {
      return this.$vuetify.theme.dark ? mdiLightbulb : mdiLightbulbOff
    }
  },
  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    onScroll(e) {
      this.isScrolled = e.target.scrollingElement.scrollTop !== 0
    },
    onIntersect (entries, observer) {
      this.isIntersecting = entries[0].isIntersecting
    }
  }
}
</script>
