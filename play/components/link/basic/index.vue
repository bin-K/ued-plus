<template>
	<h2>基本用法</h2>
	<div class="link-content link-basic">
		<div class="link-basic-default">
			<ued-link
				v-for="(item, index) in linkType"
				:key="index"
				:type="item.type"
				href="https://github.com/bin-K/ued-plus"
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
