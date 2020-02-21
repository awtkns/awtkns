<template>
  <div>
    <v-parallax src="hero.jpg" />
    <v-container fluid>
      <v-col>
        <About :class="listMargin" />
        <Blog :class="listMargin" />
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
