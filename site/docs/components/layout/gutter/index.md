## 分栏间隔

支持列间距。

行提供 gutter 属性来指定列之间的间距，其默认值为0。

<div class="layout-content layout-gutter">
  <ued-row :gutter="20">
    <ued-col :span="6">
      <div class="grid-content" />
    </ued-col>
    <ued-col :span="6">
      <div class="grid-content-light" />
    </ued-col>
    <ued-col :span="6">
      <div class="grid-content" />
    </ued-col>
    <ued-col :span="6">
      <div class="grid-content-light" />
    </ued-col>
  </ued-row>
</div>

::: details 显示代码

```vue
<template>
	<div class="layout-content layout-gutter">
		<ued-row :gutter="20">
			<ued-col :span="6">
				<div class="grid-content" />
			</ued-col>
			<ued-col :span="6">
				<div class="grid-content-light" />
			</ued-col>
			<ued-col :span="6">
				<div class="grid-content" />
			</ued-col>
			<ued-col :span="6">
				<div class="grid-content-light" />
			</ued-col>
		</ued-row>
	</div>
</template>

<style lang="scss" scoped>
.ued-row {
	margin-bottom: 20px;
}
.ued-row:last-child {
	margin-bottom: 0;
}
.ued-col {
	border-radius: 4px;
}

.grid-content {
	border-radius: 4px;
	min-height: 36px;
	background-color: var(--ued-color-primary-light-7);
	&-light {
		border-radius: 4px;
		min-height: 36px;
		background-color: var(--ued-color-primary-light-5);
	}
}
</style>
```

:::
