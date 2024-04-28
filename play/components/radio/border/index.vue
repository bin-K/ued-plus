<template>
	<h2>是否带边框</h2>
	<div class="common-content radio-content">
		<div class="radio-border-group">
			<ued-radio-group v-model="border">
				<ued-radio border :value="1" label="radio1" />
				<ued-radio :value="2" label="radio2" />
			</ued-radio-group>
		</div>
		<div class="radio-border-group">
			<ued-radio-group v-model="borderGroup" border>
				<ued-radio :value="1" label="radio1" />
				<ued-radio :value="2" label="radio2" />
			</ued-radio-group>
		</div>
		<div class="radio-border-group">
			<ued-radio-group v-model="borderGroupDisabled" border disabled>
				<ued-radio :value="1" label="radio1" />
				<ued-radio :value="2" label="radio2" />
			</ued-radio-group>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const border = ref(1)
const borderGroup = ref(1)
const borderGroupDisabled = ref(1)
</script>
