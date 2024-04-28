<template>
	<h2>基础用法</h2>
	<div class="common-content radio-content">
		<div class="radio-basic-single">
			<ued-radio v-model="radioBasic" :value="1" label="radio1" />
			<ued-radio v-model="radioBasic" :value="2">radio2</ued-radio>
		</div>
		<div class="radio-basic-group">
			<ued-radio-group v-model="radioGroupBasic">
				<ued-radio :value="1" label="radio1" />
				<ued-radio :value="2" label="radio2" />
			</ued-radio-group>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const radioBasic = ref(1)
const radioGroupBasic = ref(1)
</script>
