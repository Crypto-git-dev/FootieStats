<template>
  <div class="live">
    <a @click="$router.go(-1)">back</a> 
    <div v-for="item in todaysMatches" :key="item">
      <p>COMPETITION NAME: {{item.competition.name}}</p>
      <p>SCORE: {{item.homeTeam.name}} {{item.score.fullTime.homeTeam}} - {{item.score.fullTime.homeTeam}} {{item.awayTeam.name}}</p>
    </div>    
  </div>
</template>

matches[2].homeTeam.name


<script>
  import { mapState } from 'vuex';

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
  }
</script>