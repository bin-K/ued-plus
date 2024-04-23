<template>
	<h2>执行时机</h2>
	<div class="common-content dialog-content dialog-event">
		<ued-button @click="eventVisible = true">打开执行时机弹窗</ued-button>
		<ued-dialog
			v-model="eventVisible"
			title="执行时机弹窗"
			@open="open"
			@opened="opened"
			@close="close"
			@closed="closed"
		>
			<span>{{ content }}</span>
		</ued-dialog>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const eventVisible = ref(false)
const content = ref('')
const open = () => {
	content.value = 'open'
}
const opened = () => {
	content.value = 'opened'
}
const close = () => {
	console.log('close')
}
const closed = () => {
	console.log('closed')
}
</script>
