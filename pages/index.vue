<template>
  <div>
    <v-parallax src="hero.jpg" />
    <v-sheet color="warning" tile>
      <v-card-title>
        My website is under development.
      </v-card-title>
      <v-card-subtitle>
        You've been warned.
      </v-card-subtitle>
    </v-sheet>
    <v-container fluid>
      <v-col>
        <About :class="listMargin" />
        <Blog :class="listMargin" />
        <h1 style="text-align: center">Experience</h1>
        <Work :class="listMargin" />
        <Projects :class="listMargin" />
        <Skills :class="listMargin" />
        <Contact :class="listMargin" />
      </v-col>
    </v-container>
  </div>
</template>

<script>
import About from '../components/about'
import Blog from '../components/blog'
import Work from '../components/work'
import Projects from '../components/projects'
import Skills from '../components/skills'
import Contact from '../components/contact'
export default {
  components: { Contact, Skills, Projects, Work, Blog, About },
  data() {
    return {
      listMargin: 'my-5'
    }
  }
}
</script>
