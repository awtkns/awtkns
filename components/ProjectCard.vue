<template>
  <a href="https://github.com/awtkns/fallhack-2020" style="text-decoration: none">
    <v-hover v-slot="{ hover }">
      <v-card width="400" id="leaf" dark :elevation="hover ? 12 : 2">
        <v-img src="leaf.png" />
        <v-card-text class="text-center" v-text="title" />
      </v-card>
    </v-hover>
  </a>
</template>

<script>
  export default {
    name: "ProjectCard",
    data: () => ({
      title: '🏆 Fall Hacks 2020 Winner\t🏆',
    })
  }
</script>
<style>
  #leaf {
    background-image: url("../assets/home.svg");
    /*background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url("../static/raven.jpg") center center;*/
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
  }
</style>
