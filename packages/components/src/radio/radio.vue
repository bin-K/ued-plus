<template>
	<label ref="radioRef" class="ued-radio" :class="radioClass">
		<span class="ued-radio__input" :class="radioClass">
			<input
				ref="radioOriginalRef"
				v-model="modelValue"
				class="ued-radio__original"
				type="radio"
				:value="value"
				:name="name || radioGroupInject?.name"
				:disabled="disabled"
				@change="handleChange"
				@focus="focus = true"
				@blur="focus = false"
				@click.stop
			/>
			<span class="ued-radio__inner" />
		</span>
		<span class="ued-radio__label">
			<slot v-if="$slots.default" />
			<template v-else>{{ label ?? value }}</template>
		</span>
	</label>
</template>

<script lang="ts" setup>
import './styles/index.scss'
import { ref, computed, useSlots, inject, nextTick } from 'vue'
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
	border: {
		type: Boolean,
		default: false,
	},
	name: {
		type: String,
		default: undefined,
	},
	size: {
		type: String,
		default: undefined,
	},
})

const radioEmits = defineEmits(['change', 'update:modelValue'])

const $slots = useSlots()
const radioGroupInject = inject(radioGroupKey, undefined)

const disabled = computed(
	() => radioGroupInject?.disabled ?? raidoProps.disabled
)

const size = computed(() => radioGroupInject?.size ?? raidoProps.size)

const modelValue = computed({
	get() {
		return radioGroupInject?.modelValue ?? raidoProps.modelValue
	},
	set(val) {
		if (radioGroupInject) {
			radioGroupInject.changeEvent(val)
		} else {
			radioEmits('update:modelValue', val)
		}
	},
})

const radioClass = computed(() => {
	return {
		'is-disabled': disabled.value,
		'is-checked': modelValue.value === raidoProps.value,
		'is-focus': focus.value,
		'is-bordered': raidoProps.border,
		[`ued-radio--${size.value}`]: size.value,
	}
})

const radioOriginalRef = ref<HTMLInputElement>()

const focus = ref(false)

const handleChange = () => {
	nextTick(() => {
		radioEmits('change', modelValue.value)
	})
}
</script>
