<template>
  <article class="nuxt-content ma-auto" style="height: 100%">
    <h1 class="text-center">There's not much here at the moment</h1>
    <h2 class="text-center">..but that will change soon. In the meantime I suggest you checkout the few posts i have.</h2>
    <RecentPosts :articles="articles" dense class="my-8" />
  </article>
</template>

<script>
  import RecentPosts from '../../components/blog/RecentPosts'
  export default {
    components: { RecentPosts },
    layout: 'blog',
    data() {
      return {
        listMargin: 'mb-5',
        articles: []
      }
    },
    async created() {
      await this.$store.commit('layout/setArticle', {
        title: 'Welcome to my Blog',
        coverHeight: .5
      })
    },
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'description', 'img', 'slug', 'author', 'hero'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    }
  }
</script>
