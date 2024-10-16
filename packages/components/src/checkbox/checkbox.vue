<template>
	<label ref="checkboxRef" class="ued-checkbox" :class="checkboxClass">
		<span class="ued-checkbox__input" :class="checkboxClass">
			<input
				ref="checkboxOriginalRef"
				v-model="modelValue"
				type="checkbox"
				class="ued-checkbox__original"
				:indeterminate="indeterminate"
				:disabled="isDisabled"
				:value="value"
				:name="name || checkboxGroupInject?.name"
				@focus="focus = true"
				@blur="focus = false"
				@change="handleChange"
				@click.stop
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
} from '@ued-plus/utils'
import { CheckboxValueType, CheckboxGroupValueType } from './checkbox-group'

defineOptions({ name: 'UedCheckbox' })

const checkboxEmits = defineEmits({
	'update:modelValue': (val) =>
		isString(val) || isNumber(val) || isBoolean(val),
	change: (val: CheckboxValueType | CheckboxGroupValueType) =>
		isString(val) || isNumber(val) || isBoolean(val) || isArray(val),
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
	border: {
		type: Boolean,
		default: false,
	},
	indeterminate: {
		type: Boolean,
		default: false,
	},
})

const $slots = useSlots()
const checkboxGroupInject = inject(checkboxGroupKey, undefined)
const formInject = inject(formInjectKey, undefined)

const modelValue = computed({
	get() {
		return checkboxGroupInject?.modelValue ?? checkboxProps.modelValue
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
	return checkboxProps.size ?? checkboxGroupInject?.size ?? formInject?.disabled
})

const disabled = computed(() => {
	return (
		checkboxProps.disabled ??
		checkboxGroupInject?.disabled ??
		formInject?.disabled
	)
})

const border = computed(
	() => checkboxGroupInject?.border ?? checkboxProps.border
)

const selfModel = ref<unknown>(false)
const isChecked = computed(() => {
	const value =
		checkboxGroupInject?.modelValue ?? modelValue.value ?? selfModel.value
	if (isBoolean(value)) {
		return value
	} else if (isArray(value)) {
		if (isObject(checkboxProps.value)) {
			return value.map(toRaw).some((o) => isEqual(o, checkboxProps.value))
		} else {
			return value.map(toRaw).includes(checkboxProps.value)
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
		(max !== undefined && value.length >= max && !isChecked.value) ||
		(min !== undefined && value.length <= min && isChecked.value)
	)
})

const isDisabled = computed(() => disabled.value ?? limitDisabled.value)

const checkboxClass = computed(() => {
	return {
		'is-checked': isChecked.value,
		'is-disabled': isDisabled.value,
		'is-bordered': border.value,
		'is-focus': focus.value,
		'is-indeterminate': checkboxProps.indeterminate,
		[`ued-checkbox--${size.value}`]: size.value,
	}
})

const checkboxRef = ref<HTMLInputElement>()
const checkboxOriginalRef = ref<HTMLInputElement>()

const focus = ref(false)

const handleChange = () => {
	nextTick(() => checkboxEmits('change', modelValue.value ?? false))
}
</script>
