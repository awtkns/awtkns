<template>
  <div>
    <div class="text-center display-3 font-weight-black">VueGlow Playground</div>
    <v-row justify="center" class="my-4">
      <DarkModeToggleBtn />
    </v-row>
    <VueGlow
      :fade="fade"
      :interval="speed"
      :intense="intense"
      :elevation="elevation"
      :color="color ? color.hsla : undefined"
      mode="hsl"
      class="mt-12 mx-auto"
      rounded="25"
    >
      <v-card dark flat class="pa-4 mx-auto text-center" width="600" style="border-radius: 25px">
        <v-card-title>
          <v-spacer />
            {{ elevation ? `I am glowing${intense ? ' intensely': ''}! &#128515;` : 'I\'ve been turned off. &#128546;' }}
          <v-spacer />
        </v-card-title>
        <v-slider
          v-model="elevation"
          :label="`My elevation is ${elevation}`"
          max="24"
          class="px-4"
        />
        <div class="mb-2">Change my colors</div>
        <v-color-picker v-model="color" flat dark style="border-radius: 0;" hide-mode-switch hide-inputs class="mx-auto mb-2"/>
        <div>Make me fade</div>
        <v-row no-gutters justify="center" class="pa-4">
          <v-btn
            @click="fade = !fade"
            :color="fade ? 'red' : 'green'"
            class="mr-4"
          >
            {{ fade ? 'Stop fade' : 'Start Fade' }}
          </v-btn>
          <v-btn
            @click="intense = !intense"
            min-width="150"
          >
            {{ intense ? 'Soft Glow' : 'Intense Glow' }}
          </v-btn>
        </v-row>
        <v-expand-transition>
          <v-slider v-if="fade" v-model="speed" :label="`My colors change every ${speed} ms`" class="px-4"/>
        </v-expand-transition>
      </v-card>
    </VueGlow>
    <div class="mt-12 text-center font-weight-black" v-text="'Example Usage'" />
    <pre class="mt-2 text-center" v-text="tag" />
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
      color: undefined,
      intense: true,
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
      let c = this.color ? ` color="${this.color.hex}" mode="hex"` : ''

      return `<VueGlow${c}${f}${e}${i}>Anything you want!</VueGlow>`
    }
  },
}
</script>

