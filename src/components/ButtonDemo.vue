<template>
  <h1>示例</h1>
  <div>
    <Button>
      default
    </Button>
    <Button theme="button">
      button
    </Button>
    <Button theme="link">
      link
    </Button>
    <Button theme="text">
      text
    </Button>
  </div>
</template>

<script>
  import Button from '../lib/Button.vue'
  export default {
    name: 'ButtonDemo',
    components:{Button},
    setup(){

    }
  }
</script>

<style lang="scss" scoped>

</style>