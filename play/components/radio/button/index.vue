<template>
	<h2>按钮样式</h2>
	<div class="common-content radio-content">
		<div class="radio-button-basic">
			<ued-radio-button v-model="button" value="button1" />
			<ued-radio-button v-model="button" value="button2" />
			<ued-radio-button v-model="button" value="button3" />
		</div>
		<div class="radio-group-basic">
			<ued-radio-group v-model="buttonGroup">
				<ued-radio-button value="button1" />
				<ued-radio-button value="button2" />
				<ued-radio-button value="button3" />
			</ued-radio-group>
		</div>
		<div class="radio-size-basic">
			<ued-radio-group v-model="large" size="large">
				<ued-radio-button value="button1" />
				<ued-radio-button value="button2" />
				<ued-radio-button value="button3" />
			</ued-radio-group>
		</div>
		<div class="radio-size-basic">
			<ued-radio-group v-model="small" size="small">
				<ued-radio-button value="button1" />
				<ued-radio-button value="button2" />
				<ued-radio-button value="button3" />
			</ued-radio-group>
		</div>
		<div class="radio-size-basic">
			<ued-radio-group
				v-model="style"
				fill="#67c23a"
				text-color="rgba(0, 0, 0, 1)"
			>
				<ued-radio-button value="button1" />
				<ued-radio-button value="button2" />
				<ued-radio-button value="button3" />
			</ued-radio-group>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const button = ref('button1')
const buttonGroup = ref('button1')
const large = ref('button1')
const small = ref('button1')
const style = ref('button1')
</script>
