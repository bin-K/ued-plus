## 混合使用

混合使用 Text 组件

<div class="text-content text-mixin">
  <div class="text-mixin-button">
    <ued-text>
      <ued-icon>
        <Plus />
      </ued-icon>
      Plus
    </ued-text>
  </div>
  <div class="text-mixin-more">
    <ued-text>
      This is text mixed icon
      <ued-icon>
        <Plus />
      </ued-icon>
      and component
      <ued-button>Button</ued-button>
    </ued-text>
  </div>
</div>

::: details 显示代码

```vue
<template>
	<div class="text-mixin-button">
		<ued-text>
			<ued-icon>
				<Plus />
			</ued-icon>
			Plus
		</ued-text>
	</div>
	<div class="text-mixin-more">
		<ued-text>
			This is text mixed icon
			<ued-icon>
				<Plus />
			</ued-icon>
			and component
			<ued-button>Button</ued-button>
		</ued-text>
	</div>
</template>
```

:::
