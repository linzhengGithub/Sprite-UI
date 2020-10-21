import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/test.vue'

const history = createWebHashHistory() //创建模式
const router = createRouter({ //创建路由
  history : history,
  routes: [
    {
      path:'/',component: HelloWorld
    },
    {
      path:'/xxx',component: Test
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
