<template>
  <v-container>
    <article style="max-width: 680px" class="mx-auto">
      <h1 class="display-3 font-weight-bold mb-4" v-text="article.title" />
      <v-img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" />
      <v-btn>sjhds</v-btn>
      <nuxt-content :document="article" />
    </article>
  </v-container>
</template>

<script>
  export default {
    layout: 'homepage',
    data: () => ({
      article: undefined
    }),
    created() {
      this.$store.commit('layout/setArticle', this.article)
    },
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()
      return { article }
    }
  }
</script>
