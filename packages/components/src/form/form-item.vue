<template>
	<div class="ued-form-item">
		<div class="ued-form-item__label-wrap">
			<label
				:id="formItemId"
				:for="formItemId"
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
import { inject, computed, CSSProperties } from 'vue'
import { useId } from '@ued-plus/hooks'
import { formInjectKey } from './constant'

const formInject = inject(formInjectKey, undefined)
defineProps({
	label: {
		type: String,
		default: undefined,
	},
})

const formItemId = useId('ued-form-item')

const labelStyle = computed<CSSProperties>(() => {
	return {
		width: formInject?.labelWidth,
	}
})

defineOptions({ name: 'UedFormItem' })
</script>
