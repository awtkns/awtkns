<template>
  <ProjectCard
    link="https://fastapi-crudrouter.awtkns.com/"
    dark
    style="height: inherit"
    text="A FastAPI Router Extension"
    card-class="d-flex align-center"
    card-id="crudRouter"
    color="#4fc08d"
    repo="awtkns/fastapi-crudrouter"
  >
    <v-col cols="12">
      <v-row justify="center">
        <v-img src="https://raw.githubusercontent.com/awtkns/fastapi-crudrouter/ae5d1c05f05d200818e61532c5cf90a65513285f/docs/en/docs/assets/bolt.svg" max-width="80px" />
      </v-row>
      <v-row justify="center">
        <div class="display-1 text-center" style="font-weight: bold">FastAPI CRUDRouter</div>
      </v-row>
      </v-col>
  </ProjectCard>
</template>
<script>
import ProjectCard from "./ProjectCard";
export default {
  name: 'CrudRouter',
  components: {ProjectCard},
}
</script>
<style>
  #crudRouter {
    background-image: linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%);
  }
</style>
