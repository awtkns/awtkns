<template>
  <div>
    <v-row v-if="!dense">
      <v-col>
        <h1 style="text-align: center">Blog</h1>
        <h5 style="text-align: center">Recent Posts</h5>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4" style="align-content: center" v-for="a in articles">
        <BlogCard v-bind="a"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BlogCard from './BlogCard'
export default {
  name: 'RecentPosts',
  components: { BlogCard, },
  props: {
    articles: [],
    dense: Boolean
  },
}
</script>
