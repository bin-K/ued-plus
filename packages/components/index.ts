import { Plugin, App } from 'vue'
import components from './components'
// 引入全局样式变量
import '../theme/common/var.scss'
// 引入初始化css文件
import '../theme/initialize/init.scss'

export * from './src/index'
export * from './src/types'

export default ((components: Plugin[] = []) => {
	const install = (app: App) => {
		for (const c in components) {
			app.use(components[c])
		}
	}

	return {
		install,
	}
})(components)
