<template>
  <div id="home">
    <div>
      <a @click="$router.go(-1)">back</a>
    </div>
    <Card v-bind:data="competitionList" v-if="competitionList"/>    
  </div>
</template>

<script>
  import Card from '@/components/Card';  

  import { mapState } from 'vuex';

  export default {
    name: 'home',
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
      ])
    },
  }
</script>