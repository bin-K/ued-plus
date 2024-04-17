## 按钮尺寸

使用 size 属性额外配置尺寸，可使用 large和small两种值。

<div class="common-content button-content button-size">
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

::: details 显示代码

```vue
<template>
	<div class="button-content button-size">
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
</template>
```

:::
