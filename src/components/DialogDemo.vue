<template>
  <div>
    <Button @click="toggle">Dialog</Button>
    <Dialog v-model:visible="x" :close-onclick-overlay="false"
    :ok="f1" :cancel="f2">
      <template v-slot:title>
        <strong>温馨提示</strong>
      </template>
      <template v-slot:content>
        <div>这是一个对话框</div>
        <div>支持 <i>visible、ok、cancel、title、自定义HTML内容</i> </div>
      </template>
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