<template>
	<h2>禁用全部</h2>
	<div class="common-content form-content form-disabled">
		<ued-form :model="formDisabled" :disabled="true">
			<ued-form-item label="radio">
				<ued-radio-group v-model="formDisabled.radio">
					<ued-radio :value="1" label="radio1" />
					<ued-radio :value="2" label="radio2" />
				</ued-radio-group>
			</ued-form-item>
			<ued-form-item label="radio-button">
				<ued-radio-group v-model="formDisabled.radioButton">
					<ued-radio-button value="button1" />
					<ued-radio-button value="button2" />
					<ued-radio-button value="button3" />
				</ued-radio-group>
			</ued-form-item>
		</ued-form>
	</div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formDisabled = reactive({
	radio: 1,
	radioButton: 'button1',
})
</script>
