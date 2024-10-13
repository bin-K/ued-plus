<template>
	<h2>禁用状态</h2>
	<div class="common-content checkbox-content">
		<div class="checkbox-diabled-single">
			<ued-checkbox v-model="checked" disabled label="Disabled And Selected" />
			<ued-checkbox v-model="checked1" label="Not Disabled" />
			<ued-checkbox v-model="checked2" disabled label="Disabled" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref(true)
const checked1 = ref(false)
const checked2 = ref(false)
</script>
