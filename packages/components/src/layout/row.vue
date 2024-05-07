<template>
	<component :is="rowTag" class="ued-row" :style="rowStyle" :class="rowClass">
		<slot />
	</component>
</template>

<script lang="ts" setup>
import './styles/row.scss'
import { computed, provide, reactive, toRefs } from 'vue'
import { isPositiveNumber } from '@ued-plus/utils'
import { rowpKey } from './contant'
import { RowProps } from './row'

defineOptions({ name: 'UedRow' })

const rowProps = defineProps(RowProps)

provide(
	rowpKey,
	reactive({
		...toRefs(rowProps),
	})
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
