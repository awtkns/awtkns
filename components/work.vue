<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1 style="text-align: center">Professional Experience</h1>
        <h5 style="text-align: center">
          Current and Past
        </h5>
      </v-col>
      <v-col cols="12" sm="6">
        <BCCancer />
      </v-col>
      <v-col cols="12" sm="6">
        <Langara />
      </v-col>
    </v-row>
    <v-row justify="center" class="pt-4">
      <v-btn outlined @click="showMore ^= true" v-text="showMore ? 'Less' : 'More'"/>
    </v-row>
    <v-expand-transition>
      <v-row v-if="showMore" justify="center">
        <v-col cols="12" sm="4">
          <ReelMac />
        </v-col>
      </v-row>
    </v-expand-transition>

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
import BCCancer from "./work/BCCancer";
import Langara from "./work/Langara";
import ReelMac from "./work/ReelMac";

export default {
  name: 'Work',
  components: {ReelMac, Langara, BCCancer},
  data() {
    return {
      showMore: false,
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
