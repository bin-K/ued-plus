## 基础用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

需要设置 model-value / v-model 属性，它接收 Boolean，当为 true 时显示 Dialog。 Dialog 分为两个部分：body 和 footer，footer 需要具名为 footer 的 slot。 title 属性用于定义标题，它是可选的，默认值为空。 最后，本例还展示了 before-close 的用法。

<div class="common-content dialog-content dialog-basic">
  <ued-button @click="visible = true">打开弹窗</ued-button>
  <ued-dialog
    v-model="visible"
    title="普通弹窗"
    width="500"
    top="5vh"
    :before-close="beforeClose"
  >
    <span>普通弹窗</span>
    <template #footer>
      <div class="dialog-footer">
        <ued-button @click="visible = false">Cancel</ued-button>
        <ued-button type="primary" @click="visible = false">
          Confirm
        </ued-button>
      </div>
    </template>
  </ued-dialog>
</div>

::: details 显示代码

```vue
<template>
	<div class="dialog-content dialog-basic">
		<ued-button @click="visible = true">打开弹窗</ued-button>
		<ued-dialog
			v-model="visible"
			title="普通弹窗"
			width="500"
			top="5vh"
			:before-close="beforeClose"
		>
			<span>普通弹窗</span>
			<template #footer>
				<div class="dialog-footer">
					<ued-button @click="visible = false">Cancel</ued-button>
					<ued-button type="primary" @click="visible = false">
						Confirm
					</ued-button>
				</div>
			</template>
		</ued-dialog>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)

type DoneFn = (cancel?: boolean) => void
const beforeClose = (done: DoneFn) => {
	console.log('关闭前执行')
	done()
}
</script>
```

:::
