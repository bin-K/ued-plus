<template>
	<h2>基础用法</h2>
	<div class="common-content dialog-content dialog-basic">
		<ued-button @click="visible = true">打开弹窗</ued-button>
		<ued-dialog v-model="visible" title="Tips"></ued-dialog>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
