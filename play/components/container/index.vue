<template>
	<div class="container">
		<container-basic />
	</div>
</template>

<script lang="ts" setup>
import ContainerBasic from './basic/index.vue'
</script>

<style lang="scss">
.container {
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
