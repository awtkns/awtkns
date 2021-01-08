<template>
  <v-app>
    <v-app-bar
      v-scroll="onScroll"
      app
      dense
      :flat="isIntersecting"
      :color="appBarColor"
      dark
    >
      <v-btn icon @click="toggleDarkMode">
        <v-icon size="24px" :color="appBarTextColor" v-text="toggleIcon" />
      </v-btn>
      <v-expand-transition>
        <span v-if="!isIntersecting" v-text="'Adam Watkins'" />
      </v-expand-transition>

      <v-spacer />
      <v-btn href="https://wtkns.myportfolio.com/" :color="appBarTextColor" text v-text="'Photos'" target="_blank" />
      <v-btn href="https://github.com/awtkns" :color="appBarTextColor" text v-text="'Github'" />
    </v-app-bar>


    <v-content class="pt-0">
      <v-parallax v-intersect="intersectObserver" :src="coverImage" :height="coverHeight">
        <v-row :align="$vuetify.breakpoint.smAndDown ? 'center' : 'end'" justify="center">
          <v-col class="text-center">
            <VueTypedJs :strings="['Adam Watkins', 'Full-Stack Developer', 'Adam Watkins']">
              <div class="typing display-3 font-weight-bold text-center" style="color: #FDFBFB"></div>
            </VueTypedJs>
          </v-col>
        </v-row>
        <v-row align="end" justify="center" style="position: absolute; bottom: 0; width: 100%">
          <v-btn icon @click="$vuetify.goTo('#nuxt', {})">
            <v-icon color="white" x-large>mdi-chevron-down</v-icon>
          </v-btn>
        </v-row>
      </v-parallax>
      <v-container fluid :class="$vuetify.theme.dark ? 'bg-dark' : 'bg'" >
        <nuxt id="nuxt" style="max-width: 1160px" />
      </v-container>
    </v-content>

    <Footer />
  </v-app>
</template>
<script>
import { mdiLightbulbOff, mdiLightbulb } from '@mdi/js'
import Footer from '../components/footer'
import { VueTypedJs } from 'vue-typed-js'

export default {
  components: { Footer, VueTypedJs },
  data() {
    return {
      isScrolled: false,
      isIntersecting: false,
      intersectObserver: {
        handler: this.onIntersect,
        options: {
          rootMargin: '-48px 0px 0px 0px'
        }
      },
      windowSize: {
        x: 0,
        y: 0
      }
    }
  },
  mounted() {
    this.windowSize = { x: window.innerWidth, y: window.innerHeight }
  },
  computed: {
    appBarColor() {
      return this.isIntersecting ? 'transparent' : '#202020'
    },
    appBarTextColor() {
      return this.isIntersecting ? 'white' : ''
    },
    toggleIcon() {
      return this.$vuetify.theme.dark ? mdiLightbulb : mdiLightbulbOff
    },
    coverHeight() {
      return this.$store.state.layout.coverHeight * this.windowSize.y
    },
    coverImage() {
      return this.$store.state.layout.coverImage
    },
    isHomepage() {
      return this.$store.state.layout.isHomepage
    },
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
<style>
  .bg {
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  }
  .bg-dark {
    background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
    background-blend-mode: multiply;
  }
</style>
