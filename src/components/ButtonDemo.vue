<template>
  <h2>基础类型</h2>
  <div>
    <Button>default</Button>
    <Button theme="button">button</Button>
    <Button theme="link">link按钮</Button>
    <Button theme="text">text按钮</Button>
  </div>
  <h2>不同尺寸</h2>
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
  <h2>多状态</h2>
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
  <h2>禁用状态</h2>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用link按钮</Button>
    <Button theme="text" disabled>禁用text按钮</Button>
  </div>
  <h2>加载中</h2>
  <div>
    <Button loading>加载中</Button>
  </div>
</template>

<script>
  import Button from '../lib/Button.vue'
  export default {
    name: 'ButtonDemo',
    components:{Button},
    setup(){

    }
  }
</script>

<style lang="scss" scoped>
  h2{
    margin-bottom: 10px;
    margin-top: 10px;
  }
  Button{
    margin-bottom: 5px;
  }
</style>