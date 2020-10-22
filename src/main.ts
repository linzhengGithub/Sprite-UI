import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

const history = createWebHashHistory() //创建模式
const router = createRouter({ //创建路由
  history : history,
  routes: [
    {
      path:'/',component: Home
    },
    {
      path:'/doc',component: Doc
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
