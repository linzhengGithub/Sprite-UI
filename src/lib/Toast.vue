<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="sprite-toast-wrapper" :class="`position-${position}`">
        <div class="sprite-toast">
          <div class="sprite-toast-icon">
            <svg class="icon"><use xlink:href="#icon-message"></use></svg>
          </div>
          <slot name="message"></slot>
          <div class="sprite-toast-border">
            <span class="sprite-toast-close" @click="close" v-if="closeVisible"></span>
          </div>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
  import {onMounted} from 'vue';

  export default {
    name: 'Toast',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator(value): boolean {//检查器。错误发出警告
          return ['top', 'middle', 'bottom'].indexOf(value) >= 0;
        }
      },
      autoClose: {
        type: [Boolean, Number],
        default: 3,
        validator(value) {
          return value === false || typeof value === 'number';
        }
      },
      closeVisible: {
        type: Boolean,
        default: false
      }
    },
    setup(props, context) {
      const close = () => {
        context.emit('update:visible', false);
      };
      const execAutoClose = () => {
        if (props.autoClose) {
          setTimeout(() => {
            close();
          }, props.autoClose * 1000);
        }
      };
      onMounted(execAutoClose);
      return {close};
    }
  };
</script>

<style lang="scss" scoped>
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-min-width: 200px;
  $toast-bg: #f9f8f4;
  @keyframes fade-in {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }

  @keyframes slide-down {
    0% {opacity: 0;transform: translateY(-100%);}
    100% {opacity: 1;transform: translateY(0%);}
  }

  @keyframes slide-up {
    0% {opacity: 0;transform: translateY(100%);}
    100% {opacity: 1;transform: translateY(0%);}
  }

  .sprite-toast {
    line-height: 1.8;min-height: $toast-min-height;min-width:$toast-min-width;color: black;
    display: flex;align-items: center;justify-content: center;
    background: $toast-bg;border-radius: 4px;padding: 0 16px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.20);
    &-icon{
      width: 20px;
      height: 20px;
      line-height: 20px;
      padding-right:20px ;

    }
    &-border{
      width: 20px;
      height: 20px;
    }
    &-wrapper {
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
      &.position-top {
        top: 0;
        .sprite-toast {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          animation: slide-down 250ms;
        }
      }
      &.position-middle {
        top: 50%;transform: translate(-50%, -50%);
        .sprite-toast {
          animation: fade-in 250ms;
        }
      }
      &.position-bottom {
        bottom: 0;
        .sprite-toast {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          animation: slide-up 250ms;
        }
      }
    }
    &-close {
      position: relative;
      display: inline-block;
      width: 16px;
      height: 16px;
      cursor: pointer;
      margin-left: 10px;
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