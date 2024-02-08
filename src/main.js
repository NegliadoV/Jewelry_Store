import './assets/scss/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'

import Home from './pages/Home.vue'
import Basket from './pages/Basket.vue'

const app = createApp(App)
const pinia = createPinia()
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/basket',
    name: 'basket',
    component: Basket
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(pinia)
app.use(router)
app.use(autoAnimatePlugin)
app.mount('#app')
