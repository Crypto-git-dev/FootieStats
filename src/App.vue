<template>
  <!-- APP BAR [BAR TOP] -->
  <v-app id="app">
    <v-toolbar color="green" dark max-height="64">
      <v-toolbar-title>
        Foot Stats
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>
          <router-link class="white--text" to="/">Home</router-link>
        </v-btn>
        <v-btn text>
          <router-link class="white--text" to="/live">LIVE</router-link>
        </v-btn>
        <v-btn text>
          <router-link class="white--text" to="/myteams">My Teams</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- MAIN CONTENT -->
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
    <!--- FOOTER-->
    <v-footer color="green">
      <p class="white--text text-center">Copyright &copy; 2019 foot-stats.netlify.com all right reserved. All informations showing
        in this site are provided by the <a class="white--text" href="https://www.football-data.org">Football-Data.org
          API</a></p>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
  footer {
    width: 100%;
  }
</style>