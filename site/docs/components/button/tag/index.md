## Tag

自定义元素标签。例如，按钮，div，路由链接，nuxt链接

<div class="button-tag">
  <div class="button-tag-defalut">
    <ued-button>默认按钮</ued-button>
    <ued-button tag="div">div</ued-button>
    <ued-button
			class="vp-raw"
      type="primary"
      tag="a"
      href="https://github.com/bin-K/ued-plus"
      target="_blank"
      rel="noopener noreferrer"
    >
      a
    </ued-button>
  </div>
</div>

<style>
.button-tag {
	display: flex;
	flex-direction: column;
  border: 1px solid #e4e7ed;
	padding: 30px;
	border-radius: 5px;
}

.button-tag > div {
	margin-bottom: 15px;
}

.button-tag > div:last-child {
	margin: 0;
}

</style>

::: details 显示代码

```vue
<template>
	<div>
		<ued-button>默认按钮</ued-button>
		<ued-button tag="div">div</ued-button>
		<ued-button
			type="primary"
			tag="a"
			href="https://github.com/bin-K/ued-plus"
			target="_blank"
			rel="noopener noreferrer"
		>
			a
		</ued-button>
	</div>
</template>
```

:::
