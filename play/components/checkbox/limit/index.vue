<template>
	<h2>可选项目数量的限制</h2>
	<div class="common-content checkbox-content">
		<div class="checkbox-limit-group">
			<ued-checkbox-group v-model="checkList" :max="2" :min="1">
				<ued-checkbox value="Value A" label="Option 1" />
				<ued-checkbox value="Value B" label="Option 2" />
				<ued-checkbox value="Value C" label="Option 3" />
				<ued-checkbox value="Value D" label="Option 4" />
			</ued-checkbox-group>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checkList = ref(['Value A', 'Value B'])
</script>
