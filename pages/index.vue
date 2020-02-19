<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-row>
        <v-avatar color="blue" size="200">
          Adam
        </v-avatar>
      </v-row>
      <v-row>
        Software Developer
      </v-row>
      <GitMatrix style="width: 400px" />
    </v-flex>
  </v-layout>
</template>

<script>
import GitMatrix from '../components/GitMatrix'
export default {
  components: { GitMatrix },
  data() {
    return {}
  }
}
</script>
