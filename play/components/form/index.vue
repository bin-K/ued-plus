<template>
	<div class="form">
		<form-basic />
		<form-disabled />
		<form-inline />
		<form-label-position />
		<form-size />
	</div>
</template>

<script lang="ts" setup>
import FormBasic from './basic/index.vue'
import FormDisabled from './disabled/index.vue'
import FormInline from './inline/index.vue'
import FormLabelPosition from './label-position/index.vue'
import FormSize from './size/index.vue'
</script>
