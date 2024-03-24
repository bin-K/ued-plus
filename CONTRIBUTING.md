### 自定义组件库（Vue3）

- 参考：https://juejin.cn/column/7118932817119019015

#### 组件库的环境配置

- 技术选型：使用 Vite+Ts 开发的是 Vue3 组件库
- typescript、vue3 、sass等

```shell
pnpm add vue@next typescript sass -D -w
```

##### 初始化ts

- 执行npx tsc --init 生成tsconfig.json ts 的配置文件

```shell
npx tsc --init
```

```json
{
	"compilerOptions": {
		"baseUrl": ".",
		"jsx": "preserve",
		"strict": true,
		"target": "ES2015",
		"module": "ESNext",
		"skipLibCheck": true,
		"esModuleInterop": true,
		"moduleResolution": "Node",
		"lib": ["esnext", "dom"]
	}
}
```

#### 搭建基于vite的vue3项目

- 新建play 文件夹，初始化pnpm init, 后续的组件调试就在这个项目下进行
- 安装依赖，在play安装vite和vitejs/plugin-vue插件,@vitejs/plugin-vue插件是为了解析后缀为.vue文件的
- 新建vite.config.ts

```shell
pnpm add vite @vitejs/plugin-vue -D

touch vite.config.ts
```

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [vue()],
})
```

- 新建index.html

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>play</title>
	</head>
	<body>
		<div id="app"></div>
		<script src="main.ts" type="module"></script>
	</body>
</html>
```

- 新建app.vue

```vue
<template>
	<div>启动测试</div>
</template>
```

- 新建入口文件 main.ts

```ts
import { createApp } from 'vue'
import App from './app.vue'

const app = createApp(App)

app.mount('#app')
```

- play 项目需要测试本地的组件库,所以也需要将 play 和我们的组件库关联在一起。修改一下pnpm-workspace.yaml文件

```yml
packages:
  - 'packages/**'
  - 'play'
```

- package.json

```json
{
	"workspaces": ["packages/**", "play"]
}
```

- 新建一个声明文件vite.d.ts

```ts
declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
}
```

#### 开发一个组件

##### 测试组件

- packages目录下新建components和utils

  - components就是我们组件存放的位置
  - utils包则是存放一些公共的方法之类的
  - 分别在两个包下执行pnpm init 并更改name为 '@ued-plus/components', '@ued-plus/utils'

- 在`components/src/button`创建测试组件`button.vue`

```vue
<template>
	<button>测试按钮</button>
</template>
```

- 在`button/index.ts`将其导出

```ts
import Button from './button.vue'
export { Button }
export default Button
```

- 在`components/src/index.ts`集中导出所有组件

```ts
export * from './button'
```

- 在`components/index.ts`导出所有组件提供给外部使用

```ts
export * from './src/index'
```

- 在play中进行测试

```shell
# 安装组件依赖
pnpm add @ued-plus/components
```

- app.vue中测试组件

```vue
<template>
	<div>
		<Button />
	</div>
</template>
<script lang="ts" setup>
import { Button } from '@easyest/components'
</script>
```

##### 全局挂载组件

- 使用app.use 挂载全局组件，会调用传入参数的 install 方法，给每个组件添加一个 install 方法,然后再导出整个组件库
- 改造`button/index.ts`

```ts
import _Button from './button.vue'
import type { App, Plugin } from 'vue'
type SFCWithInstall<T> = T & Plugin
// 全局安装方法
const withInstall = <T>(comp: T) => {
	;(comp as SFCWithInstall<T>).install = (app: App) => {
		const name = (comp as any).name
		// 注册组件
		app.component(name, comp as SFCWithInstall<T>)
	}
	return comp as SFCWithInstall<T>
}
export const UedButton = withInstall(_Button)
export default UedButton
```

- `components/index.ts`

```ts
import { App } from 'vue'
import * as components from './src/index'
export * from './src/index'

export default {
	install: (app: App) => {
		for (const c in components) {
			app.use(components[c as keyof typeof components])
		}
	},
}
```

- 需要给button.vue一个name好在全局挂载的时候作为组件名使用

```vue
<template>
	<button>测试按钮</button>
</template>

<script lang="ts" setup>
defineOptions({ name: 'UedButton' })
</script>

<style lang="scss" scoped></style>
```

- 在`play/main.ts`下挂载组件

```ts
import { createApp } from 'vue'
import App from './app.vue'
import ued from '@ued-plus/components'
const app = createApp(App)

app.use(ued)
app.mount('#app')
```

- 在`app.vue`直接使用

```vue
<template>
	<div>
		<ued-button />
	</div>
</template>

<script lang="ts" setup></script>
```

