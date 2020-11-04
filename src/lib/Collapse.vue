<template>
  <div class="sprite-collapse">
    <component v-for="(c,index) in defaults" :key="index" :is="c" :single="single"></component>
  </div>
</template>

<script lang="ts">
  import CollapseItem from './Collapse-item.vue';

  export default {
    name: 'Collapse',
    props:{
      single:{
        type: Boolean,
        default: false
      },
    },
    setup(props,context){
      const defaults = context.slots.default()
      defaults.forEach((tag) => {
        if(tag.type !== CollapseItem){
          throw new Error('Collapse 的子标签必须是 CollapseItem')
        }
      })
      return {defaults}
    }
  };
</script>

<style lang="scss" scoped>
  $grey:#d9d9d9;
  $border-radius: 4px;
  .sprite-collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }
</style>