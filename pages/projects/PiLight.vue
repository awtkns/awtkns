<template>
  <v-row justify="center" class="mt-12">
    <VueGlow
      :fade="color === 'fade'"
      :flat="!!disabled" mode="name"
      :color="color !== 'fade' ? color : undefined"
      style="border-radius: 25px"
      intense
      elevation="24"
    >
      <v-card dark flat class="pa-4 mx-auto text-center" style="border-radius: 25px; width: 400px">
        <v-card-title>
          <v-spacer />
          {{ cardTitle }}
          <v-spacer />
        </v-card-title>
        <v-expand-transition>
          <v-row v-if="!disabled" justify="space-between">
            <v-col cols="6">
              <v-btn @click="changeColor('red')" color="red" v-text="'Red'"  />
            </v-col>
            <v-col cols="6">
              <v-btn @click="changeColor('blue')" color="blue" v-text="'Blue'"  />
            </v-col>
            <v-col cols="6">
              <v-btn @click="changeColor('green')" color="green" v-text="'Green'"  />
            </v-col>
            <v-col cols="6">
              <v-btn @click="changeColor('fade')" light color="white" v-text="'Fade'" />
            </v-col>
          </v-row>
        </v-expand-transition>
        <v-row justify="center">
          <v-col cols="6">
            <v-btn @click="changeState" outlined v-text="disabled ? 'On' : 'Off'"  />
          </v-col>
        </v-row>
      </v-card>
    </VueGlow>
  </v-row>
</template>

<script>
import VueGlow from 'vue-glow'

export default {
  name: "pilight",
  components: { VueGlow },
  data: () => ({
    disabled: false,
    color: 'red'
  }),
  computed: {
    cardTitle: (ctx) => ctx.disabled ? 'Turn me on.' : 'Change my colors.'
  },
  methods: {
    changeColor(color) {
      this.$fireDb.ref('/color').set(color)
    },
    changeState(isDisabled) {
      this.$fireDb.ref('/on').set(!this.disabled ? 'off': 'on')
    }
  },
  created() {
    this.$fireDb.ref('/color').on('value', snapshot => this.color = snapshot.val())
    this.$fireDb.ref('/on').on('value',
      snapshot => this.disabled = snapshot.val().toString().toLowerCase() === 'off')
  }
}
</script>
/
