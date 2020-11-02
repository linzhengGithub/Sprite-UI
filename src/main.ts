import './lib/sprite.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router';
import 'github-markdown-css'
import Markdown from './components/Markdown.vue';
import Next from './components/Next.vue'
import plugin from './plugin.js'

const app = createApp(App)
app.use(router).use(plugin)
app.mount('#app')
app.component('Markdown',Markdown)
app.component('Next',Next)