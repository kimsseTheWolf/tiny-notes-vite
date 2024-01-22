import { createApp } from 'vue'
import { Button } from "vant"
import router from './router/index.js'
import 'vant/lib/index.css';
// import './style.css'
import App from './App.vue'

createApp(App).use(router).mount('#app')
