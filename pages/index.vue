<template>
    <v-container>
      <Work :class="listMargin" />
      <Projects :class="listMargin" />
      <Sponsors :class="listMargin" />
    </v-container>
</template>

<script>
import Work from '../components/work'
import Projects from '../components/projects'
import Sponsors from '../components/sponsors'
export default {
  components: { Projects, Work, Sponsors },
  layout: 'homepage',
  data() {
    return {
      listMargin: 'mb-5'
    }
  }
}
</script>
