## Icon用法

使用 icon 可以配置按钮icon。
可以包裹 `ued-icon` 组件配置按钮icon

> [!TIP]
> 不建议直接使用svg组件,这需要自己设置相关属性

<div class="button-content button-icon">
  <div class="button-icon-defalut">
    <ued-button type="primary" :icon="Plus">
      主要按钮
    </ued-button>
  </div>
  <div class="button-icon-defalut">
   <ued-button type="primary">
      <ued-icon class="ued-icon--left">
        <Plus />
      </ued-icon>
      主要按钮
    </ued-button>
  </div>
</div>

::: details 显示代码

```vue
<template>
	<div>
		<ued-button
			v-for="item in buttonType"
			:key="item.type"
			:type="item.type"
			:icon="Plus"
		>
			{{ item.text }}
		</ued-button>
	</div>
	<div>
		<ued-button v-for="item in buttonType" :key="item.type" :type="item.type">
			<ued-icon>
				<Plus />
			</ued-icon>
			{{ item.text }}
		</ued-button>
	</div>
</template>

<script lang="ts" setup>
import { Plus } from '@ued-plus/components'
import { ref } from 'vue'
const buttonType = ref([
	{ type: '', text: '默认按钮' },
	{ type: 'primary', text: '主要按钮' },
	{ type: 'success', text: '成功按钮' },
	{ type: 'warning', text: '警告按钮' },
	{ type: 'danger', text: '危险按钮' },
	{ type: 'info', text: '信息按钮' },
])
</script>
```

:::
