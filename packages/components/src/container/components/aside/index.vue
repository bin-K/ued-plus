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
	return {
		width: Number.isNaN(Number(asideProps.width))
			? undefined
			: Number(asideProps.width) + 'px',
	}
})
</script>
