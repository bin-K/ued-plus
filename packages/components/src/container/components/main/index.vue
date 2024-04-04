<template>
	<main class="ued-main">
		<slot />
	</main>
</template>

<script lang="ts" setup>
import '../../styles/main.scss'

defineOptions({ name: 'UedMain' })
</script>
