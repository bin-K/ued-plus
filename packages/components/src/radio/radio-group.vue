<template>
	<div class="ued-radio-group">
		<slot />
	</div>
</template>

<script lang="ts" setup>
import './styles/radio-group.scss'
import { provide, reactive, computed, nextTick, toRefs } from 'vue'
import { useId } from '@ued-plus/hooks'
import { radioGroupKey } from './constant'
import { RadioGroupProps, RadioGroupPropsType } from './radio-group'

defineOptions({ name: 'UedRadioGroup' })

const radioGroupProps = defineProps(RadioGroupProps)

const radioGroupEmits = defineEmits(['update:modelValue', 'change'])

const radioId = useId('ued-radio')

const name = computed(() => radioGroupProps.name ?? radioId.value)

const changeEvent = (val: RadioGroupPropsType['modelValue']) => {
	radioGroupEmits('update:modelValue', val)
	nextTick(() => radioGroupEmits('change', val))
}

provide(
	radioGroupKey,
	reactive({
		...toRefs(radioGroupProps),
		name,
		changeEvent,
	})
)
</script>
