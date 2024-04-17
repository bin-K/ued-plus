<template>
	<h2>基础用法</h2>
	<div class="common-content scrollbar-content scrollbar-basic">
		<ued-scrollbar height="400px">
			<p v-for="item in 20" :key="item" class="scrollbar-demo-item">
				{{ item }}
			</p>
		</ued-scrollbar>
	</div>
</template>
