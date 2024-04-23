<template>
	<div class="dialog">
		<dialog-basic />
		<dialog-full-screen />
		<dialog-modal />
		<dialog-center />
		<dialog-delay />
		<dialog-draggable />
		<dialog-close-icon />
		<dialog-event />
		<dialog-header />
		<dialog-nested />
	</div>
</template>

<script lang="ts" setup>
import DialogBasic from './basic/index.vue'
import DialogFullScreen from './fullscreen/index.vue'
import DialogModal from './modal/index.vue'
import DialogCenter from './center/index.vue'
import DialogDelay from './delay/index.vue'
import DialogDraggable from './draggable/index.vue'
import DialogCloseIcon from './close-icon/index.vue'
import DialogEvent from './event/index.vue'
import DialogHeader from './header/index.vue'
import DialogNested from './nested/index.vue'
</script>

<style lang="scss">
.dialog-content {
	display: block;
}
</style>
