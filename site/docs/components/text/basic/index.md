## 基本用法

由 type 属性来选择 Text 的类型

<div class="common-content text-content text-basic">
  <div class="text-basic-default">
    <ued-text
      v-for="(item, index) in textType"
      :key="index"
      :type="item.type"
    >
      {{ item.text }}
    </ued-text>
  </div>
</div>

::: details 显示代码

```vue
<template>
	<div class="text-content text-basic">
		<div class="text-basic-default">
			<ued-text
				v-for="(item, index) in textType"
				:key="index"
				:type="item.type"
			>
				{{ item.text }}
			</ued-text>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const textType = ref([
	{ type: '', text: '默认文本' },
	{ type: 'primary', text: '主要文本' },
	{ type: 'success', text: '成功文本' },
	{ type: 'warning', text: '警告文本' },
	{ type: 'danger', text: '危险文本' },
	{ type: 'info', text: '信息文本' },
])
</script>
```

:::
