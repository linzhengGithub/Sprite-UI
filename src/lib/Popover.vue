<template>
  <div class="sprite-popover" @click="xxx">
    <div class="sprite-popover-content"  v-if="visible" @click.stop>
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
        if(visible.value === true){
          setTimeout(()=>{
            let eventHandler = () => {
              visible.value = false
              console.log('document');
              document.removeEventListener('click',eventHandler)
            }
            document.addEventListener('click',eventHandler)
          })
        }else{
          console.log('vm');
        }
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