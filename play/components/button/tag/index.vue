<template>
	<h2>Tag</h2>
	<div class="button-content button-tag">
		<div class="button-tag-defalut">
			<ued-button>默认按钮</ued-button>
			<ued-button tag="div">div</ued-button>
			<ued-button
				type="primary"
				tag="a"
				href="https://github.com/bin-K/ued-plus"
				target="_blank"
				rel="noopener noreferrer"
			>
				a
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
