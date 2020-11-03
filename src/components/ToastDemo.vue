<template>
  <h1>Toast 组件示例</h1>
  <Demo :component="Toast1Demo"></Demo>
  <Demo :component="Toast2Demo"></Demo>
  <Demo :component="Toast3Demo"></Demo>
</template>

<script lang="ts">
  import Toast1Demo from './Toasts.demo/Toast1.demo.vue'
  import Toast2Demo from './Toasts.demo/Toast2.demo.vue'
  import Toast3Demo from './Toasts.demo/Toast3.demo.vue'
  import Demo from './Demo.vue'
  export default {
    name: 'ToastDemo',
    components:{Demo},
    setup(){
      return {Toast1Demo,Toast2Demo,Toast3Demo}
    }
  }
</script>