// 参考https://vitepress.dev/zh/guide/markdown#raw
import { postcssIsolateStyles } from 'vitepress'

export default {
	plugins: [
		postcssIsolateStyles({
			includeFiles: [/vp-doc\.css/], // 默认为 /base\.css/
		}),
	],
}
