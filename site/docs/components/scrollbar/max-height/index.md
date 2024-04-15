## 最大高度

当元素高度超过最大高度，才会显示滚动条。

<div class="scrollbar-content scrollbar-max-height">
  <ued-button @click="add">添加</ued-button>
  <ued-button @click="onDelete">删除</ued-button>
  <ued-scrollbar max-height="400px">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </ued-scrollbar>
</div>

<style scoped>
.scrollbar-content.scrollbar-max-height {
	display: block;
}
</style>

::: details 显示代码

```vue
<template>
	<div class="scrollbar-content scrollbar-max-height">
		<ued-button @click="add">添加</ued-button>
		<ued-button @click="onDelete">删除</ued-button>
		<ued-scrollbar max-height="400px">
			<p v-for="item in count" :key="item" class="scrollbar-demo-item">
				{{ item }}
			</p>
		</ued-scrollbar>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(3)

const add = () => {
	count.value++
}
const onDelete = () => {
	if (count.value > 0) {
		count.value--
	}
}
</script>

<style lang="scss" scoped>
.scrollbar-demo-item {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	margin: 10px;
	text-align: center;
	border-radius: 4px;
	background: var(--ued-color-primary-light-9);
	color: var(--ued-color-primary);
}
</style>
```

:::
