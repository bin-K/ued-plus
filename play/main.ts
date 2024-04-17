import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import Ued from '@ued-plus/components'

import './style/common.scss'

const app = createApp(App)
app.use(router).use(Ued).mount('#app')
