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


    <v-main class="pt-0">
      <v-parallax v-intersect="intersectObserver" :src="coverImage" :height="coverHeight">

<!-- Title Text -->
        <v-row :align="$vuetify.breakpoint.smAndDown || !isHomepage ? 'center' : 'end'" justify="center">
          <v-col class="text-center">
            <VueTypedJs v-if="isHomepage" :strings="title">
              <div class="typing display-3 font-weight-bold text-center" style="color: #FDFBFB"></div>
            </VueTypedJs>
            <div v-else class="display-3 font-weight-bold text-center" style="color: #2b2b2b">{{ title }}</div>
          </v-col>
        </v-row>

        <v-row align="end" justify="center" style="position: absolute; bottom: 0; width: 100%">
          <v-btn icon @click="$vuetify.goTo('#nuxt', {})">
            <v-icon color="white" x-large>mdi-chevron-down</v-icon>
          </v-btn>
        </v-row>
      </v-parallax>

<!-- Content -->
      <v-container fluid :class="$vuetify.theme.dark ? 'bg-dark' : 'bg'" >
        <nuxt id="nuxt" style="max-width: 1160px" />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>
<script>
import { mdiLightbulbOff, mdiLightbulb } from '@mdi/js'
import Footer from '../components/footer'
import { VueTypedJs } from 'vue-typed-js'
import { mapState } from 'vuex'

export default {
  components: { Footer, VueTypedJs },
  data: (ctx) => ({
      isScrolled: false,
      isIntersecting: false,
      intersectObserver: {
        handler: ctx.onIntersect,
        options: { rootMargin: '-48px 0px 0px 0px' }
      },
      windowSize: { x: 0, y: 0 },
  }),
  mounted() {
    this.windowSize = { x: window.innerWidth, y: window.innerHeight }
  },
  computed: {
    ...mapState('layout', ['title', 'coverImage', 'isHomepage']),
    appBarColor: ctx => ctx.isIntersecting ? 'transparent' : '#202020',
    appBarTextColor: ctx => ctx.isIntersecting ? 'white' : '',
    toggleIcon: ({$vuetify}) => $vuetify.theme.dark ? mdiLightbulb : mdiLightbulbOff,
    coverHeight: ({$store, windowSize}) => $store.state.layout.coverHeight * windowSize.y,
  },
  methods: {
    toggleDarkMode() { this.$vuetify.theme.dark ^= true },
    onScroll(e) {
      this.isScrolled = e.target.scrollingElement.scrollTop !== 0
    },
    onIntersect (entries, observer) {
      this.isIntersecting = entries[0].isIntersecting
      this.$store.commit('layout/setCollapsed', this.isIntersecting)
    }
  }
}
</script>
<style>
  .bg {
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  }
  .bg-dark {
    background:
      linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%),
      linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
    background-blend-mode: multiply;
  }
</style>
