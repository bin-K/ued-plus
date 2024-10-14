<template>
	<label class="ued-checkbox" :class="checkboxClass">
		<span class="ued-checkbox__input" :class="checkboxClass">
			<input
				v-model="modelValue"
				type="checkbox"
				class="ued-checkbox__original"
				:disabled="disabled"
				:value="value"
				:name="name || checkoutGroupInject?.name"
				@change="handleChange"
			/>
			<span class="ued-checkbox__inner" />
		</span>
		<span class="ued-checkbox__label">
			<slot v-if="$slots.default" />
			<template v-else>{{ label ?? value }}</template>
		</span>
	</label>
</template>

<script lang="ts" setup>
import './styles/index.scss'
import { computed, useSlots, inject } from 'vue'
import { checkboxGroupKey } from './constant'
import { isString, isNumber, isBoolean } from '@ued-plus/utils'
// import { CheckboxValueType } from './checkbox-group'

defineOptions({ name: 'UedCheckbox' })

const checkboxEmits = defineEmits({
	'update:modelValue': (val) =>
		isString(val) || isNumber(val) || isBoolean(val),
	// change: (val: CheckboxValueType) =>
	// 	isString(val) || isNumber(val) || isBoolean(val),
})

const checkboxProps = defineProps({
	modelValue: {
		type: [String, Number, Boolean],
		default: undefined,
	},
	label: {
		type: [String, Number, Boolean, Object],
		default: undefined,
	},
	value: {
		type: [String, Number, Boolean, Object],
		default: undefined,
	},
	size: {
		type: String,
		default: undefined,
	},
	disabled: {
		type: Boolean,
		default: undefined,
	},
	name: {
		type: String,
		default: undefined,
	},
})

const $slots = useSlots()
const checkoutGroupInject = inject(checkboxGroupKey, undefined)

const modelValue = computed({
	get() {
		return checkboxProps.modelValue
	},
	set(val) {
		if (checkoutGroupInject) {
			// checkoutGroupInject.changeEvent(val)
		} else {
			checkboxEmits('update:modelValue', val)
		}
	},
})

const size = computed(() => {
	return checkoutGroupInject?.size ?? checkboxProps.size
})

const disabled = computed(() => {
	return checkoutGroupInject?.disabled ?? checkboxProps.disabled
})

const isChecked = () => {
	if (isBoolean(modelValue.value)) {
		return modelValue.value
	} else {
		return !!modelValue.value
	}
}

const checkboxClass = computed(() => {
	return {
		'is-checked': isChecked(),
		'is-disabled': disabled.value,
		[`ued-checkbox--${size.value}`]: size.value,
	}
})

const handleChange = () => {}
</script>
