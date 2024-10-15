<template>
	<div class="checkbox">
		<checkbox-basic />
		<checkbox-size />
		<checkbox-disabled />
		<checkbox-basic-group />
		<checkbox-border />
		<checkbox-button />
	</div>
</template>

<script lang="ts" setup>
import checkboxBasic from './basic/index.vue'
import checkboxSize from './size/index.vue'
import CheckboxDisabled from './disabled/index.vue'
import CheckboxBasicGroup from './group/index.vue'
import CheckboxBorder from './border/index.vue'
import CheckboxButton from './button/index.vue'
</script>
