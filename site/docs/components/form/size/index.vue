<template>
	<div class="common-content form-content form-label-position">
		<ued-radio-group v-model="size" aria-label="label position">
			<ued-radio-button value="small">small</ued-radio-button>
			<ued-radio-button value="default">default</ued-radio-button>
			<ued-radio-button value="large">large</ued-radio-button>
		</ued-radio-group>
		<ued-form :model="formSize" label-width="auto" :size="size">
			<ued-form-item label="radio">
				<ued-radio-group v-model="formSize.radio">
					<ued-radio :value="1" label="radio1" />
					<ued-radio :value="2" label="radio2" />
				</ued-radio-group>
			</ued-form-item>
			<ued-form-item label="radio-button">
				<ued-radio-group v-model="formSize.radioButton">
					<ued-radio-button value="button1" />
					<ued-radio-button value="button2" />
					<ued-radio-button value="button3" />
				</ued-radio-group>
			</ued-form-item>
		</ued-form>
	</div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormPropsType } from '@ued-plus/components'

const size = ref<FormPropsType['size']>('default')
const formSize = reactive({
	radio: 1,
	radioButton: 'button1',
})
</script>
