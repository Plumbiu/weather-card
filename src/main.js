import { createApp } from 'vue'
import App from './App.vue'
import './assets/CSS/ElementPlus.css'
import store from './store/store'
import UI from './components/library'
import router from './router/router'
import {
  ElTable,
  ElTableColumn,
  ElButton,
  ElCascader,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElCarousel,
  ElCarouselItem,
  ElSwitch,
  ElIcon
} from 'element-plus'
import 'element-plus/theme-chalk/dark/css-vars.css'
document.documentElement.style.fontSize = 100 / 750 + 'vw'
const app = createApp(App)
app.use(ElTable)
app.use(ElTableColumn)
app.use(ElButton)
app.use(ElCascader)
app.use(ElMenu)
app.use(ElSubMenu)
app.use(ElMenuItem)
app.use(ElCarousel)
app.use(ElCarouselItem)
app.use(ElSwitch)
app.use(ElIcon)
app.use(store)
app.use(router)
app.use(UI)
app.mount('#app')
