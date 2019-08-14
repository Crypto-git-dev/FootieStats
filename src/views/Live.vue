<template>
  <div class="live">
    <a @click="$router.go(-1)">back</a>
    <h1>This is an about page</h1>
    <p v-if="todaysMatches.lenghts === 0">RESULT</p>
  </div>
</template>


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