// button.vue
<template>
	<component
		:is="buttonTag"
		:class="buttonStyle"
		:disabled="disabled"
		class="ued-button"
	>
		<slot />
	</component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import './styles/index.scss'

defineOptions({ name: 'UedButton' })

type ButtonProps = {
	type?: string
	plain?: boolean
	round?: boolean
	circle?: boolean
	disabled?: boolean
	link?: boolean
	text?: boolean
	bg?: boolean
	size?: string
	tag?: string
}

const buttonProps = defineProps<ButtonProps>()

const buttonStyle = computed(() => {
	return {
		[`ued-button--${buttonProps.type}`]: buttonProps.type,
		[`ued-button--${buttonProps.size}`]: buttonProps.size,
		'is-plain': buttonProps.plain,
		'is-round': buttonProps.round,
		'is-circle': buttonProps.circle,
		'is-disabled': buttonProps.disabled,
		'is-link': buttonProps.link,
		'is-text': buttonProps.text,
		'is-has-bg': buttonProps.bg,
	}
})

const buttonTag = computed(() => {
	return buttonProps.tag ?? 'button'
})
</script>
