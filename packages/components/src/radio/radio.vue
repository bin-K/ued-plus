<template>
	<label class="ued-radio" :class="radioClass">
		<span class="ued-radio__input" :class="radioClass">
			<input
				ref="radioOriginalRef"
				class="ued-radio__original"
				type="radio"
				:value="value"
				@click="radioClick"
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
import { ref, computed, useSlots } from 'vue'

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

const radioEmits = defineEmits(['update:modelValue'])

const $slots = useSlots()

const radioClass = computed(() => {
	return {
		'is-disibled': raidoProps.disabled,
		'is-checked': raidoProps.modelValue === raidoProps.value,
	}
})

const radioOriginalRef = ref<HTMLInputElement>()
const radioClick = () => {
	radioEmits('update:modelValue', radioOriginalRef.value?.value)
}
</script>
