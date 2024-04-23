## 居中弹框

设置`center`属性可以设置 `header`,`footer`的内容居中<br>
设置`align-center`属性可以设置Dialog出现在屏幕中间

<div class="common-content dialog-content dialog-center">
  <ued-button @click="centerVisible = true">打开内容居中弹窗</ued-button>
  <ued-button @click="dialogCenterVisible = true">打开居中弹窗</ued-button>
  <ued-dialog v-model="centerVisible" title="内容居中弹窗" center>
    <span>内容居中弹窗</span>
    <template #footer>
      <div class="dialog-footer">
        <ued-button @click="centerVisible = false">Cancel</ued-button>
        <ued-button type="primary" @click="centerVisible = false">
          Confirm
        </ued-button>
      </div>
    </template>
  </ued-dialog>
  <ued-dialog v-model="dialogCenterVisible" title="居中弹框" align-center>
    <span>居中弹框</span>
  </ued-dialog>
</div>

::: details 显示代码

```vue
<template>
	<div class="dialog-content dialog-center">
		<ued-button @click="centerVisible = true">打开内容居中弹窗</ued-button>
		<ued-button @click="dialogCenterVisible = true">打开居中弹窗</ued-button>
		<ued-dialog v-model="centerVisible" title="内容居中弹窗" center>
			<span>内容居中弹窗</span>
			<template #footer>
				<div class="dialog-footer">
					<ued-button @click="centerVisible = false">Cancel</ued-button>
					<ued-button type="primary" @click="centerVisible = false">
						Confirm
					</ued-button>
				</div>
			</template>
		</ued-dialog>
		<ued-dialog v-model="dialogCenterVisible" title="居中弹框" align-center>
			<span>居中弹框</span>
		</ued-dialog>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const centerVisible = ref(false)
const dialogCenterVisible = ref(false)
</script>
```

:::
