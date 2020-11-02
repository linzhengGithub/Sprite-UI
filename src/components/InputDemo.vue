<template>
  <Input value=""/>
  <Input value="禁用" disabled/>
  <Input value="只读" readonly/>
</template>

<script>
  import Input from '../lib/Input.vue'
  export default {
    name: 'InputDemo',
    components:{Input},
  }
</script>

<style lang="scss" scoped>

</style>