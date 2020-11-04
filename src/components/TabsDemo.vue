<template>
  <h1>Tabs 组件示例</h1>
  <Demo :component="Tabs1Demo"/>
  <Next :nextSection="`/doc/input`">Input</Next>
</template>

<script>
import Tabs1Demo from './Tabs.demo/Tabs1.demo.vue'
import Demo from './Demo.vue'
  export default {
    name: 'TabsDemo',
    components: {Demo},
    setup(){
      return{Tabs1Demo}
    }
  }
</script>

<style lang="scss" scoped>

</style>