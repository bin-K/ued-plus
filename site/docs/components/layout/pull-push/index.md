## 左右移动

通过制定 col 组件的 pull push 属性可以控制栅格左右移动格数。

<div class="common-content layout-content layout-push-pull">
  <ued-row :gutter="20">
    <ued-col :span="6" :pull="6">
      <div class="grid-content-light" />
    </ued-col>
  </ued-row>
  <ued-row :gutter="20">
    <ued-col :span="6" :offset="18" :push="6">
      <div class="grid-content" />
    </ued-col>
  </ued-row>
</div>

::: details 显示代码

```vue
<template>
	<div class="layout-content layout-push-pull">
		<ued-row :gutter="20">
			<ued-col :span="6" :pull="6">
				<div class="grid-content-light" />
			</ued-col>
		</ued-row>
		<ued-row :gutter="20">
			<ued-col :span="6" :offset="18" :push="6">
				<div class="grid-content" />
			</ued-col>
		</ued-row>
	</div>
</template>

<style lang="scss" scoped>
.ued-row {
	margin-bottom: 20px;
	&:last-child {
		margin-bottom: 0;
	}
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
