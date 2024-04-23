## 嵌套弹窗

如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用`append-to-body` 属性。

通常我们不建议使用嵌套对话框。 如果你需要在页面上呈现多个对话框，你可以简单地打平它们，以便它们彼此之间是平级关系。 如果必须要在一个对话框内展示另一个对话框，可以将内部嵌套的对话框属性 `append-to-body` 设置为 `true`，嵌套的对话框将附加到 body 而不是其父节点，这样两个对话框都可以被正确地渲染。

为保证 Dialog 出现时将 body 滚动锁定功能正常，嵌套的dialog需要设置`lock-scroll`为`false`

<div class="common-content dialog-content dialog-modal">
  <ued-button @click="outerVisible = true">打开嵌套弹窗</ued-button>
  <ued-dialog v-model="outerVisible" title="嵌套外弹窗" width="800">
    <span>嵌套外弹窗</span>
    <ued-dialog
      v-model="innerVisible"
      width="500"
      title="嵌套内弹窗"
			:lock-scroll="false"
      append-to-body
    >
      <span>嵌套内弹窗</span>
    </ued-dialog>
    <template #footer>
      <div class="dialog-footer">
        <ued-button @click="outerVisible = false">取消</ued-button>
        <ued-button type="primary" @click="innerVisible = true">
          打开嵌套内弹窗
        </ued-button>
      </div>
    </template>
  </ued-dialog>
</div>

::: details 显示代码

```vue
<template>
	<div class="dialog-content dialog-modal">
		<ued-button @click="outerVisible = true">打开嵌套弹窗</ued-button>
		<ued-dialog v-model="outerVisible" title="嵌套外弹窗" width="800">
			<span>嵌套外弹窗</span>
			<ued-dialog
				v-model="innerVisible"
				width="500"
				title="嵌套内弹窗"
				:lock-scroll="false"
				append-to-body
			>
				<span>嵌套内弹窗</span>
			</ued-dialog>
			<template #footer>
				<div class="dialog-footer">
					<ued-button @click="outerVisible = false">取消</ued-button>
					<ued-button type="primary" @click="innerVisible = true">
						打开嵌套内弹窗
					</ued-button>
				</div>
			</template>
		</ued-dialog>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const outerVisible = ref(false)
const innerVisible = ref(false)
</script>
```

:::
