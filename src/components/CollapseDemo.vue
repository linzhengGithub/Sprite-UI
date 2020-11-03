<template>
  <Collapse>
    <CollapseItem title="标题1">内容1</CollapseItem>
    <CollapseItem title="标题2">内容2</CollapseItem>
    <CollapseItem title="标题3">内容3</CollapseItem>
  </Collapse>
</template>

<script lang="ts">
  import Collapse from '../lib/Collapse.vue';
  import CollapseItem from '../lib/Collapse-item.vue';
  export default {
    name: 'CollapseDemo',
    components:{Collapse,CollapseItem},
  };
</script>

<style lang="scss" scoped>

</style>