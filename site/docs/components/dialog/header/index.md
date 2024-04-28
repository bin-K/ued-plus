## 自定义头部

使用 `header` slot 可以自定义头部的title，从 `header` slot 属性中取得 `titleClass`属性可以定义默认title样式

使用 `show-close`关闭自带closeIcon，从 `header` slot 属性中取得 `close`方法，原closeIcon一样关闭弹窗的方法

<div class="common-content dialog-content dialog-header">
  <ued-button @click="headerVisible = true">打开自定义头部弹窗</ued-button>
  <ued-button @click="customHeaderVisible = true">
    打开全自定义头部弹窗
  </ued-button>
  <ued-dialog v-model="headerVisible">
    <template #header>
      <h4>自定义头部</h4>
    </template>
  </ued-dialog>
  <ued-dialog v-model="customHeaderVisible" :show-close="false">
    <template #header="{ close, titleClass }">
      <div class="my-header">
        <h4 :class="titleClass">全自定义头部</h4>
        <ued-button type="danger" @click="close">
          <ued-icon class="ued-icon--left"><CirclePlus /></ued-icon>
          Close
        </ued-button>
      </div>
    </template>
    <span>自定义头部弹窗</span>
  </ued-dialog>
</div>

<style lang="scss" scoped>
.my-header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 16px;
}
</style>

::: details 显示代码

```vue
<template>
	<div class="dialog-content dialog-header">
		<ued-button @click="headerVisible = true">打开自定义头部弹窗</ued-button>
		<ued-button @click="customHeaderVisible = true">
			打开全自定义头部弹窗
		</ued-button>
		<ued-dialog v-model="headerVisible">
			<template #header>
				<h4>自定义头部</h4>
			</template>
		</ued-dialog>
		<ued-dialog v-model="customHeaderVisible" :show-close="false">
			<template #header="{ close, titleClass }">
				<div class="my-header">
					<h4 :class="titleClass">全自定义头部</h4>
					<ued-button type="danger" @click="close">
						<ued-icon class="ued-icon--left"><CirclePlus /></ued-icon>
						Close
					</ued-button>
				</div>
			</template>
			<span>自定义头部弹窗</span>
		</ued-dialog>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { CirclePlus } from '@ued-plus/components'
const headerVisible = ref(false)
const customHeaderVisible = ref(false)
</script>

<style lang="scss" scoped>
.my-header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 16px;
}
</style>
```

:::
