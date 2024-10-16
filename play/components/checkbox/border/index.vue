<template>
	<h2>带边框</h2>
	<div class="common-content checkbox-content">
		<div class="checkbox-border-group">
			<ued-checkbox-group v-model="checkList" size="large">
				<ued-checkbox border value="Value A" label="Option 1" />
				<ued-checkbox value="Value B" label="Option 2" />
			</ued-checkbox-group>
		</div>
		<div class="checkbox-border-group">
			<ued-checkbox-group v-model="checkList1" border>
				<ued-checkbox value="Value A" label="Option 1" />
				<ued-checkbox value="Value B" label="Option 2" />
			</ued-checkbox-group>
		</div>
		<div class="checkbox-border-group">
			<ued-checkbox-group v-model="checkList2" border disabled size="small">
				<ued-checkbox border value="Value A" label="Option 1" />
				<ued-checkbox value="Value B" label="Option 2" />
			</ued-checkbox-group>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checkList = ref(['Value A'])
const checkList1 = ref(['Value A'])
const checkList2 = ref(['Value A'])
</script>
