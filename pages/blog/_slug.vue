<template>
  <v-container>
    <v-row>
      <v-col v-if="$vuetify.breakpoint.mdAndUp"></v-col>
      <v-col>
        <article style="max-width: 680px" class="mx-auto" >
          <v-row justify="end" align="end">
            <v-col>

              <v-list-item class="pl-0">
                <v-list-item-avatar>
                  <v-img  src="https://avatars.githubusercontent.com/u/32209255"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-text="article.author" />
                  <v-list-item-subtitle v-text="article.date" />
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col class="text-right">
              <v-chip v-for="t in article.tags" class="mr-1 my-2" dark color="black" small>{{ t }}</v-chip>
            </v-col>
          </v-row>
          <v-sheet elevation="12">
            <v-img :src="article.hero"/>
          </v-sheet>

          <nuxt-content :document="article" class="mt-8"/>
        </article>
      </v-col>
      <v-col v-if="$vuetify.breakpoint.mdAndUp">
        <v-card :style="!$store.state.layout.isCollapsed ? 'position: fixed; top: 60px' : ''" outlined color="transparent">
          <v-card-title class="pa-0">Contents</v-card-title>
          <v-divider />
          <v-list nav color="transparent">
              <v-list-item v-for="link of article.toc" :key="link.id" :to="`#${link.id}`">
                <v-list-item-content>
                  <v-list-item-title v-text="link.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
          </v-list>
        </v-card>
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
    async created() {
      await this.$store.commit('layout/setArticle', this.article)
    },
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()
      return { article }
    }
  }
</script>


