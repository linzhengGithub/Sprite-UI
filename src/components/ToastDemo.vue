<template>
  <h1>Toast 组件示例</h1>
  <Button @click="showToast">showToast</Button>
</template>

<script>
  import Toast from '../lib/Toast.vue'
  import Button from '../lib/Button.vue'
  import {openToast} from '../lib/openToast'
  export default {
    name: 'ToastDemo',
    components:{Toast,Button,openToast},
    setup(){
      const showToast = () => {
        openToast({
          message:'Hello Sprite-ui',
          position: 'bottom',
          closeVisible: false,
          autoClose: 10
        })
      }
      return {showToast}
    }
  }
</script>

<style lang="scss" scoped>

</style>