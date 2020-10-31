<template>
  <div>
    <h1>Button 组件示例</h1>
    <Demo :component="Button1Demo"/>
    <Demo :component="Button2Demo"/>
    <Demo :component="Button3Demo"/>
    <Demo :component="Button4Demo"/>
    <Demo :component="Button5Demo"/>
  </div>
  <Next :nextSection="`/doc/dialog`">Dialog</Next>





</template>

<script>
  import Button1Demo from './Buttons.demo/Button1.demo.vue'
  import Button2Demo from './Buttons.demo/Button2.demo.vue'
  import Button3Demo from './Buttons.demo/Button3.demo.vue'
  import Button4Demo from './Buttons.demo/Button4.demo.vue'
  import Button5Demo from './Buttons.demo/Button5.demo.vue'
  import Demo from './Demo.vue'
  export default {
    name: 'ButtonDemo',
    components:{Demo},
    setup(){
      return {Button1Demo,Button2Demo,Button3Demo,Button4Demo,Button5Demo}
    }
  }
</script>

<style lang="scss">


</style>