/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import vueJsx from '@vitejs/plugin-vue-jsx'
export default defineConfig({
	build: {
		// 打包后文件目录
		outDir: 'ued-plus',
		// 压缩
		minify: false,
		rollupOptions: {
			// 忽略打包vue文件
			external: ['vue', /\.scss/],
			input: ['index.ts'],
			output: [
				{
					// 打包格式
					format: 'es',
					// 打包后文件名
					entryFileNames: '[name].mjs',
					// 让打包目录和我们目录对应
					preserveModules: true,
					// https://cn.rollupjs.org/configuration-options/#output-preservemodulesroot
					preserveModulesRoot: '..',
					exports: 'named',
					// 配置打包根目录
					dir: '../ued-plus/es',
				},
				{
					// 打包格式
					format: 'cjs',
					// 打包后文件名
					entryFileNames: '[name].js',
					// 让打包目录和我们目录对应
					preserveModules: true,
					// https://cn.rollupjs.org/configuration-options/#output-preservemodulesroot
					preserveModulesRoot: '..',
					exports: 'named',
					// 配置打包根目录
					dir: '../ued-plus/lib',
				},
			],
		},
		lib: {
			entry: './index.ts',
		},
	},
	plugins: [
		vue(),
		vueJsx(),
		dts({
			entryRoot: '.',
			outDir: ['../ued-plus/es', '../ued-plus/lib'],
			// 指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
			tsconfigPath: '../../tsconfig.json',
		}),
		{
			name: 'style',
			generateBundle(config, bundle) {
				// 这里可以获取打包后的文件目录以及代码code
				const keys = Object.keys(bundle)

				for (const key of keys) {
					const bundler: any = bundle[key as any]
					// rollup内置方法,将所有输出文件code中的.scss换成.css,因为我们当时没有打包scss文件

					this.emitFile({
						type: 'asset',
						fileName: key, // 文件名名不变
						source: bundler.code.replace(/\.scss/g, '.css'),
					})
				}
			},
		},
	],
	test: {
		environment: 'happy-dom',
	},
})
