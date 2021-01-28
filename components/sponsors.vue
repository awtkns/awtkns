<template>
  <div v-if="sponsors">
    <v-row>
      <v-col>
        <h1 style="text-align: center">Network</h1>
        <h5 style="text-align: center">Github Sponsors <span style="color: red">❤</span></h5>
      </v-col>
    </v-row>

<!-- Sponsors -->
    <v-row justify="center">
      <a v-for="s in sponsors" :href="s.profile">
        <v-avatar size="62">
          <img :src="s.avatar" :alt="s.handle">
        </v-avatar>
      </a>
    </v-row>

<!-- Followers -->
    <v-row>
      <v-col>
        <h5 style="text-align: center">Github Followers</h5>
      </v-col>
    </v-row>
    <v-row justify="center">
      <a v-for="f in followers" :href="f.url">
        <v-avatar>
          <img :src="f.avatar_url" :alt="f.login">
        </v-avatar>
      </a>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Sponsors',
  data() {
    return {
      showMore: false,
      sponsors: [],
      followers: []
    }
  },
  computed: {
    githubChartURL() {
      const hex = this.$vuetify.theme.parsedTheme.primary.base.substr(1);
      return `http://ghchart.rshah.org/${hex}/awtkns`
    }
  },
  async created() {
    try {
      const result = await this.$axios.get('https://sponsors.trnck.dev/awtkns/sponsors');
      this.sponsors = result.data.sponsors
      this.followers = (await this.$axios.get('https://api.github.com/users/awtkns/followers')).data;
    } catch (e) {

    }
  }
}
</script>
