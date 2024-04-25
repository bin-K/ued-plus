<template>
	<h2>基础用法</h2>
	<div class="common-content radio-content radio-basic">
		<ued-radio v-model="radio1" :value="1" label="radio1" />
		<ued-radio v-model="radio2" :value="2">radio2</ued-radio>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const radio1 = ref(1)
const radio2 = ref(1)
</script>
