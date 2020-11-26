<template>
  <v-hover v-slot="{ hover }">
    <v-card max-width="600px" id="cancer" height="400" class="d-flex align-end" dark  :elevation="hover ? 12 : 2" >
      <div class="opacity">
        <v-card-text>
          <h1 class="display-1">Full Stack Developer</h1>
          <h2 class="title">BC Cancer Research Center</h2>
          <h3 class="subtitle-1">Jan 2020 - Present</h3>
        </v-card-text>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
  import Vanta from 'vanta/dist/vanta.cells.min';
  import * as THREE from 'three';

  export default {
    name: "BCCancer",
    data: () => ({}),
    mounted() {
      this.vantaEffect = Vanta({
        el: "#cancer",
        THREE,
        color1: 0x35c1d4,
        color2: 0x9361a8,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
      });
    },
    beforeDestroy() {
      if (this.vantaEffect) {
        this.vantaEffect.destroy()
      }
    }
  }
</script>
