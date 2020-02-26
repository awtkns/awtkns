<template>
  <div>
    <v-row>
      <v-col>
        <h1 style="text-align: center">Technical Projects</h1>
        <h5 style="text-align: center">
          Straight From Github
        </h5>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="project in projects"
        :key="project.id"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card :href="project.html_url" target="_blank">
          <v-card-title class="primary--text" v-text="project.name" />
          <v-card-subtitle v-text="getDate(project)" />
          <v-card-text v-text="project.description" />
          <v-card-actions><v-spacer />{{ project.language }}</v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h5 style="text-align: center">
          Contributions Over the Past Year
        </h5>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card elevation="24">
          <v-card-text>
            <v-img :src="githubChartURL" alt="adam-watkins's Github chart" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: []
    }
  },
  computed: {
    githubChartURL() {
      const hex = this.$vuetify.theme.parsedTheme.primary.base.substr(1)

      return `http://ghchart.rshah.org/${hex}/adam-watkins`
    }
  },
  async created() {
    const result = await this.$axios.get(
      'https://api.github.com/users/adam-watkins/repos'
    )
    this.projects = result.data
  },
  methods: {
    getDate(project) {
      let date = new Date(project.created_at)
      let year = date.getFullYear()
      let month = date.toLocaleString('default', { month: 'short' })
      const start = `${month} ${year}`

      date = new Date(project.updated_at)
      year = date.getFullYear()
      month = date.toLocaleString('default', { month: 'short' })
      const end = `${month} ${year}`

      return start === end ? start : `${start} - ${end}`
    }
  }
}
</script>
