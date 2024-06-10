import { createApp } from 'vue'
const app = createApp(App)
import { createPinia } from 'pinia'
app.use(createPinia())
import App from './App.vue'
app.mount('#app')
import router from './router'
app.use(router)
//=========引入Element========
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
app.use(ElementPlus)
//引入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}





