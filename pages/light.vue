<template>
  <div>
    <v-row justify="center">
      <div class="display-1">
        PiLight
      </div>
    </v-row>
    <v-row justify="center">
      <v-sheet v-for="i in 30" :key="i" :color="color" class="square" />
    </v-row>
    <v-row justify="center">
      <v-col>
        <v-color-picker @input="changeColor" />
      </v-col>
      <v-col>
        <v-btn v-model="on" @click="toggleOn" v-text="'on/off'" />
        <v-btn v-model="on" @click="ripple" v-text="'Ripple'" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'

export default {
  name: 'Light',
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
      this.on ^= true
      this.on ? this.turnOn() : this.turnOff()
    },
    changeColor(e) {
      this.color = e.hex
    }
  }
}
</script>

<style scoped>
.square {
  height: 20px;
  width: 20px;
  margin: 2px;
}
</style>
