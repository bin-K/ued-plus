<template>
	<h2>多选框组</h2>
	<div class="common-content checkbox-content">
		<div class="checkbox-basic-group">
			<ued-checkbox-group v-model="checkList">
				<ued-checkbox value="Value A" label="Option 1" />
				<ued-checkbox value="Value B" label="Option 2" />
				<ued-checkbox value="Value C" label="Option 3" disabled />
				<ued-checkbox value="Value D" label="Option 4" disabled />
			</ued-checkbox-group>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checkList = ref(['Value A', 'Value D'])
</script>
