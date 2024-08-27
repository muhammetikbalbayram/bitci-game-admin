import { createApp } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import VueApexCharts from 'vue3-apexcharts'
import { registerPlugins } from './plugins/register'

const app = createApp(App)
app.component('Apexchart', VueApexCharts);
registerPlugins(app)
app.mount('#app')