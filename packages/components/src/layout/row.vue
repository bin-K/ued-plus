<template>
	<div class="ued-row" :style="rowStyle" :class="rowClass">
		<slot />
	</div>
</template>

<script lang="ts" setup>
import './styles/row.scss'
import { computed, provide } from 'vue'

defineOptions({ name: 'UedRow' })

const rowProps = defineProps({
	gutter: {
		type: Number,
		default: 0,
	},
	justify: {
		type: String,
		default: undefined,
	},
})

provide(
	'row-gutter',
	typeof rowProps.gutter === 'number' && rowProps.gutter > 0
		? Math.floor(rowProps.gutter)
		: undefined
)

const rowClass = computed(() => {
	return {
		[`is-justify-${rowProps.justify}`]: rowProps.justify,
	}
})

const rowStyle = computed(() => {
	const marginNum =
		typeof rowProps.gutter === 'number' && rowProps.gutter > 0
			? `-${Math.floor(rowProps.gutter) / 2}px`
			: undefined
	return {
		'margin-left': marginNum,
		'margin-right': marginNum,
	}
})
</script>
