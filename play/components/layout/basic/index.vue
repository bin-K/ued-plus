<template>
	<div class="layout-content layout-basic">
		<ued-row>
			<ued-col :span="24">
				<div class="grid-content" />
			</ued-col>
		</ued-row>
	</div>
</template>

<style lang="scss">
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
}
</style>
