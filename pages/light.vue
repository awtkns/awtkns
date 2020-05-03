<template>
  <div>
    <VueGlow :color="color" intense class="ma-12" elevation="23" >
      <v-card max-width="300" dark>
        <v-sheet flat class="title pa-1 text-center">Light Changer</v-sheet>
        <v-color-picker @input="changeColor" flat style="border-radius: 0" hide-mode-switch mode="hexa"/>
        <v-card-actions>
          <v-spacer />
          <v-btn v-text="'On/off'" text @click="toggleOn"/>
        </v-card-actions>
      </v-card>
    </VueGlow>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import VueGlow from '../../../Programming/vue-glow/src/VueGlow'

export default {
  name: 'Light',
  components: { VueGlow },
  data: () => ({
    color: '#fff',
    on: true
  }),
  methods: {
    turnOn: () => {
      anime({
        targets: '.square',
        height: 20,
        width: 20
      })
    },
    turnOff: () => {
      anime({
        targets: '.square',
        height: 15,
        width: 15
      })
    },
    ripple: () => {
      anime({
        targets: '.square',
        background: { value: '#fe3', easing: 'easeOutSine', duration: 1000 },
        delay: anime.stagger(100),
        loop: true
      })
    },
    toggleOn() {
      console.log(this.$vuetify)
      this.on ^= true
      this.on ? this.turnOn() : this.turnOff()
      this.$fireDb.ref('/').set({ on: this.on })
    },
    changeColor(e) {
      this.color = e.hex
    }
  }
}
</script>
<style lang="scss">
@import "assets/elevation-color";

#me {
  @include elevation-color(24, #ff2c00, true)
}
</style>
