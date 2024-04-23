<template>
	<h2>可拖拽弹窗</h2>
	<div class="common-content dialog-content dialog-draggable">
		<ued-button @click="openDraggableVisible = true">打开可拖拽弹窗</ued-button>
		<ued-button @click="openDraggableOverflowVisible = true">
			打开可拖拽弹窗(overflow)
		</ued-button>
		<ued-dialog v-model="openDraggableVisible" title="可拖拽弹窗" draggable>
			<span>可拖拽弹窗</span>
		</ued-dialog>
		<ued-dialog
			v-model="openDraggableOverflowVisible"
			title="打开可拖拽弹窗(overflow)"
			draggable
			overflow
		>
			<span>打开可拖拽弹窗(overflow)</span>
		</ued-dialog>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const openDraggableVisible = ref(false)
const openDraggableOverflowVisible = ref(false)
</script>
