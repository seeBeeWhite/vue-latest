import { createApp } from 'vue'

// Components
import App from './App.vue'

// Plugins
import { registerPlugins } from './plugins/index.ts'

const app = createApp(App)
registerPlugins(app)
app.mount('#app')
