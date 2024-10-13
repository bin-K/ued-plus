<template>
	<h2>尺寸大小</h2>
	<div class="common-content checkbox-content">
		<div class="checkbox-size">
			<div>
				<ued-checkbox v-model="checked" label="Option 1" size="large" />
				<ued-checkbox v-model="checked1" label="Option 2" size="large" />
			</div>
			<div>
				<ued-checkbox v-model="checked" label="Option 1" />
				<ued-checkbox v-model="checked1" label="Option 2" />
			</div>
			<div>
				<ued-checkbox v-model="checked" label="Option 1" size="small" />
				<ued-checkbox v-model="checked1" label="Option 2" size="small" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref(true)
const checked1 = ref(false)
</script>
