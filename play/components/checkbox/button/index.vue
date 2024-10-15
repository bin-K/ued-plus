<template>
	<h2>按钮样式</h2>
	<div class="common-content checkbox-content">
		<div class="checkbox-button-basic">
			<ued-checkbox-button v-model="button1" value="button1" />
			<ued-checkbox-button v-model="button2" value="button2" />
			<ued-checkbox-button v-model="button3" value="button3" />
		</div>
		<div class="checkbox-group-basic">
			<ued-checkbox-group v-model="buttonGroup">
				<ued-checkbox-button value="button1" />
				<ued-checkbox-button value="button2" />
				<ued-checkbox-button value="button3" />
			</ued-checkbox-group>
		</div>
		<div class="checkbox-size-basic">
			<ued-checkbox-group v-model="large" size="large">
				<ued-checkbox-button value="button1" />
				<ued-checkbox-button value="button2" />
				<ued-checkbox-button value="button3" />
			</ued-checkbox-group>
		</div>
		<div class="checkbox-size-basic">
			<ued-checkbox-group v-model="small" size="small">
				<ued-checkbox-button value="button1" />
				<ued-checkbox-button value="button2" disabled />
				<ued-checkbox-button value="button3" />
			</ued-checkbox-group>
		</div>
		<div class="checkbox-size-basic">
			<ued-checkbox-group
				v-model="style"
				fill="#67c23a"
				text-color="rgba(0, 0, 0, 1)"
			>
				<ued-checkbox-button value="button1" />
				<ued-checkbox-button value="button2" />
				<ued-checkbox-button value="button3" />
			</ued-checkbox-group>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const button1 = ref(true)
const button2 = ref(false)
const button3 = ref(false)
const buttonGroup = ref(['button1'])
const large = ref(['button1'])
const small = ref(['button1'])
const style = ref(['button1'])
</script>
