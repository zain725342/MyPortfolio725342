import './assets/main.css'

import navSection from './components/sections/navSection.vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('navSection', navSection);

app.use(createPinia())
app.use(router)

app.mount('#app')
