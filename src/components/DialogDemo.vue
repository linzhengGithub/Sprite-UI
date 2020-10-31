<template>
  <h1>Dialog 示例</h1>
  <Demo :component="Dialog1Demo"/>
  <Demo :component="Dialog2Demo"/>
  <Demo :component="Dialog3Demo"/>
</template>

<script>
  import Dialog1Demo from './Dialogs.demo/Dialog1.demo.vue'
  import Dialog2Demo from './Dialogs.demo/Dialog2.demo.vue'
  import Dialog3Demo from './Dialogs.demo/Dialog3.demo.vue'
  import Demo from './Demo.vue'
  export default {
    name: 'DialogDemo',
    components: {Demo},
    setup(){
      return {Dialog1Demo,Dialog2Demo,Dialog3Demo}
    }
  }
</script>