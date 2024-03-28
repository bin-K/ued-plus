<template>
	<div class="icon">
		<icon-basic />
		<icon-svg />
		<icon-dot />
	</div>
</template>

<script lang="ts" setup>
import IconBasic from './basic/index.vue'
import IconSvg from './svg/index.vue'
import IconDot from './dot/index.vue'
</script>

<style lang="scss">
.icon {
	&-content {
		display: flex;
		flex-direction: column;
		width: 700px;
		padding: 15px;

		& > div {
			margin-bottom: 15px;

			&:last-child {
				margin: 0;
			}
		}
	}
}
</style>
