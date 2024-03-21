### 自定义组件库（Vue3）

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

##### 搭建基于vite的vue3项目

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

##### 开发一个组件

###### 测试组件

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

###### 全局挂载组件

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

###### 基础组件开发
