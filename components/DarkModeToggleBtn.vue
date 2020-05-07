<template>
  <v-btn icon  @click="toggle">
    <v-icon v-text="icon" />
  </v-btn>
</template>

<script>
import { mdiLightbulbOff, mdiLightbulb } from '@mdi/js'
export default {
  name: 'DarkModeToggleBtn',
  data() {
    return {
      mdiLightbulbOff, mdiLightbulb
    }
  },
  computed: {
    icon() { return this.$vuetify.theme.dark ? this.mdiLightbulb : this.mdiLightbulbOff }
  },
  methods: {
    toggle() { return  this.$vuetify.theme.dark = !this.$vuetify.theme.dark }
  }
}
</script>

