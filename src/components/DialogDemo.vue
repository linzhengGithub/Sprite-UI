<template>
  <div>
    <Button @click="toggle">Dialog</Button>
    <Dialog v-model:visible="x" :close-onclick-overlay="false"
    :ok="f1" :cancel="f2"
    >

    </Dialog>
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
      const f1 = () => {
        return false
      }
      const f2 = () => {
      }
      return {x,toggle,f1,f2}
    }
  }
</script>

<style lang="scss" scoped>

</style>