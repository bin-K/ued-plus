<template>
	<h2>响应式布局</h2>
	<div class="layout-content layout-bootstrap">
		<ued-row :gutter="10">
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
