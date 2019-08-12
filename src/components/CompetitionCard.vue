<template v-if="data">
  <div class="competition">
    {{data.competition.name}}
  </div>
</template>

<script>
  export default {
    name: 'CompetitionCard',
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