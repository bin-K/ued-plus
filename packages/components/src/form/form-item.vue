<template>
	<div class="ued-form-item">
		<div class="ued-form-item__label-wrap" :style="labelWrapStyle">
			<label
				:id="formItemId"
				ref="labelRef"
				:for="formContentId"
				class="ued-form-item__label"
				:style="labelStyle"
			>
				{{ label }}
			</label>
		</div>
		<div class="ued-form-item__content">
			<slot />
		</div>
	</div>
</template>

<script lang="ts" setup>
import './styles/form-item.scss'
import { inject, computed, CSSProperties, ref, nextTick, watch } from 'vue'
import { useId } from '@ued-plus/hooks'
import { handleStringOrNumberPx, isPositiveNumber } from '@ued-plus/utils'
import { formInjectKey } from './constant'

defineOptions({ name: 'UedFormItem' })

defineProps({
	label: {
		type: String,
		default: undefined,
	},
})

const formInject = inject(formInjectKey, undefined)

const formItemId = useId('ued-form-item')
const formContentId = computed(() => {
	return useId('ued-form-item').value
})

const labelRef = ref<HTMLLabelElement>()

const labelWrapStyle = computed<CSSProperties>(() => {
	const position = {
		left: 'right',
		right: 'left',
	}
	let margin: string | undefined
	if (labelRef.value?.clientWidth && formInject?.labelWidthArr?.length) {
		const reslut = formInject?.labelWidthArr[0] - labelRef.value.clientWidth
		margin = isPositiveNumber(reslut)
			? handleStringOrNumberPx(reslut)
			: undefined
	}
	return {
		[`margin-${position[formInject?.labelPosition as keyof typeof position]}`]:
			margin,
	}
})

const labelStyle = computed<CSSProperties>(() => {
	return {
		width: handleStringOrNumberPx(formInject?.labelWidth),
	}
})

watch(
	() => formInject?.size,
	() => {
		nextTick(() => {
			if (
				formInject?.labelWidth === 'auto' &&
				formInject?.labelWidthArr &&
				labelRef.value?.clientWidth
			) {
				formInject?.labelWidthArr.push(labelRef.value.clientWidth)
				formInject.labelWidthArr.sort((a, b) => b - a)
			}
		})
	},
	{
		immediate: true,
	}
)
</script>
