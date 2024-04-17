<template>
	<h2>列偏移</h2>
	<div class="common-content layout-content layout-offet">
		<ued-row :gutter="20">
			<ued-col :span="6">
				<div class="grid-content" />
			</ued-col>
			<ued-col :span="6" :offset="6">
				<div class="grid-content-light" />
			</ued-col>
		</ued-row>
		<ued-row :gutter="20">
			<ued-col :span="6" :offset="6">
				<div class="grid-content" />
			</ued-col>
			<ued-col :span="6" :offset="6">
				<div class="grid-content-light" />
			</ued-col>
		</ued-row>
		<ued-row :gutter="20">
			<ued-col :span="12" :offset="6">
				<div class="grid-content" />
			</ued-col>
		</ued-row>
	</div>
</template>
