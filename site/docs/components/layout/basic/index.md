## 基础布局

使用列创建基础网格布局。

通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

<div class="common-content layout-content layout-basic">
  <ued-row>
    <ued-col :span="24">
      <div class="grid-content" />
    </ued-col>
  </ued-row>
  <ued-row>
    <ued-col :span="12">
      <div class="grid-content" />
    </ued-col>
    <ued-col :span="12">
      <div class="grid-content-light" />
    </ued-col>
  </ued-row>
  <ued-row>
    <ued-col :span="8">
      <div class="grid-content" />
    </ued-col>
    <ued-col :span="8">
      <div class="grid-content-light" />
    </ued-col>
    <ued-col :span="8">
      <div class="grid-content" />
    </ued-col>
  </ued-row>
  <ued-row>
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
  <ued-row>
    <ued-col :span="4">
      <div class="grid-content" />
    </ued-col>
    <ued-col :span="4">
      <div class="grid-content-light" />
    </ued-col>
    <ued-col :span="4">
      <div class="grid-content" />
    </ued-col>
    <ued-col :span="4">
      <div class="grid-content-light" />
    </ued-col>
    <ued-col :span="4">
      <div class="grid-content" />
    </ued-col>
    <ued-col :span="4">
      <div class="grid-content-light" />
    </ued-col>
  </ued-row>
</div>

::: details 显示代码

```vue
<template>
	<div class="layout-content layout-basic">
		<ued-row>
			<ued-col :span="24">
				<div class="grid-content" />
			</ued-col>
		</ued-row>
		<ued-row>
			<ued-col :span="12">
				<div class="grid-content" />
			</ued-col>
			<ued-col :span="12">
				<div class="grid-content-light" />
			</ued-col>
		</ued-row>
		<ued-row>
			<ued-col :span="8">
				<div class="grid-content" />
			</ued-col>
			<ued-col :span="8">
				<div class="grid-content-light" />
			</ued-col>
			<ued-col :span="8">
				<div class="grid-content" />
			</ued-col>
		</ued-row>
		<ued-row>
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
		<ued-row>
			<ued-col :span="4">
				<div class="grid-content" />
			</ued-col>
			<ued-col :span="4">
				<div class="grid-content-light" />
			</ued-col>
			<ued-col :span="4">
				<div class="grid-content" />
			</ued-col>
			<ued-col :span="4">
				<div class="grid-content-light" />
			</ued-col>
			<ued-col :span="4">
				<div class="grid-content" />
			</ued-col>
			<ued-col :span="4">
				<div class="grid-content-light" />
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