- 加上全局提示
- 安装@vue/runtime-core

```shell
pnpm add @vue/runtime-core -D -w
```

- 新建components.d.ts

```ts
import * as components from './index'
declare module '@vue/runtime-core' {
	// 组件全局提示效果
	export interface GlobalComponents {
		UedButton: typeof components.Button
	}
}
export {}
```

- 注意：在 vue 3.3 版本之后 可以直接在 `<script setup> `中使用 defineOptions 了
- 使用unplugin-vue-define-options解决setup 语法糖name的问题

```shell
# 根目录下
pnpm add unplugin-vue-define-options  -D -w
```

- 在play/vite.config.ts引入

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 在 vue 3.3 版本之后 可以直接在 <script setup> 中使用 defineOptions 了
// import DefineOptions from 'unplugin-vue-define-options/vite'
export default defineConfig({
	plugins: [vue()],
})
```

#### 使用vite 打包组件库

##### 打包配置

- 全局安装 vite 以及@vitejs/plugin-vue

```shell
pnpm add vite @vitejs/plugin-vue -D -w
```

- `components/vite.config.ts` components下新建vite.config.ts

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
	build: {
		// 打包后文件目录
		outDir: 'ued',
		// 压缩
		minify: false,
		rollupOptions: {
			// 忽略打包vue文件
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue',
				},
				dir: 'dist',
			},
		},
		lib: {
			entry: './index.ts',
			name: 'ued',
			fileName: 'ued',
			formats: ['es', 'umd', 'cjs'],
		},
	},
	plugins: [vue()],
})
```

- 配置打包命令并执行， `components/package.json`下
- 这种打包方式最终会将整个组件库打包到一个文件中,并且样式文件也不能按需加载

```json
{
	"script": {
		"build": "vite build"
	}
}
```

```shell
pnpm build
```

- 需要修改一下配置让打包后的结构和我们开发的结构一致

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
	build: {
		// 打包后文件目录
		outDir: 'ued',
		// 压缩
		minify: false,
		rollupOptions: {
			// 忽略打包vue文件
			external: ['vue'],
			input: ['index.ts'],
			output: [
				{
					// 打包格式
					format: 'es',
					// 打包后文件名
					entryFileNames: '[name].mjs',
					// 让打包目录和我们目录对应
					preserveModules: true,
					exports: 'named',
					// 配置打包根目录
					dir: '../ued/es',
				},
				{
					// 打包格式
					format: 'cjs',
					// 打包后文件名
					entryFileNames: '[name].js',
					// 让打包目录和我们目录对应
					preserveModules: true,
					exports: 'named',
					// 配置打包根目录
					dir: '../ued/lib',
				},
			],
		},
		lib: {
			entry: './index.ts',
		},
	},
	plugins: [vue()],
})
```

##### 声明文件

- 安装vite-plugin-dts

```shell
pnpm add vite-plugin-dts -D -w
```

- `compoments/vite.config.ts`

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
export default defineConfig({
	plugins: [
		vue(),
		dts({
			entryRoot: './src',
			outDir: ['../ued/es/src', '../ued/lib/src'],
			// 指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
			tsconfigPath: '../../tsconfig.json',
		}),
	],
})
```

#### 使用 gulp 打包组件库并实现按需加载

##### 删除打包文件

- 在 components 新建一个 script 文件夹用于存放我们的脚本相关内容
- 安装 @types/node

```shell
pnpm add @types/node -D -w
```

- 新建 `script/utils/path.ts`

```ts
import { resolve } from 'path'

//组件库根目录
export const componentPath = resolve(__dirname, '../../')

//pkg根目录
export const pkgPath = resolve(__dirname, '../../../')
```

- 新建 `script/utils/del-path.ts`

```ts
import fs from 'fs'
import { resolve } from 'path'
import { pkgPath } from './path'
// 保留的文件
const stayFile = ['package.json', 'README.md']

const delPath = async (path: string) => {
	let files: string[] = []

	if (fs.existsSync(path)) {
		files = fs.readdirSync(path)

		files.forEach(async (file) => {
			const curPath = resolve(path, file)

			if (fs.statSync(curPath).isDirectory()) {
				// recurse
				if (file !== 'node_modules') await delPath(curPath)
			} else {
				// delete file
				if (!stayFile.includes(file)) {
					fs.unlinkSync(curPath)
				}
			}
		})

		if (path !== `${pkgPath}/easyest`) fs.rmdirSync(path)
	}
}
export default delPath
```

##### 使用 gulp 删除打包文件

- 安装一些依赖使得 gulp 支持ts 以及新的 es6 语法
- sucras 可以让执行 gulp 可以使用最新语法并且支持 ts

