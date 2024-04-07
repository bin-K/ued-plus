<template>
	<div class="ued-col" :class="colClass" :style="colStyle">
		<slot />
	</div>
</template>

<script lang="ts" setup>
import './styles/col.scss'
import { computed, inject } from 'vue'

defineOptions({ name: 'UedCol' })

const rowGutter = inject('row-gutter', undefined)

const colProps = defineProps({
	span: {
		type: Number,
		default: 24,
	},
	offset: {
		type: Number,
		default: 0,
	},
})

const colClass = computed(() => {
	return {
		[`ued-col-${colProps.span}`]:
			typeof colProps.span === 'number' && colProps.span > 0,
		[`ued-col-offset-${colProps.offset}`]:
			typeof colProps.offset === 'number' && colProps.offset > 0,
		'is-guttered': rowGutter,
	}
})

const colStyle = computed(() => {
	const paddingNum = rowGutter ? rowGutter / 2 : undefined
	return {
		'padding-left': `${paddingNum}px`,
		'padding-right': `${paddingNum}px`,
	}
})
</script>
