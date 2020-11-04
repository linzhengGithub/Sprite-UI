<demo>
  支持 selected 属性
</demo>
<template>
    <Collapse>
      <CollapseItem title="标题1" selected>内容1</CollapseItem>
      <CollapseItem title="标题2" selected>内容2</CollapseItem>
      <CollapseItem title="标题3" selected>内容3</CollapseItem>
    </Collapse>
</template>

<script lang="ts">
  import Collapse from '../../lib/Collapse.vue';
  import CollapseItem from '../../lib/Collapse-item.vue'
  export default {
    name: 'Collapse1.demo',
    components:{Collapse,CollapseItem}
  };
</script>

<style lang="scss" scoped>

</style>