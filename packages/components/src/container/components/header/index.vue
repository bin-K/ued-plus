<template>
	<header class="ued-header" :style="headerStyle">
		<slot />
	</header>
</template>

<script lang="ts" setup>
import '../../styles/header.scss'
import { computed } from 'vue'

defineOptions({ name: 'UedHeader' })

type HeaderProps = {
	height?: string | number
}

const headerProps = defineProps<HeaderProps>()

const headerStyle = computed(() => {
	const height =
		typeof headerProps.height === 'string'
			? headerProps.height.split('px')[0]
			: headerProps.height
	return {
		height: Number.isNaN(Number(height)) ? undefined : Number(height) + 'px',
	}
})
</script>
