<template>
    <v-container>
      <Work :class="listMargin" />
      <Projects :class="listMargin" />
      <RecentPosts :class="listMargin" :articles="articles" />
      <Sponsors :class="listMargin" />
    </v-container>
</template>

<script>
import Work from '../components/work'
import Projects from '../components/projects'
import Sponsors from '../components/sponsors'
import RecentPosts from '../components/blog/RecentPosts'
export default {
  components: { RecentPosts, Projects, Work, Sponsors },
  layout: 'homepage',
  data() {
    return {
      listMargin: 'mb-5',
      articles: []
    }
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
