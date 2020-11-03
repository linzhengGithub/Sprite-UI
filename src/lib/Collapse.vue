<template>
  <div class="sprite-collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Collapse'
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