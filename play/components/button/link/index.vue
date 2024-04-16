<template>
	<h2>链接按钮</h2>
	<div class="common-content button-content button-link">
		<div class="button-link-defalut">
			<ued-button
				v-for="item in buttonType"
				:key="item.type"
				:type="item.type"
				link
			>
				{{ item.text }}
			</ued-button>
		</div>
		<div class="button-link-disabled">
			<ued-button
				v-for="item in buttonType"
				:key="item.type"
				:type="item.type"
				link
				disabled
			>
				{{ item.text }}
			</ued-button>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'
defineProps({
	buttonType: {
		type: Array as PropType<any>,
		default: () => [],
	},
})
</script>
