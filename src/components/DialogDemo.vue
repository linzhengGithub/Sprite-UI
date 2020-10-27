<template>
  <div>
    <Button @click="toggle">Dialog</Button>
    <Dialog v-model:visible="x"></Dialog>
  </div>
</template>

<script>
  import Dialog from '../lib/Dialog.vue'
  import Button from '../lib/Button.vue'
  import {ref} from 'vue'
  export default {
    name: 'DialogDemo',
    components: {Button, Dialog},
    setup(){
      const x = ref(false)
      const toggle = () => {
        x.value = !x.value
      }
      return {x,toggle}
    }
  }
</script>

<style lang="scss" scoped>

</style>