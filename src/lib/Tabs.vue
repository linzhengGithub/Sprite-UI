<template>
  <div>
    <div v-for="(t,index) in title" :key="index">{{t}}</div>
    <component v-for="(c,index) in defaults " :key="index" :is="c"></component>
  </div>
</template>

<script>
  import Tab from './Tab.vue'
  export default {
    name: 'Tabs',
    setup(props,context){
      const defaults = context.slots.default()
      defaults.forEach((tag)=>{
        if(tag.type !== Tab){
          throw new Error('Tabs 的子标签必须是 Tab')
        }
      })
      const title = defaults.map((tag)=>{
        return tag.props.title
      })
      return{defaults,title}
    }
  }
</script>

<style lang="scss" scoped>

</style>