<template>
	<footer class="ued-footer" :style="footerStyle">
		<slot />
	</footer>
</template>

<script lang="ts" setup>
import '../../styles/footer.scss'
import { computed } from 'vue'

defineOptions({ name: 'UedFooter' })

type FooterProps = {
	height?: string | number
}

const footerProps = defineProps<FooterProps>()

const footerStyle = computed(() => {
	const height =
		typeof footerProps.height === 'string'
			? footerProps.height.split('px')[0]
			: footerProps.height
	return {
		height: Number.isNaN(Number(height)) ? undefined : Number(height) + 'px',
	}
})
</script>
