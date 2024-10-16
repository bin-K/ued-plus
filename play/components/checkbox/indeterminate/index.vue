<template>
	<h2>中间状态</h2>
	<div class="common-content checkbox-content">
		<div class="checkbox-indeterminate-group">
			<ued-checkbox
				v-model="checkAll"
				:indeterminate="isIndeterminate"
				@change="handleCheckAllChange"
			>
				Check all
			</ued-checkbox>
			<ued-checkbox-group v-model="checkList" @change="handleCheckedListChange">
				<ued-checkbox v-for="l in list" :key="l" :value="l" :label="l" />
			</ued-checkbox-group>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checkAll = ref(false)
const isIndeterminate = ref(true)
const list = ['Value A', 'Value B', 'Value C', 'Value D']
const checkList = ref(['Value A', 'Value B'])

const handleCheckAllChange = (val: boolean) => {
	checkList.value = val ? list : []
	isIndeterminate.value = false
}

const handleCheckedListChange = (value: string[]) => {
	const checkedCount = value.length
	checkAll.value = checkedCount === list.length
	isIndeterminate.value = checkedCount > 0 && checkedCount < list.length
}
</script>
