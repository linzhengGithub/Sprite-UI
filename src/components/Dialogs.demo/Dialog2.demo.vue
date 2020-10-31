<demo>
  支持 close-onclick-overlay
</demo>
<template>
  <div>
    <Button @click="toggle">Dialog</Button>
    <Dialog v-model:visible="x" :close-onclick-overlay="false"
            :ok="f1" :cancel="f2">
      <template v-slot:title>
        <strong>提示</strong>
      </template>
      <template v-slot:content>
        <div>取消点击提示框外自动关闭.</div>
        <div>点击ok返回false的话不关闭,用于特殊情况.</div>
      </template>
    </Dialog>
  </div>
</template>

<script>
  import Dialog from '../../lib/Dialog.vue'
  import Button from '../../lib/Button.vue'
  import {ref} from 'vue'

  export default {
    components: {Dialog, Button},
    setup() {
      const x = ref(false)
      const toggle = () => {
        x.value = !x.value
      }
      const f1 = () => {
        return false
      }
      const f2 = () => {}
      return {x,toggle, f1, f2}
    }
  }
</script>

<style lang="scss" scoped>

</style>