<template>
	<h2>最大高度</h2>
	<div class="common-content scrollbar-content scrollbar-max-height">
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
.scrollbar-content {
	display: block;
}
</style>
