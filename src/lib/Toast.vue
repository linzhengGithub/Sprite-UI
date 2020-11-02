<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="sprite-toast-wrapper">
        <div class="sprite-toast">
          <svg class="icon">
            <use xlink:href="#icon-message"></use>
          </svg>
          <slot name="content" class="message"/>
          <span class="sprite-toast-close" @click="close"></span>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">

  export default {
    name: 'Toast',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      content: {
        type: String,
        default: 'message'
      }
    },
    setup(){
      const close = () => {

      }
      return {close}
    }
  };
</script>

<style lang="scss" scoped>
  $font-size:14px;  $toast-min-height:40px;  $toast-bg:#f9f8f4;
  .sprite-toast {
    line-height: 1.8;min-height:$toast-min-height;color: black;display: flex;align-items: center;
    background: $toast-bg;border-radius: 4px;padding: 0 16px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.20);
    > .icon{
      margin-right: 10px;
    }
    &-wrapper {
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
    }
    &-close {
      position: relative;
      display: inline-block;
      width: 16px;
      height: 16px;
      cursor: pointer;
      margin-left:10px;
      &::before,
      &::after {
        content: '';
        position: absolute;
        height: 1px;
        background: black;
        width: 100%;
        top: 50%;
        left: 50%;
      }
      &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &::after {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }
</style>