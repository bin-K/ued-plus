<template>
	<h2>文字按钮</h2>
	<div class="button-content button-text">
		<div class="button-text-defalut">
			<ued-button
				v-for="item in buttonType"
				:key="item.type"
				:type="item.type"
				text
			>
				{{ item.text }}
			</ued-button>
		</div>
		<div class="button-text-bg">
			<ued-button
				v-for="item in buttonType"
				:key="item.type"
				:type="item.type"
				text
				bg
			>
				{{ item.text }}
			</ued-button>
		</div>
		<div class="button-text-disabled">
			<ued-button
				v-for="item in buttonType"
				:key="item.type"
				:type="item.type"
				text
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
