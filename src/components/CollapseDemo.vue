<template>
  <Collapse>
    <CollapseItem title="标题1" selected>内容1</CollapseItem>
    <CollapseItem title="标题2" selected>内容2</CollapseItem>
    <CollapseItem title="标题3">内容3</CollapseItem>
  </Collapse>
</template>

<script lang="ts">
  import Collapse from '../lib/Collapse.vue';
  import CollapseItem from '../lib/Collapse-item.vue';
  import {ref} from 'vue'
  export default {
    name: 'CollapseDemo',
    components:{Collapse,CollapseItem},
    setup(){
      const x = ref('标题1')
      return{x}
    }
  };
</script>

<style lang="scss" scoped>

</style>