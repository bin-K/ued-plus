<template>
	<div class="ued-row">
		<slot />
	</div>
</template>

<script lang="ts" setup>
import './styles/row.scss'

defineOptions({ name: 'UedRow' })
</script>
