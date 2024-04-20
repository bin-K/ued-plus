<template>
	<div class="dialog">
		<dialog-basic />
		<dialog-full-screen />
		<dialog-modal />
	</div>
</template>

<script lang="ts" setup>
import DialogBasic from './basic/index.vue'
import DialogFullScreen from './full-screen/index.vue'
import DialogModal from './modal/index.vue'
</script>

<style lang="scss">
.dialog-content {
	display: block;
}
</style>
