<template>
	<h2>响应式布局</h2>
	<div class="layout-content layout-bootstrap">
		<ued-row :gutter="10">
			<ued-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
				<div class="grid-content" />
			</ued-col>
			<ued-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
				<div class="grid-content-light" />
			</ued-col>
			<ued-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
				<div class="grid-content" />
			</ued-col>
			<ued-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
				<div class="grid-content-light" />
			</ued-col>
		</ued-row>
		<ued-row :gutter="10">
			<ued-col :xs="{ span: 8 }" :sm="6" :md="4" :lg="3" :xl="1">
				<div class="grid-content" />
			</ued-col>
			<ued-col :xs="{ span: 4 }" :sm="6" :md="8" :lg="9" :xl="11">
				<div class="grid-content-light" />
			</ued-col>
			<ued-col :xs="{ span: 4 }" :sm="6" :md="8" :lg="9" :xl="11">
				<div class="grid-content" />
			</ued-col>
			<ued-col :xs="{ span: 8 }" :sm="6" :md="4" :lg="3" :xl="1">
				<div class="grid-content-light" />
			</ued-col>
		</ued-row>
	</div>
</template>
