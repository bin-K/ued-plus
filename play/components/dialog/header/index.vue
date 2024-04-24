<template>
	<h2>自定义头部弹窗</h2>
	<div class="common-content dialog-content dialog-header">
		<ued-button @click="headerVisible = true">打开自定义头部弹窗</ued-button>
		<ued-button @click="customHeaderVisible = true">
			打开全自定义头部弹窗
		</ued-button>
		<ued-dialog v-model="headerVisible">
			<template #header>
				<h4>自定义头部</h4>
			</template>
		</ued-dialog>
		<ued-dialog v-model="customHeaderVisible" :show-close="false">
			<template #header="{ close, titleClass }">
				<div class="my-header">
					<h4 :class="titleClass">全自定义头部</h4>
					<ued-button type="danger" @click="close">
						<ued-icon class="ued-icon--left"><CirclePlus /></ued-icon>
						Close
					</ued-button>
				</div>
			</template>
			<span>自定义头部弹窗</span>
		</ued-dialog>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { CirclePlus } from '@ued-plus/components'
const headerVisible = ref(false)
const customHeaderVisible = ref(false)
</script>

<style lang="scss" scoped>
.my-header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 16px;
}
</style>
