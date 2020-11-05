<demo>
  支持 hover
</demo>
<template>
  <div class="wrapper">
    <Popover position="top" trigger="hover">
      <template v-slot:content>
        Hi Sprite-ui
      </template>
      <Button>top</Button>
    </Popover>
  </div>
  <div class="wrapper">
    <Popover position="bottom" trigger="hover">
      <template v-slot:content>
        Hi Sprite-ui
      </template>
      <Button>bottom</Button>
    </Popover>
  </div>
  <div class="wrapper">
    <Popover position="left" trigger="hover">
      <template v-slot:content>
        Hi Sprite-ui
      </template>
      <Button>left</Button>
    </Popover>
  </div>
  <div class="wrapper">
    <Popover position="right" trigger="hover">
      <template v-slot:content>
        Hi Sprite-ui
      </template>
      <Button>right</Button>
    </Popover>
  </div>
</template>

<script lang="ts">
  import Popover from '../../lib/Popover.vue';
  import Button from '../../lib/Button.vue';
  export default {
    name: 'Popover1.demo',
    components:{Popover,Button}
  };
</script>

<style lang="scss" scoped>
  .wrapper{
    display: inline-block;
    margin-right: 20px;
  }
</style>