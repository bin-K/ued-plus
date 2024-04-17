## dot 和 badge 的使用

使用 dot 可以配置红点的展示
同时使用 dot 和 badge 可以将红点展示转换为数字展示

> [!TIP] > `dot`和`badge`只在`ued-icon`包裹图标组件的情况下生效，name的情况下无效

<div class="icon-content icon-dot">
  <div class="icon-dot-show">
    <ued-icon :size="20" dot><Plus /></ued-icon>
    <ued-icon :size="20" dot><Minus /></ued-icon>
    <ued-icon :size="20" dot><CirclePlus /></ued-icon>
    <ued-icon :size="20" dot><CircleMinus /></ued-icon>
    <ued-icon :size="20" dot :badge="1"><Plus /></ued-icon>
    <ued-icon :size="20" dot :badge="99"><Minus /></ued-icon>
    <ued-icon :size="20" dot :badge="100"><CirclePlus /></ued-icon>
    <ued-icon :size="20" dot :badge="999"><CircleMinus /></ued-icon>
  </div>
</div>

<style lang="scss" scoped>
.icon-dot {
	border: 1px solid #e4e7ed;
	border-radius: 5px;

	&-show {
		display: flex;
	}
}

.ued-icon {
	margin-right: 36px;
}
</style>

::: details 显示代码

```vue
<template>
	<div class="icon-content icon-dot">
		<div class="icon-dot-show">
			<ued-icon :size="20" dot><Plus /></ued-icon>
			<ued-icon :size="20" dot><Minus /></ued-icon>
			<ued-icon :size="20" dot><CirclePlus /></ued-icon>
			<ued-icon :size="20" dot><CircleMinus /></ued-icon>
			<ued-icon :size="20" dot :badge="1"><Plus /></ued-icon>
			<ued-icon :size="20" dot :badge="99"><Minus /></ued-icon>
			<ued-icon :size="20" dot :badge="100"><CirclePlus /></ued-icon>
			<ued-icon :size="20" dot :badge="999"><CircleMinus /></ued-icon>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { Plus, Minus, CirclePlus, CircleMinus } from '@ued-plus/components'
</script>
```

:::
