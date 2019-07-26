<template>
  <div class="card">    
    <div class="songs-list">
      <div class="songs-item" v-for="song in data" v-bind:key="song.id" v-on:click="selectedLyrics(song.artist.name, song.title)">
      <div class="content">
        <a>
          <div class="picture">
            <img v-bind:src="song.album.cover_medium" />
          </div>
          <div class="text">
            <h3>{{song.title}}</h3>
            <h4>{{song.artist.name}} - {{song.album.title}}</h4>            
          </div>          
        </a>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: ['data'],
    data() {
      return {
        showing: 'true',
        lyrics:{
          artist: '',
          track: ''
        }
      }
    },
    methods: {
      selectedLyrics(artist, track) {
        this.lyrics.artist = artist;
        this.lyrics.track = track.replace(' ','%20');
        this.showing = false;
        this.$emit('select', artist, track, this.showing);
      }
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