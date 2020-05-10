<template>
  <v-footer>
    <v-col>
      <v-row justify="center">
        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          :href="icon.link"
          target="_blank"
          class="mx-4 white--text"
          icon
        >
          <v-icon :color="iconColor" size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </v-row>
      <v-row justify="center">
        {{ new Date().getFullYear() }} - Adam Watkins
      </v-row>
    </v-col>
  </v-footer>
</template>

<script>
import { mdiGithubCircle, mdiInstagram, mdiLinkedin, mdiEmail } from '@mdi/js'

export default {
  name: 'Footer',
  data: () => ({
    icons: [
      { icon: mdiEmail, link: 'mailto:cadamrun@gmail.com' },
      { icon: mdiGithubCircle, link: 'https://github.com/adam-watkins' },
      { icon: mdiLinkedin, link: 'https://www.linkedin.com/in/adam-watkins-yvr/' },
      { icon: mdiInstagram, link: 'https://www.instagram.com/' }
    ]
  }),
  computed: {
    iconColor() {
      if (this.$vuetify.theme.isDark) return 'white'
      else return 'black'
    }
  }
}
</script>

<style scoped></style>
