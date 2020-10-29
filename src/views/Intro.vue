<template>
  <article class="markdown-body" v-html="intro">

  </article>
</template>

<script>
  import intro from '../markdown/intro.md'
  export default {
    name: 'Intro',
    data(){
      return {
        intro
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>