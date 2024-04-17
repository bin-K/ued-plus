<template>
	<component :is="icon" :style="iconStyle" :name="iconName" class="ued-icon">
		<slot />
		<div v-if="dot" class="ued-icon-dot" :class="iconClass">{{ badge }}</div>
	</component>
</template>
<script lang="ts" setup>
import './styles/index.scss'
import { computed, onMounted } from 'vue'
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

const iconName = computed(() => {
	return iconProps.name ? `#ued-${iconProps.name}` : undefined
})

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

onMounted(() => {
	// 引入字体图标文件
	import('./font/iconfont.js' as any)
})
</script>
