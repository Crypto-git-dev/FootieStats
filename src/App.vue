<template>
  <div id="app">
    <div>
      <router-link to="/live">LIVE</router-link>
      <router-link to="/myteams">My Teams</router-link>
    </div>
    <router-view/>
  </div>
</template>

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