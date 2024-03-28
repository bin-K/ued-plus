<template>
	<component :is="icon" :style="iconStyle" :name="iconName" class="ued-icon">
		<slot />
	</component>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import './styles/index.scss'

import Common from './components/common/index.vue'

defineOptions({ name: 'UedIcon' })

type IconProps = {
	name?: String
	size?: Number
	color?: String
}

const iconProps = defineProps<IconProps>()

const iconName = computed(() => {
	return iconProps.name ? `#ued-${iconProps.name}` : undefined
})

const iconStyle = computed(() => {
	return {
		fontSize:
			typeof iconProps.size === 'number' ? iconProps.size + 'px' : undefined,
		color: iconProps.color,
	}
})

const icon = computed(() => {
	return iconProps.name ? Common : 'i'
})
</script>
