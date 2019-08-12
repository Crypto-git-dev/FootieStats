<template>
  <div id="app">    
    <Card v-bind:data="competitionList" v-if="competitionList"/>    
  </div>
</template>

<script>
  import Card from '@/components/Card';  

  import { mapState } from 'vuex';

  export default {
    name: 'app',
    components: {      
      Card,
    },    
    mounted() {
      /** Call the function which make API call and commit the mutation */
      this.$store.dispatch('loadCompetitionList');
    },    
    computed: {
      /** Displaying state data using Vuex */
      ...mapState([
        'competitionList',
        'currentCompetition'
      ])
    },
  }
</script>