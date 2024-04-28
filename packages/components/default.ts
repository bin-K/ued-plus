import { Plugin, App } from 'vue'
import components from './components'

export const makeInstaller = (components: Plugin[] = []) => {
	const install = (app: App) => {
		for (const c in components) {
			app.use(components[c])
		}
	}

	return {
		install,
	}
}

export default makeInstaller([...components])