```shell
pnpm i gulp @types/gulp sucrase -D -w
```

- 新建 `scropt/build/index.ts`

```ts
import { series } from 'gulp'
import delPath from '../utils/del-path'
import { pkgPath } from '../utils/path'

export const removeDist = () => {
	return delPath(`${pkgPath}/ued`)
}

export default series(async () => removeDist())
```

- 根目录下添加脚本,并执行

```json
{
	"script": {
		"build:ued": "gulp -f packages/components/script/build/index.ts"
	}
}
```

##### glup打包样式

- 安装gulp-sass,同时在安装一个自动补全 css 前缀插件gulp-autoprefixer
- gulp-autoprefixer@^9.0.0 会出现TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts"的问题（待解决）

```shell
pnpm add gulp-sass @types/gulp-sass gulp-autoprefixer@^8.0.0 @types/gulp-autoprefixer -D -w
```

- 修改`build/index.ts`

```ts
import { series, src, dest, parallel } from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import delPath from '../utils/del-path'
import { pkgPath, componentPath } from '../utils/path'
const sass = require('gulp-sass')(require('sass'))

export const removeDist = () => {
	return delPath(`${pkgPath}/ued`)
}

// 打包样式
export const buildStyle = () => {
	return src(`${componentPath}/src/**/styles/**.scss`)
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(dest(`${pkgPath}/ued/lib/src`))
		.pipe(dest(`${pkgPath}/ued/es/src`))
}

export default series(
	async () => removeDist(),
	parallel(async () => buildStyle())
)
```

- 新建`utils/run.ts`

```ts
import { spawn } from 'child_process'

export default async (command: string, path: string) => {
	// cmd表示命令，args代表参数，如 rm -rf  rm就是命令，-rf就为参数
	const [cmd, ...args] = command.split(' ')
	return new Promise((resolve) => {
		const app = spawn(cmd, args, {
			cwd: path, // 执行命令的路径
			stdio: 'inherit', // 输出共享给父进程
			shell: true, // mac不需要开启，windows下git base需要开启支持
		})
		// 执行完毕关闭并resolve
		app.on('close', resolve)
	})
}
```

- `build/index.ts`新增

```ts
//打包组件
export const buildComponent = async () => {
	run('pnpm run build', componentPath)
}
```

- `vite.config.ts`中忽略打包sass

```ts
rollupOptions: {
	// 忽略打包vue文件
	external: ['vue', /\.scss/],
}
```

- vite 打包忽略了 sass 文件打包,所以打包后的文件遇到.scss 文件的引入会自动跳过,所以引入代码没变将代码中的.scss换成.css

- 在`components/vite.config.ts` 中的 plugins 中新增

```ts
 plugins: [
    {
      name: "style",
      generateBundle(config, bundle) {
        //这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle);

        for (const key of keys) {
          const bundler: any = bundle[key as any];
          //rollup内置方法,将所有输出文件code中的.scss换成.css,因为我们当时没有打包scss文件

          this.emitFile({
            type: "asset",
            fileName: key, //文件名名不变
            source: bundler.code.replace(/\.scss/g, ".css"),
          });
        }
      },
    },
  ],
```

#### VitePress 搭建部署组件库文档

##### 安装vitepress

- `新建site文件夹`,并初始化 pnpm init
- 安装 vitepress和vue

```shell
pnpm install -D vitepress vue
```

- 新建`site/docs/index.md`

```md
# Hello ued-plus
```

- 添加命令

```json
{
	"scripts": {
		"docs:dev": "vitepress dev docs",
		"docs:build": "vitepress build docs",
		"docs:preview": "vitepress preview docs"
	}
}
```

- 执行命令

```shell
pnpm docs:dev
```

##### 导航栏配置

- 新建`site/docs/.vitepress/config.js`

```js
export default {
	themeConfig: {
		siteTitle: 'vitepress',
		nav: [
			{ text: '指南', link: '/guide/installation/' },
			{ text: '组件', link: '/components/button/' },
		],
		socialLinks: [{ icon: 'github', link: 'https://github.com/bin-K/ued-plus' }],
	},
}
```

- 新建`site/docs/guide/index.md` `site/docs/guide/installation/index.md`
- 新建`site/docs/components/button/index.md`

##### 侧边栏配置

- `site/docs/.vitepress/config.js`配置sidebar

```js
sidebar: {
	'/guide/': [
		{
			text: '基础',
			items: [
				{
					text: '安装',
					link: '/guide/installation/',
				},
				{
					text: '快速开始',
					link: '/guide/quickstart/',
				},
			],
		},
	],
	'/components/': [
		{
			text: '基础组件',
			items: [
				{
					text: 'Button',
					link: '/components/button/',
				},
			],
		},
	],
},
```

##### 引入组件库

- `pnpm-workspace.yaml`新增一个site目录

```yml
packages:
  - 'packages/**'
  - 'play'
  - 'site'
```

- `site`安装组件库

```shell
pnpm add @ued-plus/components
```

- 新建`site/docs/.vitepress/theme/index.js`引入组件库

```js
import DefaultTheme from 'vitepress/theme'
import ued from '@ued-plus/components'
export default {
	...DefaultTheme,
	enhanceApp: async ({ app }) => {
		// app is the Vue 3 app instance from `createApp()`. router is VitePress'
		// custom router. `siteData`` is a `ref`` of current site-level metadata.
		app.use(ued)
	},
}
```

##### 配置命令部署组件库

- 新建`site/deploy.sh`

```shell
#!/usr/bin/env sh

# 忽略错误
# set -e

# 构建
pnpm run docs:build
# 进入待发布的目录
cd docs/.vitepress/dist
git init
git remote add origin git@github.com:bin-K/ued-ui.git
git add -A
git commit -m 'docs(update):更新文档'
# 访问地址：https://bin-k.github.io/ued-ui/
git push -f origin master
```

- 配置 命令

```json
{
	"scripts": {
		"docs:publish": "sh deploy.sh"
	}
}
```

- 新建 ued-ui仓库并且在setting中的pages 配置部署
- 修改config.js

```js
export default {
	base: process.env.NODE_ENV === 'production' ? '/ued-ui/' : '/',
}
```

#### 集成项目的编程规范工具链(ESlint+Prettier+Stylelint)

- ESlint和Prettier在搭建monorepo时已经添加，需要补充Stylelint

```shell
pnpm add stylelint@^15.10.3 stylelint-prettier@^4.0.2 stylelint-config-standard stylelint-config-recommended-scss postcss-html stylelint-config-recommended-vue stylelint-config-recess-order stylelint-config-prettier -D -w

```

- 新建`.stylelintrc.cjs`

```js
module.exports = {
	// 注册 stylelint 的 prettier 插件
	plugins: ['stylelint-prettier'],
	// 继承一系列规则集合
	extends: [
		// standard 规则集合
		'stylelint-config-standard',
		'stylelint-config-recommended-scss',
		// 样式属性顺序规则
		'stylelint-config-recess-order',
		// 接入 Prettier 规则
		'stylelint-config-prettier',
		'stylelint-prettier/recommended',
	],
	// 配置 rules
	rules: {
		// 开启 Prettier 自动格式化功能
		'prettier/prettier': true,
	},
}
```

- 新增命令

```json
{
	"script": {
		// stylelint 命令
		"lint:style": "stylelint --fix \"**/*.{css,less,scss}\""
	},
	"lint-staged": {
		"**/*.{css,less,scss}": ["stylelint --fix \"**/*.{css,less}\""]
	}
}
```

- 执行命令即可完成样式格式化

#### 引入现代前端测试框架 Vitest

- 安装依赖

```shell
pnpm add vitest happy-dom @vitest/coverage-v8 -D -w
```

- 在`components/vite.config.ts`中对 Vitest 做一个相关配置

```ts
// 三斜线命令告诉编译器在编译过程中要引入的额外的文件
/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
...
export default defineConfig(
    {
        ...
        test: {
            environment: "happy-dom"
        },

    }
)
```

- 添加测试命令, `components/package.json`

```json
{
	"scripts": {
		"test": "vitest",
		"coverage": "vitest run --coverage"
	}
}
```

- 执行test命令时,Vitest 会执行`**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}`的文件,
  这里我们的测试文件统一命名为`**/*.{test}.ts`的形式并放在每个组件的`__tests__`目录下
- 新建`__tests__/button.test.ts`

```ts
import { describe, expect, it } from 'vitest'

describe('helloued', () => {
	it('should be helloued', () => {
		expect('hello' + 'ued').toBe('helloued')
	})
})
```

- 测试组件

```shell
pnpm add @vue/test-utils -D -w

```

```ts
import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import button from '../button.vue'

// The component to test
describe('test button', () => {
	it('should render slot', () => {
		const wrapper = mount(button, {
			slots: {
				default: 'ued',
			},
		})

		// Assert the rendered text of the component
		expect(wrapper.text()).toContain('ued')
	})

	it('should have class', () => {
		const wrapper = mount(button, {
			props: {
				type: 'primary',
			},
		})
		expect(wrapper.classes()).toContain('ued-button--primary')
	})
})
```
