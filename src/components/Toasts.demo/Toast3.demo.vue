<demo>
  支持 取消自动关闭,设置时长属性:autoClose
</demo>
<template>
  <div>
    <Button @click="topToast">Top</Button>
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
          message: 'Hello Sprite-ui',
          position: 'top',
          closeVisible:true,
          autoClose: false
        });
      };
      const bottomToast = () => {
        openToast({
          message: 'Hello Sprite-ui',
          position: 'bottom',
          closeVisible:true,
          autoClose:10
        });
      };
      return {topToast,bottomToast};
    }
  };
</script>