<template>
	<div class="dialog">
		<dialog-basic />
		<dialog-full-screen />
		<dialog-modal />
		<dialog-center />
		<dialog-delay />
		<dialog-draggable />
	</div>
</template>

<script lang="ts" setup>
import DialogBasic from './basic/index.vue'
import DialogFullScreen from './full-screen/index.vue'
import DialogModal from './modal/index.vue'
import DialogCenter from './center/index.vue'
import DialogDelay from './delay/index.vue'
import DialogDraggable from './draggable/index.vue'
</script>

<style lang="scss">
.dialog-content {
	display: block;
}
</style>
