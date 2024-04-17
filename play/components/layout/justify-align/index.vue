<template>
	<h2>对齐方式</h2>
	<div class="common-content layout-content">
		<div class="layout-justify">
			<ued-row>
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content-light" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
			</ued-row>
			<ued-row justify="center">
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content-light" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
			</ued-row>
			<ued-row justify="end">
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content-light" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
			</ued-row>
			<ued-row justify="space-between">
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content-light" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
			</ued-row>
			<ued-row justify="space-arround">
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content-light" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
			</ued-row>
			<ued-row justify="space-evenly">
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content-light" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
			</ued-row>
		</div>
		<div class="layout-align">
			<ued-row align="top">
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content-light" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
			</ued-row>
		</div>
		<div class="layout-align">
			<ued-row align="center">
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content-light" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
			</ued-row>
		</div>
		<div class="layout-align">
			<ued-row align="bottom">
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content-light" />
				</ued-col>
				<ued-col :span="6">
					<div class="grid-content" />
				</ued-col>
			</ued-row>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.layout-align {
	& > .ued-row {
		height: 80px;
		border: 1px solid #e4e7ed;
	}
}
</style>
