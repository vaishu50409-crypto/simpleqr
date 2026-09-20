import '@/style.css'
import App from '@/App.vue'
import { createApp } from 'vue'

const app = createApp(App)
applyTheme()
app.mount('#app')

function applyTheme() {
  const body = document.body
  let theme = "light"
  if (window.matchMedia('prefers-color-scheme: dark')) {
    theme = "dark"
  }
  body.className = theme
}
