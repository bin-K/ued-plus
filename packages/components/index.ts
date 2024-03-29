import { App } from 'vue'
import * as components from './src/index'
// 引入初始化css文件
import '../theme/initialize/init.scss'
export * from './src/index'

export default {
	install: (app: App) => {
		for (const c in components) {
			app.use(components[c as keyof typeof components])
		}
	},
}
