<template>
  <div class="myTeams">
    <div class="step">
      <h1>Which Team do you wanna ?</h1>
      <select v-model="selectedLeagueId" aria-placeholder="Choose League">
        <option v-for="item in competitionList" :key="item.id" :value="item.id">
          {{item.name}}
        </option>
      </select>
    </div>    

    <div class="step" v-if="league">
      <h1>Which Team do you wanna ?</h1>
      <div>
        <h3>Basic Info</h3>        
        <p>NAME: {{league.competition.name}}</p>
        <p>SEASON: {{league.season.startDate}} - {{league.season.endDate}}</p>        
        <div>
          <table>
            <tr>
              <td>POSITION </td>
              <td>TEAM </td>
              <td>POINTS </td>
              <td>MACTHES </td>
              <td>WINS </td>
              <td>DRAWS </td>
              <td>LOSES </td>
            </tr>
            <tr v-for="data in league.standings[0].table" :key="data.team.id">
              <td>{{data.position}}</td>
              <td>{{data.team.name}}</td>
              <td>{{data.points}}</td>
              <td>{{data.playedGames}}</td>
              <td>{{data.won}}</td>
              <td>{{data.draw}}</td>
              <td>{{data.lost}}</td>
            </tr>
          </table>
        </div>        
      </div>      
    </div>
    
  </div>
</template>


<script>
  import { mapState } from 'vuex'
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
      selectedLeagueId: function() {        
        this.fetchLeagueData(this.selectedLeagueId);
      }
    },
    methods: {
      fetchLeagueData (id){
        axios({
          headers: {
            'X-Auth-Token': 'e9c6e436a05442488ce54e147180c5c7'
          },
          method: 'get',
          url: `http://api.football-data.org/v2/competitions/${id}/standings`,
        })
        .then(response => {this.league = response.data})
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