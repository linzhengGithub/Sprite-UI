<template>
  <div class="sprite-popover" @click="xxx">
    <div class="sprite-popover-content"  v-if="visible">
      <slot name="content"></slot>
    </div>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
  import {ref} from 'vue'
  export default {
    name: 'Popover',
    setup(){
      const visible = ref(false)
      const xxx = () => {
        visible.value = !visible.value
      }
      return {visible,xxx}
    }
  };
</script>

<style lang="scss" scoped>
  .sprite-popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin-top: 100px;
    &-content{
      position: absolute;
      bottom: 100%;
    }
  }
</style>