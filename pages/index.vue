<template>
  <div>
    <v-parallax src="hero.jpg" />
    <v-sheet color="warning" tile>
      <v-card-title>
        My website is under development.
      </v-card-title>
      <v-card-subtitle>
        You've been warned.
      </v-card-subtitle>
    </v-sheet>
    <v-container fluid>
      <v-col>
        <Work :class="listMargin" />
        <Projects :class="listMargin" />
      </v-col>
    </v-container>
  </div>
</template>

<script>
import Work from '../components/work'
import Projects from '../components/projects'
export default {
  components: { Projects, Work },
  data() {
    return {
      listMargin: 'mb-5'
    }
  }
}
</script>
