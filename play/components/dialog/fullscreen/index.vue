<template>
	<h2>全屏弹窗</h2>
	<div class="common-content dialog-content dialog-fullscreen">
		<ued-button @click="fullscreenVisible = true">打开全屏弹窗</ued-button>
		<ued-dialog v-model="fullscreenVisible" title="全屏弹窗" fullscreen>
			<span>全屏弹窗</span>
			<template #footer>
				<div class="dialog-footer">
					<ued-button @click="fullscreenVisible = false">Cancel</ued-button>
					<ued-button type="primary" @click="fullscreenVisible = false">
						Confirm
					</ued-button>
				</div>
			</template>
		</ued-dialog>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const fullscreenVisible = ref(false)
</script>
