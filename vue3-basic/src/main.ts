import { createApp } from 'vue';
import App from './App2.vue'
const app = createApp(App)
app.provide('currentUser', { name: 'viking' })
app.mount('#app')
