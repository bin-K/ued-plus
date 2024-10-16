<template>
	<div class="ued-checkbox-group">
		<slot />
	</div>
</template>

<script setup lang="ts">
import './styles/checkbox-group.scss'
import { computed, provide, toRefs, reactive, nextTick } from 'vue'
import { useId } from '@ued-plus/hooks'
import { checkboxGroupKey } from './constant'
import { CheckboxGroupProps, CheckboxGroupValueType } from './checkbox-group'
import { isArray } from '@ued-plus/utils'

defineOptions({ name: 'UedCheckboxGroup' })

const checkboxGroupProps = defineProps(CheckboxGroupProps)

const checkboxGroupEmits = defineEmits({
	'update:modelValue': (val: CheckboxGroupValueType) => isArray(val),
	change: (val: CheckboxGroupValueType) => isArray(val),
})

const checkboxId = useId('ued-checkout')

const name = computed(() => checkboxGroupProps.name ?? checkboxId.value)

const changeEvent = async (val: CheckboxGroupValueType) => {
	checkboxGroupEmits('update:modelValue', val)
	nextTick(() => checkboxGroupEmits('change', val))
}

provide(
	checkboxGroupKey,
	reactive({
		...toRefs(checkboxGroupProps),
		name,
		changeEvent,
	})
)
</script>
