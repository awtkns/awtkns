<template>
  <div>
    <v-row>
      <v-col>
        <h1 style="text-align: center">Experience</h1>
        <h5 style="text-align: center">
          Professional and Educational
        </h5>
      </v-col>
    </v-row>
    <v-timeline :dense="isDense">
      <v-timeline-item
        v-for="item in items"
        :key="item.name"
        :icon="item.timelineIcon"
        :color="item.color"
      >
        <span slot="opposite">{{ item.date }}</span>
        <v-card>
          <v-card-title>
            {{ item.title }}
            <v-spacer />
            <v-icon v-for="icon in item.icons" :key="icon" v-text="icon" />
          </v-card-title>
          <v-card-subtitle v-text="item.subtitle" />
          <v-card-text v-if="isDense" v-text="item.date" />
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import {
  mdiLanguagePython,
  mdiNuxt,
  mdiVuejs,
  mdiVuetify,
  mdiNodejs,
  mdiDatabase,
  mdiTrophyAward,
  mdiSchool,
  mdiBriefcase
} from '@mdi/js'

export default {
  name: 'Work',
  data() {
    return {
      items: [
        {
          title: 'Full Stack Developer',
          subtitle: 'BC Cancer Research Center',
          date: 'Jan 2020 - Present',
          elevation: 10,
          color: 'purple',
          timelineIcon: mdiBriefcase,
          icons: [
            mdiLanguagePython,
            mdiVuejs,
            mdiVuetify,
            mdiNuxt,
            mdiNodejs,
            mdiDatabase
          ]
        },
        {
          title: 'Simon Fraser University',
          subtitle: 'Faculty Of Applied Science, Computing Science',
          date: 'May 2018 - Present',
          elevation: 10,
          color: 'red',
          timelineIcon: mdiSchool,
          icons: []
        },
        {
          title: 'Bridging Languages Coding Contest',
          subtitle: 'Top 5 Team',
          date: 'Jan 2020',
          timelineIcon: mdiTrophyAward,
          icons: []
        },
        {
          title: 'NwHacks 24 Hour Hackathon',
          subtitle: 'Wolfram Award',
          date: 'Jan 2020',
          timelineIcon: mdiTrophyAward,
          icons: []
        },
        {
          title: 'Manager',
          subtitle: 'Reel Mac and Cheese',
          date: 'Aug 2014 - Dec 2019',
          color: 'yellow',
          timelineIcon: mdiBriefcase,
          icons: []
        },
        {
          title: 'Halite III AI Coding Contest',
          subtitle: 'Top 10 Canadian University Student',
          date: 'Oct 2018 - Jan 2019',
          elevation: 10,
          timelineIcon: mdiTrophyAward,
          icons: [mdiLanguagePython]
        },
        {
          title: 'Langara College',
          subtitle: 'Computer Science',
          date: 'Sep 2015 - Apr 2018',
          color: 'orange',
          timelineIcon: mdiSchool,
          icons: []
        }
      ]
    }
  },
  computed: {
    isDense() {
      return this.$vuetify.breakpoint.smAndDown
    }
  }
}
</script>
