<template>
  <div class="myTeams">
    <div class="step">
      <h1>Which Team do you wanna ?</h1>
      <v-flex d-flex>
        <v-layout wrap>
          <v-select :items="competitionList" item-value="id" item-text="name" v-model="selectedLeagueId"
            label="Select a League"></v-select>
        </v-layout>
      </v-flex>
    </div>

    <div class="step" v-if="league">
      <v-card class="mx-auto" max-width="700">
        <v-card-title>{{league.competition.name}}</v-card-title>
        <v-card-text>{{league.season.startDate}} - {{league.season.endDate}}</v-card-text>
        <v-simple-table>
          <thead>
            <tr>
              <td>Position</td>
              <td>Club</td>
              <td>Points</td>
              <td>Matches</td>
              <td>Wins</td>
              <td>Draws</td>
              <td>Loss</td>
            </tr>
          </thead>
          <tbody v-for="data in league.standings[0].table" :key="data.code">
            <td>{{data.position}}</td>
            <td>{{data.team.name}}</td>
            <td>{{data.points}}</td>
            <td>{{data.playedGames}}</td>
            <td>{{data.won}}</td>
            <td>{{data.draw}}</td>
            <td>{{data.lost}}</td>            
          </tbody>
        </v-simple-table>                
      </v-card>
    </div>

  </div>
</template>


<script>
  import {
    mapState
  } from 'vuex'
  import axios from 'axios'

  export default {
    name: 'MyTeams',
    data() {
      return {
        selectedLeagueId: '',
        league: false,
        step: 0,
      }
    },
    mounted() {
      /** Call the function which make API call and commit the mutation */
      this.$store.dispatch('loadCompetitionList');
    },
    watch: {
      selectedLeagueId: function () {
        this.fetchLeagueData(this.selectedLeagueId);
      }
    },
    methods: {
      fetchLeagueData(id) {
        axios({
            headers: {
              'X-Auth-Token': 'e9c6e436a05442488ce54e147180c5c7'
            },
            method: 'get',
            url: `https://api.football-data.org/v2/competitions/${id}/standings`,
          })
          .then(response => {
            this.league = response.data
          })
          .catch(response => (this.league = response))
      }
    },
    computed: {
      /** Displaying state data using Vuex */
      ...mapState([
        'competitionList',
      ])
    },
  }
</script>