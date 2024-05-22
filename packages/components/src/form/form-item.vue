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
import {
	inject,
	computed,
	CSSProperties,
	ref,
	nextTick,
	watch,
	onMounted,
	onUpdated,
	onBeforeUnmount,
} from 'vue'
import { useResizeObserver } from '@vueuse/core'
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
const computedWidth = ref(0)

/**
 * @description 获取label的宽度
 */
const getLabelWidth = () => {
	if (labelRef.value) {
		const width = window.getComputedStyle(labelRef.value).width
		return Math.ceil(Number.parseFloat(width))
	} else {
		return 0
	}
}

/**
 * @description 更新labelWidth 数组
 * @param action update 更新 remove 移除
 */
const updateLabelWidthArr = (action: 'update' | 'remove' = 'update') => {
	nextTick(() => {
		if (formInject?.labelWidthArr) {
			if (action === 'update') {
				computedWidth.value = getLabelWidth()
			} else if (action === 'remove') {
				const index = formInject.labelWidthArr.indexOf(computedWidth.value)
				if (index > -1) {
					formInject.labelWidthArr.splice(index, 1)
				}
			}
		}
	})
}

useResizeObserver(
	computed(() => (labelRef.value ?? null) as HTMLElement | null),
	() => updateLabelWidthArr('update')
)
watch(computedWidth, (val, oldVal) => {
	if (formInject?.labelWidthArr) {
		if (val && oldVal) {
			const index = formInject.labelWidthArr.indexOf(oldVal)
			formInject.labelWidthArr.splice(index, 1, val)
		} else if (val) {
			formInject.labelWidthArr.push(val)
		}
	}
})

const calculateMargin = () => {
	let margin: string | undefined
	if (formInject?.labelWidthArr?.length) {
		const reslut =
			Math.max.apply(null, formInject.labelWidthArr) - computedWidth.value
		margin = isPositiveNumber(reslut)
			? handleStringOrNumberPx(reslut)
			: undefined
	}
	return margin
}

const labelWrapStyle = computed<CSSProperties>(() => {
	const position = {
		left: 'right',
		right: 'left',
	}
	const margin = calculateMargin()
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

onMounted(() => updateLabelWidthArr('update'))
onUpdated(() => updateLabelWidthArr('update'))
onBeforeUnmount(() => updateLabelWidthArr('remove'))
</script>
