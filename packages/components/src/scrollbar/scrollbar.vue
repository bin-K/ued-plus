<template>
	<div class="ued-scrollbar">
		<div
			ref="wrapRef"
			class="ued-scrollbar__wrap"
			:class="scrollbarWrapClass"
			:style="scrollbarWrapStyle"
		>
			<component
				:is="scrollbarTag"
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
						<div class="ued-scrollbar__thumb" style="width: 25px"></div>
					</div>
				</transition>
				<transition name="ued-scrollbar-fade">
					<div
						v-show="always || visible"
						ref="barVerticalRef"
						class="ued-scrollbar__bar is-vertical"
						:style="barVerticalStyle"
					>
						<div class="ued-scrollbar__thumb" style="height: 129.6px"></div>
					</div>
				</transition>
			</template>
		</div>
	</div>
</template>

<script lang="ts" setup>
import './styles/index.scss'
import { computed, ref, nextTick, onBeforeUnmount, CSSProperties } from 'vue'

defineOptions({ name: 'UedScrollbar' })

type Overflow = {
	horizontal: boolean
	vertical: boolean
}

type ScrollBarProps = {
	tag?: string
	height?: string | number
	maxHeight?: string | number
	native?: boolean
	always?: boolean
	wrapStyle?: CSSProperties | CSSProperties[] | string[]
	wrapClass?: string
	viewStyle?: CSSProperties | CSSProperties[] | string[]
	viewClass?: string
}

const scrollBarProps = defineProps<ScrollBarProps>()

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
	const wrapClass = scrollBarProps.wrapClass
		? {
				[scrollBarProps.wrapClass]: true,
			}
		: {}
	return {
		'ued-scrollbar__wrap--hidden-default': !scrollBarProps.native,
		...wrapClass,
	}
})

const scrollbarViewStyle = computed(() => {
	return {
		...scrollBarProps.wrapStyle,
	}
})

const scrollbarViewClass = computed(() => {
	const viewClass = scrollBarProps.viewClass
		? {
				[scrollBarProps.viewClass]: true,
			}
		: {}
	return {
		...viewClass,
	}
})

const scrollbarTag = computed(() => {
	return scrollBarProps.tag ?? 'div'
})

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

const barHorizontalStyle = ref<CSSProperties>({
	display: 'none',
})

const barVerticalStyle = ref<CSSProperties>({
	display: 'none',
})

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

const wrapRef = ref<HTMLDivElement>()
const barHorizontalRef = ref<HTMLDivElement>()
const barVerticalRef = ref<HTMLDivElement>()

nextTick(() => {
	barHorizontalStyle.value.display =
		scrollBarProps.always && judgeOverflow().horizontal ? undefined : 'none'
	barVerticalStyle.value.display =
		scrollBarProps.always && judgeOverflow().vertical ? undefined : 'none'
	wrapRef.value?.addEventListener('mouseenter', mouseenter)
	wrapRef.value?.addEventListener('mouseleave', mouseleave)
})

onBeforeUnmount(() => {
	wrapRef.value?.removeEventListener('mouseenter', mouseenter)
	wrapRef.value?.removeEventListener('mouseleave', mouseleave)
})
</script>
