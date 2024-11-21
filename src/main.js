import { createApp } from 'vue'
import App from './App.vue'
import TheHeader from './components/TheHeader'
import TabsMain from './components/TabsMain'

const app = createApp(App)
app.component('the-header', TheHeader)
app.component('tabs-main', TabsMain)
app.mount('#app')
