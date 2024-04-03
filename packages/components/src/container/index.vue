<template>
	<section class="ued-container" :class="containerClass">
		<slot />
	</section>
</template>

<script lang="ts" setup>
import './styles/index.scss'
import { computed, useSlots } from 'vue'
import type { Component } from 'vue'

defineOptions({ name: 'UedContainer' })

type ContainerProps = {
	direction?: string
}

const containerProps = defineProps<ContainerProps>()

const $slots = useSlots()

const isVertical = computed(() => {
	if (containerProps.direction === 'vertical') {
		return true
	} else if (containerProps.direction === 'horizontal') {
		return false
	}
	if ($slots && $slots.default) {
		return $slots.default().some((vNode) => {
			const tag = (vNode.type as Component).name
			return tag === 'UedHeader' || tag === 'UedFooter'
		})
	} else {
		return false
	}
})

const containerClass = computed(() => {
	return {
		'is-vertical': isVertical.value,
	}
})
</script>
