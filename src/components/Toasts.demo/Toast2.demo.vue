<demo>
  支持 手动关闭属性:closeVisible
</demo>
<template>
  <div>
    <Button @click="middleToast">Middle</Button>
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
      const middleToast = () => {
        openToast({
          message: 'Hello Sprite-ui',
          position: 'middle',
          closeVisible:true
        });
      };
      return {middleToast};
    }
  };
</script>