<template>
  <div class="next">
    下一节：<p><router-link :to="nextSection"><slot/></router-link></p>
  </div>
</template>

<script>
  export default {
    name: 'Next',
    props:{
      name:String,
      nextSection:String
    },
  }
</script>

<style lang="scss" scoped>
  .next{
    display:flex;
    justify-content: flex-end;
    p{
      color: #0366d6;
    }
  }
</style>