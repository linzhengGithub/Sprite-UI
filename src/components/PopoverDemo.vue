<template>
  <Popover position="top">
    <template v-slot:content>
      Hi Sprite-ui
    </template>
    <Button>点我</Button>
  </Popover>
  <Popover position="bottom">
    <template v-slot:content>
      Hi Sprite-ui
    </template>
    <Button>点我</Button>
  </Popover>
  <Popover position="left">
    <template v-slot:content>
      Hi Sprite-ui
    </template>
    <Button>点我</Button>
  </Popover>
  <Popover position="right">
    <template v-slot:content>
      Hi Sprite-ui
    </template>
    <Button>点我</Button>
  </Popover>
  <div>
    <Popover position="top" trigger="hover">
      <template v-slot:content>
        Hi Sprite-ui
      </template>
      <Button>点我</Button>
    </Popover>
    <Popover position="bottom" trigger="hover">
      <template v-slot:content>
        Hi Sprite-ui
      </template>
      <Button>点我</Button>
    </Popover>
    <Popover position="left" trigger="hover">
      <template v-slot:content>
        Hi Sprite-ui
      </template>
      <Button>点我</Button>
    </Popover>
    <Popover position="right" trigger="hover">
      <template v-slot:content>
        Hi Sprite-ui
      </template>
      <Button>点我</Button>
    </Popover>
  </div>
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