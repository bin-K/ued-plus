## 全屏弹窗

设置`fullscreen`属性可以实现全屏弹窗,此时`top`、`draggable`失效, `lock-scroll`设置为`false`,Dialog 出现时将 body 滚动将不会被锁定

<div class="common-content dialog-content dialog-fullscreen">
  <ued-button @click="fullscreenVisible = true">打开全屏弹窗</ued-button>
  <ued-dialog v-model="fullscreenVisible" title="全屏弹窗" fullscreen>
    <span>全屏弹窗</span>
    <template #footer>
      <div class="dialog-footer">
        <ued-button @click="fullscreenVisible = false">Cancel</ued-button>
        <ued-button type="primary" @click="fullscreenVisible = false">
          Confirm
        </ued-button>
      </div>
    </template>
  </ued-dialog>
</div>

::: details 显示代码

```vue
<template>
	<div class="dialog-content dialog-fullscreen">
		<ued-button @click="fullscreenVisible = true">打开全屏弹窗</ued-button>
		<ued-dialog v-model="fullscreenVisible" title="全屏弹窗" fullscreen>
			<span>全屏弹窗</span>
			<template #footer>
				<div class="dialog-footer">
					<ued-button @click="fullscreenVisible = false">Cancel</ued-button>
					<ued-button type="primary" @click="fullscreenVisible = false">
						Confirm
					</ued-button>
				</div>
			</template>
		</ued-dialog>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const fullscreenVisible = ref(false)
</script>
```

:::
