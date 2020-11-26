<template>
  <ProjectCard link="https://devpost.com/software/bin-it-0mike3" text="🏅 NwHacks 2020 Wolfram Award Winner 🏅"
               card-id="binit" card-class="d-flex align-center" dark color="white" style="height: inherit; width: inherit">
    <v-row justify="center" no-gutters align="center">
      <div class="display-3 text-center" style="font-weight: bold; color: #21735f">Bin It!</div>
    </v-row>
  </ProjectCard>
</template>
<script>
  import ProjectCard from "./ProjectCard";
  export default {
    name: 'BinIt',
    components: {ProjectCard},
  }
</script>
<style>
  #binit {
    background-image: url("../../assets/binit.svg");
    background-size: auto;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
  }
</style>
