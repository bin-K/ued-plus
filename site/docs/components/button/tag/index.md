## Tag

自定义元素标签。例如，按钮，div，路由链接，nuxt链接

<div class="button-content button-tag">
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
