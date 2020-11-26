<template>
  <ProjectCard
    link="https://github.com/awtkns/fallhack-2020" color="purple" dark style="height: inherit; width: auto"
    text="Biodistribution Platform" card-class="d-flex align-center justify-center" card-id="biodi"
  >
    <v-row justify="center" no-gutters align="center">
      <div class="display-3" style="font-weight: bold">Biodi</div>
    </v-row>
  </ProjectCard>
</template>
<script>
  import ProjectCard from "./ProjectCard";
  export default {
    name: 'Biodi',
    components: {ProjectCard},
  }
</script>
<style>
  #biodi {
    background-image: url("../../assets/biodi.svg");
    background-position: left;
    background-size: 100px 100px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
  }
</style>
