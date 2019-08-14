<template>
  <div class="myTeams">
    <h1>Which Team do you wanna ?</h1>
    {{competitionList}}
    <select>
      <option v-for="option in competitionList" v-bind:key="option" v-bind:value="option"/>
    </select>
  </div>
</template>


<script>
import { mapState } from 'vuex';


export default {
  name: 'MyTeams',
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
