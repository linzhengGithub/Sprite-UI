<template>
  <article class="markdown-body" v-html="install">

  </article>
</template>

<script>
  import install from '../markdown/install.md'
  export default {
    name: 'Install',
    data(){
      return{
        install
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>