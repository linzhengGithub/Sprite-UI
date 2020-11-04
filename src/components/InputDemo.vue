<template>
  <h1>Input 组件示例</h1>
  <Demo :component="Input1Demo"/>
  <Demo :component="Input2Demo"/>
  <Demo :component="Input3Demo"/>
  <Next :nextSection="`/doc/toast`">Toast</Next>
</template>

<script>
  import Demo from './Demo.vue'
  import Input1Demo from './Inputs.demo/Input1.demo.vue'
  import Input2Demo from './Inputs.demo/Input2.demo.vue'
  import Input3Demo from './Inputs.demo/Input3.demo.vue'
  export default {
    name: 'InputDemo',
    components:{Demo},
    setup(){
      return{Input1Demo,Input2Demo,Input3Demo}
    }
  }
</script>

<style lang="scss" scoped>

</style>