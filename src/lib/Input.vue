<template>
  <div class="wrapper">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly"/>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Input',
    props:{
      value:{
        type:String
      },
      disabled:{
        type:Boolean,
        default:false
      },
      readonly:{
        type:Boolean,
        default: false
      }
    },
  }
</script>

<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $red: #F1453D;
  .wrapper {
    font-size: 14px;display: inline-flex;align-items: center;
    > input {
      height: 32px;border: 1px solid $border-color;border-radius: 4px;
      padding: 0 8px;font-size: inherit;
      &:hover {border-color: $border-color-hover;}
      &:focus {
        box-shadow: inset 0 1px 3px $box-shadow-color; //内阴影，Y轴1px 扩散半径3px
        outline: none; //取消默认光标点击聚焦
      }
      &[disabled], &[readonly] {
        border-color: #bbb;color: #bbb;cursor: not-allowed;
      }
    }
  }
</style>