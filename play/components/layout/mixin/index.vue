<template>
	<h2>混合布局</h2>
	<div class="common-content layout-content layout-mixin">
		<ued-row :gutter="20">
			<ued-col :span="16">
				<div class="grid-content" />
			</ued-col>
			<ued-col :span="8">
				<div class="grid-content-light" />
			</ued-col>
		</ued-row>
		<ued-row :gutter="20">
			<ued-col :span="8">
				<div class="grid-content" />
			</ued-col>
			<ued-col :span="4">
				<div class="grid-content-light" />
			</ued-col>
			<ued-col :span="8">
				<div class="grid-content" />
			</ued-col>
			<ued-col :span="4">
				<div class="grid-content-light" />
			</ued-col>
		</ued-row>
		<ued-row :gutter="20">
			<ued-col :span="4">
				<div class="grid-content" />
			</ued-col>
			<ued-col :span="16">
				<div class="grid-content-light" />
			</ued-col>
			<ued-col :span="4">
				<div class="grid-content" />
			</ued-col>
		</ued-row>
	</div>
</template>
