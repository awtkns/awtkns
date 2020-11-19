<template>
  <ProjectCard link="https://github.com/awtkns/fallhack-2020" color="#33333d" dark style="height: inherit"
               text="Radiology Environment of the Future" card-class="d-flex align-center" card-id="raiven">
    <v-row no-gutters justify="center">
      <div class="display-3" style="font-weight: bold; font-family: 'Quicksand', sans-serif !important;">RAIVEN
      </div>
    </v-row>
  </ProjectCard>
</template>
<script>
  import ProjectCard from "./ProjectCard";
  export default {
    name: 'Raiven',
    components: {ProjectCard},
  }
</script>
<style>
  #raiven {
    font-family: 'Quicksand', sans-serif;
    background-image: url("../../assets/raiven.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100px 100px;
  }
</style>
