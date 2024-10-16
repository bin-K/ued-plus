## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

<div class="common-content checkbox-content">
  <div class="checkbox-basic-single">
    <ued-checkbox v-model="checkedBasic" label="Option 1" />
    <ued-checkbox v-model="checkedBasic1" label="Option 2" />
  </div>
</div>

::: details 显示代码

```vue
<template>
	<div class="common-content checkbox-content">
		<div class="checkbox-basic-single">
			<ued-checkbox v-model="checked" label="Option 1" />
			<ued-checkbox v-model="checked1" label="Option 2" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref(true)
const checked1 = ref(false)
</script>
```

:::
