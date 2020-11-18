<template>
  <v-row>
    <v-col cols="4">
      <ProjectCard link="https://github.com/awtkns/fallhack-2020" cardId="leaf" dark text="'🏆 Fall Hacks 2020 Winner 🏆" >
        <v-row no-gutters justify="center">
          <v-img src="leaf.png"/>
        </v-row>
      </ProjectCard>
    </v-col>
    <v-col cols="4">
      <ProjectCard link="https://github.com/awtkns/fallhack-2020" color="purple" dark style="height: inherit" text="Biodidistibution Platform" card-class="d-flex align-center">
        <v-row no-gutters justify="center">
          <div class="display-4 " style="font-weight: bold">Biodi</div>
        </v-row>
      </ProjectCard>
    </v-col>
    <v-col cols="4">
      <ProjectCard link="https://github.com/awtkns/fallhack-2020" color="#33333d" dark style="height: inherit" text="Radiology Environment of the Future" card-class="d-flex align-center" card-id="raiven">
        <v-row no-gutters justify="center" >
          <div class="display-3" style="font-weight: bold; font-family: 'Quicksand', sans-serif !important;">RAIVEN</div>
        </v-row>
      </ProjectCard>
    </v-col>
    <v-col cols="4">
        <ProjectCard link="https://github.com/awtkns/vue-glow" dark style="height: inherit" text="NPM Packed Used by Thousands" card-class="d-flex align-center" card-id="vueglow" color="#4fc08d">
          <v-row justify="center">
            <div class="display-3 text-center" style="font-weight: bold">Vue Glow</div>
          </v-row>
        </ProjectCard>
    </v-col>
  </v-row>
</template>

<script>
import ProjectCard from "../../components/ProjectCard";
import VueGlow from "vue-glow"
export default {
  name: "index",
  components: {VueGlow, ProjectCard},
  data: () => ({})
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
  #raiven {
    font-family: 'Quicksand', sans-serif;
    background-image: url("../../assets/raiven.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100px 100px;
  }
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
