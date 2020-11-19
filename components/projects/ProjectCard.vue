<template>
  <a :href="link" target="_blank" style="text-decoration: none">
    <v-hover v-slot="{ hover }" style="height: available">
      <v-card :id="cardId" :class="cardClass" :dark="dark" :elevation="hover ? 12 : 2" :color="color" min-height="200" max-height="200" max-width="400">
        <slot></slot>
        <v-card-text class="text-center pa-2" v-text="text" style="position: absolute; bottom: 0" />
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
      text: ''
    }
  }
</script>
