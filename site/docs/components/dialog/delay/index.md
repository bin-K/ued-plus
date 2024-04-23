## 延时弹窗

设置`open-dalay`属性可以使弹窗延时打开<br>
设置`close-dalay`属性可以使弹窗延时关闭

<div class="common-content dialog-content dialog-delay">
  <ued-button @click="openDelayVisible = true">打开延迟弹窗</ued-button>
  <ued-dialog
    v-model="openDelayVisible"
    title="延时弹窗"
    :open-delay="1000"
    :close-delay="1000"
  >
    <span>延时弹窗</span>
  </ued-dialog>
</div>

::: details 显示代码

```vue
<template>
	<div class="dialog-content dialog-delay">
		<ued-button @click="openDelayVisible = true">打开延迟弹窗</ued-button>
		<ued-dialog
			v-model="openDelayVisible"
			title="延时弹窗"
			:open-delay="1000"
			:close-delay="1000"
		>
			<span>延时弹窗</span>
		</ued-dialog>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const openDelayVisible = ref(false)
</script>
```

:::
