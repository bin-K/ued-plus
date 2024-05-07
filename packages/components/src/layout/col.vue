<template>
	<component :is="colTag" class="ued-col" :class="colClass" :style="colStyle">
		<slot />
	</component>
</template>

<script lang="ts" setup>
import './styles/col.scss'
import { computed, inject, PropType } from 'vue'
import { isPositiveNumber } from '@ued-plus/utils'
import { rowpKey } from './contant'

defineOptions({ name: 'UedCol' })

type ColProps = {
	span?: number
	offset?: number
	pull?: number
	push?: number
}

const colProps = defineProps({
	span: {
		type: Number,
		default: 24,
	},
	offset: {
		type: Number,
		default: 0,
	},
	pull: {
		type: Number,
		default: 0,
	},
	push: {
		type: Number,
		default: 0,
	},
	xs: {
		type: [Number, Object] as PropType<number | ColProps>,
		default: undefined,
	},
	sm: {
		type: [Number, Object] as PropType<number | ColProps>,
		default: undefined,
	},
	md: {
		type: [Number, Object] as PropType<number | ColProps>,
		default: undefined,
	},
	lg: {
		type: [Number, Object] as PropType<number | ColProps>,
		default: undefined,
	},
	xl: {
		type: [Number, Object] as PropType<number | ColProps>,
		default: undefined,
	},
	tag: {
		type: String,
		default: undefined,
	},
})

const rowInject = inject(rowpKey, undefined)

const gutter = computed(() => {
	if (rowInject?.gutter) {
		return isPositiveNumber(rowInject.gutter)
			? Math.floor(rowInject.gutter)
			: undefined
	}
	return undefined
})

const handleBootstrap = (size: number | ColProps, sizeType: string) => {
	if (typeof size === 'object') {
		return {
			[`ued-col-${sizeType}-${size.span}`]: isPositiveNumber(size.span),
			[`ued-col-offset-${sizeType}-${size.offset}`]: isPositiveNumber(
				size.offset
			),
			[`ued-col-offset-${sizeType}-${size.pull}`]: isPositiveNumber(size.pull),
			[`ued-col-offset-${sizeType}-${size.push}`]: isPositiveNumber(size.push),
		}
	}
	return {
		[`ued-col-${sizeType}-${size}`]: isPositiveNumber(size),
	}
}

const colClass = computed(() => {
	const xsSize = colProps.xs && handleBootstrap(colProps.xs, 'xs')
	const smSize = colProps.sm && handleBootstrap(colProps.sm, 'sm')
	const mdSize = colProps.md && handleBootstrap(colProps.md, 'md')
	const lgSize = colProps.lg && handleBootstrap(colProps.lg, 'lg')
	const xlSize = colProps.xl && handleBootstrap(colProps.xl, 'xl')

	return {
		[`ued-col-${colProps.span}`]: isPositiveNumber(colProps.span),
		[`ued-col-offset-${colProps.offset}`]: isPositiveNumber(colProps.offset),
		[`ued-col-pull-${colProps.pull}`]: isPositiveNumber(colProps.pull),
		[`ued-col-push-${colProps.push}`]: isPositiveNumber(colProps.push),
		'is-guttered': gutter.value,
		...xsSize,
		...smSize,
		...mdSize,
		...lgSize,
		...xlSize,
	}
})

const colStyle = computed(() => {
	const paddingNum = gutter.value ? gutter.value / 2 : undefined
	return {
		'padding-left': `${paddingNum}px`,
		'padding-right': `${paddingNum}px`,
	}
})

const colTag = computed(() => {
	return colProps.tag ?? 'div'
})
</script>
