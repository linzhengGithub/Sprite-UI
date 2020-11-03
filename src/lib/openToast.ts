import Toast from './Toast.vue';
import {createApp, h} from 'vue';

export const openToast = (options) => {
  const {message, position, closeVisible,autoClose} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Toast,
        {
          visible: true,
          'onUpdate:visible': (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
          position, closeVisible,autoClose
        }, {message}
      );
    }
  });
  app.mount(div);
};