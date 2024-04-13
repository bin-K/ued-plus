<template>
	<div class="ued-scrollbar">
		<div
			ref="wrapRef"
			class="ued-scrollbar__wrap"
			:class="scrollbarWrapClass"
			:style="scrollbarWrapStyle"
			@scroll="handleScroll"
		>
			<component
				:is="tag"
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
						ref="barHorizontalRef"
						class="ued-scrollbar__bar is-horizontal"
						:style="barHorizontalStyle"
					>
						<div
							class="ued-scrollbar__thumb"
							:style="barHorizontalThumbStyle"
						></div>
					</div>
				</transition>
				<transition name="ued-scrollbar-fade">
					<div
						v-show="always || visible"
						ref="barVerticalRef"
						class="ued-scrollbar__bar is-vertical"
						:style="barVerticalStyle"
					>
						<div
							class="ued-scrollbar__thumb"
							:style="barVerticalThumbStyle"
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
})
const emits = defineEmits(['scroll'])

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
const moveX = ref(0)
const moveY = ref(0)
const ratioX = ref(1)
const ratioY = ref(1)
const sizeWidth = ref('')
const sizeHeight = ref('')

const barHorizontalRef = ref<HTMLDivElement>()
const barVerticalRef = ref<HTMLDivElement>()
const barHorizontalStyle = ref<CSSProperties>({
	display: 'none',
})

const barVerticalStyle = ref<CSSProperties>({
	display: 'none',
})

const barHorizontalThumbStyle = computed<CSSProperties>(() => {
	return {
		width: sizeWidth.value,
		transform: `translateX(${moveX.value})`,
	}
})
const barVerticalThumbStyle = computed<CSSProperties>(() => {
	return {
		height: sizeHeight.value,
		transform: `translateY(${moveY.value})`,
	}
})

const handleScroll = () => {
	if (wrapRef.value) {
		const { offsetHeight, offsetWidth, scrollTop, scrollLeft } = wrapRef.value
		moveY.value = ((scrollTop * 100) / (offsetHeight - GAP)) * ratioY.value
		moveX.value = ((scrollLeft * 100) / (offsetWidth - GAP)) * ratioX.value
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

	ratioY.value =
		originalHeight /
		(offsetHeight - originalHeight) /
		(height / (offsetHeight - height))
	ratioX.value =
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
const mouseenter = () => {
	if (!scrollBarProps.always) {
		visible.value = true
		judgeOverflow().horizontal && (barHorizontalStyle.value.display = undefined)
		judgeOverflow().vertical && (barVerticalStyle.value.display = undefined)
	}
}
const mouseleave = () => {
	if (!scrollBarProps.always) {
		visible.value = false
		barHorizontalStyle.value.display = 'none'
		barVerticalStyle.value.display = 'none'
	}
}

onMounted(() => {
	if (!scrollBarProps.native) {
		nextTick(() => {
			update()
			barHorizontalStyle.value.display =
				scrollBarProps.always && judgeOverflow().horizontal ? undefined : 'none'
			barVerticalStyle.value.display =
				scrollBarProps.always && judgeOverflow().vertical ? undefined : 'none'
			wrapRef.value?.addEventListener('mouseenter', mouseenter)
			wrapRef.value?.addEventListener('mouseleave', mouseleave)
		})
	}
})
onUpdated(() => update())
onBeforeUnmount(() => {
	wrapRef.value?.removeEventListener('mouseenter', mouseenter)
	wrapRef.value?.removeEventListener('mouseleave', mouseleave)
})

defineExpose({
	handleScroll,
	update,
})
</script>
