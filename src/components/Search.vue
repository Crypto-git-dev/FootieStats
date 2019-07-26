<template>
  <div class="form-section">
    <h1>Search Lyrics</h1>
    <h2>Search Lyrics in this amazing app in vue =)</h2>
    <form>
      <input v-model="data" placeholder="Search Lyrics" v-on:keyup="userInputValue" />
    </form>
  </div>
</template>

<script>  

  export default {
    name: 'Search',
    data () {
      return {
        data: ''
      }
    },
    methods: {
      userInputValue: function () {
        this.$emit('keyup',this.data);
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>