<template>
	<h2>基础用法</h2>
	<div class="common-content form-content form-basic">
		<ued-form :model="formBasic" label-width="auto" style="max-width: 600px">
			<ued-form-item label="radio">
				<ued-radio-group v-model="formBasic.radio">
					<ued-radio :value="1" label="radio1" />
					<ued-radio :value="2" label="radio2" />
				</ued-radio-group>
			</ued-form-item>
			<ued-form-item label="radio-button">
				<ued-radio-group v-model="formBasic.radioButton">
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

const formBasic = reactive({
	radio: 1,
	radioButton: 'button1',
})
</script>
