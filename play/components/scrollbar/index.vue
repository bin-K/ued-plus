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
	&-content {
		display: flex;
		flex-direction: column;
		border: 1px solid #e4e7ed;
		padding: 30px;
		border-radius: 5px;
		min-width: 600px;
		& > div {
			margin-bottom: 15px;

			&:last-child {
				margin: 0;
			}
		}
	}
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
