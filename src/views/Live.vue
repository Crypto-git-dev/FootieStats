<template>
  <div class="live">
    <v-flex d-flex>
      <v-layout wrap>
        <v-flex xs4 v-for="item in todaysMatches" :key="item.id">
          <v-card class="ma-4" v-on:click="$store.commit('SET_CURRENT_COMPETITION', competitionItem.code)">
            <v-card-title>{{item.competition.name}}</v-card-title>
            <v-card-text>{{item.homeTeam.name}} {{item.score.fullTime.homeTeam}} - {{item.score.fullTime.homeTeam}}
              {{item.awayTeam.name}}</v-card-text>
            <v-card-text v-html="toUserDate(item.utcDate)"></v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex';

  export default {
    name: 'live',
    mounted() {
      /** Call the function which make API call and commit the mutation */
      this.$store.dispatch('loadTodaysMatchs');
    },
    computed: {
      /** Displaying state data using Vuex */
      ...mapState([
        'todaysMatches',
      ])
    },
    methods: {
      toUserDate(utc) {
        const d = new Date(utc);
        return d.toLocaleString();
      }
    },
  }
</script>