<template>
    <v-container>
      <Work :class="listMargin" />
      <Projects :class="listMargin" />
    </v-container>
</template>

<script>
import Work from '../components/work'
import Projects from '../components/projects'
export default {
  components: { Projects, Work },
  layout: 'homepage',
  data() {
    return {
      listMargin: 'mb-5'
    }
  }
}
</script>
