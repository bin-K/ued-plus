<template>
	<header class="ued-header" :style="headerStyle">
		<slot />
	</header>
</template>

<script lang="ts" setup>
import '../../styles/header.scss'
import { computed } from 'vue'
import { handleStringOrNumberPx } from '@ued-plus/utils'

defineOptions({ name: 'UedHeader' })

type HeaderProps = {
	height?: string | number
}

const headerProps = defineProps<HeaderProps>()

const headerStyle = computed(() => {
	return {
		height: handleStringOrNumberPx(headerProps.height),
	}
})
</script>
