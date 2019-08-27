<template>
  <div id="menu">
    <v-toolbar color="green" dark max-height="64">
      <v-toolbar-title>
        Foot Stats
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text class="d-none d-sm-flex">
          <router-link class="white--text" to="/">Home</router-link>
        </v-btn>
        <v-btn text class="d-none d-sm-flex">
          <router-link class="white--text" to="/live">LIVE</router-link>
        </v-btn>
        <v-btn text class="d-none d-sm-flex">
          <router-link class="white--text" to="/myteams">My Teams</router-link>
        </v-btn>
        <v-btn icon @click.stop="drawer = !drawer" class="d-flex d-sm-none">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary color="primary">
      <v-list dense>      
        <v-list-item-content>

          <v-list-item>
            <v-list-item-title class="title">
              <router-link class="white--text" to="/">Home</router-link>
            </v-list-item-title>
          </v-list-item>            
          
          <v-list-item>
            <v-list-item-title class="title">
              <router-link class="white--text" to="/live">LIVE</router-link>
            </v-list-item-title>
          </v-list-item>
          
          <v-list-item>
            <v-list-item-title class="title">
              <router-link class="white--text" to="/myteams">My Teams</router-link>
            </v-list-item-title>
          </v-list-item>
        
        </v-list-item-content>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>


<script>
  export default {
    name: 'Menu',
    data() {
      return {
        drawer: false,
      }
    },
  }
</script>