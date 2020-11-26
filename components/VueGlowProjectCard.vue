<template>
  <a href="https://github.com/awtkns/vue-glow" style="text-decoration: none">
    <v-hover v-slot="{ hover }">
      <vue-glow style="width: inherit" fade :elevation="hover ? 12 : 4">
        <v-card  flat>
          <h1>Vue GLOW</h1>
          <v-card-text class="text-center" v-text="title" />
        </v-card>
      </vue-glow>
    </v-hover>
  </a>
</template>

<script>
  import VueGlow from 'vue-glow';
  export default {
    name: "VueGlowProjectCard",
    components: { VueGlow },
    data: () => ({
      title: 'NPM Package Used by Thousands',
    })
  }
</script>
