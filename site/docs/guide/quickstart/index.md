## 其他项目引入

- 项目根目录下创建.npmrc文件，并配置私服地址
- 需要进行npm login

```
registry=http://127.0.0.1:8081/repository/npm-hosted/
```

## 执行依赖安装

```shell
pnpm add ued-plus
```

## 全局引用

```ts
// main.ts
import UedPlus from 'ued-plus'
app.use(UedPlus)
```

## 局部引用

```vue
*.vue
<template>
	<ued-button>默认按钮</ued-button>
</template>

<script lang="ts" setup>
import { UedButton } from 'ued-plus'
</script>
```
