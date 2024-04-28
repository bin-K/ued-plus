# 安装

## clone 组件库代码

```shell
git clone git@github.com:bin-K/ued-plus.git
```

## 进入组件库并执行依赖安装

```shell
cd ued-plus
pnpm i
```

## 使用 nexus 搭建本地npm 私服

- 主要参考：
- 安装nexus: https://juejin.cn/post/7244450987703304253
- 配置nexus仓库：https://www.cnblogs.com/54chensongxia/p/14930128.html
- 发布本地依赖包到私服仓库：https://blog.csdn.net/wjyyhhxit/article/details/103595333

## 执行本地组件库打包和发布命令

```shell
pnpm run build:ued-plus
pnpm run publish:ued-plus
```

## 其他项目引入

- 项目根目录下创建.npmrc文件，并配置私服地址

```
registry=http://localhost:8081/repository/npm-hosted/
```

## 执行依赖安装

```shell
pnpm add ued-plus
```

## 全局或局部引用

```ts
// main.ts
import UedPlus from 'ued-plus'
app.use(UedPlus)
```

```vue
*.vue
<template>
	<ued-button>默认按钮</ued-button>
</template>

<script lang="ts" setup>
import { UedButton } from 'ued-plus'
</script>
```
