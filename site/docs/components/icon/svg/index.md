## 直接使用 SVG 图标

由于SVG图标默认不携带任何属性, 你需要直接提供它们

<div class="icon-content icon-svg">
  <div class="icon-svg-show">
    <Plus style="width: 1em; height: 1em; margin-right: 8px" />
    <Minus style="width: 1em; height: 1em; margin-right: 8px" />
    <CirclePlus style="width: 1em; height: 1em; margin-right: 8px" />
    <CircleMinus style="width: 1em; height: 1em; margin-right: 8px" />
  </div>
</div>

<style>
.icon-content {
  padding: 15px;
	border: 1px solid #e4e7ed;
	border-radius: 5px;
}
.icon-svg {
  padding: 15px;
}
.icon-svg-show {
  display: flex;
}

.icon-svg-show svg {
  color: var(--color);
	fill: currentColor;
}
</style>

::: details 显示代码

```vue
<template>
	<div>
		<!-- 由于SVG图标默认不携带任何属性 -->
		<!-- 你需要直接提供它们 -->
		<Plus style="width: 1em; height: 1em; margin-right: 8px" />
		<Minus style="width: 1em; height: 1em; margin-right: 8px" />
		<CirclePlus style="width: 1em; height: 1em; margin-right: 8px" />
		<CircleMinus style="width: 1em; height: 1em; margin-right: 8px" />
	</div>
</template>

<script lang="ts" setup>
import { Plus, Minus, CirclePlus, CircleMinus } from '@ued-plus/components'
</script>
```

:::
