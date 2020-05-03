<template>
  <div>
    <div class="text-center display-3 font-weight-black">VueGlow Playground</div>
    <v-row justify="center" class="my-4">
      <DarkModeToggleBtn />
    </v-row>
    <VueGlow
      :color="color"
      :fade="fade"
      :interval="speed"
      :intense="intense"
      :elevation="elevation"
      class="mt-12 mx-auto"
      rounded="25"
    >
      <v-card dark flat class="pa-4 mx-auto text-center" width="600" style="border-radius: 25px">
        <v-card-title>
          <v-spacer />
            I am a Glowing!
          <v-spacer />
        </v-card-title>

        <v-expand-transition>
          <v-slider
            v-model="elevation"
            :label="`My elevation is ${elevation}`"
            max="24"
          />
        </v-expand-transition>
        <div class="mb-2">Change my colors</div>
        <v-color-picker flat dark style="border-radius: 0;" hide-mode-switch hide-inputs mode="hexa" class="mx-auto mb-2"/>
        <div>Make me fade</div>
        <v-row no-gutters justify="center" class="pa-4">
          <v-btn
            @click="fade ^= true"
            :color="fade ? 'red' : 'green'"
            v-text="fade ? 'Stop Fade' : 'Start Fade'"
            class="mr-4"
          />
          <v-btn
            @click="intense ^= true"
            :color="intense ? 'blue' : 'blue'"
            v-text="intense ? 'Intense Glow' : 'Soft Glow'"
          />
        </v-row>
        <v-expand-transition>
          <v-slider v-if="fade" v-model="speed" :label="`My colors change every ${speed} ms`" />
        </v-expand-transition>
      </v-card>
    </VueGlow>
    <v-row justify="center" class="my-4">
      <pre>
        {{ tag }}
      </pre>
    </v-row>
  </div>
</template>

<script>

import VueGlow from '../../../Programming/vue-glow/src/VueGlow'
import DarkModeToggleBtn from '../components/DarkModeToggleBtn'

export default {
  name: 'Light',
  components: { DarkModeToggleBtn, VueGlow },
  layout: 'playground',
  data() {
    return {
      darkGlow: false,
      color: '#fff',
      intense: false,
      on: true,
      timer: null,
      fade: false,
      speed: 20,
      elevation: 24
    }
  },
  computed: {
    tag() {
      let f = this.fade ? ` fade interval="${this.speed}"` : ''
      let e = this.elevation ? ` elevation="${this.elevation}"` : ' flat'
      let i = this.intense ? ' intense' : ''

      return `<VueGlow${f}${e}${i}>Anything you want!</VueGlow>`
    }
  },
  methods: {

    // toggleOn() {
    //   console.log(this.$vuetify)
    //   this.on ^= true
    //   this.on ? this.turnOn() : this.turnOff()
    //   this.$fireDb.ref('/').set({ on: this.on })
    // }
  }
}
</script>

