<demo>
  不同尺寸:支持size
</demo>
<template>
  <div>
    <Button size="big">大型按钮</Button>
    <Button>默认按钮</Button>
    <Button size="small">小型按钮</Button>
  </div>
  <div>
    <Button theme="link" size="big">按钮link</Button>
    <Button theme="link">默认link</Button>
    <Button size="small" theme="link">小型link</Button>
  </div>
  <div>
    <Button size="big" theme="text">按钮text</Button>
    <Button theme="text">默认text</Button>
    <Button size="small" theme="text">小型text</Button>
  </div>
</template>

<script>
  import Button from '../../lib/Button.vue'
  export default {
  components:{Button}
  }
</script>

