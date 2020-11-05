<template>
  <h1>Collapse 组件示例</h1>
  <Demo :component="Collapse1Demo"></Demo>
  <Demo :component="Collapse2Demo"></Demo>
  <Next :nextSection="`/doc/popover`">Popover</Next>
</template>

<script lang="ts">
  import Demo from './Demo.vue';
  import Collapse1Demo from './Collapses.demo/Collapse1.demo.vue'
  import Collapse2Demo from './Collapses.demo/Collapse2.demo.vue'
  export default {
    name: 'CollapseDemo',
    components:{Demo},
    setup(){
      return{Collapse1Demo,Collapse2Demo}
    }
  };
</script>

<style lang="scss" scoped>

</style>