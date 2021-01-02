<template>
  <v-row justify="center">
    <v-col cols="12" sm="6" md="4" style="align-content: center" v-for="p in projects">
      <component :is="p" style="width: inherit" />
    </v-col>
  </v-row>
</template>

<script>
import Leaf from "./Leaf";
import Biodi from "./Biodi";
import Raiven from "./Raiven";
import VueGlow from "./VueGlow";
import SodokuWorld from "./SodokuWorld";
import BinIt from "./BinIt";
import CrudRouter from "./CrudRouter";

export default {
name: "ProjectGrid",
  data: () => ({
    projects: [Leaf, Biodi, Raiven, VueGlow, SodokuWorld, BinIt, CrudRouter]
  })
}
</script>
