import { createApp } from 'vue'
import { setupComponents } from '@/dashboard/components'
import { setupDirectives } from '@/dashboard/directives'
import { setupPlugins } from '@/dashboard/plugins'
import Dashboard from './dashboard/index.vue'
import 'animate.css'

const boostrap = async () => {
  const app = createApp(Dashboard)
  setupComponents(app)
  setupDirectives(app)
  setupPlugins(app)
  app.mount('#app')
}
boostrap()
