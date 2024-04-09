## 响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。

<div class="layout-content layout-bootstrap">
  <ued-row :gutter="10">
    <ued-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content" />
    </ued-col>
    <ued-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content-light" />
    </ued-col>
    <ued-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content" />
    </ued-col>
    <ued-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content-light" />
    </ued-col>
  </ued-row>
  <ued-row :gutter="10">
    <ued-col :xs="{ span: 8 }" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content" />
    </ued-col>
    <ued-col :xs="{ span: 4 }" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content-light" />
    </ued-col>
    <ued-col :xs="{ span: 4 }" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content" />
    </ued-col>
    <ued-col :xs="{ span: 8 }" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content-light" />
    </ued-col>
  </ued-row>
</div>

::: details 显示代码

```vue
<template>
	<div class="layout-content layout-bootstrap">
		<ued-row :gutter="10">
			<ued-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
				<div class="grid-content" />
			</ued-col>
			<ued-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
				<div class="grid-content-light" />
			</ued-col>
			<ued-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
				<div class="grid-content" />
			</ued-col>
			<ued-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
				<div class="grid-content-light" />
			</ued-col>
		</ued-row>
		<ued-row :gutter="10">
			<ued-col :xs="{ span: 8 }" :sm="6" :md="4" :lg="3" :xl="1">
				<div class="grid-content" />
			</ued-col>
			<ued-col :xs="{ span: 4 }" :sm="6" :md="8" :lg="9" :xl="11">
				<div class="grid-content-light" />
			</ued-col>
			<ued-col :xs="{ span: 4 }" :sm="6" :md="8" :lg="9" :xl="11">
				<div class="grid-content" />
			</ued-col>
			<ued-col :xs="{ span: 8 }" :sm="6" :md="4" :lg="3" :xl="1">
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
