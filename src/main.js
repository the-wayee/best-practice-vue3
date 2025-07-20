import { createApp } from 'vue'
import App from './App.vue'
import Card from './components/Card.vue'


export const app = createApp(App)
// 注册全局组件
app.component('Card', Card)

app.mount('#app')
