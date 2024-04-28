<template>
	<h2>嵌套弹窗</h2>
	<div class="common-content dialog-content dialog-nested">
		<ued-button @click="outerVisible = true">打开嵌套弹窗</ued-button>
		<ued-dialog v-model="outerVisible" title="嵌套外弹窗" width="800">
			<span>嵌套外弹窗</span>
			<ued-dialog
				v-model="innerVisible"
				width="500"
				title="嵌套内弹窗"
				append-to-body
				:lock-scroll="false"
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
