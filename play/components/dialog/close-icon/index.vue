<template>
	<h2>自定义关闭Icon</h2>
	<div class="common-content dialog-content dialog-close-icon">
		<ued-button @click="closeIconVisible1 = true">
			打开自定义关闭Icon弹窗
		</ued-button>
		<ued-button @click="closeIconVisible2 = true">
			打开自定义关闭Icon弹窗
		</ued-button>
		<ued-dialog
			v-model="closeIconVisible1"
			title="自定义关闭Icon弹窗"
			close-icon="Check"
		>
			<span>自定义关闭Icon弹窗</span>
		</ued-dialog>
		<ued-dialog
			v-model="closeIconVisible2"
			title="自定义关闭Icon弹窗"
			:close-icon="Star"
		>
			<span>自定义关闭Icon弹窗</span>
		</ued-dialog>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Star } from '@ued-plus/components'
const closeIconVisible1 = ref(false)
const closeIconVisible2 = ref(false)
</script>
