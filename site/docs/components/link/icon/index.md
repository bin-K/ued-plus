## 图标

带图标的链接

> [!TIP]
> 使用 `icon` 属性来为按钮添加图标。
> 您可以传递组件名称的字符串（提前注册）或组件本身是一个 SVG Vue 组件。

<div class="common-content link-content link-underline">
  <div class="link-underline-default">
    <ued-link class="vp-raw" :icon="Plus"> Plus</ued-link>
    <ued-link class="vp-raw">
      CirclePlus<ued-icon class="ued-icon--right"> <CirclePlus /></ued-icon>
    </ued-link>
		<ued-link class="vp-raw">
			<template #icon>
				<CirclePlus />
			</template>
			CirclePlus
		</ued-link>
  </div>
</div>

::: details 显示代码

```vue
<template>
	<div class="link-content link-underline">
		<div class="link-underline-default">
			<ued-link class="vp-raw" :icon="Plus"> Plus</ued-link>
			<ued-link class="vp-raw">
				CirclePlus<ued-icon class="ued-icon--right"> <CirclePlus /></ued-icon>
			</ued-link>
		</div>
		<ued-link>
			<template #icon>
				<CirclePlus />
			</template>
			CirclePlus
		</ued-link>
	</div>
</template>

<script lang="ts" setup>
import { Plus } from '@ued-plus/components'
</script>
```

:::
