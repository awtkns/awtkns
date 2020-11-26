<template>
  <ProjectCard link="https://github.com/awtkns/sudoku-world" text="Multiplayer Sodoku on Android" card-id="sodoku"
               color="#F04A57" dark>
  </ProjectCard>
</template>
<script>
  import ProjectCard from "./ProjectCard";
  export default {
    name: 'SodokuWorld',
    components: {ProjectCard},
  }
</script>
<style>
  #sodoku {
    /*background-color: #2b2b2b;*/
    background-image: url("../../static/sodukuworld.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
  }
</style>
