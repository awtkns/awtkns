<template>
  <ProjectCard
    link="https://github.com/awtkns/vue-glow"
    repo="awtkns/vue-glow" dark style="height: inherit"
    text="NPM Package Used by Thousands"
    card-class="d-flex align-center" card-id="vueglow"
    color="#4fc08d">
    <v-row justify="center">
      <div class="display-3 text-center" style="font-weight: bold">Vue Glow</div>
    </v-row>
  </ProjectCard>
</template>
<script>
  import ProjectCard from "./ProjectCard";
  export default {
    name: 'VueGlow',
    components: {ProjectCard},
  }
</script>
<style>
  #vueglow {
    background-image: url("../../assets/glow.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
  }
</style>
