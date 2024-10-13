<template>
	<div class="ued-checkbox-group">
		<slot />
	</div>
</template>

<script setup lang="ts">
import './styles/checkbox-group.scss'
import { computed, provide, toRefs, reactive, nextTick } from 'vue'
import { useId } from '@ued-plus/hooks'
import { checkboxGroupKey } from './constant.ts'
import {
	CheckboxGroupProps,
	CheckboxValueType,
	CheckboxGroupValueType,
} from './checkbox-group.ts'
import { isArray } from '@ued-plus/utils'

defineOptions({ name: 'UedCheckboxGroup' })

const checkboxGroupProps = defineProps(CheckboxGroupProps)

const checkboxGroupEmits = defineEmits({
	'update:modelValue': (val: CheckboxGroupValueType) => isArray(val),
	change: (val: CheckboxValueType[]) => isArray(val),
})

const checkboxId = useId('ued-checkout')

const name = computed(() => checkboxGroupProps.name ?? checkboxId.value)

const changeEvent = async (val: CheckboxGroupValueType) => {
	checkboxGroupEmits('update:modelValue', val)
	await nextTick()
	checkboxGroupEmits('change', val)
}

const modelValue = computed({
	get() {
		return checkboxGroupProps.modelValue
	},
	set(val: CheckboxGroupValueType) {
		changeEvent(val)
	},
})

provide(
	checkboxGroupKey,
	reactive({
		...toRefs(checkboxGroupProps),
		name,
		modelValue,
		changeEvent,
	})
)
</script>
