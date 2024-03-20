### 自定义组件库（Vue3）

- https://juejin.cn/column/7118932817119019015

#### 初始化monorepo项目

- 参考 https://github.com/bin-K/monorepo-pnpm-vue

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
