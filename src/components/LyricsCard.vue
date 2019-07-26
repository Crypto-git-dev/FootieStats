<template>
  <div class="lyrics">        
    <p class="text" v-html="data.lyrics"></p>
  </div>
</template>

<script>
  export default {
    name: 'LyricsCard',
    props: ['data'],
  }
</script>

<style lang="scss" scoped>
  .lyrics {
    .text {
      word-wrap: break-word;
      white-space: pre-wrap;
    }
  }
</style>