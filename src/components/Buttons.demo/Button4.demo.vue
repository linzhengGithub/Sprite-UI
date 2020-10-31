<demo>
  禁用状态:支持disabled
</demo>
<template>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用link按钮</Button>
    <Button theme="text" disabled>禁用text按钮</Button>
  </div>
</template>

<script>
  import Button from '../../lib/Button.vue'
  import Demo from '../Demo.vue'
  export default {
    components: {Demo,Button}
  }
</script>

