<demo>
  一键打开 Dialog
</demo>
<template>
  <div>
    <Button @click="showDialog">showDialog</Button>
  </div>
</template>

<script>
  import Dialog from '../../lib/Dialog.vue'
  import Button from '../../lib/Button.vue'
  import {openDialog} from '../../lib/openDialog'
  export default {
    name: 'Dialog1.demo',
    components:{Dialog,Button},
    setup(){
      const showDialog = () => {
        openDialog({
          title:'温馨提示',
          content:'这是一个对话框.',
          ok:()=>{},
          cancel:()=>{},
          closeOnclickOverlay:false
        })
      }
      return {showDialog}
    }
  }
</script>

<style lang="scss" scoped>

</style>