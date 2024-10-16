<template>
	<label
		ref="checkboxRef"
		class="ued-checkbox-button"
		:class="checkboxButtonClass"
		:style="checkboxButtonStyle"
	>
		<input
			ref="checkboxOriginalRef"
			v-model="modelValue"
			type="checkbox"
			class="ued-checkbox-button__original-checkbox"
			:disabled="isDisabled"
			:value="value"
			:name="name || checkboxGroupInject?.name"
			@focus="focus = true"
			@blur="focus = false"
			@change="handleChange"
			@click.stop
		/>
		<span class="ued-checkbox-button__inner">
			<slot v-if="$slots.default" />
			<template v-else>{{ label ?? value }}</template>
		</span>
	</label>
</template>

<script lang="ts" setup>
import './styles/checkbox-button.scss'
import { computed, useSlots, inject, toRaw, ref, nextTick } from 'vue'
import { isEqual } from 'lodash-unified'
import { checkboxGroupKey } from './constant'
import { formInjectKey } from '../form/constant'
import {
	isString,
	isNumber,
	isBoolean,
	isArray,
	isObject,
	handleValidColor,
} from '@ued-plus/utils'
import { CheckboxValueType, CheckboxGroupValueType } from './checkbox-group'

defineOptions({ name: 'UedCheckboxButton' })

const checkboxEmits = defineEmits({
	'update:modelValue': (val) =>
		isString(val) || isNumber(val) || isBoolean(val),
	change: (val: CheckboxValueType | CheckboxGroupValueType) =>
		isString(val) || isNumber(val) || isBoolean(val) || isArray(val),
})

const checkboxButtonProps = defineProps({
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
const checkboxGroupInject = inject(checkboxGroupKey, undefined)
const formInject = inject(formInjectKey, undefined)

const modelValue = computed({
	get() {
		return checkboxGroupInject?.modelValue ?? checkboxButtonProps.modelValue
	},
	set(val) {
		if (checkboxGroupInject) {
			checkboxGroupInject.changeEvent(val as CheckboxGroupValueType)
		} else {
			checkboxEmits('update:modelValue', val)
		}
	},
})

const size = computed(() => {
	return (
		checkboxButtonProps.size ??
		checkboxGroupInject?.size ??
		formInject?.disabled
	)
})

const disabled = computed(() => {
	return (
		checkboxButtonProps.disabled ??
		checkboxGroupInject?.disabled ??
		formInject?.disabled
	)
})

const selfModel = ref<unknown>(false)
const isActived = computed(() => {
	const value =
		checkboxGroupInject?.modelValue ?? modelValue.value ?? selfModel.value
	if (isBoolean(value)) {
		return value
	} else if (isArray(value)) {
		if (isObject(checkboxButtonProps.value)) {
			return value.map(toRaw).some((o) => isEqual(o, checkboxButtonProps.value))
		} else {
			return value.map(toRaw).includes(checkboxButtonProps.value)
		}
	} else {
		return !!value
	}
})

const limitDisabled = computed(() => {
	const value = checkboxGroupInject?.modelValue as CheckboxGroupValueType
	const max = checkboxGroupInject?.max
	const min = checkboxGroupInject?.min
	return (
		(max !== undefined && value.length >= max && !isActived.value) ||
		(min !== undefined && value.length <= min && isActived.value)
	)
})

const isDisabled = computed(() => disabled.value ?? limitDisabled.value)

const checkboxButtonClass = computed(() => {
	return {
		'is-active': isActived.value,
		'is-disabled': disabled.value,
		'is-focus': focus.value,
		[`ued-checkbox-button--${size.value}`]: size.value,
	}
})

const checkboxButtonStyle = computed(() => {
	return {
		'--ued-checkbox-button-checked-text-color':
			checkboxGroupInject?.textColor ??
			handleValidColor(checkboxGroupInject?.textColor),
		'--ued-checkbox-button-checked-border-color':
			checkboxGroupInject?.fill ?? handleValidColor(checkboxGroupInject?.fill),
		'--ued-checkbox-button-checked-bg-color':
			checkboxGroupInject?.fill ?? handleValidColor(checkboxGroupInject?.fill),
	}
})

const checkboxRef = ref<HTMLInputElement>()
const checkboxOriginalRef = ref<HTMLInputElement>()

const focus = ref(false)

const handleChange = () => {
	nextTick(() => checkboxEmits('change', modelValue.value ?? false))
}
</script>
