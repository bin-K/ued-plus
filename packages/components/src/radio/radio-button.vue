<template>
	<label
		ref="radioRef"
		class="ued-radio-button"
		:class="radioButtonClass"
		:style="radioButtonStyle"
	>
		<input
			ref="radioOriginalRef"
			v-model="modelValue"
			class="ued-radio-button__original-radio"
			type="radio"
			:value="value"
			:name="name || radioGroupInject?.name"
			:disabled="disabled"
			@change="handleChange"
			@focus="focus = true"
			@blur="focus = false"
			@click.stop
		/>
		<span class="ued-radio-button__inner">
			<slot v-if="$slots.default" />
			<template v-else>{{ label ?? value }}</template>
		</span>
	</label>
</template>

<script lang="ts" setup>
import './styles/radio-button.scss'
import { useSlots, inject, computed, nextTick, ref } from 'vue'
import { radioGroupKey } from './constant'
import { handleValidColor } from '@ued-plus/utils'

defineOptions({ name: 'UedRadioButton' })

const radioButtonProps = defineProps({
	modelValue: {
		type: [String, Number, Boolean],
		default: undefined,
	},
	value: {
		type: [String, Number, Boolean],
		default: undefined,
	},
	label: {
		type: [String, Number, Boolean],
		default: undefined,
	},
	name: {
		type: String,
		default: undefined,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	size: {
		type: String,
		default: undefined,
	},
})

const radioButtonEmits = defineEmits(['change', 'update:modelValue'])

const $slots = useSlots()
const radioGroupInject = inject(radioGroupKey, undefined)

const disabled = computed(
	() => radioGroupInject?.disabled ?? radioButtonProps.disabled
)

const size = computed(() => radioGroupInject?.size ?? radioButtonProps.size)

const modelValue = computed({
	get() {
		return radioGroupInject?.modelValue ?? radioButtonProps.modelValue
	},
	set(val) {
		if (radioGroupInject) {
			radioGroupInject.changeEvent(val)
		} else {
			radioButtonEmits('update:modelValue', val)
		}
	},
})

const radioButtonClass = computed(() => {
	return {
		'is-disabled': disabled.value,
		'is-checked': modelValue.value === radioButtonProps.value,
		'is-focus': focus.value,
		[`ued-radio-button--${size.value}`]: size.value,
	}
})

const radioButtonStyle = computed(() => {
	return {
		'--ued-radio-button-checked-text-color':
			radioGroupInject?.textColor ??
			handleValidColor(radioGroupInject?.textColor),
		'--ued-radio-button-checked-border-color':
			radioGroupInject?.fill ?? handleValidColor(radioGroupInject?.fill),
		'--ued-radio-button-checked-bg-color':
			radioGroupInject?.fill ?? handleValidColor(radioGroupInject?.fill),
	}
})

const focus = ref(false)

const handleChange = () => {
	nextTick(() => {
		radioButtonEmits('change', modelValue.value)
	})
}
</script>
