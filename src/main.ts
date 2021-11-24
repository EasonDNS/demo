import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, setStoreLocal } from './store'
import 'normalize.css'
import 'element-plus/theme-chalk/display.css'
import { regesterGlobal } from '@/global'
const app = createApp(App)
app.use(store)
app.use(setStoreLocal)
app.use(regesterGlobal)
app.use(router)
app.mount('#app')
