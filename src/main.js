import { createApp } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import { registerPlugins } from './plugins/register'

const app = createApp(App)
registerPlugins(app)
app.mount('#app')