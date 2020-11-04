<template>
  <div class="sprite-collapse-item" :single="single" v-for="(t,index) in array" :key="index" @click="select(t)">
    <div class="sprite-collapse-item-title" :class="{selected:t === selected}">
      {{t}}
    </div>
    <div class="sprite-collapse-item-content" v-if="open" v-for="(content,index) in child" :key="index" >
      {{content}}
    </div>
  </div>
</template>

<script lang="ts">
  import {ref,onMounted} from 'vue'
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
      },
      single:{
        type:Boolean,
        default:false
      },
      selected:{
        type:Boolean,
        default:false
      },
    },
    setup(props,context){
      const open = ref(false)
      const defaults = context.slots.default()
      const child = defaults.map((tag)=>{
        return tag.children
      })
      const array = []
      const z = props.title
      array.push(z)
      const select = (title) => {
        if(title === props.title){
          open.value = !open.value
        }
      }
      const x = ()=>{
        if (props.selected){
          open.value = true
        }
      }
      onMounted(x)
      return {open,select,defaults,child,z,array}
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
    &-content{
      padding: 8px;
    }
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