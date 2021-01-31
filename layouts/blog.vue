<template>
  <v-app>
    <v-app-bar
      app
      dense
      dark
      prominent
      shrink-on-scroll
    >
      <v-spacer />
      <v-btn href="https://wtkns.myportfolio.com/" text v-text="'Photos'" target="_blank" />
      <v-btn href="https://github.com/awtkns" text v-text="'Github'" />
    </v-app-bar>


    <v-main>
      <v-container>
        <nuxt id="nuxt" style="max-width: 1160px" />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>
