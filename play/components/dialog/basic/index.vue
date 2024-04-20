<template>
	<h2>基础用法</h2>
	<div class="common-content dialog-content dialog-basic">
		<ued-button @click="visible = true">打开弹窗</ued-button>
		<ued-button @click="openDelayVisible = true">打开延迟弹窗</ued-button>
		<ued-button @click="centerVisible = true">打开内容居中弹窗</ued-button>
		<ued-button @click="dialogCenterVisible = true">打开居中弹窗</ued-button>
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
		<ued-dialog
			v-model="openDelayVisible"
			title="延时弹窗"
			:open-delay="1000"
			:close-delay="1000"
		>
			<span>延时弹窗</span>
		</ued-dialog>
		<ued-dialog v-model="centerVisible" title="内容居中弹窗" center>
			<span>内容居中弹窗</span>
			<template #footer>
				<div class="dialog-footer">
					<ued-button @click="centerVisible = false">Cancel</ued-button>
					<ued-button type="primary" @click="centerVisible = false">
						Confirm
					</ued-button>
				</div>
			</template>
		</ued-dialog>
		<ued-dialog v-model="dialogCenterVisible" title="居中弹框" align-center>
			<span>居中弹框</span>
		</ued-dialog>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
const openDelayVisible = ref(false)
const centerVisible = ref(false)
const dialogCenterVisible = ref(false)

type DoneFn = (cancel?: boolean) => void
const beforeClose = (done: DoneFn) => {
	console.log('关闭前执行')
	done()
}
</script>
