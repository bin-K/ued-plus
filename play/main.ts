import { createApp } from 'vue'
import App from './app.vue'
import ued from '@ued-plus/components'
const app = createApp(App)

app.use(ued)
app.mount('#app')
