<template>
  <v-hover v-slot="{ hover }">
    <v-card max-width="600px" id="langara" height="400" class="d-flex align-end" dark :elevation="hover ? 12 : 2">
      <div class="opacity">
        <v-card-text>
          <h1 class="display-1">Teaching Assistant</h1>
          <h2 class="title">Algorithms and Data Structures II</h2>
          <h3 class="subtitle-1">Sept 2020 - Present</h3>
        </v-card-text>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
  import Vanta from 'vanta/dist/vanta.net.min';
  import * as THREE from 'three';

  export default {
    name: "Langara",
    data: () => ({}),
    mounted() {
      this.vantaEffect = Vanta({
        el: "#langara",
        THREE,
        color: 0xf15a22,
        backgroundColor: 0x521f0c,
      });
    },
    beforeDestroy() {
      if (this.vantaEffect) {
        this.vantaEffect.destroy()
      }
    }
  }
</script>
