<template>
  <div class="card">
    <div class="songs-list">
      <div class="songs-item" v-for="competitionItem in data" v-bind:key="competitionItem.id"
        v-on:click="$store.commit('SET_CURRENT_COMPETITION', competitionItem.code)">
        <router-link :to="`/competitions/${competitionItem.name}`">
          <div class="content">
            <div class="text">
              <h3>{{competitionItem.name}}</h3>
              <h3>{{competitionItem.area.name}}</h3>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
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
  $yellow: #FFFC31;
  $grey: #F6F7EB;
  $red: #E94F37;
  $black: #393E41;
  $white: #ffffff;

  .songs-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: ". . .";

    .songs-item {
      border: 3px solid $grey;
      border-radius: 5px;
      margin: 1rem;
      list-style-type: none;
      background-color: $white;

      .picture {
        padding: 1em;

        img {
          border-radius: 50%;
        }
      }

      .text {
        text-transform: uppercase;
      }

      h3 {
        color: $black;
      }
    }
  }

  @media (max-width: 769px) {
    .songs-list {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-template-areas: ".";
    }
  }
</style>