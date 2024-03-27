## 按钮尺寸

使用 size 属性额外配置尺寸，可使用 large和small两种值。

<div class="button-size">
  <div class="button-size-show">
    <ued-button size="large">默认按钮</ued-button>
		<ued-button>默认按钮</ued-button>
		<ued-button size="small">默认按钮</ued-button>
  </div>
  <div class="button-size-show">
    <ued-button size="large" round>默认按钮</ued-button>
		<ued-button round>默认按钮</ued-button>
		<ued-button size="small" round>默认按钮</ued-button>
  </div>
</div>

<style>
.button-size {
	display: flex;
	flex-direction: column;
  border: 1px solid #e4e7ed;
	padding: 30px;
	border-radius: 5px;
}

.button-size > div {
	margin-bottom: 15px;
}

.button-size > div:last-child {
	margin: 0;
}

</style>

::: details 显示代码

```vue
<template>
	<div>
		<ued-button size="large">默认按钮</ued-button>
		<ued-button>默认按钮</ued-button>
		<ued-button size="small">默认按钮</ued-button>
		<ued-button size="large" round>默认按钮</ued-button>
		<ued-button round>默认按钮</ued-button>
		<ued-button size="small" round>默认按钮</ued-button>
	</div>
</template>
```

:::
