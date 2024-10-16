<template>
	<h2>对齐方式</h2>
	<div class="common-content form-content form-label-position">
		<ued-radio-group v-model="labelPosition" aria-label="label position">
			<ued-radio-button value="left">Left</ued-radio-button>
			<ued-radio-button value="right">Right</ued-radio-button>
			<ued-radio-button value="top">Top</ued-radio-button>
		</ued-radio-group>
		<ued-form
			:model="formLabelPosition"
			label-width="auto"
			:label-position="labelPosition"
		>
			<ued-form-item label="radio">
				<ued-radio-group v-model="formLabelPosition.radio">
					<ued-radio :value="1" label="radio1" />
					<ued-radio :value="2" label="radio2" />
				</ued-radio-group>
			</ued-form-item>
			<ued-form-item label="radio-button">
				<ued-radio-group v-model="formLabelPosition.radioButton">
					<ued-radio-button value="button1" />
					<ued-radio-button value="button2" />
					<ued-radio-button value="button3" />
				</ued-radio-group>
			</ued-form-item>
			<ued-form-item label="checkbox">
				<ued-checkbox-group v-model="formLabelPosition.checkList">
					<ued-checkbox value="Value A" label="Option 1" />
					<ued-checkbox value="Value B" label="Option 2" />
					<ued-checkbox value="Value C" label="Option 3" disabled />
					<ued-checkbox value="Value D" label="Option 4" disabled />
				</ued-checkbox-group>
			</ued-form-item>
			<ued-form-item label="checkbox-button">
				<ued-checkbox-group v-model="formLabelPosition.buttonGroup">
					<ued-checkbox-button value="button1" />
					<ued-checkbox-button value="button2" />
					<ued-checkbox-button value="button3" />
				</ued-checkbox-group>
			</ued-form-item>
		</ued-form>
	</div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormPropsType } from '@ued-plus/components'

const labelPosition = ref<FormPropsType['labelPosition']>('right')
const formLabelPosition = reactive({
	radio: 1,
	radioButton: 'button1',
	checkList: ['Value A', 'Value D'],
	buttonGroup: ['button1'],
})
</script>
