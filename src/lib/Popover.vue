<template>
  <div class="sprite-popover" @click="onClick">
    <div class="sprite-popover-content" ref="popoverContent" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="popoverBtn">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
  import {ref} from 'vue';

  export default {
    name: 'Popover',
    setup() {
      const visible = ref<Boolean>(false);
      const popoverContent = ref<HTMLDivElement>(null);
      const popoverBtn = ref<HTMLDivElement>(null);
      const positionPopoverContent = () => {
        document.body.appendChild(popoverContent.value);
        let {left, top} = popoverBtn.value.getBoundingClientRect();
        popoverContent.value.style.left = left + window.scrollX + 'px';
        popoverContent.value.style.top = top + window.scrollY + 'px';
      };
      const onClickDocument = (e) => {
        if (popoverContent.value && (popoverContent.value === e.target || popoverContent.value.contains(e.target))) {
          return;
        }
        close()
      };
      const open = () => {
        visible.value = true
        setTimeout(() => {
          positionPopoverContent();
          document.addEventListener('click', onClickDocument);
        });
      };
      const close = () => {
        visible.value = false;
        document.removeEventListener('click', onClickDocument);
      }
      const onClick = (event) => {
        if (popoverBtn.value.contains(event.target)) {
          if (visible.value === true) {
            close()
          }else{
            open()
          }
        }
      };
      return {visible, onClick, popoverContent, popoverBtn};
    }
  };
</script>

<style lang="scss" scoped>
  .sprite-popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin-top: 100px;
    &-content {
      position: absolute;
      padding-bottom: 11px;
      transform: translateY(-100%);
    }
  }
</style>