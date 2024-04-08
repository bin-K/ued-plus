<template>
	<component :is="colTag" class="ued-col" :class="colClass" :style="colStyle">
		<slot />
	</component>
</template>

<script lang="ts" setup>
import './styles/col.scss'
import { computed, inject, PropType } from 'vue'

defineOptions({ name: 'UedCol' })

const rowGutter = inject('row-gutter', undefined)

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

const judgeNumber = (num: number | undefined) => {
	return typeof num === 'number' && num > 0
}

const handleBootstrap = (size: number | ColProps, sizeType: string) => {
	if (typeof size === 'number') {
		return {
			[`ued-col-${sizeType}-${size}`]: judgeNumber(size),
		}
	} else if (typeof size === 'object') {
		return {
			[`ued-col-${sizeType}-${size.span}`]: judgeNumber(size.span),
			[`ued-col-offset-${sizeType}-${size.offset}`]: judgeNumber(size.offset),
			[`ued-col-offset-${sizeType}-${size.pull}`]: judgeNumber(size.pull),
			[`ued-col-offset-${sizeType}-${size.push}`]: judgeNumber(size.push),
		}
	}
	return {}
}

const colClass = computed(() => {
	const xsSize = colProps.xs && handleBootstrap(colProps.xs, 'xs')
	const smSize = colProps.sm && handleBootstrap(colProps.sm, 'sm')
	const mdSize = colProps.md && handleBootstrap(colProps.md, 'md')
	const lgSize = colProps.lg && handleBootstrap(colProps.lg, 'lg')
	const xlSize = colProps.xl && handleBootstrap(colProps.xl, 'xl')

	return {
		[`ued-col-${colProps.span}`]: judgeNumber(colProps.span),
		[`ued-col-offset-${colProps.offset}`]: judgeNumber(colProps.offset),
		[`ued-col-pull-${colProps.pull}`]: judgeNumber(colProps.pull),
		[`ued-col-push-${colProps.push}`]: judgeNumber(colProps.push),
		'is-guttered': rowGutter,
		...xsSize,
		...smSize,
		...mdSize,
		...lgSize,
		...xlSize,
	}
})

const colStyle = computed(() => {
	const paddingNum = rowGutter ? rowGutter / 2 : undefined
	return {
		'padding-left': `${paddingNum}px`,
		'padding-right': `${paddingNum}px`,
	}
})

const colTag = computed(() => {
	return colProps.tag ?? 'div'
})
</script>
