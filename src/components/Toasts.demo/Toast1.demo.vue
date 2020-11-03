<demo>
  一键打开 Toast
</demo>
<template>
  <div>
    <Button @click="topToast">Top</Button>
    <Button @click="middleToast">Middle</Button>
    <Button @click="bottomToast">Bottom</Button>
  </div>
</template>

<script lang="ts">
  import Button from '../../lib/Button.vue'
  import Toast from '../../lib/Toast.vue';
  import {openToast} from '../../lib/openToast';

  export default {
    name: 'Toast1.demo',
    components:{Button,Toast},
    setup() {
      const topToast = () => {
        openToast({
          message: '这是一条消息提示！',
          position: 'top',
        });
      };
      const middleToast = () => {
        openToast({
          message: '这是一条消息提示！',
          position: 'middle',
        });
      };
      const bottomToast = () => {
        openToast({
          message: '这是一条消息提示！',
          position: 'bottom',
        });
      };
      return {topToast,middleToast,bottomToast};
    }
  };
</script>