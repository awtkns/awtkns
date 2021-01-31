<template>
  <v-container>
    <v-row>
      <v-col></v-col>
      <v-col>
        <article style="max-width: 680px" class="mx-auto">
          <h1 class="display-3 font-weight-bold mb-8" v-text="article.title"/>
          <h2>{{article.date}}</h2>
          <v-sheet elevation="12">
            <v-img :src="article.hero"/>
          </v-sheet>

          <nuxt-content :document="article" class="mt-8"/>
        </article>
      </v-col>
      <v-col>
        <nav :style="!$store.state.layout.isCollapsed ? 'position: fixed; top: 60px' : ''">
          <span class="display-1">Contents</span>
          <ul>
            <li v-for="link of article.toc" :key="link.id">
              <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    layout: 'blog',
    data: () => ({
      article: undefined,
    }),
    created() {
      console.log(this)
      this.$store.commit('layout/setArticle', this.article)

    },
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()
      return { article }
    }
  }
</script>
