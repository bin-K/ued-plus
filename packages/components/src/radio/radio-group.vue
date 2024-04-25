<template>
	<div class="ued-radio-group">
		<slot />
	</div>
</template>

<script lang="ts" setup>
import './styles/radio-group.scss'
import { provide, reactive, computed } from 'vue'
import { useId } from '@ued-plus/hooks'
import { radioGroupKey } from './constant'
import { RadioGroupProps, RadioGroupPropsType } from './radio-group'

defineOptions({ name: 'UedRadioGroup' })

const radioGroupProps = defineProps(RadioGroupProps)

const radioId = useId('ued-radio')

const name = computed(() => radioGroupProps.name ?? radioId.value)

const changeEvent = (val: RadioGroupPropsType['modelValue']) => {
	console.log(val)
}

provide(
	radioGroupKey,
	reactive({
		...radioGroupProps,
		name,
		changeEvent,
	})
)
</script>
