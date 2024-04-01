<template>
	<component
		:is="textTag"
		class="ued-text"
		:class="textClass"
		:style="textStyle"
	>
		<slot />
	</component>
</template>

<script lang="ts" setup>
import './styles/index.scss'
import { computed } from 'vue'

defineOptions({ name: 'UedText' })

type TextProps = {
	type?: string
	size?: string
	truncated?: boolean
	lineClamp?: string | number
	tag?: string
}

const textProps = defineProps<TextProps>()

const textClass = computed(() => {
	return {
		[`ued-text--${textProps.type}`]: textProps.type,
		[`ued-text--${textProps.size}`]: textProps.size,
		'is-truncated': textProps.truncated,
		'is-line-clamp': !Number.isNaN(Number(textProps.lineClamp)),
	}
})

const textStyle = computed(() => {
	return {
		'-webkit-line-clamp': Number.isNaN(Number(textProps.lineClamp))
			? undefined
			: Number(textProps.lineClamp),
	}
})

const textTag = computed(() => {
	return textProps.tag ?? 'span'
})
</script>
