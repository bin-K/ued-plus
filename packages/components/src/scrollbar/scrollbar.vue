<template>
	<div class="ued-scrollbar">
		<div
			class="ued-scrollbar__wrap"
			:class="scrollbarWrapClass"
			:style="scrollbarWrapStyle"
		>
			<component :is="scrollbarTag" class="ued-scrollbar__view">
				<slot />
			</component>
			<template v-if="!native">
				<div class="ued-scrollbar__bar is-horizontal">
					<div class="ued-scrollbar__thumb" style="width: 25px"></div>
				</div>
				<div class="ued-scrollbar__bar is-vertical">
					<div class="ued-scrollbar__thumb" style="height: 129.6px"></div>
				</div>
			</template>
		</div>
	</div>
</template>

<script lang="ts" setup>
import './styles/index.scss'
import { computed } from 'vue'

defineOptions({ name: 'UedScrollbar' })

type ScrollBarProps = {
	tag?: string
	height?: string | number
	native?: boolean
}

const scrollBarProps = defineProps<ScrollBarProps>()

const scrollbarWrapStyle = computed(() => {
	const height =
		typeof scrollBarProps.height === 'string'
			? scrollBarProps.height.split('px')[0]
			: scrollBarProps.height
	return {
		height: Number.isNaN(Number(height)) ? undefined : Number(height) + 'px',
	}
})

const scrollbarWrapClass = computed(() => {
	return {
		'ued-scrollbar__wrap--hidden-default': !scrollBarProps.native,
	}
})

const scrollbarTag = computed(() => {
	return scrollBarProps.tag ?? 'div'
})
</script>
