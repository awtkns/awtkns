<template>
  <div>
    <v-card v-for="post in this.$store.state.blog.posts" :key="post.id">
      <v-card-title>
        {{ post.data }}
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  created() {
    this.$store.dispatch('blog/fetchPosts')
  }
}
</script>

<style scoped></style>
