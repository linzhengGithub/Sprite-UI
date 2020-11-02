<template>
  <Button @click="showToast">top</Button>
  <Button>middle</Button>
  <Button>bottom</Button>
</template>

<script lang="ts">
  import Button from './Button.vue'
  import { getCurrentInstance } from 'vue'
  export default {
    name: 'Toast',
    components: {Button},

    setup(){
      const {ctx}:any = getCurrentInstance()
      console.log(ctx);
      const showToast = () => {
        ctx.$toast('我是message')
      }
      return {showToast}
    }
  }
</script>

<style lang="scss" scoped>

</style>