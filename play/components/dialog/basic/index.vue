<template>
	<h2>基础用法</h2>
	<div class="common-content dialog-content dialog-basic">
		<ued-button @click="visible = true">打开弹窗</ued-button>
		<ued-button @click="fullscreenVisible = true">打开全屏弹窗</ued-button>
		<ued-button @click="noModalVisible = true">打开无遮罩弹窗</ued-button>
		<ued-button @click="openDelayVisible = true">打开延迟弹窗</ued-button>
		<ued-dialog v-model="visible" title="普通弹窗" width="500" top="5vh">
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
		<ued-dialog v-model="fullscreenVisible" title="全屏弹窗" fullscreen>
			<span>全屏弹窗</span>
		</ued-dialog>
		<ued-dialog v-model="noModalVisible" title="无遮罩弹窗" :modal="false">
			<span>无遮罩弹窗</span>
		</ued-dialog>
		<ued-dialog
			v-model="openDelayVisible"
			title="延时弹窗"
			:open-delay="1000"
			:close-delay="1000"
		>
			<span>无遮罩弹窗</span>
		</ued-dialog>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
const fullscreenVisible = ref(false)
const noModalVisible = ref(false)
const openDelayVisible = ref(false)
</script>
