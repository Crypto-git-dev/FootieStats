<template>
  <div class="live">
    <v-container grid-list-xl>
      <v-layout row justify-start>
        <v-flex xs12 sm6 md4 v-for="item in todaysMatches" :key="item.id">
          <v-card v-on:click="$store.commit('SET_CURRENT_COMPETITION', competitionItem.code)" id="live-match"
            class="text-center">
            <h2>{{item.competition.name}}</h2>
            <p>
              <span class="score-text" v-html="filterTeamName(item.homeTeam.name)"></span>
              <span class="score-number">{{item.score.fullTime.homeTeam}} </span>
              x
              <span class="score-number"> {{item.score.fullTime.homeTeam}} </span>
              <span class="score-text" v-html="filterTeamName(item.awayTeam.name)"></span></p>
            <h4 v-html="toUserDate(item.utcDate)"></h4>
            <h4 class="status">
              <p v-bind:class="matchStatus(item.status)">{{item.status}}</p>
            </h4>
          </v-card>
        </v-flex>        
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex';

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
    methods: {
      toUserDate(utc) {
        const d = new Date(utc);
        return d.toLocaleString();
      },
      filterTeamName: function (raw) {
        //Regex to remove number and all two words in uppercase
        let filteredName = raw.replace(/[0-9]/g, '').replace(/\w*[A-Z]\w*[A-Z]\w*/g, '');
        raw = filteredName;
        return raw;
      },
      matchStatus: function (status) {                
        switch (status) {
          case 'IN_PLAY':
            return 'live';
          case 'PAUSED':
            return 'live';
          case 'SCHEDULED':
            return 'scheduled';
          case 'FINISHED':
            return 'finished';          
          default:
            return 'none';
        }        
      }
    },
  }
</script>

<style lang="scss" scoped>
  @keyframes fade { 
    from { opacity: 1; }
    to { opacity: 0; } 
  }


  @mixin statusColor($color){
    content: "";
    width: 10px;
    height: 10px;
    background-color: $color;
    display: inline-block;
    text-align: center;
    border-radius: 5px;
    margin: auto 10px auto 0;
  }
  
  #live-match {
    .score {
      &-text {
        text-transform: uppercase;
      }

      &-number {
        font-weight: bold;

      }
    }

    .status {      
      .finished {
        &:before {
          @include statusColor(red);
        }
      }
      .live{
        &:before {
          @include statusColor(orange);
          animation: fade 1s cubic-bezier(.5, 0, 1, 1) infinite alternate;
        }
      }
      .scheduled{
        &:before {
          @include statusColor(green);
        }
      }
    }
  }
</style>