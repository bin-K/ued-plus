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
import { computed, ref, watch } from 'vue'
import { handleStringOrNumberPx, isNumber, isObject } from '@ued-plus/utils'
import { ScrollBarProps } from './scrollbar'
import { useScroll } from '@ued-plus/hooks'

defineOptions({ name: 'UedScrollbar' })

const scrollBarProps = defineProps(ScrollBarProps)

const {
	visible,
	wrapRef,
	barRef,
	barThumbRef,
	barHorizontalStyle,
	barVerticalStyle,
	barHorizontalThumbStyle,
	barVerticalThumbStyle,
	handleScroll,
	update,
	clickTrackHandler,
	clickThumbHandler,
} = useScroll(scrollBarProps)

const scrollbarRef = ref()
const scrollbarWrapStyle = computed(() => {
	return {
		height: handleStringOrNumberPx(scrollBarProps.height),
		'max-height': handleStringOrNumberPx(scrollBarProps.maxHeight),
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
		...scrollBarProps.viewStyle,
	}
})

const scrollbarViewClass = computed(() => {
	return [scrollBarProps.viewClass]
})

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

function scrollTo(arg1: unknown, arg2?: number) {
	if (isObject(arg1)) {
		wrapRef.value!.scrollTo(arg1 as object)
	} else if (isNumber(arg1) && isNumber(arg2)) {
		wrapRef.value!.scrollTo(arg1 as number, arg2 as number)
	}
}

const setScrollTop = (value: number) => {
	if (!isNumber(value)) {
		console.warn('scrollbar', 'value must be a number')
		return
	}
	wrapRef.value!.scrollTop = value
}

const setScrollLeft = (value: number) => {
	if (!isNumber(value)) {
		console.warn('scrollbar', 'value must be a number')
		return
	}
	wrapRef.value!.scrollLeft = value
}

defineExpose({
	handleScroll,
	scrollTo,
	setScrollTop,
	setScrollLeft,
	update,
	wrapRef,
})
</script>
