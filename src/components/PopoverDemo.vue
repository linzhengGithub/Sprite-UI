<template>
  <Popover>
    <template v-slot:content>
      Popover内容
    </template>
    <Button>点我</Button>
  </Popover>
</template>

<script lang="ts">
  import Popover from '../lib/Popover.vue';
  import Button from '../lib/Button.vue';
  export default {
    name: 'PopoverDemo',
    components: {Popover,Button}
  };
</script>

<style lang="scss" scoped>

</style>