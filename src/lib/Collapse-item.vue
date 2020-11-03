<template>
  <div class="sprite-collapse-item">
    <div class="sprite-collapse-item-title" @click="controlOpen">
      {{title}}
    </div>
    <div class="sprite-collapse-item-content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import {ref} from 'vue'
  export default {
    name: 'Collapse-item',
    props:{
      title:{
        type:String,
        require:true
      },
      open:{
        type: Boolean,
        default:false
      }
    },
    setup(){
      const open = ref(false)
      const controlOpen = () => {
        open.value = !open.value
      }
      return {open,controlOpen}
    }
  };
</script>

<style lang="scss" scoped>
  $border-color:#d9d9d9;$border-radius:4px;
  .sprite-collapse-item{
    &-title{
      border: 1px solid $border-color;
      background: #fafafa;
      margin-top: -1px;margin-left: -1px;margin-right: -1px;
      min-height:32px;display: flex;align-items:center;padding: 0 8px;
    }
    &-content{padding: 8px;}
    &:first-child{
      > .sprite-collapse-item-title{border-top-left-radius: $border-radius;border-top-right-radius: $border-radius;}
    }
    &:last-child{
      > .sprite-collapse-item-title:last-child{
        margin-bottom: -1px;
        border-bottom-left-radius: $border-radius;border-bottom-right-radius: $border-radius;
      }
    }
  }
</style>