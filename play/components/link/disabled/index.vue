<template>
	<h2>禁用状态</h2>
	<div class="common-content link-content link-disabled">
		<div class="link-disabled-default">
			<ued-link
				v-for="(item, index) in linkType"
				:key="index"
				:type="item.type"
				disabled
			>
				{{ item.text }}
			</ued-link>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
defineProps({
	linkType: {
		type: Array as PropType<any>,
		default: () => [],
	},
})
</script>
