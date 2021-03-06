<template>
  <div class="sprite-tabs">
    <div class="sprite-tabs-nav" ref="container">
      <div class="sprite-tabs-nav-item" v-for="(t,index) in title" :key="index" :class="{selected: t === selected}" @click="select(t)" :ref="el => {if(el) navItems[index] = el}">{{t}}</div>
      <div class="sprite-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="sprite-tabs-content">
      <component class="sprite-tabs-content-item" :is="current" :key="current.props.title"></component>
    </div>
  </div>
</template>

<script lang="ts">
  import {computed,ref,onMounted,onUpdated} from 'vue'
  import Tab from './Tab.vue'
  export default {
    name: 'Tabs',
    props:{
      selected:{
        type:String
      }
    },
    setup(props,context){
      const navItems = ref([])
      const indicator = ref(null)
      const container = ref(null)
      const x = () => {
        const divs = navItems.value
        const result = divs.find(div => div.classList.contains('selected'))
        const {width} = result.getBoundingClientRect()
        indicator.value.style.width = width + 'px'
        const {left:left1} = container.value.getBoundingClientRect()
        const {left:left2} = result.getBoundingClientRect()
        const left = left2 - left1
        indicator.value.style.left = left + 'px'
      }
      onMounted(x)
      onUpdated(x)
      const defaults = context.slots.default()
      defaults.forEach((tag)=>{
        if(tag.type !== Tab){
          throw new Error('Tabs 的子标签必须是 Tab')
        }
      })
      const title = defaults.map((tag)=>{
        return tag.props.title
      })
      const current = computed(()=>{
        return defaults.find((tag)=>tag.props.title === props.selected)
      })
      const select = (title) => {
        context.emit('update:selected',title)
      }
      return{defaults,title,current,select,navItems,indicator,container}
    }
  }
</script>

<style lang="scss" scoped>
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;
  .sprite-tabs {
    &-nav {
      display: flex;
      color: $color;
      border-bottom: 1px solid $border-color;
      position: relative;
      &-item {
        padding: 8px 0;
        margin: 0 16px;
        cursor: pointer;
        &:first-child {
          margin-left: 0;
        }
        &.selected {
          color: $blue;
        }
      }
      &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
        transition: left 250ms;
      }
    }
    &-content {
      padding: 8px 0;
    }
  }
</style>