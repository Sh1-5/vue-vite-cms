import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { setStore } from './store'
import 'normalize.css'
import './assets/css/index.css'
import * as Icons from '@element-plus/icons-vue'

setStore()

const app = createApp(App)
app.use(router)
app.use(store)
const icons: any = Icons
for (const i in icons) {
  app.component(i, icons[i])
}
app.mount('#app')
