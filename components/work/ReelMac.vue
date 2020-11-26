<template>
  <v-hover v-slot="{ hover }">
    <v-card min-height="300" max-height="300" max-width="400" class="d-flex align-end" dark id="mac" :elevation="hover ? 12 : 2" >
        <v-card-text style="width: inherit">
          <h1 class="display-1">Manager</h1>
          <h2 class="title">Reel Mac and Cheese</h2>
          <h3 class="subtitle-1">Aug 2014 - Dec 2019</h3>
        </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>

export default {
  name: "ReelMac",
  data: () => ({}),

}
</script>
<style>
  #mac {
    /*background-color: #2b2b2b;*/
    background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)) , url("../../static/mac.jpg") center center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
  }
</style>

