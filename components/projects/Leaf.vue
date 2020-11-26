<template>
  <ProjectCard link="https://github.com/awtkns/fallhack-2020" cardId="leaf" dark text="'🏆 Fall Hacks 2020 Winner 🏆">
    <v-row no-gutters justify="center">
      <v-img src="leaf.png"/>
    </v-row>
  </ProjectCard>
</template>
<script>
import ProjectCard from "./ProjectCard"

export default {
  name: 'Leaf',
  components: {ProjectCard}
}
</script>

<style>
  #leaf {
    background-image: url("../../assets/home.svg");
    /*background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url("../static/raven.jpg") center center;*/
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
  }
</style>
