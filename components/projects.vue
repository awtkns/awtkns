<template>
  <div>
    <v-row>
      <v-col>
        <h1 style="text-align: center">Technical Projects</h1>
        <h5 style="text-align: center">Personal, Professional, and Academic</h5>

      </v-col>
    </v-row>
    <ProjectGrid />
    <v-row justify="center" class="pt-4">
      <v-btn outlined @click="showMore ^= true" v-text="showMore ? 'Less' : 'More'"/>
    </v-row>

    <v-expand-transition>
        <v-row v-if="showMore">
          <v-col cols="12">
            <h5 style="text-align: center">
              Straight From Github
            </h5>
          </v-col>
          <v-col
            v-for="project in projects"
            :key="project.id"
            cols="12"
            md="4"
            lg="3"
          >
            <v-card :href="project.html_url" target="_blank" dark>
              <v-card-title v-text="project.name"/>
              <v-card-subtitle v-text="getDate(project)"/>
              <v-card-text v-text="project.description"/>
              <v-card-actions>
                <v-spacer/>
                {{ project.language }}
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
    </v-expand-transition>
<!--    <v-row justify="center">-->
<!--      <v-btn outlined to="/projects/pilight">Light Control</v-btn>-->
<!--    </v-row>-->
  </div>
</template>

<script>
import ProjectCard from "./projects/ProjectCard";
import ProjectGrid from "./projects/ProjectGrid";
export default {
  name: 'Projects',
  components: {ProjectGrid, ProjectCard},
  data() {
    return {
      showMore: false,
      projects: []
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
      const result = await this.$axios.get('https://api.github.com/users/awtkns/repos');
      this.projects = result.data
    } catch (e) {

    }
  },
  methods: {
    getDate(project) {
      let date = new Date(project.created_at);
      let year = date.getFullYear();
      let month = date.toLocaleString('default', { month: 'short' });
      const start = `${month} ${year}`;

      date = new Date(project.updated_at);
      year = date.getFullYear();
      month = date.toLocaleString('default', { month: 'short' });
      const end = `${month} ${year}`;

      return start === end ? start : `${start} - ${end}`
    }
  }
}
</script>
