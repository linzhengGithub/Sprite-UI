<template>
  <div class="sprite-popover" ref="popover">
    <div class="sprite-popover-content" ref="popoverContent" v-if="visible" :class="{[`position-${position}`] : true}">
      <slot name="content"></slot>
    </div>
    <span ref="popoverBtn" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
  import {ref,onMounted,onUnmounted} from 'vue';

  export default {
    name: 'Popover',
    props:{
      position:{
        type:String,
        default:'top',
        validator(value){
          return ['top','bottom','left','right'].indexOf(value) >= 0
        }
      },
      trigger:{
        default: 'click',
        validator(value){
          return ['click','hover'].indexOf(value) >= 0
        }
      }
    },
    setup(props) {
      const visible = ref<Boolean>(false);
      const popover = ref<HTMLDivElement>(null)
      const popoverContent = ref<HTMLDivElement>(null);
      const popoverBtn = ref<HTMLDivElement>(null);
      const positionPopoverContent = () => {
        document.body.appendChild(popoverContent.value);
        let {left, top, height,width} = popoverBtn.value.getBoundingClientRect();
        let {height : height2} = popoverContent.value.getBoundingClientRect();
        let positions ={
          top:{left:left + window.scrollX, top:top + window.scrollY},
          bottom:{left:left + window.scrollX, top:top + height + window.scrollY},
          left:{left:left + window.scrollX, top:top + window.scrollY + (height - height2)/2},
          right:{left:left + window.scrollX + width, top:top + window.scrollY + (height - height2)/2}
        }
        popoverContent.value.style.left = positions[props.position].left + 'px';
        popoverContent.value.style.top = positions[props.position].top + 'px';
      };
      const onClickDocument = (e) => {
        if (popoverContent.value && (popoverContent.value === e.target || popoverContent.value.contains(e.target))) {
          return;
        }
        close();
      };
      const open = () => {
        visible.value = true;
        setTimeout(() => {
          positionPopoverContent();
          document.addEventListener('click', onClickDocument);
        });
      };
      const close = () => {
        visible.value = false;
        document.removeEventListener('click', onClickDocument);
      };
      const onClick = (event) => {
        if (popoverBtn.value.contains(event.target)) {
          if (visible.value === true) {
            close();
          } else {
            open();
          }
        }
      };
      const judgment = () => {
        if(props.trigger === 'click'){
          popover.value.addEventListener('click',onClick)
        }else{
          popover.value.addEventListener('mouseenter',open)
          popover.value.addEventListener('mouseleave',close)
        }
      }
      onMounted(judgment)
      onUnmounted(judgment)
      return {visible, onClick,popover, popoverContent, popoverBtn};
    }
  };
</script>

<style lang="scss" scoped>
  $border-color:#d9d9d9;
  $border-radius:4px;
  .sprite-popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin-top: 100px;
    &-content {
      position: absolute;
      border: 1px solid $border-color;padding: 0.5em 1em;
      border-radius: $border-radius;background: white;filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
      max-width: 20em;word-break: break-all;z-index: 10;
      &::after,&::before{
        content: '';display: block;position: absolute;width: 0;height: 0;
        border: 10px solid transparent;
      }
      &.position-top{
        transform: translateY(-100%);margin-top: -10px;
        &::after,&::before{left: 10px;}
        &::after{top: 100%;border-top-color: white;border-bottom:none}
        &::before{top:calc(100% + 1px);border-top-color: $border-color;border-bottom:none}
      }
      &.position-bottom{
        margin-top: 10px;
        &::after,&::before{left: 10px;}
        &::after{bottom: 100%;border-bottom-color: white;border-top:none}
        &::before{bottom:calc(100% + 0.9px);border-bottom-color: $border-color;border-top:none}
      }
      &.position-left{
        transform: translateX(-100%);margin-left: -10px;
        &::after,&::before{left: 100%;transform: translateY(-50%);top: 50%;}
        &::after{left: 100%;border-left-color: white;border-right:none}
        &::before{left:calc(100% + 1px);border-left-color: $border-color;border-right:none}
      }
      &.position-right{
        margin-left: 10px;
        &::after,&::before{right: 100%;transform: translateY(-50%);top: 50%;}
        &::after{right: 100%;border-right-color: white;border-left: none;}
        &::before{right:calc(100% + 1px);border-right-color: $border-color;border-left: none;}
      }
    }
  }
</style>