<template>
	<h2>基本用法</h2>
	<div class="common-content text-content text-basic">
		<div class="text-basic-default">
			<ued-text
				v-for="(item, index) in textType"
				:key="index"
				:type="item.type"
			>
				{{ item.text }}
			</ued-text>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
defineProps({
	textType: {
		type: Array as PropType<any>,
		default: () => [],
	},
})
</script>
