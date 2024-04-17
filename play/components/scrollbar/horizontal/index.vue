<template>
	<h2>横向滚动</h2>
	<div class="common-content scrollbar-content scrollbar-horizontal">
		<ued-scrollbar>
			<div class="scrollbar-flex-content">
				<p v-for="item in 20" :key="item" class="scrollbar-demo-item">
					{{ item }}
				</p>
			</div>
		</ued-scrollbar>
	</div>
</template>

<style lang="scss" scoped>
.scrollbar-flex-content {
	display: flex;
}
.scrollbar-demo-item {
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	height: 50px;
	margin: 10px;
	text-align: center;
	border-radius: 4px;
	background: var(--ued-color-danger-light-9);
	color: var(--ued-color-danger);
}
</style>
