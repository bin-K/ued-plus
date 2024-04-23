## 关闭遮罩

设置 `modal` 可以控制弹窗遮罩是否展示

<div class="common-content dialog-content dialog-modal">
  <ued-button @click="modalVisible = true">打开无遮罩弹窗</ued-button>
  <ued-dialog v-model="modalVisible" title="无遮罩弹窗" :modal="false">
    <span>无遮罩弹窗</span>
  </ued-dialog>
</div>

::: details 显示代码

```vue
<template>
	<div class="dialog-content dialog-modal">
		<ued-button @click="modalVisible = true">打开无遮罩弹窗</ued-button>
		<ued-dialog v-model="modalVisible" title="无遮罩弹窗" :modal="false">
			<span>无遮罩弹窗</span>
		</ued-dialog>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const modalVisible = ref(false)
</script>
```

:::
