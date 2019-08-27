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
        <v-simple-table id="league-table" fixed-header>
          <thead>
            <tr>
              <td>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <span v-on="on" class="md-pa-2 xs-pl-2 mx-auto header stats-num">P</span>
                  </template>        
                  <span>Position</span>
                </v-tooltip>
              </td>
              <td>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <span v-on="on" class="md-pa-2 xs-pl-2 mx-auto header ">C</span>
                  </template>        
                  <span>Club Name</span>
                </v-tooltip>
              </td>
              <td>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <span v-on="on" class="md-pa-2 xs-pl-2 mx-auto header stats-num">P</span>
                  </template>        
                  <span>Points</span>
                </v-tooltip>
              </td>
              <td>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <span v-on="on" class="md-pa-2 xs-pl-2 mx-auto header stats-num">M</span>
                  </template>        
                  <span>Matches</span>
                </v-tooltip>
              </td>
              <td>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <span v-on="on" class="md-pa-2 xs-pl-2 mx-auto header stats-num">W</span>
                  </template>        
                  <span>Wins</span>
                </v-tooltip>
              </td>
              <td>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <span v-on="on" class="md-pa-2 xs-pl-2 mx-auto header stats-num">D</span>
                  </template>        
                  <span>Draws</span>
                </v-tooltip>
              </td>
              <td>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <span v-on="on" class="md-pa-2 xs-pl-2 mx-autoheader stats-num">L</span>
                  </template>        
                  <span>Loss</span>
                </v-tooltip>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in teamTables" :key="data.code">
              <td class="pa-2 teams stats-num">{{data.position}}</td>
              <td class="pa-2 teams stats-word">{{data.team.name}}</td>
              <td class="pa-2 teams stats-num">{{data.points}}</td>
              <td class="pa-2 teams stats-num">{{data.playedGames}}</td>
              <td class="pa-2 teams stats-num">{{data.won}}</td>
              <td class="pa-2 teams stats-num">{{data.draw}}</td>
              <td class="pa-2 teams stats-num">{{data.lost}}</td>
            </tr>
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
      ]),
      teamTables: function () {
        const rawItens = this.league.standings[0].table;

        //Run every item in array
        rawItens.forEach(element => {
          //Regex to remove number and all two words in uppercase
          let filteredName = element.team.name.replace(/[0-9]/g, '').replace(/\w*[A-Z]\w*[A-Z]\w*/g, '');
          element.team.name = filteredName;
        });
        return rawItens;
      }
    },
  }
</script>

<style lang="scss" scoped>
#league-table {
  td {
    text-transform: uppercase;
  }

  .header {
    font-weight: 700;
  }

  @media (max-width: 600px) {
    .stats-word {
      overflow: hidden;
      white-space: nowrap;
    }
  }
}  
</style>