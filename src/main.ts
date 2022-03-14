import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { setStore } from './store'
import 'normalize.css'
import './assets/css/index.css'

setStore()

createApp(App).use(router).use(store).mount('#app')
