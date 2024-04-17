<template>
	<footer class="ued-footer" :style="footerStyle">
		<slot />
	</footer>
</template>

<script lang="ts" setup>
import '../../styles/footer.scss'
import { computed } from 'vue'
import { handleStringOrNumberPx } from '@ued-plus/utils'

defineOptions({ name: 'UedFooter' })

type FooterProps = {
	height?: string | number
}

const footerProps = defineProps<FooterProps>()

const footerStyle = computed(() => {
	return {
		height: handleStringOrNumberPx(footerProps.height),
	}
})
</script>
