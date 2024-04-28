<template>
	<h2>禁用状态</h2>
	<div class="common-content radio-content">
		<div class="radio-disabled-group">
			<ued-radio-group v-model="disabled" disabled>
				<ued-radio :value="1" label="radio1" />
				<ued-radio :value="2" label="radio2" />
			</ued-radio-group>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const disabled = ref(1)
</script>
