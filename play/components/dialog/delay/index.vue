<template>
	<h2>关闭遮罩</h2>
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
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const openDelayVisible = ref(false)
</script>
