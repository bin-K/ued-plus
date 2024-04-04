<template>
	<aside class="ued-aside" :style="asideStyle">
		<slot />
	</aside>
</template>

<script lang="ts" setup>
import '../../styles/aside.scss'
import { computed } from 'vue'

defineOptions({ name: 'UedAside' })

type AsideProps = {
	width?: string | number
}

const asideProps = defineProps<AsideProps>()

const asideStyle = computed(() => {
	const width =
		typeof asideProps.width === 'string'
			? asideProps.width.split('px')[0]
			: asideProps.width
	return {
		width: Number.isNaN(Number(width)) ? undefined : Number(width) + 'px',
	}
})
</script>
