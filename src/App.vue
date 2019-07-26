<template>
  <div id="app">        
    <Search v-on:keyup="suggestLyrics" />
    <Card v-bind:data="lyricsList" v-on:select="getLyrics" v-if="cardsActive"/>    
    <LyricsCard v-bind:data="definiteLyrics" v-if="lyricsActive"/>
  </div>
</template>

<script>  
  import Search from './components/Search.vue'
  import Card from './components/Card';
  import LyricsCard from './components/LyricsCard';
  
  const axios = require('axios');
  export default {
    name: 'app',
    components: {
      Search,
      Card,
      LyricsCard,
    },
    data() {
      return {
        lyricsList: [],
        cardsActive: true,
        lyricsActive: false,
        definiteLyrics: '',
      }
    }, 
    methods: {
      suggestLyrics: function(userData) {
        //API Call
        axios
          .get(`https://api.lyrics.ovh/suggest/${userData}`)
          .then(response => (this.lyricsList = response.data.data))
          .catch(response => (this.lyricsList = response))
      },
      getLyrics: function(artist, track, showing) {
        axios
          .get(`https://api.lyrics.ovh/v1/${artist}/${track}`)
          .then(response => (this.definiteLyrics = response.data))
          .catch(response => (this.definiteLyrics = response))
        this.cardsActive = showing;
        this.lyricsActive = !showing;
      }
    },
  }
</script>

<style>
  html, body {
    font-size: 16px;
    margin: 0;
    padding: 0;
    background-color: #f7f7f7;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>