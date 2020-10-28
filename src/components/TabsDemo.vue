<template>
  <div>
    <h2>示例1</h2>
    <Tabs v-model:selected="x">
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航2">内容2</Tab>
    </Tabs>
  </div>
</template>

<script>
  import {ref} from 'vue'
  import Tabs from '../lib/Tabs.vue'
  import Tab from '../lib/Tab.vue'
  export default {
    name: 'TabsDemo',
    components: {Tab, Tabs},
    setup(){
      const x = ref('导航1')
      return{x}
    }
  }
</script>

<style lang="scss" scoped>

</style>