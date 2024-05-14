# 安装

## 项目引入前置

> 完成组件库推送私服后，项目根目录下创建`.npmrc`文件，并配置私服地址

> [!CAUTION] 注意
> 在不改变其他包镜像源的情况下，添加私服包的镜像源<br>
> 参考：`https://github.com/mazeyqian/mazey/blob/master/.npmrc`<br>
> .npmrc 配置 不带@指定，配置不生效<br>
> 因此将`package.json`中的`name`由`ued-plus`改为`@ued/ued-plus`<br>
> 问题： `https://segmentfault.com/q/1010000043974798`

```shell
@ued:registry=http://127.0.0.1:8081/repository/npm-hosted/
```

> 需要进行`npm login`

```shell
npm login --registry=http://127.0.0.1:8081/repository/npm-hosted/
```

## 执行依赖安装

```shell
pnpm add @ued/ued-plus
```

## 全局引用

```ts
// main.ts
import UedPlus from '@ued/ued-plus'
app.use(UedPlus)
```

## 局部引用

```vue
*.vue
<template>
	<ued-button>默认按钮</ued-button>
</template>

<script lang="ts" setup>
import { UedButton } from '@ued/ued-plus'
</script>
```
