<template>
  <h1>Popover 组件示例</h1>
  <Demo :component="Popover1Demo"></Demo>
  <Demo :component="Popover2Demo"></Demo>
</template>

<script lang="ts">
  import Demo from './Demo.vue';
  import Popover1Demo from './Popovers.demo/Popover1.demo.vue'
  import Popover2Demo from './Popovers.demo/Popover2.demo.vue'
  export default {
    name: 'PopoverDemo',
    components: {Demo},
    setup(){
      return{Popover1Demo,Popover2Demo}
    }
  };
</script>

<style lang="scss" scoped>

</style>