<template>
	<scrollbar-basic />
	<scrollbar-horizontal />
</template>

<script lang="ts" setup>
import ScrollbarBasic from './basic/index.vue'
import ScrollbarHorizontal from './horizontal/index.vue'
</script>

<style lang="scss">
.scrollbar {
	&-content {
		display: flex;
		flex-direction: column;
		width: 800px;
		border: 1px solid #e4e7ed;
		padding: 30px;
		border-radius: 5px;

		& > div {
			margin-bottom: 15px;

			&:last-child {
				margin: 0;
			}
		}
	}
}
</style>
