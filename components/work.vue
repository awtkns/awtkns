<template>
  <v-timeline>
    <v-timeline-item
      v-for="item in items"
      :key="item"
      :icon="item.timelineIcon"
    >
      <span slot="opposite">{{ item.date }}</span>
      <v-card>
        <v-card-title>
          {{ item.title }}
          <v-spacer />
          <v-icon v-for="icon in item.icons" :key="icon" v-text="icon" />
        </v-card-title>
        <v-card-subtitle v-text="item.subtitle" />
      </v-card>
    </v-timeline-item>
  </v-timeline>
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
          title: 'Bridging Languages Coding Contest',
          subtitle: 'Top 5 Team',
          date: 'Jan 2020',
          timelineIcon: mdiSchool,
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
          timelineIcon: mdiBriefcase,
          icons: []
        },
        {
          title: 'Halite III AI Coding Contest',
          subtitle: 'Top 10 Canadian University Student',
          date: 'Oct 2018 - Jan 2019',
          timelineIcon: mdiTrophyAward,
          icons: [mdiLanguagePython]
        }
      ]
    }
  }
}
</script>
