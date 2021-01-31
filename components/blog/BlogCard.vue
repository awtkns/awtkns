<template>
  <nuxt-link :to="`/blog/${slug}`" style="text-decoration: none">
    <v-hover v-slot="{ hover }" style="height: available">
      <v-card :elevation="hover ? 12 : 2" min-height="200" max-height="200" max-width="400" dark>
        <v-img :src="hero" max-height="200" max-width="400" min-width="200" gradient="to right, #43434388 0%, #00000088 100%">
          <v-row no-gutters align="center" justify="center" style="height: 100%">
            <h2 class="pa-4 text-center display-1 font-weight-bold">{{ title }}</h2>
          </v-row>
        </v-img>
      </v-card>
    </v-hover>
  </nuxt-link>
</template>

<script>
  export default {
    name: "BlogCard",
    props: {
      hero: '',
      title: '',
      slug: ''
    },
    computed: {
      cardStyle: ({hero}) => {
        return `background-image: url(${hero}); background-position: center;    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;`
      }
    }
  }
</script>

<style>
#stars {
  display: flex; align-items: center; position: absolute; top: 0; right: 0
}
</style>
