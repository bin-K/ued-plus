import { ExtractPropTypes, PropType, CSSProperties, Ref } from 'vue'
import { isNumber } from '@ued-plus/utils'

export const ScrollBarProps = {
	tag: {
		type: String,
		default: 'div',
	},
	height: {
		type: [String, Number],
		default: undefined,
	},
	maxHeight: {
		type: [String, Number],
		default: undefined,
	},
	native: {
		type: Boolean,
		default: false,
	},
	always: {
		type: Boolean,
		default: false,
	},
	wrapStyle: {
		type: [Array, Object] as PropType<
			CSSProperties | CSSProperties[] | string[]
		>,
		default: undefined,
	},
	wrapClass: {
		type: String,
		default: undefined,
	},
	viewStyle: {
		type: [Array, Object] as PropType<
			CSSProperties | CSSProperties[] | string[]
		>,
		default: undefined,
	},
	viewClass: {
		type: String,
		default: undefined,
	},
	minSize: {
		type: Number,
		default: 20,
	},
	noresize: {
		type: Boolean,
		default: false,
	},
}

export const ScrollBarEmits = {
	scroll: ({
		scrollTop,
		scrollLeft,
	}: {
		scrollTop: number
		scrollLeft: number
	}) => [scrollTop, scrollLeft].every(isNumber),
}

export type ScrollBarPropsType = ExtractPropTypes<typeof ScrollBarProps>

export type ScrollBarEmitsType = typeof ScrollBarEmits

export const BAR_MAP = {
	vertical: {
		offset: 'offsetHeight',
		scroll: 'scrollTop',
		scrollSize: 'scrollHeight',
		size: 'height',
		key: 'vertical',
		axis: 'Y',
		client: 'clientY',
		direction: 'top',
	},
	horizontal: {
		offset: 'offsetWidth',
		scroll: 'scrollLeft',
		scrollSize: 'scrollWidth',
		size: 'width',
		key: 'horizontal',
		axis: 'X',
		client: 'clientX',
		direction: 'left',
	},
} as const

export type Overflow = {
	horizontal: boolean
	vertical: boolean
}

export type DirectionRef = {
	horizontal: Ref<HTMLDivElement | undefined>
	vertical: Ref<HTMLDivElement | undefined>
}

export type Direction = keyof typeof BAR_MAP | keyof DirectionRef
