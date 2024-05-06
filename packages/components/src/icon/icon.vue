<template>
	<component :is="icon" :style="iconStyle" :name="name" class="ued-icon">
		<slot />
		<div v-if="dot" class="ued-icon-dot" :class="iconClass">{{ badge }}</div>
	</component>
</template>
<script lang="ts" setup>
import './styles/index.scss'
import { computed } from 'vue'
import { isNumber } from '@ued-plus/utils'
import Common from './components/common/index.vue'

defineOptions({ name: 'UedIcon' })

type IconProps = {
	name?: string
	size?: number
	color?: string
	dot?: boolean
	badge?: number
}

const iconProps = defineProps<IconProps>()

const iconStyle = computed(() => {
	return {
		fontSize: isNumber(iconProps.size) ? `${iconProps.size}px` : undefined,
		color: iconProps.color,
	}
})

const iconClass = computed(() => {
	return {
		'ued-dot': iconProps.dot && !iconProps.badge,
	}
})
const badge = computed(() => {
	return isNumber(iconProps.badge)
		? iconProps.badge && iconProps.badge >= 100
			? '99+'
			: iconProps.badge
		: ''
})
const icon = computed(() => {
	return iconProps.name ? Common : 'i'
})
</script>
