## 基础用法

通过 height 属性设置滚动条高度，若不设置则根据父容器高度自适应。

<div class="common-content scrollbar-content scrollbar-basic">
  <ued-scrollbar height="400px">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </ued-scrollbar>
</div>

::: details 显示代码

```vue
<template>
	<div class="scrollbar-content scrollbar-basic">
		<ued-scrollbar height="400px">
			<p v-for="item in 20" :key="item" class="scrollbar-demo-item">
				{{ item }}
			</p>
		</ued-scrollbar>
	</div>
</template>

<style lang="scss" scoped>
.scrollbar-demo-item {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	margin: 10px;
	text-align: center;
	border-radius: 4px;
	background: var(--ued-color-primary-light-9);
	color: var(--ued-color-primary);
}
</style>
```

:::
