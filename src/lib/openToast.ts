import Toast from './Toast.vue';
import {createApp,h} from 'vue'
export const openToast = (options) => {
  const {content} = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const close = () => {
    app.unmount(div)
    div.remove()
  }
  const app = createApp({
    render(){
      return h(
        Toast,
        {visible:true,
          'onUpdate:visible':(newVisible)=>{
            if (newVisible === false){
              close()
            }
          }
        },{content}
      )
    }
  })
  app.mount(div)
}