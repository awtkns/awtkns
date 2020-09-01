<template>
  <v-row>
    <v-col cols="12">
      <v-row justify="space-between" no-gutters class="mb-4" >
        <div>
          <v-btn :to="'/'" icon>
            <v-icon v-text="'mdi-home'" />
          </v-btn>

          <DarkModeToggleBtn />
        </div>
        <div class="text-center display-3 font-weight-black">VueGlow Playground</div>

        <span />
      </v-row>
      <v-row no-gutters justify="center">
        <pre><code>npm install vue-glow</code></pre>
      </v-row>
      <v-row no-gutters justify="center" class="mb-4">
        <pre><code><a href="https://github.com/awtkns/vue-glow">Documentation</a></code></pre>
      </v-row>
      <v-row no-gutters justify="center">
        <v-col sm="12" >
          <VueGlow
            :fade="fade"
            :interval="speed"
            :intense="intense"
            :elevation="elevation"
            :color="color ? color.hsla : undefined"
            :intensity="intensity"
            mode="hsl"
            class=" mx-auto"
            rounded="25"
            style="width: inherit; max-width: 600px"
          >
            <v-card dark flat class="pa-4 mx-auto text-center" style="border-radius: 25px; width: inherit">
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
              <v-slider
                v-model="intensity"
                :label="`My intensity is ${intensity.toFixed(2)}`"
                step="0.01"
                max="4"
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
        </v-col>

      </v-row>
      <div class="mt-12 text-center font-weight-black" v-text="'Example Usage'" />
      <v-row justify="center">
        <code id="code" class="mt-2 text-center text-monospaced" v-text="tag" />
      </v-row>
    </v-col>
    <v-footer app>
      <v-row justify="center" class="body-1">

      </v-row>

    </v-footer>
  </v-row>
</template>
<script>
import DarkModeToggleBtn from '../components/DarkModeToggleBtn'
// import VueGlow from 'vue-glow';
import VueGlow from 'C:\\Users\\Adam\\Programming\\vue-glow\\src\\VueGlow.vue';

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
      elevation: 24,
      intensity: 1
    }
  },
  computed: {
    tag() {
      let f = this.fade ? ` fade interval="${this.speed}"` : '';
      let e = this.elevation ? ` elevation="${this.elevation}"` : ' flat';
      let i = this.intensity !== 1 ? ` intensity="${this.intensity}"` : '';
      let d = this.intense ? ' intense' : '';
      let c = this.color ? ` color="${this.color.hex}" mode="hex"` : '';

      return `<VueGlow${c}${f}${e}${i}${d}>Anything you want!</VueGlow>`
    }
  },
}
</script>
<style scoped>
  #code {
    background-color: transparent;
    color: inherit;
    box-shadow: none;
  }
</style>


