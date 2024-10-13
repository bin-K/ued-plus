<template>
	<h2>基础用法</h2>
	<div class="common-content checkbox-content">
		<div class="checkbox-basic-single">
			<ued-checkbox v-model="checked" label="Option 1" />
			<ued-checkbox v-model="checked1" label="Option 2" />
		</div>
		<!-- <div class="checkbox-basic-group">
			<ued-checkbox-group v-model="checkList">
				<ued-checkbox value="Value A" label="Option 1" />
				<ued-checkbox value="Value B" label="Option 2" />
			</ued-checkbox-group>
		</div> -->
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref(true)
const checked1 = ref(false)
// const checkList = ref(['Value A'])
</script>
