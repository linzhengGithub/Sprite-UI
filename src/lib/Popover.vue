<template>
  <div class="sprite-popover" @click="xxx">
    <div class="sprite-popover-content" ref="popoverContent" v-if="visible">
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
      const visible = ref<Boolean>(false)
      const popoverContent = ref<HTMLDivElement>(null)
      const xxx = () => {
        visible.value = !visible.value
        if(visible.value === true){
          setTimeout(()=>{
            document.body.appendChild(popoverContent.value)
            let eventHandler = () => {
              visible.value = false
              document.removeEventListener('click',eventHandler)
            }
            document.addEventListener('click',eventHandler)
          })
        }
      }
      return {visible,xxx,popoverContent}
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