<template>
	<div class="layout">
		<layout-basic />
		<layout-gutter />
		<layout-mixin />
		<layout-offset />
		<layout-pull-push />
		<layout-justify-align />
		<layout-bootstrap />
	</div>
</template>

<script lang="ts" setup>
import LayoutBasic from './basic/index.vue'
import LayoutGutter from './gutter/index.vue'
import LayoutMixin from './mixin/index.vue'
import LayoutOffset from './offset/index.vue'
import LayoutPullPush from './pull-push/index.vue'
import LayoutJustifyAlign from './justify-align/index.vue'
import LayoutBootstrap from './bootstrap/index.vue'
</script>

<style lang="scss">
.ued-row {
	margin-bottom: 20px;
	&:last-child {
		margin-bottom: 0;
	}
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
