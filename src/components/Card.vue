<template>
  <v-container grid-list-xl>
    <v-layout row wrap justify-space-between>
      <v-flex class xs12 sm6 md4 v-for="competitionItem in data" :key="competitionItem.id">
        <v-card v-on:click="$store.commit('SET_CURRENT_COMPETITION', competitionItem.code)">
          <v-card-title>{{competitionItem.name}}</v-card-title>
          <v-card-text>{{competitionItem.area.name}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Card',
    props: ['data'],
    methods: {
      /** Send to store the new value of current League */
      updateCurrentLeague(code) {
        //Dispatch call the function to change state
        this.$store.dispatch('setCurrentCompetition', code);
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>