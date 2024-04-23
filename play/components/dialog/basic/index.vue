<template>
	<h2>基础用法</h2>
	<div class="common-content dialog-content dialog-basic">
		<ued-button @click="visible = true">打开弹窗</ued-button>
		<ued-dialog
			v-model="visible"
			title="普通弹窗"
			width="500"
			top="5vh"
			:before-close="beforeClose"
		>
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
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)

type DoneFn = (cancel?: boolean) => void
const beforeClose = (done: DoneFn) => {
	console.log('关闭前执行')
	done()
}
</script>
