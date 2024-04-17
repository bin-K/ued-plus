<template>
	<h2>分栏间隔</h2>
	<div class="common-content layout-content layout-gutter">
		<ued-row :gutter="20">
			<ued-col :span="6">
				<div class="grid-content" />
			</ued-col>
			<ued-col :span="6">
				<div class="grid-content-light" />
			</ued-col>
			<ued-col :span="6">
				<div class="grid-content" />
			</ued-col>
			<ued-col :span="6">
				<div class="grid-content-light" />
			</ued-col>
		</ued-row>
	</div>
</template>
