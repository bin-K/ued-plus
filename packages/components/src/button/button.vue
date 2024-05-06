// button.vue
<template>
	<component
		:is="buttonTag"
		ref="buttonRef"
		:class="buttonStyle"
		:disabled="disabled || loading"
		class="ued-button"
	>
		<ued-icon v-if="icon || $slots.icon" :class="loadingStyle">
			<component :is="icon" v-if="icon" />
			<slot v-else name="icon" />
		</ued-icon>
		<span v-if="$slots.default">
			<slot />
		</span>
	</component>
</template>

<script lang="ts" setup>
import './styles/index.scss'
import { UedIcon, Loading } from '@ued-plus/components'
import { computed, ComponentCustomProps, useSlots, ref, inject } from 'vue'

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
	icon?: ComponentCustomProps
	loading?: boolean
	loadingIcon?: ComponentCustomProps
}

const buttonProps = defineProps<ButtonProps>()

const buttonType = inject('type', undefined)
const buttonSize = inject('size', undefined)

const $slots = useSlots()

const buttonRef = ref()

const buttonStyle = computed(() => {
	return {
		[`ued-button--${buttonType ?? buttonProps.type}`]:
			buttonType ?? buttonProps.type,
		[`ued-button--${buttonSize ?? buttonProps.size}`]:
			buttonSize ?? buttonProps.size,
		'is-plain': buttonProps.plain,
		'is-round': buttonProps.round,
		'is-circle': buttonProps.circle,
		'is-disabled': buttonProps.disabled || buttonProps.loading,
		'is-link': buttonProps.link,
		'is-text': buttonProps.text,
		'is-has-bg': buttonProps.bg,
		'is-loading': buttonProps.loading,
	}
})

const loadingStyle = computed(() => {
	return {
		'is-loading': buttonProps.loading,
	}
})

const buttonTag = computed(() => {
	return buttonProps.tag ?? 'button'
})

const icon = computed(() => {
	return buttonProps.loading
		? $slots.icon
			? undefined
			: buttonProps.loadingIcon ?? Loading
		: buttonProps.icon
})

defineExpose({
	/** @description button html element */
	ref: buttonRef,
	/** @description button type */
	type: buttonProps.type,
	/** @description button disabled */
	disabled: buttonProps.disabled,
	/** @description button size */
	size: buttonProps.size,
})
</script>
