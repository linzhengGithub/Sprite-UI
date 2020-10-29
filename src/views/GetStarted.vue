<template>
  <article class="markdown-body" v-html="md">


  </article>
</template>

<script>
  import md from '../markdown/getStarted.md'
  export default {
    name: 'GetStarted',
    data(){
      return{
        md
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>