<template>
  <v-row justify="center">
    <v-col lg="6" class="text-center">
      <div v-text="this.attributes.title" class="display-1 font-weight-bold" />
      <div v-text="this.attributes.date" class="subtitle-1" />
      <v-chip v-for="t in this.attributes.tags" :key="t" v-text="t" class="mx-1" dark small />
      <component v-bind:is="body" class="text-left" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Blog',
  layout: 'homepage',
  data: () => ({
    attributes: undefined,
    body: undefined
  }),
  created() {
    const fm = require(`~/articles/mulit-nuxt-pwa.md`);
    this.body = fm.vue.component
    this.attributes = fm.attributes
  }
}
</script>
