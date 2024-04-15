<template>
	<h2>基础用法</h2>
	<div class="scrollbar-content scrollbar-basic">
		<ued-scrollbar height="400px">
			<p v-for="item in 20" :key="item" class="scrollbar-demo-item">
				{{ item }}
			</p>
		</ued-scrollbar>
	</div>
</template>

<style scoped>
.scrollbar-demo-item {
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
</style>
