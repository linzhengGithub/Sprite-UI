<demo>
  多状态:支持level
</demo>
<template>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="warming">警告按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="link" level="main">主要link按钮</Button>
      <Button theme="link">普通link按钮</Button>
      <Button theme="link" level="warming">警告link按钮</Button>
      <Button theme="link" level="danger">危险link按钮</Button>
    </div>
    <div>
      <Button theme="text" level="main">主要text按钮</Button>
      <Button theme="text">普通text按钮</Button>
      <Button theme="text" level="warming">警告link按钮</Button>
      <Button theme="text" level="danger">危险text按钮</Button>
    </div>
  </div>
</template>

<script>
  import Button from '../../lib/Button.vue'
  export default {
    components:{Button}
  }
</script>

