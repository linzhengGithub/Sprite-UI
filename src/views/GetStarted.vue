<template>
  <article class="markdown-body" v-html="getStarted">


  </article>
</template>

<script>
  import getStarted from '../markdown/getStarted.md'
  export default {
    name: 'GetStarted',
    data(){
      return{
        getStarted
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>