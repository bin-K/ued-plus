## 对齐方式

默认使用 flex 布局来对分栏进行灵活的对齐。

您可以通过justify 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。

<div class="layout-content">
  <div class="layout-justify">
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
    </ued-row>
    <ued-row justify="center">
      <ued-col :span="6">
        <div class="grid-content" />
      </ued-col>
      <ued-col :span="6">
        <div class="grid-content-light" />
      </ued-col>
      <ued-col :span="6">
        <div class="grid-content" />
      </ued-col>
    </ued-row>
    <ued-row justify="end">
      <ued-col :span="6">
        <div class="grid-content" />
      </ued-col>
      <ued-col :span="6">
        <div class="grid-content-light" />
      </ued-col>
      <ued-col :span="6">
        <div class="grid-content" />
      </ued-col>
    </ued-row>
    <ued-row justify="space-between">
      <ued-col :span="6">
        <div class="grid-content" />
      </ued-col>
      <ued-col :span="6">
        <div class="grid-content-light" />
      </ued-col>
      <ued-col :span="6">
        <div class="grid-content" />
      </ued-col>
    </ued-row>
    <ued-row justify="space-arround">
      <ued-col :span="6">
        <div class="grid-content" />
      </ued-col>
      <ued-col :span="6">
        <div class="grid-content-light" />
      </ued-col>
      <ued-col :span="6">
        <div class="grid-content" />
      </ued-col>
    </ued-row>
    <ued-row justify="space-evenly">
      <ued-col :span="6">
        <div class="grid-content" />
      </ued-col>
      <ued-col :span="6">
        <div class="grid-content-light" />
      </ued-col>
      <ued-col :span="6">
        <div class="grid-content" />
      </ued-col>
    </ued-row>
  </div>
  <div class="layout-align">
    <ued-row align="top">
      <ued-col :span="6">
        <div class="grid-content" />
      </ued-col>
      <ued-col :span="6">
        <div class="grid-content-light" />
      </ued-col>
      <ued-col :span="6">
        <div class="grid-content" />
      </ued-col>
    </ued-row>
  </div>
  <div class="layout-align">
    <ued-row align="center">
      <ued-col :span="6">
        <div class="grid-content" />
      </ued-col>
      <ued-col :span="6">
        <div class="grid-content-light" />
      </ued-col>
      <ued-col :span="6">
        <div class="grid-content" />
      </ued-col>
    </ued-row>
  </div>
  <div class="layout-align">
    <ued-row align="bottom">
      <ued-col :span="6">
        <div class="grid-content" />
      </ued-col>
      <ued-col :span="6">
        <div class="grid-content-light" />
      </ued-col>
      <ued-col :span="6">
        <div class="grid-content" />
      </ued-col>
    </ued-row>
  </div>
</div>

<style scoped>
.layout-align > .ued-row {
  margin-top: 10px;
	height: 80px;
	border: 1px solid #e4e7ed;
}
</style>

::: details 显示代码

```vue
<template>
	<div class="layout-content">
		<div class="layout-justify">
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
			</ued-row>
			<ued-row justify="center">
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content-light" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
			</ued-row>
			<ued-row justify="end">
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content-light" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
			</ued-row>
			<ued-row justify="space-between">
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content-light" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
			</ued-row>
			<ued-row justify="space-arround">
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content-light" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
			</ued-row>
			<ued-row justify="space-evenly">
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content-light" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
			</ued-row>
		</div>
		<div class="layout-align">
			<ued-row align="top">
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content-light" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
			</ued-row>
		</div>
		<div class="layout-align">
			<ued-row align="center">
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content-light" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
			</ued-row>
		</div>
		<div class="layout-align">
			<ued-row align="bottom">
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content-light" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
			</ued-row>
		</div>
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

.layout-align > .ued-row {
	margin-top: 10px;
	height: 80px;
	border: 1px solid #e4e7ed;
}
</style>
```

:::
