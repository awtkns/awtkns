<template>
  <v-app>
    <v-app-bar fixed color="green" app elevate-on-scroll>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      title: 'Adam Watkins'
    }
  }
}
</script>
