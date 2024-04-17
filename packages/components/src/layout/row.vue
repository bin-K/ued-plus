<template>
	<component :is="rowTag" class="ued-row" :style="rowStyle" :class="rowClass">
		<slot />
	</component>
</template>

<script lang="ts" setup>
import './styles/row.scss'
import { computed, provide } from 'vue'
import { isPositiveNumber } from '@ued-plus/utils'

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
	align: {
		type: String,
		default: undefined,
	},
	tag: {
		type: String,
		default: undefined,
	},
})

provide(
	'row-gutter',
	isPositiveNumber(rowProps.gutter) ? Math.floor(rowProps.gutter) : undefined
)

const rowClass = computed(() => {
	return {
		[`is-justify-${rowProps.justify}`]: rowProps.justify,
		[`is-align-${rowProps.align}`]: rowProps.align,
	}
})

const rowStyle = computed(() => {
	const marginNum = isPositiveNumber(rowProps.gutter)
		? `-${Math.floor(rowProps.gutter) / 2}px`
		: undefined
	return {
		'margin-left': marginNum,
		'margin-right': marginNum,
	}
})

const rowTag = computed(() => {
	return rowProps.tag ?? 'div'
})
</script>
