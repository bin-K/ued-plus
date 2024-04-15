<template>
	<div ref="scrollbarRef" class="ued-scrollbar">
		<div
			ref="wrapRef"
			class="ued-scrollbar__wrap"
			:class="scrollbarWrapClass"
			:style="scrollbarWrapStyle"
			@scroll="handleScroll"
		>
			<component
				:is="tag"
				ref="resideRef"
				class="ued-scrollbar__view"
				:class="scrollbarViewClass"
				:style="scrollbarViewStyle"
			>
				<slot />
			</component>

			<template v-if="!native">
				<transition name="ued-scrollbar-fade">
					<div
						v-show="always || visible"
						:ref="barRef.horizontal"
						class="ued-scrollbar__bar is-horizontal"
						:style="barHorizontalStyle"
						@mousedown="clickTrackHandler($event, 'horizontal')"
					>
						<div
							:ref="barThumbRef.horizontal"
							class="ued-scrollbar__thumb"
							:style="barHorizontalThumbStyle"
							@mousedown="clickThumbHandler($event, 'horizontal')"
						></div>
					</div>
				</transition>
				<transition name="ued-scrollbar-fade">
					<div
						v-show="always || visible"
						:ref="barRef.vertical"
						class="ued-scrollbar__bar is-vertical"
						:style="barVerticalStyle"
						@mousedown="clickTrackHandler($event, 'vertical')"
					>
						<div
							:ref="barThumbRef.vertical"
							class="ued-scrollbar__thumb"
							:style="barVerticalThumbStyle"
							@mousedown="clickThumbHandler($event, 'vertical')"
						></div>
					</div>
				</transition>
			</template>
		</div>
	</div>
</template>

<script lang="ts" setup>
import './styles/index.scss'
import {
	computed,
	ref,
	watch,
	CSSProperties,
	PropType,
	onBeforeUnmount,
	onMounted,
	onUpdated,
	nextTick,
} from 'vue'

