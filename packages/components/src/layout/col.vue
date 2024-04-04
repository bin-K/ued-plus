<template>
	<div class="ued-col" :class="colClass">
		<slot />
	</div>
</template>

<script lang="ts" setup>
import './styles/col.scss'
import { computed } from 'vue'

defineOptions({ name: 'UedCol' })

type ColProps = {
	span?: number
}

const colProps = defineProps<ColProps>()

const colClass = computed(() => {
	return {
		[`ued-col-${colProps.span}`]: typeof colProps.span === 'number',
	}
})
</script>
