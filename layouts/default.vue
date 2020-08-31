<template>
  <v-app>
    <v-app-bar elevate-on-scroll fixed app>
      <v-btn icon @click="toggleDarkMode">
        <v-icon size="24px" v-text="toggleIcon" />
      </v-btn>
      <v-spacer />
      <v-btn to="/" text v-text="title" />
      <v-spacer />
    </v-app-bar>

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
      title: 'Adam Watkins',
      isScrolled: false,

    }
  },
  computed: {
    toggleIcon() {
      return this.$vuetify.theme.dark ? mdiLightbulb : mdiLightbulbOff
    }
  },
  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>
