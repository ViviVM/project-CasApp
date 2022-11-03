import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

import App from './App.vue'
import router from './router'

//import { BootstrapVue3 } from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css' 
import 'bootstrap/dist/js/bootstrap.js'


const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersist)

app.use(pinia)
app.use(router)
//app.use(BootstrapVue3)

app.mount('#app')
