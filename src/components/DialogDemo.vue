<template>
  <div>
    <Button>Dialog</Button>
    <Dialog></Dialog>
  </div>
</template>

<script>
  import Dialog from '../lib/Dialog.vue'
  import Button from '../lib/Button.vue'
  export default {
    name: 'DialogDemo',
    components: {Button, Dialog}
  }
</script>

<style lang="scss" scoped>

</style>