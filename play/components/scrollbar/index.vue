<template>
	<scrollbar-basic />
	<scrollbar-horizontal />
	<scrollbar-max-height />
	<scrollbar-set-scroll />
</template>

<script lang="ts" setup>
import ScrollbarBasic from './basic/index.vue'
import ScrollbarHorizontal from './horizontal/index.vue'
import ScrollbarMaxHeight from './max-height/index.vue'
import ScrollbarSetScroll from './set-scroll/index.vue'
</script>

<style lang="scss">
.scrollbar {
	&-demo-item {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
		margin: 10px;
		text-align: center;
		border-radius: 4px;
		background: var(--ued-color-primary-light-9);
		color: var(--ued-color-primary);
	}
}
</style>
