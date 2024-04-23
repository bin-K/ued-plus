<template>
	<h2>关闭遮罩</h2>
	<div class="common-content dialog-content dialog-modal">
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
