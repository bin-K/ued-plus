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
	return {
		height: Number.isNaN(Number(footerProps.height))
			? undefined
			: Number(footerProps.height) + 'px',
	}
})
</script>
