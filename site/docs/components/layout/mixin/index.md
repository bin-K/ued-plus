## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<div class="layout-content layout-mixin">
  <ued-row :gutter="20">
    <ued-col :span="16">
      <div class="grid-content" />
    </ued-col>
    <ued-col :span="8">
      <div class="grid-content-light" />
    </ued-col>
  </ued-row>
  <ued-row :gutter="20">
    <ued-col :span="8">
      <div class="grid-content" />
    </ued-col>
    <ued-col :span="4">
      <div class="grid-content-light" />
    </ued-col>
    <ued-col :span="8">
      <div class="grid-content" />
    </ued-col>
    <ued-col :span="4">
      <div class="grid-content-light" />
    </ued-col>
  </ued-row>
  <ued-row :gutter="20">
    <ued-col :span="4">
      <div class="grid-content" />
    </ued-col>
    <ued-col :span="16">
      <div class="grid-content-light" />
    </ued-col>
    <ued-col :span="4">
      <div class="grid-content" />
    </ued-col>
  </ued-row>
</div>

::: details 显示代码

```vue
<template>
	<div class="layout-content layout-mixin">
		<ued-row :gutter="20">
			<ued-col :span="16">
				<div class="grid-content" />
			</ued-col>
			<ued-col :span="8">
				<div class="grid-content-light" />
			</ued-col>
		</ued-row>
		<ued-row :gutter="20">
			<ued-col :span="8">
				<div class="grid-content" />
			</ued-col>
			<ued-col :span="4">
				<div class="grid-content-light" />
			</ued-col>
			<ued-col :span="8">
				<div class="grid-content" />
			</ued-col>
			<ued-col :span="4">
				<div class="grid-content-light" />
			</ued-col>
		</ued-row>
		<ued-row :gutter="20">
			<ued-col :span="4">
				<div class="grid-content" />
			</ued-col>
			<ued-col :span="16">
				<div class="grid-content-light" />
			</ued-col>
			<ued-col :span="4">
				<div class="grid-content" />
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
