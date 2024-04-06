<template>
	<div class="layout">
		<layout-basic />
	</div>
</template>

<script lang="ts" setup>
import LayoutBasic from './basic/index.vue'
</script>

<style lang="scss">
.layout {
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

.ued-row {
	margin-bottom: 20px;
}
.ued-row:last-child {
	margin-bottom: 0;
}
.ued-col {
	border-radius: 4px;
}

.grid-content {
	border-radius: 4px;
	min-height: 36px;
	background-color: var(--ued-color-primary-light-7);
	&-light {
		border-radius: 4px;
		min-height: 36px;
		background-color: var(--ued-color-primary-light-5);
	}
}
</style>
