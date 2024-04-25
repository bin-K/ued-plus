<template>
	<label class="ued-radio" :class="radioClass">
		<span class="ued-radio__input" :class="radioClass">
			<input
				ref="radioOriginalRef"
				class="ued-radio__original"
				type="radio"
				:value="value"
				:name="radioGroupInject?.name"
				@change="handleChange"
				@focus="handleFocus"
				@click.stop
			/>
			<span class="ued-radio__inner" />
		</span>
		<span class="ued-radio__label">
			<slot v-if="$slots.default" />
			<template v-else>{{ label }}</template>
		</span>
	</label>
</template>

<script lang="ts" setup>
import './styles/index.scss'
import { ref, computed, useSlots, inject, nextTick } from 'vue'
import { isBoolean, isNumber, isString } from '@ued-plus/utils'
import { radioGroupKey } from './constant'

defineOptions({ name: 'UedRadio' })

const raidoProps = defineProps({
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
	disabled: {
		type: Boolean,
		default: false,
	},
})

const radioEmits = defineEmits({
	change: (val: string | number | boolean | undefined) =>
		isBoolean(val) || isNumber(val) || isString(val),
	'update:modelValue': (val: string | number | boolean | undefined) =>
		isBoolean(val) || isNumber(val) || isString(val),
})

const $slots = useSlots()
const radioGroupInject = inject(radioGroupKey, undefined)

const disabled = computed(
	() => radioGroupInject?.disabled ?? raidoProps.disabled
)
const modelValue = computed({
	get() {
		return radioGroupInject?.modelValue ?? raidoProps.modelValue
	},
	set(val) {
		if (radioGroupInject?.modelValue) {
			radioGroupInject.changeEvent(val)
		} else {
			radioEmits('update:modelValue', val)
		}
	},
})

const radioClass = computed(() => {
	return {
		'is-disibled': disabled.value,
		'is-checked': modelValue.value === raidoProps.value,
	}
})

const radioOriginalRef = ref<HTMLInputElement>()

const handleFocus = (e: FocusEvent) => {
	console.log(e)
}

const handleChange = () => {
	nextTick(() => {
		radioEmits('change', modelValue.value)
	})
}
</script>