type Overflow = {
	horizontal: boolean
	vertical: boolean
}
const BAR_MAP = {
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
type Direction =
	| keyof typeof BAR_MAP
	| keyof typeof barRef
	| keyof typeof barThumbRef

defineOptions({ name: 'UedScrollbar' })

const scrollBarProps = defineProps({
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
})
const emits = defineEmits(['scroll'])

const scrollbarRef = ref()
const scrollbarWrapStyle = computed(() => {
	const height =
		typeof scrollBarProps.height === 'string'
			? scrollBarProps.height.split('px')[0]
			: scrollBarProps.height
	const maxHeight =
		typeof scrollBarProps.maxHeight === 'string'
			? scrollBarProps.maxHeight.split('px')[0]
			: scrollBarProps.maxHeight
	return {
		height: Number.isNaN(Number(height)) ? undefined : Number(height) + 'px',
		'max-height': Number.isNaN(Number(maxHeight))
			? undefined
			: Number(maxHeight) + 'px',
		...scrollBarProps.wrapStyle,
	}
})

const scrollbarWrapClass = computed(() => {
	return [
		scrollBarProps.wrapClass,
		{
			'ued-scrollbar__wrap--hidden-default': !scrollBarProps.native,
		},
	]
})

const scrollbarViewStyle = computed(() => {
	return {
		...scrollBarProps.wrapStyle,
	}
})

const scrollbarViewClass = computed(() => {
	return [scrollBarProps.viewClass]
})

const wrapRef = ref<HTMLDivElement>()

const GAP = 4
const move = {
	X: ref(0),
	Y: ref(0),
}
const ratio = {
	X: ref(1),
	Y: ref(1),
}
const sizeWidth = ref('')
const sizeHeight = ref('')

const barRef = {
	horizontal: ref<HTMLDivElement>(),
	vertical: ref<HTMLDivElement>(),
}
const barThumbRef = {
	horizontal: ref<HTMLDivElement>(),
	vertical: ref<HTMLDivElement>(),
}

const barHorizontalStyle = ref<CSSProperties>({
	display: 'none',
})

const barVerticalStyle = ref<CSSProperties>({
	display: 'none',
})

const barHorizontalThumbStyle = computed<CSSProperties>(() => {
	return {
		width: sizeWidth.value,
		transform: `translateX(${move.X.value}%)`,
	}
})
const barVerticalThumbStyle = computed<CSSProperties>(() => {
	return {
		height: sizeHeight.value,
		transform: `translateY(${move.Y.value}%)`,
	}
})

const handleScroll = () => {
	if (wrapRef.value) {
		const { offsetHeight, offsetWidth, scrollTop, scrollLeft } = wrapRef.value
		move.Y.value = ((scrollTop * 100) / (offsetHeight - GAP)) * ratio.Y.value
		move.X.value = ((scrollLeft * 100) / (offsetWidth - GAP)) * ratio.X.value
		emits('scroll', {
			scrollTop: wrapRef.value.scrollTop,
			scrollLeft: wrapRef.value.scrollLeft,
		})
	}
}

const update = () => {
	if (!wrapRef.value) return
	const { offsetHeight, offsetWidth, scrollHeight, scrollWidth } = wrapRef.value
	const originalHeight = (offsetHeight - GAP) ** 2 / scrollHeight
	const originalWidth = (offsetWidth - GAP) ** 2 / scrollWidth
	const height = Math.max(originalHeight, scrollBarProps.minSize)
	const width = Math.max(originalWidth, scrollBarProps.minSize)

	ratio.Y.value =
		originalHeight /
		(offsetHeight - originalHeight) /
		(height / (offsetHeight - height))
	ratio.X.value =
		originalWidth /
		(offsetWidth - originalWidth) /
		(width / (offsetWidth - width))

	sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : ''
	sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : ''
}

watch(
	() => [scrollBarProps.height, scrollBarProps.maxHeight],
	() => {
		if (!scrollBarProps.native) {
			update()
			handleScroll()
		}
	}
)

const resideRef = ref<HTMLDivElement>()
watch(
	() => scrollBarProps.noresize,
	(noresize) => {
		if (noresize) {
			typeof window !== 'undefined' &&
				window.removeEventListener('resize', update)
		} else {
			typeof window !== 'undefined' && window.addEventListener('resize', update)
		}
	},
	{
		immediate: true,
	}
)

const thumbState = ref<Partial<Record<'X' | 'Y', number>>>({})
let cursorDown = false
let cursorLeave = false
let originalOnSelectStart: any

const offsetRatio = computed(() => {
	return (direction: Direction) =>
		// offsetRatioX = original width of thumb / current width of thumb / ratioX
		// offsetRatioY = original height of thumb / current height of thumb / ratioY
		// instance height = wrap height - GAP
		barRef[direction].value![BAR_MAP[direction].offset] ** 2 /
		wrapRef.value![BAR_MAP[direction].scrollSize] /
		ratio[BAR_MAP[direction].axis].value /
		barThumbRef[direction].value![BAR_MAP[direction].offset]
})

const clickTrackHandler = (e: MouseEvent, direction: Direction) => {
	if (
		barThumbRef[direction].value &&
		barRef[direction].value &&
		wrapRef.value
	) {
		const offset = Math.abs(
			(e.target as HTMLElement).getBoundingClientRect()[
				BAR_MAP[direction].direction
			] - e[BAR_MAP[direction].client]
		)
		const thumbHalf =
			barThumbRef[direction].value![BAR_MAP[direction].offset] / 2
		const thumbPositionPercentage =
			((offset - thumbHalf) * 100 * offsetRatio.value(direction)) /
			barRef[direction].value![BAR_MAP[direction].offset]
		wrapRef.value[BAR_MAP[direction].scroll] =
			(thumbPositionPercentage * wrapRef.value[BAR_MAP[direction].scrollSize]) /
			100
	}
}

const clickThumbHandler = (e: MouseEvent, direction: Direction) => {
	e.stopPropagation()
	if (e.ctrlKey || [1, 2].includes(e.button)) return
	window.getSelection()?.removeAllRanges()
	startDrag(e, direction)

	const el = e.currentTarget as HTMLDivElement
	if (!el) return

	thumbState.value[BAR_MAP[direction].axis] =
		el[BAR_MAP[direction].offset] -
		(e[BAR_MAP[direction].client] -
			el.getBoundingClientRect()[BAR_MAP[direction].direction])
}

const startDrag = (e: MouseEvent, direction: Direction) => {
	e.stopImmediatePropagation()
	cursorDown = true
	document.addEventListener('mousemove', (e) =>
		mouseMoveDocumentHandler(e, direction)
	)
	document.addEventListener('mouseup', (e) =>
		mouseUpDocumentHandler(e, direction)
	)
	originalOnSelectStart = document.onselectstart
	document.onselectstart = () => false
}

const mouseMoveDocumentHandler = (e: MouseEvent, direction: Direction) => {
	if (cursorDown === false) return
	if (barRef[direction].value && barThumbRef[direction].value) {
		const prevPage = thumbState.value[BAR_MAP[direction].axis]
		if (!prevPage) return
		const offset =
			(barRef[direction].value!.getBoundingClientRect()[
				BAR_MAP[direction].direction
			] -
				e[BAR_MAP[direction].client]) *
			-1
		const thumbClickPosition =
			barThumbRef[direction].value![BAR_MAP[direction].offset] - prevPage
		const thumbPositionPercentage =
			((offset - thumbClickPosition) * 100 * offsetRatio.value(direction)) /
			barRef[direction].value![BAR_MAP[direction].offset]
		wrapRef.value![BAR_MAP[direction].scroll] =
			(thumbPositionPercentage *
				wrapRef.value![BAR_MAP[direction].scrollSize]) /
			100
	}
}

const mouseUpDocumentHandler = (e: MouseEvent, direction: Direction) => {
	cursorDown = false
	thumbState.value[BAR_MAP[direction].axis] = 0
	document.removeEventListener('mousemove', (e) =>
		mouseMoveDocumentHandler(e, direction)
	)
	document.removeEventListener('mouseup', (e) =>
		mouseUpDocumentHandler(e, direction)
	)
	restoreOnselectstart()
	if (cursorLeave) visible.value = false
}

const restoreOnselectstart = () => {
	if (document.onselectstart !== originalOnSelectStart) {
		document.onselectstart = originalOnSelectStart
	}
}

function scrollTo(arg1: unknown, arg2?: number) {
	if (typeof arg1 === 'object' && arg1 !== null) {
		wrapRef.value!.scrollTo(arg1)
	} else if (
		typeof arg1 === 'number' &&
		!Number.isNaN(arg1) &&
		typeof arg2 === 'number' &&
		!Number.isNaN(arg2)
	) {
		wrapRef.value!.scrollTo(arg1, arg2)
	}
}

const setScrollTop = (value: number) => {
	if (typeof value !== 'number' || Number.isNaN(value)) {
		console.warn('scrollbar', 'value must be a number')
		return
	}
	wrapRef.value!.scrollTop = value
}

const setScrollLeft = (value: number) => {
	if (typeof value !== 'number' || Number.isNaN(value)) {
		console.warn('scrollbar', 'value must be a number')
		return
	}
	wrapRef.value!.scrollLeft = value
}

const visible = ref(false)
const judgeOverflow = (): Overflow => {
	if (wrapRef.value) {
		const { scrollWidth, clientWidth, scrollHeight, clientHeight } =
			wrapRef.value
		return {
			horizontal: scrollWidth > clientWidth,
			vertical: scrollHeight > clientHeight,
		}
	}
	return {
		horizontal: false,
		vertical: false,
	}
}
const mousemove = () => {
	visible.value = true
	cursorLeave = false
	judgeOverflow().horizontal && (barHorizontalStyle.value.display = undefined)
	judgeOverflow().vertical && (barVerticalStyle.value.display = undefined)
}
const mouseleave = () => {
	visible.value = cursorDown
	cursorLeave = true
	judgeOverflow().horizontal &&
		(barHorizontalStyle.value.display = cursorDown ? undefined : 'none')
	judgeOverflow().vertical &&
		(barVerticalStyle.value.display = cursorDown ? undefined : 'none')
}

onMounted(() => {
	if (!scrollBarProps.native) {
		nextTick(() => {
			update()
			barHorizontalStyle.value.display =
				scrollBarProps.always && judgeOverflow().horizontal ? undefined : 'none'
			barVerticalStyle.value.display =
				scrollBarProps.always && judgeOverflow().vertical ? undefined : 'none'
			!scrollBarProps.always &&
				wrapRef.value?.addEventListener('mousemove', mousemove)
			!scrollBarProps.always &&
				wrapRef.value?.addEventListener('mouseleave', mouseleave)
		})
	}
})
onUpdated(() => update())
onBeforeUnmount(() => {
	wrapRef.value?.removeEventListener('mousemove', mousemove)
	wrapRef.value?.removeEventListener('mouseleave', mouseleave)
})

defineExpose({
	handleScroll,
	scrollTo,
	setScrollTop,
	setScrollLeft,
	update,
	wrapRef,
})
</script>
