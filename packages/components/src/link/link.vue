<template>
	<a class="ued-link" :class="linkClass">
		<ued-icon v-if="icon || $slots.icon">
			<component :is="icon" v-if="icon" />
			<slot v-else name="icon" />
		</ued-icon>
		<span class="ued-link__inner">
			<slot />
		</span>
	</a>
</template>

<script lang="ts" setup>
import './styles/index.scss'
import { UedIcon } from '../icon'
import { computed, ComponentCustomProps, PropType, useSlots } from 'vue'

defineOptions({ name: 'UedLink' })

const linkProps = defineProps({
	type: {
		type: String,
		default: undefined,
	},
	underline: {
		type: Boolean,
		default: true,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	icon: {
		type: Object as PropType<ComponentCustomProps>,
		default: undefined,
	},
})

const $slots = useSlots()

const linkClass = computed(() => {
	return {
		[`ued-link--${linkProps.type}`]: linkProps.type,
		'is-underline': linkProps.disabled ? false : linkProps.underline,
		'is-disabled': linkProps.disabled,
	}
})
</script>
