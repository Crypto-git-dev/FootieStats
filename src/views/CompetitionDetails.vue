<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'CompetitionDetails',
  mounted() {
      /** Call the function which make API call and commit the mutation */
      this.$store.dispatch('loadSelectedCompetition', currentCompetition.code);
    },    
    computed: {
      /** Displaying state data using Vuex */
      ...mapState([
        'currentCompetition',
      ])
    },
}
</script>