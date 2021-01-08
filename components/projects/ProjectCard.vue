<template>
  <a :href="link" target="_blank" style="text-decoration: none">
    <v-hover v-slot="{ hover }" style="height: available">
      <v-card :id="cardId" :class="cardClass" :dark="dark" :elevation="hover ? 12 : 2" :color="color" min-height="200" max-height="200" max-width="400">
        <slot></slot>
        <v-card-text class="text-center pa-2" v-text="text" style="position: absolute; bottom: 0" />
        <span class="pa-2" id="stars" v-if="stars">
          <v-icon small class="mr-1" >mdi-star</v-icon>{{stars}}
        </span>
      </v-card>
    </v-hover>
  </a>
</template>

<script>
  export default {
    name: "ProjectCard",
    props: {
      link: '',
      cardId: '',
      cardClass: '',
      color: '',
      dark: Boolean,
      text: '',
      repo: ''
    },
    data: () => ({
      stars: 0
    }),
    created() {
      if (this.repo) {
        this.$axios.get(`https://api.github.com/repos/${this.repo}`)
          .then(({data}) => this.stars = data.stargazers_count);
      }
    }
  }
</script>

<style>
#stars {
  display: flex; align-items: center; position: absolute; top: 0; right: 0
}
</style>
